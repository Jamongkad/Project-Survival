var Events = {
    init: function() {        
        $("a.collect").bind("click", function(e) {
                     
            var me = $(this);
            var btn = new Button({
                elem: me     
              , text: 'collect'
              , actiontext: 'collecting'
              , action: function() { console.log("update world engine"); }
              , afteraction: function() { console.log("after update world engine"); }
              , cooldown: 3
            });
            btn.activate();

            var ntf = new Notifications({msg: "You collected from your vassals. " + makeid() });
            e.preventDefault();
        });
    }
}

function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));    
    }

    return text;
}

var from = 0, step = 5;

function showNext(list) {
    list
        .find('li').hide().end()
        .find('li:lt(' + (from + step) + '):not(li:lt(' + from + '))')
        .show();
            from += step;
}

function showPrevious(list) {
    from -= step;
    list
        .find('li').hide().end()
        .find('li:lt(' + from + '):not(li:lt(' + (from - step) + '))')
        .show();
}

showPrevious($('ul#notification'));

// show initial set
// 
/*
var progress = $('<div id="progressbar" style="width:60px;"></div>');

$(this).after(progress);

var headerBar = (function () {

    var inProgress  = false;
    var progressbar = $('#progressbar'); // Save some trees by calling jQuery selection only once!

    return function headerBar(time) {
        if (inProgress) {
            clearTimeout(inProgress);
            inProgress = false;
        }
        progressbar.progressbar({ value: 0 });

        function progress() {
            var val = progressbar.progressbar('value') || 0;
            progressbar.progressbar('value', val + 5);
            if (val < 99) {
                inProgress = setTimeout(progress, time);
            } else {

                progressbar.remove();
                progressbar.progressbar('value', 0);
            }
        }
        progress();
    }
})();
headerBar(800);
*/
