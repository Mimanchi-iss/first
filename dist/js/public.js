"use strict";function setCookie(e,o,t){if(!t)return document.cookie=e+"="+o;var i=new Date;i.setTime(i.getTime()-288e5+1e3*t),document.cookie="".concat(e,"=").concat(o,";expires=")+i}function getCookie(e){var o={};return document.cookie.split("; ").forEach(function(e){e=e.split("=");o[e[0]]=e[1]}),e?o[e]:o}function delCookie(e){setCookie("nickname",e,-1)}