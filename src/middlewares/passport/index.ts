import passport from "passport";
const KakaoStrategy = require("passport-kakao").Strategy;
import { kakao } from "../../common/constants";
import { User } from "src/models/user";
import { TypeChecker } from "src/common/type-checker";

export const KakaoModule = (app: any) => {
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
          const user = await User.findOne({
            where: {
              email: profile._json.kakao_account.email,
            },
          });

          if (TypeChecker.isNull(user)) {
            done(null, user);
          } else {
            const newUser = await User.create({
              email: profile._json.kakao_account.email,
              nickname: profile._json.properties.nickname,
              profileImg: profile._json.properties.profile_image,
            });

            const stamps = await Stamp.findAll();


            const newStamps: any = await Promise.all(
              stamps.map(async (stamp) => {
                return await Stamp.create({
                  stampName: stamp.stampName,
                  stampImage: stamp.stampImage,
                  latitude: stamp.latitude,
                  longitude: stamp.longitude,
                  userId: newUser,
                });
              })
            );

            await User.updateOne(
              { _id: newUser._id },
              {
                $set: {
                  stamps: newStamps,
                },
              }
            );

            done(null, newUser);
          }
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
