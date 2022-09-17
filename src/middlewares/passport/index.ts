import User from "../../models/user-model";
import passport from "passport";
const KakaoStrategy = require("passport-kakao").Strategy;
import { kakao } from "../../config/constants";
import { UserParams } from "../../common/type";
import { creatUser, getUserByEmail } from "../../services/user-services";

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
          const email = profile._json.kakao_account.email;
          const existUser: UserParams | null = await getUserByEmail(email);

          if (existUser) {
            return done(null, existUser);
          }

          const params: UserParams = {
            email: profile._json.kakao_account.email,
            nickname: profile._json.properties.nickname,
            profileImg: profile._json.properties.profile_image,
          };

          const newUser: UserParams = await creatUser(params);

          return done(null, newUser);
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
