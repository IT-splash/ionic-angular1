angular.module("main.listCtrl", [])
    .controller("listCtrl", ["$scope", "$location", function($scope, $location){
        //模块标题
        $scope.moduleTitle = "列表";
        //目录项
        $scope.items = [
            {name: "常规列表项", detail: "ion-item", path: "routineList"},
            {name: "头像、图标、徽章、按钮列表", detail: "ion-item", path: "colorfulList"}
        ];
        //页面跳转
        $scope.goToDetail = function(path){
            $location.path("/main/" + path);
        }
    }]);
