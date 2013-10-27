angular.module('Monster', [])
.directive('monsterAction', function(HuntService) {

    return {
        restrict: "EAC"
      , templateUrl: "/game/hunt_ui"
      , scope: true
      , controller: function($scope, $element, $attrs) {

            HuntService.initiate_hunt({ 
                board: $scope.board_generation
              , monster: $scope.monster
              , characters: $scope.character
              , reached: $scope.reach 
            });

            $scope.msg = HuntService.result;

            $scope.ok = function() {
                console.log("Mathew Power");
            }
        }
      , link: function(scope, element, attrs) {
        }
    }
})
