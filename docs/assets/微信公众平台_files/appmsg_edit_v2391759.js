define("common/wx/Step.js", [ "widget/processor_bar.css", "tpl/step.html.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = wx.T, s = e("widget/processor_bar.css"), o = e("tpl/step.html.js"), u = {
selected: 1
}, a = function() {
var e = navigator.userAgent.toLowerCase(), t = /(msie) ([\w.]+)/.exec(e) || [], n = t[1] || "";
return n == "msie";
};
function f(e) {
this.opts = $.extend(!0, {}, u, e), this.init();
}
f.prototype.init = function() {
var e = this.opts, t = e.names.length, n = parseInt(e.selected, 10), r = [], s, u;
n = n < 0 ? 0 : n > t ? t : n;
for (s = 0; s < t; s++) u = f.getClass(s + 1, n), r.push({
name: e.names[s],
cls: u
});
this.$dom = $(i(o, {
stepArr: r,
length: t
})).appendTo(e.container), a() && this.$dom.addClass("ie");
}, f.prototype.setStep = f.prototype.go = function(e) {
var t = this.$dom.find("li.step"), n = t.length;
return e = e < 0 ? 0 : e > n ? n : e, t.each(function(t, r) {
var i = f.getClass(t + 1, e);
t + 1 == n ? r.className = "no_extra " + "step grid_item size1of%s %s".sprintf(n, i) : r.className = "step grid_item size1of%s %s".sprintf(n, i);
}), this;
}, f.getClass = function(e, t) {
var n;
return e < t - 1 ? n = "pprev" : e === t - 1 ? n = "prev" : e === t ? n = "current" : e === t + 1 ? n = "next" : e > t + 1 && (n = "nnext"), n;
}, n.exports = f;
} catch (l) {
wx.jslog({
src: "common/wx/Step.js"
}, l);
}
});define("common/wx/inputCounter.js",[],function(t,n,e){
"use strict";
function o(t,n){
this.$input=$(t),this.opts=$.extend(!0,{},i,n),this._init();
}
var i={
minLength:0,
maxLength:20,
showCounter:!0,
useGBKLength:!1,
GBKBased:!1
};
o.prototype._init=function(){
var t=this;
t.$input&&t.$input.length>0?(t.$inputBox=t.$input.parent("textarea"==t.$input.prop("tagName").toLowerCase()?".frm_textarea_box":".frm_input_box"),
t.count=t._getLen(t.getValue()),t.$counter=t.$inputBox.find(".frm_counter"),t.counterExist=!0,
0==t.$counter.length&&(t.counterExist=!1,t.$counter=$('<em class="frm_input_append frm_counter"></em>'),
t.$inputBox.append(t.$counter)),1==t.opts.showCounter?t.show():t.hide(),t.setCount(t.count),
t.inputEvent=function(){
t.setCount(t._getLen(t.getValue()));
},t.$input.on("keydown keyup",t.inputEvent)):console.log("inputCounter Err: input does not exist.");
},o.prototype.getValue=function(){
var t="";
switch(this.$input.prop("tagName")){
case"INPUT":
case"TEXTAREA":
t=this.$input.val();
break;

default:
t=this.$input.text();
}
return t;
},o.prototype._getLen=function(t){
var n=0;
return t=t||"",n=this.opts.useGBKLength?t.replace(/[^\x00-\xff]/g,"**").length:t.length,
this.opts.GBKBased&&(n=Math.ceil(n/2)),n;
},o.prototype.getCount=function(){
return this.count||0;
},o.prototype.setCount=function(t){
this.count=t,this.$counter.html(this.count+"&#47;"+this.opts.maxLength),this.count>this.opts.maxLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):this.count>0&&this.count<this.opts.minLength?(this.overflowed=!0,
this.$inputBox.addClass("warn")):(this.overflowed=!1,this.$inputBox.removeClass("warn"));
},o.prototype.hasOverflowed=function(){
return this.overflowed;
},o.prototype.show=function(){
this.$inputBox.addClass("with_counter counter_in append count"),this.$counter.show();
},o.prototype.hide=function(){
this.$inputBox.removeClass("with_counter counter_in append count warn"),this.$counter.hide();
},o.prototype.destroy=function(){
this.$input.off("keydown keyup",this.inputEvent),0==this.counterExist&&(this.hide(),
this.$counter.remove());
},e.exports=o;
});define("biz_web/ui/checkbox.js",["tpl/biz_web/ui/checkbox.html.js"],function(t){
"use strict";
function e(t){
var e=$(t);
e.each(function(){
var t=$(this),e=t.prop("checked"),n=t.parent();
e?n.addClass("selected"):n.removeClass("selected");
});
}
function n(t){
var e=$(t);
e.each(function(){
var t=$(this).prop("disabled"),e=$(this).parent();
t?e.addClass("disabled"):e.removeClass("disabled");
});
}
function i(){
return"checkbox"+s++;
}
var a={
container:null,
label:"",
name:"",
type:"checkbox"
},c=t("tpl/biz_web/ui/checkbox.html.js"),r=wx.T,s=1,o=1,p=function(t){
this.options=$.extend(!0,{},a,t),this.options.index=o++,this.$container=$(this.options.container),
this.$dom=$(r(c,this.options)).appendTo(this.$container),this.$input=this.$dom.find("input"),
this.$input.checkbox();
};
return p.prototype={
checked:function(t){
return"undefined"!=typeof t&&(this.$input.prop("checked",t),e(this.$input)),this.$input.prop("checked");
},
disabled:function(t){
return"undefined"!=typeof t&&(this.$input.prop("disabled",t),n(this.$input)),this.$input.prop("disabled");
}
},$.fn.checkbox=function(t){
var a,c,r,s,o=!1;
"boolean"==typeof t?a=t:$.isPlainObject(t)?(a=t.multi,c=t.onChanged):"string"==typeof t?(o=!0,
r=t,s=[].slice.call(arguments,1)):"undefined"==typeof t&&(t={}),"undefined"==typeof a&&(a=this.is("input[type=checkbox]"));
var p=this,d=a?"checkbox":"radio",h={
checked:function(t){
return p.attr("checked",t),p.prop("checked",t),e(p),p;
},
disabled:function(t){
return p.attr("disabled",t),p.prop("disabled",t),n(p),p;
},
value:function(){
var t=p.eq(0);
return t.prop("checked")?t.val():"";
},
values:function(){
var t=[];
return p.each(function(){
$(this).prop("checked")&&t.push($(this).val());
}),t;
},
adjust:function(t){
var n;
return n="string"==typeof t?t.split(","):t,n&&n.length>0&&p.each(function(){
var t=$(this);
n.indexOf(t.val())>=0&&(t.attr("checked",!0),e(t));
}),this;
},
disable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!0),n(t));
}),this;
},
setall:function(t){
p.each(function(){
var e=$(this);
e.attr("disabled",t?!1:!0),n(e);
});
},
enable:function(t){
var e;
return e="string"==typeof t?t.split(","):t,e&&e.length>0&&p.each(function(){
var t=$(this);
e.indexOf(t.val())>=0&&(t.attr("disabled",!1),n(t));
}),this;
},
label:function(t){
return t&&(p.parent().find(".lbl_content").text(t),p.attr("data-label",t)),p;
}
};
return o&&"function"==typeof h[r]?h[r].apply(h,s):(this.addClass("frm_"+d).each(function(){
var t=$(this),e=t.parent();
if(!e.is("label")){
var n=t.attr("data-label")||"";
e=$('<label class="frm_{type}_label"><i class="icon_{type}"></i></label>'.format({
type:d
})).append("<span class='lbl_content'>{content}</span>".format({
content:n.html(!0)
})),e.insertBefore(t).prepend(t);
}
if(!this.id){
var a=i();
this.id=a;
}
e.attr("for",this.id);
}),e(this),n(this),t&&t.initOnChanged&&"function"==typeof c&&p.parent().find("input[type=checkbox],input[type=radio]").each(function(){
c.call(h,$(this));
}),this.parent().delegate("input[type=checkbox],input[type=radio]","click",function(){
var t=$(this),n=t.prop("checked");
a?(t.attr("checked",n),e(t)):(p.attr("checked",!1),t.attr("checked",!0).prop("checked",!0),
e(p)),"function"==typeof c&&c.call(h,t);
}).addClass("frm_"+d+"_label"),h);
},p;
});define("biz_web/utils/upload.js",["widget/upload.css","biz_web/lib/webuploader.js","common/wx/dialog.js","common/wx/Tips.js","tpl/uploader.html.js"],function(e){
"use strict";
function i(e){
g.src="http://isdspeed.qq.com/cgi-bin/r.cgi?flag1=7839&flag2=4&flag3=5&1="+e;
}
e("widget/upload.css");
var n=e("biz_web/lib/webuploader.js"),a=e("common/wx/dialog.js"),t=e("common/wx/Tips.js"),o=e("tpl/uploader.html.js"),r=wx.T,s=wx.path.webuploader,p=~location.hostname.search(/^mp/)?"https://mp.weixin.qq.com":"",l={
2:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
3:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:5242880
},
4:{
accept:{
extensions:"rm,rmvb,wmv,avi,mpg,mpeg,mp4",
mimeTypes:"video/rm,video/rmvb,video/wmv,video/avi,video/mpg,video/mpeg,video/mp4"
},
fileSingleSizeLimit:20971520
},
5:{
accept:{
extensions:"pdf",
mimeTypes:"application/pdf"
},
fileSingleSizeLimit:10485760
},
6:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif,pdf",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif,application/pdf"
},
fileSingleSizeLimit:5242880
},
7:{
accept:{
extensions:"bmp,png,jpeg,jpg,gif",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:5242880
},
8:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
9:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:204800
},
10:{
accept:{
extensions:"xls",
mimeTypes:"application/vnd.ms-excel"
},
fileSingleSizeLimit:5242880
},
11:{
accept:{
extensions:"bmp,png,jpeg,jpg",
mimeTypes:"image/bmp,image/png,image/jpeg,image/jpg"
},
fileSingleSizeLimit:5242880
},
12:{
accept:{
extensions:"mp3,wma,wav,amr",
mimeTypes:"audio/mp3,audio/wma,audio/wav,audio/amr"
},
fileSingleSizeLimit:31457280
},
13:{
accept:{
extensions:"png,bmp,jpeg,jpg,gif",
mimeTypes:"image/png,image/bmp,image/jpeg,image/jpg,image/gif"
},
fileSingleSizeLimit:2097152
}
};
l[15]=l[4];
var m=function(e){
a.show({
type:"warn",
msg:"警告|"+e,
mask:!0,
buttons:[{
text:"确定",
click:function(){
this.remove();
}
}]
});
},c=function(e){
var i=n.Uploader;
0==i.support("flash")?m("<p>未安装或未正确配置flash插件，请检查后重试。<br><a href='http://get.adobe.com/cn/flashplayer/' target='_blank'>到adobe去下载flash插件</a></p>"):0==i.support()?m("<p>您的浏览器不支持上传</p>"):e.refresh();
},d=function(e){
e&&wx.jslog({
src:"common/wx/upload.js"
},null,e);
},u={
swf:s,
auto:!0,
pick:{
multiple:!0
},
fileNumLimit:20,
threads:3,
sendAsBinary:!1,
runtimeOrder:"html5,flash",
compress:{
width:1280,
height:1e8,
quality:90,
afterCompressSizeLimit:2097152,
compressSize:0,
resizeSize:2097152,
maxResolution:6e6,
noCompressIfLarger:!0
},
imageSize:!0,
chunked:!1,
duplicate:!0
},g=new Image,f={},h=function(e){
if(!e.url)throw"missing url";
var a,s,p,m=$('<ul class="upload_file_box" style="display:none"></ul>'),g=$(e.container);
g.on("click",function(){
Math.random()<.1&&d(12),c(a);
}).parent().append(m),function(){
n&&0==n.Uploader.support("html5")&&0==n.Uploader.support("flash")&&((new Image).src="/misc/jslog?level=error&id=36&content=[pageurl:"+encodeURIComponent(location.href)+",ua:"+encodeURIComponent(window.navigator.userAgent)+"]");
}(),e.only_cdn&&(e.url+="&only_cdn=1"),s={
server:wx.url(e.url+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&svr_time="+wx.data.time),
pick:{
id:g,
multiple:e.multi
},
fileNumLimit:e.queueSizeLimit
},p=l[e.type]||l[2],e=$.extend(!0,{},u,s,p,e);
e.server;
n&&0==n.Uploader.support("html5")&&e.compress&&(e.compress.quality=70);
try{
a=n.create(e);
}catch(h){
if(!a)return;
}
return m.on("click",".js_cancel",function(){
var e=$(this).data("id");
a.cancelFile(e),$(this).hide();
}),a.on("beforeFileQueued",function(i){
return Math.random()<.1&&d(13),e.canContinueUpload&&!e.canContinueUpload()?!1:!(e.onSelect&&e.onSelect(null,i.id,i)===!1);
}),a.on("fileQueued",function(e){
var i={
id:e.id,
fileName:e.name,
size:n.formatSize(e.size)
};
m.append(r(o,i)).show();
}),a.on("fileDequeued",function(){
Math.random()<.1&&d(14),e.onCancel&&e.onCancel();
}),a.on("uploadProgress",function(i,n){
var a="#uploadItem%s".sprintf(i.id),t=m.find(a).find(".progress_bar_thumb");
t.width("%s%".sprintf(100*n)),1==n&&m.find(a).find(".js_cancel").remove(),e.onProgress&&e.onProgress(null,i.id,i,{
percentage:n
});
}),a.on("uploadStart",function(e){
f[e.id]=+new Date;
}),a.on("uploadSuccess",function(n,a,o){
if(Math.random()<.1&&d(16),a&&a.base_resp){
var r=+a.base_resp.ret;
if(0==r)Math.random()<.1&&(d(17),f[n.id]&&i(+new Date-f[n.id]));else switch(n.setStatus("invalid"),
r){
case-18:
case 200018:
t.err("页面停留时间过久，请刷新页面后重试！");
break;

case-20:
case 200020:
t.err("无法解释该图片，请使用另一图片或截图另存");
break;

case-13:
case 200013:
t.err("上传文件过于频繁，请稍后再试");
break;

case-10:
case 200010:
t.err("上传文件过大");
break;

case-22:
case 200022:
t.err("上传音频文件不能超过60秒");
break;

case-39:
case 200039:
t.err("上传图片高度（像素）与宽度（像素）的乘积不能超过600万");
break;

case 220001:
t.err('"素材管理"中的存储数量已达到上限，请删除后再操作。');
break;

case 220002:
t.err("你的图片库已达到存储上限，请进行清理。");
break;

default:
t.err("上传文件发送出错，请刷新页面后重试！");
}
}
e.onComplete&&e.onComplete(null,n.id,n,a,{
fileCount:o.numOfProgress+o.numOfQueue
});
}),a.on("uploadFinished",function(i){
this.reset(),m.fadeOut().html(""),f={},0==i.numOfInvalid&&i.numOfSuccess>0&&e.onAllComplete&&e.onAllComplete(null,{
errors:i.numOfCancel+i.numOfInvalid+i.numOfUploadFailed+i.numofDeleted+i.numofInterrupt,
filesUploaded:i.numOfSuccess
});
}),a.on("uploadError",function(){
Math.random()<.1&&d(15),e.onError&&e.onError();
}),a.on("error",function(i,a,o){
switch("object"==typeof a&&(o=a),i){
case"Q_EXCEED_NUM_LIMIT":
t.err("一次上传最多只能上传%s个文件".sprintf(a));
break;

case"F_EXCEED_SIZE":
t.err("文件大小不能超过%s".sprintf(n.formatSize(a,"0")));
break;

case"F_EXCEED_COMPRESS_SIZE":
t.err("图片尺寸太大，压缩后不能超过%s，请缩小图片尺寸再试".sprintf(e.compress.afterCompressSizeLimit?e.compress.afterCompressSizeLimit/1048576+"M":"2M")),
d(42);
break;

case"Q_TYPE_DENIED":
t.err(e.errTypeMsg||"文件必须为以下格式：%s".sprintf(e.accept.extensions).replace(/,/g,", "));
}
}),a;
},b=function(e){
return function(i){
return i.url=e,h(i);
};
},w=function(e){
return function(i){
return wx.url(e+"&ticket_id="+wx.data.user_name+"&ticket="+wx.data.ticket+"&id="+i);
};
};
return{
uploadFile:h,
uploadBizFile:b(p+"/cgi-bin/filetransfer?action=upload_material&f=json"),
uploadTmpFile:b(p+"/cgi-bin/filetransfer?action=preview&f=json"),
uploadCdnFile:b(p+"/cgi-bin/filetransfer?action=upload_cdn&f=json"),
uploadShopFile:b(p+"/merchant/goodsimage?action=uploadimage"),
uploadShopUnsaveFile:b(p+"/merchant/goodsimage?action=uploadimage&save=0"),
uploadVideoCdnFile:b(p+"/cgi-bin/filetransfer?action=upload_video_cdn&f=json"),
uploadRegisterFile:b(p+"/acct/realnamesubmit?type=2&action=file_set"),
uploadUpgradeFile:b(p+"/acct/servicetypeupgrade?type=2&action=file_set"),
uploadPoiFile:b(p+"/misc/setlocation?action=upload"),
mediaFile:b(p+"/cgi-bin/filetransfer?action=bizmedia"),
uploadBbsCdnFile:b(p+"/filetransfer?action=upload_cdn&f=json"),
uploadCdnFileFromAd:function(e){
return b(p+"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json&width="+e.w+"&height="+e.h+"&limit_size="+e.size);
},
uploadImageLibFile:function(e){
return e.url=p+"/cgi-bin/filetransfer?action=upload_material&f=json","undefined"!=typeof e.scene&&(e.url+="&scene="+e.scene),
1==e.doublewrite&&(e.url+="&writetype=doublewrite&groupid="+(e.groupid||1)),h(e);
},
uploadCdnFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(p+"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json&"+n.join("&"),"tmpfile");
},
uploadTmpFileWithCheck:function(e){
var i={
height:0,
width:0,
size:0,
min_height:0,
min_width:0,
min_size:0
};
e=$.extend(!0,i,e);
var n=[];
for(var a in e)n.push(encodeURIComponent(a)+"="+encodeURIComponent(e[a]));
return b(p+"/cgi-bin/filetransfer?action=preview_check_range&f=json&"+n.join("&"));
},
tmpFileUrl:w(p+"/cgi-bin/filetransfer?action=preview"),
mediaFileUrl:w(p+"/cgi-bin/filetransfer?action=bizmedia"),
multimediaFileUrl:w(p+"/cgi-bin/filetransfer?action=multimedia")
};
});define("common/wx/media/cropimg.js",["common/lib/jquery.Jcrop.js","common/wx/mpEditor/common/cropImgCgi.js","tpl/media/dialog/image_crop.html.js"],function(o){
"use strict";
function r(o){
var r=this;
this.$cotainer=$(o.container),this.url=o.url,this.cropRatio=o.cropRatio||1,this.$cotainer.html(wx.T(i,{
url:o.url,
tips:o.tips||""
})),this.$cropWrp=this.$cotainer.find(".js_crop_wrp"),this.$cropWrp.find("img").Jcrop({
allowSelect:!1,
createHandles:["nw","ne","se","sw"],
aspectRatio:this.cropRatio,
boxWidth:this.$cropWrp.width(),
boxHeight:this.$cropWrp.height()
},function(){
r._ImgCropper=this,$(".jcrop-handle",this.ui.selection).css({
width:"7px",
height:"7px"
}),r._ImgCropper.setImage(r.url,function(){
var o=r._ImgCropper.getBounds();
r._ImgCropper.setSelect([0,0,o[0],o[1]/r.cropRatio]);
});
});
}
o("common/lib/jquery.Jcrop.js");
var t=o("common/wx/mpEditor/common/cropImgCgi.js"),i=o("tpl/media/dialog/image_crop.html.js");
return r.prototype={
getUrl:function(o){
if(!this._ImgCropper)return void("function"==typeof o.onerror&&o.onerror({
retcode:-1
}));
var r=this._ImgCropper.tellSelect(),i=this._ImgCropper.getScaleFactor(),e=this._ImgCropper.ui.botImg.width()*i[0],p=this._ImgCropper.ui.botImg.height()*i[1];
t.getUrl({
imgurl:this.url,
x1:r.x/e,
y1:r.y/p,
x2:r.x2/e,
y2:r.y2/p,
onerror:function(r){
o.onerror(r||{});
},
onsuccess:function(r){
o.onsuccess(r);
}
});
}
},r;
});define("biz_web/ui/jquery.scrollbar.js",["biz_web/widget/jquery.scrollbar.css"],function(l){
"use strict";
function e(l){
if(t.webkit&&!l)return{
height:0,
width:0
};
if(!t.data.outer){
var e={
border:"none",
"box-sizing":"content-box",
height:"200px",
margin:"0",
padding:"0",
width:"200px"
};
t.data.inner=$("<div>").css($.extend({},e)),t.data.outer=$("<div>").css($.extend({
left:"-1000px",
overflow:"scroll",
position:"absolute",
top:"-1000px"
},e)).append(t.data.inner).appendTo("body");
}
return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{
height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),
width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)
};
}
function s(){
var l=e(!0);
return!(l.height||l.width);
}
function o(l){
var e=l.originalEvent;
return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0;
}
l("biz_web/widget/jquery.scrollbar.css");
var r=!1,t={
data:{
index:0,
name:"scrollbar"
},
macosx:/mac/i.test(navigator.platform),
mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
overlay:null,
scroll:null,
scrolls:[],
webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)
};
t.scrolls.add=function(l){
this.remove(l).push(l);
},t.scrolls.remove=function(l){
for(;$.inArray(l,this)>=0;)this.splice($.inArray(l,this),1);
return this;
};
var i={
autoScrollSize:!0,
autoUpdate:!0,
debug:!1,
disableBodyScroll:!1,
duration:200,
ignoreMobile:!1,
ignoreOverlay:!1,
scrollStep:30,
showArrows:!1,
stepScrolling:!0,
scrollx:null,
scrolly:null,
onDestroy:null,
onInit:null,
onScroll:null,
onUpdate:null
},n=function(l){
t.scroll||(t.overlay=s(),t.scroll=e(),a(),$(window).resize(function(){
var l=!1;
if(t.scroll&&(t.scroll.height||t.scroll.width)){
var s=e();
(s.height!==t.scroll.height||s.width!==t.scroll.width)&&(t.scroll=s,l=!0);
}
a(l);
})),this.container=l,this.namespace=".scrollbar_"+t.data.index++,this.options=$.extend({},i,window.jQueryScrollbarOptions||{}),
this.scrollTo=null,this.scrollx={},this.scrolly={},l.data(t.data.name,this),t.scrolls.add(this);
};
n.prototype={
destroy:function(){
if(this.wrapper){
this.container.removeData(t.data.name),t.scrolls.remove(this);
var l=this.container.scrollLeft(),e=this.container.scrollTop();
this.container.insertBefore(this.wrapper).css({
height:"",
margin:"",
"max-height":""
}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(l).scrollTop(e),
this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),
this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),
this.wrapper.remove(),$(document).add("body").off(this.namespace),$.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container]);
}
},
init:function(l){
var e=this,s=this.container,r=this.containerWrapper||s,i=this.namespace,n=$.extend(this.options,l||{}),c={
x:this.scrollx,
y:this.scrolly
},a=this.wrapper,d={
scrollLeft:s.scrollLeft(),
scrollTop:s.scrollTop()
};
if(t.mobile&&n.ignoreMobile||t.overlay&&n.ignoreOverlay||t.macosx&&!t.webkit)return!1;
if(a)r.css({
height:"auto",
"margin-bottom":-1*t.scroll.height+"px",
"margin-right":-1*t.scroll.width+"px",
"max-height":""
});else{
if(this.wrapper=a=$("<div>").addClass("scroll-wrapper").addClass(s.attr("class")).css("position","absolute"==s.css("position")?"absolute":"relative").insertBefore(s).append(s),
s.is("textarea")&&(this.containerWrapper=r=$("<div>").insertBefore(s).append(s),
a.addClass("scroll-textarea")),r.addClass("scroll-content").css({
height:"auto",
"margin-bottom":-1*t.scroll.height+"px",
"margin-right":-1*t.scroll.width+"px",
"max-height":""
}),s.on("scroll"+i,function(){
$.isFunction(n.onScroll)&&n.onScroll.call(e,{
maxScroll:c.y.maxScrollOffset,
scroll:s.scrollTop(),
size:c.y.size,
visible:c.y.visible
},{
maxScroll:c.x.maxScrollOffset,
scroll:s.scrollLeft(),
size:c.x.size,
visible:c.x.visible
}),c.x.isVisible&&c.x.scroll.bar.css("left",s.scrollLeft()*c.x.kx+"px"),c.y.isVisible&&c.y.scroll.bar.css("top",s.scrollTop()*c.y.kx+"px");
}),a.on("scroll"+i,function(){
a.scrollTop(0).scrollLeft(0);
}),n.disableBodyScroll){
var h=function(l){
o(l)?c.y.isVisible&&c.y.mousewheel(l):c.x.isVisible&&c.x.mousewheel(l);
};
a.on("MozMousePixelScroll"+i,h),a.on("mousewheel"+i,h),t.mobile&&a.on("touchstart"+i,function(l){
var e=l.originalEvent.touches&&l.originalEvent.touches[0]||l,o={
pageX:e.pageX,
pageY:e.pageY
},r={
left:s.scrollLeft(),
top:s.scrollTop()
};
$(document).on("touchmove"+i,function(l){
var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;
s.scrollLeft(r.left+o.pageX-e.pageX),s.scrollTop(r.top+o.pageY-e.pageY),l.preventDefault();
}),$(document).on("touchend"+i,function(){
$(document).off(i);
});
});
}
$.isFunction(n.onInit)&&n.onInit.apply(this,[s]);
}
$.each(c,function(l,r){
var t=null,a=1,d="x"===l?"scrollLeft":"scrollTop",h=n.scrollStep,p=function(){
var l=s[d]();
s[d](l+h),1==a&&l+h>=u&&(l=s[d]()),-1==a&&u>=l+h&&(l=s[d]()),s[d]()==l&&t&&t();
},u=0;
r.scroll||(r.scroll=e._getScroll(n["scroll"+l]).addClass("scroll-"+l),n.showArrows&&r.scroll.addClass("scroll-element_arrows_visible"),
r.mousewheel=function(t){
if(!r.isVisible||"x"===l&&o(t))return!0;
if("y"===l&&!o(t))return c.x.mousewheel(t),!0;
var i=-1*t.originalEvent.wheelDelta||t.originalEvent.detail,n=r.size-r.visible-r.offset;
return(i>0&&n>u||0>i&&u>0)&&(u+=i,0>u&&(u=0),u>n&&(u=n),e.scrollTo=e.scrollTo||{},
e.scrollTo[d]=u,setTimeout(function(){
e.scrollTo&&(s.stop().animate(e.scrollTo,240,"linear",function(){
u=s[d]();
}),e.scrollTo=null);
},1)),t.preventDefault(),!1;
},r.scroll.on("MozMousePixelScroll"+i,r.mousewheel).on("mousewheel"+i,r.mousewheel).on("mouseenter"+i,function(){
u=s[d]();
}),r.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+i,function(o){
if(1!=o.which)return!0;
a=1;
var i={
eventOffset:o["x"===l?"pageX":"pageY"],
maxScrollValue:r.size-r.visible-r.offset,
scrollbarOffset:r.scroll.bar.offset()["x"===l?"left":"top"],
scrollbarSize:r.scroll.bar["x"===l?"outerWidth":"outerHeight"]()
},c=0,f=0;
return $(this).hasClass("scroll-arrow")?(a=$(this).hasClass("scroll-arrow_more")?1:-1,
h=n.scrollStep*a,u=a>0?i.maxScrollValue:0):(a=i.eventOffset>i.scrollbarOffset+i.scrollbarSize?1:i.eventOffset<i.scrollbarOffset?-1:0,
h=Math.round(.75*r.visible)*a,u=i.eventOffset-i.scrollbarOffset-(n.stepScrolling?1==a?i.scrollbarSize:0:Math.round(i.scrollbarSize/2)),
u=s[d]()+u/r.kx),e.scrollTo=e.scrollTo||{},e.scrollTo[d]=n.stepScrolling?s[d]()+h:u,
n.stepScrolling&&(t=function(){
u=s[d](),clearInterval(f),clearTimeout(c),c=0,f=0;
},c=setTimeout(function(){
f=setInterval(p,40);
},n.duration+100)),setTimeout(function(){
e.scrollTo&&(s.animate(e.scrollTo,n.duration),e.scrollTo=null);
},1),e._handleMouseDown(t,o);
}),r.scroll.bar.on("mousedown"+i,function(o){
if(1!=o.which)return!0;
var t=o["x"===l?"pageX":"pageY"],n=s[d]();
return r.scroll.addClass("scroll-draggable"),$(document).on("mousemove"+i,function(e){
var o=parseInt((e["x"===l?"pageX":"pageY"]-t)/r.kx,10);
s[d](n+o);
}),e._handleMouseDown(function(){
r.scroll.removeClass("scroll-draggable"),u=s[d]();
},o);
}));
}),$.each(c,function(l,e){
var s="scroll-scroll"+l+"_visible",o="x"==l?c.y:c.x;
e.scroll.removeClass(s),o.scroll.removeClass(s),r.removeClass(s);
}),$.each(c,function(l,e){
$.extend(e,"x"==l?{
offset:parseInt(s.css("left"),10)||0,
size:s.prop("scrollWidth"),
visible:a.width()
}:{
offset:parseInt(s.css("top"),10)||0,
size:s.prop("scrollHeight"),
visible:a.height()
});
}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),$.isFunction(n.onUpdate)&&n.onUpdate.apply(this,[s]),
$.each(c,function(l,e){
var o="x"===l?"left":"top",r="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(s.css(o),10)||0,c=e.size,a=e.visible+i,d=e.scroll.size[r]()+(parseInt(e.scroll.size.css(o),10)||0);
n.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/c,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),
e.scrollbarSize=e.scroll.bar[r](),e.kx=(d-e.scrollbarSize)/(c-a)||1,e.maxScrollOffset=c-a;
}),s.scrollLeft(d.scrollLeft).scrollTop(d.scrollTop);
},
_getScroll:function(l){
var e={
advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),
simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")
};
return e[l]&&(l=e[l]),l||(l=e.simple),l="string"==typeof l?$(l).appendTo(this.wrapper):$(l),
$.extend(l,{
bar:l.find(".scroll-bar"),
size:l.find(".scroll-element_size"),
track:l.find(".scroll-element_track")
}),l;
},
_handleMouseDown:function(l,e){
var s=this.namespace;
return $(document).on("blur"+s,function(){
$(document).add("body").off(s),l&&l();
}),$(document).on("dragstart"+s,function(l){
return l.preventDefault(),!1;
}),$(document).on("mouseup"+s,function(){
$(document).add("body").off(s),l&&l();
}),$("body").on("selectstart"+s,function(l){
return l.preventDefault(),!1;
}),e&&e.preventDefault(),!1;
},
_updateScroll:function(l,e){
var s=this.container,o=this.containerWrapper||s,r="scroll-scroll"+l+"_visible",i="x"===l?this.scrolly:this.scrollx,n=parseInt(this.container.css("x"===l?"left":"top"),10)||0,c=this.wrapper,a=e.size,d=e.visible+n;
e.isVisible=a-d>1,e.isVisible?(e.scroll.addClass(r),i.scroll.addClass(r),o.addClass(r)):(e.scroll.removeClass(r),
i.scroll.removeClass(r),o.removeClass(r)),"y"===l&&o.css(s.is("textarea")||d>a?{
height:d+t.scroll.height+"px",
"max-height":"none"
}:{
"max-height":d+t.scroll.height+"px"
}),(e.size!=s.prop("scrollWidth")||i.size!=s.prop("scrollHeight")||e.visible!=c.width()||i.visible!=c.height()||e.offset!=(parseInt(s.css("left"),10)||0)||i.offset!=(parseInt(s.css("top"),10)||0))&&($.extend(this.scrollx,{
offset:parseInt(s.css("left"),10)||0,
size:s.prop("scrollWidth"),
visible:c.width()
}),$.extend(this.scrolly,{
offset:parseInt(s.css("top"),10)||0,
size:this.container.prop("scrollHeight"),
visible:c.height()
}),this._updateScroll("x"===l?"y":"x",i));
}
};
var c=n;
$.fn.scrollbar=function(l,e){
return"string"!=typeof l&&(e=l,l="init"),"undefined"==typeof e&&(e=[]),$.isArray(e)||(e=[e]),
this.not("body, .scroll-wrapper").each(function(){
var s=$(this),o=s.data(t.data.name);
(o||"init"===l)&&(o||(o=new c(s)),o[l]&&o[l].apply(o,e));
}),this;
},$.fn.scrollbar.options=i;
var a=$.fn.scrollbar.updateScrollbars=function(){
var l=0,e=0;
return function(s){
var o,i,n,c,d,h,p;
for(o=0;o<t.scrolls.length;o++)c=t.scrolls[o],i=c.container,n=c.options,d=c.wrapper,
h=c.scrollx,p=c.scrolly,(s||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),
r&&(window.console&&console.log({
scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,
scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,
visibleHeight:d.height()+":"+c.scrolly.visible,
visibleWidth:d.width()+":"+c.scrollx.visible
},!0),e++));
r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),
l=setTimeout(a,300));
};
}();
});define("media/appmsg_edit_v2.js",["biz_web/ui/jquery.scrollbar.js","common/wx/media/cropimg.js","common/qq/Class.js","biz_web/utils/upload.js","biz_web/ui/checkbox.js","common/wx/inputCounter.js","common/wx/Step.js","biz_web/ui/dropdown.js","common/wx/tooltips.js","biz_common/jquery.validate.js","common/wx/Tips.js","biz_common/moment.js","common/wx/media/imageDialog.js","common/wx/preview.js","common/wx/dialog.js","common/wx/popover.js","common/wx/media/imgsDialogByUrls.js","common/wx/ban.js","common/wx/Cgi.js","original/whitelist_dialog.js","common/wx/pagebar.js","common/wx/mpEditor/plugin/vote.js","common/wx/mpEditor/plugin/card.js","common/wx/mpEditor/plugin/shop.js","common/wx/mpEditor/plugin/link.js","common/wx/mpEditor/plugin/unlink.js","common/wx/mpEditor/plugin/emotion.js","common/wx/mpEditor/plugin/insertTemplate.js","common/wx/mpEditor/plugin/templateList.js","common/wx/mpEditor/plugin/audio_music.js","common/wx/mpEditor/plugin/weapp.js","common/wx/mpEditor/plugin/img.js","common/wx/mpEditor/plugin/video.js","common/wx/mpEditor/plugin/adv.js","common/wx/mpEditor/editor.js","tpl/media/appmsg_edit/article.html.js","media/article_list.js","media/media_static_data.js","media/report.js","biz_common/utils/wxgspeedsdk.js"],function(i){
"use strict";
function e(i,e,t){
(e||1)>A&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:i,
val:1,
level:t||"error",
content:"[file=media/appmsg_edit]"
});
}
i("biz_web/ui/jquery.scrollbar.js");
var t,n=i("common/wx/media/cropimg.js"),o=i("common/qq/Class.js"),s=(i("biz_web/utils/upload.js"),
i("biz_web/ui/checkbox.js"),i("common/wx/inputCounter.js")),a=i("common/wx/Step.js"),r=i("biz_web/ui/dropdown.js"),d=(i("common/wx/tooltips.js"),
i("biz_common/jquery.validate.js").rules),_=i("common/wx/Tips.js"),c=i("biz_common/moment.js"),l=i("common/wx/media/imageDialog.js"),p=i("common/wx/preview.js"),m=i("common/wx/dialog.js"),u=i("common/wx/popover.js"),h=i("common/wx/media/imgsDialogByUrls.js"),f=i("common/wx/ban.js"),g=i("common/wx/Cgi.js"),w=i("original/whitelist_dialog.js"),j=i("common/wx/pagebar.js"),v=i("common/wx/mpEditor/plugin/vote.js"),b=i("common/wx/mpEditor/plugin/card.js"),x=(i("common/wx/mpEditor/plugin/shop.js"),
i("common/wx/mpEditor/plugin/link.js")),y=i("common/wx/mpEditor/plugin/unlink.js"),k=i("common/wx/mpEditor/plugin/emotion.js"),C=i("common/wx/mpEditor/plugin/insertTemplate.js"),E=i("common/wx/mpEditor/plugin/templateList.js"),D=i("common/wx/mpEditor/plugin/audio_music.js"),L=i("common/wx/mpEditor/plugin/weapp.js"),q=i("common/wx/mpEditor/plugin/img.js"),T=i("common/wx/mpEditor/plugin/video.js"),I=i("common/wx/mpEditor/plugin/adv.js"),z=i("common/wx/mpEditor/editor.js"),U=i("tpl/media/appmsg_edit/article.html.js"),S=i("media/article_list.js"),P=i("media/media_static_data.js"),O=i("media/report.js"),M=(P.URL_PLATFORM_MAP,
P.article_type),R=wx.cgiData,B=document.referrer;
!function(i){
i.fn.placeholder2=function(){
if(!("placeholder"in document.createElement("input"))){
var e=i(this).siblings(".tips_global");
i(this).on("focus",function(){
e.hide();
}).on("blur",function(){
""===this.value?e.show():e.hide();
}).trigger("blur");
}
},i.extend(i.easing,{
easeOutCubic:function(i,e,t,n,o){
return n*((e=e/o-1)*e*e+1)+t;
}
});
}(jQuery);
var A=Math.random(),N=o.declare({
init:function(i){
var e=this;
e.opt=i,$.extend(!0,e,i),e.$editor=$(e.editor_selector).html(wx.T(U,{
can_use_copyright:R.can_use_copyright,
can_use_reward:R.can_use_reward,
can_use_payforread:R.can_use_payforread,
can_use_comment:R.can_use_comment,
can_use_appmsg_source_url:R.can_use_appmsg_source_url,
is_ios_reward_open:R.is_ios_reward_open,
has_invited_original:R.has_invited_original,
orginal_apply_stat:R.orginal_apply_stat,
token:wx.data.t,
is_illegal:1*e.appmsg_data.is_illegal||0
})),e._initUEditor(),$(".js_scrollbar").scrollbar({
autoUpdate:!1
});
},
_renderReadOnly:function(i){
var e=i.type,n=i.time,o=i.name,s=i.ua,a=$("#read_only_container"),r=a.find(".js_close");
if(5==e){
var d=location.href+"&conflict=1",_="你有未保存的草稿，%s点击查看%s".sprintf("<a href='javascript:;'>","</a>");
return a.find("p").html(_),a.find("a").click(function(){
a.hide(),window.open(d);
}),i.showTips===!0&&m.show({
type:"warn",
msg:"你有未保存的草稿",
buttons:[{
text:"查看草稿",
click:function(){
a.hide(),window.open(d),this.remove();
}
},{
text:"编辑当前内容",
type:"normal",
click:function(){
this.remove();
}
}]
}),a.show(),void r.show();
}
if(1==e||2==e)a.find("p").text("此素材有文章存在违规，无法编辑"),a.show(),r.hide();else if(4==e){
var _="当前素材并非最新内容，你可以%s打开最新素材%s".sprintf("<a target='_blank' href='"+location.href+"'>","</a>");
a.find("p").html(_);
var c="当前素材非最新内容，是否打开重新编辑？";
n&&(c+="<br />最新素材更新时间：%s".sprintf(n)),o&&(c+="<br />操作人：%s".sprintf(o.html(!0))),
s&&(c+="<br />保存于：%s".sprintf((s+"浏览器").html(!0))),m.show({
type:"warn",
msg:c,
buttons:[{
text:"编辑新内容",
click:function(){
window.open(location.href),this.remove();
}
},{
text:"查看当前内容",
type:"normal",
click:function(){
this.remove();
}
}]
}),a.show(),r.hide();
}else(3==e||6==e)&&(a.hide(),r.hide());
t.fireEvent("stop_toolbar_float");
var l=$(this.editor_selector);
l.find(".js_title_main").addClass("without_margin"),l.find(".js_readonly").hide(),
$(this.appmsg_selector).find(".js_readonly").hide(),$("#editor_pannel").addClass("appmsg_input_area_pull_right"),
$("#js_add_appmsg").hide(),$("#bottom_main").hide(),$("#right_pannel").hide(),$("#guide_words_main").find(".js_guide_words").attr("readonly","true"),
this.ueditor&&this.ueditor.fireEvent("scrollIntoView",$("#read_only_container"),150);
},
_renderEditorByType:function(i){
function e(){
_.err("分享图文中不能插入多媒体素材");
}
{
var t=this.ueditor;
t.getUeditor();
}
if(2==i){
t.fireEvent("stop_toolbar_float");
var n=$(this.editor_selector);
n.find(".js_title_main").addClass("without_margin"),n.find(".js_reprint_hide").hide(),
$(this.appmsg_selector).find(".js_reprint_hide").hide(),$("#bottom_main").find(".js_reprint_hide").hide(),
$("#title").attr("readonly","true"),$("#js_media_list").find("li").addClass("disabled"),
$("#media_list_mask").show().on("click",e),$("#js_cover_mask").removeClass("hover_mask");
}else if(1==i){
var n=$(this.editor_selector);
n.find(".js_title_main").removeClass("without_margin"),n.find(".js_reprint_hide").show(),
t.fireEvent("star_toolbar_float"),$(this.appmsg_selector).find(".js_reprint_hide").show(),
$("#bottom_main").find(".js_reprint_hide").show(),$("#title").removeAttr("readonly"),
$("#js_media_list").find("li").removeClass("disabled"),$("#media_list_mask").hide().off("click",e),
$("#js_cover_mask").addClass("hover_mask");
}
},
_initEditArea:function(){
var i=this,e=i.$editor;
e.find(".js_field").each(function(){
{
var i=$(this).attr("name");
$(this).attr("keyup");
}
$(this).on("keyup",function(){
e.find(".js_%s_error".sprintf(i)).hide();
});
}),e.find(".js_url").on("change",function(){
$(".js_warn.frm_msg").hide();
}),e.find(".js_title").on("keyup",function(){
var t=$.trim($(this).val()).html(!0),n=i.articleList.$current;
n&&n.find(".js_appmsg_title").html(t||"标题"),e.find(".js_title_error").hide(),$("#js_draft_tips").hide();
}).on("focus",function(){
i.ueditor.fireEvent("title_focus"),i.ueditor.disableToolbar(),$(this).siblings("em").show();
}).on("blur",function(){
$(this).parent().hasClass("warn")||$(this).siblings("em").hide();
}).placeholder2(),e.find(".js_author").on("focus",function(){
i.ueditor.fireEvent("author_focus"),i.ueditor.disableToolbar(),$(this).siblings("em").show();
}).on("blur",function(){
$(this).parent().hasClass("warn")||$(this).siblings("em").hide();
}).on("keyup",function(){
$("#js_draft_tips").hide();
}).placeholder2(),e.find(".js_guide_words").on("focus",function(){
$(this).siblings("em").show();
}).on("blur",function(){
$(this).parent().hasClass("warn")||$(this).siblings("em").hide();
}).on("keyup",function(){
$("#js_draft_tips").hide();
}),e.find(".js_desc").on("keyup",function(){
var t=$.trim($(this).val()).html(!0),n=i.articleList.$current;
n&&n.find(".appmsg_desc").html(t),e.find(".js_desc_error").hide();
}),e.find("textarea.js_desc[name='digest']").on("change",function(){
var e,t=i.articleList.$current;
t&&(e=t.data("article"))&&e.setAutoDigest(!1);
}),e.find(".js_comment").checkbox({
multi:!0,
initOnChanged:!0,
onChanged:function(i){
i.checkbox("value")?$("#js_comment_setting_wrp").show():$("#js_comment_setting_wrp").hide();
}
}),e.find(".js_comment_setting").checkbox({
multi:!1
}),e.find(".js_url_checkbox").checkbox({
multi:!0,
onChanged:function(t){
t.checkbox("value")?(e.find(".js_url_area .frm_input_box").show(),i.ueditor.funcPvUvReport("showlink")):(e.find(".js_url_area .frm_input_box").hide(),
i.ueditor.funcPvUvReport("hidelink")),e.find(".js_url_error").hide(),e.find(".frm_msg.js_warn").hide();
}
}),e.find(".js_url").on("input change",function(){
var i=$(this),e=i.val();
e.match(/\:\/\/mp\.weixin\.qq\.com\/.*[\?&]tempkey=/)&&new u({
dom:this,
content:"检测到此链接为预览链接，将在短期内失效，是否仍然使用此链接？",
hideIfBlur:!0,
buttons:[{
text:"仍然使用",
type:"primary",
click:function(){
this.remove();
}
},{
text:"取消",
type:"default",
click:function(){
i.val(""),this.remove();
}
}]
});
}),e.find(".js_reward").checkbox({
multi:!0,
onChanged:function(i){
i.checkbox("value")?(i.checkbox("checked",!1),$("#tpl_reward_statement").popup({
title:"文章赞赏须知",
width:960,
className:"reward_qrcode_dialog",
buttons:[{
text:"确定",
type:"primary",
click:function(){
i.checkbox("checked",!0),e.find(".js_reward_div,.js_reward_ios_wrap").show(),this.remove();
}
},{
text:"取消",
click:function(){
this.remove();
}
}]
})):e.find(".js_reward_div,.js_reward_ios_wrap").hide();
}
}),e.find(".js_reward_ios").checkbox({
multi:!1,
onChanged:function(i){
1==i.checkbox("value")?e.find(".js_reward_ios_money").show():e.find(".js_reward_ios_money").hide();
}
}),e.find(".js_reward_notice").on("click",function(){
$("#tpl_reward_statement").popup({
title:"文章赞赏须知",
width:960,
className:"reward_qrcode_dialog",
buttons:[{
text:"确定",
type:"primary",
click:function(){
this.remove();
}
}]
});
}),i._initUploadCover(),e.find(".js_counter").each(function(){
$(this).hasClass("js_author")||$(this).hasClass("js_reward_wording")?new s(this,{
maxLength:$(this).attr("max-length"),
useGBKLength:!0,
GBKBased:!0
}):new s(this,{
maxLength:$(this).attr("max-length")
});
}),i._initOriginal(),i.freeUEditor=e.find(".js_fp_editor_empty_none"),i._initBan(),
i._initAd();
},
_initUploadCover:function(){
var i=this,t=i.$editor;
$("#js_selectCoverFromContent").on("click",function(){
var t=i.ueditor.fireEvent("get_current_article_all_img")||[];
document.body.style.overflow=document.documentElement.style.overflow="hidden";
var n=i.articleList._getCurrentIndex();
new h({
cropImgtips:i._getCropImgTips(n),
cropRatio:i._getCropImgRatio(n),
urls:t,
onOk:function(t){
document.body.style.overflow=document.documentElement.style.overflow="auto";
var n=t.length>0?t[0]:"";
n&&(i._coverChange(n),O.addNum(O.reportId[2],0,1),O.addNum(O.reportId[2],1,100)),
e(38,1,"trace");
},
onHide:function(){
document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
}),$("#js_imagedialog").on("click",function(){
document.body.style.overflow=document.documentElement.style.overflow="hidden";
var n=i.articleList._getCurrentIndex();
l({
cropImg:!0,
cropImgtips:i._getCropImgTips(n),
cropRatio:i._getCropImgRatio(n),
coverPicCheckbox:!0,
coverPic:1*t.find(".js_show_cover_pic").val()||0,
scene:"biz",
only_cdn:!1,
maxSelect:1,
desc:"建议尺寸：900像素 * 500像素",
onOK:function(t){
var n=t[0];
i._coverChange(n),O.addNum(O.reportId[2],0,1),O.addNum(O.reportId[2],2,100),e(38,1,"trace"),
this.destroy(),document.body.style.overflow=document.documentElement.style.overflow="auto";
},
onHide:function(){
document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
}),t.on("click",".js_removeCover",function(){
var e=$(this),t=e.parents(".js_cover");
t.hide().find("input").val(""),t.find(".js_show_cover_pic").val("0");
var n=i.articleList.$current;
n&&(n.find("div.js_appmsg_thumb").css("backgroundImage",'url("")'),n.removeClass("has_thumb"));
}),t.on("click",".js_modifyCover",function(){
var e,o,s=!1,a=!0,r=$('<div class="js_main">').popup({
width:800,
title:"选择封面",
autoShow:!1,
className:"appmsg_content_img_dialog",
onHide:function(){
this.remove(),a=!1;
},
buttons:[{
text:"完成",
type:"primary",
classWrap:"js_crop_done_btn",
click:function(){
if(!s){
var t=this;
s=!0,o.btn(!1),e.getUrl({
onsuccess:function(e){
a&&(s=!1,o.btn(!0),t.remove(),i._coverChange({
oriUrl:e.oriUrl,
file_id:e.file_id||"",
url:e.url
}));
},
onerror:function(i){
a&&(s=!1,o.btn(!0),_.err(-1==i.retcode?"请选择裁剪区域":"系统繁忙，请稍后再试"));
}
});
}
}
},{
text:"取消",
type:"default",
click:function(){
this.remove(),a=!1;
}
}]
});
o=r.find(".js_crop_done_btn");
var d=i.articleList._getCurrentIndex(),c=t.find(".js_cover"),l=c.find("input.js_cdn_url").val(),p=c.find("input.js_cdn_url_back").val();
p||(p=l),e=new n({
container:r.find(".js_main"),
cropRatio:i._getCropImgRatio(d),
url:p,
tips:i._getCropImgTips(d)
}),r.popup("show"),r.popup("resetPosition");
});
},
_getCropImgRatio:function(i){
return 0==i?1.8:1;
},
_changeCoverCss:function(i){
if("undefined"==typeof i&&this.articleList&&this.articleList.$current&&(i=this.articleList.$current.index()),
"undefined"!=typeof i){
var e=this.$editor.find(".js_cover").find(".js_cover_preview");
0==i?e.addClass("first_appmsg_cover"):e.removeClass("first_appmsg_cover");
}
},
_coverChange:function(i){
var e=this.$editor,t=i.url,n=i.file_id,o="";
o=t?t.http2https().nogif():wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(n));
var s=i.oriUrl||o;
e.find(".js_cover").find("img").remove();
var a=e.find(".js_cover").show(),r=a.find(".js_cover_preview").css("backgroundImage",'url("'+o+'")');
if(r.find(".js_tip_mask_msg").hide(),r.find(".js_tip_mask").addClass("hover_mask").removeClass("error_mask"),
a.find("input.js_file_id").val(n),a.find("input.js_cdn_url").val(t.https2http().nogif()),
a.find("input.js_cdn_url_back").val(s),1*i.coverPic===1){
var d=this.ueditor.getUeditor(),_=d.selection.getRange(),c=_.createBookmark(),l=d.body.firstChild;
_.setEndBefore(l),_.setStartBefore(l),d.fireEvent("insertMaterialImg",{
format:i.oriFormat,
src:i.oriUrl
}),_.moveToBookmark(c),_.select(),d.fireEvent("contentchange",!0),d.fireEvent("scrollIntoView",$("#author"),200);
}
if(e.find(".js_show_cover_pic").val("0"),this.articleList&&this.articleList.$current){
var p=this.articleList.$current;
p.find("img.js_appmsg_thumb").attr("src",o),p.find("div.js_appmsg_thumb").css("backgroundImage",'url("'+o+'")'),
p.addClass("has_thumb");
}
e.find(".js_cover_error").hide(),this._changeCoverCss();
},
_getCropImgTips:function(i){
return 0==i?"首篇图文封面图片长宽比只能为9：5，拖拽裁剪框调整展示区域":"次篇图文封面图片长宽比只能为1：1，拖拽裁剪框调整展示区域";
},
_initUEditor:function(){
var i=this,e=[],n=["undo","redo","|","fontsize","|","blockquote","horizontal","|","removeformat","formatmatch","inserttemplate","templatelist","|","link","unlink","mpemotion"],o=["bold","italic","underline","forecolor","backcolor","|","indent","|","justifyleft","justifycenter","justifyright","justifyjustify","justifyindent","|","rowspacingtop","rowspacingbottom","lineheight","letterspacing","|","insertorderedlist","insertunorderedlist","|","imagenone","imageleft","imageright","imagecenter"];
e.push(new q({
container:"#js_editor_insertimage"
})),e.push(new T({
container:"#js_editor_insertvideo",
can_use_txvideo:wx.cgiData.can_use_txvideo
})),e.push(new v({
container:wx.cgiData.can_use_vote?"#js_editor_insertvote":"",
can_use_vote:wx.cgiData.can_use_vote
})),e.push(new b({
container:wx.cgiData.can_use_card?"#js_editor_insertcard":"",
biz_uin:R.biz_uin,
can_use_card:wx.cgiData.can_use_card
})),e.push(new I({
container:wx.cgiData.can_see_ad?"#js_editor_insertad":"",
has_ad:wx.cgiData.has_ad,
can_see_ad:wx.cgiData.can_see_ad
})),e.push(new D({
container:wx.cgiData.can_use_voice||wx.cgiData.qqmusic_flag?"#audio_music_plugin_btn":"",
allowAudio:wx.cgiData.can_use_voice,
allowMusic:wx.cgiData.qqmusic_flag
})),e.push(new L({
container:wx.cgiData.can_use_weapp_card?"#js_editor_insertweapp":"",
can_use_weapp_card:wx.cgiData.can_use_weapp_card
})),e.push(new x({
can_use_hyperlink:wx.cgiData.can_use_hyperlink,
can_use_appmsg_outer_url:wx.cgiData.can_use_appmsg_outer_url
})),e.push(new y),e.push(new k),e.push(new C({
token:wx.data.t,
appmsg_template_cnt:wx.cgiData.appmsg_template_cnt,
can_use_vote:wx.cgiData.can_use_vote,
can_use_card:wx.cgiData.can_use_card,
biz_uin:R.biz_uin,
can_use_voice:wx.cgiData.can_use_voice,
qqmusic_flag:wx.cgiData.qqmusic_flag,
can_use_weapp_card:wx.cgiData.can_use_weapp_card,
can_use_txvideo:wx.cgiData.can_use_txvideo,
can_use_hyperlink:wx.cgiData.can_use_hyperlink,
can_use_appmsg_outer_url:wx.cgiData.can_use_appmsg_outer_url,
can_see_ad:!1
})),e.push(new E({
token:wx.data.t
})),t=i.ueditor=new z({
plugins:e,
autoHeightEnabled:!0,
topOffset:53,
is_illegal:1*i.appmsg_data.is_illegal||0,
toolbars:[n,o]
}),t.render("js_editor"),t.addListener("begincatchimage",function(){
_.suc("内容已上传完成");
}),t.addListener("showEditorMsgTips",function(e,t){
$(".js_catch_tips",i.$editor).show().find(".js_msg_content").text(t.msg);
}),t.addListener("catchremotesuccess",function(e,n,o,s){
t.fireEvent("update_remote_img",{
article:n.article,
remoteType:"success",
uid:n.uid,
format:s,
img_url:o
});
var a=$(t.getDocument()).find(".js_catchremoteimageerror").length;
0==a?$(".js_catch_tips",i.$editor).hide():$(".js_catch_tips",i.$editor).show().find(".js_msg_content").text("有%s张图片粘贴失败".sprintf(a));
}),t.addListener("catchremoteerror",function(e,n,o){
if(n&&t.fireEvent("update_remote_img",{
article:n.article,
remoteType:"error",
uid:n.uid,
img_url:n.defaultRemoteImg
}),o)$(".js_catch_tips",i.$editor).show().find(".js_msg_content").text(o);else{
var s=$(t.getDocument()).find(".js_catchremoteimageerror").length;
0==s?$(".js_catch_tips",i.$editor).hide():$(".js_catch_tips",i.$editor).show().find(".js_msg_content").text("有%s张图片粘贴失败".sprintf(s));
}
}),t.addListener("scrollIntoView",function(i,e,t){
setTimeout(function(){
$("html, body").animate({
scrollTop:$(e).offset().top-(t||50)
});
},100);
}),t.addListener("showErrMsg",function(i,e,t){
$(e).show().find(".js_msg_content").text(t);
}),t.addListener("hideAllErrMsg",function(){
i.$editor.find(".js_error_msg,.js_tip_mask_msg").hide(),i.$editor.find(".js_tip_mask").removeClass("error_mask").addClass("hover_mask"),
$("#js_labels_error").hide();
}),t.addListener("keyup aftersetcontent",function(){
var e=t.getDocument(),n=$(e).find(".js_catchremoteimageerror").length;
n>0?$(".js_catch_tips",i.$editor).show().find(".js_msg_content").text("有%s张图片粘贴失败".sprintf(n)):$(".js_catch_tips",i.$editor).hide();
}),t.addListener("keyup",function(){
$(".js_content_error",i.$editor).hide(),$(".page_msg.js_warn").hide(),$("#js_draft_tips").hide();
}),t.addListener("heightChanged",function(){
$(window).trigger("scroll",!1);
}),t.addListener("focus",function(){
$(".page_msg.js_warn").hide(),t.enableToolbar();
}),t.addListener("renderReadOnly",function(e,t){
i._renderReadOnly(t);
}),t.addListener("renderEditorByType",function(e,t){
i._renderEditorByType(t);
}),t.addListener("afterArticleSelect afterArticleMove",function(e,t){
i._changeCoverCss(t);
}),t.ready(function(){
i._initEditArea(),i.articleList=new S($.extend({
maxNum:8,
ueditor:i.ueditor,
freeUEditor:i.freeUEditor,
is_illegal:1*i.appmsg_data.is_illegal||0,
is_rumor:1*i.appmsg_data.is_rumor||0
},i.opt)),i._bindEvent();
});
},
_initOriginal:function(){
var i=this,e=i.$editor;
$(document).on("click",".js_original_apply",function(){
var t=$("#js_original"),n=$("#tpl_original").popup({
title:"声明原创",
width:960,
className:"simple align_edge original_dialog",
data:{
author:t.find(".js_author").text()||e.find(".js_author").val(),
frm:t.find(".js_reprint_frm").val()||1,
can_use_appmsg_source_url:R.can_use_appmsg_source_url
},
buttons:[{
text:"下一步",
type:"primary",
click:function(){
o.find(".js_step_panel").hide().eq(1).show();
var i=new r({
container:"#js_original_article_type",
label:"请选择",
data:M
});
i.selected(t.find(".js_classify").text()),o.find(".js_btn_p").eq(0).hide(),o.find(".js_btn_p").eq(1).show(),
o.find(".js_btn_p").eq(2).show(),d.setStep(2);
}
},{
text:"上一步",
click:function(){
o.find(".js_step_panel").hide().eq(0).show(),o.find(".js_btn_p").eq(0).show(),o.find(".js_btn_p").eq(1).hide(),
o.find(".js_btn_p").eq(2).hide(),d.setStep(1);
}
},{
text:"确定",
type:"primary",
click:function(){
i._checkOriginal(o)&&($(".js_original_type").hide().eq(1).show(),$(".js_original_content").show(),
e.find(".js_author").closest(".appmsg_edit_item").eq(0).hide(),e.find(".js_reward").checkbox("disabled",!1).checkbox("checked",!1),
"checked"==o.find(".js_forIEbug_frm").attr("checked")?($("#js_pay").checkbox("disabled",!0),
$("#js_pay").checkbox("checked",!1),e.find(".js_pay_tips").show().text("（只有“禁止转载”的原创文章才可以设置付费阅读）"),
e.find(".js_pay_setting").hide()):($("#js_pay").checkbox("disabled",!1),e.find(".js_pay_tips").show().text("（每月可群发10篇付费阅读文章）")),
this.remove());
}
}],
onHide:function(){
this.remove();
}
}),o=n.popup("get");
o.find(".js_btn_p").eq(1).hide(),o.find(".js_btn_p").eq(2).hide();
var d=new a({
container:o.find(".js_step"),
selected:1,
names:["1 须知","2 原创声明信息"]
});
o.find("#js_copyright_agree").checkbox({
onChanged:function(i){
i.prop("checked")?o.find(".js_btn_p").enable():o.find(".js_btn_p").disable();
}
}),o.find(".js_reprint_frm").checkbox({
multi:!1
}),$($(".popover")[$(".popover").length-1]).css("z-index","9999"),$($(".popover")[$(".popover").length-1]).children(".popover_arrow").css("left","8%"),
o.find(".js_counter").each(function(){
$(this).hasClass("js_author")?new s($(this),{
maxLength:8,
useGBKLength:!0,
GBKBased:!0
}):new s($(this),{
maxLength:10
});
}),o.on("keyup",".js_platform,.js_url,.js_author",function(){
$(this).closest(".frm_controls").find(".fail").hide();
});
}),$(".js_original_cancel").on("click",function(){
$("#js_original");
e.find(".js_original_type").hide().eq(0).show(),e.find(".js_original_content").hide(),
e.find(".js_author").closest(".appmsg_edit_item").eq(0).show(),e.find(".js_reward").checkbox("disabled",!0),
e.find(".js_reward").checkbox("checked",!1),e.find(".js_reward_div,.js_reward_ios_wrap").hide(),
e.find(".js_reward_wording").val(),$("#js_pay",e).checkbox("disabled",!0),$("#js_pay",e).checkbox("checked",!1),
$(".js_pay_tips",i.$editor).show().text("（只有“禁止转载”的原创文章才可以设置付费阅读）"),$(".js_pay_setting",e).hide();
}),$("#js_original").on("click",".js_add_whitelist,.js_edit_whitelist",function(){
var i=$("#js_original").find(".js_whitelist").children(),e=[];
i.each(function(){
e.push($(this).attr("data-openid"));
}),new w({
data:e,
isAllowReprint:!0,
onOK:function(i){
g.post({
url:"/cgi-bin/appmsgcopyright?action=appmsg_add_ori_whitelist",
data:{
whitelist:JSON.stringify2({
white_list:i
})
}
},function(){}),$.each(i,function(i,e){
e.title=[],e.can_modify&&e.title.push("可修改文章"),e.can_hide_source&&e.title.push("可不显示转载来源"),
e.title=e.title.join("、");
});
var e=template.render("tpl_whitelist",{
list:i
});
$("#js_original").find(".js_whitelist").append(e),this.remove();
}
});
}),$("#js_original").find(".js_whitelist_tips").length&&new u({
dom:$("#js_original").find(".js_whitelist_tips"),
content:"<p>通过添加白名单，授予某些公众帐号对该篇文章具有可修改，或不显示转载来源的转载权限。在文章群发后生效</p>",
isToggle:!0,
onShow:function(){
this.resetPosition();
}
}).hide(),$(".js_reward_ios_tips").length&&new u({
dom:$(".js_reward_ios_tips"),
content:"<p>赞赏功能在iOS上将改为转账，iOS用户可以向你转账任意金额或你设置的固定金额，固定金额只对此篇图文生效。仍保持T+7结算到原收款人的微信零钱包，仍可在赞赏功能里查看流水。</p>",
isToggle:!0,
onShow:function(){
this.resetPosition();
}
}).hide(),$("#js_original").on("click",".js_del_whitelist",function(){
$(this).parent().remove();
}),$("#js_original_detail").on("click",function(){
$(this).parent().toggleClass("open"),$(this).siblings("ul").toggle();
});
var t=!0,n=R.orginal_apply_stat,o=1==R.has_invited_original?"/acct/copyrightapply?action=apply":"/acct/selfapply?action=apply";
o=wx.url(o);
var d=$("#js_original_func_open").closest(".js_original_type"),_=function(){
g.post({
url:"/cgi-bin/appmsg?action=get_original_stat"
},function(i){
if(i.base_resp&&0==i.base_resp.ret){
var e="";
switch(+i.orginal_apply_stat){
case 0:
e="原创声明：未开通";
break;

case 1:
e="原创声明：审核中",d.find(".opt").hide();
break;

case 2:
e="原创声明：申请失败",d.find(".opt").hide();
break;

case 3:
e="原创：未声明",d.find(".opt").html('<a href="javascript:;" onclick="return false;" class="btn btn_default js_original_apply">声明原创</a>').show();
}
d.find(".subtitle").text(e),n=i.orginal_apply_stat;
}
3!=i.orginal_apply_stat&&setTimeout(_,2e3);
});
};
$("#js_original_func_open").on("click",function(){
0==n&&window.open(o),t&&(t=!1,setTimeout(_,2e3));
});
},
_initPay:function(){
var i=this,e=i.$editor,t=i._createPayDialog();
$("#js_pay",e).checkbox({
multi:!0,
onChanged:function(n){
n.checkbox("value")?i._showPayDialog(t):(t.popup("hide"),$(".js_pay_setting",e).hide());
}
}),$(".js_pay_edit",e).on("click",function(){
i._showPayDialog(t);
});
},
_initBan:function(){
var i=this.$editor,e=i.find(".js_url_area"),t=17,n=function(){
var i;
$.each(R.func_ban_info,function(e,n){
n.func_id==t&&(i=n);
});
var n=f.getReason(i.reason_id),o='你的帐号<a href="'+(n.pc_url?n.pc_url:defaultReason.pc_url)+'">'+n.reason_description+"</a>，",s=new Date(1e3*i.unlock_time);
i.ban_time==i.unlock_time?o+="已被永久屏蔽阅读原文功能。":(o+="已被屏蔽阅读原文功能至",o+=s.getFullYear()+"/"+(s.getMonth()+1)+"/"+s.getDate(),
o+="，期间阅读原文将不可用。"),e.find(".js_url_checkbox").attr("disabled",!0).attr("checked",!1).parent().addClass("disabled"),
e.find(".js_url").attr("disabled",!0).parent().addClass("disabled"),e.find(".js_url_ban_wording").html(o);
};
f(R.func_ban_info,"source-url")?R.can_use_appmsg_source_url||e.hide():n();
},
_initAd:function(){
var i=this.$editor;
i.on("click",".js_del_ad",function(){
i.find(".js_ad_preview").html(""),i.find(".js_ad_preview").parent().hide(),$("#js_editor_insertad").removeClass("disabled");
});
},
_showPayDialog:function(i){
var e=this,t=e.$editor,n=i.popup("get");
n.find(".js_fee").val($(".js_fee",t).text()),n.find(".js_step_panel").hide().eq(0).show(),
n.find(".js_btn_p").hide(),n.find(".js_btn_p").eq(0).show(),n.find(".js_btn_p").eq(1).show(),
i._step.setStep(1),i.popup("show");
},
_createPayDialog:function(){
var i=this,e=i.$editor,t=$("#tpl_pay").popup({
title:"付费阅读设置",
width:960,
className:"simple align_edge pay_dialog",
autoShow:!1,
data:{},
buttons:[{
text:"取消",
click:function(){
$(".js_pay_setting",e).is(":visible")||$("#js_pay",e).checkbox("checked",!1),this.hide();
}
},{
text:"下一步",
type:"primary",
click:function(){
var t=i.freeUEditor.val(),s=n.find(".js_fee").val();
return""==t?void _.err("免费区域不能为空"):d.rangelength(t,[20,200])?!s||!/^\d*(\.\d+)?$/.test(s)||s.toString().match(/\.\d{3,}/)||.01>s?void _.err("请输入正确的金额"):.01>s?void _.err("金额必须大于零"):s>200?void _.err("金额不能超过200元"):(n.find(".js_content").html(t),
n.find(".js_content_count").text(i.ueditor.getUeditor().getContent().text().length),
n.find(".js_fee_preview").text(parseFloat(s).toFixed(2)),n.find(".js_nickname").text(wx.data.nick_name),
n.find(".js_title").text($.trim($(".js_title",e).val())),n.find(".js_author").text($.trim($(".js_author",e).val())),
n.find(".js_date").text(c().format("YYYY-MM-DD")),n.find(".js_step_panel").hide().eq(1).show(),
n.find(".js_btn_p").hide(),n.find(".js_btn_p").eq(2).show(),n.find(".js_btn_p").eq(3).show(),
n.find(".js_preview").scrollTop(1e8),o.setStep(2),void this.resetPosition()):void _.err("正文字数要多于20字且不能超过200字");
}
},{
text:"上一步",
click:function(){
n.find(".js_step_panel").hide().eq(0).show(),n.find(".js_btn_p").hide(),n.find(".js_btn_p").eq(0).show(),
n.find(".js_btn_p").eq(1).show(),o.setStep(1),this.resetPosition();
}
},{
text:"确定",
type:"primary",
click:function(){
$(".js_pay_setting",e).show().find(".js_fee").text((+n.find(".js_fee").val()).toFixed(2)),
$(".js_pay_tips",e).hide(),this.hide();
}
}],
onClose:function(){
$(".js_pay_setting",e).is(":visible")||$("#js_pay",e).checkbox("checked",!1),t.popup("hide");
},
onShow:function(){
this.resetPosition();
}
}),n=t.popup("get");
n.find(".js_btn_p").eq(2).hide(),n.find(".js_btn_p").eq(3).hide();
var o=new a({
container:n.find(".js_step"),
selected:1,
names:["设置","预览并确认"]
});
return i.freeUEditor=n.find(".js_editor"),new s(i.freeUEditor,{
minLength:20,
maxLength:200
}),n.find(".js_fee").on("input propertychange",function(){
var i=$(this).val();
i&&/^\d*(\.\d+)?$/.test(i)&&!i.toString().match(/\.\d{3,}/)?.01>i?$(this).parent().addClass("error"):i>200?$(this).parent().addClass("error"):$(this).parent().removeClass("error"):$(this).parent().addClass("error");
}),t.popup("resetPosition"),t._step=o,t;
},
_checkOriginal:function(i){
var e=!0,t="checked"==i.find(".js_forIEbug_frm").attr("checked")?1:i.find(".js_reprint_frm:checked").val(),n=i.find(".js_author").val(),o=i.find("#js_original_article_type .dropdown_switch label").text();
n.len()>16||n.len()<=0?(i.find(".js_author_error").show(),e=!1):i.find(".js_author_error").hide();
for(var s=!1,a=0;a<M.length;a++)o==M[a].name&&(s=!0);
if(0==s?(i.find(".js_article_type_error").show(),e=!1):i.find(".js_article_type_error").hide(),
e){
var r=$("#js_original");
r.find(".js_author").text(n),r.find(".js_reprint_frm").val(t),$("#original_type_msg").hide(),
r.find(".js_classify").text(o),this._updateWhitelist(t);
}
return e;
},
_updateWhitelist:function(i){
$("#js_original").find(".js_whitelist").children().each(function(){
var e=1*$(this).attr("data-can_modify"),t=1*$(this).attr("data-can_hide_source");
1==i&&(e||t||$(this).remove());
});
},
_updateCurUrl:function(i){
if(i){
wx.cgiData.app_id=i,window.history&&history.replaceState?history.replaceState(history.state,document.title,wx.url("/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&appmsgid=%s".sprintf(i))):1==R.isNew&&(location.href=wx.url("/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=10&appmsgid=%s".sprintf(i)));
var e=new RegExp("^"+location.protocol+"//"+location.hostname+"(:8080)?"+location.pathname+"?.*action=(list_card|list_list)");
B.match(e)&&window.opener&&opener.location&&(opener.location=B);
}
},
_bindEvent:function(){
function i(e,t,n){
g.post({
url:"/cgi-bin/appmsg?action=get_appmsg_update_history&appmsgid="+wx.cgiData.app_id+"&offset="+e+"&limit="+t
},function(e){
if(0==e.base_resp.ret){
var t=e.list;
t.each(function(i){
i.time=c.unix(i.update_time).format("YYYY-MM-DD HH:mm:ss"),i.action=0==i.operate_type?"保存":"群发",
""==i.operator_name&&(i.operator_name="未知"),wx.cgiData.bizmediaid&&wx.cgiData.bizmediaid==i.bizmediaid&&(i.current=!0),
i.url=wx.url("/cgi-bin/appmsg?t=media/appmsg_edit&action=get_history_appmsg&bizmediaid="+i.bizmediaid+"&type="+wx.cgiData.type+"&appmsgid="+wx.cgiData.app_id);
}),$("#history_list").html(template.render("history_tpl",{
list:t
})),n&&new j({
container:"#history_page",
perPage:4,
first:!1,
last:!1,
isSimple:!0,
totalItemsNum:e.total,
callback:function(e){
i(4*(e.currentPage-1),4);
}
}),$("#history_bt").addClass("appmsg_history_active"),$("#history_pop").show();
}
});
}
var e=this;
$("#history_bt").click(function(){
$(this).hasClass("appmsg_history_active")?($(this).removeClass("appmsg_history_active"),
$("#history_pop").hide()):i(0,4,!0);
}),$("#history_list").on("click",".js_history_link",function(){
wx.cgiData.bizmediaid?window.location=$(this).data("url")+"&idx"+wx.cgiData.idx:window.open($(this).data("url")+"&idx"+wx.cgiData.idx);
}),$(document).on("click",function(i){
var e=i.target;
$.contains($("#history_bt")[0],e)||$.contains($("#history_pop")[0],e)?($("#history_pop").show(),
$("#history_bt").addClass("appmsg_history_active")):($("#history_pop").hide(),$("#history_bt").removeClass("appmsg_history_active"));
}),$("#read_only_container").find(".js_close").click(function(){
$("#read_only_container").hide();
}),e.$editor.on("click",".js_msg_close",function(){
$(this).closest(".page_msg").hide();
}),e.$editor.find(".js_cover").on("click","img",function(){
var i=$(this).attr("src");
i&&p.show({
imgdata:[{
imgsrc:i
}]
});
});
var n=!1;
$("#js_fold").on("click",function(){
e.ueditor.fireEvent(n?"adjustheight":"foldcontentarea");
}),e.$editor.on("click",".js_unfold_editor",function(){
e.ueditor.fireEvent("adjustheight");
}),e.ueditor.addListener("heightChanged",function(i,t){
60==t?($("#js_fold").children("span").text("展开正文"),e.$editor.find(".js_unfold_editor").show(),
n=!0,$(window).scrollTop($(".js_title").parent().offset().top-$(".main_hd").height()-$(".edui-editor-toolbarbox").height())):($("#js_fold").children("span").text("收起正文"),
e.$editor.find(".js_unfold_editor").hide(),n=!1);
}),$("#js_submit").on("click",function(){
if(1*e.appmsg_data.is_illegal!=1){
var i=$(this);
$("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),$(".js_ad_error_tips").hide(),
e.articleList.save(i,function(t,n){
for(var o=0,s=0;s<n.count;s++)if(n["ad_id"+s]){
o=1;
break;
}
i.btn(!0),_.remove(),t.is_ad_optioal?$("#js_save_success_with_ad_op").show().delay(2e3).fadeOut(300):o?$("#js_save_success_with_ad").show().delay(2e3).fadeOut(300):$("#js_save_success").show().delay(2e3).fadeOut(300),
e._updateCurUrl(t.appMsgId);
},!1,t);
}
}),$("#js_submit_close").on("click",function(){
var i=$(this);
e.articleList.save(i,function(){
_.suc("保存成功"),window.close();
},!1,t);
}),$("#js_send").on("click",function(){
if(1*e.appmsg_data.is_illegal!=1){
var i=$(this);
$("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),e.articleList.save(i,function(i){
e.articleList.draft.isDropped=!0,e._updateCurUrl(i.appMsgId),location.href=wx.url("/cgi-bin/masssendpage?t=mass/send&type=10&appmsgid=%s".sprintf(i.appMsgId));
},!1,t,void 0,!0);
}
}),$("#js_preview").on("click",function(){
if(1*e.appmsg_data.is_illegal!=1&&($("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),
f(R.func_ban_info,"preview"))){
{
$(this);
}
e.articleList.preview(t,function(i){
e._updateCurUrl(i.appMsgId);
});
}
}),e.$editor.on("click",".js_jumpToOrder",function(){
m.show({
type:"info",
msg:"是否保存文章并跳转至广告订单页面？",
buttons:[{
text:"确定",
click:function(){
$("#js_import_tips,#js_draft_tips").hide(),$(".js_warn").hide(),$(".js_ad_error_tips").hide();
var i=$("#js_submit"),n=this,o=$(".js_ad_msg").data("ad_id");
n.remove(),e.articleList.save(i,function(i){
e._updateCurUrl(i.appMsgId),window.location.href=wx.url("/cgi-bin/frame?t=ad_system/common_simple_frame&t1=publisher/freetrade_item_detail&aid="+o);
},!1,t);
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
});
});
var o,s,a=$(".main_bd"),r=$(".js_aside"),d=$(".tool_area"),l=$(".main_hd").offset().top,u=$(".main_hd").height(),h=$("body"),w="edit_fixed";
$(window).on("scroll",function(){
s&&(clearTimeout(s),s=null);
var i=$(window).scrollTop(),t=a.offset().top,n=a.height(),_=$(window).height(),c=Math.min(n-i+t-u,_-u);
i>l?(h.addClass(w),r.height(c).find(".js_scrollbar").css("max-height",c)):(h.removeClass(w),
r.height(n)),_-c-u<=d.height()?$("body").removeClass("toolbar_unfixed"):$("body").addClass("toolbar_unfixed"),
arguments[1]!==!1&&(!!o&&window.clearTimeout(o),o=window.setTimeout(function(){
$("div.appmsg_edit_box").css({
overflow:"hidden"
}),setTimeout(function(){
$("div.appmsg_edit_box").css({
overflow:""
});
},0);
},200)),s=setTimeout(function(){
e.ueditor&&e.ueditor.fireEvent("toolbar_fixed_change");
},100),setTimeout(function(){
$(".js_scrollbar").scrollbar.updateScrollbars(!0);
});
}).trigger("scroll",!1),$.support.leadingWhitespace&&setInterval(function(){
$(window).trigger("scroll",!1);
},1e3);
var v=$(window).width();
1200>v&&$("#body").width(v).css("margin-left","0"),$(window).on("resize",function(){
var i=$(window).width();
1200>i?$("#body").width(i).css({
"margin-left":"0",
"margin-right":"0"
}).find(".main_hd").width(i-2):$("#body").width(1200).css({
"margin-left":"auto",
"margin-right":"auto"
}).find(".main_hd").width(1198),$(window).trigger("scroll",!1);
}),$(window).on("unload",function(){
O.setData(1),O.send(1);
});
}
}),Y=(new N({
app_id:R.app_id,
editor_selector:"#js_appmsg_editor",
appmsg_selector:"#js_appmsg_preview",
appmsg_data:R.appmsg_data
}),i("biz_common/utils/wxgspeedsdk.js"));
Y.setBasicTime({
uin:wx&&wx.data&&wx.data.uin||0,
pid:34
}),Y.send();
});