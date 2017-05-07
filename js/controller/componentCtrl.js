angular.module("main.componentCtrl", [])
    .controller("componentCtrl", ["$scope", "$location", "$anchorScroll",
        function($scope, $location, $anchorScroll){
            //模块标题
            $scope.moduleTitle = "组件";
            //目录项
            $scope.items = [
                {name: "模态对话框", detail: "$ionicModal", path: "ionicModal"},
                {name: "上拉菜单", detail: "$ionicActionSheet", path: "ionicActionSheet"},
                {name: "弹出框", detail: "$ionicPopup", path: "ionicPopup"},
                {name: "浮动框", detail: "$ionicPopover", path: "ionicPopover"}
                //{name: "载入指示器", detail: "$ionicLoading", path: "components", hash: "ionicLoading"},
                //{name: "背景幕", detail: "$ionicBackdrop", path: "components", hash: "ionicBackdrop"}
            ];
            //页面跳转
            $scope.goToDetail = function(path){
                $location.path("/main/" + path);
            }
    }]);
