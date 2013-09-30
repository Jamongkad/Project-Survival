angular.module("CurrencyFlow", [])
.service("CurrencyFlow", function($rootScope) {

    var obj = {}    

    obj.set_gold = function(amt) {
        this.amt = amt;     
        this.broadcast();
    }

    obj.broadcast = function() { 
        $rootScope.$broadcast('setGold');
    }

    return obj;
})
