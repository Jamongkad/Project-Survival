var app = angular.module("Main", ['Gameview', 'TemplateService', 'CompileHtml', 'CurrencyFlow', 'Visitor', 'Dropzone']);

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
        .when('/enter_phase', {  
            controller: "GameCtrl"
          , templateUrl: "/game/enter_phase"
        })
        .when('/phase/farm', { 
            controller: "GameCtrl"
          , templateUrl: "/game/phase/farm_phase"
        })
        .when('/phase/mine', { 
            controller: "GameCtrl"
          , templateUrl: "/game/phase/mine_phase"
        })
        .when('/phase/hunt', { 
            controller: "GameCtrl"
          , templateUrl: "/game/phase/hunt_phase"
        })
});
