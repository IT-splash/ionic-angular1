angular.module("main.routineCtrl", [])
    .controller("routineCtrl", ["$scope", "$location", function($scope, $location){
        //模块标题
        $scope.moduleTitle = "常规";
        //目录项
        $scope.items = [
            {name: "头部", detail: "ion-header-bar", path: "ionHeaderBar"},
            {name: "底部", detail: "ion-footer-bar", path: "ionFooterBar"},
            {name: "内容区", detail: "ion-content", path: "ionContent"},
            {name: "滚动内容区", detail: "ion-scroll", path: "ionScroll"},
            {name: "grid", detail: "row、 col", path: "grid"},
            {name: "手势", detail: "gesture", path: "gesture"}
        ];
        //页面跳转
        $scope.goToDetail = function(path){
            $location.path("/main/" + path);
        }
    }]);
