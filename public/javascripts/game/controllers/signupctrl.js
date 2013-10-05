function SignupCtrl($scope) {

    var is_empty = function(str) {
        return (!str || 0 === str.length);
    }

    $scope.name   = "";
    $scope.gender = "";

    $scope.submit_character = function() {

        if( !is_empty($scope.name) && !is_empty($scope.gender) ) { 
            $.ajax({
                type: 'POST'    
              , dataType: 'json'
              , data: { name: $scope.name, gender: $scope.gender }
              , url: '/game/create'
              , success: function(msg) {
                    if(msg.affectedRows == 1) {
                        $scope.name = "";
                        $scope.gender = ""; 
                        $scope.$apply();
                    } 

                }
            });  
        }

    }
}
