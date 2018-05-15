(function() {
  "use strict";

  angular.module("blogList")
  .component("blogList", {   
    templateUrl: "templates/blog-list.html",
    controller: function($scope) {
      var blogItems = [
        {title: "Some Title", id: 1, description: "This is a book", publishDate: "2018-05-14"},
        {title: "Title", id: 2, description: "This is a book"},
        {title: "Tea", id: 3, description: "This is a book"},
        {title: "Coffee", id: 4, description: "This is a book"}        
      ];

      $scope.items = blogItems;

      console.log("Hello!");
      $scope.title = "Hi there";
      $scope.clicks = 0;
      $scope.someClickTest = () => {
        console.log("clicked");
        $scope.clicks += 1;
        $scope.title = "Clicked " + $scope.clicks + " times";
      };
    }
  });
})();
