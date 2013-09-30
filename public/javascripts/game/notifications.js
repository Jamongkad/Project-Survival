function Notifications(options) {

    this.options = options;
    this.element = $("#notification");

    this.message = function() {
        if(this.is_array(this.options.msg)) {
            for(var i=0;i<this.options.msg.length;i++)  {
                this.element.append("<li>" + this.options.msg[i] + "</li>");      
            }
        } else {
            this.element.prepend("<li>" + this.options.msg + "</li>");     
        }
       
        if(this.element.height() >= 500) {
            $("#notification li:last-child").remove();
        }
    }
    
    this.clean = function() {
        this.element.chidren().remove();
    }

    this.is_array = function(obj) {
       return $.isArray(obj);
    }

    this.message();
}
