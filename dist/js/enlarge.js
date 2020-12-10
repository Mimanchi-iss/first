"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var i=t[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),e}var Enlarge=function(){function t(e){_classCallCheck(this,t),this.ele=document.querySelector(e),this.show=this.ele.querySelector(".show"),console.log(this.show),this.mask=this.ele.querySelector(".mask"),this.list=this.ele.querySelector(".list"),this.enlarge=this.ele.querySelector(".enlarge"),console.log(this.enlarge),this.show_width=this.show.clientWidth,this.show_height=this.show.clientHeight,this.enlarge_width=parseInt(window.getComputedStyle(this.enlarge).width),console.log(this.enlarge_width),this.enlarge_height=parseInt(window.getComputedStyle(this.enlarge).height),console.log(this.enlarge_height),this.bg_width=parseInt(window.getComputedStyle(this.enlarge).backgroundSize.split(" ")[0]),this.bg_height=parseInt(window.getComputedStyle(this.enlarge).backgroundSize.split(" ")[1]),console.log(this.bg_width),console.log(this.bg_height),this.init()}return _createClass(t,[{key:"init",value:function(){this.setScale(),this.move(),this.overOut(),this.changeList()}},{key:"setScale",value:function(){this.mask_width=this.show_width*this.enlarge_width/this.bg_width,this.mask_height=this.show_height*this.enlarge_height/this.bg_height,this.mask.style.width=this.mask_width+"px",this.mask.style.height=this.mask_height+"px",console.log(this.mask_width)}},{key:"overOut",value:function(){var e=this;console.log(2),console.log(this.show),this.show.addEventListener("mouseover",function(){console.log(1111),e.mask.style.display="block",e.enlarge.style.display="block"}),this.show.addEventListener("mouseout",function(){e.mask.style.display="none",e.enlarge.style.display="none"})}},{key:"move",value:function(){var i=this;this.show.addEventListener("mousemove",function(e){var t=(e=e||window.event).offsetX-i.mask_width/2,s=e.offsetY-i.mask_height/2;console.log(e.offsetX),console.log(e.offsetY),console.log(t),console.log(s),t<0&&(t=0),s<0&&(s=0),t>=i.show_width-i.mask_width&&(t=i.show_width-i.mask_width),s>=i.show_height-i.mask_height&&(s=i.show_height-i.mask_height),i.mask.style.left=t+"px",i.mask.style.top=s+"px";t=i.enlarge_width*t/i.mask_width,s=i.enlarge_height*s/i.mask_height;i.enlarge.style.backgroundPosition="-".concat(t,"px -").concat(s,"px")})}},{key:"changeList",value:function(){var h=this;this.list.addEventListener("click",function(e){var t=(e=e||window.event).target||e.srcElement;if("IMG"===t.nodeName){var s=t.getAttribute("show"),e=t.getAttribute("enlarge");h.show.firstElementChild.src=s,h.enlarge.style.backgroundImage="url(".concat(e,")");for(var i=0;i<h.list.children.length;i++)h.list.children[i].classList.remove("active");t.parentElement.classList.add("active")}})}}]),t}();