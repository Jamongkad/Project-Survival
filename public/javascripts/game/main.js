var app = angular.module("Main", ['TemplateService', 'CompileHtml', 'HuntService', 'Monster', 'Player', 'ui.bootstrap']);

app.config(function($routeProvider) {
    $routeProvider   
        .when('/', { 
            controller: "SignupCtrl"
          , templateUrl: "/game/signup"
        })
        .when('/game', { 
            controller: "GameCtrl"
          , templateUrl: "/game/main"
        })
        .when('/supply_phase', { 
            controller: "GameCtrl"
          , templateUrl: "/game/supply_phase"
        })
        .when('/view/:id', {
           controller: "CharacterCtrl"
         , templateUrl: "/game/character_profile" 
        })
        .when('/action_phase', {
           controller: "ActionCtrl" 
         , templateUrl: "/game/action_phase"
        })
});
