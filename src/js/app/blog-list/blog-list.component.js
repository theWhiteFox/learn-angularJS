(function() {
  "use strict";

  angular.module("blogList").component("blogList", {
    templateUrl: "templates/blog-list.html",
    controller: function($routeParams, $scope) {
      console.log($routeParams);

      var blogItems = [
        {
          title: "Some Title",
          id: 1,
          description: "This is a book",
          publishDate: "2018-05-14"
        },
        { title: "Title", id: 2, description: "This is a book" },
        { title: "Tea", id: 3, description: "This is a book" },
        { title: "Coffee", id: 4, description: "This is a book" }
      ];

      $scope.items = blogItems;
    }
  });
})();
