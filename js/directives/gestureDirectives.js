//页面承载
gestureApp.directive("gestureCanvas", function(){
    return {
        restrict: "E",
        transclude: true,
        template:
            "<div class='gesturePage'>" +
                "<ion-header-bar align-title='center' style='background-color: #f2f2f2'>" +
                    "<h1 class='title' style='color: black;'>{{gestureTitle}}</h1>" +
                "</ion-header-bar>"+
                "<ion-content ng-transclude></ion-content>" +
            "</div>"
    }
});
//on-hold模块
gestureApp.directive("gestureHold", function(){
    return {
        restrict: "E",
        template:
            "<div id='hold' class='marginBottom200px'>" +
                "<div class='row'>" +
                    "<div class='col col-25 border1px'>" +
                        "<h4 class='marginTo50px marginLeft5px'>长按</h4>" +
                    "</div>" +
                    "<div class='col col-75 selectAreaHeight border1px'>" +
                        "<div class='detailAreaCtrl' on-hold='holdFunc();'>" +
                            "<p>ionic 手势事件之 长按 </p>" +
                            "<p>在屏幕同一位置按住超过0.5秒，将触发on-hold事件</p>" +
                            "<p>可以在任何元素上使用这个指令接监听函数</p>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
    }
});
//on-tap模块
gestureApp.directive("gestureTap", function(){
   return {
       restrict: "E",
       template:
            "<div id='tap' class='marginBottom200px'>" +
                "<ion-list>" +
                    "<ion-item ng-repeat='item in tapItems' ng-bind='item' " +
                        "on-tap='tapFunc(item);'>" +
                    "</ion-item>" +
                "</ion-list>" +
            "</div>"
   }
});
//on-double-tap模块
gestureApp.directive("gestureDoubleTap", function(){
    return {
        restrict: "E",
        template:
            "<div id='doubleTap'class='marginBottom200px'>" +
                "<ion-list>" +
                    "<ion-item ng-repeat='item in doubleTapItems' ng-bind='item'" +
                        "on-double-tap='doubleFunc(item);'>" +
                    "</ion-item>" +
                "</ion-list>" +
            "</div>"
    }
});
//on-touch/on-release模块
gestureApp.directive("gestureTouchRelease", function(){
   return {
       restrict: "E",
       template:
           "<div id='touchRelease' class='marginBottom200px' on-touch='touchFunc();' " +
                "on-release='releaseFunc();'>" +
                "<div class='row'>" +
                    "<div class='col col-25 border1px'>" +
                        "<h4 class='marginTo50px marginLeft5px'>按下</h4>" +
                        "<h4 class='marginLeft5px'>松开</h4>" +
                    "</div>" +
                    "<div class='col col-75 selectAreaHeight border1px' id='touchReleaseTest'>" +
                        "<div class='detailAreaCtrl'></div>" +
                    "</div>" +
                "</div>" +
           "</div>"
   }
});
//on-drag模块
gestureApp.directive("gestureDrag", function(){
    return {
        restrict: "E",
        template:
            "<div class='gesturePage'>" +
                "<ion-header-bar align-title='center' style='background-color: #f2f2f2'>" +
                    "<h1 class='title' style='color: black;'>{{gestureTitle}}</h1>" +
                 "</ion-header-bar>"+
                "<div id='drag' class='scroll-content'" +
                    "on-touch='getPosition($event);' on-drag='dragFunc($event);' ng-click='iconMove();'>" +
                    "<img id='dragIcon' src='./img/load.gif' style='width: 50px;'>" +
                "</div>" +
            "</div>"
    }
});
//on-swipe模块
gestureApp.directive("gestureSwipe", function(){
    return {
        restrict: "E",
        template:
            "<div class='gesturePage'>" +
                "<ion-header-bar align-title='center' style='background-color: #f2f2f2'>" +
                    "<h1 class='title' style='color: black;'>{{gestureTitle}}</h1>" +
                "</ion-header-bar>" +
                "<div id='swipe' class='marginTo50px'>" +
                    "<div class='row'>" +
                        "<div class='col col-25 border1px'>" +
                            "<h4 class='marginTo50px marginLeft5px'>快速</h4>" +
                            "<h4 class='marginLeft5px'>滑动</h4>" +
                        "</div>" +
                        "<div class='col col-75 selectAreaHeight border1px' id='touchReleaseTest'>" +
                            "<div class='detailAreaCtrl center'" +
                                "on-swipe-up='swipeUpFunc();' on-swipe-right='swipeRightFunc();'" +
                                "on-swipe-down='swipeDownFunc()' on-swipe-left='swipeLeftFunc()'>" +
                                "<i class='icon {{iconName}} iconCtrl'></i>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>"
    }
});

