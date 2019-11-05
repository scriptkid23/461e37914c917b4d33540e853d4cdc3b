const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;

passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function (email, password, cb) {
        console.log("auth.passport.js line 14",email,password)
        //Assume there is a DB module pproviding a global UserModel
        // return UserModel.findOne({email, password})
        //     .then(user => {
        //         if (!user) {
        //             return cb(null, false, {message: 'Incorrect email or password.'});
        //         }

        //         return cb(null, user, {
        //             message: 'Logged In Successfully'
        //         });
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });
        return cb(null,email,{
            message : "logged In Successfully"
        })
    }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromHeader('authorization'),
        secretOrKey   : 'secret'
    },
    function (jwtPayload, done) {
        console.log("auth.passport.js line 40 ",jwtPayload)

        //find the user in db if needed
        // return UserModel.findOneById(jwtPayload.id)
        //     .then(user => {
                return done(null,jwtPayload);
        //     })
        //     .catch(err => {
        //         return cb(err);
        //     });

    }
));