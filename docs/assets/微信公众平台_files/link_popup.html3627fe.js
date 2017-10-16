define("common/wx/mpEditor/plugin/filter.js",[],function(){
"use strict";
var t=function(t,e){
if(e){
t=$(t);
var r=t.attr("style");
if(r){
var a="(^|;|\\b)[^;]*#attr#\\s*:[^;]*[$;]";
"[object String]"==Object.prototype.toString.call(e)&&(e=[e]);
for(var n=0,l=e.length;l>n;n++){
var i=new RegExp(a.replace("#attr#",e[n]),"g");
r=r.replace(i,"$1");
}
t.attr("style",r);
}
}
},e=function(t){
var e="(<[^<>]*?)\\sstyle=(?:(?:\"([^\"]*?)\")|(?:'([^']*?)')|([^'\"\\s=<>]*?))([\\s\\/>])",r=new RegExp(e,"g");
return t=t.replace(r,function(t,e,r,a,n,l){
var i=r||a||n||"";
if(i){
for(var i=i.split(";"),c=[],o=0,s=i.length;s>o;o++){
var p=i[o].replace(/^\s+/,"").replace(/\s+$/,"");
p&&c.push(p);
}
return e+' style="'+c.join(";")+';"'+l||"";
}
return t;
});
},r=function(t,e){
for(var r="(<#tagName#[^<>]*?)\\s#attribute#=(?:(?:\"([^\"]*?)\")|(?:'([^']*?)')|([^'\"\\s=<>]*?))([\\s\\/>])",a="$1$5",n=0,l=e.length;l>n;n++){
var i=e[n],c=i[0],o=i[1],s="";
s="*"===c?r.replace("#tagName#",""):r.replace("#tagName#",c);
for(var p=new RegExp(s.replace("#attribute#",o),"g");p.test(t);)t=t.replace(p,a);
}
return t;
};
return{
formatStyle:e,
filterStyleAttr:t,
removeAttribute:r
};
});define("common/wx/media/videoDialog.js",["common/wx/popup.js","page/smallvideo/dialog_select_video.css","widget/media/media_dialog.css","common/wx/top.js","common/wx/Tips.js","common/wx/media/video.js","common/wx/pagebar.js","common/wx/time.js","media/media_cgi.js","common/wx/Cgi.js","tpl/media/dialog/videomsg_layout.html.js","tpl/media/videocard.html.js"],function(e){
"use strict";
function i(e){
i.counter||(i.counter=1);
var t="number"!=typeof e.retry?1:e.retry,o=document.createElement("script"),n=document.head||document.getElementsByTagName("head")[0]||document.documentElement,d=e.url+"&t="+Math.random(),a=e.callbackName,s="uninitialized",r="undefined"==typeof e.successCode?200:e.successCode,l="undefined"==typeof e.timeoutCode?500:e.timeoutCode,c="undefined"==typeof e.scriptErrorCode?400:e.scriptErrorCode,m=!1,v=null,u=function(i){
o&&!m&&(m=!0,v&&(clearTimeout(v),v=null),o.onload=o.onreadystatechange=o.onerror=null,
n&&o.parentNode&&n.removeChild(o),o=null,a&&-1==a.indexOf(".")&&(window[a]=null),
i!=r&&"loaded"!=s&&"function"==typeof e.onerror&&e.onerror(i));
};
if(a&&"function"==typeof e.callback){
var _=a;
-1==a.indexOf(".")&&(a=window[a]?a+i.counter++:a,window[a]=function(){
s="loaded",e.callback.apply(null,arguments);
}),d=d.replace("="+_,"="+a);
}
o.onload=o.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&u("loaded"==s?r:c);
},o.onerror=function(){
return t>0?(e.retry=t-1,v&&(clearTimeout(v),v=null),void i(e)):void u(c);
},e.timeout&&(v=setTimeout(function(){
u(l);
},parseInt(e.timeout,10))),s="loading",o.charset="utf-8",setTimeout(function(){
o.src=d;
try{
n.insertBefore(o,n.lastChild);
}catch(e){}
},0);
}
function t(e){
return e&&e.substr&&"04"==e.substr(1,2)?!0:!1;
}
function o(e,i,t,o){
e=e.replace(/^\s+|\s+$/g,""),e=e.replace(/^http:/,"https:"),e=e.replace(/^v\.qq\.com/,"https://v.qq.com");
var n=t||{};
-1!=e.indexOf("http://v.qq.com")||-1!=e.indexOf("https://v.qq.com")||-1!=e.indexOf("v.qq.com")?a(e,i,n,o):/mp\.weixin\.qq\.com\/s/.test(e)?s(e,i):/mp\.weixin\.qq\.com\/mp\/video\?/.test(e)&&r(e,i);
}
function n(e,i){
var i=i||document.location.toString(),t=e+"=",o=i.indexOf(t);
if(-1!=o){
var n=i.indexOf("&",o),d=i.indexOf("?",o);
return-1!=d&&(-1==n||n>d)&&(n=d),d=i.indexOf("#",o),-1!=d&&(-1==n||n>d)&&(n=d),-1==n?i.substring(o+t.length):i.substring(o+t.length,n);
}
return"";
}
function d(e){
e=e||window.location.toString();
var i,t=n("vid",e);
return t||(i=e.match(/\/\w{15}\/(\w+)\.html/))&&(t=i[1]),t||((i=e.match(/\/page\/\w{1}\/\w{1}\/\w{1}\/(\w+)\.html/))?t=i[1]:(i=e.match(/\/(page|play)\/+(\w{11})\.html/))?t=i[2]:(i=e.match(/\/(page)\/(\w+)\.html/))&&(t=i[2])),
t||(i=e.match(/\/boke\/gplay\/\w+_\w+_(\w+)\.html/))&&(t=i[1]),encodeURIComponent(t);
}
function a(e,i,t,o){
var n,a="",s=t.width,r=t.height;
if(n=e.match(new RegExp("(^|&|\\\\?)vid=([^&]*)(&|$|#)")))a=encodeURIComponent(n[2]),
-1!=a.indexOf("_")&&(a=a.split("_")[0]),/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),
t.vid=a,t.return_url="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+s+"&height="+r+"&auto=0",
i(t);else if((n=e.match(new RegExp("(http://)?v\\.qq\\.com/cover[^/]*/\\w+/([^/]*)\\.html")))||(n=e.match(new RegExp("(http://)?v\\.qq\\.com/prev[^/]*/\\w+/([^/]*)\\.html")))||(n=e.match(/\/(\w{15})\.html/))){
if(n.length>=3)var l=encodeURIComponent(n[2]);else var l=encodeURIComponent(n[1]);
var c="https://data.video.qq.com/fcgi-bin/data?tid=554&appid=20001184&appkey=85a707e3a07cc44d&otype=json&idlist="+l,m=document.getElementsByTagName("head")[0],v=document.createElement("script");
v.type="text/javascript",v.src=c,v.async=!0,void 0!==v.onreadystatechange?v.onreadystatechange=function(){
if("loaded"==v.readyState)try{
a=QZOutputJson.results[0].fields.video_ids[0],-1!=a.indexOf("_")&&(a=a.split("_")[0]),
/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),t.vid=a,t.return_url="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+s+"&height="+r+"&auto=0",
i(t);
}catch(o){}
}:v.onload=function(){
try{
a=QZOutputJson.results[0].fields.video_ids[0],-1!=a.indexOf("_")&&(a=a.split("_")[0]),
/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),t.vid=a,t.return_url="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+s+"&height="+r+"&auto=0",
i(t);
}catch(o){}
},m.appendChild(v);
}else a=d(e),""!=a?(-1!=a.indexOf("_")&&(a=a.split("_")[0]),/[a-zA-Z0-9]{11}/.test(a)||BJ_REPORT.monitor(94,"vid:"+a+";url="+e,39),
t.vid=a,t.return_url="https://v.qq.com/iframe/preview.html?vid="+a+"&width="+s+"&height="+r+"&auto=0",
i(t)):!!o&&o(-1);
}
function s(e,i){
g.get({
url:"/cgi-bin/video_mgr?action=get_vid_list&url="+window.encodeURIComponent(e),
success:function(e){
i({
vid:e.vid_list
});
}
});
}
function r(e,i){
var t=e.match(/[\?&]vid\=([^&]*)/);
if(null!=t&&t[1]){
var o=t[1];
i({
vid:o
});
}
}
function l(e){
var t="https://sec.video.qq.com/p/h5vv.video/getextinfo?otype=json&callback=video_static_callback&platform=61001&vid=";
i({
url:t+e.vid,
timeout:3e4,
callbackName:"video_static_callback",
callback:function(i){
if(!i||"o"!=i.s||i.vl.cnt<=0)return void("function"==typeof e.onError&&e.onError());
var t=i.vl.vi[0],o={
title:t.title||"视频",
desc:t.desc||"",
time:t.td||0
};
if(t.pl&&t.pl.cnt>0){
var n=t.pl.pi;
o.p400_300=n[0]?n[0].url:"",o.p140_100=n[1]?n[1].url:"",o.p120_90=n[2]?n[2].url:"",
o.p400_300=o.p400_300&&-1==o.p400_300.indexOf("http")?"http://"+o.p400_300:o.p400_300,
o.p140_100=o.p140_100&&-1==o.p140_100.indexOf("http")?"http://"+o.p140_100:o.p140_100,
o.p120_90=o.p120_90&&-1==o.p120_90.indexOf("http")?"http://"+o.p120_90:o.p120_90;
}
e.onSuc(o);
},
onerror:function(i){
"function"==typeof e.onError&&e.onError(i),wx.jslog({
src:"common/wx/media/videoDialog.js"
},null,52);
},
complete:function(e){
500==e&&wx.jslog({
src:"common/wx/media/videoDialog.js"
},null,52);
}
});
}
function c(e){
e.onSuc();
}
function m(e){
var i="";
if(60>e)10>e&&(e="0"+e),i="00:"+e;else if(e>=60){
var t=Math.floor(e/60),o=(e-60*t)%60;
10>t&&(t="0"+t),10>o&&(o="0"+o),i=t+":"+o;
}
return i;
}
e("common/wx/popup.js"),e("page/smallvideo/dialog_select_video.css"),e("widget/media/media_dialog.css");
var v=e("common/wx/top.js"),u=e("common/wx/Tips.js"),_=e("common/wx/media/video.js"),f=e("common/wx/pagebar.js"),p=e("common/wx/time.js"),h=e("media/media_cgi.js"),g=e("common/wx/Cgi.js"),w=e("tpl/media/dialog/videomsg_layout.html.js"),j=e("tpl/media/videocard.html.js"),x=15,q=21,b=0,y={};
y[x]="video_msg_cnt",y[q]="short_video_cnt";
var O=function(e,i){
var t=$.extend({},i.multi_item?i.multi_item[0]:i);
t.selector=e,t.id=i.app_id,t.app_id=i.app_id,t.tpl="videomsg",t.for_selection=1!=t.is_new_video?!0:3==t.status,
t.for_transfer=!!t.content,t.hide_transfer=!!t.content,t.video_id=t.content,t.source="file",
1==t.is_new_video?(t.time=i.create_time?p.timeFormat(i.create_time):"",t.before_original_video=i.create_time<1453914e3?1:0,
e.html(wx.T(j,t))):(t.create_time=i.create_time,t.img_url=i.img_url,new _(t)),$("#wxVideoBox"+t.id).data("opt",t);
},T=function(e){
console.log(e),this.scene=e.scene||"default",this.onOK=e.onOK,this.can_use_txvideo=e.can_use_txvideo,
this.allowLinks="ueditor"===e.scene||"masssend"===e.scene,this.create();
},C={
create:function(){
var e=this,i=$.parseHTML(wx.T(w,{
scene:e.scene,
token:wx.data.t
}));
e.dialog&&e.dialog.popup("remove"),e.dialog=$(i[0]).popup({
title:"选择视频",
className:"dialog_select_video",
width:960,
onOK:function(){
var i=this,o=e.$dom.find(".js_top.selected").data("id"),n=e.$dom.find(".Js_videomsg.selected").data("opt")||e.$dom.find(".Js_videomsg.selected").parent().data("opt"),d=e.$dom.find(".js_video_url").val();
if(o&&n&&1==n.is_new_video&&3!=n.status)return u.err("该视频目前无法被选择，请选择其它视频"),!0;
if(o&&n&&0==n.is_new_video&&(0!=n.is_new_video||!n.content_url))return u.err("该视频转码未完成，请选择其它视频"),
!0;
if(o){
if(!n)return u.err("请选择视频"),!0;
if(e.onOK&&!e.onOK(o,n))return!0;
i.remove(),e.dialog=null;
}else{
if(o=15,!d)return u.err("请输入视频网址"),!0;
if(!/v\.qq\.com/.test(d.replace("http://","").replace("https://",""))&&!/mp\.weixin\.qq\.com\/s/.test(d)&&!/mp\.weixin\.qq\.com\/mp\/video\?/.test(d))return u.err("只支持已发布的微信公众号链接、视频详情页链接和腾讯视频链接"),
!0;
var a=e.$dom.find(".js_video_search").find(".Js_videomsg.selected"),s=a.data("vid");
if(!s)return u.err("请选择视频"),!0;
if(0==d.indexOf("http://v.qq.com/")||0==d.indexOf("https://v.qq.com/")){
if(t(s))return u.err("该链接为腾讯微博视频网址，此处引用视频只支持已发布的微信公众号链接、视频详情链接或者腾讯视频链接"),!1;
e.onOK&&e.onOK(o,{
align:"none",
height:375,
width:500,
vid:s,
subtype:0,
url:"https://v.qq.com/iframe/preview.html?width=500&height=375&auto=0&vid="+s,
title:a.data("title"),
duration:a.data("duration"),
cover:a.data("cover"),
video_id:s,
content:s
});
}else e.onOK&&e.onOK(o,{
align:"none",
height:375,
width:500,
vid:s,
subtype:/mp\.weixin\.qq\.com\/mp\/video\?/.test(d)?1:2,
url:"https://v.qq.com/iframe/preview.html?width=500&height=375&auto=0&vid="+s,
title:a.data("title"),
duration:a.data("duration"),
cover:a.data("cover"),
video_id:s,
content:s
}),i.remove(),e.dialog=null;
}
},
onCancel:function(){
this.remove(),e.dialog=null;
},
onHide:function(){
this.remove(),e.dialog=null;
}
}),e.$dom=e.dialog.popup("get"),e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),
e.init(),e.dialog.popup("resetPosition");
},
init:function(){
var e=this,i=[];
e.allowLinks&&(i.unshift({
name:"视频链接"
}),e.initVideoUrl(),e.$dom.find(".js_video_search").hide()),"ueditor"==e.scene?b=1:(i.unshift({
name:"素材库",
id:x
}),e.getList(x,0,10)),"ueditor"==e.scene&&1==e.can_use_txvideo?(i.unshift({
name:"素材库",
id:x
}),e.getList(x,0,10)):$(".js_video_status").find(".frm_tips").html("只支持已发布的微信公众号链接、视频详情页链接和腾讯视频链接"),
e.tab=new v(e.$dom.find(".js_videotab"),i),e.tab.selected(0),e.tab.dom.find("a").on("click",function(e){
e.preventDefault();
}),e.$dom.on("click",".js_top",function(){
var i=$(this).data("id");
e.$dom.find(".js_video_status").hide(),e.$dom.find(".js_video_create").hide(),e.$dom.find(".js_pagebar").empty(),
e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"),i?(i==x&&e.$dom.find(".js_video_create").show(),
e.getList(i,0,10)):e.$dom.find(".js_video_search").show(),e.tab.selected($(this).data("index"));
}),e.$dom.on("click",".Js_videomsg",function(){
e.$dom.find(".Js_videomsg.selected").removeClass("selected"),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),
$(this).addClass("selected");
}),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),e.$dom.on("mousewheel","#js_videomsg_list, #js_video_search_list",function(e){
this.scrollTop-=e.originalEvent.wheelDelta>0?60:-60,e.preventDefault();
}).on("DOMMouseScroll","#js_videomsg_list, #js_video_search_list",function(e){
this.scrollTop+=e.originalEvent.detail>0?60:-60,e.preventDefault();
});
},
initVideoUrl:function(){
var e=this;
e.$dom.find(".js_video_loading").hide(),e.$dom.find(".js_video_search").show();
var i=null;
e.$dom.find(".js_video_url").on("input propertychange",function(){
e.$dom.find(".js_video_loading").show(),e.$dom.find(".js_video_url_tip").hide();
var t=$(this).val(),n=e.$dom.find("#js_video_search_list").find(".inner").empty();
t?(clearTimeout(i),i=setTimeout(function(){
return-1==t.indexOf("v.qq.com/")&&!/mp\.weixin\.qq\.com\/s/.test(t)&&!/mp\.weixin\.qq\.com\/mp\/video\?/.test(t)||-1!=t.indexOf("v.qq.com/")&&/(.+)\.v\.qq\.com/.test(t)?(e.$dom.find(".js_video_loading").hide(),
e.$dom.find(".js_video_url_tip").show(),!0):void clearTimeout(i);
},1e3),e.$dom.find(".js_video_loading").show(),e.$dom.find(".js_btn_p").eq(0).removeClass("btn_disabled"),
o(t,function(i){
var t=i.vid,o={
title:"",
cover:"",
duration:"",
for_operation:!1,
for_selection:!0,
for_transfer:!0,
hide_transfer:!0,
is_new_video:!0,
video_ori_status:4,
status:3,
source:"file"
};
if("string"==typeof t){
var d={},a=-1,s=$("<div></div>",n.eq(0)).appendTo(n.eq(0));
l({
vid:t,
onSuc:function(i){
d=$.extend(o,{
title:i.title,
duration:m(i.time),
cover:i.p400_300,
video_id:t
});
var n=setInterval(function(){
a>=0&&(e.$dom.find(".js_video_loading").hide(),s.html(wx.T(j,d)),1==a?s.find(".warn").text("该视频由于版权问题无法在微信中播放").show():2==a?s.find(".warn").text("该视频无法在微信中播放").show():s.find(".Js_videomsg").eq(0).trigger("click"),
clearInterval(n));
},500);
setTimeout(function(){
clearInterval(n);
},3e4);
},
onError:function(){
u.err("系统错误");
}
}),c({
vid:t,
onSuc:function(){
a=0;
},
onError:function(e){
a=e;
}
});
}else{
if(0==t.length)return u.err("此公众号文章中没有视频"),e.$dom.find(".js_video_loading").hide(),
!0;
for(var r=0,v=!1,_=[],f=[],p=0;p<t.length;p++)!function(i){
l({
vid:t[i],
onSuc:function(d){
r++,_[i]=$.extend({},o,{
title:d.title,
duration:m(d.time),
cover:d.p400_300,
video_id:t[i]
}),r!=2*t.length||v||_.each(function(i,t){
var o=$("<div></div>",n.eq([t%2])).appendTo(n.eq([t%2]));
e.$dom.find(".js_video_loading").hide(),o.html(wx.T(j,_[t])),1==f[t]?o.find(".warn").text("该视频由于版权问题无法在微信中播放").show():2==f[t]&&o.find(".warn").text("该视频无法在微信中播放").show();
});
},
onError:function(){}
}),c({
vid:t[i],
onSuc:function(){
r++,f[i]=0,r!=2*t.length||v||_.each(function(i,t){
var o=$("<div></div>",n.eq([t%2])).appendTo(n.eq([t%2]));
e.$dom.find(".js_video_loading").hide(),o.html(wx.T(j,_[t])),1==f[t]?o.find(".warn").text("该视频由于版权问题无法在微信中播放").show():2==f[t]&&o.find(".warn").text("该视频无法在微信中播放").show();
});
},
onError:function(o){
r++,f[i]=o,r!=2*t.length||v||_.each(function(i,t){
var o=$("<div></div>",n.eq([t%2])).appendTo(n.eq([t%2]));
e.$dom.find(".js_video_loading").hide(),o.html(wx.T(j,_[t])),1==f[t]?o.find(".warn").text("该视频由于版权问题无法在微信中播放").show():2==f[t]&&o.find(".warn").text("该视频无法在微信中播放").show();
});
}
});
}(p);
setTimeout(function(){
v=!0,r!=2*t.length&&u.err("获取视频失败，请重试");
},15e3);
}
e.dialog.popup("resetPosition");
},null,function(){
e.$dom.find(".js_video_loading").hide(),u.err("该网址存在错误，请填写正确的腾讯视频网址");
})):(e.$dom.find(".js_video_loading").hide(),e.$dom.find("#js_video_search_list").find(".inner").empty(),
e.$dom.find(".js_btn_p").eq(0).addClass("btn_disabled"));
});
},
initPagebar:function(e,i,t){
var o=this,n=e/i+1;
return i>=t?void o.$dom.find(".js_pagebar").hide():void new f({
container:o.$dom.find(".js_pagebar").show(),
perPage:i,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:t,
callback:function(t){
var d=t.currentPage,a=o.$dom.find(".js_top.selected").data("id");
d!=n&&a&&(e=i*--d,o.getList(a,e,i));
}
});
},
getList:function(e,i,t){
var o=this,n=e==x?h.appmsg:h;
o.$dom.find(".js_video_content").hide(),o.$dom.find(".js_video_loading").show(),
n.getList(e,i,t,function(n){
if(o.dialog&&e==o.$dom.find(".js_top.selected").data("id")){
var d=n.file_item||n.item,a=o.$dom.find("#js_videomsg_list").find(".inner").empty();
d.length?(d.each(function(e,i){
var t=a.eq(i%2),o=$('<div id="appmsg%s"></div>'.sprintf(e.app_id||e.file_id),t).appendTo(t);
O(o,e);
}),o.$dom.find(".js_video_content").show(),o.dialog.popup("resetPosition")):o.$dom.find(".js_video_none").show().find(".js_empty_tips").html(e==q?"暂无素材<br />（素材来源：通过微信用户上传给公众帐号）":"暂无素材"),
o.$dom.find(".js_video_loading").hide(),o.initPagebar(i,t,n.file_cnt[y[e]]||n.file_cnt.video_cnt);
}
},"",b);
}
};
return $.extend(T.prototype,C),T;
});define("common/wx/getVinfo.js",["common/wx/loadscript.js"],function(e){
"use strict";
function t(e){
document.domain="qq.com";
var t="",r=encodeURIComponent(top.window.location.href.replace(/(\?|&)(key|uin)=([\S\s]*?)(&|$)/g,"$1").replace(/&$/,"")),o=["http://btrace.qq.com/kvcollect?BossId=2973&Pwd=1557019983&step=1009&vid=","undefined"!=typeof e.vid?e.vid:"","&platform=","&val=","undefined"!=typeof e.val?e.val:"","&val1=","undefined"!=typeof e.val1?e.val1:"","&vurl=",encodeURIComponent(e.vurl),"&t=",Math.random(),"&url=",r,"&wx_openid=",t].join(""),a=new Image;
a.src=o.substr(0,1024);
}
var r=e("common/wx/loadscript.js"),o=function(e){
var o="https://h5vv.video.qq.com/getvinfo?vid=#vid#&dtype=1&otype=json&callback=video_dynamic_callback&appVer=1&encryptVer=6.3&platform=61001&cKey=#ckey#&sdtfrom=#sdtfrom#";
o=o.replace("#vid#",e.vid).replace("#ckey#",e.ckey).replace("#sdtfrom#",""),o+="&device=&use_proxy_sdk=0";
var a=+new Date;
r({
url:o,
timeout:1e4,
callbackName:"video_dynamic_callback",
callback:function(r){
var o=+new Date,n=o-a;
if(r=r||{},"undefined"==typeof r.em&&(r.em=0),0!=r.em||!r.vl||1*r.vl.cnt<=0||0==r.em&&0==r.preview){
var i=r.em;
return t({
vid:e.vid,
val:n,
val1:i,
vurl:""
}),void("function"==typeof e.onError&&(0==r.em&&(!r.vl||1*r.vl.cnt<=0)?i=-2:0==r.em&&0==r.preview&&(i=-3),
e.onError(-2,{
ret_code:i,
c_time:n,
err_msg:""
})));
}
var i=0,l=r.vl.vi[0],v={
newVid:l.lnk,
time:l.td,
title:l.ti,
width:l.vw,
height:l.vh,
file_size:l.fs,
rate:Math.round(l.fs/1024*8/l.td)
},c=l.ul.ui[0],d=c.url+l.fn,f=r.fl,m="";
if(f&&f.cnt>0)for(var p=f.fi,s=0,u=p.length;u>s;s++)if(1*p[s].sl===1){
m=p[s].name,v.resolution=(p[s].cname||"").replace(/^.*;\((:?.*)P\)$/,"$1")||0;
break;
}
v.format=m,v.vt=c.vt,v.totalUrl=[d,-1!=d.indexOf("?")?"&":"?","vkey=",l.fvkey,"&sdtfrom=","&type=",1==c.dt?"tflv":2==c.dt||0==c.dt?"mp4":"","&platform=","&fmt=",m,"&level=",l.level,"&br=",l.br,"&sp=",l.sp].join(""),
t({
vid:e.vid,
val:n,
val1:i,
vurl:v.totalUrl
}),e.onSuc({
data:v,
oriData:r,
c_time:n,
ret_code:i
});
},
onerror:function(r){
var o,n=+new Date,i=n-a;
switch(1*r){
case 400:
o=-22;
break;

case 500:
o=-21;
break;

default:
o=-23;
}
"function"==typeof e.onError&&e.onError(o,{
ret_code:o,
c_time:i,
err_msg:""
}),t({
vid:e.vid,
val:i,
val1:o,
vurl:""
});
}
});
};
return{
get:o
};
});define("biz_common/utils/url/parse.js",[],function(){
function r(r){
var n=r.length,e=r.indexOf("?"),t=r.indexOf("#");
t=-1==t?n:t,e=-1==e?t:e;
var s=r.substr(0,e),a=r.substr(e+1,t-e-1),o=r.substr(t+1);
return{
host:s,
query_str:a,
hash:o
};
}
function n(n,e){
var t=r(n),s=t.query_str,a=[];
for(var o in e)e.hasOwnProperty(o)&&a.push(o+"="+encodeURIComponent(e[o]));
return a.length>0&&(s+=(""!=s?"&":"")+a.join("&")),t.host+(""!=s?"?"+s:"")+(""!=t.hash?"#"+t.hash:"");
}
function e(r,n,e,t){
r=r||location.href,-1!=r.indexOf("&")&&-1==r.indexOf("?")&&(r=r.replace("&","?"));
var s=new RegExp("([\\?&]"+n+"=)[^&#]*");
return r.match(s)?t===!0?r.replace(s,"$1"+e):r:-1==r.indexOf("?")?r+"?"+n+"="+e:r+"&"+n+"="+e;
}
return{
parseUrl:r,
join:n,
addParam:e
};
});define("common/wx/mpEditor/plugin/remoteimg.js",["common/wx/Tips.js","media/report.js","common/wx/mpEditor/plugin/filter.js"],function(require,exports,module){
"use strict";
function Remoteimg(e){
this.init(e),this.addEvent();
}
var Tips=require("common/wx/Tips.js"),Report=require("media/report.js"),Filter=require("common/wx/mpEditor/plugin/filter.js"),g={
defaultRemoteImg:"http://mmbiz.qpic.cn/mmbiz/G1lssUsxJOsVVJNUIuKfUP7bLm5EVWxXl5znicMum6Os0CMJHPdeHicicZ4W5MGOVa8ooSXYuE61Ek/0"
};
return Remoteimg.defaultRemoteImg=g.defaultRemoteImg,Remoteimg.prototype.init=function(e){
var t=this;
this.uploadUrl=(~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"")+"/cgi-bin/filetransfer?action=upload_material&f=json&scene=8&writetype=doublewrite&groupid=3&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time,
this.uploadUrl=wx.url(this.uploadUrl),this.mpeditor=e,this.editor=e.getUeditor(),
this.domUtils=UE.dom.domUtils,this.ajax=UE.ajax,this.localDomain=["127.0.0.1","localhost","mmbiz.qpic.cn","mmbiz.qlogo.cn","m.qpic.cn",/^http\:\/\/(a|b)(\d)+\.photo\.store\.qq\.com/g,"mmsns.qpic.cn"],
this.catcherUrl=this.editor.options.catcherUrl,this.catchFieldName="imgurl",this.separater="ue_separate_ue",
this.id=+new Date,this.remoteList={},this.Blob_obj_support=function(){
try{
return!!window.Blob&&Boolean(new Blob);
}catch(e){
return!1;
}
}(),this.BlobBuilder=window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder,
this.dataURLtoBlobSupport=function(){
return(t.BlobBuilder||t.Blob_obj_support)&&window.atob&&window.ArrayBuffer&&window.Uint8Array?!0:!1;
}(),this.Blob_Uint8Array_support=function(){
try{
return!!t.Blob_obj_support&&!!window.Uint8Array&&100===new Blob([new Uint8Array(100)]).size;
}catch(e){
return!1;
}
}();
},Remoteimg.prototype.addEvent=function(){
var _t=this,me=this.editor,mpeditor=this.mpeditor;
me.addListener("onpasting",function(e,t){
var r=null,o=t.clipboardData?t.clipboardData:t.originalEvent&&t.originalEvent.clipboardData?t.originalEvent.clipboardData:{},i=o.items;
if(i&&i.length>0){
Report.addNum(Report.reportId[2],5,1),1==i.length&&/image/i.test(i[0].type)&&(r=i[0].getAsFile());
for(var a=0,n=i.length;n>a;a++)/text\/rtf/i.test(i[a].type)&&Report.addNum(Report.reportId[2],6,100);
}
return _t.catchObjectBlob(r);
}),me.addListener("afterpaste aftersetcontent afterinserthtml",function(e,t,r){
for(var o,i,a,n,m=[],s=0;n=r[s++];)if(n.tagName){
o="img"==n.tagName.toLowerCase()?[n]:_t.domUtils.getElementsByTagName(n,"img");
for(var c,p=0;c=o[p++];)_t.handleDataSrc(c),i=c.getAttribute("style")||c.style.cssText||"",
c.getAttribute("src")&&/;?\s*(background|background-image)\s*\:/.test(i)&&($(c).css({
"background-image":"none"
}).removeClass("img_loading"),Filter.filterStyleAttr(c,["background-image"])),_t.http2https("img",c),
a=c.getAttribute("_src")||c.src||"",/^(https?|ftp):/i.test(a)&&!_t.isLocalDomain(a)?me.fireEvent("catchRemoteImage",c,"img",a):/^data:image/i.test(a)?_t.catchDataUrl(a,c):/^blob:/i.test(a)&&_t.catchObjectUrl(c,a);
for("afterpaste"==e&&o.length>0&&me.fireEvent("afterpasteimg","",o),m=[n],m.push.apply(m,_t.domUtils.getElementsByTagName(n,"*")),
p=0;c=m[p++];)if(i=c.getAttribute("style")||c.style.cssText||"",i=i.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),
i&&i[2]){
a=i[2].replace(/^['"]|['"]$/g,"");
var d=_t.http2https("bg",c,a);
a=d&&d.url?d.url:a,/^(https?|ftp):/i.test(a)&&!_t.isLocalDomain(a)?me.fireEvent("catchRemoteImage",c,"bg",a):/^data:image/i.test(a)?_t.catchDataUrl(a,c):/^blob:/i.test(a)&&_t.catchObjectUrl(c,a);
}
for(p=0;c=m[p++];)c.style&&(c.style.borderImage="",c.style.borderImageSource="");
}
}),me.addListener("catchRemoteImage",function(cmd,ci,type,url){
var remoteObj=_t.setRemoteTag({
dom:ci,
uid:"c"+_t.getuid()
});
if(remoteObj){
var uid=remoteObj.uid;
"bg"==type?me.fireEvent("funcPvUvReport","remoteimg_style"):"img"==type&&me.fireEvent("funcPvUvReport","remoteimg_img"),
_t.catchremoteimage([url],{
success:function(xhr){
!!_t.remoteList[uid]&&delete _t.remoteList[uid];
try{
var info=eval("("+xhr.responseText+")");
}catch(e){
return me.fireEvent("funcPvUvReport","remoteimgerr"),me.fireEvent("catchremoteerror",remoteObj,""),
void _t.checkRemoteList(!0);
}
info&&0==info.errcode&&info.url?(me.fireEvent("funcPvUvReport","remoteimgsuc"),me.fireEvent("catchremotesuccess",remoteObj,info.url,info.img_format)):(me.fireEvent("funcPvUvReport","remoteimgerr"),
me.fireEvent("catchremoteerror",remoteObj,"")),_t.checkRemoteList(!0);
},
error:function(){
!!_t.remoteList[uid]&&delete _t.remoteList[uid],me.fireEvent("funcPvUvReport","remoteimgerr"),
me.fireEvent("catchremoteerror",remoteObj,""),_t.checkRemoteList(!0);
}
});
}
}),me.addListener("checkRemoteList",function(e,t){
return _t.checkRemoteList(t===!0?!0:!1);
}),me.addListener("getRemoteList",function(){
return _t.remoteList;
});
},Remoteimg.prototype.catchObjectBlob=function(e,t){
var r=this,o=this.editor,i=!1;
if(null!==e&&(i=r.filterImgSize(e)),null!==e&&i!==!0)return r.pasteImageError({
msg:i.msg?i.msg:"图片粘贴失败",
dom:t
}),!0;
if(null!==e&&i===!0){
var a,n=e.type.split("/")[1]||"";
if(a=o.window.URL||o.window.webkitURL){
var m=a.createObjectURL(e);
if("string"==typeof m)return t?r.uploadPasteImg({
image:m,
blob:e,
type:n,
dom:t
}):r.pasteImageInserted({
image:m,
blob:e,
type:n
}),!0;
}
if("function"!=typeof FileReader)return!1;
var s=new FileReader;
return s.onload=function(o){
o.target&&2==o.target.readyState&&(t?r.uploadPasteImg({
image:m,
blob:e,
type:n,
dom:t
}):r.pasteImageInserted({
image:o.target.result,
blob:e,
type:n
}));
},s.onerror=function(){
r.pasteImageError({
msg:"图片粘贴失败",
dom:t
});
},s.readAsDataURL(e),!0;
}
},Remoteimg.prototype.catchObjectUrl=function(e,t){
var r=this,o=this.editor,i=r.setRemoteTag({
dom:e,
uid:"p"+r.getuid()
});
if(i){
var a=i.uid,n=new Image;
n.onerror=function(){
!!r.remoteList[a]&&delete r.remoteList[a],o.fireEvent("catchremoteerror",i,""),r.checkRemoteList(!0);
},n.onload=function(){
!!r.remoteList[a]&&delete r.remoteList[a],n.onerror=null,n.onload=null;
var t=n.width||n.naturalWidth,i=n.height||n.naturalHeight,m=o.document.createElement("canvas"),s=m.getContext("2d");
m.width=t,m.height=i,s.drawImage(n,0,0,t,i);
var c=m.toDataURL();
r.catchDataUrl(c,e);
},n.src=t;
}
},Remoteimg.prototype.catchDataUrl=function(e,t){
var r=this,o=r.dataURLtoBlob(e),i=!1;
if(o&&!r.validImg(o)&&(o=null),o)if(i=r.filterImgSize(o),i===!0){
var a=o.type.split("/")[1]||"";
r.uploadPasteImg({
image:e,
blob:o,
dom:t,
type:a
});
}else r.pasteImageError({
msg:i.msg?i.msg:"图片粘贴失败",
dom:t
});else r.pasteImageError({
msg:"图片粘贴失败",
dom:t
});
},Remoteimg.prototype.objectUrl2Blob=function(e,t,r){
var o=new XMLHttpRequest;
o.onerror=function(){
"function"==typeof r&&r();
},o.onreadystatechange=function(){
4===o.readyState&&(o.onreadystatechange=null,o.onerror=null,o.status>=200&&o.status<300?"function"==typeof t&&t(this.response):"function"==typeof r&&r());
},o.responseType="blob",o.open("GET",e,!0),o.send();
},Remoteimg.prototype.pasteImageError=function(e){
var t=this,r=this.editor;
if(!e.dom)return void r.fireEvent("catchremoteerror",null,e.msg||"");
var o=t.setRemoteTag({
dom:e.dom,
force:!0,
uid:"p_"+this.getuid()
});
!!t.remoteList[o.uid]&&delete t.remoteList[o.uid],r.fireEvent("catchremoteerror",o,e.msg||"");
},Remoteimg.prototype.pasteImageInserted=function(e){
for(var t=this,r=this.editor,o=r.fireEvent("insertMaterialImg",[{
format:e.type,
src:e.image
}]),i=0,a=o.length;a>i;i++){
var n=o[i];
if(/^img$/i.test(n.nodeName)){
e.dom=n;
break;
}
var m=n.getElementsByTagName("img");
if(m&&m.length>0){
e.dom=m[0];
break;
}
}
e.dom&&/^img$/i.test(e.dom.nodeName)&&t.uploadPasteImg(e);
},Remoteimg.prototype.dataURLtoBlob=function(e){
if(!this.dataURLtoBlobSupport)return!1;
try{
var t,r=e.split(",");
t=r[0].indexOf("base64")>=0?window.atob(r[1]):decodeURIComponent(r[1]);
for(var o=new ArrayBuffer(t.length),i=new Uint8Array(o),a=0,n=t.length;n>a;a++)i[a]=t.charCodeAt(a);
var m=r[0].split(":")[1].split(";")[0];
if(this.Blob_obj_support)return this.Blob_Uint8Array_support?new Blob([i],{
type:m
}):new Blob([o],{
type:m
});
var s=new BlobBuilder;
return s.append(o),s.getBlob(m);
}catch(c){
return!1;
}
},Remoteimg.prototype.setRemoteTag=function(e){
var t=this,r=this.editor,o=r.fireEvent("get_current_article");
if(!e.dom||!e.uid)return!1;
var i=e.dom.getAttribute("data-remoteid");
if(i&&t.remoteList[i]){
if(e.force!==!0)return!1;
delete t.remoteList[i];
}
i=i||e.uid;
var a=t.remoteList[i]={
article:o,
uid:i,
defaultRemoteImg:g.defaultRemoteImg
};
return t.domUtils.setAttributes(e.dom,{
"data-remoteid":i
}),a;
},Remoteimg.prototype.uploadPasteImg=function(opt){
var _t=this,me=this.editor;
if("function"!=typeof FormData)return _t.pasteImageError({
msg:"粘贴图片失败",
dom:opt.dom
}),!1;
var id=this.getuid(),remoteObj=_t.setRemoteTag({
dom:opt.dom,
uid:"p_"+id
});
if(remoteObj){
var uid=remoteObj.uid,form=new FormData,extensions=opt.blob.type.split("/")[1]||"",url=this.uploadUrl+"&seq="+id,filename="粘贴图片_"+this.formatDate(new Date,"YYYYMMDDHHIISS")+(extensions?"."+extensions:"");
form.append("id",id),form.append("name",filename),form.append("type",opt.blob.type),
form.append("lastModifiedDate",new Date),form.append("size",opt.blob.size),form.append("file",opt.blob,filename);
var xhr=new XMLHttpRequest;
xhr.onerror=function(){
!!_t.remoteList[uid]&&delete _t.remoteList[uid],me.fireEvent("funcPvUvReport","screen_shot_fail"),
me.fireEvent("catchremoteerror",remoteObj,""),_t.checkRemoteList(!0);
},xhr.onreadystatechange=function(error){
if(4===xhr.readyState)if(xhr.upload.onprogress=null,xhr.onreadystatechange=null,
xhr.onerror=null,!!_t.remoteList[uid]&&delete _t.remoteList[uid],xhr.status>=200&&xhr.status<300){
try{
var info=eval("("+xhr.responseText+")");
}catch(e){
return me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,""),
void _t.checkRemoteList(!0);
}
if(info&&info.base_resp&&0==info.base_resp.ret&&info.cdn_url){
var cdnUrl=info.cdn_url.http2https();
me.fireEvent("funcPvUvReport","screen_shot_suc"),me.fireEvent("catchremotesuccess",remoteObj,cdnUrl,extensions);
}else info&&info.base_resp&&220001==info.base_resp.ret?Tips.err('"素材管理"中的存储数量已达到上限，请删除后再操作。'):info&&info.base_resp&&220002==info.base_resp.ret?Tips.err("你的图片库已达到存储上限，请进行清理。"):(me.fireEvent("funcPvUvReport","screen_shot_fail"),
me.fireEvent("catchremoteerror",remoteObj,""));
_t.checkRemoteList(!0);
}else me.fireEvent("funcPvUvReport","screen_shot_fail"),me.fireEvent("catchremoteerror",remoteObj,""),
_t.checkRemoteList(!0);
},xhr.open("POST",url),xhr.send(form);
}
},Remoteimg.prototype.validImg=function(e){
return e.size<1024?!1:!0;
},Remoteimg.prototype.filterImgSize=function(e){
var t=5242880,r=",bmp,png,jpeg,jpg,gif,",o=","+(e.type.split("/")[1]||"")+",";
return e.size>t?{
type:1,
msg:"截图的图片大小不能超过5M"
}:-1==r.indexOf(o)?{
type:2,
msg:"截图的图片必须为以下格式：bmp,png,jpeg,jpg,gif"
}:!0;
},Remoteimg.prototype.checkRemoteList=function(e){
var t=0;
for(var r in this.remoteList)this.remoteList.hasOwnProperty(r)&&t++;
return t>0?!1:(e===!0&&(this.editor.fireEvent("draft_force_save"),this.editor.fireEvent("remoteimg_all_complete")),
!0);
},Remoteimg.prototype.handleDataSrc=function(e){
var t=e.getAttribute("src")||"",r=e.getAttribute("data-src")||"";
/^data:image/i.test(t)&&(/^http:\/\/mmbiz\.qpic\.cn/.test(r)||/^https:\/\/mmbiz\.qlogo\.cn/.test(r))&&(e.setAttribute("src",r),
e.removeAttribute("data-src"));
},Remoteimg.prototype.http2https=function(e,t,r){
if("img"==e){
var o=t.getAttribute("src")||"";
if(!this.isCdnImg(o))return;
var i=this.formatUrl(o);
return t.setAttribute("src",i.url),!!i.format&&t.setAttribute("data-type",i.format),
t.removeAttribute("_src"),t.removeAttribute("data-src"),i;
}
if("bg"==e&&r&&this.isCdnImg(r)){
var i=this.formatUrl(r);
return t.style.backgroundImage=i.url,i;
}
return null;
},Remoteimg.prototype.formatUrl=function(e){
e=e||"";
var t=e.match(/(?:\?|&)wx_fmt=(.*?)(?:&|$)/)||[];
return t=t[1]||"",e=e.http2https().replace(/\?.*$/,"?"),t&&e&&(e=e+"wx_fmt="+t),
{
url:e,
format:t
};
},Remoteimg.prototype.catchremoteimage=function(e,t){
var r=e.join(this.separater),o=(this.editor,{
timeout:6e4,
onsuccess:function(){
"function"==typeof t.success&&t.success.apply(this,arguments);
},
onerror:function(){
"function"==typeof t.error&&t.error.apply(this,arguments);
}
});
try{
var i=decodeURIComponent(r);
o[this.catchFieldName]=encodeURI(i);
}catch(a){
o[this.catchFieldName]=r;
}
o.t="ajax-editor-upload-img";
var n=this;
setTimeout(function(){
n.ajax.request(n.catcherUrl,o);
},2e3);
},Remoteimg.prototype.getuid=function(){
return this.id++;
},Remoteimg.isCdnImg=Remoteimg.prototype.isCdnImg=function(e){
for(var t,r=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i],o=0;t=r[o++];)if(t.test(e))return!0;
return!1;
},Remoteimg.isLocalDomain=Remoteimg.prototype.isLocalDomain=function(e){
for(var t,r=[/^http(s)?:\/\/mmbiz\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmbiz\.qlogo\.cn([\/?].*)*$/i,/^http(s)?:\/\/m\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mmsns\.qpic\.cn([\/?].*)*$/i,/^http(s)?:\/\/mp\.weixin\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/res\.wx\.qq\.com([\/?].*)*$/i,/^http(s)?:\/\/(a|b)(\d)+\.photo\.store\.qq\.com([\/?].*)*$/i],o=0;t=r[o++];)if(t.test(e))return!0;
return!1;
},Remoteimg.prototype.formatDate=function(e,t){
var r=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,this.addZero(e.getFullYear()%100,2)).replace(/mm|MM/,this.addZero(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,this.addZero(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,this.addZero(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,this.addZero(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,this.addZero(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds());
return r;
},Remoteimg.prototype.addZero=function(e,t){
for(var r=0,o=t-(e+"").length;o>r;r++)e="0"+e;
return e+"";
},Remoteimg;
});define("tpl/mpEditor/plugin/img_popup.html.js",[],function(){
return'<div class="js_img_popup edui_mask_edit_group">\n    {if hasCropimg}\n    <div class="edui-clickable edui_mask_edit_meta first_child" onclick="$$._cropImg()">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_crop"></i>\n            裁剪        </div>\n    </div>\n    {/if}\n    <div class="edui-clickable edui_mask_edit_meta" onclick="$$._imgReplace()">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_replace"></i>\n            图片替换        </div>\n    </div>\n	<div class="js_canceladapt edui-clickable edui_mask_edit_meta tips_global" onclick="$$._imgAutoWidth(false)" style="{if !hasadapt}display:none;{/if}">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_canceladapt"></i>\n            取消自适应        </div>\n    </div>\n	<div class="js_adapt edui-clickable edui_mask_edit_meta" onclick="$$._imgAutoWidth(true)" style="{if hasadapt}display:none;{/if}">\n        <div class="edui_mask_edit_meta_inner">\n            <i class="icon_edui_mask_img icon_edui_mask_img_adapt"></i>\n            自适应手机屏幕宽度        </div>\n    </div>\n</div>\n\n\n';
});define("common/wx/media/weappDialog.js",["common/wx/popup.js","biz_web/ui/checkbox.js","tpl/media/weapp_dialog.html.js","tpl/media/weapp_dialog_content.html.js","common/wx/Cgi.js","common/wx/upload.js","common/wx/Step.js","common/wx/Tips.js"],function(e){
"use strict";
e("common/wx/popup.js"),e("biz_web/ui/checkbox.js");
var i=e("tpl/media/weapp_dialog.html.js"),n=e("tpl/media/weapp_dialog_content.html.js"),p=e("common/wx/Cgi.js"),s=e("common/wx/upload.js"),_=e("common/wx/Step.js"),a=e("common/wx/Tips.js"),t=function(e,t){
var c=void 0,l=null,d={
appid:e.appid,
main_page:e.main_page,
nick_name:e.nick_name,
content:e.content,
image:e.image
};
void 0!==e.selected&&(c=e.selected);
var o=$(i).popup({
title:"选择小程序",
width:960,
className:"weapp_select_dialog",
buttons:[],
onOK:function(){},
onCancel:function(){
this.remove();
},
onHide:function(){
this.remove();
}
}),f=new _({
container:".js_weapp_select_step",
selected:e.step||1,
names:["选择小程序","填写详细信息"]
});
o.find(".dialog_ft").hide(),o.find(".js_weapp_select_cancel").click(function(){
o.find(".pop_closed").click(),t();
});
var w=function(){
s.uploadCdnFile({
container:"#weapp_select_upload",
multi:!1,
type:2,
fileSingleSizeLimit:2097152,
imageSize:!0,
onComplete:function(e,i,n,p){
var s=p.content,_=new Image;
_.onload=function(){
return 1080!==this.width||864!==this.height?void a.err("图片尺寸必须为1080*864像素"):(o.find("[name=imageUrl]").val(s),
o.find(".js_weapp_select_step4").find(".js_weapp_select_cover").show(),void o.find(".js_weapp_select_step4").find(".js_weapp_select_cover_preview").css("background-image",'url("'+s+'")'));
},_.onerror=function(){
a.err("图片上传失败");
},_.src=s;
}
});
},m=function(){
s.uploadCdnFile({
container:"#js_weapp_link_image_upload",
multi:!1,
type:2,
fileSingleSizeLimit:2097152,
imageSize:!0,
onComplete:function(e,i,n,p){
var s=p.content;
o.find("[name=image]").val(s),o.find(".js_weapp_select_step4").find(".js_weapp_link_image_cover").show(),
o.find(".js_weapp_select_step4").find(".js_weapp_link_image_preview").css("background-image",'url("'+s+'")');
}
});
},r=function(){
o.find(".js_weapp_select_step1").show(),o.find(".js_weapp_select_step2").hide(),
o.find(".js_weapp_select_step4").hide(),f.setStep(1);
var e=o.find(".js_weapp_select_step1");
c||e.find(".js_weapp_select_next_step").addClass("btn_disabled");
var i=function(e){
if(e.find(".js_weapplink_loading").hide(),l.length){
$.each(l,function(e,i){
i.pic_url=i.pic_url||"http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";
}),e.find(".js_weapplink_hint_select").show(),e.find(".js_weapplink_list").html(wx.T(n,{
list:l
})).show();
var i=e.find(".js_weapplink_item_inner").click(function(){
i.find(".js_weapplink_select_mask").hide(),$(this).find(".js_weapplink_select_mask").show(),
c=$(this).data("appid");
for(var n=0;n<l.length;n++)l[n].appid===c&&(d=l[n]);
e.find(".js_weapp_select_next_step").removeClass("btn_disabled");
}).each(function(){
c===$(this).data("appid")&&$(this).find(".js_weapplink_select_mask").show();
});
}else e.find(".js_weapplink_hint_none").show();
};
l?i(e,t):p.get({
url:"/advanced/operselfmenu?action=get_bind_wxopen_info"
},function(n){
return 0==n.base_resp.ret&&n.bind_info?(l=JSON.parse(n.bind_info).bind_list,void i(e,t)):(p.handleRet(n,{
id:"64524",
key:"2",
msg:"系统繁忙"
}),t());
});
},j=function(){
o.find(".js_weapp_select_step1").hide(),o.find(".js_weapp_select_step2").hide(),
o.find(".js_weapp_select_step4").show(),f.setStep(2);
var e=o.find(".js_weapp_select_step4");
console.log(d),e.find('[name="path"]').val(d.main_page),e.find(".js_name").text(d.nick_name),
d.image?(e.find(".js_weapp_display_way").eq(1).click(),e.find("[name=image]").val(d.image),
e.find(".js_weapp_link_image_cover").show(),e.find(".js_weapp_link_image_preview").css("background-image",'url("'+d.image+'")')):e.find("[name=content]").val(d.content||"");
};
o.find(".js_weapp_select_step4").find(".js_weapp_select_cover_remove").click(function(){
o.find("[name=imageUrl]").val(""),o.find(".js_weapp_select_step4").find(".js_weapp_select_cover").hide(),
o.find(".js_weapp_select_step4").find(".js_weapp_select_cover_preview").css("background-image","");
}),o.find(".js_weapp_select_step4").find(".js_weapp_select_cover").hide(),o.find(".js_weapp_select_step4").find(".js_weapp_link_image_remove").click(function(){
o.find("[name=image]").val(""),o.find(".js_weapp_select_step4").find(".js_weapp_link_image_cover").hide(),
o.find(".js_weapp_select_step4").find(".js_weapp_link_image_preview").css("background-image","");
}),o.find(".js_weapp_select_step4").find(".js_weapp_link_image_cover").hide(),o.find(".js_weapp_select_step1").find(".js_weapp_select_next_step").click(function(){
$(this).hasClass("btn_disabled")||j();
}),o.find(".js_weapp_select_step2").find(".js_weapp_select_prev_step").click(r),
o.find(".js_weapp_select_step2").find(".js_weapp_select_next_step").click(j),o.find(".js_weapp_select_step4").find(".js_weapp_select_prev_step").click(r),
o.find(".js_weapp_select_step4").find(".js_weapp_select_confirm").click(function(){
var e=o.find(".js_weapp_display_way:checked").val(),i=o.find("[name=path]").val();
if("card"==e){
var n=o.find("[name=title]").val(),p=o.find("[name=imageUrl]").val();
if(!n)return a.err("标题不能为空");
if(n.length>35)return a.err("标题不能多于35个字");
if(!p)return a.err("请上传卡片图片");
}else if("text"==e){
var s=$.trim(o.find("[name=content]").val());
if(!s)return a.err("文字内容不能为空");
}else if("image"==e){
var _=o.find("[name=image]").val();
if(!_)return a.err("请上传图片");
}
return i?i.length>1024?a.err("小程序路径长度不能大于1024字符"):(o.popup("hide"),void t(d.appid||c,d,{
title:n,
description:"",
path:i,
imageUrl:p,
image:_,
content:s,
type:e
})):a.err("小程序路径不能为空");
}),o.find(".js_weapp_select_step4").find(".js_weapp_display_way").checkbox({
multi:!1,
onChanged:function(e){
var i=o.find(".js_weapp_select_step4"),n=e.val();
i.find(".js_weapp_way").hide(),i.find(".js_weapp_"+n+"_way").show(),"image"==n?setTimeout(function(){
m(),m=function(){};
},100):"card"==n&&setTimeout(function(){
w(),w=function(){};
},100);
}
}),4==e.step?j():r();
};
return{
show:t
};
});define("common/wx/media/audioMusicDialog.js",["tpl/media/audioMusicDialog.html.js","tpl/media/plugin/audioItem.html.js","tpl/media/dialog/audiomsg_layout.html.js","common/wx/Cgi.js","biz_common/moment.js","common/wx/media/audio.js","common/wx/pagebar.js","common/wx/Tips.js"],function(e,i,t){
"use strict";
var a=e("tpl/media/audioMusicDialog.html.js"),n=e("tpl/media/plugin/audioItem.html.js"),o=e("tpl/media/dialog/audiomsg_layout.html.js"),c=e("common/wx/Cgi.js"),s=e("biz_common/moment.js"),l=e("common/wx/media/audio.js"),r=e("common/wx/pagebar.js"),u=e("common/wx/Tips.js"),d={
qqsearchInfo:{},
curSearchKey:""
},m=10,_=null,f=function(e){
$("#audio_music_dialog_content").closest(".dialog").find(".dialog_ft .js_btn_p").eq(0).toggleClass("btn_disabled",e);
},h=[],p=function(e){
return e?/K$/i.test(e)?1*e.replace(/K$/i,""):/M$/i.test(e)?1024*e.replace(/M$/i,""):/G$/i.test(e)?1024*e.replace(/G$/i,"")*1024:0:0;
},g=function(e,i,t,a,o,u){
f(!0),c.get({
url:"/cgi-bin/filepage",
dataType:"json",
data:{
type:3,
begin:i,
count:t
},
mask:!1
},function(i){
if(0==i.base_resp.ret){
var t=i.page_info.file_item;
h=[],t.each(function(e){
if(1==e.trans_state){
var i={
is_aac:1*e.accept_aac?1:0,
name:e.name,
title:e.title||e.name,
update_time:s.unix(e.update_time).format("YYYY-MM-DD"),
play_length:e.play_length,
file_id:e.file_id,
voice_encode_fileid:e.voice_encode_fileid,
disabled:o||a&&e.play_length>6e4,
format_play_length:s.unix(e.play_length/1e3).format("mm:ss"),
low_size:1*(1*e.voice_low_media_size/1024).toFixed(2)||0,
high_size:1*(1*e.voice_high_media_size/1024).toFixed(2)||0,
source_size:p(e.size)
};
1*i.high_size===0&&1*i.source_size!==0&&(i.high_size=i.source_size),1*i.low_size===0&&1*i.source_size!==0&&(i.low_size=i.source_size),
h.push(i);
}
});
var d=wx.T(n,{
list:h
});
e.find(".jsPluginAudioList").html(d),e.find(".jsPluginAudioRadio").checkbox(),a&&$(".jsAudioTips").show(),
e.find(".jsPluginAudioPlay").each(function(e,i){
var t=h[e];
return t.selector="#"+$(i).attr("id"),t.source="file",new l($.extend({},t,{
qqmusictpl:!0
}));
}),u||new r({
container:".jsPluginAudioPage",
totalItemsNum:i.page_info.file_cnt.voice_cnt,
callback:function(i){
g(e,(i.currentPage-1)*m,m,a,o,!0);
}
});
}else c.show(i);
});
},w=null,v=function(e){
var i="";
if(60>e)i="00:"+(10>e?"0":"")+e;else{
var t=Math.floor(e/60),a=e-60*t;
i=(10>t?"0":"")+t+":"+(10>a?"0":"")+a;
}
return i;
},j=function(e){
var i="";
return i=e>1048576?parseInt(e/1048576)+"M":"1M";
},y=function(e){
var i=$.extend({},e);
return i&&i.list&&$.each(i.list,function(e,i){
var t=i.f.split("|"),a=t[7]||0,n=t[12]||0,o=t[0],c=t[t.length-1],s=t[t.length-3],l="/"+c.charAt(c.length-2)+"/"+c.charAt(c.length-1)+"/"+c+".jpg";
$.extend(i,{
songtime:v(a),
songsize:j(n),
songid:o,
mid:s,
albumurl:l,
play_length:1e3*a
});
}),i;
},b=function(e){
e.find(".qqmusic_audioplay").each(function(){
var e=$(this),i=e.attr("audioid"),t=e.attr("audiourl"),a={
selector:"#url_"+i,
qqmusicurl:t,
id:i,
qqmusictpl:!0
};
new l(a);
}),e.find(".frm_radio").checkbox({
multi:!1,
onChanged:function(i){
w.musicid=i.val(),w.songname=(e.find("#songname_"+w.musicid).html()||"").html(!1),
w.singername=(e.find("#singername_"+w.musicid).html()||"").html(!1),w.url=e.find("#url_"+w.musicid).attr("audiourl"),
w.mid=e.find("#url_"+w.musicid).attr("mid"),w.albumurl=e.find("#url_"+w.musicid).attr("albumurl"),
w.play_length=e.find("#url_"+w.musicid).attr("play_length");
}
});
},k=function(e,i){
var t=e.find("#keyInput").val(),a=i&&i.currentpage,n=i&&i.perpage,o=i&&i.totalnum;
new r({
container:"#js_music_pagebar",
perPage:n,
initShowPage:a,
totalItemsNum:o,
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
var o=i.currentPage;
o!=a&&(a=o,z(e,{
keyword:t,
perpage:n,
currentpage:a
}));
}
});
},x=function(e){
e&&(d.qqsearchInfo[encodeURIComponent(e)]={
hasReport:!1,
hasRetData:!1,
hasSelected:!1
});
},q=function(e){
var i=encodeURIComponent(e);
return d.qqsearchInfo[i]?d.qqsearchInfo[i]:null;
},C=function(e){
var i=encodeURIComponent(e);
d.qqsearchInfo.hasOwnProperty(i)&&delete d.qqsearchInfo[i];
},I=function(){
var e=d.qqsearchInfo;
if(!_){
d.curSearchKey="";
var i=[];
for(var t in e)e[t].hasReport===!0?delete e[t]:e[t].hasRetData===!0&&e[t].hasSelected===!0?(i.push("67292_5_1;67292_8_1"),
e[t].hasReport=!0,delete e[t]):e[t].hasRetData===!0&&e[t].hasSelected===!1&&(i.push("67292_5_1;67292_10_1"),
e[t].hasReport=!0,delete e[t]);
if(i.length>0){
var a=new Image;
a.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+i.join(";")+"&t="+Math.random();
}
}
},z=function(e,i){
q(i.keyword)||x(i.keyword),f(!0),window.MusicJsonCallback=function(i){
var t=new Image;
t.src="//mp.weixin.qq.com/mp/jsmonitor?idkey=67292_1_1&t="+Math.random();
var a=q(i.keyword);
if(a.hasReport===!1)if(i&&0==i.retcode&&i.list&&!!i.list.length>0)a.hasRetData=!0;else{
a.hasRetData=!1,a.hasReport=!0;
var t=new Image;
t.src="//mp.weixin.qq.com/mp/jsmonitor?idkey=67292_5_1;67292_6_1&t="+Math.random(),
C(i.keyword);
}
return _?(d.curSearchKey=i.keyword,i=y(i),w={},e.find("#dialog_audio_container").html(wx.T(o,i)),
b(e),void k(e,{
totalnum:i.totalnum,
perpage:i.perpage,
currentpage:i.curpage
})):void I();
};
var t=new Image;
t.src="//mp.weixin.qq.com/mp/jsmonitor?idkey=67292_0_1&t="+Math.random();
var a=document.head||document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script"),c=["https://auth-external.music.qq.com/open/fcgi-bin/fcg_weixin_music_search.fcg?remoteplace=txt.weixin.officialaccount&w=",encodeURIComponent(i.keyword),"&platform=weixin&jsonCallback=MusicJsonCallback&perpage=",i.perpage,"&curpage=",i.currentpage].join("");
n.type="text/javascript",n.src=c,a.appendChild(n);
},M={
show:function(e){
if(!_){
var i=wx.T(a,e);
_=$(i).popup({
className:"align_edge audio_dialog js_audio_music_dialog",
width:"960",
title:"选择音频",
buttons:[{
text:"确定",
click:function(){
var i=this,a=M.getCurrentValue();
if(a){
var n=t.closest(".js_audio_music_dialog").find(".js_btn_p").eq(0);
if(n.hasClass("btn_loading"))return;
if(n.btn(0),"audio"===a.type)e.onOK&&e.onOK.call(_,a),_=null,i.remove();else{
if(d.curSearchKey){
var o=q(d.curSearchKey);
o&&o.hasReport===!1&&o.hasRetData===!0&&(o.hasSelected=!0);
}
e.onOK&&e.onOK.call(_,a),_=null,I(),i.remove();
}
}else u.err("请选择需要插入的语音或音乐");
},
type:"primary"
},{
text:"取消",
click:function(){
_=null,I(),this.remove(),e.onCancel&&e.onCancel.call(_);
}
}],
onHide:function(){
_=null,I(),this.remove(),e.onCancel&&e.onCancel.call(_);
}
});
var t=$("#audio_music_dialog_content");
if(f(!0),t.on("change","input.js_audio_music_item_radio",function(){
f(!1);
}),e.allowAudio&&(t.find(".jsPluginAudioNew").click(function(){
window.open(wx.url("/cgi-bin/operate_voice?oper=voice_get&t=media/audio_add"),"_blank");
}),g(t,0,m,e.hasAudioLengthLimit,e.audioDisabled)),e.allowMusic){
w={};
var n=t.find("#searchDiv");
n.find("#keyInput").keydown(function(e){
var i="which"in e?e.which:e.keyCode;
13==i&&n.find("#searchBt").trigger("click");
}),n.find("#searchCloseBt").click(function(){
n.find("#keyInput").val("");
}),n.find("#searchBt").click(function(){
var e=n.find("#keyInput").val();
e.length>0?z(t,{
keyword:e,
perpage:10,
currentpage:1
}):u.err("请输入搜索条件");
}),n.find("#reload").click(function(){
n.find("#searchCloseBt").trigger("click");
});
}
t.find(".js_audio_tab_btn").click(M.selectAudio),t.find(".js_music_tab_btn").click(M.selectMusic),
e.allowAudio?M.selectAudio():e.allowMusic&&M.selectMusic();
}
},
selectAudio:function(){
var e=$("#audio_music_dialog_content");
e.find(".js_audio_block").show(),e.find(".js_music_block").hide(),e.find(".js_audio_tab_btn").addClass("selected"),
e.find(".js_music_tab_btn").removeClass("selected"),f(!M.getCurrentValue());
},
selectMusic:function(){
var e=$("#audio_music_dialog_content");
e.find(".js_music_block").show(),e.find(".js_audio_block").hide(),e.find(".js_music_tab_btn").addClass("selected"),
e.find(".js_audio_tab_btn").removeClass("selected"),f(!M.getCurrentValue());
},
getCurrentValue:function(){
var e=$("#audio_music_dialog_content");
if(e.find(".js_audio_tab_btn").hasClass("selected")){
var i=e.find(".jsPluginAudioRadio[checked=checked]").data("index"),t=h[i];
if(!t)return;
return t={
type:"audio",
is_aac:t.is_aac,
name:t.name,
title:t.title,
update_time:t.update_time,
play_length:t.play_length,
file_id:t.file_id,
voice_encode_fileid:t.voice_encode_fileid,
duration:t.format_play_length,
format_play_length:t.format_play_length,
low_size:t.low_size,
high_size:t.high_size,
source_size:t.source_size
};
}
if(e.find(".js_music_tab_btn").hasClass("selected")){
if("undefined"==typeof w.musicid)return;
return w.type="music",w;
}
}
};
t.exports=M;
});define("common/wx/media/templateListDialog.js",["common/wx/popup.js","media/template_common.js","common/wx/Tips.js","common/wx/Cgi.js","tpl/media/templateListDialog.html.js","tpl/media/templateListContent.html.js","common/wx/pagebar.js"],function(t){
"use strict";
function e(t){
this._o={
token:"",
onSuccess:function(){}
},this._g={
perPage:4,
dom:{}
},this._extend(t),this.initDialog();
}
t("common/wx/popup.js");
var o=t("media/template_common.js"),i=t("common/wx/Tips.js"),a=(t("common/wx/Cgi.js"),
t("tpl/media/templateListDialog.html.js")),n=t("tpl/media/templateListContent.html.js"),s=t("common/wx/pagebar.js");
return e.prototype={
_extend:function(t){
if(t)for(var e in t)this._o[e]=t[e];
},
initDialog:function(){
var t=this,e=this._o,o=this._g,n=o.dom;
document.body.style.overflow=document.documentElement.style.overflow="hidden",n.$dialog=$(wx.T(a,{
token:e.token||""
})).popup({
width:680,
title:"图文模版",
autoShow:!0,
className:"align_edge mpui-appmsg-dialog appmsg_tmpl_select_dialog",
buttons:[{
text:"添加到正文",
type:"primary",
classWrap:"js_save_btn",
click:function(){
if(!o.selectedId)return void i.err("请选择图文模版");
var a=t.getSelectData();
e.onSuccess({
content:a?a.content:""
}),t.destory(this);
}
},{
text:"取消",
type:"default",
click:function(){
t.destory(this);
}
}],
onHide:function(){
t.destory(this);
}
}),n.$js_loading=n.$dialog.find(".js_loading"),n.$js_content=n.$dialog.find(".js_content"),
n.$js_pagebar=n.$dialog.find(".js_pagebar"),this.getList({
page:0
});
},
showLoading:function(){
var t=this._g,e=t.dom;
t.gettingData=!0,e.$js_loading.show(),e.$js_content.hide(),e.$js_pagebar.hide();
},
checkDialogAlive:function(){
var t=this._g.dom;
return t&&t.$dialog?!0:!1;
},
hideLoading:function(){
var t=this._g,e=t.dom;
t.gettingData=!1,e.$js_loading.hide();
},
checkAccLoading:function(){
return this._g.gettingData;
},
getList:function(t){
var e=this,i=this._g;
e.checkAccLoading()!==!0&&(e.showLoading(),o.getTemplateList({
page:t.page,
perPage:i.perPage,
callback:function(t){
e.checkDialogAlive()&&(e.hideLoading(),e.renderContent(t));
}
}));
},
getSelectData:function(){
var t=this._g;
if(!t.selectedId)return null;
for(var e=0,o=t.curData.length;o>e;e++){
var i=t.curData[e];
if(i.appmsgid==t.selectedId)return i;
}
return null;
},
renderContent:function(t){
var e=this._g,i=e.dom;
i&&i.$dialog&&(0==t.code||t.msg?0!=t.code||t.list&&0!=t.list.length||t.msg||(t.msg="暂无数据"):t.msg="系统繁忙，请稍后再试",
e.curData=t.list||[],e.selectedId=void 0,o.formatTemplateData(e.curData,{
canPreview:!1,
showUpdateTime:!0,
showEdit:!1,
highLine:!1
}),i.$js_content.html(template.compile(n)({
list:e.curData,
msg:t.msg
})).show(),i.$js_loading.hide(),0==t.code&&t.total>0&&"undefined"!=typeof t.page?(this.initPageBar({
curPage:t.page+1,
total:t.total
}),i.$js_content.on("click",".js_appmsg",function(){
var t=$(this);
e.selectedId=t.data("id"),i.$js_content.find(".js_appmsg").removeClass("selected"),
t.addClass("selected");
})):i.$js_pagebar.hide(),i.$dialog.popup("resetPosition"));
},
initPageBar:function(t){
var e=this,o=this._g,i=o.dom;
o.myPagebar&&o.myPagebar.destroy(),o.myPagebar=new s({
container:i.$js_pagebar,
perPage:o.perPage,
initShowPage:t.curPage,
totalItemsNum:t.total,
first:!1,
last:!1,
isSimple:!0,
callback:function(t){
e.getList({
page:1*t.currentPage-1
});
}
});
},
destory:function(t){
t&&t.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto",
this._g.dom=null;
}
},e;
});define("common/wx/media/templateDialog.js",["common/wx/popup.js","common/wx/inputCounter.js","media/common.js","media/template_common.js","common/wx/Tips.js","tpl/media/templateDialog.html.js","tpl/mpEditor/templateDialogLayout.html.js","common/wx/mpEditor/plugin/vote.js","common/wx/mpEditor/plugin/card.js","common/wx/mpEditor/plugin/emotion.js","common/wx/mpEditor/plugin/link.js","common/wx/mpEditor/plugin/unlink.js","common/wx/mpEditor/plugin/audio_music.js","common/wx/mpEditor/plugin/weapp.js","common/wx/mpEditor/plugin/img.js","common/wx/mpEditor/plugin/video.js","common/wx/mpEditor/plugin/adv.js","common/wx/mpEditor/editor.js"],function(t){
"use strict";
function e(t){
this._o={
token:"",
formatContent:!0,
can_use_txvideo:!1,
can_use_hyperlink:!1,
can_use_appmsg_outer_url:!1,
can_use_vote:!1,
can_use_card:!1,
biz_uin:"",
can_use_voice:!1,
qqmusic_flag:!1,
can_use_weapp_card:!1,
content:"",
onSuccess:function(){}
},this._g={
dom:{}
},this._extend(t),this.initDialog();
}
t("common/wx/popup.js");
var i=t("common/wx/inputCounter.js"),o=t("media/common.js"),n=t("media/template_common.js"),s=t("common/wx/Tips.js"),a=t("tpl/media/templateDialog.html.js"),r=t("tpl/mpEditor/templateDialogLayout.html.js"),c=t("common/wx/mpEditor/plugin/vote.js"),m=t("common/wx/mpEditor/plugin/card.js"),l=t("common/wx/mpEditor/plugin/emotion.js"),d=t("common/wx/mpEditor/plugin/link.js"),u=t("common/wx/mpEditor/plugin/unlink.js"),_=t("common/wx/mpEditor/plugin/audio_music.js"),p=t("common/wx/mpEditor/plugin/weapp.js"),g=t("common/wx/mpEditor/plugin/img.js"),h=t("common/wx/mpEditor/plugin/video.js"),f=t("common/wx/mpEditor/plugin/adv.js"),w=t("common/wx/mpEditor/editor.js");
return e.prototype={
_extend:function(t){
for(var e in t)this._o[e]=t[e];
},
initDialog:function(){
var t=this,e=this._o,i=this._g,o=i.dom;
document.body.style.overflow=document.documentElement.style.overflow="hidden",o.$dialog=$(wx.T(a,{
token:e.token||""
})).popup({
width:865,
title:"添加图文模版",
autoShow:!0,
className:"align_edge appmsg_tmpl_edit_dialog",
buttons:[{
text:"保存",
type:"primary",
classWrap:"js_save_btn",
click:function(){
var i=this;
t.saveTemplate({
callback:function(){
"function"==typeof e.onSuccess&&e.onSuccess(),t.destory(i);
}
});
}
},{
text:"取消",
type:"default",
classWrap:"js_cancel_btn",
click:function(){
t.destory(this);
}
}],
onHide:function(){
t.destory(this);
}
}),o.$js_editor=o.$dialog.find(".js_editor"),o.$js_title_fail=o.$dialog.find(".js_title_fail"),
o.$js_content_fail=o.$dialog.find(".js_content_fail"),o.$title=o.$dialog.find(".js_title"),
o.$saveBtn=o.$dialog.find(".js_save_btn"),o.$cancelBtn=o.$dialog.find(".js_cancel_btn"),
this.initTitle(),this.createEditor();
},
initTitle:function(){
new i(this._g.dom.$title,{
maxLength:64
});
},
getPostData:function(){
this.hideAllErrMsg();
var t=this._g.dom,e=$(this.editor.getDocument()).find(".js_catchremoteimageerror").length;
if(e)return this.showCatchError(),null;
var i=this._g.dom.$title.val(),n=o.validate({
key:"title",
label:"名称",
content:i,
strict:!0
});
if(n&&n.msg)return t.$js_title_fail.text(n.msg).show(),null;
var s=this.editor.getEditorData();
if(n=o.validate({
key:"templateContent",
content:s.content,
strict:!1,
editor:this.editor
}),n&&n.msg)return 4==n.errType||t.$js_content_fail.text(n.msg).show(),null;
var a={
content:s.content,
title:i
};
return a;
},
saveTemplate:function(t){
var e=this,i=this,a=this._g.dom;
if(!i.submiting){
var r=e.getPostData();
r&&(i.submiting=!0,a.$saveBtn.btn(!1),o.waitAsynAction({
editor:this.editor,
callback:function(){
if(e.checkDialogAlive()){
var o=e.getPostData();
return o?void n.handleTemplate({
action:"create",
postData:o,
onError:function(t){
e.checkDialogAlive()&&(i.submiting=!1,a.$saveBtn.btn(!0),s.err(t));
},
onSuccess:function(){
e.checkDialogAlive()&&(i.submiting=!1,a.$saveBtn.btn(!0),s.suc("保存成功"),t.callback());
}
}):(i.submiting=!1,void a.$saveBtn.btn(!0));
}
}
}));
}
},
checkDialogAlive:function(){
var t=this._g.dom;
return t&&t.$dialog?!0:!1;
},
createEditor:function(){
var t=this,e=this._o,i=this._g.dom,o=[new g,new h({
can_use_txvideo:e.can_use_txvideo
}),new d({
can_use_hyperlink:e.can_use_hyperlink,
can_use_appmsg_outer_url:e.can_use_appmsg_outer_url
}),new u,new l,new c({
can_use_vote:e.can_use_vote
}),new m({
biz_uin:e.biz_uin,
can_use_card:e.can_use_card
}),new f({
can_see_ad:!1,
has_ad:0
}),new _({
allowAudio:e.can_use_voice,
allowMusic:e.qqmusic_flag
}),new p({
can_use_weapp_card:e.can_use_weapp_card
})],n=t.editor=new w({
needPopup:!1,
imgScale:!1,
canChangeIframeHeight:!1,
scaleimgWheelScroll:!0,
cropimgWheelScroll:!0,
iframeCssUrl:wx.EditorRes.template_iframe,
layout:r,
plugins:o,
autoHeightEnabled:!0,
autoFloatEnabled:!1,
toolbars:[],
focus:!0
});
n.render(i.$js_editor[0]),n.addListener("catchremotesuccess",function(e,i,o,n){
i&&t.updateRemoteImg({
remoteType:"success",
uid:i.uid,
format:n,
img_url:o
}),t.showCatchError();
}),n.addListener("catchremoteerror",function(e,o,n){
o&&t.updateRemoteImg({
remoteType:"error",
uid:o.uid,
img_url:o.defaultRemoteImg
}),n?i.$js_content_fail.text(n).show():t.showCatchError();
}),n.addListener("hideAllErrMsg",function(){
t.hideAllErrMsg();
}),n.addListener("aftersetcontent",function(){
t.showCatchError();
}),n.addListener("keyup",function(){
i.$js_content_fail.hide();
}),n.addListener("before_show_img_replace_dialog",function(){
n.hasDestory||(n.fireEvent("handleWinScroll",!1),i.$saveBtn.hide(),i.$cancelBtn.hide());
}),n.addListener("after_close_show_img_replace_dialog",function(){
n.hasDestory||(n.fireEvent("handleWinScroll",!1),i.$saveBtn.show(),i.$cancelBtn.show());
}),n.ready(function(){
try{
e.formatContent?this.setContent(e.content):this.setContent(e.content,!1,!0);
}catch(t){}
});
},
hideAllErrMsg:function(){
var t=this._g.dom;
t.$js_content_fail.hide(),t.$js_title_fail.hide();
},
showCatchError:function(){
if(this.checkDialogAlive()){
var t=this._g.dom,e=this.editor,i=$(e.getDocument()).find(".js_catchremoteimageerror").length;
0==i?t.$js_content_fail.hide():t.$js_content_fail.text("有%s张图片粘贴失败".sprintf(i)).show();
}
},
updateRemoteImg:function(t){
if(this.checkDialogAlive()){
var e=$(this.editor.getDocument()).find("[data-remoteid="+t.uid+"]");
o.changeRemoteImgUrl({
imgDom:e,
remoteType:t.remoteType,
format:t.format,
img_url:t.img_url,
editor:this.editor
});
}
},
destory:function(t){
t&&t.remove(),this.editor.fireEvent("handleWinScroll",!0),this.editor.destory(),
this.editor=null,this._g.dom=null;
}
},e;
});define("media/template_common.js",["media/common.js","common/wx/Cgi.js","common/wx/time.js","tpl/media/appmsg_tmpl.html.js","common/wx/mpEditor/plugin/vote.js","common/wx/mpEditor/plugin/card.js","common/wx/mpEditor/plugin/emotion.js","common/wx/mpEditor/plugin/link.js","common/wx/mpEditor/plugin/unlink.js","common/wx/mpEditor/plugin/audio_music.js","common/wx/mpEditor/plugin/weapp.js","common/wx/mpEditor/plugin/img.js","common/wx/mpEditor/plugin/adv.js","common/wx/mpEditor/plugin/video.js"],function(e){
"use strict";
function t(e,t){
var i=t.canSelect===!1?!1:!0,m=t.canPreview===!1?!1:!0,a=t.showUpdateTime===!1?!1:!0,r=t.showEdit===!1?!1:!0,p=t.showEdit===!0?!0:!1,c=t.token||"";
!c&&window.wx&&window.wx.data&&window.wx.data.t&&(c=window.wx.data.t);
for(var s=0,_=e.length;_>s;s++){
var g=e[s];
g.token=c,g.canSelect=i,g.canPreview=m,g.showUpdateTime=a,g.showEdit=r,g.highLine=p,
g.update_time&&(g.update_time_str=d.timeFormat(g.update_time)),g.title_encode=g.title,
g.title_encode=p?g.title_encode.replace(/<em>/g,"__em_start__").replace(/<\/em>/g,"__em_end__").html(!0).replace(/__em_start__/g,"<em>").replace(/__em_end__/g,"</em>"):g.title_encode.html(!0);
for(var f in u)u.hasOwnProperty(f)&&("Video"==f?g.content=u[f].beforeSetContent({
isPreview:!1,
html:g.content,
width:w
}):"Ad"==f?g.content=u[f].beforeSetContent({
html:g.content,
can_see_ad:!1
}):"function"==typeof u[f].beforeSetContent&&(g.content=u[f].beforeSetContent({
html:g.content
})));
g.iframeHtml=n(s),g.contentHtml=template.compile(l)(g);
}
return window.__templateCardIframeReady=o(e),e;
}
function o(e){
return function(e){
return function(t,o){
t.body.innerHTML=e[o].content;
};
}(e);
}
function n(e){
var t="<iframe class='appmsg_thumb_wrp' src='#src#'></iframe>",o='javascript:void(function(){document.domain="qq.com";window.parent.__templateCardIframeWrite(document,'+e+");}())";
return t.replace("#src#",o);
}
function i(e){
return(f.ie&&f.version<9?"":"<!DOCTYPE html>")+"<html xmlns='http://www.w3.org/1999/xhtml' style='overflow:hidden;'><head></head><body></body><script type='text/javascript' "+(f.ie?"defer='defer'":"")+" id='_initialScript'>setTimeout(function(){window.parent.__templateCardIframeReady(document,"+e+");},0);var _tmpScript = document.getElementById('_initialScript');_tmpScript.parentNode.removeChild(_tmpScript);</script></html>";
}
function m(e){
var t="";
t="undefined"!=typeof e.postData.appmsgid?"update":"create",s.post({
url:"/cgi-bin/appmsgtemplate?action="+t,
data:e.postData
},{
done:function(t){
if(t&&t.base_resp&&0==t.base_resp.ret)return void e.onSuccess(t);
var o;
if(t&&t.base_resp){
var n=c.articleRetCode(t);
o=n.errmsg||"系统繁忙，请稍后再试";
}else o="系统繁忙，请稍后再试";
e.onError(o,t||{});
},
fail:function(t){
e.onError("系统繁忙，请稍后再试",t||{});
}
});
}
function a(e){
var t=e.page||0,o=e.perPage||6;
s.post({
url:"/cgi-bin/appmsgtemplate?action=list",
data:{
begin:t*o,
count:o
},
mask:!1
},{
done:function(o){
if(o&&o.base_resp&&0==o.base_resp.ret)e.callback({
code:0,
list:o.appmsg_template||[],
total:1*o.total,
page:t
});else{
var n="";
o&&o.base_resp&&200013==o.base_resp.ret&&(n="操作太频繁，请稍后再试"),e.callback({
code:-1,
msg:n
});
}
},
fail:function(){
e.callback({
code:-1
});
}
});
}
function r(e){
s.post({
url:"/cgi-bin/appmsgtemplate?action=delete",
data:{
appmsgid:e.id
},
mask:!1
},{
done:function(t){
t&&t.base_resp&&0==t.base_resp.ret?e.onSuccess():e.onError({
resp:t||{},
msg:"系统繁忙，请稍后再试"
});
},
fail:function(t){
e.onError({
resp:t||{},
msg:"系统繁忙，请稍后再试"
});
}
});
}
function p(e){
s.post({
url:"/cgi-bin/appmsgtemplate?action=preview",
data:e.postData,
mask:!1
},{
done:function(t){
if(t&&t.base_resp&&0==t.base_resp.ret)e.onSuccess(t);else{
var o=c.articleRetCode(t);
t.word=o.errmsg,t.antispam=o.index,e.onError(t);
}
},
fail:function(){
e.onError({
word:"系统繁忙，请稍后再试"
});
}
});
}
var c=e("media/common.js"),s=e("common/wx/Cgi.js"),d=e("common/wx/time.js"),l=e("tpl/media/appmsg_tmpl.html.js"),u={
Vote:e("common/wx/mpEditor/plugin/vote.js"),
Card:e("common/wx/mpEditor/plugin/card.js"),
Emotion:e("common/wx/mpEditor/plugin/emotion.js"),
MyLink:e("common/wx/mpEditor/plugin/link.js"),
Unlink:e("common/wx/mpEditor/plugin/unlink.js"),
AudioMusicPlugin:e("common/wx/mpEditor/plugin/audio_music.js"),
WeappPlugin:e("common/wx/mpEditor/plugin/weapp.js"),
Img:e("common/wx/mpEditor/plugin/img.js"),
Ad:e("common/wx/mpEditor/plugin/adv.js"),
Video:e("common/wx/mpEditor/plugin/video.js")
},w=400,_=20,g=navigator.userAgent.toLowerCase(),f={
ie:/(msie\s|trident.*rv:)([\w.]+)/.test(g),
version:0,
edge:/edge\/([\w.]+)/i.test(g)
};
return function(e,t){
if(e.ie){
var o=t.match(/(?:msie\s([\w.]+))/),n=t.match(/(?:trident.*rv:([\w.]+))/);
e.version=o&&n&&o[1]&&n[1]?Math.max(1*o[1],1*n[1]):o&&o[1]?1*o[1]:n&&n[1]?1*n[1]:0;
}
}(f,g,window),function(e,t){
"function"!=typeof e.__templateCardIframeWrite&&(e.__templateCardIframeWrite=function(e,o){
e.open(),e.domain="qq.com",e.write(t(o)),e.close();
});
}(window,i),{
formatTemplateData:t,
maxTemplateNum:_,
handleTemplate:m,
getTemplateList:a,
delTemplateList:r,
preview:p
};
});define("common/wx/mpEditor/plugin/emotionButton.js",["widget/emotion_editor.css","widget/emotion_panel.css","common/wx/mpEditor/editor_all_min.js","common/wx/richEditor/emotion.js","tpl/mpEditor/plugin/emotion.html.js"],function(t){
"use strict";
t("widget/emotion_editor.css"),t("widget/emotion_panel.css"),t("common/wx/mpEditor/editor_all_min.js");
var i=t("common/wx/richEditor/emotion.js"),o=t("tpl/mpEditor/plugin/emotion.html.js"),n=window.baidu.editor,e=n.ui,s=n.utils,m=e.UIBase,r=e.Popup,p=e.EmotionPicker=function(t){
this.initOptions(t),this.init();
};
p.prototype={
getHtmlTpl:function(){
return window.wx.T(o,{
edata:i.getEdata()
});
},
init:function(){
this.initUIBase();
},
_onEmotionClick:function(){
this.fireEvent("emotionclick");
}
},s.inherits(p,m);
var c=e.SplitButton,l=e.EmotionButton=function(t){
this.initOptions(t),this.init();
};
l.prototype={
init:function(){
var t=this;
this.popup=new r({
content:new p({
editor:t.editor,
_onEmotionClick:function(i){
var o=i.target||i.srcElement;
o=/^li/i.test(o.nodeName)?$(o):$(o).parents("li.js_emotion_li");
var n=o.data("title"),e=o.data("name");
t._onEmotionSelect({
title:n,
name:e
});
}
}),
contentClass:"emotion_wrp",
editor:t.editor
}),this.initSplitButton();
},
className:"edui-for-mpemotion",
_SplitButton_postRender:c.prototype.postRender,
postRender:function(){
this._SplitButton_postRender();
},
_onButtonClick:function(){
this.showPopup();
},
_onEmotionSelect:function(t){
this.fireEvent("emotionselect",t);
}
},s.inherits(l,c);
});define("tpl/mpEditor/plugin/link_popup.html.js",[],function(){
return'{if needBreak}\n<div style="height:5px;display:none"></div>\n{/if}\n<div class="js_link_popup edui_mask_edit_group with_line">\n    <a class="edui_mask_edit_meta" target="_blank" href="{url}" {if !isWeapp}title="{url}"{/if}>{txt}</a>\n    <div class="primary edui_mask_edit_meta no_extra edui-clickable" \n        {if !isWeapp}onclick="$$._execCommandAndHide(\'link\');"{else}onclick="$$._execCommandAndHide(\'insertweapp\', 4);"{/if}>\n        <div class="edui_mask_edit_meta_inner">\n        修改        </div>\n    </div>\n	<div class="primary edui_mask_edit_meta edui-clickable" onclick="$$._execCommandAndHide(\'unlink\');">\n        <div class="edui_mask_edit_meta_inner">\n        清除        </div>\n    </div>\n</div>\n';
});