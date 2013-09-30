angular.module('Visitor', [])
.directive('visitor', function() {  
    return {
        restrict: 'EAC'
      , controller: "VisitorCtrl" 
      , link: function(scope, element, attrs) {}
    }
})
.directive('anomalies', function() { 
    return {
        restrict: 'EAC'
      , link: function(scope, element, attrs) {
            $(element).draggable();
        }
    }
})
