function CharacterCtrl($scope, $routeParams) {

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
        console.log($scope.player_task);

        $scope.task = [
            {"name": "ploo"}
          , {"name": "plah"}
          , {"name": "plee"}
        ];
    }

}
