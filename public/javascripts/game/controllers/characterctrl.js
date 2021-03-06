function CharacterCtrl($scope, $routeParams, $location) {

    $scope.task_desc = "A hunter risk his/her life for the continued survival of the group.";

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/view/' + $routeParams.id
      , async: false
      , success: function(data) {    
            $scope.character = data[0];
        }
    });

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/pull_jobs'
      , success: function(data) {    
            $scope.jobs = data;
            $scope.$apply($scope.job);
        }
    }); 
    
    if($scope.character.parentTask) {
        $scope.player_task = $scope.character.parentTask;     
    }
   
    $scope.task_specific = $scope.character.childTask;

    var player_task = function() { 
        $scope.task_desc = "";
        if($scope.player_task == "Research") { 
            $scope.task = [
                {"task": "weapon/armor advancement", "value": "weapon_up"}
              , {"task": "agricultural advancement", "value": "agri_up"}
              , {"task": "village advancement", "value": "vill_up"}
            ];
        } else if($scope.player_task == "Craft") { 
            $scope.task = [
                {"task": "weapons/armor", "value": "weapon_craft"}
              , {"task": "living quarters", "value": "house_craft"}
              , {"task": "defenses", "value": "defense_craft"}
            ];
        } else if($scope.player_task == "Explore") {  
            $scope.task = [
                {"task": "close proximity", "value": "explore_close"}
              , {"task": "medium range expedition", "value": "explore_medium"}
              , {"task": "long range expedition", "value": "explore_long"}
            ];
        } else if($scope.player_task == "Hunt") {
            $scope.task = [];
            $scope.task_desc = "A hunter risk his/her life for the continued survival of the group.";
        } else if($scope.player_task == "Guard") {
            $scope.task = [];
            $scope.task_desc = "A guard is always vigilant and ready to take up arms for the safety of the group.";
        } else {
            $scope.task = [];     
        } 
    }

    player_task();

    $scope.set_task = function() {
        player_task();
    }

    $scope.save_character = function() {
        if($scope.player_task == "Research" || $scope.player_task == "Craft" || $scope.player_task == "Explore") { 
            if($scope.task_specific == "") {
                alert("Please pick a specific task!");
            } else {
                $.ajax({
                   type: 'POST'    
                 , dataType: 'json'
                 , url: '/game/assign_task'
                 , data: { parentTask: $scope.player_task, childTask: $scope.task_specific, characterId: $routeParams.id }
                 , success: function(msg) {
                       console.log(msg);
                       alert("Saved!");
                   }
                });
            }
        } else {
            $.ajax({
               type: 'POST'    
             , dataType: 'json'
             , url: '/game/assign_task'
             , data: { parentTask: $scope.player_task, characterId: $routeParams.id } , success: function(msg) {
                   console.log(msg);
                   alert("Saved!");
               }
            });
        }
    }

    $scope.back = function() {
        $location.path("/supply_phase");
    }

}
