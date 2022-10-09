import passport from "passport";
const KakaoStrategy = require("passport-kakao").Strategy;
import { kakao } from "../../config/constants";
import User from "../../models/user-model";
import Stamp from "../../models/stamp-model";
import { stamps } from "../../common/stamp-data";
import { StampParams } from "../../common/type";

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
          const existUser: typeof User | null = await User.findOne({
            email: profile._json.kakao_account.email,
          });

          if (existUser) {
            done(null, existUser);
          } else {
            const newUser = await User.create({
              email: profile._json.kakao_account.email,
              nickname: profile._json.properties.nickname,
              profileImg: profile._json.properties.profile_image,
            });

            const newStamps: any = await Promise.all(
              stamps.map(async (stamp) => {
                const newStamp = await Stamp.create({
                  stampName: stamp.stampName,
                  stampImage: stamp.stampImage,
                  latitude: stamp.latitude,
                  longitude: stamp.longitude,
                  userId: newUser,
                });

                return newStamp;
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

export default KakaoModule;
