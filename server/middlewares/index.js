import expressJwt from "express-jwt";

export const hasAuthorization = (req, res, next) => {
  const authorized = req.user && req.auth && req.profile._id === req.auth._id;
  if (!authorized) {
    return res.status(403).json({
      error: "User is not authorized",
    });
  }
  next();
};

export const signIn = expressJwt({
  secret: "hello",
  algorithms: ["HS256"],
  credentialsRequired: true,
  getToken: function fromHeaderOrQuerystring(req) {
    if (req.cookies && req.cookies.token) {
      return req.cookies.token;
    }
    return null;
  },
});
