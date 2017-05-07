var gestureApp = angular.module("main.routine.gesture", ["ionic"]);
gestureApp.controller("gestureCtrl", ["$scope", "$ionicPopup", "$location", "$anchorScroll", "$interval",
    function($scope, $ionicPopup, $location, $anchorScroll, $interval){
        $scope.title = "手势操作";
        $scope.gestureTitle = "";
        //代码查看控制
        $scope.overflow = false;
        $scope.watch = [];
        //覆盖层显示控制
        $scope.coverShow = false;
        //手势页面对应显示控制
        $scope.pageShow = false;
        $scope.dragShow = false;
        $scope.swipeShow = false;

        //点击显示对应手势操作界面
        $scope.showPage = function(pageName){

            $scope.gestureTitle = pageName;
            $scope.coverShow = true;
            if(angular.equals(pageName, "drag")){
                $scope.dragShow = true;
            }else if(angular.equals(pageName, "swipe")){
                $scope.swipeShow = true;
            }else{
                $scope.pageShow = true;
                $location.hash(pageName);
            }

        };
        //点击关闭手势操作界面
        $scope.coverShowClick = function(){
            $scope.pageShow = false;
            $scope.coverShow = false;
            $scope.dragShow = false;
            $scope.swipeShow = false;
        };
        $scope.holdFunc = function(){
            alert("手势长按触发")
        };
        $scope.tapItems = ["Html5", "C++", "PHP", "Python"];
        $scope.doubleTapItems = ["中国", "美国", "德国", "英国"];
        $scope.tapFunc = function(item){
            $ionicPopup.alert({
                title: "警告",
                template: "你点击了 " + item + " ，你行不行？"
            })
        };
        $scope.doubleFunc = function(item){
            $ionicPopup.alert({
                title: "警告",
                template: "你双击了 " + item + " ，难道你这么很喜欢？"
            })
        };
        $scope.touchFunc = function(){
            $("#touchRelease").addClass("blue");
        };
        $scope.releaseFunc = function(){
            $("#touchRelease").removeClass("blue");
        };
        var originalX, originalY;
        $scope.getPosition = function($event){
            //$event.stopPropagation();
            //$event.preventDefault();
            originalX = $event.target.offsetLeft;
            originalY = $event.target.offsetTop;
        };
        $scope.dragFunc = function($event){
            //$event.stopPropagation();
            //$event.preventDefault();
            var destination = $event.target;
            var dX = $event.gesture.deltaX;
            var dY = $event.gesture.deltaY;
            destination.style.left = originalX + dX + "px";
            destination.style.top = originalY + dY + "px";
        };
        var moveFlag = 0;
        $scope.iconMove = function(){
            ++ moveFlag;
            var icon = $("#dragIcon");
            var x = 5;
            var y = 5;
            var stop =  $interval(function(){
                x = parseInt(Math.random()*200+1);
                y = parseInt(Math.random()*160+1);
                var Px =  x + "px";
                var Py =  y + "px";
                if( moveFlag % 2 ==0 ){
                    $interval.cancel(stop);
                }
                icon.animate({left: Px, top: Py});
            }, 200)
        };

        $scope.iconName = "ion-arrow-expand";

        $scope.swipeUpFunc = function(){
            $scope.iconName="ion-arrow-up-a";
        };
        $scope.swipeDownFunc = function(){
            $scope.iconName="ion-arrow-down-a";
        };
        $scope.swipeLeftFunc = function(){
            $scope.iconName="ion-arrow-left-a";
        };
        $scope.swipeRightFunc = function(){
            $scope.iconName="ion-arrow-right-a";
        };

}]);
