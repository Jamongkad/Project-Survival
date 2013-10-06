function CharacterCtrl($scope, $routeParams) {

    $scope.character = '';

    $.ajax({
        type: 'GET'    
      , dataType: 'json' 
      , url: '/game/view/' + $routeParams.id
      , success: function(data) {    
            $scope.character = data[0];
            $scope.$apply($scope.character);
        }
    });
}
