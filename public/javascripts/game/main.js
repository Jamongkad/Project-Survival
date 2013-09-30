var app = angular.module("Main", ['Gameview', 'TemplateService', 'CompileHtml', 'CurrencyFlow', 'Visitor', 'Dropzone']);

app.config(function($routeProvider) {
    $routeProvider   
        .when('/', { 
            controller: "SignupCtrl"
          , templateUrl: "/game/signup"
        })
        .when('/game', { 
            controller: "SignupCtrl"
          , templateUrl: "/game/signup"
        })
});
