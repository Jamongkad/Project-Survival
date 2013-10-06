
/**
 * Module dependencies.
 */

var express = require('express')
   , routes = require('./routes')
   , user = require('./routes/user')
   , game = require('./routes/game')
   , http = require('http')
   , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('mathewrocks'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/game/signup', game.signup);
app.get('/game/main', game.main);
app.get('/game/display_characters', game.display_characters);
app.get('/game/pull_jobs', game.pull_jobs);
app.get('/game/supply_phase', game.supply_phase);
app.get('/game/character_profile', game.character_profile);
app.get('/game/view/:id', game.view);

app.get('/game/pull_players_by_job', game.pull_players_by_job);

app.post('/game/create', game.create);
app.post('/game/update_job', game.update_job);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
