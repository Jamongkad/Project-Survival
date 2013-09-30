angular.module('Gameview', [])
.directive('gameview', function(TemplateService, $compile) { 
    return {
        restrict: 'EAC'
      , transclude: true
      , template: "<span ng-transclude></span>"
    }
})
.directive('speak', function() {
    return {
        restrict: 'EAC' 
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {
                var me = $(this);
                me.parents('tr').siblings('tr').hide();
                e.preventDefault();
            });
        }
    } 
})
.directive('reject', function() {
    return {
        restrict: 'EAC' 
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {
                console.log($(this).parents('tr').remove());
                e.preventDefault();
            });
        }
    } 
    
})
.directive('closeDialog', function() {
    return {
        restrict: 'EAC' 
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {
                $(".table tr:hidden").show();
                e.preventDefault();
            });
        }
    } 
})
.directive('collect', function(CurrencyFlow) {
    return {
        restrict: "A"
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {
                var me = $(this);
                var btn = new Button({
                    elem: me     
                  , text: 'collect tribute'
                  , actiontext: 'collecting tribute'
                  , action: function() { 
                        console.log("update world engine"); 
                    }
                  , afteraction: function() { 
                        CurrencyFlow.set_gold(10);
                        console.log("after update world engine"); 
                    }
                  , cooldown: 3
                });
                btn.activate();

                var ntf = new Notifications({ msg: "You collected from your vassals. " + makeid() });
                e.preventDefault();
            });
        }
    }    
})
.directive('nav', function() {
    return {
        restrict: "A"     
      , scope: {
            template: "@switch"       
        }
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {
                $(element).parents('li').addClass("active");
                $(element).parents('li').siblings('li').removeClass("active");
                if(scope.template == "manor") {
                    $(".manor").show();
                    $(".vogel").hide();
                } else {
                    $(".manor").hide();
                    $(".vogel").show(); 
                }
                e.preventDefault();
            });
        }
    }    
})
