angular.module("main.routine.ionFooterBar", [])
    .controller("ionFooterBarCtrl", ["$scope", "$location",
        function($scope, $location, $ionicLoading, $timeout){
        //入口页面标题
        $scope.entranceTitle = "ion-footer-bar";
        //目录项
        $scope.items = [
            {name: "1）标题式", path: "ionFooterBarOnlyTitle"},
            {name: "2）标题 按钮式", path: "ionFooterBarTitleButton"},
            {name: "3）图标 按钮组式", path: "ionFooterBarButtonBar"},
            {name: "▶  综述", path: "ionFooterBarSummarize"}
        ];

        //页面跳转
        $scope.goToDetail = function(path){
            $location.path("/main/" + path);
        };

    }])
    .controller("ionFooterBarDetailCtrl", ["$scope", "$ionicLoading", "$timeout",
        function($scope, $ionicLoading, $timeout){
            //源码查看控制
            $scope.watchCode = false;
            var Tips = function(){
                $ionicLoading.show({
                    template: "样式效果显示在底部"
                });
            };
            Tips();
            $timeout(function(){
                $ionicLoading.hide();
            },1000);
        }]);