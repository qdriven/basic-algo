define("media/media_cgi.js",["media/common.js","common/wx/Tips.js","common/wx/Cgi.js","resp_types/base_resp.rt.js","resp_types/file_cnt.rt.js"],function(e){
"use strict";
var r=e("media/common.js"),s=e("common/wx/Tips.js"),t=e("common/wx/Cgi.js"),i=e("resp_types/base_resp.rt.js"),n=e("resp_types/file_cnt.rt.js"),a={
del:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/operate_appmsg?sub=del&t=ajax-response"),
data:{
AppMsgId:e
},
rtDesc:i,
error:function(){
s.err("删除失败");
}
},function(e){
"0"==e.ret?(s.suc("删除成功"),r&&r(e)):s.err("删除失败");
});
},
del_sv:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
rtDesc:i,
error:function(){
s.err("删除失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(s.suc("删除成功"),r.suc&&r.suc(e)):(s.err("删除失败"),
r.fail&&r.fail(e));
});
},
edit_sv:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e.id,
filename:e.name
},
rtDesc:i,
error:function(){
s.err("编辑失败");
}
},function(e){
e.base_resp&&0==+e.base_resp.ret?(s.suc("编辑成功"),r.suc&&r.suc(e)):(s.err("编辑失败"),
r.fail&&r.fail(e));
});
},
save:function(e,i,n,a,o,p){
var c=wx.url(n.AppMsgId?"/cgi-bin/operate_appmsg?t=ajax-response&sub=update&type=%s".sprintf(i):"/cgi-bin/operate_appmsg?t=ajax-response&sub=create&type=%s".sprintf(i));
n.ajax=1,t.post({
url:c,
data:n,
dataType:"json",
rtDesc:{
ret_R:"string",
appMsgId_R:"number"
},
error:function(e,r){
"timeout"!=r&&s.err("保存失败"),o&&o(!1,-1,"",{
myErrMsg:"保存失败"
});
},
complete:p
},function(e){
if("0"==e.ret)s.suc("保存成功"),a&&a(e);else{
var t=r.articleRetCode(e),i=t.index;
e.myErrMsg=t.errmsg,o&&o(i,e.ret,e.remind_wording,e);
}
});
},
preview:function(e,i,n,a,o){
t.post({
url:wx.url("/cgi-bin/operate_appmsg?sub=preview&t=ajax-appmsg-preview&type=%s".sprintf(i)),
data:n,
dataType:"json",
rtDesc:{
ret_R:"string"
},
error:function(){
s.err("发送失败，请稍后重试"),o&&o({
word:"发送失败，请稍后重试"
});
}
},function(e){
if("0"==e.ret)s.suc("发送预览成功，请留意你的手机微信"),a&&a(e);else{
var t=r.articleRetCode(e);
e.word=t.errmsg,e.antispam=t.index,15==i&&s.err(e.word),o&&o(e);
}
});
},
getList:function(e,r,a,o,p,c){
var u="";
u=wx.url(p?"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&query=%s&f=json".sprintf(e,r,a,p):"/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,r,a)),
0==c?u=wx.url("/cgi-bin/appmsg?type=%s&action=list&begin=%s&count=%s&f=json".sprintf(e,r,a)):1==c&&(u=wx.url("/cgi-bin/video_mgr?type=%s&action=get_video_list&begin=%s&offset=%s&f=json".sprintf(e,r,a))),
t.get({
mask:!1,
url:u,
rtDesc:$.extend({},i,{
app_msg_info:$.extend({},n,{
item_R:[],
search_cnt:"number"
})
}),
error:function(){
s.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?o&&o(e.app_msg_info):s.err("获取列表失败");
});
},
getSingleList:function(e,r,i,n){
t.get({
mask:!1,
url:wx.url("/cgi-bin/appmsg?type=%s&action=for_advert&begin=%s&count=%s&f=json".sprintf(e,r,i)),
error:function(){
s.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?n&&n(e.app_msg_info):s.err("获取列表失败");
});
}
},o={
save:function(e,r,i){
var n=wx.url("/cgi-bin/operate_vote");
e.ajax=1,t.post({
url:n,
data:e,
error:function(){
s.err("保存失败"),i&&i();
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?(s.suc("保存成功"),r&&r(e)):(s.err("保存失败"),i&&i(e));
});
}
};
return{
rename:function(e,r,i){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=rename&t=ajax-response"),
data:{
fileid:e,
fileName:r
},
error:function(){
s.err("重命名失败");
}
},function(e){
if(!e||!e.base_resp)return void s.err("重命名失败");
var r=e.base_resp.ret;
if("0"==r)s.suc("重命名成功"),i&&i(e);else switch(r){
case"200002":
s.err("素材名不能包含空格");
break;

default:
s.err("重命名失败");
}
});
},
del:function(e,r){
t.post({
mask:!1,
url:wx.url("/cgi-bin/modifyfile?oper=del&t=ajax-response"),
data:{
fileid:e
},
error:function(){
s.err("删除失败");
}
},function(e){
if(!e||!e.base_resp)return void s.err("删除失败");
var t=e.base_resp.ret;
"0"==t?(s.suc("删除成功"),r&&r(e)):s.err("删除失败");
});
},
getList:function(e,r,a,o){
t.get({
mask:!1,
url:wx.url("/cgi-bin/filepage?type=%s&begin=%s&count=%s&f=json".sprintf(e,r,a)),
rtDesc:$.extend({},i,{
page_info_R:$.extend({},n,{
file_item_R:[{
file_id_R:"number",
name_R:"string",
size_R:"string",
update_time_R:"number",
type_R:"number"
}]
})
}),
error:function(){
s.err("获取列表失败");
}
},function(e){
e&&e.base_resp&&0==e.base_resp.ret?o&&o(e.page_info):s.err("获取列表失败");
});
},
appmsg:a,
vote:o
};
});define("biz_web/lib/store.js",["biz_web/lib/json.js"],function(e,t,r){
function n(){
try{
return f in window&&window[f];
}catch(e){
return!1;
}
}
function i(e){
return function(){
var t=Array.prototype.slice.call(arguments,0);
t.unshift(a),d.appendChild(a),a.addBehavior("#default#userData"),a.load(f);
var r=e.apply(u,t);
return d.removeChild(a),r;
};
}
function o(e){
return e.replace(b,"___");
}
var a,c=e("biz_web/lib/json.js"),u={},l=window.document,f="localStorage",s="__storejs__";
if(u.disabled=!1,u.set=function(){},u.get=function(){},u.remove=function(){},u.clear=function(){},
u.transact=function(e,t,r){
var n=u.get(e);
null==r&&(r=t,t=null),"undefined"==typeof n&&(n=t||{}),r(n),u.set(e,n);
},u.getAll=function(){},u.serialize=function(e){
return c.stringify2(e);
},u.deserialize=function(e){
if("string"!=typeof e)return void 0;
try{
return c.parse(e);
}catch(t){
return e||void 0;
}
},n())a=window[f],u.set=function(e,t,r){
if(void 0===t)return u.remove(e);
try{
a.setItem(e,u.serialize(t));
}catch(n){
a.clear();
try{
a.setItem(e,u.serialize(t));
}catch(i){
"function"==typeof r&&r(i);
}
}
return t;
},u.get=function(e,t){
try{
return u.deserialize(a.getItem(e));
}catch(r){
return void("function"==typeof t&&t(r));
}
},u.remove=function(e,t){
try{
a.removeItem(e);
}catch(r){
"function"==typeof t&&t(r);
}
},u.clear=function(e){
try{
a.clear();
}catch(t){
"function"==typeof e&&e(t);
}
},u.getAll=function(){
for(var e={},t=0;t<a.length;++t){
var r=a.key(t);
e[r]=u.get(r);
}
return e;
};else if(l.documentElement.addBehavior){
var d,m;
try{
m=new ActiveXObject("htmlfile"),m.open(),m.write('<script>document.w=window</script><iframe src="/favicon.ico"></iframe>'),
m.close(),d=m.w.frames[0].document,a=d.createElement("div");
}catch(v){
a=l.createElement("div"),d=l.body;
}
var b=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");
u.set=i(function(e,t,r){
return t=o(t),void 0===r?u.remove(t):(e.setAttribute(t,u.serialize(r)),e.save(f),
r);
}),u.get=i(function(e,t){
return t=o(t),u.deserialize(e.getAttribute(t));
}),u.remove=i(function(e,t){
t=o(t),e.removeAttribute(t),e.save(f);
}),u.clear=i(function(e){
var t=e.XMLDocument.documentElement.attributes;
e.load(f);
for(var r,n=0;r=t[n];n++)e.removeAttribute(r.name);
e.save(f);
}),u.getAll=i(function(e){
for(var t,r=e.XMLDocument.documentElement.attributes,n={},i=0;t=r[i];++i){
var a=o(t.name);
n[t.name]=u.deserialize(e.getAttribute(a));
}
return n;
});
}
try{
u.set(s,s),u.get(s)!=s&&(u.disabled=!0),u.remove(s);
}catch(v){
u.disabled=!0;
}
u.isLocalStorageNameSupported=n,u.enabled=!u.disabled,r.exports=u;
});define("common/wx/time.js",[],function(){
"use strict";
function e(e){
var t=new Date(1e3*e),r=new Date,g=t.getTime(),a=r.getTime(),u=864e5;
return u>a-g&&r.getDate()==t.getDate()?"%s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):2*u>a-g&&new Date(1*t+u).getDate()==r.getDate()?"昨天 %s:%s".sprintf(n(t.getHours()),n(t.getMinutes())):6*u>=a-g?"%s %s:%s".sprintf(s[t.getDay()],n(t.getHours()),n(t.getMinutes())):t.getFullYear()==r.getFullYear()?"%s月%s日".sprintf(n(t.getMonth()+1),n(t.getDate())):"%s年%s月%s日".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()));
}
function t(e){
var t=new Date(1e3*e);
return"%s-%s-%s %s:%s:%s".sprintf(t.getFullYear(),n(t.getMonth()+1),n(t.getDate()),n(t.getHours()),n(t.getMinutes()),n(t.getSeconds()));
}
function r(e,t){
var r=["日","一","二","三","四","五","六"],n=t.replace(/yyyy|YYYY/,e.getFullYear()).replace(/yy|YY/,g(e.getFullYear()%100,2)).replace(/mm|MM/,g(e.getMonth()+1,2)).replace(/m|M/g,e.getMonth()+1).replace(/dd|DD/,g(e.getDate(),2)).replace(/d|D/g,e.getDate()).replace(/hh|HH/,g(e.getHours(),2)).replace(/h|H/g,e.getHours()).replace(/ii|II/,g(e.getMinutes(),2)).replace(/i|I/g,e.getMinutes()).replace(/ss|SS/,g(e.getSeconds(),2)).replace(/s|S/g,e.getSeconds()).replace(/w/g,e.getDay()).replace(/W/g,r[e.getDay()]);
return n;
}
function g(e,t){
for(var r=0,g=t-(e+"").length;g>r;r++)e="0"+e;
return e+"";
}
var n=function(e){
return e+="",e.length>=2?e:"0"+e;
},s=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
return{
timeFormat:e,
getFullTime:t,
formatDate:r
};
});define("common/wx/media/shareCopyrightDialog.js",["biz_web/ui/checkbox.js","common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","tpl/media/sharecopyright_dialog.html.js","tpl/media/sharecopyright_item.html.js","common/wx/tooltips.js","common/wx/pagebar.js"],function(t){
"use strict";
t("biz_web/ui/checkbox.js");
var e=t("common/wx/Cgi.js"),i=t("common/wx/Tips.js"),a=(t("common/wx/popup.js"),
t("tpl/media/sharecopyright_dialog.html.js")),o=t("tpl/media/sharecopyright_item.html.js"),n=t("common/wx/tooltips.js"),s=t("common/wx/pagebar.js"),r=(template.render,
function(t){
return new l(t);
}),l=function(t){
this.options=t,this._g={
perPage:3
},this.events=[],this.curData=[],this.seletedIndex=void 0,c.init.call(this);
},c={
init:function(){
var t=this,e=t.options=$.extend(!0,{
dialogTpl:a,
itemTpl:o,
className:"share_article_dialog",
title:"分享图文消息",
onOK:null,
onCancel:null
},t.options);
e.dialogTpl=template.compile(e.dialogTpl)(e),t.on("ok",function(){
return t.curData&&0!=t.curData.length?"undefined"!=typeof t.seletedIndex&&t.curData[t.seletedIndex]?("function"==typeof e.onOK&&e.onOK.call(this,t.curData[t.seletedIndex]),
this.destroy(),void(this.dialog=null)):void i.err("请选择原创文章"):void i.err("请搜索原创文章");
}),t.on("cancel",function(){
this.destroy(),"function"==typeof e.onCancel&&e.onCancel.call(this),this.dialog=null;
}),t.dialog=$(e.dialogTpl.trim()).popup({
title:e.title,
className:"share_article_dialog",
width:760,
autoShow:!0,
buttons:[{
text:"确定",
type:"disabled",
click:function(){
t._g.dom.$ok.hasClass("btn_disabled")||t.trigger("ok");
}
},{
text:"取消",
click:function(){
t.trigger("cancel");
}
}],
onHide:function(){
t.trigger("cancel");
}
});
var n=t._g,s=t.dialog.popup("get");
n.dom={
$dialogDom:s,
$ok:s.find(".js_btn_p").eq(0),
$searchInput:s.find(".js_search_input"),
$searchBtn:s.find(".js_search_btn"),
$searchDel:s.find(".js_search_del"),
$searchTips:s.find(".js_search_tips"),
$tipsMain:s.find(".js_tips_main"),
$articleContent:s.find(".js_article_content"),
$loading:s.find(".js_loading"),
$pageBar:s.find(".js_pagebar")
},n.dom.$ok.addClass("btn_primary"),c.initEvent.call(t);
},
initEvent:function(){
{
var t=this,e=this._g,i=e.dom;
this.options;
}
i.$searchBtn.click(function(){
var e=i.$searchInput.val().trim();
e&&(i.$searchTips.text(""),c.getSearchData.call(t,{
val:e,
page:0
}));
}),i.$searchInput.keyup(function(e){
var a=i.$searchInput.val().trim();
a?(i.$searchDel.show(),i.$searchTips.text(""),i.$tipsMain.hide()):c.resetSearch.call(t);
var o=e.keyCode||e.which||0;
13==o&&a&&c.getSearchData.call(t,{
val:a,
page:0
});
}),i.$searchDel.click(function(){
c.resetSearch.call(t);
}),i.$dialogDom.find(".js_tooltips").each(function(){
t._tooltips&&t._tooltips.show()||(t._tooltips=new n({
container:this,
reposition:!0,
parentClass:"tc",
position:{
left:-134
}
}));
});
},
resetSearch:function(){
var t=this._g,e=t.dom;
e.$searchInput.val(""),e.$searchDel.hide(),e.$searchTips.text(""),e.$tipsMain.hide();
},
checkLoading:function(){
return this._g.gettingData;
},
showLoading:function(){
var t=this._g,e=t.dom;
t.gettingData=!0,e.$loading.show(),e.$articleContent.hide();
},
hideLoading:function(){
var t=this._g,e=t.dom;
t.gettingData=!1,e.$loading.hide(),e.$articleContent.show();
},
getSearchData:function(t){
var i=this,a=(this.options,this._g);
c.checkLoading.call(this)!==!0&&(c.showLoading.call(this),e.post({
url:"/cgi-bin/operate_appmsg?sub=check_appmsg_copyright_stat",
data:{
url:t.val,
begin:t.page*a.perPage,
count:a.perPage
},
mask:!1
},{
done:function(e){
c.hideLoading.call(i);
var a="";
if(e&&e.base_resp){
if(0==e.base_resp.ret)return void c.renderArticle.call(i,{
code:0,
list:e.list||[],
total:1*e.total,
page:t.page,
searchKey:t.val
});
switch(1*e.base_resp.ret){
case 64701:
a="不是有效的公众号原创文章链接";
break;

case 200013:
a="你的操作太频繁，请稍后再试";
break;

default:
a="系统繁忙，请稍后再试";
}
return void c.renderArticle.call(i,{
code:-1,
msg:a
});
}
return void c.renderArticle.call(i,{
code:-1
});
},
fail:function(){
c.hideLoading.call(i),c.renderArticle.call(i,{
code:-1
});
}
}));
},
renderArticle:function(t){
if(this.dialog){
var e=this,i=this._g,a=i.dom,o=t.msg||"";
0==t.code||t.msg?0!=t.code||t.list&&0!=t.list.length||t.msg||(o="暂无搜索结果"):o="系统繁忙，请稍后再试",
this.curData=t.list||[],this.seletedIndex=void 0,a.$ok.disable(),a.$loading.hide(),
o?(a.$searchTips.text(o),a.$tipsMain.show(),a.$articleContent.hide()):(a.$articleContent.show(),
a.$articleContent.html(template.compile(this.options.itemTpl)({
data:this.curData
}).trim())),this.curData.length>0&&a.$articleContent.find("input[type=radio][name=ori_article_item]").checkbox({
onChanged:function(t){
e.seletedIndex=1*t.data("index"),a.$ok.enable();
}
}),0==t.code&&t.total>0&&"undefined"!=typeof t.page?c.initPageBar.call(e,{
curPage:t.page+1,
total:t.total,
searchKey:t.searchKey
}):a.$pageBar.hide(),this.dialog.popup("resetPosition");
}
},
initPageBar:function(t){
var e=this,i=this._g,a=i.dom;
e.pageBar&&e.pageBar.destroy(),e.pageBar=new s({
container:a.$pageBar,
perPage:i.perPage,
initShowPage:t.curPage,
totalItemsNum:Math.min(t.total,2e3),
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
c.getSearchData.call(e,{
val:t.searchKey,
page:1*i.currentPage-1
});
}
});
}
},h={
on:function(t,e){
if(e){
var i=this.events;
return i[t]=i[t]||[],i[t].push(e),this;
}
},
trigger:function(t){
var e=this,i=arguments,a=e.events[t];
return a?($.each(a,function(t,a){
a.apply(e,Array.prototype.slice.call(i,1));
}),this):void 0;
},
hide:function(){
return this.dialog.popup("hide"),this;
},
show:function(){
return this.dialog.popup("show"),this;
},
destroy:function(){
!!this.dialog&&this.dialog.popup("remove"),this.dialog=null,this._tooltips&&this._tooltips.$dom&&(this._tooltips.$dom.remove(),
this._tooltips=null),this.pageBar&&this.pageBar.destroy(),this.curData=[],this.seletedIndex=void 0,
this._g.dom={};
}
};
return $.extend(l.prototype,h),r;
});define("media/common.js",["biz_common/jquery.validate.js","common/wx/mpEditor/plugin/filter.js"],function(e){
"use strict";
function r(e){
var r=e.key+(e.strict===!0?"Strict":"");
return"function"==typeof l[r]?l[r](e):!0;
}
function a(e){
function r(){
a&&a.fireEvent("checkRemoteList")&&a.fireEvent("checkdomAsynList")&&(a.removeListener("remoteimg_all_complete domasyn_all_complete",r),
s());
}
var a=e.editor,s=e.callback;
return a.fireEvent("checkRemoteList")&&a.fireEvent("checkdomAsynList")?void s():(a.addListener("remoteimg_all_complete domasyn_all_complete",r),
void a.funcPvUvReport("save_remoting_img"));
}
function s(e){
var r,a,s=$(e.imgDom),t=e.remoteType,c=e.format,n=e.img_url,m=e.editor;
if(s&&0!=s.length){
if(a=/^img$/i.test(s[0].nodeName)?"img":"bg",s.removeClass("js_catchingremoteimage"),
"img"==a)r=s.attr("src"),s.attr({
src:n
}).removeAttr("_src").removeAttr("data-src").data("src",""),"success"==t&&c?s.attr({
"data-type":c
}):"error"==t&&s.addClass("js_catchremoteimageerror");else if("bg"==a){
var i=s[0].getAttribute("style")||s[0].style.cssText||"";
i=i.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),i&&i[2]&&(r=i[2].replace(/^['"]|['"]$/g,"")),
s.css({
"background-image":"url("+n+")"
}),"error"==t&&s.addClass("js_catchremoteimageerror");
}
if(s.removeAttr("data-remoteid").data("remoteid",""),/^blob:/.test(r))try{
var g=m.getWindow(),o=g.window.URL||g.window.webkitURL;
o.revokeObjectURL(r);
}catch(b){}
}
}
function t(e){
var r,a={
errmsg:"",
index:!1
};
switch("undefined"!=typeof e.ret?r=1*e.ret:e.base_resp&&"undefined"!=typeof e.base_resp.ret&&(r=1*e.base_resp.ret),
1*r){
case-8:
case-6:
e.ret="-6",a.errmsg="请输入验证码";
break;

case 62752:
a.errmsg="可能含有具备安全风险的链接，请检查";
break;

case 64505:
a.errmsg="发送预览失败，请稍后再试";
break;

case 64504:
a.errmsg="保存图文消息发送错误，请稍后再试";
break;

case 64518:
a.errmsg="正文只能包含一个投票";
break;

case 10704:
case 10705:
a.errmsg="该素材已被删除";
break;

case 10701:
a.errmsg="用户已被加入黑名单，无法向其发送消息";
break;

case 10703:
a.errmsg="对方关闭了接收消息";
break;

case 10700:
case 64503:
a.errmsg="1.接收预览消息的微信尚未关注公众号，请先扫码关注<br /> 2.如果已经关注公众号，请查看微信的隐私设置（在手机微信的“我->设置->隐私->添加我的方式”中），并开启“可通过以下方式找到我”的“手机号”、“微信号”、“QQ号”，否则可能接收不到预览消息";
break;

case 64502:
a.errmsg="你输入的微信号不存在，请重新输入";
break;

case 64501:
a.errmsg="你输入的帐号不存在，请重新输入";
break;

case 412:
a.errmsg="图文中含非法外链";
break;

case 64515:
a.errmsg="当前素材非最新内容，请重新打开并编辑";
break;

case 320001:
a.errmsg="该素材已被删除，无法保存";
break;

case 64702:
a.errmsg="标题超出64字长度限制";
break;

case 64703:
a.errmsg="摘要超出120字长度限制";
break;

case 64704:
a.errmsg="推荐语超出140字长度限制";
break;

case 64515:
a.errmsg="当前素材非最新内容";
break;

case 200041:
a.errmsg="此素材有文章存在违规，无法编辑";
break;

case 64506:
a.errmsg="保存失败,链接不合法";
break;

case 64507:
a.errmsg="内容不能包含链接，请调整";
break;

case 64510:
a.errmsg="内容不能包含语音，请调整";
break;

case 64511:
a.errmsg="内容不能包多个语音，请调整";
break;

case 64512:
a.errmsg="文章中语音错误,请使用语音添加按钮重新添加。";
break;

case 64508:
a.errmsg="查看原文链接可能具备安全风险，请检查";
break;

case 64550:
a.errmsg="请勿插入不合法的已群发的图文消息链接";
break;

case 64558:
a.errmsg="请勿插入图文消息临时链接，链接会在短期失效";
break;

case 64559:
a.errmsg="请勿插入未群发的图文消息链接";
break;

case-99:
a.errmsg="内容超出字数，请调整";
break;

case 64705:
a.errmsg="内容超出字数，请调整";
break;

case-1:
a.errmsg="系统错误，请注意备份内容后重试";
break;

case-2:
case 200002:
a.errmsg="参数错误，请注意备份内容后重试";
break;

case 64509:
a.errmsg="正文中不能包含超过3个视频，请重新编辑正文后再保存。";
break;

case-5:
a.errmsg="服务错误，请注意备份内容后重试。";
break;

case 64513:
a.errmsg="请从正文中选择封面，再尝试保存。";
break;

case-206:
a.errmsg="目前，服务负荷过大，请稍后重试。";
break;

case 10801:
a.errmsg="标题不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10802:
a.errmsg="作者不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10803:
a.errmsg="敏感链接，请重新添加。",a.index=1*e.msg;
break;

case 10804:
a.errmsg="摘要不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10806:
a.errmsg="正文不能有违反公众平台协议、相关法律法规和政策的内容，请重新编辑。",a.index=1*e.msg;
break;

case 10807:
a.errmsg="内容不能违反公众平台协议、相关法律法规和政策，请重新编辑。";
break;

case-2e4:
a.errmsg="登录态超时，请重新登录。";
break;

case 64513:
a.errmsg="封面必须存在正文中，请检查封面";
break;

case 64551:
a.errmsg="请检查图文消息中的微视链接后重试。";
break;

case 64552:
a.errmsg="请检查阅读原文中的链接后重试。";
break;

case 64553:
a.errmsg="请不要在图文消息中插入超过5张卡券。请删减卡券后重试。";
break;

case 64554:
a.errmsg="在当前情况下不允许在图文消息中插入卡券，请删除卡券后重试。";
break;

case 64555:
a.errmsg="请检查图文消息卡片跳转的链接后重试。";
break;

case 64556:
a.errmsg="卡券不属于该公众号，请删除后重试";
break;

case 64557:
a.errmsg="卡券无效，请删除后重试。";
break;

case 13002:
a.errmsg="该广告卡片已过期，删除后才可保存成功",a.index=1*e.msg;
break;

case 13003:
a.errmsg="已有文章插入过该广告卡片，一个广告卡片仅可插入一篇文章",a.index=1*e.msg;
break;

case 13004:
a.errmsg="该广告卡片与图文消息位置不一致",a.index=1*e.msg;
break;

case 15801:
case 15802:
case 15803:
case 15804:
case 15805:
case 15806:
a.errmsg=e.remind_wording||"你所编辑的内容可能含有违反微信公众平台平台协议、相关法律法规和政策的内容";
break;

case 1530503:
a.errmsg="请勿添加其他公众号的主页链接";
break;

case 1530504:
a.errmsg="请勿添加其他公众号的主页链接";
break;

case 1530510:
a.errmsg="链接已失效，请在手机端重新复制链接";
break;

case 153007:
a.errmsg="很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，视频均为你已成功声明原创的视频<br />3、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片";
break;

case 153008:
a.errmsg="很抱歉，原创声明不成功|你的文章内容少于300字，未达到申请原创内容声明的字数要求。";
break;

case 153009:
a.errmsg="很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，无视频，图片（包括封面图）均为你已成功声明原创的图片";
break;

case 153010:
a.errmsg="很抱歉，原创声明不成功|你的文章内容未达到声明原创的要求，满足以下任一条件可发起声明：<br />1、文章文字大于300字<br />2、文章文字小于300字，视频均为你已成功声明原创的视频";
break;

case 1530511:
a.errmsg="链接已失效，请在手机端重新复制链接";
break;

case 220001:
a.errmsg='"素材管理"中的存储数量已达到上限，请删除后再操作。';
break;

case 220002:
a.errmsg="你的图片库已达到存储上限，请进行清理。";
break;

case 153012:
a.errmsg="请设置转载类型";
break;

case 200042:
a.errmsg="图文中包含的小程序卡片不能多于20个";
break;

case 200043:
a.errmsg="图文中包含没有关联的小程序，请删除后再保存";
break;

case 64601:
a.errmsg="一篇文章只能插入一个广告卡片";
break;

case 64602:
a.errmsg="尚未开通文中广告位，但文章中有广告";
break;

case 64603:
a.errmsg="文中广告前不足300字";
break;

case 64604:
a.errmsg="文中广告后不足300字";
break;

case 64605:
a.errmsg="文中不能同时插入文中广告和互选广告";
break;

case 65101:
a.errmsg="图文模版数量已达到上限，请删除后再操作";
break;

default:
a.errmsg="系统繁忙，请稍后重试";
}
return a;
}
function c(e,r,a,s,t){
if(t=t===!0?!0:!1,e===r)return 0!==e||1/e===1/r;
if(null==e||null==r)return e===r;
var m=Object.prototype.toString.call(e);
if(m!==Object.prototype.toString.call(r))return!1;
switch(m){
case"[object RegExp]":
case"[object String]":
return""+e==""+r;

case"[object Number]":
return+e!==+e?+r!==+r:0===+e?1/+e===1/r:+e===+r;

case"[object Date]":
case"[object Boolean]":
return+e===+r;
}
var i="[object Array]"===m;
if(!i&&("object"!=typeof e||"object"!=typeof r))return!1;
a=a||[],s=s||[];
for(var g=a.length;g--;)if(a[g]===e)return s[g]===r;
if(a.push(e),s.push(r),i){
if(g=e.length,g!==r.length)return!1;
for(;g--;)if(!c(e[g],r[g],a,s,t))return!1;
}else{
var o={
can_reward:!0,
title:!0,
author:!0,
digest:!0,
content:!0,
source_url:!0,
need_open_comment:!0,
only_fans_can_comment:!0,
cdn_url:!0,
reward_money:!0,
reward_wording:!0,
source_url_checked:!0,
show_cover_pic:!0,
copyright_type:!0,
releasefirst:!0,
platform:!0,
reprint_permit_type:!0,
original_article_type:!0,
ori_white_list:!0,
free_content:!0,
fee:!0,
ad_info:!0,
ad_id:!0,
ad_img:!0,
img:!0,
nick_name:!0,
pt:!0,
trade_mode:!0,
copyright_headimg:!0,
copyright_nickname:!0,
guide_words:!0,
is_share_copyright:!0,
share_copyright_url:!0
},b=",content,cover,cdn_url,title,author,";
for(var l in e)if(e.hasOwnProperty(l)&&(t||o[l])&&!(!t&&1*e.is_share_copyright==1&&b.indexOf(","+l+",")>=0||"undefined"==typeof e[l]&&"undefined"==typeof r[l])){
var u=e[l],k=r[l];
if("cdn_url"==l?(u=u.http2https().replace(/\?$/,""),k=k.http2https().replace(/\?$/,"")):"content"==l&&(u=n(u),
k=n(k)),!r.hasOwnProperty(l)||!c(u,k,a,s,t))return!1;
}
}
return a.pop(),s.pop(),!0;
}
function n(e){
return UE&&(e=e.replace(UE.dom.domUtils.fillCharReg,"")),e=e.replace(/\s/g," "),
e=e.replace(/<br([^>]*?)>/g,""),e=e.replace('<span data-fillchar="1"></span>',""),
e=g.removeAttribute(e,[["*","class"],["iframe","scrolling"],["iframe","frameborder"],["*","data-(?:[^'\"\\s=<>]*?)"]]),
e=e.replace(/<img\s([^>]*?)>/g,function(e,r){
return"<img "+$.trim(r)+" />";
}),e=e.replace(/<input\s([^>]*?)>/g,function(e,r){
return"<input "+$.trim(r)+" />";
});
}
var m=/[\u2600-\u27BF]|[\u2B00-\u2BFF]|[\u3291-\u32B0]|[\uD83C\uD83D][\uDC00-\uDFFF]/,i=e("biz_common/jquery.validate.js"),g=e("common/wx/mpEditor/plugin/filter.js"),o=i.rules,b=wx&&"3071959254"==wx.uin?1e5:3e4,l={};
return l.title=function(e){
var r=e.content||"",a=e.maxlen||64;
return o.rangelength(r,[0,a])?m.test(r)?{
msg:"%s中不能含有特殊字符".sprintf(e.label||"标题"),
errType:2
}:!0:{
msg:"%s长度不能超过%s字".sprintf(e.label||"标题",a),
errType:1
};
},l.titleStrict=function(e){
var r=e.content||"",a=e.maxlen||64;
return o.rangelength(r,[1,a])?m.test(r)?{
msg:"%s中不能含有特殊字符".sprintf(e.label||"标题"),
errType:2
}:!0:{
msg:"%s不能为空且长度不能超过%s字".sprintf(e.label||"标题",a),
errType:1
};
},l.templateContent=function(e){
var r=l.content(e);
if(r!==!0)return r;
var a=e.content||"";
return a?!0:{
msg:"正文必须有内容",
errType:100
};
},l.content=function(e){
var r=e.content||"",a=e.maxlen||1e7;
if(!o.rangelength(r,[0,a]))return{
msg:"正文总大小不得超过%sM字节".sprintf(a/1e6),
errType:1
};
if(!o.rangelength(r.text(),[0,b]))return{
msg:"正文不能超过%s字，请删减部分内容后重试".sprintf(b),
errType:2
};
var s=$("<div>").html(r);
return e.editor.checkPlugins(s)?!0:{
msg:"多媒体插件校验出错",
errType:4
};
},l.contentStrict=function(e){
var r=e.content||"",a=r.text()||"";
if(!a)return{
msg:"正文必须有文字，请在正文中至少输入1个汉字后重试",
errType:3
};
if(!o.rangelength(a,[1,b]))return{
msg:"正文不能超过%s字，请删减部分内容后重试".sprintf(b),
errType:2
};
var s=e.maxlen||1e7;
if(!o.rangelength(r,[1,s]))return{
msg:"正文总大小不得超过%sM字节".sprintf(s/1e6),
errType:1
};
var t=$("<div>").html(r);
return e.editor.checkPlugins(t)?!0:{
msg:"多媒体插件校验出错",
errType:4
};
},{
articleRetCode:t,
validate:r,
waitAsynAction:a,
changeRemoteImgUrl:s,
eq:c
};
});define("common/wx/media/previewDialog.js",["common/wx/popup.js","media/template_common.js","media/media_cgi.js","tpl/media/appmsg_edit/previewDialog.html.js","common/wx/Tips.js","biz_web/lib/store.js"],function(e){
"use strict";
e("common/wx/popup.js");
var t=e("media/template_common.js"),i=e("media/media_cgi.js"),n=e("tpl/media/appmsg_edit/previewDialog.html.js"),s=e("common/wx/Tips.js"),c=e("biz_web/lib/store.js"),o={
cacheKey:"previewAccounts",
uin:window.wx&&window.wx.data&&window.wx.data.uin?window.wx.data.uin:""
},r=function(e){
this._o={
appmsgid:"",
AppMsgId:"",
tpl:n,
type:1,
hasConfirmed:!1,
selectFun:null,
uin:"",
token:"",
nickname:""
},this._g={
rememberAccounts:[],
original_type:0,
word:"",
vObj:null,
vArea:null
},this._extend(e),this._init();
};
return r.prototype={
_extend:function(e){
for(var t in e)this._o[t]=e[t];
},
_init:function(){
var e=this._o,t=this._g;
1==e.type?t.word="图文模版":2==e.type&&(t.word="图文消息"),e.appmsgid||(e.appmsgid=e.AppMsgId),
e.AppMsgId||(e.AppMsgId=e.appmsgid),this._initCache(),this._initDialog();
},
_initCache:function(){
var e=this,t=c.get(o.uin+o.cacheKey);
if(t)try{
e._g.rememberAccounts=t.split("|");
}catch(i){
e._g.rememberAccounts=[];
}
},
_cache:function(e){
var t=this._g,i=[];
t.rememberAccounts.each(function(t){
t!=e&&i.push(t);
}),t.rememberAccounts=i,t.rememberAccounts.length<3?t.rememberAccounts.push(e):(t.rememberAccounts.shift(),
t.rememberAccounts[2]=e),c.set(o.uin+o.cacheKey,t.rememberAccounts.join("|"));
},
_initDialog:function(){
var e=this,n=this._o,c=this._g,o={
appmsgid:n.appmsgid,
AppMsgId:n.AppMsgId
};
c.$popup=$(wx.T(n.tpl,{
label:"请输入微信号，此%s将发送至该微信号预览。".sprintf(c.word),
accounts:c.rememberAccounts,
uin:n.uin,
token:n.token,
nickname:n.nickname
})).popup({
title:"发送预览",
className:"simple label_block",
onHide:function(){
e.destory(this);
},
onOK:function(){
var r=this,a=r.get(),u=a.find(".frm_input"),p=a.find(".js_preview_dialog_content"),m=u.val().trim();
if(p.removeClass("with_qrcheck"),a.find(".jsAccountFail").html("").hide(),o.preusername=m,
0==m.length)return $(".jsAccountFail").text("请输入预览的账号").show(),!0;
if(null!=c.vObj&&c.vObj.getCode().trim().length<=0)return s.err("请输入验证码"),c.vObj.focus(),
!0;
var l=a.find(".btn_primary>.js_btn").btn(!1);
o.imgcode=c.vObj&&c.vObj.getCode().trim(),n.hasConfirmed&&(o.confirm=1),s.remove(),
o.is_preview=1;
var d=function(){
e.checkDialogAlive()&&(s.suc("发送预览成功，请留意你的手机微信"),setTimeout(function(){
l.btn(!0);
},500),e._cache(m),e.destory(r));
},h=function(t){
if(e.checkDialogAlive()&&(l.btn(!0),u.focus(),t))switch("undefined"==typeof t.ret&&t.base_resp&&"undefined"!=typeof t.base_resp.ret&&(t.ret=t.base_resp.ret),
!t||"-6"!=t.ret&&"-8"!=t.ret||(c.vArea=a.find(".js_verifycode"),c.vObj=c.vArea.html("").removeClass("dn").verifycode().data("verifycode"),
c.vObj.focus()),t&&t.antispam!==!1&&"function"==typeof n.selectFun&&n.selectFun(1*t.msg),
+t.ret){
case 15801:
case 15802:
case 15803:
case 15804:
case 15805:
case 15806:
Dialog.show({
type:"warn",
msg:t.remind_wording||"你所编辑的图文消息可能含有违反微信公众平台平台协议、相关法律法规和政策的内容|你可以继续保存或发布该图文消息，若保存或发布后，经核实涉嫌含有上述相关内容的，将可能被作删除、屏蔽等处理。<br/>                                <a href='https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN&token=2056316619' target='_blank'>对应规则</a>",
buttons:[{
text:"继续发送",
click:function(){
this.remove(),n.hasConfirmed=!0,l.trigger("click");
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

case 64503:
p.addClass("with_qrcheck"),a.find(".jsAccountFail").html(t.word||"").show();
break;

default:
a.find(".jsAccountFail").html(t.word||"").show();
}
};
return 2==n.type?i.appmsg.preview(!0,10,o,d,h):t.preview({
postData:o,
onSuccess:d,
onError:h
}),!0;
}
}),this._initEvent();
},
_initEvent:function(){
var e=this._g,t=this._g.$popup;
t.find(".jsAccount").click(function(){
$(this).hasClass("selected")?($(this).removeClass("selected"),$(".jsAccountInput").val("")):($(this).addClass("selected"),
$(".jsAccountInput").val($(this).data("value")));
}),t.find(".jsAccountInput").keyup(function(e){
$(".jsAccountFail").hide(),$(".jsAccount").removeClass("selected");
var t="which"in e?e.which:e.keyCode;
13==t&&$(this).parents(".dialog").find("button:eq(0)").trigger("click");
}).placeholder(),t.find(".jsAccountDel").click(function(){
var t=$(this).data("index");
return e.rememberAccounts.length>t&&e.rememberAccounts.splice(t,1),$(this).parent().remove(),
c.set(o.uin+o.cacheKey,e.rememberAccounts.join("|")),!1;
}),e.rememberAccounts.length>0&&t.find(".jsAccount").last().click();
},
checkDialogAlive:function(){
return this._g.$popup?!0:!1;
},
destory:function(e){
e&&e.remove(),this._g.$popup=null,this._g.$vObj=null,this._g.$vArea=null,this._o.selectFun=null;
}
},r;
});define("tpl/tooltip.html.js", [], function(e, t, n) {
return '<div class="tooltip">\n    <div class="tooltip_inner">{content}</div>\n    <i class="tooltip_arrow"></i>\n</div>\n';
});define("common/wx/mpEditor/plugin/cropimg.js",["common/lib/jquery.Jcrop.js","common/wx/dialog.js","common/wx/media/imageDialog.js","common/wx/Tips.js","common/wx/mpEditor/common/cropImgCgi.js","common/wx/mpEditor/plugin/wheelEventAdapter.js","common/wx/media/cropimg.js","tpl/mpEditor/plugin/crop_img.html.js"],function(t){
"use strict";
function e(t){
this._o={
coverWheelScroll:!1,
ratio:1,
selectRatio:0,
wheelStep:.2,
toolbarOffsetTop:10
},this._extend(t),this.uiUtils=null,this.ueditor=null,this.editor=null,this.domUtils=null,
this.event={},this.bindEventCache=[];
}
t("common/lib/jquery.Jcrop.js");
var o=t("common/wx/dialog.js"),i=t("common/wx/media/imageDialog.js"),r=t("common/wx/Tips.js"),n=t("common/wx/mpEditor/common/cropImgCgi.js"),a=t("common/wx/mpEditor/plugin/wheelEventAdapter.js"),s=(t("common/wx/media/cropimg.js"),
t("tpl/mpEditor/plugin/crop_img.html.js"));
return e.prototype={
_extend:function(t){
for(var e in t)this._o[e]=t[e];
},
getName:function(){
return"cropimg";
},
beforeEditorDestory:function(){
this.destory();
},
beforeDefineCommand:function(t,e){
this.editor=e,this.ueditor=t,this.uiUtils=UE.ui.uiUtils,this.domUtils=e.getDomUtils(),
this.initCacheData(),this.defineEvent();
},
initCacheData:function(){
this._g={
fireAdjustHeight:!1,
replaceOpt:{},
type:"crop_img",
targetUrl:"",
minZoomPx:20,
maxZoomPx:3e3,
minZoom:1,
maxZoom:1,
unchangeableRatio:!1,
commiting:!1,
resizerDragId:-1,
resizerMouseStartPos:{
x:0,
y:0
},
trackMouseStartPos:{
x:0,
y:0
},
curSelectionPos:{},
bodyPaddingLeft:0,
curZoom:1,
target:null,
_ImgCropper:null,
$cropWrp:null,
$cancelBtn:null,
$okBtn:null,
hasRecoverTarget:!1,
oriImgW:0,
oriImgH:0
};
},
defineEvent:function(){
var t=this,e=this._o,o=(this.domUtils,100);
this.editor.getBrowser().mac&&(o=30),this.event={
cancelCrop:function(){
var e=t._g.replaceOpt,o=t.uiUtils.getClientRect(t._g.target);
t.recoverTarget({
copyright_status:e.copyright_status,
url:e.oriSrc,
scaledW:t.px(e.startW),
scaledH:t.px(e.startH),
selectionX1:e.selectionX1,
selectionY1:e.selectionY1,
selectionX2:e.selectionX2,
selectionY2:e.selectionY2
});
var i=t.uiUtils.getClientRect(t._g.targetClone),r=Math.max(o.left-i.left,0),n=Math.max(o.top-i.top,0),a=e.selectionX2-e.selectionX1+r,s=e.selectionY2-e.selectionY1+n;
t._g.targetClone.setAttribute("data-cropselx1",t.px(r)),t._g.targetClone.setAttribute("data-cropselx2",t.px(a)),
t._g.targetClone.setAttribute("data-cropsely1",t.px(n)),t._g.targetClone.setAttribute("data-cropsely2",t.px(s)),
t.destory();
},
destory:function(e){
t.destory(e);
},
mousewheelEvent:function(o){
var i=a.eventAdapter(o);
return i&&i.myWheel?(t.setZoom(t._g.curZoom-e.wheelStep*i.myWheel),o.stopPropagation?(o.stopPropagation(),
o.preventDefault()):o.cancelBubble=!0,!1):void 0;
},
updateCoverPos:function(){
t.showCover();
},
dragBarEvent:function(e){
switch(e.type){
case"mousedown":
t.updateDotPos(e.pageX),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.dragBarMoveEvent
}),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.dragBarEvent
});
break;

case"mouseup":
t.updateDotPos(e.pageX),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.dragBarMoveEvent
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.dragBarEvent
});
}
},
dragBarMoveEvent:function(e){
t.updateDotPos(e.pageX),t.removeDocRange();
},
updateCropWrpPos:function(){
t.attachTo();
},
trackEvent:function(e){
switch(e.type){
case"mousedown":
var o=t._g,i=e.target||e.srcElement;
-1==o.resizerDragId&&-1==i.className.indexOf("edui-editor-imagescale-hand")&&(o.trackMouseStartPos.x=e.pageX,
o.trackMouseStartPos.y=e.pageY,t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.trackMoveEvent
}),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.trackEvent
}));
break;

case"mouseup":
var o=t._g;
-1==o.resizerDragId&&t.updateCropImgPos({
x:e.pageX-o.trackMouseStartPos.x,
y:e.pageY-o.trackMouseStartPos.y
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.trackMoveEvent
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.trackEvent
});
}
},
trackMoveEvent:function(e){
var o=t._g;
-1==o.resizerDragId&&(t.updateCropImgPos({
x:e.pageX-o.trackMouseStartPos.x,
y:e.pageY-o.trackMouseStartPos.y
}),o.trackMouseStartPos.x=e.pageX,o.trackMouseStartPos.y=e.pageY,t.removeDocRange());
},
stopEvent:function(t){
return t.stopPropagation?(t.stopPropagation(),t.preventDefault()):t.cancelBubble=!0,
!1;
},
editorScrollEvent:function(){
t.attachTo();
},
coverWheelEvent:function(e){
var i=a.eventAdapter(e);
if(i&&i.myWheel){
var r=t.ueditor.window;
r.scrollTo(0,r.scrollY+i.myWheel*o),t.attachTo();
}
},
resizerEvent:function(e){
switch(e.type){
case"mousedown":
var o=t._g,i=e.target||e.srcElement;
-1==o.resizerDragId&&-1!=i.className.indexOf("edui-editor-imagescale-hand")&&(o.resizerDragId=i.className.slice(-1),
o.resizerMouseStartPos.x=e.pageX,o.resizerMouseStartPos.y=e.pageY,t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.resizerMoveEvent
}),t.bindEventInterface({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.resizerEvent
}));
break;

case"mouseup":
var o=t._g;
-1!=o.resizerDragId&&(t.updateContainerStyle(o.resizerDragId,{
x:e.pageX-o.resizerMouseStartPos.x,
y:e.pageY-o.resizerMouseStartPos.y
}),o.resizerDragId=-1),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mousemove",
fun:t.event.resizerMoveEvent
}),t.unbindSpecifyEvent({
type:"domUtils",
dom:document,
eventName:"mouseup",
fun:t.event.resizerEvent
});
}
},
resizerMoveEvent:function(e){
var o=t._g;
-1!=o.resizerDragId&&(t.updateContainerStyle(o.resizerDragId,{
x:e.pageX-o.resizerMouseStartPos.x,
y:e.pageY-o.resizerMouseStartPos.y
}),t.removeDocRange(),o.resizerMouseStartPos.x=e.pageX,o.resizerMouseStartPos.y=e.pageY);
},
complete:function(e){
if(t._g.commiting!==!0){
t._g.commiting=!0,t._g.$okBtn.btn(!1);
var o=t._g._ImgCropper.tellSelect(),i=t._g._ImgCropper.getScaleFactor(),a=t._g.cropUi.botImg.width()*i[0],s=t._g.cropUi.botImg.height()*i[1];
if(n.getUrl({
imgurl:t._g.targetUrl,
x1:o.x/a,
y1:o.y/s,
x2:o.x2/a,
y2:o.y2/s,
onerror:function(){
t._g._ImgCropper&&(r.err("系统繁忙，请稍后再试"),t._g.commiting=!1,t._g.$okBtn.btn(!0));
},
onsuccess:function(e){
if(t._g._ImgCropper){
t._g.commiting=!1,t._g.$okBtn.btn(!0);
var r=o.x2-o.x,n=o.y2-o.y;
t.recoverTarget({
oriSrc:t._g.targetUrl,
url:e.url,
w:t.px(a),
h:t.px(s),
x1:o.x,
x2:o.x2,
y1:o.y,
y2:o.y2,
scaledW:t.px(r/i[0]),
scaledH:t.px(n/i[1])
}),t.destory();
}
}
}),e&&e.preventDefault){
var c=e.target||e.srcElement;
c&&c.ownerDocument===document&&e.preventDefault();
}
}
}
};
},
initCropFromReplace:function(t,e,o){
var i=this,r=t.getAttribute("data-cropselx2");
if(r){
i._g.type="img_replace";
var n=t.getAttribute("data-cropselx1"),a=t.getAttribute("data-cropsely1"),s=t.getAttribute("data-cropsely2");
i.getStartWH({
targetW:r-n,
targetH:s-a,
url:t.src,
onSuccess:function(e){
var o=$(t).height(),c=i.domUtils.getXY(t),p=i.ueditor.body.lastChild,l=i.domUtils.getXY(p),m=$(p).height(),d=e.startH-o-(l.y+m-(c.y+o))+100;
if(d>0){
var h=$(i.ueditor.body).height();
i.ueditor.setHeight(h+d,!0),i._g.fireAdjustHeight=!0;
}
i.initCropOptions(t,{
oriSrc:t.src,
startW:e.startW,
startH:e.startH,
selectionX1:n,
selectionY1:a,
selectionX2:r,
selectionY2:s
});
}
});
}else i.initCropOptions(t,e,o);
},
initCropOptions:function(t,e,o){
var i=this,r=this.editor;
r.fireEvent("start_crop_img"),$(document.body).addClass("img_editing"),r.disableToolbar();
try{
i.ueditor.selection.getNative().removeAllRanges();
}catch(n){}
if(o)for(var a in o)"undefined"!=typeof i._g[a]&&(i._g[a]=o[a]);
var s,c,p,l,m,d,h,g,u,v,f;
if(e&&e.oriSrc?(i._g.replaceOpt=e,s=e.oriSrc,d=i.px(e.selectionX1),h=i.px(e.selectionX2),
g=i.px(e.selectionY1),u=i.px(e.selectionY2),v=i.px(e.startW),f=i.px(e.startH)):(s=t.getAttribute("data-croporisrc"),
c=t.getAttribute("data-cropx1"),p=t.getAttribute("data-cropy1"),l=t.getAttribute("data-cropx2"),
m=t.getAttribute("data-cropy2")),s){
var x=new Image;
x.onload=function(){
this.onload=null,this.onerror=null,i.init(t,{
oriSrc:s,
trueW:this.naturalWidth||this.width,
trueH:this.naturalHeight||this.height,
x1:c,
x2:l,
y1:p,
y2:m,
selectionX1:d,
selectionX2:h,
selectionY1:g,
selectionY2:u,
startW:v,
startH:f
});
},x.onerror=function(){
this.onload=null,this.onerror=null,i.init(t);
},x.src=s;
}else i.init(t);
},
addListener:function(t){
var e=this;
t.addListener("crop_img",function(t,i,r,n){
i&&i.ownerDocument&&(i.ownerDocument.defaultView||i.ownerDocument.parentWindow)&&("2"==i.getAttribute("data-copyright")?o.show({
title:"温馨提示",
type:"info",
msg:"裁剪原创图片会使原创标志失效，确定裁剪？",
buttons:[{
text:"确定",
click:function(){
e.initCropFromReplace(i,r,n),this.remove();
}
},{
text:"取消",
type:"normal",
click:function(){
this.remove();
}
}]
}):e.initCropFromReplace(i,r,n));
}),t.addListener("img_replace",function(t,o){
e.showImgDialog(o);
});
},
init:function(t,e){
{
var o=this._g;
this._o;
}
o.target=t,o.targetClone=t.cloneNode(!0),o.targetUrl=e&&e.oriSrc?e.oriSrc:o.target.src,
this.setOriWh(e),this.setMinMaxZoom(),o.bodyPaddingLeft=parseInt(this.domUtils.getComputedStyle(this.ueditor.document.body,"padding-left"))||0,
o.$cropWrp=$("<div>").html(wx.T(s,{
url:o.target.src,
zIndex:this.ueditor.options.zIndex,
type:o.type
})).find(".js_crop_img_wrap"),this.ueditor.ui.getDom().appendChild(o.$cropWrp[0]),
o.$cropArea=o.$cropWrp.find(".js_crop_area"),this.initCrop(e),this.hideTarget();
},
hideTarget:function(){
$(this._g.target).css({
visibility:"hidden"
});
},
getStartWH:function(t){
var e=t.url,o=t.targetW,i=t.targetH,r=new Image;
r.onload=function(){
this.onload=null,this.onerror=null;
var e=this.naturalWidth||this.width,r=this.naturalHeight||this.height,n=o,a=r/e*n;
i>a&&(a=i,n=e/r*a),"function"==typeof t.onSuccess&&t.onSuccess({
startH:a,
startW:n
});
},r.onerror=function(){
this.onload=null,this.onerror=null,"function"==typeof t.onError&&t.onError();
},r.src=e;
},
showImgDialog:function(t){
var e=this;
this.editor.fireEvent("handleWinScroll",!1),this.editor.fireEvent("before_show_img_replace_dialog"),
i({
maxSelect:1,
doselected:!0,
uploadGroupId:3,
completeUploadMinSelectNum:1,
onOK:function(o){
var i=this,n=$(t),a=n.width(),s=n.height();
e.getStartWH({
targetW:a,
targetH:s,
url:o[0].url,
onError:function(){
r.err("图片加载失败，请稍后再试");
},
onSuccess:function(r){
i.destroy(),e.editor.fireEvent("handleWinScroll",!0),e.editor.fireEvent("after_close_show_img_replace_dialog"),
e._g.target=t,e._g.targetClone=e._g.target.cloneNode(!0),e._g.replaceOpt={
copyright_status:o[0].copyright_status,
oriSrc:o[0].url,
startW:e.px(r.startW),
startH:e.px(r.startH),
selectionX1:0,
selectionY1:0,
selectionX2:a,
selectionY2:s
},e.event.cancelCrop();
}
});
},
onHide:function(){
this.destroy(),e.editor.fireEvent("handleWinScroll",!0),e.editor.fireEvent("after_close_show_img_replace_dialog");
}
});
},
updateContainerStyle:function(t,e){
var o=this._g,i=(this._o,o.cropUi.botImg),r=i.width(),n=i.height(),a=this.px(parseFloat(i[0].style.left||0)),s=this.px(parseFloat(i[0].style.top||0)),c=a,p=s,l=c+r,m=p+n,d=c,h=p,g=l,u=m,v=1,f=0,x=0,y=this._g.curSelectionPos;
switch(1*t){
case 0:
d=this.px(c+e.x),d>y.x&&(d=y.x),v=Math.max(Math.min(o.maxZoom,(g-d)/o.oriImgW),o.minZoom),
d=this.px(g-v*o.oriImgW),h=this.px(u-o.oriImgH/o.oriImgW*(g-d)),h>y.y&&(h=y.y),v=Math.max(Math.min(o.maxZoom,(u-h)/o.oriImgH),o.minZoom),
h=this.px(u-v*o.oriImgH),d=this.px(g-o.oriImgW/o.oriImgH*(u-h));
break;

case 2:
g=this.px(l+e.x),g<y.x2&&(g=y.x2),v=Math.max(Math.min(o.maxZoom,(g-d)/o.oriImgW),o.minZoom),
g=this.px(d+v*o.oriImgW),h=this.px(u-o.oriImgH/o.oriImgW*(g-d)),h>y.y&&(h=y.y),v=Math.max(Math.min(o.maxZoom,(u-h)/o.oriImgH),o.minZoom),
h=this.px(u-v*o.oriImgH),g=this.px(d+o.oriImgW/o.oriImgH*(u-h));
break;

case 5:
d=this.px(c+e.x),d>y.x&&(d=y.x),v=Math.max(Math.min(o.maxZoom,(g-d)/o.oriImgW),o.minZoom),
d=this.px(g-v*o.oriImgW),u=this.px(h+o.oriImgH/o.oriImgW*(g-d)),u<y.y2&&(u=y.y2),
v=Math.max(Math.min(o.maxZoom,(u-h)/o.oriImgH),o.minZoom),u=this.px(h+v*o.oriImgH),
d=this.px(g-o.oriImgW/o.oriImgH*(u-h));
break;

case 7:
g=this.px(l+e.x),g<y.x2&&(g=y.x2),v=Math.max(Math.min(o.maxZoom,(g-d)/o.oriImgW),o.minZoom),
g=this.px(d+v*o.oriImgW),u=this.px(h+o.oriImgH/o.oriImgW*(g-d)),u<y.y2&&(u=y.y2),
v=Math.max(Math.min(o.maxZoom,(u-h)/o.oriImgH),o.minZoom),u=this.px(h+v*o.oriImgH),
g=this.px(d+o.oriImgW/o.oriImgH*(u-h));
}
f=d-c,x=h-p;
this.updateCropStyle({
h:u-h,
w:g-d,
offsetX:f,
offsetY:x
});
},
updateCropStyle:function(t){
var e=this._g,o=e.cropUi,i=o.holder,r=t.w,n=t.h,a=t.offsetX,s=t.offsetY,c=i.width(),p=i.height(),l=this.px(parseFloat(i[0].style.left||0)),m=this.px(parseFloat(i[0].style.top||0)),d=this.px(parseFloat(o.selection[0].style.left||0)),h=this.px(parseFloat(o.selection[0].style.top||0)),g=d-a,u=h-s,v=l+a,f=m+s,x=e._ImgCropper.getScaleFactor(),y=c*x[0]/r,_=p*x[1]/n,I=e._ImgCropper.getOptions(),b=I.boundary;
e.curZoom=r/e.oriImgW,i.css({
width:r+"px",
height:n+"px",
left:v+"px",
top:f+"px"
}),e.curSelectionPos.x-=a,e.curSelectionPos.x2-=a,e.curSelectionPos.y-=s,e.curSelectionPos.y2-=s,
o.selection.css({
left:e.curSelectionPos.x+"px",
top:e.curSelectionPos.y+"px"
}),o.topImg.css({
width:r+"px",
height:n+"px",
left:-g+"px",
top:-u+"px"
}),o.botImg.width(r).height(n),o.trk.width(r+2*b).height(n+2*b),this.updateImgScaleStyle();
var E=e.$cropArea.width(),S=e.$cropArea.height();
e._ImgCropper.setOptions({
maxBound:[-v,-f,-v+E,-f+S]
},!0),e._ImgCropper.changeImgScale({
selectionPos:[e.curSelectionPos.x,e.curSelectionPos.y,e.curSelectionPos.x2,e.curSelectionPos.y2],
xscale:y,
yscale:_
}),this.changeProgess(e.curZoom);
},
updateImgScaleStyle:function(){
var t=this._g,e=t.cropUi.holder,o=t.cropUi.botImg,i=this.px(parseFloat(e[0].style.left||0)),r=this.px(parseFloat(e[0].style.top||0)),n=this.px(parseFloat(o[0].style.left||0)),a=this.px(parseFloat(o[0].style.top||0));
t.$imgScale.css({
height:o.height()+"px",
width:o.width()+"px",
left:i+n+"px",
top:r+a+"px"
}),t.$imgScaleCover.css({
height:o.height()+"px",
width:o.width()+"px",
left:i+n+"px",
top:r+a+"px"
});
},
removeDocRange:function(){
try{
new UE.dom.Selection(document).getNative().removeAllRanges();
}catch(t){}
},
recoverTarget:function(t){
var e=this,o=this._g;
if(o.target&&!o.hasRecoverTarget){
o.hasRecoverTarget=!0;
var i=o.target.parentNode;
if(i&&(i.insertBefore(o.targetClone,o.target),i.removeChild(o.target)),t&&t.url){
this.editor.fireEvent("saveScene"),o.fireAdjustHeight=!1,o.targetClone.src=t.url;
for(var r=$(o.targetClone),n=[{
key:"data-croporisrc",
val:t.oriSrc
},{
key:"data-cropx1",
val:t.x1
},{
key:"data-cropx2",
val:t.x2
},{
key:"data-cropy1",
val:t.y1
},{
key:"data-cropy2",
val:t.y2
},{
key:"data-cropselx1",
val:"undefined"!=typeof t.selectionX1?this.px(t.selectionX1):void 0
},{
key:"data-cropselx2",
val:"undefined"!=typeof t.selectionX2?this.px(t.selectionX2):void 0
},{
key:"data-cropsely1",
val:"undefined"!=typeof t.selectionY1?this.px(t.selectionY1):void 0
},{
key:"data-cropsely2",
val:"undefined"!=typeof t.selectionY2?this.px(t.selectionY2):void 0
},{
key:"data-copyright",
val:t.copyright_status
}],a=0,s=n.length;s>a;a++){
var c=n[a];
"undefined"!=typeof c.val?r.attr(c.key,c.val):o.targetClone.removeAttribute(c.key);
}
var p=t.scaledW,l=t.scaledH;
"undefined"!=t.scaledW&&(p=Math.min($(e.ueditor.body).width(),t.scaledW),l=e.px(t.scaledH/t.scaledW*p),
o.targetClone.style.width=p+"px"),"undefined"!=t.scaledH&&(o.targetClone.style.height=l+"px"),
o.targetClone.removeAttribute("data-ratio"),o.targetClone.removeAttribute("data-w"),
o.targetClone.removeAttribute("width"),o.targetClone.removeAttribute("height"),e.ueditor.fireEvent("draft_force_save");
}
setTimeout(function(t,e,o,i){
return function(){
try{
t.focus(),e.selection.getRange().selectNode(t).select(),$(document.body).removeClass("img_editing"),
o.enableToolbar(),i&&(e.fireEvent("saveScene"),e.fireEvent("afterCropImg","",[t]),
e.fireEvent("end_crop_img contentchange"),e.fireEvent("selectionchange",!0));
}catch(r){}
};
}(o.targetClone,e.ueditor,e.editor,t),0);
}
},
updateToolbarPos:function(){
if(this._g.$toolbar){
var t=this._g.curSelectionPos,e=parseFloat(this._g.cropUi.holder[0].style.top||0),o=this.px(t.y+t.h+e+this._o.toolbarOffsetTop);
this._g.$toolbar[0].style.top=o+"px";
}
},
setMinMaxZoom:function(){
var t=this._g,e=Math.max(t.oriImgH,t.oriImgW),o=Math.min(t.oriImgH,t.oriImgW);
t.minZoomPx=Math.min(o,t.minZoomPx),t.maxZoomPx=Math.max(e,t.maxZoomPx),t.minZoom=t.minZoomPx/o,
t.maxZoom=t.maxZoomPx/e;
},
setOriWh:function(t){
var e=this._g,o=$(e.target),i=e.target.style.width||"",r=e.target.style.height||"";
if(i="auto"==i||i.indexOf("%")>=0||!parseFloat(i)?o.width():parseFloat(i),r="auto"==r||r.indexOf("%")>=0||!parseFloat(r)?o.height():parseFloat(r),
r=this.px(r),i=this.px(i),t){
var n,a;
"undefined"!=typeof t.startW&&"undefined"!=typeof t.startH?(n=t.trueW/t.startW,a=t.trueH/t.startH,
t.x1=t.selectionX1*n,t.x2=t.selectionX2*n,t.y1=t.selectionY1*a,t.y2=t.selectionY2*a):(n=(t.x2-t.x1)/i,
a=(t.y2-t.y1)/r,t.startW=this.px(t.trueW/n),t.startH=this.px(t.trueH/t.trueW*(t.trueW/n)),
t.selectionX1=this.px(t.x1/n),t.selectionX2=this.px(t.x2/n),t.selectionY1=this.px(t.y1/a),
t.selectionY2=this.px(t.y2/a)),e.oriImgW=t.startW,e.oriImgH=t.startH;
}else e.oriImgW=i,e.oriImgH=r;
},
initCrop:function(t){
var e,o=this,i=this._g,r=this._o,n=$(i.target);
i.unchangeableRatio&&(e=n.data("ratio"),e=e?1/e:r.ratio),i.$cropWrp.find("img").Jcrop({
allowSelect:!1,
createHandles:["nw","ne","se","sw"],
keySupport:!1,
aspectRatio:i.unchangeableRatio?e:null,
boxWidth:i.oriImgW,
boxHeight:i.oriImgH,
minSize:[10,10],
onChange:function(t,e){
i.curSelectionPos=e,o.updateToolbarPos();
}
},function(){
i._ImgCropper=this,i._ImgCropper.setImage(i.targetUrl,function(){
if(t)i._ImgCropper.setSelect("img_replace"==i.type?[t.x1,t.y1,t.x2,t.y2]:[0,0,t.x2-t.x1,t.y2-t.y1]);else{
var e=i._ImgCropper.getBounds();
i._ImgCropper.setSelect([e[0]*r.selectRatio,e[1]*r.selectRatio,e[0]*(1-r.selectRatio),e[1]*(1-r.selectRatio)]);
}
o.cacheDom(),i.cropUi.selection.find(".jcrop-handle").css({
width:"7px",
height:"7px"
}),o.initEvent(),o.attachTo({
changeHolder:!0
}),o.changeProgess(i.curZoom),t&&"crop_img"==i.type&&o.updateCropImgPos({
x:-t.selectionX1,
y:-t.selectionY1
}),o.updateToolbarPos();
});
});
},
isInBotImgVisibleArea:function(t,e){
var o=this._g.cropUi.botImg,i=o.width(),r=o.height(),n=this.domUtils.getXY(o[0]),a=this._g.$cropArea,s=a.width(),c=a.height(),p=this.domUtils.getXY(a[0]),l=Math.max(n.x,p.x),m=Math.max(n.y,p.y),d=Math.min(n.x+i,p.x+s),h=Math.min(n.y+r,p.y+c);
return t>=l&&e>=m&&d>=t&&h>=e?!0:!1;
},
updateCropImgPos:function(t){
var e=this._g,o=e.cropUi.botImg,i=e.cropUi.topImg,r=o.width(),n=o.height(),a=this.px(parseFloat(o[0].style.left||0)),s=this.px(parseFloat(i[0].style.left||0)),c=this.px(parseFloat(o[0].style.top||0)),p=this.px(parseFloat(i[0].style.top||0)),l=this.fixCoorBycurSelectionPos({
x1:a+t.x,
y1:c+t.y,
x2:a+t.x+r,
y2:c+t.y+n
}),m=l.x1-a,d=l.y1-c;
o[0].style.left=l.x1+"px",o[0].style.top=l.y1+"px",i[0].style.left=s+m+"px",i[0].style.top=p+d+"px",
this.updateImgScaleStyle(),e._ImgCropper.updateOffset({
offsetX:l.x1,
offsetY:l.y1
});
},
fixCoorBycurSelectionPos:function(t){
var e=this._g.curSelectionPos,o=this.px(t.x1),i=this.px(t.x2),r=this.px(t.y1),n=this.px(t.y2);
return o>e.x?(i-=o-e.x,o=e.x):i<e.x2&&(o+=e.x2-i,i=e.x2),r>e.y?(n-=r-e.y,r=e.y):n<e.y2&&(r+=e.y2-n,
n=e.y2),{
x1:o,
x2:i,
y1:r,
y2:n
};
},
px:function(t){
return Math.round(t);
},
setZoom:function(t){
var e=this._g,o=(this._o,e.cropUi);
t=Math.max(t,e.minZoom),t=Math.min(t,e.maxZoom);
var i=this.px(e.oriImgW*t),r=this.px(e.oriImgH*t),n=o.holder,a=n.width(),s=n.height(),c=this.px((a-i)/2),p=this.px((s-r)/2);
if(i=a-2*c,r=s-2*p,t<e.curZoom){
var l=e.curSelectionPos,m=o.botImg,d=this.px(parseFloat(m[0].style.left||0)),h=this.px(parseFloat(m[0].style.top||0)),g=d+c,u=h+p,v=g+i,f=u+r;
if(g>l.x){
v+=g-l.x,g=l.x;
var x=this.px((e.oriImgH/e.oriImgW*(v-g)-(f-u))/2);
u-=x,f+=x;
}
if(v<l.x2){
g-=l.x2-v,v=l.x2;
var x=this.px((e.oriImgH/e.oriImgW*(v-g)-(f-u))/2);
u-=x,f+=x;
}
if(u>l.y){
f+=u-l.y,u=l.y;
var x=this.px((e.oriImgW/e.oriImgH*(f-u)-(v-g))/2);
g-=x,v+=x;
}
if(f<l.y2){
u-=l.y2-f,f=l.y2;
var x=this.px((e.oriImgW/e.oriImgH*(f-u)-(v-g))/2);
g-=x,v+=x;
}
i=v-g,r=f-u,c=this.px((a-i)/2),p=this.px((s-r)/2),i=a-2*c,r=s-2*p,e.curZoom=i/e.oriImgW;
}else e.curZoom=t;
this.updateCropStyle({
w:i,
h:r,
offsetX:c,
offsetY:p
});
},
changeProgess:function(t){
var e=this._g,o=(t-e.minZoom)/(e.maxZoom-e.minZoom)*100;
this.updateDragBarStyle(o);
},
updateDragBarStyle:function(t){
this._g.$progress[0].style.width=t+"%",this._g.$dot[0].style.left=t+"%";
},
updateDotPos:function(t){
var e=(this._o,this._g),o=e.$dragBar.width(),i=this.domUtils.getXY(e.$dragBar[0]).x,r=Math.max(0,Math.min(t-i,o)),n=r/o*100;
this.updateDragBarStyle(n);
var a=n/100*(e.maxZoom-e.minZoom)+e.minZoom;
this.setZoom(a);
},
attachTo:function(t){
var e=this,o=this._g,i=this.domUtils,r=i.getXY(o.target),n=i.getXY(e.ueditor.iframe),a=i.getXY(o.$cropWrp[0].parentNode),s=$(this.ueditor.document.body),c=s.width(),p=10,l=n.y+r.y-e.ueditor.document.body.scrollTop-a.y-p;
if(o.$cropWrp.css({
height:"auto",
width:c,
left:n.x+this._g.bodyPaddingLeft-e.ueditor.document.body.scrollLeft-a.x+"px",
top:l+"px"
}),o.$cropArea.css({
height:$(e.ueditor.body).height()-r.y+"px",
width:c
}),t&&t.changeHolder){
var m=r.x-this._g.bodyPaddingLeft,d=p;
o.cropUi.holder.css({
left:m+"px",
top:d+"px"
}),this.updateImgScaleStyle(),o._ImgCropper.setOptions({
maxBound:[-m,-d,-m+o.$cropArea.width(),-d+o.$cropArea.height()]
},!0);
}
},
cacheDom:function(){
var t=this._g;
t.$cancelBtn=t.$cropWrp.find(".js_cancel"),t.$imgScale=t.$cropWrp.find(".js_img_scale"),
t.$imgScaleCover=t.$cropWrp.find(".js_img_scale_cover"),t.$okBtn=t.$cropWrp.find(".js_ok"),
t.$progress=t.$cropWrp.find(".js_progress"),t.$dot=t.$cropWrp.find(".js_dot"),t.$dragBar=t.$cropWrp.find(".js_drag_bar"),
t.$toolbar=t.$cropWrp.find(".js_tool_bar"),t.cropUi=t._ImgCropper.ui;
},
initEvent:function(){
var t=(this.domUtils,this._g),e=(this.editor,this.event);
this.bindEventInterface({
type:"domUtils",
dom:t.$imgScale[0],
eventName:a.supportEvent,
fun:e.mousewheelEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$imgScale[0],
eventName:"mousedown",
fun:e.resizerEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$imgScale[0],
eventName:"mousedown",
fun:e.trackEvent
}),this._o.coverWheelScroll&&(this.bindEventInterface({
type:"domUtils",
dom:t.$cropWrp[0],
eventName:a.supportEvent,
fun:e.coverWheelEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$cropWrp[0].parentNode,
eventName:a.supportEvent,
fun:e.coverWheelEvent
})),this.bindEventInterface({
type:"editor",
eventName:"scroll",
fun:e.editorScrollEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$cancelBtn[0],
eventName:"click",
fun:e.destory
}),this.bindEventInterface({
type:"domUtils",
dom:t.$okBtn[0],
eventName:"click",
fun:e.complete
}),this.bindEventInterface({
type:"editor",
eventName:"heightChanged",
fun:e.updateCoverPos
}),this.bindEventInterface({
type:"domUtils",
dom:this.ueditor.window,
eventName:"scroll",
fun:e.updateCropWrpPos
}),this.bindEventInterface({
type:"domUtils",
dom:window,
eventName:"scroll",
fun:e.updateCropWrpPos
}),this.bindEventInterface({
type:"domUtils",
dom:t.cropUi.holder[0],
eventName:a.supportEvent,
fun:e.mousewheelEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.$dragBar[0],
eventName:"mousedown",
fun:e.dragBarEvent
}),this.bindEventInterface({
type:"domUtils",
dom:t.cropUi.botImg[0],
eventName:"dragstart",
fun:e.stopEvent
});
},
bindEventInterface:function(t){
"domUtils"==t.type?this.domUtils.on(t.dom,t.eventName,t.fun):"editor"==t.type&&this.editor.addListener(t.eventName,t.fun),
this.bindEventCache.push(t);
},
unbindEventInterface:function(){
if(this.bindEventCache)for(;this.bindEventCache.length>0;){
var t=this.bindEventCache[0];
"domUtils"==t.type?this.domUtils.un(t.dom,t.eventName,t.fun):"editor"==t.type&&this.editor.removeListener(t.eventName,t.fun),
this.bindEventCache.shift();
}
this.bindEventCache=[];
},
unbindSpecifyEvent:function(t){
if(this.bindEventCache&&t)for(var e=0,o=this.bindEventCache.length;o>e;e++){
var i=this.bindEventCache[e];
if(i.type===t.type&&i.eventName===t.eventName&&i.fun===t.fun&&t.dom&&i.dom===t.dom){
"domUtils"==i.type?this.domUtils.un(i.dom,i.eventName,i.fun):"editor"==i.type&&this.editor.removeListener(i.eventName,i.fun),
this.bindEventCache.splice(e,1);
break;
}
}
},
destory:function(){
{
var t=(this.domUtils,this._g);
this.editor,this.event;
}
t.$cropWrp&&t.$cropWrp.remove(),this.unbindEventInterface(),this.recoverTarget(),
this.initCacheData(),t.fireAdjustHeight&&this.editor.fireEvent("adjustheight");
}
},e;
});define("common/wx/mpEditor/plugin/scaleimg.js",["common/wx/mpEditor/plugin/wheelEventAdapter.js"],function(e){
"use strict";
function t(e){
this._o={
wheelScroll:!1
},this._extend(e),this.uiUtils=null,this.editor=null,this.ueditor=null,this.resizer=null,
this.cover=null,this.doc=document,this.prePos={
x:0,
y:0
},this.startPos={
x:0,
y:0
},this.hasInit=!1,this.domUtils=null,this.hasShow=!1,this._g={
minPx:20
};
}
var i=e("common/wx/mpEditor/plugin/wheelEventAdapter.js"),o=[[0,0,-1,-1],[0,0,0,-1],[0,0,1,-1],[0,0,-1,0],[0,0,1,0],[0,0,-1,1],[0,0,0,1],[0,0,1,1]],s=[0,2,5,7],r=!1;
return t.prototype={
_extend:function(e){
if(e)for(var t in e)this._o[t]=e[t];
},
getName:function(){
return"scaleimg";
},
beforeDefineCommand:function(e,t){
var i=e,o=(t.getDomUtils(),t.getBrowser()),s=(UE.dom,this);
this.uiUtils=UE.ui.uiUtils,this.editor=t,o.ie||i.addListener("img_selected",function(e,o,r){
if(!r){
var n=i.selection.getRange();
r=n.getClosedNode();
}
r&&"IMG"==r.tagName&&(s.hasInit||s.init(i,t),s.show(r));
});
},
init:function(e,t){
if(!this.hasInit){
this.hasInit=!0,this.domUtils=t.getDomUtils();
var i=this,o=this.domUtils;
i.ueditor=e,i.startPos=this.prePos={
x:0,
y:0
},i.dragId=-1;
var r=[],n=i.cover=document.createElement("div"),a=i.resizer=document.createElement("div");
n.id=i.ueditor.ui.id+"_imagescale_cover",n.setAttribute("draggable","false"),n.style.cssText="position:absolute;display:none;z-index:"+i.ueditor.options.zIndex+";filter:alpha(opacity=0.01); opacity:0.01;background:#CCC;",
o.on(n,["mousedown","click"],function(e){
i.hide(e);
});
for(var d=0,l=s.length;l>d;d++)r.push('<span draggable="false" class="edui-editor-imagescale-hand'+s[d]+'"></span>');
a.id=i.ueditor.ui.id+"_imagescale",a.className="edui-editor-imagescale",a.setAttribute("draggable","false"),
a.innerHTML=r.join(""),a.style.cssText+=";display:none;border:1px solid #43B548;z-index:"+i.ueditor.options.zIndex+";",
i.ueditor.ui.getDom().appendChild(n),i.ueditor.ui.getDom().appendChild(a),i.initStyle(),
i.initEvents();
}
},
initStyle:function(){
var e=this.editor.getUtils();
e.cssRule("imagescale",".edui-editor-imagescale{display:none;position:absolute;border:1px solid #43B548;cursor:hand;-webkit-box-sizing: content-box;-moz-box-sizing: content-box;box-sizing: content-box;}.edui-editor-imagescale span{position:absolute;width:6px;height:6px;overflow:hidden;font-size:0px;display:block;background-color:#43B548;}.edui-editor-imagescale .edui-editor-imagescale-hand0{cursor:nw-resize;top:0;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand1{cursor:n-resize;top:0;margin-top:-4px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand2{cursor:ne-resize;top:0;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand3{cursor:w-resize;top:50%;margin-top:-4px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand4{cursor:e-resize;top:50%;margin-top:-4px;left:100%;margin-left:-3px;}.edui-editor-imagescale .edui-editor-imagescale-hand5{cursor:sw-resize;top:100%;margin-top:-3px;left:0;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand6{cursor:s-resize;top:100%;margin-top:-3px;left:50%;margin-left:-4px;}.edui-editor-imagescale .edui-editor-imagescale-hand7{cursor:se-resize;top:100%;margin-top:-3px;left:100%;margin-left:-3px;}");
},
initEvents:function(){
var e=this._o,t=this,o=this.ueditor,s=this.domUtils;
t.startPos.x=t.startPos.y=0,t.isDraging=!1;
var n=100;
this.editor.getBrowser().mac&&(n=30);
var a=function(){
var e=arguments[0]||window.event;
if(e&&e.type||(e=arguments[1]||window.event),e&&e.type){
var i=e.keyCode||e.which;
8!=i&&46!=i||!t.target||($(t.target).remove(),t.resetPopup());
}
t.hide(e);
},d=function(e){
var t=e.target||e.srcElement;
!t||void 0!==t.className&&-1!=t.className.indexOf("edui-editor-imagescale")||a(e);
},l=function(){
t.resetPopup();
},p=function(e){
switch(e.type){
case"mousedown":
var i=e.target||e.srcElement;
-1!=i.className.indexOf("edui-editor-imagescale-hand")&&-1==t.dragId&&(t.hidePopup(),
t.dragId=i.className.slice(-1),t.startPos.x=t.prePos.x=e.pageX,t.startPos.y=t.prePos.y=e.pageY,
s.on(t.doc,"mousemove",h));
break;

case"mouseup":
-1!=t.dragId&&(t.updateContainerStyle(t.dragId,{
x:e.pageX-t.prePos.x,
y:e.pageY-t.prePos.y
}),t.updateTargetElement(),t.target.parentNode&&t.attachTo(t.target),t.dragId=-1),
s.un(t.doc,"mousemove",h),r&&(r=!1,t.ueditor.fireEvent("contentchange")),t.popupAttachTo();
}
},h=function(e){
if(-1!=t.dragId){
t.updateContainerStyle(t.dragId,{
x:e.pageX-t.prePos.x,
y:e.pageY-t.prePos.y
}),t.prePos.x=e.pageX,t.prePos.y=e.pageY,r=!0,t.updateTargetElement(),t.hidePopup();
try{
new UE.dom.Selection(t.doc).getNative().removeAllRanges();
}catch(e){}
}
},u=function(e){
-1!=t.dragId&&e.preventDefault();
},c=function(){
t.hasShow&&t.target&&t.attachTo(t.target);
},g=function(){
t.showCover();
},m=function(e){
var s=i.eventAdapter(e);
if(s&&s.myWheel){
var r=o.window;
r.scrollTo(0,r.scrollY+s.myWheel*n),t.attachTo(t.target);
}
};
o.addListener("afterscaleshow",function(){
t.setMinPx(),o.addListener("beforekeydown",a),o.addListener("beforemousedown",d),
o.removeListener("afterselectionchange",l),s.on(o.window,"scroll",c),s.on(window,"scroll",c),
o.addListener("heightChanged",g),s.on(document,"keydown",a),s.on(document,"mousedown",d),
s.on(document,"dragstart",u),s.on(t.resizer,"mousedown",p),s.on(t.doc,"mouseup",p),
e.wheelScroll&&(s.on(t.resizer,i.supportEvent,m),s.on(t.cover,i.supportEvent,m));
}),o.addListener("afterscalehide",function(){
o.removeListener("beforekeydown",a),o.removeListener("beforemousedown",d),o.addListener("afterselectionchange",l),
s.un(o.window,"scroll",c),s.un(window,"scroll",c),o.removeListener("heightChanged",g),
s.un(document,"keydown",a),s.un(document,"mousedown",d),s.un(document,"dragstart",u),
s.un(t.resizer,"mousedown",p),s.un(t.doc,"mouseup",p),e.wheelScroll&&(s.un(t.resizer,i.supportEvent,m),
s.un(t.cover,i.supportEvent,m));
});
},
setMinPx:function(){
var e=$(this.target);
this._g.minPx=Math.min(e.height(),e.width(),this._g.minPx);
},
updateTargetElement:function(){
var e=this,t=this.domUtils;
t.setStyles(e.target,{
width:e.resizer.style.width,
height:e.resizer.style.height
}),e.attachTo(e.target);
},
resetPopup:function(){
this.popupCloseId&&(this.ueditor.fireEvent("reset_common_popup",this.popupCloseId),
this.popupCloseId=null);
},
createPopup:function(){
var e=this.target;
if(e){
this.resetPopup();
var t=this.editor.fireEvent("get_img_popup_html",e);
t&&(this.popupCloseId=Math.random(),this.editor.fireEvent("show_common_popup",e,t,this.popupCloseId));
}
},
hidePopup:function(){
this.editor.fireEvent("hide_common_popup",this.popupCloseId);
},
popupAttachTo:function(){
var e=1/0,t=0,i=0,o=this.uiUtils.getClientRect(this.target),s=$("#bottom_main"),r=this.editor.getDom("toolbarbox");
if(s&&s[0]&&(e=this.uiUtils.getClientRect(s[0]).top),r){
var n=this.uiUtils.getClientRect(r);
t=n.top+n.height;
}
i=this.uiUtils.getClientRect(this.ueditor.iframe).bottom,o.bottom<t||o.top>e||100>i?this.editor.fireEvent("hide_common_popup",this.popupCloseId):this.editor.fireEvent("update_common_popup",this.popupCloseId,!0);
},
updateContainerStyle:function(e,t){
var i,s=this,r=s.resizer;
0!=o[e][0]&&(i=parseInt(r.style.left)+t.x,r.style.left=s._validScaledProp("left",i)+"px"),
0!=o[e][1]&&(i=parseInt(r.style.top)+t.y,r.style.top=s._validScaledProp("top",i)+"px"),
0!=o[e][2]&&(i=r.clientWidth+o[e][2]*t.x,r.style.width=s._validScaledProp("width",i)+"px"),
0!=o[e][3]&&(i=r.clientHeight+o[e][3]*t.y,r.style.height=s._validScaledProp("height",i)+"px");
},
_validScaledProp:function(e,t){
var i=this.resizer,o=document,s=this._g.minPx;
switch(t=isNaN(t)?0:t,e){
case"left":
return 0>t?0:t+i.clientWidth>o.clientWidth?o.clientWidth-i.clientWidth:t;

case"top":
return 0>t?0:t+i.clientHeight>o.clientHeight?o.clientHeight-i.clientHeight:t;

case"width":
return s>=t?s:t+i.offsetLeft>o.clientWidth?o.clientWidth-i.offsetLeft:t;

case"height":
return s>=t?s:t+i.offsetTop>o.clientHeight?o.clientHeight-i.offsetTop:t;
}
},
hideCover:function(){
this.cover.style.display="none";
},
showCover:function(){
var e=this,t=this.domUtils,i=t.getXY(e.ueditor.ui.getDom()),o=t.getXY(e.ueditor.iframe);
t.setStyles(e.cover,{
width:e.ueditor.document.body.offsetWidth+"px",
height:e.ueditor.document.body.offsetHeight+"px",
top:o.y-i.y+"px",
left:o.x-i.x+"px",
position:"absolute",
display:""
});
},
show:function(e){
if(!this.hasShow&&e){
this.hasShow=!0;
{
var t=this;
this.domUtils;
}
this.target=e,t.resizer.style.display="block",this.createPopup(),t.attachTo(),t.showCover(),
t.ueditor.fireEvent("afterscaleshow",t);
try{
t.ueditor.selection.getNative().removeAllRanges();
}catch(i){}
t.ueditor.fireEvent("saveScene");
}
},
hide:function(e){
if(-1==this.dragId){
this.hasShow=!1;
{
var t=this;
this.domUtils;
}
if(t.hideCover(),t.resizer.style.display="none",t.ueditor.fireEvent("afterscalehide",t),
t.ueditor.fireEvent("saveScene"),e&&e.preventDefault){
var i=e.target||e.srcElement;
i&&i.ownerDocument===document&&e.preventDefault();
}
this.target&&(this.target.focus(),t.ueditor.selection.getRange().selectNode(this.target).select()),
setTimeout(function(){
t.resetPopup();
},600);
}
},
attachTo:function(){
var e=this,t=this.domUtils,i=this.resizer,o=this.target,s=t.getXY(o),r=t.getXY(e.ueditor.iframe),n=t.getXY(i.parentNode);
t.setStyles(i,{
width:o.width+"px",
height:o.height+"px",
left:r.x+s.x-e.ueditor.document.body.scrollLeft-n.x-parseInt(i.style.borderLeftWidth)+"px",
top:r.y+s.y-e.ueditor.document.body.scrollTop-n.y-parseInt(i.style.borderTopWidth)+"px"
}),this.showCover(),this.popupAttachTo();
}
},t;
});define("common/wx/mpEditor/plugin/popup.js",[],function(){
"use strict";
function t(t){
this.mpeditor=t,this.editor=t.getUeditor(),this.uiUtils=baidu.editor.ui.uiUtils,
this.domUtils=UE.dom.domUtils,this.init(),this.addEvent();
}
return t.prototype.init=function(){
var t=this,e=t.editor,i=t.mpeditor;
this.popup=new baidu.editor.ui.Popup({
editor:e,
content:"",
className:"edui-bubble",
_execCommand:function(){
e.execCommand.apply(e,arguments),t.showpopup();
},
_execCommandAndHide:function(){
e.execCommand.apply(e,arguments),this.hide(this._closeId);
},
_delRange:function(){
e.fireEvent("saveScene");
var t=$(this._anchorEl),o=t.parent("a");
o.length>0&&(t=o),e.selection.getRange().collapse(!1),t.remove(),this.hide(this._closeId),
e.focus(),e.fireEvent("saveScene"),i.funcPvUvReport("del_img");
},
_cropImg:function(){
this.hide(this._closeId),i.fireEvent("crop_img",this._anchorEl);
},
_imgReplace:function(){
this.hide(this._closeId),i.fireEvent("img_replace",this._anchorEl);
},
_imgAutoWidth:function(t){
e.fireEvent("saveScene");
var o=$(this.getDom("content")),n=o.find(".js_adapt"),s=o.find(".js_canceladapt");
if(t===!0){
var h=$(this._anchorEl),d=h.width(),p=h.height();
this._anchorEl.style.width="100%",h.attr("data-backw",d),h.attr("data-backh",p),
n.hide(),s.show(),i.funcPvUvReport("autowidth");
}else{
var d=this._anchorEl.getAttribute("data-backw"),p=this._anchorEl.getAttribute("data-backh");
d&&p?(this._anchorEl.style.width=d+"px",this._anchorEl.style.height=p+"px"):this._anchorEl.style.width="auto",
this._anchorEl.removeAttribute("data-backw"),this._anchorEl.removeAttribute("data-backh"),
n.show(),s.hide(),i.funcPvUvReport("cancel_autowidth");
}
this._anchorEl.style.height="auto",e.focus(),e.fireEvent("saveScene");
},
getHtmlTpl:function(){
return'<div id="##" class="edui-popup edui_mask_edit_bar %%"> <div id="##_body" class="edui-popup-body"> <iframe style="position:absolute;z-index:-1;left:0;top:0;background-color: transparent;" frameborder="0" width="100%" height="100%" src="javascript:"></iframe> <div class="edui-shadow"></div> <div id="##_content" class="edui-popup-content">'+this.getContentHtmlTpl()+"  </div> </div></div>";
},
showAnchorRect:function(e){
this._doAutoRender();
var i=t.uiUtils.getViewportRect();
this._show();
var o,n,s,h,d=this.fitSize(),p=t.uiUtils.getClientRect(this._anchorEl);
o=this.canSideLeft&&p.right+d.width>i.right&&p.left>d.width,n=this.canSideUp&&p.top+d.height>i.bottom&&p.bottom>d.height,
s=o?p.right-d.width:p.left,h=n?p.top-d.height:p.bottom;
var a=this.getDom();
if(a){
if(e){
var r=$(a).height(),c=$(".js_main_title").height(),u=$(".edui-editor-toolbarbox").height();
h=Math.max(p.top-r,i.top+c+u-r);
}
t.uiUtils.setViewportOffset(a,{
left:s,
top:h
}),this.editor&&(a.style.zIndex=1*this.editor.container.style.zIndex+10,t.uiUtils.getFixedLayer().style.zIndex=a.style.zIndex-1);
}
},
queryAutoHide:function(i){
return i&&i.ownerDocument==e.document&&("img"==i.tagName.toLowerCase()||t.domUtils.findParentByTagName(i,"a",!0))?i!==t.popup.anchorEl:baidu.editor.ui.Popup.prototype.queryAutoHide.call(this,i);
},
justShow:function(e,i){
(!this._closeId||this._closeId&&this._closeId===e)&&this.getDom()&&t.popup.showAnchorRect(i);
},
hide:function(t){
(!this._closeId||this._closeId&&this._closeId===t)&&!this._hidden&&this.getDom()&&(this.getDom().style.display="none",
this._hidden=!0);
},
reset:function(t){
(!this._closeId||this._closeId&&this._closeId===t)&&!this._hidden&&this.getDom()&&(this.getDom().style.display="none",
this._hidden=!0,this._closeId=null);
}
}),this.popup.render();
},t.prototype.addEvent=function(){
var t=this,e=t.editor;
e.addListener("selectionchange",function(e,i){
i&&t.showpopup();
}),e.addListener("hide_common_popup",function(e,i){
t.popup.hide(i);
}),e.addListener("update_common_popup",function(e,i,o){
t.popup.justShow(i,o);
}),e.addListener("reset_common_popup",function(e,i){
t.popup.reset(i);
}),e.addListener("show_common_popup",function(e,i,o,n){
n&&(t.popup._closeId=n),t.showpopup({
target:i,
html:o,
closeId:n
});
});
},t.prototype.showpopup=function(t){
var e=t||{},i={
html:e.html||"",
node:e.target||null
},o=this,n=o.editor;
if(n.fireEvent("handle_common_popup",i),i.html&&i.node){
if(this.popup.hide(e.closeId),this.popup._hidden!==!0)return;
o.popup.getDom("content").innerHTML=o.popup.formatHtml(i.html);
var s=$(i.node).find("img");
s.length>0&&(i.node=s[0]),o.popup._anchorEl=i.node,/^img$/i.test(i.node.tagName)?o.popup.showAnchorRect(!0):o.popup.showAnchorRect(),
/js_img_popup/i.test(i.html)&&n.fireEvent("funcPvUvReport","img_popup"),/js_link_popup/i.test(i.html)&&n.fireEvent("funcPvUvReport","link_popup");
}
},t;
});define("common/wx/mpEditor/editor_options.js",[],function(){
"use strict";
function n(){
return t;
}
var t={
justifyindent:[{
name:"取消",
val:"0"
},{
name:"8",
val:"8"
},{
name:"16",
val:"16"
},{
name:"32",
val:"32"
},{
name:"48",
val:"48"
}],
letterspacing:{
normal:"默认",
"0.5px":"0.5",
"1px":"1",
"2px":"2"
}
};
return t.commonReportConf={
justifyindent:{
all:"69271_0",
0:"69271_18",
8:"69271_1",
16:"69271_2",
32:"69271_3",
48:"69271_4"
},
letterspacing:{
all:"69271_5",
normal:"69271_6",
"0.5px":"69271_7",
"1px":"69271_8",
"2px":"69271_9"
}
},{
getOptions:n
};
});define("common/wx/mpEditor/contextmenu.js",["common/wx/mpEditor/zh_CN.js"],function(e){
"use strict";
e("common/wx/mpEditor/zh_CN.js");
var t=baidu.editor.browser,l=UE.I18N.zh_CN.contextMenu,a=[{
label:l.selectall,
cmdName:"selectall"
},{
label:l.cleardoc,
cmdName:"cleardoc",
exec:function(){
confirm(l.confirmclear)&&this.execCommand("cleardoc");
}
},"-",{
group:l.paragraph,
icon:"justifyjustify",
subMenu:[{
label:l.justifyleft,
cmdName:"justify",
value:"left"
},{
label:l.justifyright,
cmdName:"justify",
value:"right"
},{
label:l.justifycenter,
cmdName:"justify",
value:"center"
},{
label:l.justifyjustify,
cmdName:"justify",
value:"justify"
}]
},"-",{
group:l.table,
icon:"table",
subMenu:[{
label:l.inserttable,
cmdName:"inserttable"
},{
label:l.deletetable,
cmdName:"deletetable"
},"-",{
label:l.deleterow,
cmdName:"deleterow"
},{
label:l.deletecol,
cmdName:"deletecol"
},{
label:l.insertcol,
cmdName:"insertcol"
},{
label:l.insertcolnext,
cmdName:"insertcolnext"
},{
label:l.insertrow,
cmdName:"insertrow"
},{
label:l.insertrownext,
cmdName:"insertrownext"
},"-",{
label:l.insertcaption,
cmdName:"insertcaption"
},{
label:l.deletecaption,
cmdName:"deletecaption"
},{
label:l.inserttitle,
cmdName:"inserttitle"
},{
label:l.deletetitle,
cmdName:"deletetitle"
},"-",{
label:l.mergecells,
cmdName:"mergecells"
},{
label:l.mergeright,
cmdName:"mergeright"
},{
label:l.mergedown,
cmdName:"mergedown"
},"-",{
label:l.splittorows,
cmdName:"splittorows"
},{
label:l.splittocols,
cmdName:"splittocols"
},{
label:l.splittocells,
cmdName:"splittocells"
},"-",{
label:l.averageDiseRow,
cmdName:"averagedistributerow"
},{
label:l.averageDisCol,
cmdName:"averagedistributecol"
},"-",{
label:l.edittd,
cmdName:"edittd",
exec:function(){
UE.ui.edittd&&new UE.ui.edittd(this),this.getDialog("edittd").open();
}
},{
label:l.edittable,
cmdName:"edittable",
exec:function(){
UE.ui.edittable&&new UE.ui.edittable(this),this.getDialog("edittable").open();
}
}]
},{
group:l.tablesort,
icon:"tablesort",
subMenu:[{
label:l.reversecurrent,
cmdName:"sorttable",
value:1
},{
label:l.orderbyasc,
cmdName:"sorttable"
},{
label:l.reversebyasc,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,t){
var l=e.innerHTML,a=t.innerHTML;
return a.localeCompare(l);
});
}
},{
label:l.orderbynum,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,l){
var a=e[t.ie?"innerText":"textContent"].match(/\d+/),n=l[t.ie?"innerText":"textContent"].match(/\d+/);
return a&&(a=+a[0]),n&&(n=+n[0]),(a||0)-(n||0);
});
}
},{
label:l.reversebynum,
cmdName:"sorttable",
exec:function(){
this.execCommand("sorttable",function(e,l){
var a=e[t.ie?"innerText":"textContent"].match(/\d+/),n=l[t.ie?"innerText":"textContent"].match(/\d+/);
return a&&(a=+a[0]),n&&(n=+n[0]),(n||0)-(a||0);
});
}
}]
},{
group:l.borderbk,
icon:"borderBack",
subMenu:[{
label:l.setcolor,
cmdName:"interlacetable",
exec:function(){
this.execCommand("interlacetable");
}
},{
label:l.unsetcolor,
cmdName:"uninterlacetable",
exec:function(){
this.execCommand("uninterlacetable");
}
},{
label:l.setbackground,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["#bbb","#ccc"]
});
}
},{
label:l.unsetbackground,
cmdName:"cleartablebackground",
exec:function(){
this.execCommand("cleartablebackground");
}
},{
label:l.redandblue,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["red","blue"]
});
}
},{
label:l.threecolorgradient,
cmdName:"settablebackground",
exec:function(){
this.execCommand("settablebackground",{
repeat:!0,
colorList:["#aaa","#bbb","#ccc"]
});
}
}]
},{
group:l.aligntd,
icon:"aligntd",
subMenu:[{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"top"
}
},{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"middle"
}
},{
cmdName:"cellalignment",
value:{
align:"left",
vAlign:"bottom"
}
},{
cmdName:"cellalignment",
value:{
align:"center",
vAlign:"bottom"
}
},{
cmdName:"cellalignment",
value:{
align:"right",
vAlign:"bottom"
}
}]
},{
group:l.aligntable,
icon:"aligntable",
subMenu:[{
cmdName:"tablealignment",
className:"left",
label:l.tableleft,
value:"left"
},{
cmdName:"tablealignment",
className:"center",
label:l.tablecenter,
value:"center"
},{
cmdName:"tablealignment",
className:"right",
label:l.tableright,
value:"right"
}]
},"-",{
label:l.insertparagraphbefore,
cmdName:"insertparagraph",
value:!0
},{
label:l.insertparagraphafter,
cmdName:"insertparagraph"
},{
label:l.copy,
cmdName:"copy",
exec:function(){
alert(l.copymsg);
},
query:function(){
return 0;
}
},{
label:l.paste,
cmdName:"paste",
exec:function(){
alert(l.pastemsg);
},
query:function(){
return 0;
}
}];
return a;
});define("tpl/mpEditor/layout.html.js",[],function(){
return'<div>\n    <div id="##" class="%%">\n        <!-- 工具栏 -->\n        <div id="##_toolbarbox" class="%%-toolbarbox show-edui-more js_reprint_hide js_readonly">\n            {if length}\n            <div id="##_toolbarboxouter" class="%%-toolbarboxouter">\n                <div class="%%-toolbarboxinner">{=toolbarBoxHtml}</div>\n                <div id="##_toolbar_mask" class="edui_toolbar_mask"></div>\n            </div>\n            {/if}\n            <div id="##_toolbarmsg" class="%%-toolbarmsg" style="display:none;">\n                <div id = "##_upload_dialog" class="%%-toolbarmsg-upload" onclick="$$.showWordImageDialog();">{clickToUpload}</div>\n                <div class="%%-toolbarmsg-close" onclick="$$.hideToolbarMsg();">x</div>\n                <div id="##_toolbarmsg_label" class="%%-toolbarmsg-label"></div>\n                <div style="height:0;overflow:hidden;clear:both;"></div>\n            </div>\n\n            <div class="mpeditor_global_tips">\n                <!-- <span id="##_quote_tips" class="edui_quote_tips" style="display:none;">引用中</span>-->\n                <span id="js_autosave" class="mini_tips icon_after weak_text" style="display:none;">\n                    自动保存<i class="icon16_common waiting_gray"></i>\n                </span>\n            </div>\n        </div>\n\n        <!-- 载入草稿提示 -->\n        <!--\n        <div id="js_draft_tips" class="page_msg mini with_closed" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content"><span><span class="link_global" id="js_draft_cancel">撤消</span></span></p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        -->\n        <!-- 有旧草稿，提示下还要不要 -->\n        <!--\n        <div id="js_import_tips" class="page_msg mini with_closed" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p  class="js_msg_content"><span><span class="link_global" id="js_import_draft">导入</span></span></p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        -->\n        <!-- 标题报错 -->\n        <div class="page_msg mini with_closed js_title_error js_error_msg" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">\n                    标题不能为空且长度不能超过64字                    </p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <!-- 作者报错 -->\n        <div class="page_msg mini with_closed js_author_error" style="display:none;">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p class="js_msg_content">作者不能超过8个字</p>\n                </div>\n            </div>\n            <span class="msg_closed js_msg_close">关闭</span>\n        </div>\n        <!-- 标题 -->\n        <div class="js_title_main appmsg_edit_item title frm_input_box">\n            <label for="title" class="tips_global placeholder_tips" style="display:none">请在这里输入标题</label>\n            <input id="title" type="text" placeholder="请在这里输入标题" class="frm_input js_title js_counter js_field" name="title" max-length="64">\n        </div>\n\n        <!-- 作者 -->\n        <div class="js_reprint_hide appmsg_edit_item author frm_input_box">\n            <label for="author" class="tips_global placeholder_tips" style="display:none">请输入作者</label>\n            <!--#00001#-->\n            <input id="author" type="text" placeholder="请输入作者" class="frm_input js_author js_counter js_field" name="author" max-length="8">\n            <!--%00001%-->\n        </div>\n\n        <!-- 正文 -->\n        <div class="editor_area">\n            <div class="split_line"></div>\n            <!-- 正文报错 -->\n            <div class="page_msg mini with_closed js_catch_tips" style="display:none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n                    <div class="msg_content">\n                        <p class="js_msg_content">粘贴失败</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div class="page_msg mini with_closed js_content_error js_error_msg" style="display:none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                    <div class="msg_content">\n                        <p class="js_msg_content">正文不能为空</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div class="page_msg mini with_closed js_warn" style="display:none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                    <div class="msg_content">\n                        <p class="profile_link_msg_global">请勿在图文外链中添加其他公众号的主页链接</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div id="##_iframeholder" class="%%-iframeholder js_reprint_hide">\n                <div id="##_contentplaceholder" class="editor_content_placeholder" style="display:none">从这里开始写正文</div>\n            </div>\n            <div class="edui_iframe_switch_tips js_unfold_editor mini_tips weak_text icon_before" style="display:none;"><i class="icon_appmsg_edit_folder"></i>展开正文</div>\n        </div>\n        <!-- 底部 -->\n        <div id="##_bottombar" class="%%-bottomContainer">\n            <table>\n                <tr>\n                    <td id="##_elementpath" class="%%-bottombar"></td>\n                    <td id="##_wordcount" class="%%-wordcount"></td>\n                    <td id="##_scale" class="%%-scale"><div class="%%-icon"></div></td>\n                </tr>\n            </table>\n        </div>\n        <div id="##_scalelayer"></div>\n    </div>\n    <!-- 原创文章推荐语 -->\n    <div id="guide_words_main" class="appmsg_edit_origin_recommended">\n        <div class="counter_wrp align_counter">\n            <span class="frm_textarea_box with_counter counter_out">\n                <textarea name="guide_words" class="js_guide_words js_counter js_field frm_textarea" max-length="140"></textarea>\n            </span>\n        </div>\n    </div>\n</div>\n';
});define("common/wx/media/adDialog.js",["common/wx/popup.js","common/wx/Cgi.js","biz_common/moment.js","common/wx/pagebar.js","common/wx/Step.js","common/wx/Tips.js","biz_web/ui/checkbox.js","common/wx/tooltips.js","tpl/media/dialog/admsg_dialog.html.js","tpl/media/admsg.html.js","tpl/media/adtips.html.js","tpl/media/adcpc.html.js","tpl/media/adcpc_cat.html.js","tpl/media/adcpc_catitem.html.js","tpl/media/adcpc_singleitem.html.js"],function(t){
"use strict";
t("common/wx/popup.js");
var e=t("common/wx/Cgi.js"),i=t("biz_common/moment.js"),a=t("common/wx/pagebar.js"),s=t("common/wx/Step.js"),n=t("common/wx/Tips.js"),_=(t("biz_web/ui/checkbox.js"),
t("common/wx/tooltips.js")),d=t("tpl/media/dialog/admsg_dialog.html.js"),o=t("tpl/media/admsg.html.js"),c=t("tpl/media/adtips.html.js"),r=t("tpl/media/adcpc.html.js"),l=t("tpl/media/adcpc_cat.html.js"),p=t("tpl/media/adcpc_catitem.html.js"),h=t("tpl/media/adcpc_singleitem.html.js");
template.helper("$changeTime",function(t){
return i.unix(t).format("YYYY年MM月DD日");
});
var g=function(t){
var e=document.createElement("div");
return $(e).text(t),$(e).html();
},m=function(t){
this.onOK=t.onOK,this.idx=t.idx,this.cpc_edit_data=t.cpc_edit_data,this.ad={},this.init();
};
return m.prototype.init=function(){
var t=this;
this.data={},this.dialog&&this.dialog.remove(),this.dialog=$(d).popup({
title:"选择广告",
width:960,
className:"admsg_dialog_wrp",
onShow:function(){
t.$dom=this.$dialogWrp.eq(0),t._popup=this,t._initEvent(),t.cpc_edit_data&&t.cpc_edit_data.single_aids?t._getEditAgainData():t._getAdList(0,10,function(){
t._initPagebar();
});
},
onHide:function(){
this.remove(),t.dialog=null;
}
});
},m.prototype._getAdList=function(t,i,a){
var s=this;
s.$dom.find(".js_loading").show(),s.$dom.find(".js_ad_list").hide(),e.get({
url:"/merchant/ad_seller_manager?action=get_agreetment_ad",
data:{
begin:t,
count:i
}
},function(t){
s.$dom.find(".js_loading").hide(),t&&t.base_resp&&0==t.base_resp.ret?(s._parseCpc(t),
s.cpc_edit_data||s._parseSponsor(t),a&&a()):n.err("系统错误");
});
},m.prototype._getEditAgainData=function(){
var t=this;
t.$dom.find(".js_loading").show(),t.$dom.find(".js_ad_list").hide(),e.get({
url:"/merchant/ad_seller_manager?action=get_editagain_data&category_id="+this.cpc_edit_data.single_category_id+"&aids="+this.cpc_edit_data.single_aids
},function(e){
t.$dom.find(".js_loading").hide(),0==e.base_resp.ret&&(t._getEditAgainDataOK=!0,
e.can_use_single_ad=1,t._getEditAgainDataData=e,t._parseCpc(e)),console.log(e);
});
},m.prototype._parseCpc=function(t){
!t.category_list||t.category_list.length<1||(this.category_list=t.category_list,
this.can_use_single_ad=t.can_use_single_ad,t.ad_info_list.length>0&&!this.cpc_edit_data?this._renderCpc("step1"):(this.$dom.find(".js_prev").hide(),
this._renderCpc("step2")),console.log(t.selected_single_ad_info,t.single_ad_info));
},m.prototype._renderCpc=function(t){
var e=this;
if("step1"==t)this.$dom.find(".js_cpc_area").show(),this.$dom.find(".js_cpc_area .js_admsg_item")[0].category_list=this.category_list;else if("step2"==t){
var i=this.$dom;
if(this.$dom.find(".js_step2_view").show(),this.ad_type=0,this.cpc_edit_data){
var a=[];
this.cpc_edit_data.category_id_list?a=String(this.cpc_edit_data.category_id_list).split("|"):(a.push(this.cpc_edit_data.single_category_id),
this.ad_type=1);
for(var s=0;s<this.category_list.length;s++)for(var n=0;n<a.length;n++)a[n]==this.category_list[s].category_id&&(this.category_list[s].selected=!0);
}
i.find(".js_adtips").html(wx.T(r,{
category_list:this.category_list,
ad_type:this.ad_type,
can_use_single_ad:this.can_use_single_ad
}));
var d=i.find(".js_cpc_type");
d.filter("[value="+this.ad_type+"]").attr("checked",!0);
var o=d.checkbox({
type:"radio",
onChanged:function(){
var t=o.values()[0];
e.cpc_edit_data=void 0;
for(var i=0;i<e.category_list.length;i++)e.category_list[i].selected=!1;
e.ad_type=t,e._renderCpcCat();
}
});
new _({
container:"#js_ad_mini_ask",
content:"仅限定商品类目指的是展示在文章内的广告卡片被限定在流量主选择的类目内",
reposition:!0,
type:"hover",
position:{
left:-50
},
onshow:function(){
this.show();
}
}),this._renderCpcCat();
}
},m.prototype._renderCpcCat=function(){
var t=this.$dom,e=this,i=0==this.ad_type?"checkbox":"radio";
t.find(".js_cpc_cat_container").html(wx.T(l,{
category_list:this.category_list,
ad_type:this.ad_type,
checkbox_type:i
})),t.find(".js_single_ad_container").hide();
var a=0;
this.cpc_edit_data&&this.cpc_edit_data.single_aids&&(a=this.cpc_edit_data.single_aids.split("|").length),
1==this.ad_type?this._changeMiniTips(!0,a):this._changeMiniTips(!1);
var s=t.find(".js_cat_choose_dp"),n=t.find(".js_cpc_cat_item");
s.show();
var _=n.checkbox({
type:i,
onChanged:function(){
var t=_.values();
0==e.ad_type?e._renderCpcCatItem(t):(e._changeMiniTips(!0,0),e._renderCpcItemDetail(t));
}
});
if(this.cpc_edit_data){
{
_.values();
}
0==e.ad_type?e._renderCpcCatItem(this.cpc_edit_data.category_id_list):e._renderCpcItemDetail(this.cpc_edit_data.single_category_id);
}
},m.prototype._changeMiniTips=function(t,e){
t?$(".js_dialog_mini_tips").html("已选择"+e+"个，可选择5个").show():$(".js_dialog_mini_tips").html("").hide();
},m.prototype._renderCpcItemDetail=function(t){
var i=this.$dom,a=this;
i.find(".js_single_ad_container").show(),"string"==typeof t&&(t=t.split("|"));
var s=this.category_list.filter(function(e){
return t.indexOf(String(e.category_id))>-1;
});
if($(".js_cat_choose_list").html('<span class="js_single_category_id" data-single_category_id="'+s[0].category_id+'">'+s[0].name+"</span>"),
$(".js_cat_choose_dp").hide(),this._getEditAgainDataOK){
this._getEditAgainDataOK=void 0;
for(var n=a._getEditAgainDataData,_=[],d=[],o=0;o<n.selected_single_ad_info.length;o++)n.selected_single_ad_info[o].selected=!0,
d.push(n.selected_single_ad_info[o]),_.push(n.selected_single_ad_info[o].aid);
for(var o=0;o<n.single_ad_info.length;o++)-1==_.indexOf(n.single_ad_info[o].aid)&&d.push(n.single_ad_info[o]);
d=d.slice(0,20);
for(var o=0;o<d.length;o++)d[o].path_encode=encodeURIComponent(d[o].path);
i.find(".js_single_ad_container").html(wx.T(h,{
single_ad_list:d,
token:wx.data.t
}));
}else a.$dom.find(".js_single_loading").show(),a.$dom.find(".js_single_ad_container").hide(),
e.get({
url:"/merchant/ad_seller_manager?action=get_single_ad_list&category_id="+s[0].category_id,
success:function(t){
a.$dom.find(".js_single_loading").hide();
for(var e=t.single_ad_info,s=0;s<e.length;s++)e[s].path_encode=encodeURIComponent(e[s].path);
i.find(".js_single_ad_container").html(wx.T(h,{
single_ad_list:e,
token:wx.data.t
})).show();
}
});
},m.prototype._renderCpcCatItem=function(t){
var e=this.$dom;
"string"==typeof t&&(t=t.split("|"));
var i=this.category_list.filter(function(e){
return t.indexOf(String(e.category_id))>-1;
});
e.find(".js_cat_choose_list").html(wx.T(p,{
sel_item:i
})),i&&0!=i.length||e.find(".js_cat_choose_list").html('<span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>');
},m.prototype._renderCpcItem=function(){
console.log("render cpc_item");
},m.prototype._parseSponsor=function(t){
var e=t.ad_info_list;
if(!(e.length<1)){
for(var i=this,a=0;a<e.length;a++)if(e[a].ad_tips=e[a].ad_tips.replace(/(\r\n|\n|\r)/gm,"<br />"),
e[a].background=e[a].background.replace(/(\r\n|\n|\r)/gm,"<br />"),e[a].video_info&&(e[a].ad_img=e[a].video_info.thumbUrl),
e[a].ad_request.length>0){
e[a].ad_request=JSON.parse(e[a].ad_request);
for(var s=0;s<e[a].ad_request.length;s++)e[a].ad_request[s].title=g(e[a].ad_request[s].title),
e[a].ad_request[s].content=g(e[a].ad_request[s].content),("no_compete"==e[a].ad_request[s].field||"no_policy"==e[a].ad_request[s].field)&&(e[a].ad_request[s].content=e[a].ad_request[s].content.split(", "));
}else e[a].ad_request=[];
i.total_num=t.total_num,i._initStep(),i._setStep(1),i._renderSponsor(e),i.$dom.find(".js_ad_list").show();
}
},m.prototype._renderSponsor=function(t){
var e=this.$dom,i=e.find(".admsg_col");
e.find(".js_step1_view").show(),i.empty();
for(var a=0;a<t.length;a++){
t[a].insert_status=t[a].idx!=this.idx+1?1:3==t[a].status?4:3==t[a].ad_status||4==t[a].ad_status?2:0;
var s=$(wx.T(o,t[a]));
s[0].ad_data=t[a],i.eq(a%2).append(s[0]);
}
},m.prototype._setStep=function(t){
this.stepNav.setStep(t),this.$dom.find(".js_step"+(3-t)+"_view").hide(),this.$dom.find(".js_step"+t+"_view").show();
},m.prototype._initStep=function(){
this.stepNav=new s({
container:".js_step",
selected:1,
names:["1.选择广告","2.广告详情"]
});
},m.prototype._initPagebar=function(){
var t=this;
t.total_num>10&&new a({
container:t.$dom.find(".js_pagebar").show(),
perPage:10,
first:!1,
last:!1,
isSimple:!0,
totalItemsNum:t.total_num,
callback:function(e){
t.ad={};
var i=e.currentPage;
t._getAdList(10*(i-1),10);
}
});
},m.prototype._initEvent=function(){
var t=this,e=this.$dom;
e.on("click",".js_admsg_item",function(){
$(".js_admsg_item.selected").removeClass("selected"),$(this).addClass("selected"),
t.ad=$(this)[0].ad_data,t.ad||(t.ad=$(this)[0].category_list);
}),e.on("click",".js_next",function(){
return $.isEmptyObject(t.ad)?(n.err("请选择广告"),!1):(t._setStep(2),void(t.ad.ad_id?e.find(".js_adtips").html(wx.T(c,{
ad_info:t.ad,
title:wx.cgiData.nick_name
})):t._renderCpc("step2")));
}),e.on("click",".js_prev",function(){
t._setStep(1);
}),e.on("click",".js_submit",function(){
if(!t.ad.ad_id)if(0==t.ad_type){
for(var i=e.find(".js_cpc_cat_item[checked=checked]"),a=[],s=0;s<i.length;s++)a.push($(i[s]).attr("data-category_id"));
if(a.length<1)for(var i=e.find(".js_cpc_cat_item"),a=[],s=0;s<i.length;s++)a.push($(i[s]).attr("data-category_id"));
t.ad={
ad_type:0,
category_id_list:a
};
}else{
var _=e.find(".js_single_category_id").attr("data-single_category_id"),d="",o=e.find(".js_cpc_single_item.selected");
if(o.each(function(){
d+=$(this).attr("data-single_aid")+"|";
}),!d)return void n.err("请至少选择一个单品");
d=d.substring(0,d.length-1),t.ad={
ad_type:1,
single_category_id:_,
single_aids:d,
single_aids_length:o.length,
image_url:o.attr("data-image_url")
};
}
t._popup.remove(),t.dialog=null,t.onOK&&t.onOK(t.ad);
}),e.on("click",".js_cat_choose_del",function(t){
1==$(this).parent().parent().find(".js_cat_choose_del").length?$(this).parent().parent().html('<span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>'):$(this).parent().remove();
var i=$(t.target).attr("data-category_id");
e.find(".js_cpc_cat_item[value="+i+"]").checkbox("checked",!1);
}),e.on("click",".js_clear_all",function(){
return $(this).parent().html('<span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>'),
e.find(".js_cpc_cat_item[checked=checked]").checkbox("checked",!1),!1;
}),e.on("click",".js_cat_choose_list",function(t){
t.target&&t.target.className.indexOf("js_cat_choose_del")>-1||(e.find(".js_cat_choose_dp").is(":hidden")?e.find(".js_cat_choose_dp").show():e.find(".js_cat_choose_dp").hide());
}),e.on("click",".js_cpc_single_item",function(){
var i=e.find(".js_cpc_single_item.selected"),a=i.length;
if($(this).hasClass("selected"))$(this).removeClass("selected"),a-=1;else{
if(a>=5)return void n.err("最多只能选择5个单品");
$(this).addClass("selected"),a+=1;
}
t._changeMiniTips(!0,a);
});
},m;
});