angular.module("main.switch.switchDetails", ["ionic"])
    .controller("ionSlideBoxCtrl", ["$scope", "$ionicSlideBoxDelegate", "$location",
        function($scope, $ionicSlideBoxDelegate, $location){
            $scope.coverDivShow = false;
            $scope.pageCanvasShow = false;
            $scope.hashTitle = "ion-slide-box";
            $scope.showSlideBox = function(){
                $location.path("/main/slideShow");
            };
            $scope.index = 0;
            $scope.slideShow = false;
            $scope.showButton = false;
            $scope.showPager = function(index){
                $ionicSlideBoxDelegate.slide(index);
            };
            $scope.goPrevious = function(){
                $ionicSlideBoxDelegate.previous();
            };
            $scope.goNext = function(){
                $ionicSlideBoxDelegate.next();
            };
            $scope.showButtonFunc = function(){
                $scope.showButton = true;
            };
            $scope.hideButtonFunc = function(){
                $scope.showButton = false;
            }
    }]);