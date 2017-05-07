angular.module("main.routine.grid", [])
    .controller("gridCtrl", ["$scope", "$location", function($scope, $location){
        //入口页面标题
        $scope.entranceTitle = "栅格布局";
        //目录项
        $scope.items = [
            {name: "grid布局效果", path: "gridStyle"},
            {name: "▶  综述", path: "gridSummarize"}
        ];
        //页面跳转
        $scope.goToDetail = function(path){
            $location.path("/main/" + path);
        };
        //源码查看控制
        $scope.watchCode = [
            {same: false},
            {different: false},
            {offset: false}
        ];
    }]);
