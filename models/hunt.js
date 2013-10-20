var Hunt = function() {
    this.name = "Mathew loves Irene!";
    
    this.initialize = function(data) {
        this.data = data; 
    }

    this.fight = function() {
        return this.data.board;  
    }
}

exports.hunt = Hunt;
