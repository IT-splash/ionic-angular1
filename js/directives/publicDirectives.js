//�ڸǲ�
app.directive("coverDiv", function(){
    return {
        restrict: "E",
        template: "<div id='coverDiv'></div>"
    }
});
//ҳ����ؿ��Ի���1
app.directive("pageCanvas", function(){
    return {
        restrict: "E",
        transclude: true,
        template:
        "<div class='gesturePage'>" +
            "<ion-header-bar align-title='center' style='background-color: #f2f2f2'>" +
                "<h1 class='title' style='color: black;'>{{hashTitle}}</h1>" +
            "</ion-header-bar>"+
            "<ion-content ng-transclude overflow-scroll='true'></ion-content>" +
        "</div>"
    }
});

//ҳ�����2
app.directive("pageCanvasNoScroll", function(){
    return {
        restrict: "E",
        transclude: true,
        template:
            "<div class='gesturePage'>" +
                "<ion-header-bar align-title='center' style='background-color: #f2f2f2'>" +
                    "<h1 class='title' style='color: black;'>{{hashTitle}}</h1>" +
                "</ion-header-bar>"+
                "<ion-content ng-transclude></ion-content>" +
            "</div>"
    }
});