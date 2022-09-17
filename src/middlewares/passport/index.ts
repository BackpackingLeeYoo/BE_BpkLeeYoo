import User from "../../models/user-model";
import KakaoStratege from "./kakao-strategy";

const kakaoPassport = (passport: any) => {
  passport.serializeUser((user: any, done: any) => {
    done(null, user);
  });

  passport.deserializeUser((user: any, done: any) => {
    User.findOne({ _id: user.userId })
      .then((user) => done(null, user))
      .catch((err) => done(err));
  });

  KakaoStratege(passport);
};

export default kakaoPassport;
