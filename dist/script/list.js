"use strict";!function(a){var i=[],l=[],e=null,s=null,t=a(".list");a.ajax({url:"http://10.31.162.45/1688/php/listdata.php",dataType:"json"}).done(function(n){console.log(n);var o="<ul>";a.each(n,function(n,t){o+='\n                <li>\n                    <a href="detail.html?goods_id='+t.goods_id+'" target="_blank">\n                        <img class="lazy"src="'+t.goods_big_logo+'" data-original="'+t.goods_big_logo+'" width="200" height="200"/>\n                        <p>'+t.goods_id+t.goods_name+'</p>\n                        <span class="price">￥'+t.goods_price+"</span>\n                        <span>"+t.goods_number+"</span>\n                    </a>\n                </li>\n            "}),o+="</ul>",t.html(o),a(function(){a("img.lazy").lazyload({effect:"fadeIn"})}),i=[],l=[],s=e=null,a(".list li").each(function(n,t){l[n]=a(this),i[n]=a(this)})}),a(".page").pagination({pageCount:5,jump:!0,coping:!0,prevContent:"上一页",nextContent:"下一页",homePage:"首页",endPage:"尾页",callback:function(n){a.ajax({url:"http://10.31.162.45/1688/php/listdata.php",data:{page:n.getCurrent()},dataType:"json"}).done(function(n){var o="<ul>";a.each(n,function(n,t){o+='\n                    <li>\n                    <a href="detail.html?goods_id='+t.goods_id+'" target="_blank">\n                        <img class="lazy" src="'+t.goods_big_logo+'" data-original="'+t.goods_big_logo+'" width="200" height="200"/>\n                        <p>'+t.goods_id+t.goods_name+'</p>\n                        <span class="price">￥'+t.goods_price+"</span>\n                        <span>"+t.goods_number+"</span>\n                    </a>\n                </li>\n                    "}),o+="</ul>",t.html(o),i=[],l=[],s=e=null,a(".list li").each(function(n,t){l[n]=a(this),i[n]=a(this)})})}}),a("button").eq(0).on("click",function(){a.each(i,function(n,t){a(".list ul").append(t)})}),a("button").eq(1).on("click",function(){for(var n=0;n<l.length-1;n++)for(var t,o=0;o<l.length-n-1;o++){e=parseFloat(l[o].find(".price").html().substring(1)),(s=parseFloat(l[o+1].find(".price").html().substring(1)))<e&&(t=l[o],l[o]=l[o+1],l[o+1]=t)}a.each(l,function(n,t){a(".list ul").append(t)})}),a("button").eq(2).on("click",function(){for(var n=0;n<l.length-1;n++)for(var t,o=0;o<l.length-n-1;o++){e=parseFloat(l[o].find(".price").html().substring(1)),s=parseFloat(l[o+1].find(".price").html().substring(1)),e<s&&(t=l[o],l[o]=l[o+1],l[o+1]=t)}a.each(l,function(n,t){a(".list ul").append(t)})})}(jQuery);