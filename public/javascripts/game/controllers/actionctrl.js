function ActionCtrl($scope) {
      
    var board = ["4x4", "5x5", "10x10", "20x20"];
    
    var shuffleArray = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    } 

    $scope.board_generation = shuffleArray(board)[0];

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/pull_players_by_job/hunt'
      , async: false
      , success: function(msg) {
            $scope.character = msg;
        }
    });

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/fetch_monsters'
      , success: function(msg) {
            $scope.monster = shuffleArray(msg)[0];
            $scope.$apply();
        }
    });
 
    $scope.monster_action = function($event) { 

        $.ajax({
            type: 'GET'    
          , dataType: 'json' 
          , url: '/game/pull_players_by_job/hunt'
          , success: function(msg) {
                var chosen_players = shuffleArray(msg)[0];
                console.log(chosen_players);
                $("#hunt-notification").html("<p>Monster is heading over to " + chosen_players.name + "</p>");
            }
        });

    }

    $scope.filter = function(choice) {

        $.ajax({
            type: 'GET'    
          , dataType: 'json' 
          , url: '/game/pull_players_by_job/' + choice
          , success: function(msg) {         
                $scope.character = msg;
                $scope.$apply();
            }
        });

    }

    $scope.increment = function($event) {
       var me = $($event.currentTarget);
       var int_hp = me.parents('td').siblings('.hp').children('.char-hp').text();
       var hp = parseInt(int_hp, 10) + 1;
       me.parents('td').siblings('.hp').children('.char-hp').text(hp);
       $event.preventDefault();
    }

    $scope.decrement = function($event) { 
       var me = $($event.currentTarget);
       var int_hp = me.parents('td').siblings('.hp').children('.char-hp').text();
       var hp = parseInt(int_hp, 10) - 1;

       if(hp >= 0) {
           me.parents('td').siblings('.hp').children('.char-hp').text(hp);
       }

       $event.preventDefault();
    }
}
