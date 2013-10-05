function Button(options) {
    
    this.options = options;    

    if(typeof this.options.action == 'function') {
        this.options.action();
    }

    this.activate = function() { 
        var cd = this.options.cooldown;
        var width = $(this.options.elem).width();
        var current_width = '40%';//width + "px";
        var target_width = '0%';
        var text = this.options.text;
        var actiontext = this.options.actiontext;

        var that = this;
         
        if(!this.options.elem.hasClass("disabled")) { 
            this.options.elem
                        .stop(true, true)
                        .addClass("disabled")
                        .text(actiontext)
                        .animate({ width: target_width, padding: '0px 0px' }, cd * 1000, 'linear', function() { 
                            $(this).text("done!").animate({ padding: '4px 12px', width: current_width }, 1000, 'linear', function() {
                                $(this).text(text).attr("class", "btn btn-primary btn-xs collect").removeAttr("style").removeClass("disabled");
                            });

                            if(typeof that.options.action == 'function') {
                                that.options.afteraction();
                            }
                         });
            console.log("clicked!");
        } else {
            console.log("no click!"); 
        }
    }
}
