"use strict";function asyncGeneratorStep(t,n,a,e,r,o,s){try{var i=t[o](s),c=i.value}catch(t){return void a(t)}i.done?n(c):Promise.resolve(c).then(e,r)}function _asyncToGenerator(i){return function(){var t=this,s=arguments;return new Promise(function(n,a){var e=i.apply(t,s);function r(t){asyncGeneratorStep(e,n,a,r,o,"next",t)}function o(t){asyncGeneratorStep(e,n,a,r,o,"throw",t)}r(void 0)})}}$(function(){var e=null,r={cat_one:"all",cat_two:"all",cat_three:"all",sort_method:"综合",sort_type:"ASC",current:1,pagesize:12};function t(){return(t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.get("../server/getCateOne.php",null,null,"json");case 2:n=t.sent,a='<span data-type="all" class="active">全部</span>',n.list.forEach(function(t){a+='\n        <span data-type="'.concat(t.goods_light,'">').concat(t.goods_light,"</span>\n      ")}),$(".cateOneBox > .right").html(a);case 6:case"end":return t.stop()}},t)}))).apply(this,arguments)}function a(){return n.apply(this,arguments)}function n(){return(n=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.get("../server/getTotalPage.php",r,null,"json");case 2:n=t.sent,$(".pagination").pagination({pageCount:n.total,callback:function(t){r.current=t.getCurrent(),o()}});case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}function o(){return s.apply(this,arguments)}function s(){return(s=_asyncToGenerator(regeneratorRuntime.mark(function t(){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$.get("../server/getGoodsList.php",r,null,"json");case 2:n=t.sent,e=n.list,a="",n.list.forEach(function(t){a+='\n        <li class="thumbnail">\n          <img src="'.concat(t.goods_img1,'" alt="...">\n          <div class="caption">\n            <h3 data-id="').concat(t.goods_id,'">').concat(t.goods_name,'</h3>\n            <p class="price">￥\n              <span class="text-danger">').concat(t.goods_price,"</span>\n              <span> ID: ").concat(t.goods_id,' </span>\n            </p>\n            <p>\n              <a href="javascript:;" class="btn btn-danger addCart" role="button" data-id="').concat(t.goods_id,'">加入购物车</a>\n              <a href="./cart.html" class="btn btn-warning" role="button">去结算</a>\n            </p>\n          </div>\n        </li>\n      ')}),$(".goodsList > ul").html(a);case 7:case"end":return t.stop()}},t)}))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),a(),o(),$(".cateOneBox").on("click","span",function(){$(this).addClass("active").siblings().removeClass("active");var t=$(this).data("type");r.current=1,r.cat_one=t,a(),o()}),$(".catTwoBox").on("click","span",function(){var t=$(this).data("type");$(this).addClass("active").siblings().removeClass("active"),r.cat_three="all",r.current=1,r.cat_two=t,a(),o(),"all"===t?$(".catThreeBox .right").html('<span data-type="all" class="active">全部</span>'):getCateThree()}),$(".catThreeBox").on("click","span",function(){var t=$(this).data("type");$(this).addClass("active").siblings().removeClass("active"),r.cat_three=t,r.current=1,a(),o()}),$(".sortBox").on("click","span",function(){var t=$(this).attr("data-method"),n=$(this).attr("data-type");$(this).addClass("active").siblings().removeClass("active"),r.sort_method=t,r.sort_type=n,a(),o(),$(this).attr("data-type","ASC"===n?"DESC":"ASC").siblings().attr("data-type","ASC")}),$(".goodsList ul").on("click","h3",function(){var t=$(this).data("id");setCookie("goods_id",t),window.location.href="./detail.html"}),$(".goodsList").on("click",".addCart",function(){var t,n=JSON.parse(window.localStorage.getItem("cart"))||[],a=$(this).data("id");n.some(function(t){return t.goods_id==a})?(t=n.filter(function(t){return t.goods_id==a})[0]).cart_number=+t.cart_number+1:((t=e.filter(function(t){return t.goods_id==a})[0]).cart_number=1,n.push(t)),window.localStorage.setItem("cart",JSON.stringify(n))})});