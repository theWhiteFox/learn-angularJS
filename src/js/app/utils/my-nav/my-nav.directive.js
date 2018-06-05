(function() {
    "use strict";
  
    angular.module("myNav").directive("myNav", function(Post, $location) {
      return {
        restrict: "E",
        templateUrl: "/templates/my-nav.html",
        link: (scope, element, attr) => {
          scope.items = Post.query();
          scope.selectItem = function($item, $model, $label) {
            console.log($item);
            console.log($model);
            console.log($label);
            $location.path("/blog/" + $item.id);
            scope.searchQuery = "";
          };
          scope.searchItem = function() {
            console.log(scope.searchQuery);
            $location.path("/blog/").search("q" + scope.searchQuery);
          };
        }
      };
    });
  })();