// $(function(){
//     function setRem(){
//         var clientWidth=$(window).width();
//         var nowRem=(clientWidth/375*10);
//         $("html").css("font-size",parseInt(nowRem, 10)+"px");
//     };
//     setRem();

//     $(function(){
//         var timer;
//         $(window).bind("resize",function(){
//             clearTimeout(timer)
//             timer=setTimeout(function(){
//                 setRem();
//             }, 100)
//         })
//     });
// });
function setRem() {
    var ui_w = 375;
    var client_w = document.documentElement.clientWidth || document.body.clientWidth;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = (client_w / ui_w) * 10 + 'px';
}
setRem();
var timer;
window.onresize = function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
        setRem();
    }, 100)
}