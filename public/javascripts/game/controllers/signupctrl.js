function SignupCtrl($scope) {

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

    var is_empty = function(str) {
        return (!str || 0 === str.length);
    }

    pull_job();

    $scope.name   = "";
    $scope.gender = "";

    $scope.submit_character = function() {

        if(!is_empty($scope.name) && !is_empty($scope.gender) && !is_empty($scope.chosen_job)) { 
            $.ajax({
                type: 'POST'    
              , dataType: 'json'
              , data: { name: $scope.name, gender: $scope.gender, job: $scope.chosen_job }
              , url: '/game/create'
              , success: function(msg) {

                    console.log(msg);
                    console.log(msg.affectedRows);
                    if(msg.affectedRows == 1) {
                        $scope.name = "";
                        $scope.gender = ""; 
                        pull_job();
                        $scope.$apply();
                    } 

                }
            });  
        }

    }
}
