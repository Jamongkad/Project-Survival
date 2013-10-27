var redis = require("redis");
    client = redis.createClient();

var Hunt = function() {
    
    this.initialize = function(data) {
        this.data = data; 
    }

    this.fight = function() {
        this.monster_ai();
        /*
        if(this.data.reached == 1) {
            return this.data.monster.name + " has reached!";
        } else { 
            return this.data.monster.name + " is advancing!";
        }
        */
    }

    this.monster_ai = function() {
        var data = this.data;
        var victim = this.shuffleArray(this.data.characters)[0];
        var monster_key = "monster:" + this.data.monster.id + ":victim";
        var hunt = this;
        
        client.hgetall(monster_key, function(err, obj) {
            
            if(!obj) {
                client.hset(monster_key, "name", victim.name);         
                client.hset(monster_key, "hp", victim.hp);         
                client.hset(monster_key, "gender", victim.gender);         
                client.hset(monster_key, "characterId", victim.characterId);         
            } else {
                console.log(obj);
            }  

        }); 

    }

    this.shuffleArray = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    } 
}

exports.hunt = Hunt;
