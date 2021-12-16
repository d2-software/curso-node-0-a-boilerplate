const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");

passport.use("local", new LocalStrategy(
  ((username, password, done) => {
    // done(err); <- Ha ocurrido un error.
    // done(null, false); <- El usuario no existe o contraseña no válida.
    // done(null, user); <- Todo va bien. El usuario existe y la contraseña es válida.

    // if (username === "error") {
    //   done(new Error("Esto es un error de autenticación"));
    // }
    //
    // if (username === "no-valido") {
    //   return done(null, false);
    // }

    done(null, { username, password, autenticado: true });
  })
));

module.exports = passport;
