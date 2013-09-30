function SignupCtrl($scope) {

    $scope.name   = "";
    $scope.gender = "";

    $scope.submit_character = function() {
        if(!is_empty($scope.name) && !is_empty($scope.gender)) { 
            $.ajax({
                type: 'POST'    
              , dataType: 'json'
              , data: { name: $scope.name, gender: $scope.gender }
              , url: '/game/create'
              , success: function(msg) {
                    //shared_service.jsonmsg = msg
                    console.log(msg);
                }
            });  
        }
    }

    var is_empty = function(str) {
        return (!str || 0 === str.length);
    }
}
