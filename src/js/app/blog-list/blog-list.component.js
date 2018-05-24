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

      $scope.changeCol = number => {
        if (angular.isNumber(number)) {
          $scope.numCols = number;
        } else $scope.numCols = 2;

        setUpCol($scope.items, $scope.numCols);
      };
      
      $scope.loadingQuery = false;
      $scope.$watch(() => {
        console.log($scope.query);
        if ($scope.query) {
          $scope.loadingQuery = true;
          $scope.cssClass = "col-sm-12";
        } else {
          if( $scope.loadingQuery) {
            setUpCol($scope.items, 2);
            $scope.loadingQuery = false;
          }
        }
      });

      const setUpCol = (data, number) => {
        if (angular.isNumber(number)) {
          $scope.numCols = number;
        } else $scope.numCols = 4;

        $scope.cssClass = "col-sm-" + 12 / $scope.numCols;
        $scope.items = data;
        $scope.colItems = chunkArrayInGroups(data, $scope.numCols);
      };

      Post.query(
        data => {
          setUpCol(data, 4);
        },
        error => {}
      );
      const chunkArrayInGroups = (array, unit) => {
        var results = [];
        length = Math.ceil(array.length / unit);

        for (var i = 0; i < length; i++) {
          results.push(array.slice(i * unit, (i + 1) * unit));
        }
      };
    }
  });
})();
