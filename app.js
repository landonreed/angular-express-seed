
/**
 * Module dependencies
 */

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path'),
  GitHubApi = require('github');

var GitHubApi = require('github')
var app = module.exports = express();

<<<<<<< HEAD
var github = new GitHubApi({
    // required
    version: "3.0.0"//,
    // optional
    // debug: true,
    // protocol: "https",
    // host: "localhost:5000",
=======

var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    // debug: true,
    // protocol: "https",
    // host: "github.my-GHE-enabled-company.com",
>>>>>>> 99c4aae966398861ce0b7fb8ea4c0da5259fba5e
    // timeout: 5000
});
github.user.getFollowingFromUser({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "landonreed"
}, function(err, res) {
    console.log(JSON.stringify(res));
});
<<<<<<< HEAD
=======

>>>>>>> 99c4aae966398861ce0b7fb8ea4c0da5259fba5e
/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
}

// production only
if (app.get('env') === 'production') {
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);


/**
 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
