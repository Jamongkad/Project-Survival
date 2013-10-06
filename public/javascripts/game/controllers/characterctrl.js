function CharacterCtrl($scope, $routeParams) {

    $scope.task_desc = "A hunter risk his/her life for the continued survival for the populace.";
    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/view/' + $routeParams.id
      , success: function(data) {    
            $scope.character = data[0];
            $scope.$apply($scope.character);
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

    $scope.set_task = function() {
        $scope.task_specific = "";
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
            $scope.task_desc = "A hunter risk his/her life for the continued survival for the populace.";
        } else if($scope.player_task == "Guard") {
            $scope.task = [];
            $scope.task_desc = "A guard is always vigilant and ready to take up arms for the safety of the populace.";
        } else {
            $scope.task = [];     
        } 
    }

    $scope.set_task_specific = function() {
        console.log($scope.task_specific);
    }

}
