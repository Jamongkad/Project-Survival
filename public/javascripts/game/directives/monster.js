angular.module('Monster', [])
.directive('monsterAction', function() {

    var chosen_players;

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/pull_players_by_job/hunt'
      , async: false
      , success: function(msg) {
            chosen_players = shuffleArray(msg)[0];               
        }
    });

    return {
        restrict: "A"     
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {
                bootbox.dialog({
                   message: chosen_players.name + " rocks!"
                 , title: "Monster Action"
                });
                e.preventDefault();
            })
        }
    }    
})

var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
} 
