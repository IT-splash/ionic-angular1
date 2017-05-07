angular.module("main.switchCtrl", [])
    .controller("switchCtrl", ["$scope", "$location", function($scope, $location){
        //模块标题
        $scope.moduleTitle = "切换";
        //目录项
        $scope.items = [
            {name: "视图导航", detail: "ion-nav-view", path: "ionNavView"},
            {name: "tabs选项卡切换", detail: "ion-tabs", path: "ionTabs"},
            {name: "侧边栏菜单切换", detail: "ion-side-menus", path: "ionSideMenus"},
            {name: "幻灯片式切换", detail: "ion-slide-box", path: "ionSlideBox"}

        ];
        //页面跳转
        $scope.goToDetail = function(path){
            $location.path("/main/" + path);
        }
    }]);