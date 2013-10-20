var mysql = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'survivor'});
var hunt = require('../models/hunt');

exports.main = function(req, res) {
    res.render("partials/main");
}

exports.signup = function(req, res) {
    res.render("partials/signup");
}

exports.supply_phase = function(req, res) {
    res.render("partials/supply_phase");
}

exports.action_phase = function(req, res) {
    res.render("partials/action_phase");
}

exports.view = function(req, res) {
    var sql = "SELECT * FROM characters LEFT JOIN tasks ON tasks.characterId = characters.id WHERE ?";
    client.query(sql, {"characters.id": req.params.id}, function(err, result) {
        res.json(result);
    })
}

exports.pull_jobs = function(req, res) {    
    var jobs = [
        {jobName: "Hunt"} 
      , {jobName: "Research"}
      , {jobName: "Explore"}
      , {jobName: "Craft"}
      , {jobName: "Guard"}
    ];
    res.json(jobs);
}

exports.character_profile = function(req, res) {
    res.render("partials/character_profile");
}

//move these guys into a model soon.
exports.pull_players_by_job = function(req, res) {
    var sql = "SELECT * FROM characters INNER JOIN tasks ON characters.id = tasks.characterId WHERE 1=1 AND ?";
    client.query(sql, {"tasks.parentTask": req.params.choice}, function(err, result) {
        res.json(result);
    });
}

exports.fetch_monsters = function(req, res) { 
    var sql = "SELECT * FROM monster";
    client.query(sql, function(err, result) {
        res.json(result);
    });
}

exports.create = function(req, res) {
    var char_data = {name: req.body.name, gender: req.body.gender};
    client.query("INSERT INTO characters SET ?", char_data, function(err, result) {
        res.json(result);
    });
}

exports.assign_task = function(req, res) {
    var sql = "REPLACE INTO tasks SET ?";
    client.query(sql, req.body, function(err, result) {
        res.json(result);       
    });
}

exports.display_characters = function(req, res) { 
    var sql = "SELECT * FROM characters ORDER BY id DESC";
    client.query(sql, function(err, result) {
        res.json(result);
    })
}

exports.initiate_hunt = function(req, res) {
    var h = new hunt.hunt;
    h.initialize(req.body);
    res.json(h.fight());
}

var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
} 
