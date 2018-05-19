(function() {
  "use strict";

  angular.module("blogDetail").component("blogDetail", {
    templateUrl: "templates/blog-detail.html",
    controller: function($http, $location, $routeParams, $scope) {
      $http.get("/json/post.json").then(successCallBack, errorCallback);

      function successCallBack(response, status, config, statusText) {
        $scope.notFound = true;
        var blogItems = response.data;
        $scope.posts = blogItems;
        angular.forEach(blogItems, post => {
          if (post.id == $routeParams.id) {
            $scope.notFound = false;
            $scope.post = post;
          }
        });
      }

      function errorCallback() {
        $scope.notFound = true;
        console.log(response);
      }

      if ($scope.notFound) {
        console.log("Not Found");
        // change location
        $location.path("/");
      }

      // var blogItems = [
      //   {
      //     title: "Some Title",
      //     id: 1,
      //     description: "This is a book",
      //     publishDate: "2018-05-14"
      //   },
      //   { title: "Title", id: 2, description: "This is a book" },
      //   { title: "Tea", id: 3, description: "This is a book" },
      //   { title: "Coffee", id: 4, description: "This is a book" }
      // ];

      // $scope.title = "Blog " + $routeParams.id;
    }
  });
})();
