angular.module("TemplateService", [])
.service("TemplateService", function($rootScope) {
    var shared = {};
    shared.template = ''

    shared.set_template = function(msg) {
        shared.template = msg;     
        this.broadcast_item();
    }

    shared.broadcast_item = function() {
        $rootScope.$broadcast('setTemplate');
    }

    return shared;
})
