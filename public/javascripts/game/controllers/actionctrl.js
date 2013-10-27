function ActionCtrl($scope, $compile) {
      
    var board = ["4x4", "6x6", "7x7", "8x8"];
     
    var shuffleArray = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    } 

    var board_tile = shuffleArray(board)[0];
    $scope.board_generation = board_tile;
    $scope.tile = board_tile.match(/[0-9]+/).pop();

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
 
        var monster_move = $scope.monster.move;
        $scope.reach = 0;
        $scope.tile -= monster_move;

        if(monster_move < $scope.tile) { 
            $scope.reach = 0;
        }

        if($scope.tile <= 0) {  
            $scope.reach = 1;
        }
 
        bootbox.dialog({
           message: $compile("<monster-action></monster-action>")($scope)
         , title: "Monster Action"
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
    
    //place these guys in a directive mothufucka
    $scope.increment = function($event, type) {
        var me = $($event.currentTarget);

        if(type == 'monster') {   
            var int_hp = me.siblings('.monster-hp').text(); 
            var hp = parseInt(int_hp, 10) + 1; 
            me.siblings('.monster-hp').text(hp);
            $scope.monster.hp = hp;
        }

        $event.preventDefault();
    }

    $scope.decrement = function($event, type) { 
       var me = $($event.currentTarget);

        if(type == 'monster') {   
            var int_hp = me.siblings('.monster-hp').text(); 
            var hp = parseInt(int_hp, 10) - 1; 

            if(hp >= 0) {
                me.siblings('.monster-hp').text(hp); 
                $scope.monster.hp = hp;
            }
           
        }

       $event.preventDefault();
    }
}
