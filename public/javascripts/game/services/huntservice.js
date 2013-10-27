angular.module("HuntService", [])
.service("HuntService", function($rootScope) {
    var shared = {}
    shared.result;

    shared.initiate_hunt = function(board_data) {

        $.ajax({ 
            type: 'POST'    
          , dataType: 'json' 
          , url: '/game/initiate_hunt'
          , data: board_data
          , async: false
          , success: function(msg) {
                shared.result = msg
            }
        })  

    }

    return shared;
});
