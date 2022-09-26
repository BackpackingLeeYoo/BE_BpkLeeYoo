import passport from "passport";
const KakaoStrategy = require("passport-kakao").Strategy;
import { kakao } from "../../config/constants";
import { StampParams, UserParams, UserStampParams } from "../../common/type";
import User from "../../models/user-model";
import Stamp from "../../models/stamp-model";
import UserStamp from "../../models/user-stamp-model";

const KakaoModule = (app: any) => {
  app.use(passport.initialize());

  passport.use(
    new KakaoStrategy(
      {
        clientID: kakao.kakaoId,
        callbackURL: kakao.kakaoUrl,
      },
      async (
        accessToken: string,
        refreshToken: string,
        profile: any,
        done: any
      ) => {
        try {
          const existUser: UserParams | null = await User.findOne({
            email: profile._json.kakao_account.email,
          });
          console.log(existUser);

          if (existUser) {
            done(null, existUser);
          }

          const newUser: UserParams = await User.create({
            email: profile._json.kakao_account.email,
            nickname: profile._json.properties.nickname,
            profileImg: profile._json.properties.profile_image,
          });

          console.log("newUser", newUser);

          const stamps = await Stamp.find({});

          await UserStamp.create({
            userId: newUser.userId,
            stamps: [...stamps],
          });

          done(null, newUser);
        } catch (error) {
          console.error(error);
          done(error);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user as any);
  });
};

export default KakaoModule;
