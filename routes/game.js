var mysql = require('mysql');
var client = mysql.createConnection({host: 'localhost', user: 'root', password: 'brx4*svv', database: 'survivor'});

exports.main = function(req, res) {
    res.render("partials/main");
}

exports.signup = function(req, res) {
    res.render("partials/signup");
}

exports.supply_phase = function(req, res) {
    res.render("partials/supply_phase");
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
    var job_choice = req.query.choice;

    if(job_choice == 'farm') {
        sql_choice = 'farmer';
    }

    if(job_choice == 'mine') {
        sql_choice = 'miner';
    }

    if(job_choice == 'hunt') {
        sql_choice = 'hunter';
    }

    var sql = "SELECT * FROM characters INNER JOIN job ON characters.id = job.characterId WHERE 1=1 AND ?";
    client.query(sql, {"job.jobName": sql_choice}, function(err, result) {
        res.json(result);
    });

}

exports.create = function(req, res) {
    var char_data = {name: req.body.name, gender: req.body.gender};
    client.query("INSERT INTO characters SET ?", char_data, function(err, result) {
        //client.query("INSERT INTO job SET ?", {"characterId": result.insertId, "jobName": job}, function(err, result) {});
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

exports.update_job = function(req, res) {
    var post = req.body;
    var sql = "UPDATE job SET jobName = " + client.escape(post.jobName) + " WHERE characterId = " + client.escape(post.characterId);
    client.query(sql, function(err, result) {
        res.json(result);
    });
}
