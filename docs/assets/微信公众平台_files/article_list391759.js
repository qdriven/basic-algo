define("tpl/media/dialog/image_list.html.js",[],function(){
return'{if file_item.length == 0}\n<li class="empty_tips">该分组暂时没有图片素材</li>\n{else}\n{each file_item as item}\n<li class="img_item js_imageitem" data-id="{item.file_id}" data-url="{item.cdn_url}" data-oristatus="{item.copyright_status||0}" data-format="{item.img_format}">\n    <label class="frm_checkbox_label{if item.selected} selected{/if} img_item_bd">\n        {if scene == \'cdn\' && item.cdn_url}\n        <!-- <span class="pic cover js_pic" style="background-image:url({item.cdn_url});"></span> -->\n        <div class="pic_box">\n            <img class="pic js_pic" data-src="{item.cdn_url}"></img>\n        </div>\n        <!-- <img src="{item.cdn_url}" alt="{item.name}" class="pic"> -->\n        {else}\n        <div class="pic_box">\n            <img class="pic js_pic" data-src="{item.img_url}"></img>\n        </div>\n        <!-- <span class="pic cover js_pic" style="background-image:url({item.img_url});"></span> -->\n        <!-- <img src="{item.img_url}" alt="{item.name}" class="pic"> -->\n        {/if}\n        <span class="lbl_content">\n            {if item.copyright_status==2}\n            <i class="icon_original accessed"></i>\n            {/if}            \n            {item.name}\n        </span>\n        <div class="selected_mask">\n            <div class="selected_mask_inner"></div>\n            <div class="selected_mask_icon"></div>\n        </div>\n    </label>\n</li>\n{/each}\n{/if}\n';
});define("tpl/media/dialog/image_layout.html.js",[],function(){
return'<div>\n  {if cropImg}\n  <div class="js_step_wrp processor_wrp"></div>\n  {/if}\n  <div class="img_crop_panel">\n    <div class="js_select_frame img_pick_panel inner_container_box side_l cell_layout">\n        <div class="inner_side">\n            <div class="group_list">\n                <div class="inner_menu_box">\n                    <dl class="inner_menu js_group"></dl>\n                    <div class="inner_menu_item">\n                        <a href="javascript:;" class="inner_menu_link js_creategroup js_popover"><i\n                                class="icon14_common add_gray">新建分组</i>新建分组</a>\n                    </div>\n                </div>                    \n            </div>\n        </div>\n        <div class="inner_main">\n            <div class="img_pick_area">\n                <div class="sub_title_bar in_dialog">\n                    <div class="upload_box r align_right">\n                        <span class="upload_area"><a id="js_imageupload" class="btn btn_primary js_imageupload" data-groupid="">本地上传</a></span>\n                    </div>\n                    <div class="img_water_tips mini_tips icon_after r weak_text">\n                        {if desc}{desc}{/if}<span class="js_water"></span>\n                        <i class="js_water_tips icon_msg_mini ask"></i>\n                    </div>\n                </div>\n                <div class="img_pick_area_inner">\n                    <div class="img_pick">\n                        <i class="icon_loading_small white js_loading"></i>\n                        <ul class="group js_list img_list"></ul>\n                    </div>\n                    <div class="js_pagebar"></div>\n                    {if !!coverPicCheckbox}\n                    <p class="frm_tips">\n                        <label for="" class="frm_checkbox_label">\n                            <i class="icon_checkbox"></i>\n                            <input type="checkbox" class="frm_checkbox js_show_cover_pic" value="1" name="show_cover_pic" {if coverPic*1===1}checked{/if}>\n                            在正文顶部插入封面图原图片                        </label>\n                    </p>\n                    {/if}\n                </div>\n            </div>\n        </div>\n        <p class="dialog_ft_desc">已选<span class="js_selected">0</span>个，可选{maxSelect}个</p>\n    </div>\n    {if cropImg}\n    <div class="js_crop_frame" style="display:none;">\n    </div>\n    {/if}\n  </div>\n<div>\n';
});define("tpl/tooltips.html.js",[],function(){
return'<div class="popover {parentClass}" style="display:none;position:{container_mode};{if offset.left}left:{offset.left}px;top:{offset.top}px;{/if}">\n    <div class="popover_inner">\n        <div class="popover_content">{=content}</div>\n        {if container_close}\n        <!--#0001#-->\n        <a href="javascript:;" class="popover_close icon16_common close_flat js_popover_close">关闭</a>\n        <!--%0001%-->\n        {/if}\n        {if buttons.length > 0}\n        <div class="popover_bar">\n			{each buttons as o index}\n			<a onclick="return false;" href="javascript:;" class="js_btn btn {o.type}">{o.text}</a>\n			{/each}\n        </div>\n        {/if}\n    </div>\n    <i class="popover_arrow popover_arrow_out"></i>\n    <i class="popover_arrow popover_arrow_in"></i>\n</div>\n';
});define("tpl/biz_web/ui/dropdown.html.js", [], function(e, t, n) {
return '<a href="javascript:;" class="btn dropdown_switch jsDropdownBt"><label class="jsBtLabel" {if search}contenteditable="true"{/if}>{label}</label><i class="arrow"></i></a>\n<div class="dropdown_data_container jsDropdownList">\n    <ul class="dropdown_data_list">\n        {if renderHtml}\n        {renderHtml}\n        {else}\n            {each data as o index}\n            <li class="dropdown_data_item {if o.className}{o.className}{/if}">  \n                <a onclick="return false;" href="javascript:;" class="jsDropdownItem" data-value="{o.value}" data-index="{index}" data-name="{o.name}">{o.name}</a>\n            </li>\n            {/each}        \n        {/if}\n    </ul>\n</div>\n';
});define("tpl/step.html.js", [], function(e, t, n) {
return '<ul class="processor_bar grid_line">\n    {each stepArr as item index}\n    <li class="{if (index+1==length)}no_extra{/if} step grid_item size1of{length} {item.cls}">\n        <h4>{item.name}</h4>\n    </li>\n    {/each}\n</ul>\n';
});define("tpl/biz_web/ui/checkbox.html.js", [], function(e, t, n) {
return '<label for="_checkbox_{index}" class="frm_{type}_label">\n	<i class="icon_{type}"></i>\n	<input type="{type}" class="frm_{type}" name="{name}" id="_checkbox_{index}">\n	<span class="lbl_content">{label}</span>\n</label>';
});define("tpl/uploader.html.js",[],function(){
return'<li id="uploadItem{id}" data-status="{className}" class="upload_file">\n    <strong class="upload_file_name">{fileName}</strong>\n    <span class="upload_file_size">({size})</span>\n    <div class="progress_bar"><div class="progress_bar_thumb" style="width:0%"></div></div>\n    <a href="javascript:;" data-id="{id}" class="upload_file_cancel js_cancel">取消</a>\n</li>\n';
});define("tpl/media/dialog/image_crop.html.js",[],function(){
return'<!-- 步骤条同级加个img_crop_panel把两个步骤的内容都包起来 -->\n<div class="img_crop_area group">\n    <div class="img_crop_origin_area">\n        <div class="img_crop_hd">\n            <h4 class="img_crop_title">原图</h4>\n        </div>\n        <div class="img_crop_wrp">\n            <img class="img_crop_origin" src="{url}">\n        </div>\n    </div>\n    <div class="img_crop_edit_area">\n        <div class="img_crop_hd">\n            <h4 class="img_crop_title">封面展示区域</h4>\n            <p class="tips_global img_crop_tips">{tips}</p>\n        </div>\n        <div class="js_crop_wrp img_crop_wrp">\n            <img src="{url}">\n        </div>\n    </div>\n</div>\n\n';
});define("common/wx/mpEditor/common/cropImgCgi.js",["common/wx/Cgi.js"],function(o){
"use strict";
function r(o){
n.post({
url:"/cgi-bin/cropimage?",
data:{
imgurl:o.imgurl,
x1:o.x1,
y1:o.y1,
x2:o.x2,
y2:o.y2
}
},{
done:function(r){
r&&r.base_resp&&0==r.base_resp.ret&&r.imgurl?"function"==typeof o.onsuccess&&o.onsuccess({
oriUrl:o.imgurl,
url:r.imgurl,
file_id:r.file_id||""
}):"function"==typeof o.onerror&&o.onerror(r||{});
},
fail:function(){
"function"==typeof o.onerror&&o.onerror({
retcode:-2
});
}
});
}
var n=o("common/wx/Cgi.js");
return{
getUrl:r
};
});define("common/lib/jquery.Jcrop.js",["jquery.Jcrop.min.css"],function(e){
e("jquery.Jcrop.min.css"),function(e){
e.Jcrop=function(t,n){
function o(e){
return Math.round(e)+"px";
}
function r(e){
return R.baseClass+"-"+e;
}
function a(){
return e.fx.step.hasOwnProperty("backgroundColor");
}
function i(t){
var n=e(t).offset();
return[n.left,n.top];
}
function s(e){
return[e.pageX-A[0]+R.offsetX,e.pageY-A[1]+R.offsetY];
}
function c(t){
"object"!=typeof t&&(t={}),R=e.extend(R,t),e.each(["onChange","onSelect","onRelease","onDblClick"],function(e,t){
"function"!=typeof R[t]&&(R[t]=function(){});
});
}
function u(e,t,n){
if(A=i(N),Ct.setCursor("move"===e?e:e+"-resize"),"move"===e)return Ct.activateHandlers(l(t),b,n);
var o=yt.getFixed(),r=f(e),a=yt.getCorner(f(r));
yt.setPressed(yt.getCorner(r)),yt.setCurrent(a),Ct.activateHandlers(d(e,o),b,n);
}
function d(e,t){
return function(n){
if(R.aspectRatio)switch(e){
case"e":
n[1]=t.y+1;
break;

case"w":
n[1]=t.y+1;
break;

case"n":
n[0]=t.x+1;
break;

case"s":
n[0]=t.x+1;
}else switch(e){
case"e":
n[1]=t.y2;
break;

case"w":
n[1]=t.y2;
break;

case"n":
n[0]=t.x2;
break;

case"s":
n[0]=t.x2;
}
yt.setCurrent(n),xt.update();
};
}
function l(e){
var t=e;
return St.watchKeys(),function(e){
yt.moveOffset([e[0]-t[0],e[1]-t[1]]),t=e,xt.update();
};
}
function f(e){
switch(e){
case"n":
return"sw";

case"s":
return"nw";

case"e":
return"nw";

case"w":
return"ne";

case"ne":
return"sw";

case"nw":
return"se";

case"se":
return"nw";

case"sw":
return"ne";
}
}
function h(e){
return function(t){
return R.disabled?!1:"move"!==e||R.allowMove?(A=i(N),lt=!0,u(e,s(t)),t.stopPropagation(),
t.preventDefault(),!1):!1;
};
}
function p(e,t){
var n=e.width(),o=e.height();
n=t,o=t/e.width()*e.height(),ut=e.width()/n,dt=e.height()/o,e.width(n).height(o);
}
function g(e){
return{
x:e.x*ut,
y:e.y*dt,
x2:e.x2*ut,
y2:e.y2*dt,
w:e.w*ut,
h:e.h*dt
};
}
function b(){
var e=yt.getFixed();
e.w>R.minSelect[0]&&e.h>R.minSelect[1]?(xt.enableHandles(),xt.done()):xt.release(),
Ct.setCursor(R.allowSelect?"crosshair":"default");
}
function w(e){
if(R.disabled)return!1;
if(!R.allowSelect)return!1;
lt=!0,A=i(N),xt.disableHandles(),Ct.setCursor("crosshair");
var t=s(e);
return yt.setPressed(t),xt.update(),Ct.activateHandlers(v,b,"touch"===e.type.substring(0,5)),
St.watchKeys(),e.stopPropagation(),e.preventDefault(),!1;
}
function v(e){
yt.setCurrent(e),xt.update();
}
function y(){
var t=e("<div></div>").addClass(r("tracker"));
return K&&t.css({
opacity:0,
backgroundColor:"white"
}),t;
}
function m(e){
et.removeClass().addClass(r("holder")).addClass(e);
}
function x(e,t){
function n(){
window.setTimeout(v,l);
}
var o=e[0]/ut,r=e[1]/dt,a=e[2]/ut,i=e[3]/dt;
if(!ft){
var s=yt.flipCoords(o,r,a,i),c=yt.getFixed(),u=[c.x,c.y,c.x2,c.y2],d=u,l=R.animationDelay,f=s[0]-u[0],h=s[1]-u[1],p=s[2]-u[2],g=s[3]-u[3],b=0,w=R.swingSpeed;
o=d[0],r=d[1],a=d[2],i=d[3],xt.animMode(!0);
var v=function(){
return function(){
b+=(100-b)/w,d[0]=Math.round(o+b/100*f),d[1]=Math.round(r+b/100*h),d[2]=Math.round(a+b/100*p),
d[3]=Math.round(i+b/100*g),b>=99.8&&(b=100),100>b?(S(d),n()):(xt.done(),xt.animMode(!1),
"function"==typeof t&&t.call(kt));
};
}();
n();
}
}
function C(e){
S([e[0]/ut,e[1]/dt,e[2]/ut,e[3]/dt]),R.onSelect.call(kt,g(yt.getFixed())),xt.enableHandles();
}
function S(e){
yt.setPressed([e[0],e[1]]),yt.setCurrent([e[2],e[3]]),xt.update();
}
function k(){
var e=yt.getFixed();
return g({
x:e.x-R.offsetX,
y:e.y-R.offsetY,
x2:e.x2-R.offsetX,
y2:e.y2-R.offsetY,
w:e.w,
h:e.h
});
}
function M(){
var e=yt.getFixed();
return{
x:e.x-R.offsetX,
y:e.y-R.offsetY,
x2:e.x2-R.offsetX,
y2:e.y2-R.offsetY,
w:e.w,
h:e.h
};
}
function z(e,t){
c(e),t!==!0&&X();
}
function O(){
R.disabled=!0,xt.disableHandles(),xt.setCursor("default"),Ct.setCursor("default");
}
function j(){
R.disabled=!1,X();
}
function B(){
xt.done(),Ct.activateHandlers(null,null);
}
function F(){
et.remove(),W.show(),W.css("visibility","visible"),e(t).removeData("Jcrop");
}
function H(){
return{
w:N.width(),
h:N.height()
};
}
function I(){
var e=H(),t=e.w,n=e.h,o=R.offsetX,r=R.offsetY,a=o+t,i=r+n;
U=o,Z=r,$=a,_=i,R.maxBound&&4==R.maxBound.length&&(U=Math.max(U,R.maxBound[0]),Z=Math.max(Z,R.maxBound[1]),
$=Math.min($,R.maxBound[2]),_=Math.min(_,R.maxBound[3]));
}
function P(e){
R.offsetX=e.offsetX,R.offsetY=e.offsetY,I();
}
function D(e){
ut=e.xscale,dt=e.yscale,I(),yt.setPressed([e.selectionPos[0],e.selectionPos[1]]),
yt.setCurrent([e.selectionPos[2],e.selectionPos[3]]),X();
}
function J(e,t){
xt.release(),O();
var n=new Image;
n.onload=function(){
var o=n.width,r=n.height,a=R.boxWidth,i=R.boxHeight;
N.width(o).height(r),N.attr("src",e),tt.attr("src",e),p(N,a,i);
var s=N.width(),c=N.height();
tt.width(s).height(c),gt.width(s+2*pt).height(c+2*pt),et.width(s).height(c),I(),
mt.resize(s,c),j(),"function"==typeof t&&t.call(kt);
},n.src=e;
}
function Y(e,t,n){
var o=t||R.bgColor;
R.bgFade&&a()&&R.fadeTime&&!n?e.animate({
backgroundColor:o
},{
queue:!1,
duration:R.fadeTime
}):e.css("backgroundColor",o);
}
function X(e){
if(R.allowResize?e?xt.enableOnly():xt.enableHandles():xt.disableHandles(),Ct.setCursor(R.allowSelect?"crosshair":"default"),
xt.setCursor(R.allowMove?"move":"default"),R.hasOwnProperty("trueSize")){
var t=H();
ut=R.trueSize[0]/t.w,dt=R.trueSize[1]/t.h;
}
R.hasOwnProperty("setSelect")&&(C(R.setSelect),xt.done(),delete R.setSelect),mt.refresh(),
R.bgColor!=bt&&(Y(R.shade?mt.getShades():et,R.shade?R.shadeColor||R.bgColor:R.bgColor),
bt=R.bgColor),wt!=R.bgOpacity&&(wt=R.bgOpacity,R.shade?mt.refresh():xt.setBgOpacity(wt)),
at=R.maxSize[0]||0,it=R.maxSize[1]||0,st=R.minSize[0]||0,ct=R.minSize[1]||0,R.hasOwnProperty("outerImage")&&(N.attr("src",R.outerImage),
delete R.outerImage),xt.refresh();
}
var A,R=e.extend({},e.Jcrop.defaults),T=navigator.userAgent.toLowerCase(),K=/msie/.test(T),q=/msie [1-6]\./.test(T);
"object"!=typeof t&&(t=e(t)[0]),"object"!=typeof n&&(n={}),c(n);
var E={
border:"none",
visibility:"visible",
margin:0,
padding:0,
position:"absolute",
top:0,
left:0
},W=e(t),L=!0;
if("IMG"==t.tagName){
if(0!=W[0].width&&0!=W[0].height)W.width(W[0].width),W.height(W[0].height);else{
var G=new Image;
G.src=W[0].src,W.width(G.width),W.height(G.height);
}
var N=W.clone().removeAttr("id").css(E).show();
N.width(W.width()),N.height(W.height()),W.after(N).hide();
}else N=W.css(E).show(),L=!1,null===R.shade&&(R.shade=!0);
p(N,R.boxWidth,R.boxHeight);
var V=N.width(),Q=N.height(),U=0,Z=0,$=V+U,_=Q+Z,et=e("<div />").width(V).height(Q).addClass(r("holder")).css({
position:"relative",
backgroundColor:R.bgColor
}).insertAfter(W).append(N);
I(),R.addClass&&et.addClass(R.addClass);
var tt=e("<div />"),nt=e("<div />").width("100%").height("100%").css({
zIndex:310,
position:"absolute",
overflow:"hidden"
}),ot=e("<div />").width("100%").height("100%").css("zIndex",320),rt=e("<div />").css({
position:"absolute",
zIndex:600
}).dblclick(function(){
var e=yt.getFixed();
R.onDblClick.call(kt,e);
}).insertBefore(N).append(nt,ot);
L&&(tt=e("<img />").attr("src",N.attr("src")).css(E).width(V).height(Q),nt.append(tt)),
q&&rt.css({
overflowY:"hidden"
});
var at,it,st,ct,ut,dt,lt,ft,ht,pt=R.boundary,gt=y().width(V+2*pt).height(Q+2*pt).css({
position:"absolute",
top:o(-pt),
left:o(-pt),
zIndex:290
}).mousedown(w),bt=R.bgColor,wt=R.bgOpacity;
A=i(N);
var vt=function(){
function e(){
var e,t={},n=["touchstart","touchmove","touchend"],o=document.createElement("div");
try{
for(e=0;e<n.length;e++){
var r=n[e];
r="on"+r;
var a=r in o;
a||(o.setAttribute(r,"return;"),a="function"==typeof o[r]),t[n[e]]=a;
}
return t.touchstart&&t.touchend&&t.touchmove;
}catch(i){
return!1;
}
}
function t(){
return R.touchSupport===!0||R.touchSupport===!1?R.touchSupport:e();
}
return{
createDragger:function(e){
return function(t){
return R.disabled?!1:"move"!==e||R.allowMove?(A=i(N),lt=!0,u(e,s(vt.cfilter(t)),!0),
t.stopPropagation(),t.preventDefault(),!1):!1;
};
},
newSelection:function(e){
return w(vt.cfilter(e));
},
cfilter:function(e){
return e.pageX=e.originalEvent.changedTouches[0].pageX,e.pageY=e.originalEvent.changedTouches[0].pageY,
e;
},
isSupported:e,
support:t()
};
}(),yt=function(){
function e(e){
e=i(e),p=f=e[0],g=h=e[1];
}
function t(e){
e=i(e),d=e[0]-p,l=e[1]-g,p=e[0],g=e[1];
}
function n(){
return[d,l];
}
function o(e){
var t=e[0],n=e[1];
U>f+t&&(t=U-f),Z>h+n&&(n=Z-h),g+n>_&&(n=_-g),p+t>$&&(t=$-p),f+=t,p+=t,h+=n,g+=n;
}
function r(e){
var t=a();
switch(e){
case"ne":
return[t.x2,t.y];

case"nw":
return[t.x,t.y];

case"se":
return[t.x2,t.y2];

case"sw":
return[t.x,t.y2];
}
}
function a(){
if(!R.aspectRatio)return c();
var e,t,n,o,r=R.aspectRatio,a=R.minSize[0]/ut,i=R.maxSize[0]/ut,d=R.maxSize[1]/dt,l=p-f,b=g-h,w=Math.abs(l),v=Math.abs(b),y=w/v;
return 0===i&&(i=10*($-U)),0===d&&(d=10*(_-Z)),r>y?(t=g,n=v*r,e=0>l?f-n:n+f,0>e?(e=0,
o=Math.abs((e-f)/r),t=0>b?h-o:o+h):e>$&&(e=$,o=Math.abs((e-f)/r),t=0>b?h-o:o+h)):(e=p,
o=w/r,t=0>b?h-o:h+o,0>t?(t=0,n=Math.abs((t-h)*r),e=0>l?f-n:n+f):t>_&&(t=_,n=Math.abs(t-h)*r,
e=0>l?f-n:n+f)),e>f?(a>e-f?e=f+a:e-f>i&&(e=f+i),t=t>h?h+(e-f)/r:h-(e-f)/r):f>e&&(a>f-e?e=f-a:f-e>i&&(e=f-i),
t=t>h?h+(f-e)/r:h-(f-e)/r),0>e?(f-=e,e=0):e>$&&(f-=e-$,e=$),0>t?(h-=t,t=0):t>_&&(h-=t-_,
t=_),u(s(f,h,e,t));
}
function i(e){
return e[0]<U&&(e[0]=U),e[1]<Z&&(e[1]=Z),e[0]>$&&(e[0]=$),e[1]>_&&(e[1]=_),[Math.round(e[0]),Math.round(e[1])];
}
function s(e,t,n,o){
var r=e,a=n,i=t,s=o;
return e>n&&(r=n,a=e),t>o&&(i=o,s=t),[r,i,a,s];
}
function c(){
var e,t=p-f,n=g-h;
return at&&Math.abs(t)>at&&(p=t>0?f+at:f-at),it&&Math.abs(n)>it&&(g=n>0?h+it:h-it),
ct/dt&&Math.abs(n)<ct/dt&&(g=n>0?h+ct/dt:h-ct/dt),st/ut&&Math.abs(t)<st/ut&&(p=t>0?f+st/ut:f-st/ut),
p>$&&(e=p-$,f-=e,p-=e),g>_&&(e=g-_,h-=e,g-=e),f>$&&(e=f-_,g-=e,h-=e),h>_&&(e=h-_,
g-=e,h-=e),u(s(f,h,p,g));
}
function u(e){
return{
x:e[0],
y:e[1],
x2:e[2],
y2:e[3],
w:e[2]-e[0],
h:e[3]-e[1]
};
}
var d,l,f=0,h=0,p=0,g=0;
return{
flipCoords:s,
setPressed:e,
setCurrent:t,
getOffset:n,
moveOffset:o,
getCorner:r,
getFixed:a
};
}(),mt=function(){
function t(e,t){
p.left.css({
height:o(t)
}),p.right.css({
height:o(t)
});
}
function n(){
return r(yt.getFixed());
}
function r(e){
p.top.css({
left:o(e.x),
width:o(e.w),
height:o(e.y)
}),p.bottom.css({
top:o(e.y2),
left:o(e.x),
width:o(e.w),
height:o(_-e.y2)
}),p.right.css({
left:o(e.x2),
width:o($-e.x2)
}),p.left.css({
width:o(e.x)
});
}
function a(){
return e("<div />").css({
position:"absolute",
backgroundColor:R.shadeColor||R.bgColor
}).appendTo(h);
}
function i(){
f||(f=!0,h.insertBefore(N),n(),xt.setBgOpacity(1,0,1),tt.hide(),s(R.shadeColor||R.bgColor,1),
xt.isAwake()?u(R.bgOpacity,1):u(1,1));
}
function s(e,t){
Y(l(),e,t);
}
function c(){
f&&(h.remove(),tt.show(),f=!1,xt.isAwake()?xt.setBgOpacity(R.bgOpacity,1,1):(xt.setBgOpacity(1,1,1),
xt.disableHandles()),Y(et,0,1));
}
function u(e,t){
f&&(R.bgFade&&!t?h.animate({
opacity:1-e
},{
queue:!1,
duration:R.fadeTime
}):h.css({
opacity:1-e
}));
}
function d(){
R.shade?i():c(),xt.isAwake()&&u(R.bgOpacity);
}
function l(){
return h.children();
}
var f=!1,h=e("<div />").css({
position:"absolute",
zIndex:240,
opacity:0
}),p={
top:a(),
left:a().height(_-Z),
right:a().height(_-Z),
bottom:a()
};
return{
update:n,
updateRaw:r,
getShades:l,
setBgColor:s,
enable:i,
disable:c,
resize:t,
refresh:d,
opacity:u
};
}(),xt=function(){
function t(t){
var n=e("<div />").css({
position:"absolute",
opacity:R.borderOpacity
}).addClass(r(t));
return nt.append(n),n;
}
function n(t,n){
var o=e("<div />").mousedown(h(t)).css({
cursor:t+"-resize",
position:"absolute",
zIndex:n
}).addClass("ord-"+t);
return vt.support&&o.bind("touchstart.jcrop",vt.createDragger(t)),ot.append(o),o;
}
function a(e){
var t=R.handleSize,o=n(e,O++).css({
opacity:R.handleOpacity
}).addClass(r("handle"));
return t&&o.width(t).height(t),o;
}
function i(e){
return n(e,O++).addClass("jcrop-dragbar");
}
function s(e){
var t;
for(t=0;t<e.length;t++)F[e[t]]=i(e[t]);
}
function c(e){
var n,o;
for(o=0;o<e.length;o++){
switch(e[o]){
case"n":
n="hline";
break;

case"s":
n="hline bottom";
break;

case"e":
n="vline right";
break;

case"w":
n="vline";
}
j[e[o]]=t(n);
}
}
function u(e){
var t;
for(t=0;t<e.length;t++)B[e[t]]=a(e[t]);
}
function d(e,t){
R.shade||tt.css({
top:o(-t+R.offsetY||0),
left:o(-e+R.offsetX||0)
}),rt.css({
top:o(t),
left:o(e)
});
}
function l(e,t){
rt.width(Math.round(e)).height(Math.round(t));
}
function f(){
var e=yt.getFixed();
yt.setPressed([e.x,e.y]),yt.setCurrent([e.x2,e.y2]),p();
}
function p(e){
return z?b(e):void 0;
}
function b(e){
var t=yt.getFixed();
l(t.w,t.h),d(t.x,t.y),R.shade&&mt.updateRaw(t),z||v(),e?R.onSelect.call(kt,g(t)):R.onChange.call(kt,g(t),t);
}
function w(e,t,n){
(z||t)&&(R.bgFade&&!n?N.animate({
opacity:e
},{
queue:!1,
duration:R.fadeTime
}):N.css("opacity",e));
}
function v(){
rt.show(),R.shade?mt.opacity(wt):w(wt,!0),z=!0;
}
function m(){
S(),rt.hide(),R.shade?mt.opacity(1):w(1),z=!1,R.onRelease.call(kt);
}
function x(){
H&&ot.show();
}
function C(){
return H=!0,R.allowResize?(ot.show(),!0):void 0;
}
function S(){
H=!1,ot.hide();
}
function k(e){
e?(ft=!0,S()):(ft=!1,C());
}
function M(){
k(!1),f();
}
var z,O=370,j={},B={},F={},H=!1;
R.dragEdges&&e.isArray(R.createDragbars)&&s(R.createDragbars),e.isArray(R.createHandles)&&u(R.createHandles),
R.drawBorders&&e.isArray(R.createBorders)&&c(R.createBorders),e(document).bind("touchstart.jcrop-ios",function(t){
e(t.currentTarget).hasClass("jcrop-tracker")&&t.stopPropagation();
});
var I=y().mousedown(h("move")).css({
cursor:"move",
position:"absolute",
zIndex:360
});
return vt.support&&I.bind("touchstart.jcrop",vt.createDragger("move")),nt.append(I),
S(),{
updateVisible:p,
update:b,
release:m,
refresh:f,
isAwake:function(){
return z;
},
setCursor:function(e){
I.css("cursor",e);
},
enableHandles:C,
enableOnly:function(){
H=!0;
},
showHandles:x,
disableHandles:S,
animMode:k,
setBgOpacity:w,
done:M
};
}(),Ct=function(){
function t(t){
gt.css({
zIndex:450
}),t?e(document).bind("touchmove.jcrop",i).bind("touchend.jcrop",c):f&&e(document).bind("mousemove.jcrop",o).bind("mouseup.jcrop",r);
}
function n(){
gt.css({
zIndex:290
}),e(document).unbind(".jcrop");
}
function o(e){
return d&&d(s(e)),!1;
}
function r(e){
return e.preventDefault(),e.stopPropagation(),lt&&(lt=!1,l&&l(s(e)),xt.isAwake()&&R.onSelect.call(kt,g(yt.getFixed())),
n(),d=function(){},l=function(){}),!1;
}
function a(e,n,o){
return lt=!0,d=e,l=n,t(o),!1;
}
function i(e){
return d&&d(s(vt.cfilter(e))),!1;
}
function c(e){
return r(vt.cfilter(e));
}
function u(e){
gt.css("cursor",e);
}
var d=function(){},l=function(){},f=R.trackDocument;
return f||gt.mousemove(o).mouseup(r).mouseout(r),N.before(gt),{
activateHandlers:a,
setCursor:u
};
}(),St=function(){
function t(){
R.keySupport&&(a.show(),a.focus());
}
function n(){
a.hide();
}
function o(e,t,n){
R.allowMove&&(yt.moveOffset([t,n]),xt.updateVisible(!0)),e.preventDefault(),e.stopPropagation();
}
function r(e){
if(e.ctrlKey||e.metaKey)return!0;
ht=e.shiftKey?!0:!1;
var t=ht?10:1;
switch(e.keyCode){
case 37:
o(e,-t,0);
break;

case 39:
o(e,t,0);
break;

case 38:
o(e,0,-t);
break;

case 40:
o(e,0,t);
break;

case 27:
R.allowSelect&&xt.release();
break;

case 9:
return!0;
}
return!1;
}
var a=e('<input type="radio" />').css({
position:"fixed",
left:"-120px",
width:"12px"
}).addClass("jcrop-keymgr"),i=e("<div />").css({
position:"absolute",
overflow:"hidden"
}).append(a);
return R.keySupport&&(a.keydown(r).blur(n),q||!R.fixedSupport?(a.css({
position:"absolute",
left:"-20px"
}),i.append(a).insertBefore(N)):a.insertBefore(N)),{
watchKeys:t
};
}();
vt.support&&gt.bind("touchstart.jcrop",vt.newSelection),ot.hide(),X(!0);
var kt={
updateOffset:P,
changeImgScale:D,
setImage:J,
animateTo:x,
setSelect:C,
setOptions:z,
tellSelect:k,
tellScaled:M,
setClass:m,
disable:O,
enable:j,
cancel:B,
release:xt.release,
destroy:F,
focus:St.watchKeys,
getBounds:function(){
return[($-U)*ut,(_-Z)*dt];
},
getWidgetSize:function(){
return[$-U,_-Z];
},
getScaleFactor:function(){
return[ut,dt];
},
getOptions:function(){
return R;
},
ui:{
botImg:N,
topImg:tt,
trk:gt,
holder:et,
selection:rt
}
};
return K&&et.bind("selectstart",function(){
return!1;
}),W.data("Jcrop",kt),kt;
},e.fn.Jcrop=function(t,n){
var o;
return this.each(function(){
if(e(this).data("Jcrop")){
if("api"===t)return e(this).data("Jcrop");
e(this).data("Jcrop").setOptions(t);
}else"IMG"==this.tagName?e.Jcrop.Loader(this,function(){
e(this).css({
display:"block",
visibility:"hidden"
}),o=e.Jcrop(this,t),e.isFunction(n)&&n.call(o);
}):(e(this).css({
display:"block",
visibility:"hidden"
}),o=e.Jcrop(this,t),e.isFunction(n)&&n.call(o));
}),this;
},e.Jcrop.Loader=function(t,n,o){
function r(){
i.complete?(a.unbind(".jcloader"),e.isFunction(n)&&n.call(i)):window.setTimeout(r,50);
}
var a=e(t),i=a[0];
a.bind("load.jcloader",r).bind("error.jcloader",function(){
a.unbind(".jcloader"),e.isFunction(o)&&o.call(i);
}),i.complete&&e.isFunction(n)&&(a.unbind(".jcloader"),n.call(i));
},e.Jcrop.defaults={
allowSelect:!0,
allowMove:!0,
allowResize:!0,
trackDocument:!0,
offsetX:0,
offsetY:0,
baseClass:"jcrop",
addClass:null,
bgColor:"transparent",
bgOpacity:.6,
bgFade:!1,
borderOpacity:.4,
handleOpacity:.5,
handleSize:null,
aspectRatio:0,
keySupport:!0,
createHandles:["n","s","e","w","nw","ne","se","sw"],
createDragbars:["n","s","e","w"],
createBorders:["n","s","e","w"],
drawBorders:!0,
dragEdges:!0,
fixedSupport:!0,
touchSupport:null,
shade:null,
boxWidth:0,
boxHeight:0,
boundary:2,
fadeTime:400,
animationDelay:20,
swingSpeed:3,
minSelect:[0,0],
maxSize:[0,0],
minSize:[0,0],
maxBound:null,
onChange:function(){},
onSelect:function(){},
onDblClick:function(){},
onRelease:function(){}
};
}(jQuery);
});define("biz_common/utils/wxgspeedsdk.js",[],function(){
function e(e){
if(!e.pid||!e.speeds)return-1;
if(!e.speeds.length>0){
var n=e.speeds;
e.speeds=[],e.speeds.push(n);
}
for(var t=d(e),o=0;o<e.speeds.length;o++){
var r=e.speeds[o];
r.time=parseInt(r.time),r.sid>20&&r.time>0&&i(t,r.sid,r.time);
}
}
function n(){
s(function(){
setTimeout(function(){
for(var e in p)r({
pid_uin_rid:e,
speeds:p[e]
},c);
p={};
},100);
});
}
function t(e){
s(function(){
if(!e.pid||!e.time)return-1;
var n=d(e);
i(n,9,e.time);
});
}
function o(e){
s(function(){
var n=d(e);
p[n]||(p[n]=[]);
var t=window.performance||window.msPerformance||window.webkitPerformance||{};
if(t&&t.timing){
var o=t.timing||{};
i(n,1,o.domainLookupEnd-o.domainLookupStart),i(n,2,"https:"==location.protocol&&0!=o.secureConnectionStart?o.connectEnd-o.secureConnectionStart:0),
i(n,3,o.connectEnd-o.connectStart),i(n,4,o.responseStart-o.requestStart),i(n,5,o.responseEnd-o.responseStart),
i(n,6,o.domContentLoadedEventStart-o.domLoading),i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),
i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart),function(){
setTimeout(function(){
o.loadEventEnd&&(i(n,7,0==o.domComplete?0:o.domComplete-o.domLoading),i(n,8,0==o.loadEventEnd?0:o.loadEventEnd-o.loadEventStart));
},0);
}(p),p[n][9]||i(n,9,o.domContentLoadedEventStart-o.navigationStart),i(n,10,o.redirectEnd-o.redirectStart),
i(n,11,o.domainLookupStart-o.fetchStart),i(n,12,o.domLoading-o.responseStart);
}
});
}
function i(e,n,t){
p[e]=p[e]||[],p[e][n]=p[e][n]||[],0>t||(21>n?p[e][n][0]=t:p[e][n].push(t));
}
function d(e){
return e&&e.pid?e.pid+"_"+(e.uin||0)+"_"+(e.rid||0):void(console&&console.error("Must provide a pid"));
}
function r(e,n){
var t=e.pid_uin_rid.split("_");
if(3!=t.length)return void(console&&console.error("pid,uin,rid, invalid args"));
for(var o="pid="+t[0]+"&uin="+t[1]+"&rid="+t[2],i=n+o+"&speeds=",d="",r=[],s=1;s<e.speeds.length;s++)if(e.speeds[s]){
for(var a=0;a<e.speeds[s].length;a++){
var p=s+"_"+e.speeds[s][a];
i.length+d.length+p.length<1024?d=d+p+";":(d.length&&r.push(i+d.substring(0,d.length-1)),
d=p+";");
}
s==e.speeds.length-1&&r.push(i+d.substring(0,d.length-1));
}
for(var s=0;s<r.length;s++)(new Image).src=r[s];
}
function s(e){
"complete"==document.readyState?e():u.push(e);
}
function a(){
for(var e=0;e<u.length;e++)u[e]();
u=[];
}
var p={},c="https://badjs.weixinbridge.com/frontend/reportspeed?",u=[];
return window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent&&window.attachEvent("onload",a),
{
saveSpeeds:e,
send:n,
setFirstViewTime:t,
setBasicTime:o
};
});define("media/report.js",["biz_common/utils/monitor.js","common/wx/Cgi.js"],function(e){
"use strict";
function t(e,t){
s.pv[e]&&(t=t||1,s.pv[e].count+=t,s.debug&&console.log("addpv:"+e+" count:"+s.pv[e].count));
}
function o(e){
s.uv[e]&&(s.uv[e].count=1,s.debug&&console.log("addUv:"+e+" count:"+s.uv[e].count));
}
function n(e,n){
t(e,n),o(e);
}
function i(e){
var t=s.id[e]||s.id[0];
for(var o in s.pv){
var n=s.pv[o];
n.count>0&&c.setSum(t,n.key,n.count);
}
for(var o in s.uv){
var n=s.uv[o];
n.count>0&&c.setSum(t,n.key,n.count);
}
for(var o in s.ohterData){
var n=s.ohterData[o];
if(n.count>0){
var i=o.split("_");
c.setSum(i[0],i[1],n.count);
}
}
}
function r(){
c.send();
}
function a(e,t,o){
s.ohterData[e+"_"+t]||(s.ohterData[e+"_"+t]={
count:0
}),s.ohterData[e+"_"+t].count+=o||1,s.debug&&console.log("addNum:"+(e+"_"+t+"_"+s.ohterData[e+"_"+t].count));
}
function u(e,t,o){
var n=0,i=[],r={};
if(t&&"[object String]"==Object.prototype.toString.call(t))n=1,"img"==o&&(t=encodeURIComponent(t)),
i.push("log0="+t),r.log0=t;else if(t&&"[object Array]"==Object.prototype.toString.call(t)){
n=t.length;
for(var a=0;n>a;a++){
var u="img"==o?encodeURIComponent(t[a]):t[a];
i.push("log"+a+"="+u),r["log"+a]=u;
}
}
if("img"==o){
var c=new Image,s="//mp.weixin.qq.com/mp/jsmonitor?idkey="+e;
n>0&&(s+="&lc="+n+"&"+i.join("&")),s+="&t="+Math.random(),c.src=s;
}else{
var l={};
n>0&&(l=r),l.idkey=e,l.lc=n,m.post({
url:"//mp.weixin.qq.com/mp/jsmonitor?",
data:l,
dataType:"json"
});
}
}
var c=e("biz_common/utils/monitor.js"),m=e("common/wx/Cgi.js"),s={
debug:window.location.href.indexOf("&_debug=1")>-1?!0:!1,
id:["28146","28305","65080"],
keyConf:["autowidth","fontsize","blockquote","horizontal","removeformat","link","unlink","mpvideo","qqvideo","wxvideo","insertimage","insertvote","insertmusic","insertaudio","insertcard","bold","italic","underline","forecolor","backcolor","justifyleft","justifycenter","justifyright","rowspacingtop","rowspacingbottom","lineheight","insertorderedlist","insertunorderedlist","imagefloatnone","imagefloatleft","imagefloatright","imagefloatcenter","usecache","cover_from_article","showlink","hidelink","remoteimgsuc","remoteimgerr","cancel_autowidth","paste","formatmatch","contextmenu","menu_selectall","menu_cleardoc","menu_justifyleft","menu_justifyright","menu_justifycenter","menu_justifyjustify","menu_inserttable","menu_copy","menu_paste","menu_unlink","insertshop","menu_insertparagraphtrue","menu_insertparagraph","img_popup","link_popup","del_img","remoteimg_img","remoteimg_style","screen_shot_suc","screen_shot_fail","not_cur_img_count","save_remoting_img"],
pv:{},
uv:{},
ohterData:{}
};
return function(){
for(var e=0,t=s.keyConf.length;t>e;e++){
var o=2*e,n=2*e+1,i=s.keyConf[e];
s.pv[i]={
key:o,
count:0
},s.uv[i]={
key:n,
count:0
};
}
}(),{
logReport:u,
addPv:t,
addUv:o,
addPvUv:n,
setData:i,
addNum:a,
send:r,
reportId:s.id
};
});define("media/media_static_data.js",[],function(w,e){
"use strict";
e.article_type=[{
name:"文学",
value:"文学"
},{
name:"金融财经",
value:"金融财经"
},{
name:"房产",
value:"房产"
},{
name:"时事政治",
value:"时事政治"
},{
name:"社会新闻",
value:"社会新闻"
},{
name:"工业农业",
value:"工业农业"
},{
name:"汽车",
value:"汽车"
},{
name:"科技互联网",
value:"科技互联网"
},{
name:"教育培训",
value:"教育培训"
},{
name:"艺术文化",
value:"艺术文化"
},{
name:"美妆时尚",
value:"美妆时尚"
},{
name:"娱乐",
value:"娱乐"
},{
name:"旅游",
value:"旅游"
},{
name:"健康医疗",
value:"健康医疗"
},{
name:"体育",
value:"体育"
},{
name:"餐饮美食",
value:"餐饮美食"
},{
name:"母婴育儿",
value:"母婴育儿"
},{
name:"情感",
value:"情感"
},{
name:"历史",
value:"历史"
},{
name:"军事",
value:"军事"
},{
name:"宗教",
value:"宗教"
},{
name:"星座占卜",
value:"星座占卜"
},{
name:"幽默笑话",
value:"幽默笑话"
},{
name:"图片",
value:"图片"
},{
name:"视频",
value:"视频"
},{
name:"其他",
value:"其他"
}],e.URL_PLATFORM_MAP={
"www.guokr.com":"果壳",
"www.zhihu.com":"知乎",
"blog.sina.com.cn":"新浪博客",
"www.huxiu.com":"虎嗅网",
"www.dreamore.com":"追梦网",
"cn.engadget.com":"瘾科技",
"www.cnbeta.com":"cnBeta",
"www.199it.com":"199IT",
"www.36kr.com":"36氪",
"www.tmtpost.com":"钛媒体",
"www.iheima.com":"i黑马",
"www.cyzone.cn":"创业邦",
"www.ikanchai.com":"砍柴网",
"www.iresearch.cn":"艾瑞网",
"xianguo.com":"鲜果网",
"www.myzaker.com":"ZAKER",
"jandan.net":"煎蛋网",
"pianke.me":"片刻网",
"www.techweb.com.cn":" TechWeb",
"www.leiphone.com":"雷锋网",
"www.douban.com":"豆瓣",
"www.mop.com":"猫扑",
"www.tianya.cn":"天涯",
"jingyan.baidu.com":"百度经验",
"baike.baidu.com":"百度百科",
"wenku.baidu.com":"百度文库",
"tieba.baidu.com":"百度贴吧",
"zhidao.baidu.com":"百度知道",
"news.sina.com.cn":" 新浪新闻",
"news.qq.com":"腾讯新闻",
"news.ifeng.com":"凤凰资讯",
"news.163.com":"网易新闻",
"www.xinhuanet.com":"新华社",
"www.people.com.cn":"人民网",
"www.huanqiu.com":"环球时报",
"www.gov.cn":"中国政府网",
"www.china.com":"中华网",
"www.takungpao.com":"大公网",
"www.81.cn":"中国军网",
"www.zaobao.com":"联合早报",
"d.weibo.com":"新浪微博",
"weibo.com":"新浪微博",
"www.baidu.com":"百度",
"www.sina.com.cn":"新浪",
"www.163.com":"网易",
"news.sohu.com":"搜狐新闻",
"www.sohu.com":"搜狐",
"www.ifeng.com":"凤凰网",
"qzone.qq.com":"QQ空间"
};
});define("media/article_list.js",["common/wx/media/previewDialog.js","media/common.js","common/wx/media/shareCopyrightDialog.js","biz_common/utils/wxgspeedsdk.js","common/qq/events.js","common/qq/Class.js","common/wx/time.js","biz_web/lib/store.js","common/wx/Tips.js","common/wx/dialog.js","common/wx/popover.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/mpEditor/plugin/filter.js","biz_common/moment.js","media/media_cgi.js","media/article.js","media/draft.js","media/report.js","tpl/media/appmsg_edit/article_list_item.html.js","media/preview.js"],function(e){
"use strict";
function t(){
if("-1"==k.navigatorType)return"";
if(!k.navigatorType){
var e=window.navigator.userAgent;
k.navigatorType=/360se/i.test(e)?"360":/metasr/i.test(e)?"搜狗":/LBBROWSER/i.test(e)?"猎豹":/QQBrowser/i.test(e)?"QQ":/Edge/i.test(e)?"Edge":/Opera/i.test(e)||/Opr\//i.test(e)?"Opera":/chrome/i.test(e)?"Chrome":/Safari/i.test(e)?"Safari":/Firefox/i.test(e)?"Firefox":/MSIE/i.test(e)||/Trident\//i.test(e)?"IE":"-1";
}
return k.navigatorType;
}
function i(e){
var t=e&&e.multi_item;
return t&&t.length?($.each(t,function(e,t){
$.each(t,function(e,i){
i.html&&(t[e]=i.html(!1));
});
}),t):null;
}
function a(e,t,i){
(t||1)>T&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:e,
level:i||"error",
content:"[file=media/appmsg_edit]"
});
}
var r=e("common/wx/media/previewDialog.js"),n=e("media/common.js"),o=e("common/wx/media/shareCopyrightDialog.js"),s=e("biz_common/utils/wxgspeedsdk.js"),c=e("common/qq/events.js")(!0),l=e("common/qq/Class.js"),u=e("common/wx/time.js"),f=e("biz_web/lib/store.js"),p=e("common/wx/Tips.js"),_=e("common/wx/dialog.js"),m=e("common/wx/popover.js"),g=e("common/wx/mpEditor/plugin/remoteimg.js"),h=(e("common/wx/mpEditor/plugin/filter.js"),
e("biz_common/moment.js")),v=e("media/media_cgi.js"),w=e("media/article.js"),y=e("media/draft.js"),x=e("media/report.js"),b=e("tpl/media/appmsg_edit/article_list_item.html.js"),j=e("media/preview.js"),D=["一","二","三","四","五","六","七","八","九","十"],k={
navigatorType:"",
debug:window.location.href.indexOf("&_debug=1")>0?!0:!1,
isshare:window.location.href.indexOf("&share=1")>0?!0:!1,
draftTipsreportList:["2397429400","3086281409","2398460220"]
},T=Math.random(),q=n.eq,I=l.declare({
init:function(e){
var t=this;
if($.extend(!0,t,e),t.opt=e,t.data_seq=1*e.appmsg_data.data_seq||0,t.activeData=!1,
t.crop_img_ing=!1,t.$list=$(e.appmsg_selector),t.gid=0,t.readOnlyType=0,t.is_illegal)t.draft=null,
t.readOnlyType="3_1",t.list=i(e.appmsg_data);else if(t.is_rumor)t.draft=null,t.readOnlyType="3_2",
t.list=i(e.appmsg_data);else if(1==wx.cgiData.conflict){
t.readOnlyType="3_3",t.draft=null,t.list=y.getReadOnlyDraft(e.app_id),y.clearReadOnlyDraft(e.app_id);
var a="65080_99_1";
t.list||(a+=";65080_100_1"),x.logReport(a,"","img");
}else wx.cgiData.bizmediaid?(t.draft=null,t.readOnlyType="1_6",t.list=i(e.appmsg_data)):(t.ueditor.fireEvent("reportAddNum",65080,107,1),
t.draft=new y.constructor(e.app_id,t.data_seq,t.ueditor),e.app_id||t.data_seq?(t.list=i(e.appmsg_data),
t.draft.seq=t.data_seq,t.conflict_ls_seq=t.conflict_ls_seq):t.list=!1);
t._bindEvent(),t.list?$.each(t.list,function(e,i){
t.add({
data:i,
isNew:!1
}),t.select(e,0,1);
}):(t.add({
isNew:!0
}),!k.isshare||e.app_id||t.data_seq||t._addShareCopyright(function(){
t.remove(0,!0);
})),wx.cgiData.bizmediaid?(t.select(wx.cgiData.idx,0,1),$("#nav").text(wx.cgiData.appmsg_data.history_time?"正在查看历史版本："+h.unix(wx.cgiData.appmsg_data.update_time).format("YYYY-MM-DD HH:mm:ss")+"由"+(wx.cgiData.appmsg_data.operator_name||"未知")+"保存":"正在查看历史版本")):t.select(0,0,1),
t.lastData=t.getData()||!1,t.hasConfirmed=!1,t._renderReadOnly(),t._warnDraft(),
t._initDraftSyn();
},
_deserializeReadOnlyType:function(){
var e={
right:0,
index:0
};
if(this.readOnlyType){
var t=this.readOnlyType.split("_");
return e.right=1*t[0],e.index=1*t[1],e;
}
return e;
},
_warnDraft:function(){
var e=this;
if(this.draft&&this.draft.data){
if(q(this.lastData,this.draft.data))return void e.draft.clear();
e.ueditor.fireEvent("reportAddNum",65080,108,1);
var t=!0;
1*!e.app_id&&1*!e.draft.seq&&k.isshare&&(t=!1),e.readOnlyType="0_5";
{
y.saveReadOnlyDraft(this.draft.data,e.app_id||0,e.draft.seq||0);
}
e.draft.clear();
var i=e._deserializeReadOnlyType();
e.ueditor.fireEvent("renderReadOnly",{
right:i.right,
type:i.index,
showTips:t
});
try{
var a=window.wx.data.uin;
if(k.debug||50==Math.floor(100*Math.random())||(","+k.draftTipsreportList.join(",")+",").indexOf(","+a+",")>=0){
var r=["draft_tips_",a,";time:",+new Date,";uin:",window.wx.data.uin||"",";app_id:",e.app_id||"",";service_ori:",JSON.stringify(e.list),";service:",JSON.stringify(e.lastData),";draft:",JSON.stringify(d)].join("");
x.logReport("",r,"ajax"),f.set("draft_tips",r),console.log("draft_tips,service:"),
console.log(e.lastData),console.log("draft_tips,draft:"),console.log(d);
}
}catch(n){}
}
},
_initDraftSyn:function(){
function e(){
a.surportFocusReport||(a.ueditor.fireEvent("reportAddNum",65080,95,1),a.surportFocusReport=!0),
a.surportWinFocus=!0,t();
}
function t(){
n&&(clearTimeout(n),n=null),a.draft&&a.draft.active();
}
function i(){
n||(n=setTimeout(function(){
if(n=null,a.draft&&0!=a.draft.activeId&&("function"!=typeof document.hasFocus||document.hasFocus()!==!0&&a.ueditor.getDocument().hasFocus()!==!0)){
var e=a.activeData||!1,t=a.getData()||!1,i=a.ueditor.fireEvent("checkRemoteList"),r=a.ueditor.fireEvent("checkdomAsynList");
if(a._saving===!0||a.crop_img_ing===!0||i!==!0||r!==!0);else if(!q(e,t)){
a.draft.save(t,1);
}
a.draft.silent(),a.activeData=!1;
}
},200));
}
var a=this,r=a.ueditor.getWindow(),n=null;
if(a.draft){
this.ueditor.fireEvent("reportAddNum",65080,94,1),a.ueditor.addListener("syn_draft",function(){
if(a.draft&&a.draft.data){
var e=a.draft.data||!1,t=a.ueditor.fireEvent("checkRemoteList"),i=a.ueditor.fireEvent("checkdomAsynList");
if(!(k.debug||!a.draft||a._saving===!0||a.crop_img_ing===!0||0==a.draft.activeId||t!==!0||i!==!0||q(a.activeData||!1,e)||1*a.data_seq>1*a.draft.seq)){
a.ueditor.fireEvent("reportAddNum",65080,105,1);
var r,n=0;
a.$current&&(n=a.$current.index()||0,r=a.ueditor.getSelectionRange().createDomAddress(!1,!0));
for(var o=a.$list.find(".js_appmsg_item"),s=[],d=[];o.length>0;){
a.select(0),a.ueditor.fireEvent("saveScene");
var c=a.remove(0,!0);
s.push(c.getHistory()||null),d.push(c.scrollTop||0),o=a.$list.find(".js_appmsg_item");
}
a.list=a.draft.data,a.data_seq=a.draft.seq,a.lastData=a.list,$.each(a.list,function(e,t){
var i=a.add({
data:t,
isNew:!1
}),r=i.data("article");
r&&(s&&s[e]&&r.setHistory(s[e]),d&&"undefined"!=typeof d[e]&&(r.scrollTop=d[e])),
i.data("article",r),a.select(e),a.ueditor.fireEvent("saveScene");
});
var l=a.$list.find(".js_appmsg_item").length;
a.select(Math.min(n,l-1)),setTimeout(function(){
a.activeData=a.getData(),r&&a.ueditor.getSelectionRange().moveToDomAddress(r,!1).select();
},0);
}
}
}),this.ueditor.addListener("active_state_change",function(){
a.draft&&(0==a.draft.activeId?a._clearIntervalSave():a.draft.activeId>0&&(a._activeIntervalSave(),
a.activeData=a.getData()));
});
var o,s;
"undefined"!=typeof document.hidden?(o="hidden",s="visibilitychange"):"undefined"!=typeof document.msHidden?(o="msHidden",
s="msvisibilitychange"):"undefined"!=typeof document.webkitHidden?(o="webkitHidden",
s="webkitvisibilitychange"):"undefined"!=typeof document.mozHidden&&(o="mozHidden",
s="mozvisibilitychange"),o&&a.ueditor.fireEvent("reportAddNum",65080,102,1),$(document).on("visibilitychange",function(){
document[o]&&i();
}),$(window).on("focus",e),$(r).on("focus",e),$(window).on("blur",i),$(r).on("blur",i);
var d="before_add_article before_del_article focus mousedown keydown";
a.ueditor.addListener(d,t),a.ueditor.addListener("blur",i),"function"==typeof document.hasFocus?(a.ueditor.fireEvent("reportAddNum",65080,97,1),
a.surportHasFocus=!0,setTimeout(function(){
try{
(a.draft&&document.hasFocus()===!0||a.ueditor.isReady&&a.ueditor.getDocument().hasFocus()===!0)&&(a.draft.active(!0),
a.activeData=a.getData());
}catch(e){
a.surportHasFocus=!1;
}
},0)):(a.activeData=a.getData(),a.surportHasFocus=!1);
}
},
_renderReadOnly:function(e,t,i){
var a=this,r=a._deserializeReadOnlyType();
if(4==r.index){
var n=a.getData()||!1;
a.draft=null,y.clear(a.app_id),y.saveConflict(n,a.app_id,a.data_seq,a.conflict_ls_seq);
}
1&r.right&&a.ueditor.fireEvent("renderReadOnly",{
right:r.right,
type:r.index,
time:e||"",
name:t||"",
ua:i||""
});
},
_clearIntervalSave:function(){
this.draftSaveId&&clearInterval(this.draftSaveId);
},
_activeIntervalSave:function(){
var e=this;
e._clearIntervalSave(),this.draftSaveId=setInterval(function(){
if(e._clearIntervalSave(),e.draft){
var t=e.getData()||!1;
q(e.lastData,t)||e.draft.save(t);
}
e._activeIntervalSave();
},6e4);
},
_addShareCopyright:function(e){
var t=this;
new o({
onOK:function(i){
if(i){
"function"==typeof e&&e();
var a=t.add({
data:{
title:i.title,
cover:i.cover_url,
cdn_url:i.cover_url,
content:i.content,
copyright_headimg:i.head_img_url,
copyright_nickname:i.nickname,
is_share_copyright:1,
share_copyright_url:i.url
},
isNew:!0
});
if(a&&(t.select(a.index()),t.app_id)){
var r=new Image;
r.src="/cgi-bin/reportmaterialoper?oper=0&idx="+a.index()+"&msgid="+t.app_id+"&token="+wx.data.t;
}
}
}
});
},
_bindEvent:function(){
var e=this;
$("#js_add_polo_appmsg").on("click",function(){
if(e._saving!==!0&&e.ueditor.fireEvent("before_add_article")!==!1){
var t=e.add({
isNew:!0
});
if(t&&(e.select(t.index()),e.app_id)){
var i=new Image;
i.src="/cgi-bin/reportmaterialoper?oper=0&idx="+t.index()+"&msgid="+e.app_id+"&token="+wx.data.t;
}
}
}),$("#js_add_share_appmsg").on("click",function(){
e._saving!==!0&&e.ueditor.fireEvent("before_add_article")!==!1&&e._addShareCopyright();
}),e.$list.on("click",".js_appmsg_item",function(){
var t=$(this).closest(".js_appmsg_item").index();
t!=e.$current.index()&&e.select(t),wx.cgiData.idx=t;
}),e.$list.on("click",".js_del",function(){
if(e._saving!==!0&&e.ueditor.fireEvent("before_del_article")!==!1){
var t=$(this).closest(".js_appmsg_item").index();
return t!=e.$current.index()&&e.select(t),e.remove(t),!1;
}
}),e.$list.on("click",".js_up",function(){
var t=$(this).closest(".js_appmsg_item");
e._beforeArticleMove({
type:"up",
oriIndex:t.index()
});
var i=t.prev();
0==i.index()&&(i.find(".first_appmsg_item").hide().siblings().show(),t.find(".first_appmsg_item").show().siblings().hide()),
t.insertBefore(i),e._updateTitleTips(),e.$list.children().find(".js_down").show(),
e.$list.children().last().find(".js_down").hide(),e.ueditor.fireEvent("afterArticleMove");
}),e.$list.on("click",".js_down",function(){
var t=$(this).closest(".js_appmsg_item");
e._beforeArticleMove({
type:"down",
oriIndex:t.index()
});
var i=t.next();
0==t.index()&&i.length&&(t.find(".first_appmsg_item").hide().siblings().show(),i.find(".first_appmsg_item").show().siblings().hide()),
i.insertBefore(t),e._updateTitleTips(),e.$list.children().find(".js_down").show(),
e.$list.children().last().find(".js_down").hide(),e.ueditor.fireEvent("afterArticleMove");
}),$("body").on("click","a",function(t){
var i=$(this).attr("href"),a=$(this).attr("target");
if("_blank"!==a&&"string"==typeof i&&0!==i.indexOf("javascript:")&&0!==i.indexOf("#")){
var r=e.getData()||!1,n=e._deserializeReadOnlyType();
if(2&n.right)return t.preventDefault(),void _.show({
type:"warn",
msg:"如果离开此页面，当前页面数据将丢失！",
buttons:[{
text:"留在此页面",
click:function(){
this.remove();
}
},{
text:"离开此页面",
type:"normal",
click:function(){
window.onbeforeunload=null,4==n.index&&y.saveConflict(r,e.app_id,e.data_seq,e.conflict_ls_seq),
location.href=i,this.remove();
}
}]
});
if(q(r,e.lastData))return void(e.draft&&e.draft.clear());
t.preventDefault();
var o=1==wx.cgiData.isNew?"是否保存当前图文消息内容？":"是否保存此次修改？";
_.show({
type:"info",
msg:o,
buttons:[{
text:"保存",
click:function(){
e.save($("#js_submit"),function(){
window.onbeforeunload=null,p.remove(),$("#js_save_success").show(),location.href=i;
}),this.remove();
}
},{
text:"不保存",
type:"normal",
click:function(){
e.draft&&e.draft.clear(),window.onbeforeunload=null,location.href=i,this.remove();
}
}]
});
}
}),e.ueditor.addListener("contentchange",function(){
$("#js_import_tips,#js_draft_tips").hide();
}),e._activeIntervalSave(),window.onbeforeunload=function(t){
var i=e.getData()||!1,a="--------------------------------------------\n如果离开此页面，当前页面数据将丢失！\n--------------------------------------------",r=e._deserializeReadOnlyType();
if(2&r.right){
4==r.index&&y.saveConflict(i,e.app_id,e.data_seq,e.conflict_ls_seq);
try{
t.returnValue=a;
}catch(t){}
return a;
}
if(e.draft){
if(q(i,e.lastData))return void e.draft.clear();
try{
t.returnValue=a;
}catch(t){}
return a;
}
},$(window).on("unload",function(){
e.draft&&e.draft.clear();
}),e.ueditor.addListener("is_article_alive",function(e,t){
return t&&t.data("article")&&t.data("article").data&&"function"==typeof t.data("article").data.getData?!0:!1;
}),e.ueditor.addListener("is_article_editing",function(e,t){
return t.hasClass("current")?!0:!1;
}),e.ueditor.addListener("draft_force_save",function(){
if(e.draft){
var t=e.getData();
e.draft.activeId>0&&(e.activeData=t),e.draft.forceSave(t,e.draft.activeId);
}
}),e.ueditor.addListener("get_current_article",function(){
return e.$current||null;
}),e.ueditor.addListener("get_current_article_all_img",function(){
var t=e.$current?e.$current.data("article"):null;
return t&&"function"==typeof t.getAllImgData?t.getAllImgData():[];
}),e.ueditor.addListener("update_remote_img",function(t,i){
e.updateRemoteImg(i);
}),e.ueditor.addListener("end_crop_img",function(){
e.crop_img_ing=!1;
}),e.ueditor.addListener("start_crop_img",function(){
e.crop_img_ing=!0;
}),e.ueditor.addListener("afterArticleMove",function(){
e._afterArticleMove();
}),c.on("_preview",function(){
e._preview();
});
},
_beforeArticleMove:function(e){
this.afterArticleMoveTimeout&&(clearTimeout(this.afterArticleMoveTimeout),this.afterArticleMoveTimeout=null),
this._articleMoveLog?this._articleMoveLog.push({
name:"beforeArticleMove",
type:e.type,
oriIndex:e.oriIndex,
time:+new Date
}):(this.ueditor.changeUeditorConf({
key:["debug"],
value:[1]
}),this._articleMoveLog=[{
name:"beforeArticleMove",
type:e.type,
oriIndex:e.oriIndex,
time:+new Date
}],this._seq_data=this.getData());
},
_afterArticleMove:function(){
if(this.afterArticleMoveTimeout&&(clearTimeout(this.afterArticleMoveTimeout),this.afterArticleMoveTimeout=null),
this._seq_data&&this._articleMoveLog){
this._articleMoveLog.push({
name:"afterArticleMove",
time:+new Date
});
var e=this;
this.afterArticleMoveTimeout=setTimeout(function(){
var i=e.getData();
if(i&&e._seq_data&&e._articleMoveLog&&i.length==e._seq_data.length){
for(var a=[],r=[],n=0,o=i.length;o>n;n++)a.push({
content:i[n].content.text().substr(0,200),
title:i[n].title
}),r.push({
content:e._seq_data[n].content.text().substr(0,200),
title:e._seq_data[n].title
});
for(var n=0,o=r.length;o>n;n++){
var s=r[n];
if(s.title&&s.content&&200==s.content.length)for(var d=0,c=a.length;c>d;d++){
var l=a[d];
if(s.title!=l.title&&s.content==l.content)try{
var u={
articleMoveLog:e._articleMoveLog,
eventLog:e.ueditor.getUeditor().eventLog,
AppMsgId:e.app_id,
operate_from:t(),
uin:window.wx.data.uin||""
};
u="seq_error_log;"+JSON.stringify(u),x.logReport("65080_110_1",u,"ajax");
}catch(f){}
}
}
e.ueditor.changeUeditorConf({
key:["debug"],
value:[0]
}),e.afterArticleMoveTimeout=null,e._seq_data=null,e._articleMoveLog=null;
}
},1e3);
}
},
_getCurrentIndex:function(){
return this.$current&&this.$current.data("article")?this.$current.data("article").getIndex():0;
},
_updateTitleTips:function(){
var e=0;
this.$list.children().each(function(){
var t=$(this);
t.data("msgindex",e),t.children().attr("title","第%s篇图文".sprintf(D[e]));
var i=t.data("article");
i&&i.updateIndex(e),e++;
});
},
_checkHmltDeep:function(e){
function t(e,r){
var n=e.children(),o=n.length;
if(0==o)return void(r>=i&&a.push({
sid:21,
time:r-1
}));
for(var s=0,d=o;d>s;s++)t(n.eq(s),r+1);
}
try{
var i=31,a=[],r=$.map(e,function(e,t){
return 0==t.indexOf("content")?e:void 0;
});
$.each(r,function(e,i){
t($("<div></div>").html(i),1);
}),a.length>0&&(s.saveSpeeds({
uin:window.wx.uin,
pid:34,
speeds:a
}),s.send());
}catch(n){}
},
_checkExternalLink:function(e){
var t=[],i=$.map(e,function(e,t){
return 0==t.indexOf("content")?e:void 0;
});
if($.each(i,function(e,i){
for(var a=/http\:\/\/([\w-]+\.)+[\w-]+(\:\d*)?(\/[\w\- \.\/\?%&=]*)?/gi,r=null,n="";null!=(r=a.exec(i));)n=i.substring(r.index,a.lastIndex),
g.isLocalDomain(n)||t.push(i.substring(Math.max(0,r.index-20),a.lastIndex));
}),t.length){
var a=(t.length,{
lc:t.length
});
$.each(t,function(e,t){
a["log"+e]=encodeURIComponent(t);
}),$.post("//mp.weixin.qq.com/mp/jsmonitor?idkey=28308_7_1",a);
}
},
add:function(e){
var t=this,i=t.$list.children().length;
if(i>=t.maxNum)return void p.err("你最多只可以加入%s条图文消息".sprintf(t.maxNum));
i==t.maxNum-1&&t.$list.parent().siblings("a").hide();
var a=new w({
isNew:e.isNew===!1?!1:!0,
app_id:t.app_id||"",
dom:t.opt.editor_selector,
data:e.data,
index:i,
ueditor:t.ueditor,
freeUEditor:t.freeUEditor
}),r=$.parseHTML(wx.T(b,a.data.getData()))[0],n=$(r).appendTo(t.$list);
return a.setListItem(n),n.data("article",a),$(".js_scrollbar").scrollbar.updateScrollbars(!0),
t.$list.children().find(".js_down").show(),t.$list.children().last().find(".js_down").hide(),
n;
},
remove:function(e,t){
var i=this,a=i.$list.children().eq(e);
i.$current&&e!=i.$current.index()&&i.select(e);
var r=a.data("article").flush();
return t===!0?i.drop(e):(a.find(".appmsg_edit_mask").css("display","block"),new m({
dom:a.find(".js_del"),
content:"确定删除此篇图文？",
hideIfBlur:!0,
buttons:[{
text:"确定",
click:function(){
if(i.drop(e),i.app_id){
var t=new Image;
t.src="/cgi-bin/reportmaterialoper?oper=1&idx="+e+"&msgid="+i.app_id+"&token="+wx.data.t;
}
this.remove();
},
type:"primary"
},{
text:"取消",
click:function(){
a.find(".appmsg_edit_mask").css("display",""),this.remove();
}
}]
})),r;
},
drop:function(e){
var t=this;
0!=e&&t.select(Math.max(0,e-1)),t.$list.children().eq(e).remove(),t.$list.parent().siblings("a").show(),
t.$list.children().find(".js_down").show(),t.$list.children().last().find(".js_down").hide(),
$(".js_scrollbar").scrollbar.updateScrollbars(!0),t._updateTitleTips();
},
select:function(e,t,i){
var a=this,r="number"!=typeof e?e:a.$list.find(".js_appmsg_item").eq(e);
r.addClass("current");
var n=null;
if(r.siblings().removeClass("current"),a.$current){
if(e==a.$current.index())return;
n=a.$current.data("article"),n&&n.flush(),a._checkRepeat();
}
n=r.data("article"),n&&(!t&&n.hideErrorTips(),a.$current=r,n.render()),i||setTimeout(function(){
$(window).scrollTop(n.scrollTop),$("div.appmsg_edit_box").css({
overflow:"hidden"
}),setTimeout(function(){
$("div.appmsg_edit_box").css({
overflow:""
});
},0);
},100),$("#js_appmsg_upload_cover").siblings("ul").hide(),a.ueditor.fireEvent("afterArticleSelect",e);
},
updateRemoteImg:function(e){
var t=e.article;
if(this.ueditor.fireEvent("is_article_alive",t)===!0){
var i,a=t.data("article").data,r=t.hasClass("current")?!0:!1,o=$("<div>"),s=(e.type,
e.uid);
if(r)i=$(this.ueditor.getDocument()).find("[data-remoteid="+s+"]");else{
if(this.ueditor.funcPvUvReport("not_cur_img_count"),!a.get("content"))return;
i=o.html(a.get("content")).find("[data-remoteid="+s+"]");
}
if(i){
n.changeRemoteImgUrl({
imgDom:i,
remoteType:e.remoteType,
format:e.format,
img_url:e.img_url,
editor:this.ueditor
});
var d=$("body").find("div.dialog_wrp").find(".js_imgItemSrc[data-remoteid="+s+"]");
d&&d.length>0&&(n.changeRemoteImgUrl({
imgDom:d,
remoteType:e.remoteType,
img_url:e.img_url,
errDefaultStyle:!0,
editor:this.ueditor
}),d.parents(".js_imgItem").removeClass("loading_item"),d.siblings(".js_title_img_mask").remove()),
r||(a.set("content",o.html()),t.data("article").data.setData(a.getData()));
}
}
},
_checkRepeat:function(){
try{
var e=function(e,t,i){
var a={};
return e=$.extend(e,t),$.each(i,function(t,i){
a[i]=e[i];
}),a;
},t=this,i=t.$current.index(),a=t.$current.data("article").data,r=["author","digest","file_id","source_url","title","content"],n=e({},a.getData(),r);
if(""==a.get("content")||""==a.get("title"))return;
var o=!0;
if($.each(r,function(e,t){
n[t]&&(o=!1);
}),o)return;
t.$list.find(".js_appmsg_item").each(function(a){
if(a!=i){
var o=e({},$(this).data("article").data.getData(),r);
q(n,o,null,null,!0)&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=[repeat][appid:%s,idx:%s,bizuin:%s]".sprintf(28308,1,t.app_id||0,a,wx.data.uin));
}
});
}catch(s){}
},
getData:function(e,t){
var i=this,a=[],r=null,n=i.$current;
n&&(r=n.data("article"),r&&r.flush());
var o=!0;
return i.$list.find(".js_appmsg_item").each(function(r){
var n=$(this).data("article");
if(n){
var s=n.getData(e,t);
return null==s?(i.select(r,!0,!0),o=!1,!1):void a.push(s);
}
}),0==a.length?!1:o&&a;
},
getPostData:function(e){
var i=this,a=i.getData(!0,e);
if(!a)return null;
var r={
AppMsgId:i.app_id,
count:a.length,
data_seq:1*i.data_seq||0,
operate_from:t()
};
return $.each(a,function(e,t){
var i={};
$.each(t,function(t,a){
i[t+e]=a;
}),$.extend(r,i);
}),r;
},
_checkSeqError:function(e,t){
try{
if(!t||0==t.length)return;
for(var i=[],a=0;a<e.count;a++){
var r=e["content"+a];
i.push(r?r.text():"");
}
for(var a=0,n=t.length;n>a;a++){
var r=t[a];
if(r&&"undefined"!=typeof r.content){
var o=r.content.text();
if(o&&i[a]&&o!=i[a])for(var s=0,d=i.length;d>s;s++)if(s!=a&&i[s]&&o==i[s]){
var c=new Image,l=["appmsgid:",e.AppMsgId||"",";operate_from:",e.operate_from,";web_index:",s,";cgi_index:",a,";title:",e["title"+s]||""];
c.src=["https://badjs.weixinbridge.com/badjs?level=4&id=114&msg=",encodeURIComponent(l.join("")),"&uin=",window.wx.data.uin||"","&from=1&t=",Math.random()].join("");
}
}
}
}catch(u){}
},
update:function(e){
if(e&&0!=e.length){
var t;
this.$current&&(t=this.$current.index()||0);
for(var i=0,a=e.length;a>i;i++){
var r=e[i];
if(r&&"undefined"!=typeof r.content){
var n=r.content||"";
if(this.$current&&this.$current.index()==i){
var o=this.$current.data("article");
o&&o.data&&"function"==typeof o.data.get&&1*o.data.get("is_share_copyright")!=1&&this.ueditor.setContent(n);
}else{
var o=this.$list.find(".js_appmsg_item").eq(i).data("article");
o&&o.data&&"function"==typeof o.data.set&&1*o.data.get("is_share_copyright")!=1&&(o.data.set("content",n),
this.select(i,0,0));
}
}
}
this.$current&&this.$current.index()!=t&&this.select(t,0,0);
}
},
save:function(e,t,i,r,o,s){
var d=this._deserializeReadOnlyType();
if(!(1&d.right||this._saving===!0)){
var c=0,l=this;
try{
c=3;
{
l.getData();
}
c=4;
var f=l.getPostData(i||s);
if(c=5,!f)return;
l.hasConfirmed&&(l.hasConfirmed=!1,f.confirm=1),e.btn(!1),l._saving=!0,a(30,.1,"error"),
n.waitAsynAction({
editor:l.ueditor,
callback:function(){
var n=l.getPostData(i||s);
return n?(1===f.confirm&&(n.confirm=1),n=l.filtercharCode(n),a(31,.1,"error"),l.ueditor.fireEvent("reportAddNum",65080,91,1),
void v.appmsg.save(!0,10,n,function(i){
l._saving=!1,e.btn(!0),l.app_id=i.appMsgId,l.data_seq=1*i.data_seq,l.update(i.filter_content_html),
l.lastData=l.getData()||!1,l.draft&&(l.draft.clear(),l.draft._updateAppid(l.app_id,l.data_seq)),
t(i,n),l._checkExternalLink(n),l._checkHmltDeep(n),l._checkSeqError(n,i.filter_content_html);
},function(t,a,n,o){
switch(l._saving=!1,e.btn(!0),0!=t&&l.select(1*t),+a){
case 64515:
l.ueditor.fireEvent("reportAddNum",65080,92,1),l.readOnlyType="3_4",l.conflict_ls_seq=1*l.data_seq,
l.data_seq=1*o.data_seq,l._renderReadOnly(u.timeFormat(o.update_time),o.operator_name,o.operate_from);
break;

case 200041:
p.err(o.myErrMsg),l.draft=null,l.readOnlyType="3_1",l._renderReadOnly();
break;

case 1530503:
$(".frm_msg.js_warn").text(o.myErrMsg).show(),$("input[name='source_url']").focus();
break;

case 1530504:
$(".page_msg.js_warn").show().find(".profile_link_msg_global").text(o.myErrMsg),
$(window).scrollTop(0);
break;

case 1530510:
$(".frm_msg.js_warn").text(o.myErrMsg).show(),$("input[name='source_url']").focus();
break;

case 1530511:
$(".page_msg.js_warn").show().find(".profile_link_msg_global").text(o.myErrMsg),
$(window).scrollTop(0);
break;

case 153007:
case 153008:
case 153009:
case 200042:
case 200043:
case 64601:
case 64602:
case 64603:
case 64604:
case 64605:
case 153010:
_.show({
width:750,
type:"warn",
msg:o.myErrMsg,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
break;

case 13002:
$(".js_ad_tips_wording").text(o.myErrMsg),$(".js_ad_error_tips").parent().show(),
$(".js_ad_error_tips").show(),r&&r.fireEvent("scrollIntoView",$(".js_ad_preview"),$(window).height()-$(".js_ad_preview").height()-72-30);
break;

case 13003:
var s="/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&lang=zh_CN&token="+wx.data.t+"&type=10&appmsgid="+o.ad_article_msgid+"&isMul=1";
$(".js_ad_tips_wording").html('已有文章《<a href="'+s+'" target="_blank">'+o.ad_article_title+"》</a>插入过该广告卡片，一个广告卡片仅可插入一篇文章"),
$(".js_ad_error_tips").parent().show(),$(".js_ad_error_tips").show(),r&&r.fireEvent("scrollIntoView",$(".js_ad_preview"),$(window).height()-$(".js_ad_preview").height()-72-30);
break;

case 13004:
$(".js_ad_tips_wording").text(o.myErrMsg),$(".js_ad_error_tips").parent().show(),
$(".js_ad_error_tips").show(),r&&r.fireEvent("scrollIntoView",$(".js_ad_preview"),$(window).height()-$(".js_ad_preview").height()-72-30);
break;

case 15801:
case 15802:
case 15803:
case 15804:
case 15805:
case 15806:
_.show({
type:"warn",
msg:n||"你所编辑的图文消息可能含有违反微信公众平台平台协议、相关法律法规和政策的内容|你可以继续保存或发布该图文消息，若保存或发布后，经核实涉嫌含有上述相关内容的，将可能被作删除、屏蔽等处理。<br/>                                    <a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=2056316619' target='_blank'>对应规则</a>",
buttons:[{
text:i?"继续预览":"继续保存",
click:function(){
this.remove(),l.hasConfirmed=!0,e.trigger("click");
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
break;

case 153012:
setTimeout(function(){
$("html, body").animate({
scrollTop:$(".origined").offset().top-60
});
},100),$("#original_type_msg").show();
break;

default:
var t=o&&o.myErrMsg?o.myErrMsg:"保存失败";
p.err(t);
}
})):(l._saving=!1,void e.btn(!0));
}
}),c=6;
}catch(m){
l._saving=!1,e.btn(!0),p.err("保存失败，请稍后再试"),c&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=editor_save_error;errmsg:%s,appid:%s,bizuin:%s".sprintf(28308,c,m.message,l.app_id||0,wx.data.uin)),
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&m&&m.stack&&(m.stack="editor_save_error|"+m.stack,
window.BJ_REPORT.report(m)),m.stack&&console&&console.error&&console.error("[BJ-REPORT]",m.stack);
}
}
},
filtercharCode:function(e){
var t=!1;
for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i].replace&&(e[i]=e[i].replace(/[\ud800-\uDFFF]/g,function(e,i,a){
return/[\ud800-\udbff]/.test(e)&&/[\uDC00-\uDFFF]/.test(a.charAt(i+1)||"")?e:/[\ud800-\udbff]/.test(a.charAt(i-1)||"")&&/[\uDC00-\uDFFF]/.test(e)?e:(t=!0,
"");
}));
return t&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=28308_11_1"),e;
},
preview:function(e,t){
var i=this;
i.save($("#js_preview"),function(a){
for(var r=i.getPostData(),n=i.getData(),o=0;8>o;o++)r["content"+o]&&(r["content"+o]=e.handlerContent(r["content"+o],!0),
r["content"+o]=r["content"+o].replace("/cgi-bin/readtemplate?t=tmpl/cpc_tmpl","/cgi-bin/readtemplate?t=tmpl/cpc_tmpl&preview=1")),
n&&n[o]&&(r["ad_info"+o]=n[o].ad_info);
j.show(r,i.$current.index(),n),"function"==typeof t&&t(a);
},!0,e,i.$current.index());
},
_preview:function(){
var e=this,t=e.getPostData();
new r({
AppMsgId:t.AppMsgId,
type:2,
hasConfirmed:e.hasConfirmed,
selectFun:e.select,
uin:wx.data.uin,
token:wx.data.t,
nickname:wx.data.nick_name
});
}
});
return I;
});