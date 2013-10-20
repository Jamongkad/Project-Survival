angular.module('Player', [])
.directive('playerLifeUp', function() { 

    var templateButton = '<button class="btn-default btn btn-xs" ng-click="life_up()">life [+]</button>';

    return {
        restrict: 'EAC'     
      , scope: {
            player: "=player"    
        }
      , template: templateButton
      , controller: function($scope, $element, $attrs) {  

            $scope.life_up = function() {
                $scope.player.hp = $scope.player.hp + 1;
            }

        }
      , link: function(scope, element, attrs) {
            console.log(element);
        }
    }
})
.directive('playerLifeDown', function() {

    var templateButton = '<button class="btn-default btn btn-xs" ng-click="life_down()">life [-]</button>';

    return {
        restrict: 'EAC'     
      , scope: {
            player: "=player"    
        }
      , template: templateButton
      , controller: function($scope, $element, $attrs) {  
            $scope.life_down = function() {

                var hp = $scope.player.hp - 1;

                if(hp >= 0) {
                    $scope.player.hp = hp;                   
                }
            }

        }
      , link: function(scope, element, attrs) {
            console.log(element);
        } 
    }
})
