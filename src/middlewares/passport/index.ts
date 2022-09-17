import User from "../../models/user-model";
import passport from "passport";
const KakaoStrategy = require("passport-kakao").Strategy;
import { kakao } from "../../config/constants";
import { UserParams } from "../../common/type";

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

          console.log("ck", existUser);

          if (existUser) {
            done(null, existUser);
          }

          const newUser: UserParams = await User.create({
            email: profile._json.kakao_account.email,
            nickname: profile._json.properties.nickname,
            profileImg: profile._json.properties.profile_image,
          });

          done(null, newUser);
        } catch (error) {
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
