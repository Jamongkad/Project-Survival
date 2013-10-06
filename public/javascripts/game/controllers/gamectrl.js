function GameCtrl($scope, $location, $routeParams) {

    var pull_job = function() {
        $.ajax({
            type: 'GET'    
          , dataType: 'json' 
          , url: '/game/pull_jobs'
          , success: function(data) {    
                $scope.job = data;
                $scope.$apply($scope.job);
            }
        }); 
    }
    
    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/display_characters'
      , success: function(data) {    
            $scope.characters = data;
            $scope.$apply($scope.characters);
        }
    });

    var choice_params = $location.path().match(/farm|mine|hunt/);
    if(choice_params) {
        $.ajax({
            type: 'GET'    
          , dataType: 'json' 
          , url: '/game/pull_players_by_job'
          , data: { choice : choice_params[0] }
          , success: function(data) {    
                $scope.jobbers = data; 
                $scope.$apply($scope.jobbers);
            }
        });
    }

    $scope.proceed = function(path) {
        $location.path(path);
    }
}
