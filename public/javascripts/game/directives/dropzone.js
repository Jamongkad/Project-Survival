angular.module('Dropzone', [])
.directive('dropzone', function() {  
    return {
        restrict: "EAC"     
      , link: function(scope, element, attrs) {
            $(element).droppable({
                drop: function(ev, ui) {
                    var anomaly = ui.draggable;
                    var id = anomaly.children("div.panel-heading").attr('anomaly-id');
                    var me = this;

                    $.ajax({
                        type: 'GET'    
                      , dataType: 'json' 
                      , url: '/visitor/' + id
                      , success: function(data) {    
                            $.each(data, function(i, v) {
                                anomaly.fadeOut();
                                var str = "<h3>Report #" + v.title + "</h3>" + 
                                          "<p>" + v.description + "</p>";
                                $(me).html(str);
                            }) 
                        }
                    });

                }
            })
        }
    }
});
