angular.module("main.list.listDetails", [])
    .controller("routineListCtrl", ["$scope", "$ionicListDelegate",
        function($scope, $ionicListDelegate){
            $scope.items = ["上海", "江苏", "河北", "河南", "陕西", "湖北", "湖南", "江西"];
            $scope.colorSet = [];
            $scope.deleteShow = false;
            $scope.reorderShow = false;
            $scope.coverDivShow = false;
            $scope.pageCanvasShow = false;
            $scope.hashTitle = "Directions";
            $scope.watchCode = [];
            $scope.deleteShowF = function(){
                $scope.reorderShow = false;
                $scope.deleteShow = ! $scope.deleteShow;
            };
            $scope.reorderShowF = function(){
                $scope.deleteShow = false;
                $scope.reorderShow = ! $scope.reorderShow;
            };
            $scope.deleteItem = function($index){
                $scope.items.splice($index, 1);
            };
            $scope.reorderItem = function(item, $fromIndex, $toIndex){
                $scope.items.splice($fromIndex, 1);
                $scope.items.splice($toIndex, 0, item);
            };
            $scope.closeOptionButton = function(){
                $ionicListDelegate.closeOptionButtons()
            };

            $scope.showDirection = function(){
                $scope.coverDivShow = true;
                $scope.pageCanvasShow = true;
            };
            $scope.coverShowClick = function(){
                $scope.coverDivShow = false;
                $scope.pageCanvasShow = false;
            };
            $scope.editClick = function(index){
                $scope.colorSet[index] = ! $scope.colorSet[index];
            }
    }])
    .controller("colorfulListCtrl", ["$scope", "$location", "$anchorScroll",
        function($scope, $location, $anchorScroll){
            $scope.watchCode = [];
            $scope.goHash = function(hash){
                $location.hash(hash);
            };
            $scope.showGuard = false;
            $scope.guardIndex = true;
            $scope.showGuardFunc = function(){
                $scope.guardIndex = false;
                $scope.showGuard = true;
            };
            $scope.hideGuardFunc = function(){
                $scope.guardIndex = true;
                $scope.showGuard = false;
            }
    }]);