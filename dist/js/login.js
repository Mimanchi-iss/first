"use strict";$(function(){$("#login").validate({rules:{username:{required:!0,minlength:3,maxlength:10},password:{required:!0,minlength:6,maxlength:12}},messages:{username:{required:"请填写用户名信息",minlength:"最少 5 个字符",maxlength:"最多 10 个字符"}},submitHandler:function(e){e=$(e).serialize();console.log(e),$.post("../server/login.php",e,null,"json").then(function(e){console.log(e),0===e.code?$(".login_error").removeClass("hide"):1===e.code&&(console.log("认证通过"),setCookie("nickname",e.nickname),window.location.href="./index.html")})}})});