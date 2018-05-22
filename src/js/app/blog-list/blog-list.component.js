(function() {
  "use strict";

  angular.module("blogList").component("blogList", {
    templateUrl: "templates/blog-list.html",
    controller: function(Post, $location, $routeParams, $rootScope, $scope) {
      $scope.goToItem = post => {
        $location.path("/blog/" + post.id);
        // $rootScope.$apply(function() {
          
        // });
        // console.log("some item");
      };
      $scope.items = Post.query();
    }
  });
})();
