angular.module('Nav', [])
.directive('showClassifier', function() {  
    return {
        restrict: "A"     
      , link: function(scope, element, attrs) {
            $(element).bind("click", function(e) {  
                var html = "Category" + 
                '<select name="category" class="form-control">' + 
                '<option>Safe</option>' + 
                '<option>Euclid</option>' + 
                '<option>Keter</option>' + 
                '</select><br/>' +
                "Category" + 
                '<select name="category" class="form-control">' + 
                '<option>Safe</option>' + 
                '<option>Euclid</option>' + 
                '<option>Keter</option>' + 
                '</select><br/>' + 
                'Containment Procedure<textarea id="textArea" class="form-control" rows="10"></textarea>'

                bootbox.dialog({
                    message: html 
                  , title: "SCP Classify Tool"
                  , buttons: {
                      success: { 
                        label: "Accept" 
                      , className: "btn-success"
                      }
                      , danger: {
                         label: "Reject" 
                       , className: "btn-danger"
                      }
                    }
                });
            });
        }
    }
});
