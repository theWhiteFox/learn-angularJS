(function() {
  "use strict";

  angular.module("confirmClick").directive("confirmClick", function() {
    return {
      restrict: "A",
      link: (scope, element, attr) => {
        var msg = scope.message || "Are you sure?";
        var clickAction = attr.confirmedClick;
        element.bind("click", event => {
          event.stopImmediatePropagation();
          event.preventDefault();
          if (window.confirm(msg)) {
            scope.$eval(clickAction);
          } else console.log("Cancelled");
        });
      }
    };
  });
})();