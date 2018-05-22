(function() {
  "use strict";

  angular.module("confirmClick").directive("confirmClick", function() {
    return {
      restrict: "A",
      link: (scope, element, attr) => {
        var msg = scope.message || "Are you sure?";
        var clickAction = attr.confirmedClick;
        element.bind("click", event => {
          if (window.confirm(msg)) {
            scope.$eval(clickAction);
          }
        });   
      }
    };
  });

  // angular
  //   .module("confirmClick")
  //   .directive("confirmClick", function($rootScope, $location) {
  //     return {
  //       scope: {
  //         message: "@message",
  //         post: "=post"
  //       },
  //       restrict: "E",
  //       template:
  //         "<a ng-href='/blog/{{ post.id }}'> {{ post.title }} {{ post.publishDate }}</a>",
  //       link: function(scope, element, attr) {
  //         var msg = scope.message || "Are you sure?";
  //         element.bind("click", event => {
  //           if (window.confirm(msg)) {
  //             console.log("/blog/" + scope.post.id);
  //             $rootScope.$apply(function() {
  //               $location.path("/blog/" + scope.post.id);
  //             });
  //           }
  //         });
  //         // console.log(scope.message);
  //         // console.log(element);
  //         // console.log(attr.confirmClick);
  //         // console.log(attr.ngHref);
  //         // console.log(attr.href);
  //       }
  //     };
  //   });
})();
