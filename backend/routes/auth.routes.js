import authenticate  from "../middleware/index.js";
import {signup, signin} from "../controllers/auth.controller.js";
import auth from "../config/auth.config.js";

const authRoutes = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      authenticate.checkDuplicateUsernameOrEmail,
      authenticate.checkRolesExisted
    ],
    signup.signup
  );

  app.post("/api/auth/signin", signin.signin);
};
export default authRoutes
