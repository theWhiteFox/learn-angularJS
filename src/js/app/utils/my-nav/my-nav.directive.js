(function() {
    "use strict";
  
    angular.module("myNav").directive("myNav", function() {
      return {
        restrict: "E",
        templateUrl: "/templates/my-nav.html",
        link: (scope, element, attr) => {
        }
      };
    });
  })();