const isLoggedIn = (req, res, next) => {
  if (req.user) {
    return next();
  }
  res.sendStatus(401); 
};

export default isLoggedIn;
