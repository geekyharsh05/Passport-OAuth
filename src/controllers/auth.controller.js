import passport from "passport";

class AuthController {
  static homePage(_req, res) {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
  }

  static googleAuth(req, res, next) {
    passport.authenticate("google", {
      scope: ["email", "profile"],
    })(req, res, next);
  }

  static googleCallback(req, res) {
    passport.authenticate("google", {
      successRedirect: "/auth/protected",
      failureRedirect: "/auth/google/failure",
    })(req, res);
  }

  static protectedRoute(req, res) {
    res.send(`Hello, ${req.user.displayName}`);
  }

  static logout(req, res) {
    req.logout((err) => {
      if (err) {
        console.error("Error logging out:", err);
        return res.status(500).send("Failed to log out");
      }
      req.session.destroy(() => {
        res.send("Goodbye!");
      });
    });
  }

  static googleFailure(req, res) {
    res.send("Failed to authenticate");
  }
}

export default AuthController;
