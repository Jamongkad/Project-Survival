var Hunt = function() {
    
    this.initialize = function(data) {
        this.data = data; 
    }

    this.fight = function() {
        
        console.log(this.data);

        if(this.data.reached == 1) {
            return this.data.monster.name + " has reached!";
        } else { 
            return this.data.monster.name + " is advancing!";
        }
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
