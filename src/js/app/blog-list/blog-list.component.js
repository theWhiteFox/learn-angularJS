(function() {
  "use strict";

  angular.module("blogList").component("blogList", {
    templateUrl: "templates/blog-list.html",
    controller: function(Post, $location, $routeParams, $rootScope, $scope) {
      $scope.goToPost = post => {
        $rootScope.$apply(function() {
          $location.path("/blog/" + post.id);
        });
      };
      $scope.items = Post.query();
    }
  });
})();
