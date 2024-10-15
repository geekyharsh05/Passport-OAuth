import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import { Strategy as GitHubStrategy } from "passport-github2";
import dotenv from "dotenv";

dotenv.config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ??
        "http://localhost:8080/auth/google/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL:
        process.env.GITHUB_CALLBACK_URL ??
        "http://localhost:8080/auth/github/callback",
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

// Serialize user into the session
passport.serializeUser(function (user, done) {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser(function (user, done) {
  done(null, user);
});
