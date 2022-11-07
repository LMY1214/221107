function setRem(){
    var ui_=375;
    var client_w=document.documentElement.clientWidth||document.body.clientWidth;
    var html=document.getElementsByTagName('html')[0];
    html.style.fontSize=(client_w/ui_)*10+'px';

}
setRem();
var timer;
window.onresize=function(){
    clearTimeout(timer);
    setTimeout(function(){
setRem();
    },100)
}