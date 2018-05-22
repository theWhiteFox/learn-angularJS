(function() {
  "use strict";

  angular.module("blogDetail").component("blogDetail", {
    templateUrl: "templates/blog-detail.html",
    controller: function(Post, $http, $location, $routeParams, $scope) {
      Post.query(data => {
        $scope.notFound = true;
        angular.forEach(data, post => {
          if (post.id == $routeParams.id) {
            $scope.notFound = false;
            $scope.post = post;
            resetReply();
          }
        });
      });
      $scope.deleteComment = comment => {
        $scope.$apply($scope.post.comments.splice(comment, 1));
      };

      $scope.addReply = () => {
        console.log($scope.reply);
        $scope.post.comments.push($scope.reply);
        // $scope.comments.

        resetReply();
      };

      const resetReply = () => {
        $scope.reply = {
          id: $scope.post.comments.length + 1,
          text: ""
        };
      };

      if ($scope.notFound) {
        console.log("Not Found");
        // change location
        $location.path("/");
      }
    }
  });
})();
