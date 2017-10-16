define("common/wx/mpEditor/plugin/shop.js",["common/wx/Tips.js","common/wx/pagebar.js","shop/shopDialog.js","common/wx/Cgi.js"],function(o){
"use strict";
var i=(o("common/wx/Tips.js"),o("common/wx/pagebar.js"),o("shop/shopDialog.js")),n=(o("common/wx/Cgi.js"),
function(o){
this.domid=o.container,this.biz_uin=o.biz_uin||"";
this.container=$(o.container).show();
});
return n.prototype={
getName:function(){
return"insertshop";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var o=this;
return function(){
var i=this,n=o.editor;
n&&o.openShopPopup(i);
};
},
doCommand:function(o,i,n){
n&&console.log("insert shop");
},
getContainer:function(){
return this.domid;
},
__insertShop:function(o){
var i=this.editor;
i.execCommand("inserthtml",o,!0),i.funcPvUvReport("insertshop");
},
beforeSetContent:function(o){
return o=o.replace(/<mpshop([^>]*?)js_editor_shop([^>]*?)><\/mpshop>/g,"<iframe $1js_editor_shop$2></iframe>");
},
getPluginData:function(o){
var i=o.init();
i.set("content",i.get("content").replace(/<iframe([^>]*?)js_editor_shop([^>]*?)><\/iframe>/g,"<mpshop $1js_editor_shop$2></mpshop>"));
},
openShopPopup:function(){
var o=this;
this.shopDialog=new i({
onOk:function(i){
var n=i.pid,t=o.biz_uin;
o.__insertShop('<p><iframe class="res_iframe js_editor_shop shopcard_iframe" src="/cgi-bin/readtemplate?t=shop/appmsg_shop_tmpl&action=show&__biz={biz_uin}&pid={pid}#wechat_redirect" data-pid={pid} data-biz_uin={biz_uin}></iframe></p>'.format({
pid:n,
biz_uin:t
}));
}
});
}
},n;
});define("common/wx/mpEditor/plugin/card.js",["common/wx/Tips.js","cardticket/send_card.js","common/wx/Cgi.js","cardticket/parse_data.js"],function(t){
"use strict";
function e(t){
var e=t.key,r=t.content,a=(t.ifrmName,new RegExp("<iframe[^>]*?"+t.ifrmName+"[^>]*?"+e+"=('|\")(.*?)('|\").*?>","g"));
return a.test(r)?RegExp.$2:null;
}
function r(t){
return t.replace(/<iframe class="res_iframe card_iframe js_editor_card"[^>]*>[^<>]*?<\/iframe>/g,function(t){
var r=e({
content:t,
key:"data-cardid",
ifrmName:"js_editor_card"
}),a=e({
content:t,
key:"data-num",
ifrmName:"js_editor_card"
}),i=e({
content:t,
key:"data-display-src",
ifrmName:"js_editor_card"
}),n=e({
content:t,
key:"src",
ifrmName:"js_editor_card"
}),d=e({
content:t,
key:"data-src",
ifrmName:"js_editor_card"
});
i=n||i,i=i?i.indexOf("cardid=")>=0?i:i+"&cardid="+r:"";
var c="";
return window.wx&&window.wx.data&&window.wx.data.t&&(c=window.wx.data.t),i=i?i.indexOf("token=")>=0?i.replace(/token=([^&]*|$)/,"token="+c):i+"&token="+c:"",
'<iframe class="res_iframe card_iframe js_editor_card" data-cardid="%s"                 data-num="%s" %s %s></iframe>'.sprintf(r,a,i?'src="'+i+'"':"",d?'data-src="'+d+'"':"");
});
}
var a=t("common/wx/Tips.js"),i=t("cardticket/send_card.js"),n=t("common/wx/Cgi.js"),d=wx.cgiData,c=t("cardticket/parse_data.js"),o=function(t){
t&&t.container&&(this.domid=t.container,this.container=$(t.container).show()),this.biz_uin=t.biz_uin||"",
this.can_use_card=t.can_use_card||!1;
var e=this;
e.report_vid_type=[],e._init();
};
return o.beforeSetContent=function(t){
return t.html?r(t.html):"";
},o.prototype={
getName:function(){
return"insertcard";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var e=t.editor,r=this;
if(e){
{
e.getDocument();
}
t._openCardSelect(r);
}
};
},
_init:function(){
var t=this;
d.cardid&&n.get({
url:"/merchant/electroniccardmgr?action=get&card_id=%s".sprintf(d.cardid)
},function(e){
e.base_resp&&0==e.base_resp.ret&&(t.card_data=$.parseJSON(e.card_detail),t.card_data=c.parse_cardticket(t.card_data),
t._initCard());
});
},
_initCard:function(){
if(this.hasSetContent&&this.card_data&&!this.isInit){
var t=this.editor.getUeditor().getContent(),e=/<iframe [^>]*?class=\"res_iframe card_iframe js_editor_card\"[^>]*?data-cardid=\"\"[^>]*?><\/iframe>/gi;
if(e.test(t))return void(this.isInit=!0);
this._insertCard(this.editor,this.card_data,d.cardnum),this.isInit=!0;
}
},
_checkCard:function(t,e){
var r=$(t).find("iframe"),i=0,n=5;
return $.each(r,function(t,e){
$(e).hasClass("js_editor_card")&&i++;
}),i>n||e&&i>=n?(a.err("正文只能包含%s个卡券".sprintf(n)),!1):!0;
},
_getCardIframe:function(t,e){
return['<iframe class="res_iframe card_iframe js_editor_card" scrolling="no" frameborder="0" ','data-cardid="%s" data-num="%s" '.sprintf(t.id,e),'src="/cgi-bin/readtemplate?t=cardticket/card_preview_tmpl&logo_url=%s&brand_name=%s&title=%s&color=%s&lang=zh_CN&cardid=%s&token=%s&lang=zh_CN"'.sprintf(encodeURIComponent(t.logo_url),encodeURIComponent(t.brand_name),encodeURIComponent(t.title),encodeURIComponent(t.color),t.id,wx.data.t),' data-src="http://mp.weixin.qq.com/bizmall/appmsgcard?action=show&biz=%s&cardid=%s&wechat_card_js=1#wechat_redirect" '.sprintf(this.biz_uin,t.id),"></iframe>"].join("");
},
_insertCard:function(t,e,r){
var a=this._getCardIframe(e,r);
t.execCommand("inserthtml",a,!0),this.editor.fireEvent("funcPvUvReport","insertcard");
},
_openCardSelect:function(t){
if(this._checkCard(this.editor.getDocument(),!0)){
var e=this,r=new i({
multi:!1,
param:{
need_member_card:1
},
selectComplete:function(r,a){
e._insertCard(t,r,a);
},
source:"嵌入图文消息素材"
});
r.show();
}
},
check:function(t){
return this._checkCard(t);
},
getQueryCommandState:function(){
return function(){
var t=this,e=t.selection.getRange().getClosedNode(),r=e&&"edui-faked-video"==e.className;
return r?1:0;
};
},
getContainer:function(){
return this.domid;
},
initPluginData:function(){
return["cardid","cardquantity","cardlimit"];
},
getPluginData:function(t){
var r=t.init(this.initPluginData()),a=e({
content:r.get("content"),
key:"data-cardid",
ifrmName:"js_editor_card"
});
if(a){
var i=e({
content:r.get("content"),
key:"data-num",
ifrmName:"js_editor_card"
});
r.set("cardid",a),r.set("cardquantity",i),r.set("cardlimit",0==i?0:1);
}
},
addListener:function(t){
this.__g;
this.can_use_card&&t.addListener("beforepaste",function(t,e){
e.html=r(e.html);
});
},
beforeSetContent:function(t){
return o.beforeSetContent({
html:t
});
},
afterSetContent:function(){
this.hasSetContent=!0,this._initCard();
}
},o;
});define("common/wx/mpEditor/plugin/vote.js",["biz_web/widget/date_range.css","page/vote/dialog_vote_table.css","widget/date_select.css","common/wx/Tips.js","common/wx/pagebar.js","common/wx/Cgi.js","vote/new.js","tpl/vote/vote_table.html.js"],function(require,exports,module){
"use strict";
function iframeUrlSwitcher(e){
for(var t=e.content,o=e.returnValue||"content",a=e.wrapper||"add",n=t.split(/<\/?iframe/),i="",r=" TMP_NAME=",s=[],c=[],l=[],d=0;d<n.length;d++){
if(-1!==n[d].indexOf("js_editor_vote_card")||-1!==n[d].indexOf("js_editor_card")){
n[d]=n[d].replace(" src=",r).replace(" data-display-src="," src=").replace(r," data-display-src="),
n[d]=n[d].replace(" style=",r).replace(" data-display-style="," style=").replace(r," data-display-style=");
var u=n[d].match(/data-voteid=\"([^\"]*)/);
u&&u[1]&&s.push(u[1]);
var p=n[d].match(/isMlt=(\d)/);
p&&p[1]&&c.push(p[1]),n[d]=n[d].replace(/token=(\d+)&/gi,"token="+wx.getUrl("token")+"&");
var v=n[d].match(/data-supervoteid=\"([^\"]*)/);
v&&v[1]&&l.push(v[1]);
}
i+=n[d],d<n.length-1&&(i+=(d%2?"</":"<")+"iframe");
}
switch(i="add"===a?i.replace(/(<iframe[^>]*?js_editor_vote_card[^<]*?<\/iframe>)/gi,function(e){
return['<span class="vote_area">',e,'<span class="vote_box skin_help po_left"></span>','<span class="vote_box skin_help po_right"></span>',"</span>"].join("");
}):i.replace(/<span class="vote_area">/g,"").replace(/<span class="vote_box skin_help po_left"><\/span><span class="vote_box skin_help po_right"><\/span><\/span>/g,"").replace(/<span class="vote_box skin_help po_left"><\/span><span class="vote_box skin_help po_right"><\/span>/g,""),
o){
case"voteid":
return s;

case"isMlt":
return c;

case"supervoteid":
return l;

case"content":
default:
return i;
}
}
function setVoteIframeHeight(e){
var t=e.getDocument();
$(t).find("iframe").each(function(){
var t=this;
$(t).hasClass("js_editor_vote_card")&&$(t).on("load",function(){
$(t.contentWindow.document).on("finished",function(){
var o=$(this).height();
t.contentDocument&&t.contentDocument.body.offsetHeight?o=t.contentDocument.body.offsetHeight:t.Document&&t.Document.body&&t.Document.body.scrollHeight?o=t.Document.body.scrollHeight:t.document&&t.document.body&&t.document.body.scrollHeight&&(o=t.document.body.scrollHeight),
$(t).height(o).off("finished"),e.fireEvent("contentchange");
}),$(t).off("load");
});
});
}
require("biz_web/widget/date_range.css"),require("page/vote/dialog_vote_table.css"),
require("widget/date_select.css");
var Tips=require("common/wx/Tips.js"),Pagebar=require("common/wx/pagebar.js"),Cgi=require("common/wx/Cgi.js");
template.helper("datestring",function(e){
function t(e,t){
for(var o=0,a=t-(e+"").length;a>o;o++)e="0"+e;
return e+"";
}
var o=new Date(e),a=["日","一","二","三","四","五","六"],n="yyyy年mm月dd日".replace(/yyyy|YYYY/,o.getFullYear()).replace(/yy|YY/,t(o.getFullYear()%100,2)).replace(/mm|MM/,t(o.getMonth()+1,2)).replace(/m|M/g,o.getMonth()+1).replace(/dd|DD/,t(o.getDate(),2)).replace(/d|D/g,o.getDate()).replace(/hh|HH/,t(o.getHours(),2)).replace(/h|H/g,o.getHours()).replace(/ii|II/,t(o.getMinutes(),2)).replace(/i|I/g,o.getMinutes()).replace(/ss|SS/,t(o.getSeconds(),2)).replace(/s|S/g,o.getSeconds()).replace(/w/g,o.getDay()).replace(/W/g,a[o.getDay()]);
return n;
});
var Vote=function(e){
e&&e.container&&(this.domid=e.container,this.container=$(e.container).show()),this.can_use_vote=e.can_use_vote||!1;
};
return Vote.beforeSetContent=function(e){
var t=iframeUrlSwitcher({
content:e.html,
wrapper:"remove"
});
return t;
},Vote.prototype={
getName:function(){
return"insertvote";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
var t=this,o=e.editor;
o&&e.openVotePopup(t);
};
},
doCommand:function(e,t,o){
o&&console.log("insert vote");
},
getContainer:function(){
return this.domid;
},
initPluginData:function(){
return["voteid","voteismlt","supervoteid"];
},
getPluginData:function(e){
var t=e.init(this.initPluginData());
t.set("content",iframeUrlSwitcher({
content:t.get("content"),
wrapper:"add"
}));
var o=iframeUrlSwitcher({
content:t.get("content"),
returnValue:"voteid"
})[0],a=iframeUrlSwitcher({
content:t.get("content"),
returnValue:"isMlt"
})[0],n=iframeUrlSwitcher({
content:t.get("content"),
returnValue:"supervoteid"
});
o&&"undefined"!=typeof a&&(t.set("voteid",o),t.set("voteismlt",a||store.get("appmsg_vote_"+o))),
n&&t.set("supervoteid",n[0]||"");
},
beforeSetContent:function(e){
return Vote.beforeSetContent({
html:e
});
},
afterSetContent:function(){
setVoteIframeHeight(this.editor);
},
insertVoteIframe:function(e,t){
var o=this.editor;
e.execCommand("inserthtml",t.join(""),!0),o.fireEvent("funcPvUvReport","insertvote");
},
_setIframeHeight:function(){
var e=this;
setTimeout(function(){
var t=e.editor.getDocument().getElementsByTagName("iframe");
if(t&&t.length>0)for(var o=0;o<t.length;o++)if($(t[o]).hasClass("js_editor_vote_card")){
var a=t[o],n=$(a).height();
a.contentDocument&&a.contentDocument.body.offsetHeight?n=a.contentDocument.body.offsetHeight:a.Document&&a.Document.body&&a.Document.body.scrollHeight?n=a.Document.body.scrollHeight:a.document&&a.document.body&&a.document.body.scrollHeight&&(n=a.document.body.scrollHeight),
a.style.height=n+"px";
}
},5e3);
},
_checkIframe:function(e,t){
var o=$(e).find("iframe"),a=0;
return $.each(o,function(e,t){
$(t).hasClass("js_editor_vote_card")&&a++;
}),a>1||t&&a>=1?(Tips.err("正文只能包含%s个投票".sprintf(1)),!1):!0;
},
check:function(e){
return this._checkIframe(e);
},
openVotePopup:function(ueditor){
function renderList(begin){
$.ajax({
url:wx.url("/cgi-bin/newoperatevote?action=list&vote_status=1&f=json&count=6&begin="+begin),
type:"get",
dataType:"json",
success:function(data){
if(data.data){
for(var voteData=eval("("+data.data+")"),iframeH=0,i=0;i<voteData.super_vote_info.length;i++)voteData.super_vote_info[i].height=150*voteData.super_vote_info[i].vote_id_list.vote_id.length,
voteData.super_vote_info[i].title=voteData.super_vote_info[i].title.html(!1);
$(".js_vote_list").html(compile_html({
loading:!1,
data:voteData,
iframeH:iframeH,
biz:data.bizuin,
token:wx.data.param
})),$(".js_select").checkbox({
multi:!1
});
var total_count=voteData.total_count,count=6,showpage=begin/count+1,pagebar=new Pagebar({
container:".js_pager",
perPage:count,
first:!1,
last:!1,
isSimple:!0,
initShowPage:showpage,
totalItemsNum:total_count,
callback:function(e){
var t=e.currentPage;
if(t!=showpage)return t--,renderList(t*count),!1;
}
});
}else $(".js_vote_list").html(compile_html({
loading:!1,
data:{
super_vote_info:[]
}
}));
},
error:function(){}
});
}
var that=this;
if(!that._checkIframe(this.editor.getDocument(),!0))return null;
document.body.style.overflow=document.documentElement.style.overflow="hidden";
var pop=$("<div class='' id='js_vote_menu'> <div class='title_tab'> <ul class='tab_navs title_tab' data-index='0'> <li data-index='0' class='tab_nav first selected'><a href='#none' id='js_new_vote'>新投票</a></li> <li data-index='1' class='tab_nav'><a href='#none' id='js_vote_list'>已有投票</a></li> </ul> </div> <div class='new_vote js_new_vote'>'+_vote_pop_html+'</div> <div class='vote_list js_vote_list' style='display:none'></div> </div>").popup({
title:"发起投票",
className:"vote_edit tc_dialog dialog_normal_form",
buttons:[{
text:"确定",
click:function(){},
type:"primary"
}],
close:function(){
this.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto";
}
}),vote=require("vote/new.js");
vote.initPage(),vote.eventBind();
var _vote_list_tpl=require("tpl/vote/vote_table.html.js"),compile_html=template.compile(_vote_list_tpl);
$(".js_vote_list").html(compile_html({
loading:!0
})),$("#js_new_vote").click(function(){
$(".js_new_vote").show(),$("#js_new_vote").parent().addClass("selected"),$(".js_vote_list").hide(),
$("#js_vote_list").parent().removeClass("selected");
}),$("#js_vote_list").click(function(){
$(".js_new_vote").hide(),$("#js_new_vote").parent().removeClass("selected"),$(".js_vote_list").show(),
$("#js_vote_list").parent().addClass("selected");
}),renderList(0),$(".vote_edit button").click(function(){
var iframeH=0,saveBtn=pop.find(":button").last();
saveBtn.removeClass("btn_loading");
var supervoteid=0,biz=0;
if("none"==$(".js_vote_list").css("display")){
var data=vote.getFullData();
if(data){
var tempData=eval("("+data+")"),optionL=0;
iframeH+=70*tempData.vote_subject.length;
for(var i=0;i<tempData.vote_subject.length;i++)optionL+=tempData.vote_subject[i].options.length;
iframeH+=30*optionL,saveBtn.btn(!1),Cgi.post({
url:wx.url("/cgi-bin/newoperatevote?action=create"),
dataType:"json",
data:{
action:"create",
json:data
},
mask:!1
},function(e){
0==e.base_resp.ret?(Tips.suc("操作成功"),supervoteid=e.super_vote_id,biz=e.bizuin,that.insertVoteIframe(ueditor,['<iframe scrolling="no" frameborder="0" class="vote_iframe js_editor_vote_card" style="height:0px;" ','src="',wx.url("/cgi-bin/readtemplate?t=vote/vote-new_tmpl&__biz="+biz+"&supervoteid=%s".sprintf(supervoteid)),'"','data-src="',"/mp/newappmsgvote?action=show&__biz=",biz,"&supervoteid=%s#wechat_redirect".sprintf(supervoteid),'"','data-supervoteid="%s"'.sprintf(supervoteid)," allowfullscreen >","</iframe>"]),
setVoteIframeHeight(that.editor),pop.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto",
$(".mask").hide()):(Tips.err(e.base_resp.err_msg),saveBtn.btn(!0));
});
}
}else saveBtn.btn(!1),1==$(".js_select:checked").length?(supervoteid=$(".js_select:checked").val(),
biz=$(".js_select:checked").data("biz"),iframeH=$(".js_select:checked").data("height"),
that.insertVoteIframe(ueditor,['<iframe scrolling="no" frameborder="0" class="vote_iframe js_editor_vote_card" style="height:0px;" ','src="',wx.url("/cgi-bin/readtemplate?t=vote/vote-new_tmpl&__biz="+biz+"&supervoteid=%s".sprintf(supervoteid)),'"','data-src="',"/mp/newappmsgvote?action=show&__biz=",biz,"&supervoteid=%s#wechat_redirect".sprintf(supervoteid),'"','data-supervoteid="%s"'.sprintf(supervoteid)," allowfullscreen >","</iframe>"]),
setVoteIframeHeight(that.editor),pop.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto",
saveBtn.btn(!0),$(".mask").hide()):(Tips.err("请选择投票"),saveBtn.btn(!0));
});
}
},Vote;
});define("common/wx/pagebar.js",["widget/pagination.css","tpl/pagebar.html.js","common/qq/Class.js","common/wx/Tips.js"],function(t,e){
"use strict";
var i,n,s,a=(t("widget/pagination.css"),t("tpl/pagebar.html.js")),r=t("common/qq/Class.js"),h=t("common/wx/Tips.js");
s=template.compile(a),i=e,n={
first:"首页",
last:"末页",
prev:"上页",
next:"下页",
startPage:1,
initShowPage:1,
perPage:10,
startRange:1,
midRange:3,
endRange:1,
totalItemsNum:0,
container:"",
callback:null,
isNavHide:!1,
isSimple:!0
};
var o=function(t,e,i){
var n;
return n=t+(e-1),n=n>i?i:n;
},g=function(t,e,i){
var n;
return n=i%2===0?e-(i/2-1):e-(i-1)/2,n=t>n?t:n;
},u=function(t,e,i){
var n;
return n=e%2===0?parseInt(t)+e/2:parseInt(t)+(e-1)/2,n=n>i?i:n;
},c=function(t,e,i){
var n;
return n=e-(i-1),n=t>n?t:n;
},l=function(t,e){
if(e[t]&&isNaN(e[t]))throw new Error("Invalid arguments: "+t+" should be a number");
},p=function(t){
if(l("perPage",t),l("totalItemsNum",t),l("startPage",t),l("startRange",t),l("midRange",t),
l("endRange",t),l("initShowPage",t),void 0!==t.callback&&null!==t.callback&&!$.isFunction(t.callback))throw new Error("Invalid arguments: callback should be a function");
},d=function(t,e,i){
var n=t.container.find(".page_"+i);
if("string"==typeof e){
var s=$(e);
0!==s.length&&(n=s);
}else{
if(e!==!1)throw new Error("Invalid Paramter: '"+i+"' should be a string or false");
n.hide();
}
return n;
},P=r.declare({
init:function(t){
if(t.totalItemsNum){
var e;
if(p(t),e=$.extend(!0,{},n,t),this._init(e),e.initShowPage<e.startPage)throw new Error("Invalid arguments: initShowPage should be larger than startPage");
if(e.initShowPage>e.endPage)throw new Error("Invalid arguments: initShowPage should be smaller than endPage");
this.paginate();
}
},
_init:function(t){
this.currentPage=t.initShowPage,this._isNextButtonShow=!0,this._isPrevButtonShow=!0,
this.uid="wxPagebar_"+ +new Date,this.initEventCenter(),this.optionsForTemplate={},
$.extend(this,t),this.container=$(t.container),this.optionsForTemplate.isSimple=t.isSimple,
this.optionsForTemplate.firstButtonText=0===$(t.first).length?t.first:n.first,this.optionsForTemplate.lastButtonText=0===$(t.last).length?t.last:n.last,
this.optionsForTemplate.nextButtonText=0===$(t.next).length?t.next:n.next,this.optionsForTemplate.prevButtonText=0===$(t.prev).length?t.prev:n.prev,
this.optionsForTemplate.isNavHide=t.isNavHide,this.generatePages(parseInt(this.totalItemsNum)),
this.gapForStartRange=this.container.find(".gap_prev"),this.gapForEndRange=this.container.find(".gap_next"),
this.firstButton=d(this,t.first,"first"),this.lastButton=d(this,t.last,"last"),this.prevButton=d(this,t.prev,"prev"),
this.nextButton=d(this,t.next,"next"),this.bindEvent();
},
initEventCenter:function(){
this.eventCenter={
eventList:[],
bind:function(t,e){
this.eventList[t]||(this.eventList[t]=[]),this.eventList[t].push(e);
},
trigger:function(t){
var e,i;
this.eventList[t]||(this.eventList[t]=[]),e=this.eventList[t];
for(var n=0;n<e.length;n++)if(i=Array.prototype.slice.call(arguments,1),e[n].apply(this,i)===!1)return!1;
},
unbind:function(t,e){
if(!this.eventList)throw new Error("The eventList was undefined");
if(!this.eventList[t])throw new Error("The event type "+t+" was not found");
if(void 0===e)this.eventList[t]=[];else for(var i=this.eventList[t],n=i.length,s=0;n>s;s++)if(i[s]===e){
i.splice(s,1);
break;
}
}
};
},
generatePages:function(t){
var e,i,n,a,r,h;
for(this.pageNum=Math.ceil(t/this.perPage),this.endPage=this.startPage+this.pageNum-1,
this.gapForStartRange=null,this.gapForEndRange=null,this.optionsForTemplate.startRange=[],
this.optionsForTemplate.midRange=[],this.optionsForTemplate.endRange=[],i=o(this.startPage,this.startRange,this.endPage),
n=g(this.startPage,this.currentPage,this.midRange),a=u(this.currentPage,this.midRange,this.endPage),
r=c(this.startPage,this.endPage,this.endRange),i>=r&&(r=i+1),e=this.startPage;i>=e;e+=1)this.optionsForTemplate.startRange.push(e);
for(var l=0,e=n;l<this.midRange;l+=1,e+=1)this.optionsForTemplate.midRange.push(e);
for(e=r;e<=this.endPage;e+=1)this.optionsForTemplate.endRange.push(e);
this.optionsForTemplate.endPage=this.endPage,this.optionsForTemplate.initShowPage=this.initShowPage,
h=s(this.optionsForTemplate),this.container.html(h),1==this.pageNum?this.container.hide():this.container.show(),
this.pages=this.container.find(".page_nav"),this.midPages=this.container.find(".js_mid"),
this.labels=this.container.find(".page_num label"),this.container.find(".pagination").attr("id",this.uid);
},
paginate:function(){
var t,e,i,n,s,a,r,h,l,p;
if(this.isSimple===!0)for(var d=0,P=this.labels.length;P>d;d++)d%2===0&&$(this.labels[d]).html(this.currentPage);else{
e=o(this.startPage,this.startRange,this.endPage),a=g(this.startPage,this.currentPage,this.midRange),
r=u(this.currentPage,this.midRange,this.endPage),h=c(this.startPage,this.endPage,this.endRange),
e>=h&&(h=e+1),e>=a&&(a=e+1),r>=h&&(r=h-1),this.pages.show(),this.pages.removeClass("current"),
p=parseInt(this.midPages.length/this.midRange);
for(var d=0,P=p;P>d;d++){
for(s=0,t=a;r>=t;t+=1)n=this.midRange*d+(t-a),l=$(this.midPages[n]),l.html(t),s+=1,
t==this.currentPage&&l.addClass("current");
for(n=this.midRange*d+s;s<this.midRange;s+=1)l=$(this.midPages[n]),l.hide(),l.removeClass("current"),
n+=1;
}
for(var d=0,P=this.pages.length;P>=d;d++)i=$(this.pages[d]),t=parseInt(i.html()),
t===parseInt(this.currentPage)&&i.addClass("current");
if(a>e+1?this.gapForStartRange.show():this.gapForStartRange.hide(),h>r+1?this.gapForEndRange.show():this.gapForEndRange.hide(),
this.isNavHide){
for(var d=this.startPage;d<=this.endPage;d+=1)this.pages.hide();
this.gapForStartRange.hide(),this.gapForEndRange.hide();
}
}
this.checkButtonShown();
},
destroy:function(){
this.container.off("click","#"+this.uid+" a.page_nav"),this.container.off("click","#"+this.uid+" a.page_go"),
this.container.off("keydown","#"+this.uid+" .goto_area input"),this.nextButton.off("click"),
this.prevButton.off("click"),this.firstButton.off("click"),this.lastButton.off("click");
},
bindEvent:function(){
this.container.on("click","#"+this.uid+" a.page_nav",this.proxy(function(t){
var e=$(t.target);
return e.hasClass("current")?!1:(this.clickPage(parseInt(e.html())),!1);
},this)),this.nextButton.on("click",this.proxy(function(t){
$(t.target);
return this.nextPage(),!1;
},this)),this.prevButton.on("click",this.proxy(function(t){
$(t.target);
return this.prevPage(),!1;
},this)),this.firstButton.on("click",this.proxy(function(t){
$(t.target);
return this.goFirstPage(),!1;
},this)),this.lastButton.on("click",this.proxy(function(t){
$(t.target);
return this.goLastPage(),!1;
},this)),this.container.on("click","#"+this.uid+" a.page_go",this.proxy(function(t){
var e=$(t.target).prev();
return this.goPage(e.val()),!1;
},this)),this.container.on("keydown","#"+this.uid+" .goto_area input",this.proxy(function(t){
return wx.isHotkey(t,"enter")?(this.container.find("a.page_go").click(),!1):void 0;
},this));
},
on:function(t,e){
this.eventCenter.bind(t,this.proxy(e,this));
},
callbackFunc:function(t){
var e={
currentPage:this.currentPage,
perPage:this.perPage,
count:this.pageNum
};
return $.isFunction(this.callback)&&this.callback(e)===!1?!1:this.eventCenter.trigger(t,e)===!1?!1:void this.paginate();
},
proxy:function(t,e){
return function(){
var i=Array.prototype.slice.call(arguments,0);
return t.apply(e,i);
};
},
nextPage:function(){
this.currentPage!==this.endPage&&(this.currentPage++,this.callbackFunc("next")===!1&&this.currentPage--);
},
prevPage:function(){
this.currentPage!==this.startPage&&(this.currentPage--,this.callbackFunc("prev")===!1&&this.currentPage++);
},
goFirstPage:function(){
var t=this.currentPage;
this.currentPage=this.startPage,this.callbackFunc("goFirst")===!1&&(this.currentPage=t);
},
goLastPage:function(){
var t=this.currentPage;
this.currentPage=this.endPage,this.callbackFunc("goLast")===!1&&(this.currentPage=t);
},
checkButtonShown:function(){
+this.currentPage===+this.startPage?this.hidePrevButton():this.showPrevButton(),
+this.currentPage===+this.endPage?this.hideNextButton():this.showNextButton();
},
goPage:function(t){
var e=this.currentPage,t=Math.round(t);
return t===this.currentPage?!1:isNaN(t)?(h.err("请输入正确的页码"),!1):""===t?!1:t<this.startPage?(h.err("请输入正确的页码"),
!1):t>this.endPage?(h.err("请输入正确的页码"),!1):(this.currentPage=t,void(this.callbackFunc("go")===!1&&(this.currentPage=e)));
},
clickPage:function(t){
var e=this.currentPage;
isNaN(t)&&(t=this.startPage),this.currentPage=t<this.startPage?this.startPage:t>this.endPage?this.endPage:t,
this.callbackFunc("click")===!1&&(this.currentPage=e);
},
showNextButton:function(){
this.nextButton&&this._isNextButtonShow===!1&&(this.nextButton.show(),this._isNextButtonShow=!0);
},
showPrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!1&&(this.prevButton.show(),this._isPrevButtonShow=!0);
},
hideNextButton:function(){
this.nextButton&&this._isNextButtonShow===!0&&(this.nextButton.hide(),this._isNextButtonShow=!1);
},
hidePrevButton:function(){
this.prevButton&&this._isPrevButtonShow===!0&&(this.prevButton.hide(),this._isPrevButtonShow=!1);
}
});
return e=P;
});define("original/whitelist_dialog.js",["original/MultiStepDialog.js","original/whitepop.js","common/wx/Cgi.js","common/wx/Tips.js","original/tpl/whitelist.html.js","original/tpl/whitelist_record.html.js","original/tpl/whitelist_search.html.js"],function(e){
"use strict";
function t(e){
this.data=e.data||[],this.onOK=e.onOK||function(){},this.opt=e,this.isAllowReprint=e.isAllowReprint,
this.init();
}
var i=e("original/MultiStepDialog.js"),s=e("original/whitepop.js"),a=e("common/wx/Cgi.js"),n=e("common/wx/Tips.js"),c=e("original/tpl/whitelist.html.js"),d=e("original/tpl/whitelist_record.html.js"),o=e("original/tpl/whitelist_search.html.js");
return t.prototype={
construtor:t,
init:function(){
var e=this,t=this.msg=new i({
title:"添加转载帐号",
className:this.opt.className||"account_dialog align_edge"
});
t.register({
stepName:"填写公众号",
init:function(i){
function s(){
var t=$.trim(i.find(".js_input_search").val());
if(!t)return void n.err("请输入公众号/微信名称");
if(!r){
r=!0,i.find(".js_search_msg").text("正在搜索中").show(),i.find(".js_search_item").each(function(){
$(this).data("record",null);
}),i.find(".js_search_list").html("");
var s={
username:t
};
e.data.id&&(s.id=e.data.id),e.data.idx&&(s.idx=e.data.idx),a.post({
url:"/cgi-bin/appmsgcopyright?action=searchacct",
data:s,
complete:function(){
r=!1;
}
},function(e){
if(e.base_resp&&0==e.base_resp.ret&&e.search_list){
var t=e.search_list;
$.each(t,function(e,t){
t.pic_url=t.pic_url?t.pic_url.endsWith("/0")?t.pic_url:t.pic_url+"/0":"http://mmbiz.qpic.cn/mmbiz/a5icZrUmbV8p5jb6RZ8aYfjfS2AVle8URwBt8QIu6XbGewB9wiaWYWkPwq4R7pfdsFibuLkic16UcxDSNYtB8HnC1Q/0";
});
var s=template.compile(o)({
list:t
});
i.find(".js_search_list").html(s),0===t.length?i.find(".js_search_msg").text("无搜索结果").show():i.find(".js_search_msg").hide();
}else i.find(".js_search_fail").text("系统错误，请稍候再试").show(),i.find(".js_search_msg").hide();
});
}
}
var r=!1;
i.html(c);
var l={};
e.data.id&&(l.id=e.data.id),e.data.idx&&(l.idx=e.data.idx),a.get({
url:"/cgi-bin/appmsgcopyright?action=get_recently_add",
data:l
},function(e){
if(e.base_resp&&0==e.base_resp.ret&&e.white_list){
var t=e.white_list;
$.each(t,function(e,t){
if(t.nickname){
var s=(i.find(".js_record_item"),$($.parseHTML(template.compile(d)(t))));
s.length&&(i.find(".js_record_list").append(s).css("zoom",0).css("zoom",1),i.find(".js_record_list").find(".js_empty").remove(),
i.find(".js_select_all").show()),1==t.status&&s.addClass("disabled");
}
});
}
}),i.on("keypress",".js_input_search ",function(e){
13===e.keyCode&&s();
}),i.on("click",".js_btn_search",s),i.on("click",".js_search_item",function(){
if(!$(this).hasClass("disabled"))if($(this).hasClass("selected"))$(this).removeClass("selected"),
$(this).data("record")&&($(this).data("record").remove(),$(this).data("record",null)),
i.find(".js_record_item.selected").length<=0&&t.disableBtn(0,1);else{
$(this).addClass("selected");
var e=$(this).attr("data-openid"),s=null;
if(i.find(".js_record_item").each(function(){
e===$(this).attr("data-openid")&&(s=$(this));
}),s)s.hasClass("disabled")||(s.find("input").prop("checked")&&n.suc("已存在右侧转载帐号记录中"),
s.find("input").prop("checked",!0).trigger("change"),$(this).data("record",s));else{
var a=template.compile(d)({
selected:!0,
openid:$(this).attr("data-openid"),
nickname:$(this).find(".js_nickname").text()||$(this).find(".js_wx_name").text()
}),c=$($.parseHTML(a));
$(this).data("record",c),i.find(".js_record_list").prepend(c).css("zoom",1).css("zoom",0),
i.find(".js_record_list").find(".js_empty").remove(),i.find(".js_select_all").show();
}
t.enableBtn(0,1);
}
}),i.on("change",".js_record_checkbox",function(){
var e=$(this).closest(".js_record_item");
e.hasClass("disabled")||($(this).prop("checked")?(e.addClass("selected"),t.enableBtn(0,1)):(e.removeClass("selected"),
i.find(".js_record_item.selected").length<=0&&t.disableBtn(0,1)));
}),i.on("click",".js_select_all",function(){
var e=!0;
$(this).text("取消全选"),i.find(".js_record_item").not(".disabled").length===i.find(".js_record_item.selected").not(".disabled").length&&(e=!1,
$(this).text("全选")),i.find(".js_record_checkbox").each(function(){
$(this).closest(".js_record_item").hasClass("disabled")||$(this).prop("checked",e).trigger("change");
});
});
},
buttons:[{
text:"取消",
click:function(){
t.remove();
},
type:"default"
},{
text:"下一步",
click:function(){
var e=this.$btns[1].dom;
return e.hasClass("btn_disabled")?!1:void t.next();
},
type:"disabled"
}]
}),t.register({
stepName:"设置该帐号权限",
init:function(i){
new s({
dom:i,
showAllowRe:!e.isAllowReprint,
done:function(e){
t.can_modify=1*e.can_modify,t.can_hide_source=1*e.can_hide_source,t.enableBtn(1,1);
},
bad:function(){
t.disableBtn(1,1);
}
});
},
buttons:[{
text:"上一步",
click:function(){
t.pre();
},
type:"default"
},{
text:"确定",
type:"disabled",
click:function(){
var i=this.$btns[3].dom;
if(i.hasClass("btn_disabled"))return!1;
var s=[];
t.$stepDom[0].find(".js_record_item.selected").each(function(){
s.push({
nickname:$(this).find(".lbl_content").text(),
openid:$(this).attr("data-openid"),
can_modify:t.can_modify||0,
can_hide_source:t.can_hide_source||0
});
}),e.onOK.call(this,s,i);
}
}]
}),t.show();
},
remove:function(){
this.msg.remove();
}
},t;
});define("common/wx/ban.js",["tpl/ban/highlight_box.html.js","tpl/ban/page_msg.html.js","common/wx/dialog.js"],function(e,a,n){
"use strict";
var i=e("tpl/ban/highlight_box.html.js"),o=e("tpl/ban/page_msg.html.js"),t=e("common/wx/dialog.js"),r={
"mass-send":{
func_id:1,
name:"群发功能"
},
copyright:{
func_id:2,
name:"原创功能"
},
reward:{
func_id:3,
name:"赞赏功能"
},
seller:{
func_id:4,
name:"流量主功能"
},
comment:{
func_id:5,
name:"留言功能"
},
follow:{
func_id:6,
name:"被关注"
},
search:{
func_id:7,
name:"被搜索"
},
outlink:{
func_id:8,
name:"外链功能"
},
share:{
func_id:9,
name:"文章分享至朋友圈可见"
},
reply:{
func_id:10,
name:"自动回复功能",
highlight:"已禁用自动回复|你的帐号{=reason}，已被{forever}屏蔽自动回复功能{date}，期间用户将不会收到自动回复消息。",
hide:"all"
},
menu:{
func_id:11,
name:"自定义菜单功能",
highlight:"已禁用自定义菜单|你的帐号{=reason}，已被{forever}屏蔽自定义菜单功能{date}，期间自定义菜单将不可见。",
hide:"all"
},
"single-send":{
func_id:12,
name:"聊天功能",
pagemsg:"你的帐号{=reason}，已被{forever}屏蔽聊天功能{date}，期间将不可和粉丝互动聊天。"
},
preview:{
func_id:13,
name:"消息预览功能",
dialogmsg:"你的帐号{=reason}，已被{forever}屏蔽消息预览功能{date}，期间消息预览功能将不可用。"
},
"jssdk-share":{
func_id:14,
name:"JS-SDK分享接口"
},
template:{
func_id:15,
name:"模版消息接口"
},
"customer-service":{
func_id:16,
name:"客服接口"
},
"source-url":{
func_id:17,
name:"原文链接功能"
},
"outer-url":{
func_id:18,
name:"图文编辑外链功能"
},
"callback-message":{
func_id:20,
name:"开发者模式下消息管理功能"
},
"jump-home":{
func_id:21,
name:"跳转小主页"
},
"follow-home":{
func_id:22,
name:"关注小主页"
},
"online-temp-qrcode":{
func_id:25,
name:"（线上）临时二维码扫码关注"
},
"online-forever-qrcode":{
func_id:26,
name:"（线上）永久二维码扫码关注"
}
},p=[{
illegal_reason_id:3,
reason_id:1e4,
reason_name:"涉嫌违规",
reason_type:0,
reason_description:"涉嫌违规",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=32&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:3
},{
illegal_reason_id:3,
reason_id:90004,
reason_name:"滥用原创声明",
reason_type:0,
reason_description:"涉嫌滥用原创声明功能",
reason_rule:"《微信公众平台运营规范》3.6条规定",
wap_url:"",
pc_url:"",
level:3
},{
illegal_reason_id:4,
reason_id:90005,
reason_name:"滥用赞赏",
reason_type:0,
reason_description:"涉嫌滥用赞赏功能",
reason_rule:"《微信公众平台运营规范》3.7条规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_7",
level:3
},{
illegal_reason_id:10,
reason_id:10001,
reason_name:"垃圾广告",
reason_type:0,
reason_description:"涉嫌发布垃圾广告",
reason_rule:"《微信公众平台运营规范》4.8条规定-广告类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=24&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_8",
level:2
},{
illegal_reason_id:11,
reason_id:20001,
reason_name:"政治敏感",
reason_type:0,
reason_description:"涉嫌违反相关法律法规和政策",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=32&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:3
},{
illegal_reason_id:12,
reason_id:20002,
reason_name:"色情",
reason_type:0,
reason_description:"涉及低俗、性暗示或色情信息",
reason_rule:"《微信公众平台运营规范》4.2条规定-色情及色情擦边类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=18&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_2",
level:1
},{
illegal_reason_id:13,
reason_id:20004,
reason_name:"社会事件",
reason_type:0,
reason_description:"涉嫌违反相关法律法规和政策",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:3
},{
illegal_reason_id:14,
reason_id:20006,
reason_name:"违法犯罪",
reason_type:0,
reason_description:"涉嫌违反相关法律法规和政策",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=32&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:15,
reason_id:20008,
reason_name:"欺诈",
reason_type:0,
reason_description:"涉嫌欺诈",
reason_rule:"《微信公众平台运营规范》4.8.1条规定-欺诈虚假广告类",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=24&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_8",
level:1
},{
illegal_reason_id:16,
reason_id:20012,
reason_name:"低俗",
reason_type:0,
reason_description:"涉及低俗、性暗示或色情信息",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=32&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:2
},{
illegal_reason_id:18,
reason_id:20013,
reason_name:"冒名侵权",
reason_type:0,
reason_description:"涉嫌侵犯他人合法权益",
reason_rule:"《微信公众平台运营规范》4.1条规定-侵权或侵犯隐私类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:1
},{
illegal_reason_id:21,
reason_id:20106,
reason_name:"骚扰",
reason_type:0,
reason_description:"涉及骚扰信息",
reason_rule:"《微信公众平台运营规范》4.10条规定-搔扰类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=26&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_10",
level:3
},{
illegal_reason_id:22,
reason_id:21e3,
reason_name:"默认",
reason_type:0,
reason_description:"涉嫌违规",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:3
},{
illegal_reason_id:23,
reason_id:90001,
reason_name:"侵犯隐私",
reason_type:0,
reason_description:"涉嫌侵犯他人隐私",
reason_rule:"《微信公众平台运营规范》4.1条规定-侵权或侵犯隐私类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:3
},{
illegal_reason_id:35,
reason_id:20104,
reason_name:"造遥",
reason_type:0,
reason_description:"涉嫌造谣或传谣",
reason_rule:"《微信公众平台运营规范》4.9条规定-谣言类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=25&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_9",
level:2
},{
illegal_reason_id:36,
reason_id:20105,
reason_name:"诱导分享",
reason_type:0,
reason_description:"涉嫌诱导分享",
reason_rule:"《微信公众平台运营规范》3.3.1条规定-诱导分享",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=13&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_3",
level:2
},{
illegal_reason_id:40,
reason_id:90002,
reason_name:"抄袭",
reason_type:0,
reason_description:"涉嫌抄袭他人内容",
reason_rule:"《微信公众平台运营规范》4.1.2条规定-内容侵权",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:3
},{
illegal_reason_id:41,
reason_id:90003,
reason_name:"诱导关注 ",
reason_type:0,
reason_description:"涉嫌诱导关注",
reason_rule:"《微信公众平台运营规范》3.3.2条规定-诱导关注",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=13&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_3",
level:2
},{
illegal_reason_id:42,
reason_id:1,
reason_name:"默认",
reason_type:1,
reason_description:"其他",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:43,
reason_id:2,
reason_name:"政治敏感",
reason_type:1,
reason_description:"涉嫌违反相关法律法规",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=32&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:44,
reason_id:3,
reason_name:"色情",
reason_type:1,
reason_description:"涉及低俗或色情信息",
reason_rule:"《微信公众平台运营规范》4.2条规定-色情及色情擦边类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=18&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_2",
level:1
},{
illegal_reason_id:45,
reason_id:4,
reason_name:"虚假认证",
reason_type:1,
reason_description:"涉嫌虚假认证",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:46,
reason_id:5,
reason_name:"侵权",
reason_type:1,
reason_description:"涉嫌侵犯他人合法权益",
reason_rule:"《微信公众平台运营规范》4.1条规定-侵权或侵犯隐私类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:1
},{
illegal_reason_id:47,
reason_id:4,
reason_name:"政治敏感",
reason_type:2,
reason_description:"涉嫌违反相关法律法规",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=32&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:3
},{
illegal_reason_id:48,
reason_id:1,
reason_name:"色情",
reason_type:2,
reason_description:"涉嫌低俗或色情",
reason_rule:"《微信公众平台运营规范》4.2条规定-色情及色情擦边类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=18&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_2",
level:1
},{
illegal_reason_id:49,
reason_id:3,
reason_name:"欺诈",
reason_type:2,
reason_description:"涉嫌欺诈",
reason_rule:"《微信公众平台运营规范》4.8.1条规定-欺诈虚假广告类",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=24&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_8",
level:1
},{
illegal_reason_id:50,
reason_id:5,
reason_name:"诱导分享",
reason_type:2,
reason_description:"涉嫌诱导分享",
reason_rule:"《微信公众平台运营规范》3.3.1条规定-诱导分享",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=13&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_3",
level:2
},{
illegal_reason_id:51,
reason_id:19,
reason_name:"诱导关注",
reason_type:2,
reason_description:"涉嫌诱导关注",
reason_rule:"《微信公众平台运营规范》3.3.2条规定-诱导关注",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=13&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_3",
level:2
},{
illegal_reason_id:52,
reason_id:7,
reason_name:"侵犯隐私",
reason_type:2,
reason_description:"涉嫌侵犯隐私",
reason_rule:"《微信公众平台运营规范》4.1.2条规定-内容侵权",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:3
},{
illegal_reason_id:53,
reason_id:6,
reason_name:"侵权",
reason_type:2,
reason_description:"涉嫌侵犯他人合法权益",
reason_rule:"《微信公众平台运营规范》4.1条规定-侵权或侵犯隐私类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:1
},{
illegal_reason_id:54,
reason_id:11,
reason_name:"外挂",
reason_type:2,
reason_description:"涉嫌使用外挂",
reason_rule:"《微信公众平台运营规范》3.1条规定－使用外挂行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_1",
level:1
},{
illegal_reason_id:55,
reason_id:8,
reason_name:"造遥",
reason_type:2,
reason_description:"涉嫌造谣或传谣",
reason_rule:"《微信公众平台运营规范》4.9条规定-谣言类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=25&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_9",
level:2
},{
illegal_reason_id:56,
reason_id:12,
reason_name:"骚扰",
reason_type:2,
reason_description:"涉嫌骚扰他人",
reason_rule:"《微信公众平台运营规范》4.10条规定-搔扰类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_10",
level:3
},{
illegal_reason_id:57,
reason_id:14,
reason_name:"刷粉",
reason_type:2,
reason_description:"涉嫌刷粉",
reason_rule:"《微信公众平台运营规范》3.2条规定－刷粉行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_2",
level:3
},{
illegal_reason_id:58,
reason_id:13,
reason_name:"互推",
reason_type:2,
reason_description:"涉嫌互推",
reason_rule:"《微信公众平台运营规范》3.2条规定－刷粉行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_2",
level:2
},{
illegal_reason_id:59,
reason_id:16,
reason_name:"抄袭",
reason_type:2,
reason_description:"涉嫌抄袭",
reason_rule:"《微信公众平台运营规范》4.1.2条规定-内容侵权",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:3
},{
illegal_reason_id:60,
reason_id:9,
reason_name:"垃圾广告",
reason_type:2,
reason_description:"涉嫌发送垃圾广告",
reason_rule:"《微信公众平台运营规范》4.8条规定-广告类内容",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=24&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_8",
level:2
},{
illegal_reason_id:61,
reason_id:10,
reason_name:"恶意注册",
reason_type:2,
reason_description:"涉嫌恶意注册",
reason_rule:"《微信公众平台运营规范》1条规定－ 注册规范",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot1",
level:1
},{
illegal_reason_id:62,
reason_id:17,
reason_name:"恶意投诉",
reason_type:2,
reason_description:"涉嫌恶意投诉",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:2
},{
illegal_reason_id:63,
reason_id:18,
reason_name:"违规分销",
reason_type:2,
reason_description:"涉嫌多级分销",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:64,
reason_id:90007,
reason_name:"违规声明原创",
reason_type:0,
reason_description:"涉嫌违规使用原创声明功能",
reason_rule:"微信公众平台运营规范》3.6条规定-滥用原创声明功能",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_6",
level:1
},{
illegal_reason_id:65,
reason_id:90011,
reason_name:"刷粉",
reason_type:0,
reason_description:"涉嫌刷粉",
reason_rule:"微信公众平台运营规范》3.2条规定－刷粉行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_2",
level:1
},{
illegal_reason_id:66,
reason_id:90010,
reason_name:"侵犯名誉/商誉/隐私/肖像",
reason_type:0,
reason_description:"涉嫌侵犯名誉/商誉/隐私/肖像",
reason_rule:"《微信公众平台运营规范》4.1.2条规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:1
},{
illegal_reason_id:69,
reason_id:90013,
reason_name:"滥用模版消息接口",
reason_type:0,
reason_description:"涉嫌滥用模版消息接口",
reason_rule:"《微信公众平台运营规范》3.9条规定-滥用模版消息接口行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=33&t=operation/faq_index&nettype=WIFI&fontScale=100&from=singlemessage&isappinstalled=0#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_9",
level:1
},{
illegal_reason_id:70,
reason_id:90012,
reason_name:"滥用客服消息",
reason_type:0,
reason_description:"涉嫌滥用客服消息",
reason_rule:"《微信公众平台运营规范》3.10条规定-滥用客服消息行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=34&t=operation/faq_index&nettype=WIFI&fontScale=100&from=singlemessage&isappinstalled=0#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_10",
level:1
},{
illegal_reason_id:71,
reason_id:90008,
reason_name:"互推",
reason_type:0,
reason_description:"涉嫌互推",
reason_rule:"《微信公众平台运营规范》3.2条规定－刷粉行为",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot3_2",
level:2
},{
illegal_reason_id:72,
reason_id:90014,
reason_name:"广告恶意点击",
reason_type:0,
reason_description:"恶意点击公众号文章底部广告",
reason_rule:"《广告展示违规行为处理细则》-作弊行为",
wap_url:"http://mp.weixin.qq.com/promotion/readtemplate?t=faq/ad_host_faq_5_tmpl#5dot4",
pc_url:"http://mp.weixin.qq.com/promotion/readtemplate?t=faq/ad_host_faq_5_tmpl#5dot4",
level:1
},{
illegal_reason_id:73,
reason_id:20011,
reason_name:"暴力血腥",
reason_type:0,
reason_description:"涉嫌发布暴力信息",
reason_rule:"《微信公众平台运营规范》4.3条规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=19&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?token=2010733288&t=business/faq_operation_tmpl&type=info#3dot4_3",
level:1
},{
illegal_reason_id:74,
reason_id:90016,
reason_name:"侵犯知识产权",
reason_type:0,
reason_description:"涉嫌侵犯他人版权/商标/专利等知识产权",
reason_rule:"《微信公众平台运营规范》4.1.2条规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:1
},{
illegal_reason_id:75,
reason_id:90009,
reason_name:"其他侵权",
reason_type:0,
reason_description:"涉嫌侵犯他人合法权益",
reason_rule:"《微信公众平台运营规范》4.1条规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=17&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN#3dot4_1",
level:1
},{
illegal_reason_id:76,
reason_id:90017,
reason_name:"恶意投诉",
reason_type:0,
reason_description:"涉嫌恶意投诉他人",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:77,
reason_id:25,
reason_name:"假货",
reason_type:2,
reason_description:"制作/售卖/传播假货",
reason_rule:"《微信公众平台运营规范》4.1条规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:78,
reason_id:26,
reason_name:"网赚刷单",
reason_type:2,
reason_description:"诱导用户转发文章、下载app等",
reason_rule:"《微信公众平台运营规范》禁止诱导类行为的规定",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:85,
reason_id:90018,
reason_name:"阅读原文违规",
reason_type:0,
reason_description:"涉嫌阅读原文跳转至恶意链接",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:86,
reason_id:90019,
reason_name:"违反微信链接内容管理规范",
reason_type:0,
reason_description:"涉嫌违反微信链接内容管理规范",
reason_rule:"《微信外部链接内容管理规范》",
wap_url:"http://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification",
pc_url:"http://weixin.qq.com/cgi-bin/readtemplate?t=weixin_external_links_content_management_specification",
level:1
},{
illegal_reason_id:88,
reason_id:90020,
reason_name:"无证经营",
reason_type:0,
reason_description:"涉嫌无证经营",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:90,
reason_id:90021,
reason_name:"多级分销",
reason_type:0,
reason_description:"涉嫌多级分销经营行为",
reason_rule:"《微信公众平台运营规范》",
wap_url:"http://mp.weixin.qq.com/mp/opshowpage?action=oplaw&id=1&t=operation/faq_index#wechat_redirect",
pc_url:"https://mp.weixin.qq.com/cgi-bin/readtemplate?t=business/faq_operation_tmpl&type=info&lang=zh_CN",
level:1
},{
illegal_reason_id:99,
reason_id:30001,
reason_name:"涉嫌恶意篡改广告",
reason_type:0,
reason_description:"涉嫌恶意篡改广告",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:100,
reason_id:30002,
reason_name:"涉嫌宣传销售假冒伪劣商品",
reason_type:0,
reason_description:"涉嫌宣传销售假冒伪劣商品",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:101,
reason_id:30003,
reason_name:"涉嫌宣传销售易对用户易产生损害用品",
reason_type:0,
reason_description:"涉嫌宣传销售易对用户易产生损害用品",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:102,
reason_id:30004,
reason_name:"涉嫌其他违规",
reason_type:0,
reason_description:"涉嫌其他违规",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:103,
reason_id:30005,
reason_name:"涉嫌未经授权使用或冒用第三方名义投放广告",
reason_type:0,
reason_description:"涉嫌未经授权使用或冒用第三方名义投放广告",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:104,
reason_id:30006,
reason_name:"涉嫌使用绝对化用语",
reason_type:0,
reason_description:"涉嫌使用绝对化用语",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:105,
reason_id:30007,
reason_name:"涉嫌贬低其他生产经营者的商品或服务",
reason_type:0,
reason_description:"涉嫌贬低其他生产经营者的商品或服务",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:106,
reason_id:30008,
reason_name:"涉嫌推广虚假广告",
reason_type:0,
reason_description:"涉嫌推广虚假广告",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:107,
reason_id:30009,
reason_name:"涉嫌虚假宣传官方合作",
reason_type:0,
reason_description:"涉嫌虚假宣传官方合作",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:108,
reason_id:30010,
reason_name:"涉嫌违反广告代言相关规则",
reason_type:0,
reason_description:"涉嫌违反广告代言相关规则",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:109,
reason_id:30011,
reason_name:"涉嫌其他违规",
reason_type:0,
reason_description:"涉嫌其他违规",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:110,
reason_id:30012,
reason_name:"涉嫌存在违规营销行为",
reason_type:0,
reason_description:"涉嫌存在违规营销行为",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:111,
reason_id:30013,
reason_name:"涉嫌推广不符合行业资质要求的产品或服务",
reason_type:0,
reason_description:"涉嫌推广不符合行业资质要求的产品或服务",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:112,
reason_id:30014,
reason_name:"涉嫌广告主公众号存在非腾讯许可的推广行为",
reason_type:0,
reason_description:"涉嫌广告主公众号存在非腾讯许可的推广行为",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:113,
reason_id:30015,
reason_name:"涉嫌恶意删除历史消息",
reason_type:0,
reason_description:"涉嫌恶意删除历史消息",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:114,
reason_id:30016,
reason_name:"涉嫌广告素材与文案不关联",
reason_type:0,
reason_description:"涉嫌广告素材与文案不关联",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:115,
reason_id:30017,
reason_name:"涉嫌推广微信广告不支持投放的产品或服务",
reason_type:0,
reason_description:"涉嫌推广微信广告不支持投放的产品或服务",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:116,
reason_id:30018,
reason_name:"涉嫌其他违规",
reason_type:0,
reason_description:"涉嫌其他违规",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:117,
reason_id:30019,
reason_name:"涉嫌虚假宣传",
reason_type:0,
reason_description:"涉嫌虚假宣传",
reason_rule:"《微信广告投放违规行为处理细则》",
wap_url:"http://ad.weixin.qq.com/learn/n59",
pc_url:"http://ad.weixin.qq.com/learn/n59",
level:0
},{
illegal_reason_id:118,
reason_id:36,
reason_name:"帐号迁移冻结",
reason_type:2,
reason_description:"已申请公众号帐号迁移流程，被冻结/回收",
reason_rule:"公众号帐号迁移说明",
wap_url:"https://kf.qq.com/touch/scene_faq.html?scene_id=kf3414",
pc_url:"https://kf.qq.com/touch/scene_faq.html?scene_id=kf3368",
level:0
}],_=function(e){
return e.getFullYear()+"/"+(e.getMonth()+1)+"/"+e.getDate();
},l=function(e,a){
for(var n=$(".main_bd"),r=0,l=0;l<p.length;l++)p[l].reason_id==e.reason_id&&(r=l);
var s={};
if(s.reason='<a href="'+(p[r].pc_url?p[r].pc_url:p[0].pc_url)+'">'+p[r].reason_description+"</a>",
e.ban_time===e.unlock_time?(s.forever="永久",s.date=""):(s.forever="",s.date="至"+_(new Date(1e3*e.unlock_time))),
a.hide&&("all"===a.hide?n.children().hide():$(a.hide).hide()),a.highlight){
a.highlight=template.compile(a.highlight)(s);
var c={
title:a.highlight.split("|")[0],
desc:template.compile(a.highlight.split("|")[1])()
};
$(template.compile(i)(c)).prependTo(n);
}
if(a.pagemsg){
var d={
content:template.compile(a.pagemsg)(s)
};
0==n.find(".ban_page_msg").length&&$(template.compile(o)(d)).prependTo(n);
}
return a.dialogmsg&&t.show({
type:"warn",
title:"提示",
msg:"能力封禁提示|"+template.compile(a.dialogmsg)(s),
buttons:[{
text:"确定",
type:"primary",
click:function(){
this.remove();
}
}]
}),!1;
},s=function(e,a,n){
var i=!0;
if(!r[a])return!0;
for(var o=0,t=e.length;t>o;o++)if(e[o].func_id==r[a].func_id){
var p=l(e[o],r[a]);
i=p&&i;
}
return!i&&n&&"function"==typeof n&&n(),i;
};
s.getReason=function(e){
if("default"==e)return p[0];
for(var a=0;a<p.length;a++)if(p[a].reason_id==e)return p[a];
return p[0];
},s.getTypeName=function(e){
for(var a in r)if(r[a].func_id==e)return r[a].name;
},n.exports=s;
});define("common/wx/media/imgsDialogByUrls.js",["common/wx/popup.js","tpl/media/imgsDialogByUrls.html.js","common/wx/Step.js","common/wx/media/cropimg.js","common/wx/Tips.js"],function(t){
"use strict";
t("common/wx/popup.js");
var i=t("tpl/media/imgsDialogByUrls.html.js"),o=t("common/wx/Step.js"),s=t("common/wx/media/cropimg.js"),e=t("common/wx/Tips.js");
"function"!=typeof window.__titleImgLoaded&&(window.__titleImgLoaded=function(t){
var i=$(t),o=new window.Image;
o.onload=function(){
o.onload=null,this.width>=200&&this.height>=200?i.parents(".js_imgItem").show():i.parents(".js_imgItem").remove();
},o.src=t.src;
});
var n=function(t){
this.opt=t,this.hasInitCrop=!1,this.cropRatio=t.cropRatio||1.8,this.selectUrls=[],
this._initDialog(),this._initImg(),this._initEvent();
};
return n.prototype={
_initDialog:function(){
var t=this;
this.$dialog=$(wx.T(i,t.opt)).popup({
width:800,
title:"选择封面",
autoShow:!1,
className:"appmsg_content_img_dialog",
buttons:[{
text:"下一步",
type:"primary",
isHide:!0,
classWrap:"js_crop_next_btn",
click:function(){
return 0==t.selectUrls.length?void e.err("请选择封面图片"):void t._cropGoStep(2);
}
},{
text:"上一步",
type:"default",
isHide:!0,
classWrap:"js_crop_pre_btn",
click:function(){
t._cropGoStep(1);
}
},{
text:"完成",
type:"primary",
classWrap:"js_crop_done_btn",
isHide:!0,
click:function(){
if(!t.croping){
var i=this,o=t.$doneBtn;
t.croping=!0,o.btn(!1),t._ImgCropper.getUrl({
onsuccess:function(s){
t.$dialog&&(t.croping=!1,o.btn(!0),i.remove(),t.opt.onOk&&t.opt.onOk([{
oriUrl:s.oriUrl,
file_id:s.file_id||"",
url:s.url
}]));
},
onerror:function(i){
t.$dialog&&(t.croping=!1,o.btn(!0),e.err(-1==i.retcode?"请选择裁剪区域":"系统繁忙，请稍后再试"));
}
});
}
}
}],
onHide:function(){
this.remove(),"function"==typeof t.opt.onHide&&(t.opt.onHide(),t.$dialog=null);
}
}),t.$preBtn=t.$dialog.find(".js_crop_pre_btn"),t.$nextBtn=t.$dialog.find(".js_crop_next_btn"),
t.$doneBtn=t.$dialog.find(".js_crop_done_btn"),t.$step1=t.$dialog.find(".js_step1"),
t.$step2=t.$dialog.find(".js_step2"),t.stepBar=new o({
container:t.$dialog.find(".js_step_wrp"),
names:["1 从正文选择封面","2 裁切封面"]
}),t.$dialog.popup("show"),t.$dialog.popup("resetPosition");
},
_cropGoStep:function(t){
var i="hide",o="show";
1==t?(this.stepBar.setStep(1),i="hide",o="show"):2==t&&(this.stepBar.setStep(2),
i="show",o="hide"),this.$nextBtn[o](),this.$preBtn[i](),this.$doneBtn[i](),this.$step2[i](),
this.$step1[o](),2==t&&this._initCrop();
},
_initCrop:function(){
var t=this,i=this.selectUrls[0];
t._ImgCropper=new s({
container:t.$step2,
cropRatio:t.cropRatio,
url:i.url,
tips:this.opt.cropImgtips
});
},
_initImg:function(){
for(var t=this,i=0,o=t.opt.urls.length;o>i;i++){
var s=t.opt.urls[i],e=new window.Image;
e.onload=function(){
if(this.onload=null,t.$dialog){
var i=t.$dialog.find('.js_imgItem[data-src="'+this.src+'"]');
this.width>=200&&this.height>=200?(i.show().find(".js_imgItemSrc").css({
"background-image":"url("+this.src+")"
}).attr({
"data-width":this.width,
"data-ratio":this.width/this.height
}),t.$nextBtn.show()):i.remove();
}
},e.src=s.url;
}
},
_initEvent:function(){
var t=this;
this.$dialog.on("click",".js_imgItem",function(){
var i=$(this),o=i.find(".js_imgItemSrc");
o.data("remoteid")||o.hasClass("js_catchremoteimageerror")||(t.$dialog.find(".js_imgItem").removeClass("selected"),
i.addClass("selected"),t.selectUrls=[{
url:o.css("background-image").replace(/url\([\"\']?([^\)\'\"]+)[\"\']?\)/,"$1"),
width:o.attr("data-width")||"",
ratio:o.attr("data-ratio")||""
}]);
});
}
},n;
});define("common/wx/popover.js",["tpl/popover.html.js"],function(o,t,e){
"use strict";
function i(o){
if(o=$.extend(!0,{},h,o),this.opt=o,this.$dom=$(o.dom),this.$dom.data("popover")){
var t=this.$dom.data("popover");
return s(o,t),t.$pop.show(),t;
}
return o.buttons&&o.buttons&&o.buttons.each(function(o){
o.type=o.type||"default";
}),this.$pop=$(template.compile(p)(o)),o.addCls&&this.$pop.addClass(o.addCls),$("body").append(this.$pop),
n(this,o),s(o,this),this.$pop.show(),this.$dom.data("popover",this),this.clickIn=!0,
this;
}
function n(o,t){
function e(){
clearTimeout(n),o.show();
}
function i(){
n=setTimeout(function(){
o.hide();
},s);
}
if(t.buttons&&t.buttons.length>0&&o.$pop.find(".jsPopoverBt").each(function(e,i){
t.buttons[e]&&"function"==typeof t.buttons[e].click&&$(i).click(function(i){
t.buttons[e].click.call(o,i);
});
}),o.$pop.find(".jsPopoverClose").click(function(){
t.close===!0?o.hide():"function"==typeof t.close&&t.close.call(o);
}),t.hover&&(o.$dom.hover(function(){
o.hoverTime&&clearTimeout(o.hoverTime);
},function(){
o.hoverTime=o.hide.delay(1,o);
}),o.$pop.hover(function(){
o.hoverTime&&clearTimeout(o.hoverTime);
},function(){
o.hoverTime&&clearTimeout(o.hoverTime),o.hoverTime=o.hide.delay(1,o);
})),t.isToggle){
var n=null,s=300;
o.$dom.hover(e,i),o.$pop.hover(e,i);
}
t.hideIfBlur&&(o._onBlur=function(o){
var t=o.data.context,e=o.target,i=t.$dom.get(0),n=t.$pop.get(0);
t.clickIn?t.clickIn=!1:$.contains(i,e)||i===e||$.contains(n,e)||n===e||o.data.context.hide();
},$(document).on("click",{
context:o
},o._onBlur)),o._onResize=function(o){
o.data.context.resetPosition();
},$(window).on("resize",{
context:o
},o._onResize);
}
function s(o,t){
var e=t.$dom.offset();
"left"==o.margin?(console.log(e.top),console.log(t.$dom.height()),t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left
}).addClass("pos_left")):"right"==o.margin?t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.width()-t.$pop.width()
}).addClass("pos_right"):t.$pop.css({
top:e.top+t.$dom.height(),
left:e.left+t.$dom.outerWidth()/2-t.$pop.width()/2
}).addClass("pos_center");
}
var p=o("tpl/popover.html.js"),h={
dom:"",
content:"",
place:"bottom",
margin:"center",
hideIfBlur:!1,
hover:!1,
addCls:"",
width:"",
isToggle:!1,
onHide:!1,
onShow:!1,
onRemove:!1
};
i.prototype={
remove:function(){
this.$pop.remove(),this.$dom.removeData("popover"),this._onBlur&&$(document).off("click",this._onBlur),
$(window).off("resize",this._onResize),"function"==typeof this.opt.onRemove&&this.opt.onRemove.call(this);
},
hide:function(){
this.$pop.hide(),"function"==typeof this.opt.onHide&&this.opt.onHide.call(this);
},
show:function(){
this.$pop.show(),"function"==typeof this.opt.onShow&&this.opt.onShow.call(this);
},
resetPosition:function(){
return s(this.opt,this);
}
},e.exports=i;
});define("common/wx/preview.js",["common/wx/Tips.js","widget/img_preview.css","tpl/preview.html.js"],function(t,n,i){
"use strict";
var e=t("common/wx/Tips.js"),r=(t("widget/img_preview.css"),t("tpl/preview.html.js")),m=function(t){
this._initData(t),this._render(),this._initEvent();
};
m.prototype={
_moImgData:[],
_msTmplHtml:r,
_moCurrentImgIdx:0,
_initData:function(t){
return this._moImgData=t.imgdata||[],this._moCurrentImgIdx="undefined"==typeof t.current?0:"number"==typeof t.current?t.current:this._inArray(t.current,t.imgdata),
this._moImgData.length<1?void this._throwErr():((this._moCurrentImgIdx<0||this._moCurrentImgIdx>=this._moImgData.length)&&(this._moCurrentImgIdx=0),
void(this._moCfg={
view:this._moImgData.length>1?!0:!1,
imgsrc:this._moImgData[this._moCurrentImgIdx].imgsrc,
downsrc:this._moImgData[this._moCurrentImgIdx].downsrc,
prev:this._moCurrentImgIdx-1>-1?!0:!1,
next:this._moCurrentImgIdx+1<this._moImgData.length?!0:!1
}));
},
_render:function(){
$(template.compile(this._msTmplHtml)(this._moCfg)).appendTo("body");
},
_prev:function(){
this._moCurrentImgIdx>0&&($.extend(this._moCfg,{
imgsrc:this._moImgData[this._moCurrentImgIdx-1].imgsrc,
downsrc:this._moImgData[this._moCurrentImgIdx-1].downsrc,
prev:this._moCurrentImgIdx-1>0?!0:!1,
next:!0
}),this._changeImg(),this._moCurrentImgIdx--);
},
_next:function(){
this._moCurrentImgIdx+1<this._moImgData.length&&($.extend(this._moCfg,{
imgsrc:this._moImgData[this._moCurrentImgIdx+1].imgsrc,
downsrc:this._moImgData[this._moCurrentImgIdx+1].downsrc,
next:this._moCurrentImgIdx+2<this._moImgData.length?!0:!1,
prev:!0
}),this._moCurrentImgIdx++,this._changeImg());
},
_changeImg:function(){
var t=$("#img_opr_container");
this._moCfg.next?t.removeClass("next_disabled"):t.addClass("next_disabled"),this._moCfg.prev?t.removeClass("prev_disabled"):t.addClass("prev_disabled"),
$("#img_dom").hide(),$("#loading_dom").show(),$("#img_dom").find("img").attr("src",""),
$("#img_dom").find("img").attr("src",this._moCfg.imgsrc),$("#btndown").attr("href",this._moCfg.downsrc);
},
_destory:function(){
$(".preview_mask").remove(),$("#preview_container").remove();
},
_throwErr:function(){
alert("系统错误，请重试");
},
_initEvent:function(){
var t=this;
$("#preview_container").on("click",function(n){
var i=n.srcElement||n.target;
$.contains($("#img_container")[0],i)||$.contains($("#img_opr_container")[0],i)||t._destory();
}),$("#closebtn").on("click",function(){
return t._destory(),!1;
}),$("#btnview").on("click",function(){
return""!=t._moCfg.imgsrc?window.open(t._moCfg.imgsrc):e.err("图片资源加载失败。"),!1;
}),$("#btnnext").on("click",function(){
t._next();
}),$("#btnprev").on("click",function(){
t._prev();
}),$(document).keyup(function(n){
27==n.keyCode&&t._destory(),37==n.keyCode&&t._prev(),39==n.keyCode&&t._next();
}),$("#img_dom").find("img").on("load",function(){
$("#img_dom").show(),$("#loading_dom").hide();
});
},
_inArray:function(t,n){
for(var i,e=0;i=n[e];e++)if(t==i.imgsrc)return e;
return-1;
}
},i.exports={
close:function(){
m._destory();
},
show:function(t){
return new m(t);
}
};
});define("common/wx/media/imageDialog.js",["biz_web/ui/checkbox.js","common/wx/popover.js","common/wx/Cgi.js","common/wx/Tips.js","common/wx/popup.js","common/wx/pagebar.js","biz_web/utils/upload.js","common/wx/tooltips.js","tpl/media/dialog/image_layout.html.js","tpl/media/dialog/image_list.html.js","tpl/media/dialog/image_group.html.js","common/wx/media/cropimg.js","tpl/media/dialog/add_group.html.js","tpl/media/dialog/image_water.html.js","common/wx/Step.js","page/media/dialog_img_pick.css"],function(e){
"use strict";
var i=(e("biz_web/ui/checkbox.js"),e("common/wx/popover.js")),t=e("common/wx/Cgi.js"),o=e("common/wx/Tips.js"),r=(e("common/wx/popup.js"),
e("common/wx/pagebar.js")),n=e("biz_web/utils/upload.js"),a=e("common/wx/tooltips.js"),s=e("tpl/media/dialog/image_layout.html.js"),p=e("tpl/media/dialog/image_list.html.js"),l=e("tpl/media/dialog/image_group.html.js"),c=e("common/wx/media/cropimg.js"),d=e("tpl/media/dialog/add_group.html.js"),g=e("tpl/media/dialog/image_water.html.js"),u=(template.render,
template.compile(d)),m=template.compile(l),f=template.compile(p),_=e("common/wx/Step.js"),h={
popover:null
};
e("page/media/dialog_img_pick.css");
var v=function(e){
return new j(e);
},j=function(e){
this.options=e,this.events=[],this.imgArr=[],this.converting=0,this.cropObj={},this.fromUpload=[],
b.init.call(this);
},b={
init:function(){
var e=this,i=e.options=$.extend(!0,{
cropImgtips:"",
cropImg:!1,
cropRatio:1,
tpl:s,
title:"选择图片",
scene:"cdn",
maxSelect:1,
perPage:10,
group:0,
uploadGroupId:1,
coverPicCheckbox:!1,
coverPic:0,
onOK:null,
onCancel:null
},e.options);
i.cropImg&&(i.maxSelect=1,e.cropObj.cropRatio=i.cropRatio),i.tpl=template.compile(i.tpl)(i),
e.on("ok",function(e){
!!h.popover&&h.popover.remove(),this.destroy(),"function"==typeof i.onOK&&i.onOK.call(this,e);
}),e.on("cancel",function(){
!!h.popover&&h.popover.remove(),this.destroy(),"function"==typeof i.onCancel?i.onCancel.call(this):"function"==typeof i.onHide&&i.onHide.call(this);
}),e.on("hide",function(){
!!h.popover&&h.popover.remove(),this.destroy(),"function"==typeof i.onHide&&i.onHide.call(this);
});
var t;
t=i.cropImg?[{
text:"下一步",
classWrap:"js_crop_next_btn",
type:"disabled",
click:function(){
return 0!=e.imgArr.length&&e.imgArr[0].url?void b.cropGoStep.call(e,2):void o.err("请选择封面图片");
}
},{
text:"上一步",
type:"default",
isHide:!0,
classWrap:"js_crop_pre_btn",
click:function(){
b.cropGoStep.call(e,1);
}
},{
text:"完成",
classWrap:"js_crop_done_btn",
isHide:!0,
type:"primary",
click:function(){
var i=e.cropObj;
if(!i.croping){
var t=i.$doneBtn;
i.croping=!0,t.btn(!1),i._ImgCropper.getUrl({
onsuccess:function(o){
if(e.dialog){
i.croping=!1,t.btn(!0);
var r="";
e.options.coverPicCheckbox&&(r=e.dialog.find(".js_show_cover_pic").checkbox("value")||"");
var n=e.imgArr[0];
e.trigger("ok",[{
oriUrl:o.oriUrl,
oriFormat:n.format,
url:o.url,
file_id:o.file_id||"",
source:"lib",
coverPic:r
}]);
}
},
onerror:function(r){
e.dialog&&(i.croping=!1,t.btn(!0),o.err(-1==r.retcode?"请选择裁剪区域":"系统繁忙，请稍后再试"));
}
});
}
}
}]:[{
text:"确定",
type:"disabled",
click:function(){
var t=this.get().find(".js_btn").eq(0).parent();
return t.hasClass("btn_disabled")?void o.err("请选择图片"):(e.popup=this,$.each(e.imgArr,function(i,t){
t.source=-1!=e.fromUpload.indexOf(t.file_id+"")?"upload":"lib",e.options.coverPicCheckbox&&(t.coverPic=e.popup.get().find(".js_show_cover_pic").checkbox("value")||"");
}),void("cdn"==i.scene&&e.converting>0?(t.btn(!1),e.on("converted",function(){
0==e.converting&&(e.trigger("ok",[{
url:url
}]),t.btn(!0));
})):e.trigger("ok",e.imgArr||[])));
}
},{
text:"取消",
click:function(){
e.trigger("cancel");
}
}],e.dialog=$(i.tpl.trim()).popup({
title:i.title,
className:"img_dialog_wrp",
width:846,
buttons:t,
onHide:function(){
e.trigger("hide");
}
});
var r=e.dialog.popup("get");
i.cropImg&&(e.cropObj.stepBar=new _({
container:r.find(".js_step_wrp"),
names:["1 从素材库选择封面","2 裁切封面"]
}),e.cropObj.$preBtn=r.find(".js_crop_pre_btn"),e.cropObj.$nextBtn=r.find(".js_crop_next_btn"),
e.cropObj.$doneBtn=r.find(".js_crop_done_btn"),e.cropObj.$selectFrame=r.find(".js_select_frame"),
e.cropObj.$cropFrame=r.find(".js_crop_frame")),r.find(".js_show_cover_pic").checkbox(),
r.find(".js_loading").show(),w.getImagesByGroupId({
group_id:i.group,
count:i.perPage
},function(t){
if(e.dialog){
var o=t.page_info;
o.scene=i.scene,o.group=i.group;
var r=e.dialog.popup("get"),n=m(o);
r.find(".js_loading").hide(),r.find(".js_group").append(n).find(".js_total").text("(%s)".sprintf(o.file_cnt.img_cnt)),
b.renderImageList(r.find(".js_list"),o,e.imgArr),b.initEvent.call(e,t),b.initWater.call(e,o),
b.initPageBar.call(e,o,i.group),e.dialog.popup("resetPosition");
}
}),b.initUpload.call(e,i.group);
},
cropGoStep:function(e){
var i=this.cropObj,t="hide",o="show";
1==e?(i.stepBar.setStep(1),t="hide",o="show"):2==e&&(i.stepBar.setStep(2),t="show",
o="hide"),i.$nextBtn[o](),i.$preBtn[t](),i.$doneBtn[t](),i.$cropFrame[t](),i.$selectFrame[o](),
2==e&&b.initCrop.call(this);
},
initCrop:function(){
var e=this.cropObj;
0!=this.imgArr.length&&this.imgArr[0].url&&(e._ImgCropper=new c({
container:e.$cropFrame,
cropRatio:e.cropRatio,
width:400,
height:400,
url:this.imgArr[0].url,
tips:this.options.cropImgtips
}));
},
initEvent:function(){
var e=this,i=e.dialog.popup("get"),t=e.options;
i.on("click",".js_imageitem",function(){
var r,n=$(this),a=n.find("label"),s=i.find(".js_btn_p").eq(0),p=n.data("url"),l=n.data("id"),c=n.data("oristatus"),d=n.data("format");
a.hasClass("selected")?(p||e.converting--,a.removeClass("selected"),r=x.indexOf(e.imgArr,l),
r>=0&&e.imgArr.splice(r,1),i.find(".js_selected").text(e.imgArr.length)):1==t.maxSelect?(p||(e.converting=1),
a.addClass("selected"),n.siblings().find("label").removeClass("selected"),e.imgArr=[{
url:p,
file_id:l,
format:d,
copyright_status:c
}],i.find(".js_selected").text(e.imgArr.length)):t.maxSelect>e.imgArr.length?(p||e.converting++,
a.addClass("selected"),e.imgArr.push({
url:p,
file_id:l,
format:d,
copyright_status:c
}),i.find(".js_selected").text(e.imgArr.length)):o.err("最多可选%s张".sprintf(t.maxSelect)),
e.imgArr.length>0?s.enable().addClass("btn_primary"):s.disable(),"cdn"==t.scene&&a.hasClass("selected")&&!p&&w.getCdnUrlByFileId({
file_id:l,
group_id:i.find(".js_groupitem.selected").data("groupid")
},function(i){
0==i.errcode?(e.converting--,n.data("url",i.url),r=x.indexOf(e.imgArr,l),r>=0&&(e.imgArr[r].url=i.url),
e.trigger("converted")):(o.err("转存失败"),n.click());
});
}),i.on("click",".js_creategroup",function(){
b.createPopover.call(e,{
dom:this,
content:u({}),
ok:function(){
b.createGroup.call(e);
}
});
}),i.on("click",".js_groupitem",function(o,r){
var n=$(this),a=i.find(".js_list"),s=i.find(".js_loading"),p=i.find(".js_pagebar"),l=n.data("groupid");
n.hasClass("selected")||(n.addClass("selected").siblings(".selected").removeClass("selected"),
$(".js_imageupload").data("groupid",l),a.hide(),p.hide(),s.show(),w.getImagesByGroupId({
group_id:l,
count:t.perPage
},function(o){
if(e.dialog&&l==i.find(".js_groupitem.selected").data("groupid")){
o=o.page_info,o.scene=t.scene,s.hide(),p.show(),b.renderImageList(a,o,e.imgArr),
b.initPageBar.call(e,o,l),b.initUpload.call(e);
for(var n=0;r&&"upload"==r.source&&n<r.count;++n)a.children().eq(n).click();
}
}));
});
},
createPopover:function(e){
!!h.popover&&h.popover.remove(),h.popover=new i({
dom:e.dom,
content:e.content,
margin:"center",
place:"bottom",
buttons:[{
text:"确定",
type:"primary",
click:function(){
this.remove(),e.ok.call(this);
}
},{
text:"取消",
click:function(){
this.remove();
}
}]
});
},
createGroup:function(){
var e=this,i=h.popover.$pop,r=i.find(".jsPopoverBt").eq(0),n=i.find("input").val().trim();
return n.length<1||n.length>6?void o.err("分组名字为1-6个字符"):(r.btn(0),void t.post({
url:wx.url("/cgi-bin/filepage"),
data:{
action:"create_group",
name:n
},
mask:!1
},function(i){
var t=i.base_resp.ret;
if(0==t){
var a=e.options;
w.getImagesByGroupId({
group_id:a.group,
count:a.perPage
},function(i){
if(e.dialog){
var t=i.page_info;
t.group=1;
for(var o=0,r=t.file_group_list.file_group.length;r>o;o++){
var a=t.file_group_list.file_group[o];
a.name==n&&(t.group=a.id);
}
var s=e.dialog.popup("get"),p=s.find(".js_list"),l=m(t);
s.find(".js_group").html(l),b.renderImageList(p,{
file_item:[]
},e.imgArr),b.initPageBar.call(e,t,t.group),s.find(".js_imageupload").data("groupid",t.group),
b.initUpload.call(e,t.group);
}
});
}else 15006==t?(o.err("已经超过100个分组，不能再创建新的分组。"),r.btn(!0)):(o.err("创建失败，请重试"),r.btn(!0));
}));
},
initPageBar:function(e,i){
var t=this,o=t.dialog.popup("get"),n=t.options;
b.pagebar&&b.pagebar.destroy();
var a=0;
return 0==i?a=e.file_cnt.img_cnt:e.file_group_list.file_group.each(function(e){
e.id==i&&(a=e.count);
}),n.perPage>=a?void o.find(".js_pagebar").empty():void(b.pagebar=new r({
container:o.find(".js_pagebar"),
perPage:n.perPage,
initShowPage:1,
totalItemsNum:a,
first:!1,
last:!1,
isSimple:!0,
callback:function(e){
var i=o.find(".js_groupitem.selected").data("groupid"),r=o.find(".js_list"),a=o.find(".js_loading"),s=o.find(".js_pagebar");
r.hide(),s.hide(),a.show(),w.getImagesByGroupId({
group_id:i,
begin:e.perPage*(e.currentPage-1),
count:n.perPage
},function(e){
e=e.page_info,e.scene=n.scene,a.hide(),s.show(),b.renderImageList(r,e,t.imgArr);
});
}
}));
},
initUpload:function(e){
var i=this,t=i.dialog.popup("get"),r=t.find(".js_imageupload"),a="js_imageupload"+Math.random().toString().substr(2),s=i.options,p=t.find(".js_groupitem.selected").data("groupid")||e;
p=p?p:s.uploadGroupId,r.attr("id",a).off().children().remove(),n.uploadImageLibFile({
container:"#"+a,
only_cdn:s.only_cdn,
multi:!0,
type:2,
scene:s.uploadScene,
doublewrite:!0,
groupid:p,
onComplete:function(e,t,r,n){
0==n.base_resp.ret&&o.suc("上传成功"),i.fromUpload.push(n.content);
},
onAllComplete:function(e,i){
var o=t.find(".js_groupitem.selected"),r=t.find(".js_groupitem[data-groupid="+p+"]");
if(i.filesUploaded>0)if(!s.doselected||s.doselected&&i.filesUploaded<=1*s.completeUploadMinSelectNum?o.removeClass("selected").trigger("click",{
source:"upload",
count:i.filesUploaded
}):o.removeClass("selected").trigger("click",{
source:"upload",
count:0
}),r.length>0&&o.length>0&&r[0]===o[0]){
var n=+o.find("span").text();
o.find("span").text(n+i.filesUploaded);
}else{
var n=+o.find("span").text();
o.find("span").text(n+i.filesUploaded);
var a=+r.find("span").text();
r.find("span").text(a+i.filesUploaded);
}
},
showError:!0
});
},
initWater:function(e){
var i=this,t=i.options,o=i.dialog.popup("get"),r=e.watermark_status,n=template.compile(g)({
status:r,
set_water_url:wx.url("/cgi-bin/settingpage?t=setting/function&action=function&set_water=1")
});
o.find(".js_water").text((t.desc?"，":"")+(3==r?"已关闭":"已开启")+"图片水印"),new a({
container:o.find(".js_water_tips"),
content:n,
parentClass:"js_water img_water",
position:{
left:-138,
top:2
},
reposition:!0,
type:"hover"
});
},
renderImageList:function(e,i,t){
i.file_item.each(function(e){
e.img_url=e.cdn_url?e.cdn_url:wx.url("/cgi-bin/getimgdata?mode=small&source=file&fileId=%s".sprintf(e.file_id)),
-1!=x.indexOf(t,e.file_id)&&(e.selected=1);
}),e.html(f(i)).show();
var o=0,r=0,n=28308,a=28308,s=9,p=10,l=0,c=117,d=$(".js_pic"),g=d.length,u="";
d.each(function(){
var e=$(this);
e.on("error",function(){
++o,++l,u=u+e.attr("src")+" ",l===g&&((new Image).src="/mp/jsmonitor?idkey="+n+"_"+s+"_"+o+";"+a+"_"+p+"_"+r+"&lc=1&log0=[errorurl]["+encodeURIComponent(u)+"]");
}),e.on("load",function(){
++r,++l;
var i=parseInt(e.css("width")),t=parseInt(e.css("height"));
if(t>i?e.css("width",c):e.css("height",c),l===g){
var d="/mp/jsmonitor?idkey="+n+"_"+s+"_"+o+";"+a+"_"+p+"_"+r;
o>0&&(d=d+"&lc=1&log0=[errorurl]["+encodeURIComponent(u)+"]"),(new Image).src=d;
}
}),e.attr("src",e.attr("data-src"));
});
}
},w={
getImagesByGroupId:function(e,i){
e=$.extend({
group_id:1,
begin:0,
count:8,
type:2
},e),t.get({
url:wx.url("/cgi-bin/filepage"),
data:e,
mask:!1
},function(e){
0!=e.base_resp.ret?t.show(e):i(e);
});
},
getCdnUrlByFileId:function(e,i){
e.group_id=e.group_id||1,t.post({
url:wx.url("/cgi-bin/uploadimg2cdn?action=duplicate"),
data:e,
mask:!1
},function(e){
i(e);
});
}
},x={
indexOf:function(e,i){
for(var t=0,o=e.length;o>t;++t)if(e[t].file_id==i)return t;
return-1;
}
},y={
on:function(e,i){
if(i){
var t=this.events;
return t[e]=t[e]||[],t[e].push(i),this;
}
},
trigger:function(e){
var i=this,t=arguments,o=i.events[e];
return o?($.each(o,function(e,o){
o.apply(i,Array.prototype.slice.call(t,1));
}),this):void 0;
},
hide:function(){
return this.dialog.popup("hide"),this;
},
show:function(){
return this.dialog.popup("show"),this;
},
destroy:function(){
!!this.dialog&&this.dialog.popup("remove"),this.dialog=null;
}
};
return $.extend(j.prototype,y),v;
});define("biz_common/moment.js",[],function(t,e,n){
function s(t,e){
return function(n){
return c(t.call(this,n),e);
};
}
function r(t){
return function(e){
return this.lang().ordinal(t.call(this,e));
};
}
function a(){}
function i(t){
u(this,t);
}
function o(t){
var e=this._data={},n=t.years||t.year||t.y||0,s=t.months||t.month||t.M||0,r=t.weeks||t.week||t.w||0,a=t.days||t.day||t.d||0,i=t.hours||t.hour||t.h||0,o=t.minutes||t.minute||t.m||0,u=t.seconds||t.second||t.s||0,c=t.milliseconds||t.millisecond||t.ms||0;
this._milliseconds=c+1e3*u+6e4*o+36e5*i,this._days=a+7*r,this._months=s+12*n,e.milliseconds=c%1e3,
u+=d(c/1e3),e.seconds=u%60,o+=d(u/60),e.minutes=o%60,i+=d(o/60),e.hours=i%24,a+=d(i/24),
a+=7*r,e.days=a%30,s+=d(a/30),e.months=s%12,n+=d(s/12),e.years=n;
}
function u(t,e){
for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);
return t;
}
function d(t){
return 0>t?Math.ceil(t):Math.floor(t);
}
function c(t,e){
for(var n=t+"";n.length<e;)n="0"+n;
return n;
}
function h(t,e,n){
var s,r=e._milliseconds,a=e._days,i=e._months;
r&&t._d.setTime(+t+r*n),a&&t.date(t.date()+a*n),i&&(s=t.date(),t.date(1).month(t.month()+i*n).date(Math.min(s,t.daysInMonth())));
}
function f(t){
return"[object Array]"===Object.prototype.toString.call(t);
}
function l(t,e){
var n,s=Math.min(t.length,e.length),r=Math.abs(t.length-e.length),a=0;
for(n=0;s>n;n++)~~t[n]!==~~e[n]&&a++;
return a+r;
}
function _(t,e){
return e.abbr=t,A[t]||(A[t]=new a),A[t].set(e),A[t];
}
function m(e){
return e?(!A[e]&&Z&&t("./lang/"+e),A[e]):C.fn._lang;
}
function M(t){
return t.match(/\[.*\]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");
}
function y(t){
var e,n,s=t.match(E);
for(e=0,n=s.length;n>e;e++)s[e]=ie[s[e]]?ie[s[e]]:M(s[e]);
return function(r){
var a="";
for(e=0;n>e;e++)a+="function"==typeof s[e].call?s[e].call(r,t):s[e];
return a;
};
}
function Y(t,e){
function n(e){
return t.lang().longDateFormat(e)||e;
}
for(var s=5;s--&&J.test(e);)e=e.replace(J,n);
return se[e]||(se[e]=y(e)),se[e](t);
}
function D(t){
switch(t){
case"DDDD":
return $;

case"YYYY":
return I;

case"YYYYY":
return X;

case"S":
case"SS":
case"SSS":
case"DDD":
return N;

case"MMM":
case"MMMM":
case"dd":
case"ddd":
case"dddd":
case"a":
case"A":
return j;

case"X":
return G;

case"Z":
case"ZZ":
return R;

case"T":
return B;

case"MM":
case"DD":
case"YY":
case"HH":
case"hh":
case"mm":
case"ss":
case"M":
case"D":
case"d":
case"H":
case"h":
case"m":
case"s":
return V;

default:
return new RegExp(t.replace("\\",""));
}
}
function p(t,e,n){
var s,r=n._a;
switch(t){
case"M":
case"MM":
r[1]=null==e?0:~~e-1;
break;

case"MMM":
case"MMMM":
s=m(n._l).monthsParse(e),null!=s?r[1]=s:n._isValid=!1;
break;

case"D":
case"DD":
case"DDD":
case"DDDD":
null!=e&&(r[2]=~~e);
break;

case"YY":
r[0]=~~e+(~~e>68?1900:2e3);
break;

case"YYYY":
case"YYYYY":
r[0]=~~e;
break;

case"a":
case"A":
n._isPm="pm"===(e+"").toLowerCase();
break;

case"H":
case"HH":
case"h":
case"hh":
r[3]=~~e;
break;

case"m":
case"mm":
r[4]=~~e;
break;

case"s":
case"ss":
r[5]=~~e;
break;

case"S":
case"SS":
case"SSS":
r[6]=~~(1e3*("0."+e));
break;

case"X":
n._d=new Date(1e3*parseFloat(e));
break;

case"Z":
case"ZZ":
n._useUTC=!0,s=(e+"").match(te),s&&s[1]&&(n._tzh=~~s[1]),s&&s[2]&&(n._tzm=~~s[2]),
s&&"+"===s[0]&&(n._tzh=-n._tzh,n._tzm=-n._tzm);
}
null==e&&(n._isValid=!1);
}
function g(t){
var e,n,s=[];
if(!t._d){
for(e=0;7>e;e++)t._a[e]=s[e]=null==t._a[e]?2===e?1:0:t._a[e];
s[3]+=t._tzh||0,s[4]+=t._tzm||0,n=new Date(0),t._useUTC?(n.setUTCFullYear(s[0],s[1],s[2]),
n.setUTCHours(s[3],s[4],s[5],s[6])):(n.setFullYear(s[0],s[1],s[2]),n.setHours(s[3],s[4],s[5],s[6])),
t._d=n;
}
}
function w(t){
var e,n,s=t._f.match(E),r=t._i;
for(t._a=[],e=0;e<s.length;e++)n=(D(s[e]).exec(r)||[])[0],n&&(r=r.slice(r.indexOf(n)+n.length)),
ie[s[e]]&&p(s[e],n,t);
t._isPm&&t._a[3]<12&&(t._a[3]+=12),t._isPm===!1&&12===t._a[3]&&(t._a[3]=0),g(t);
}
function T(t){
for(var e,n,s,r,a=99;t._f.length;){
if(e=u({},t),e._f=t._f.pop(),w(e),n=new i(e),n.isValid()){
s=n;
break;
}
r=l(e._a,n.toArray()),a>r&&(a=r,s=n);
}
u(t,s);
}
function k(t){
var e,n=t._i;
if(q.exec(n)){
for(t._f="YYYY-MM-DDT",e=0;4>e;e++)if(Q[e][1].exec(n)){
t._f+=Q[e][0];
break;
}
R.exec(n)&&(t._f+=" Z"),w(t);
}else t._d=new Date(n);
}
function v(t){
var e=t._i,n=P.exec(e);
void 0===e?t._d=new Date:n?t._d=new Date(+n[1]):"string"==typeof e?k(t):f(e)?(t._a=e.slice(0),
g(t)):t._d=new Date(e instanceof Date?+e:e);
}
function S(t,e,n,s,r){
return r.relativeTime(e||1,!!n,t,s);
}
function L(t,e,n){
var s=U(Math.abs(t)/1e3),r=U(s/60),a=U(r/60),i=U(a/24),o=U(i/365),u=45>s&&["s",s]||1===r&&["m"]||45>r&&["mm",r]||1===a&&["h"]||22>a&&["hh",a]||1===i&&["d"]||25>=i&&["dd",i]||45>=i&&["M"]||345>i&&["MM",U(i/30)]||1===o&&["y"]||["yy",o];
return u[2]=e,u[3]=t>0,u[4]=n,S.apply({},u);
}
function b(t,e,n){
var s=n-e,r=n-t.day();
return r>s&&(r-=7),s-7>r&&(r+=7),Math.ceil(C(t).add("d",r).dayOfYear()/7);
}
function F(t){
var e=t._i,n=t._f;
return null===e||""===e?null:("string"==typeof e&&(t._i=e=m().preparse(e)),C.isMoment(e)?(t=u({},e),
t._d=new Date(+e._d)):n?f(n)?T(t):w(t):v(t),new i(t));
}
function H(t,e){
C.fn[t]=C.fn[t+"s"]=function(t){
var n=this._isUTC?"UTC":"";
return null!=t?(this._d["set"+n+e](t),this):this._d["get"+n+e]();
};
}
function O(t){
C.duration.fn[t]=function(){
return this._data[t];
};
}
function z(t,e){
C.duration.fn["as"+t]=function(){
return+this/e;
};
}
for(var C,W,x="2.0.0",U=Math.round,A={},Z="undefined"!=typeof n&&n.exports,P=/^\/?Date\((\-?\d+)/i,E=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,J=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,V=/\d\d?/,N=/\d{1,3}/,$=/\d{3}/,I=/\d{1,4}/,X=/[+\-]?\d{1,6}/,j=/[0-9]*[a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF]+\s*?[\u0600-\u06FF]+/i,R=/Z|[\+\-]\d\d:?\d\d/i,B=/T/i,G=/[\+\-]?\d+(\.\d{1,3})?/,q=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,K="YYYY-MM-DDTHH:mm:ssZ",Q=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],te=/([\+\-]|\d\d)/gi,ee="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),ne={
Milliseconds:1,
Seconds:1e3,
Minutes:6e4,
Hours:36e5,
Days:864e5,
Months:2592e6,
Years:31536e6
},se={},re="DDD w W M D d".split(" "),ae="M D H h m s w W".split(" "),ie={
M:function(){
return this.month()+1;
},
MMM:function(t){
return this.lang().monthsShort(this,t);
},
MMMM:function(t){
return this.lang().months(this,t);
},
D:function(){
return this.date();
},
DDD:function(){
return this.dayOfYear();
},
d:function(){
return this.day();
},
dd:function(t){
return this.lang().weekdaysMin(this,t);
},
ddd:function(t){
return this.lang().weekdaysShort(this,t);
},
dddd:function(t){
return this.lang().weekdays(this,t);
},
w:function(){
return this.week();
},
W:function(){
return this.isoWeek();
},
YY:function(){
return c(this.year()%100,2);
},
YYYY:function(){
return c(this.year(),4);
},
YYYYY:function(){
return c(this.year(),5);
},
a:function(){
return this.lang().meridiem(this.hours(),this.minutes(),!0);
},
A:function(){
return this.lang().meridiem(this.hours(),this.minutes(),!1);
},
H:function(){
return this.hours();
},
h:function(){
return this.hours()%12||12;
},
m:function(){
return this.minutes();
},
s:function(){
return this.seconds();
},
S:function(){
return~~(this.milliseconds()/100);
},
SS:function(){
return c(~~(this.milliseconds()/10),2);
},
SSS:function(){
return c(this.milliseconds(),3);
},
Z:function(){
var t=-this.zone(),e="+";
return 0>t&&(t=-t,e="-"),e+c(~~(t/60),2)+":"+c(~~t%60,2);
},
ZZ:function(){
var t=-this.zone(),e="+";
return 0>t&&(t=-t,e="-"),e+c(~~(10*t/6),4);
},
X:function(){
return this.unix();
}
};re.length;)W=re.pop(),ie[W+"o"]=r(ie[W]);
for(;ae.length;)W=ae.pop(),ie[W+W]=s(ie[W],2);
for(ie.DDDD=s(ie.DDD,3),a.prototype={
set:function(t){
var e,n;
for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e;
},
_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
months:function(t){
return this._months[t.month()];
},
_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
monthsShort:function(t){
return this._monthsShort[t.month()];
},
monthsParse:function(t){
var e,n,s;
for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=C([2e3,e]),
s="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=new RegExp(s.replace(".",""),"i")),
this._monthsParse[e].test(t))return e;
},
_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
weekdays:function(t){
return this._weekdays[t.day()];
},
_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
weekdaysShort:function(t){
return this._weekdaysShort[t.day()];
},
_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
weekdaysMin:function(t){
return this._weekdaysMin[t.day()];
},
_longDateFormat:{
LT:"h:mm A",
L:"MM/DD/YYYY",
LL:"MMMM D YYYY",
LLL:"MMMM D YYYY LT",
LLLL:"dddd, MMMM D YYYY LT"
},
longDateFormat:function(t){
var e=this._longDateFormat[t];
return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){
return t.slice(1);
}),this._longDateFormat[t]=e),e;
},
meridiem:function(t,e,n){
return t>11?n?"pm":"PM":n?"am":"AM";
},
_calendar:{
sameDay:"[Today at] LT",
nextDay:"[Tomorrow at] LT",
nextWeek:"dddd [at] LT",
lastDay:"[Yesterday at] LT",
lastWeek:"[last] dddd [at] LT",
sameElse:"L"
},
calendar:function(t,e){
var n=this._calendar[t];
return"function"==typeof n?n.apply(e):n;
},
_relativeTime:{
future:"in %s",
past:"%s ago",
s:"a few seconds",
m:"a minute",
mm:"%d minutes",
h:"an hour",
hh:"%d hours",
d:"a day",
dd:"%d days",
M:"a month",
MM:"%d months",
y:"a year",
yy:"%d years"
},
relativeTime:function(t,e,n,s){
var r=this._relativeTime[n];
return"function"==typeof r?r(t,e,n,s):r.replace(/%d/i,t);
},
pastFuture:function(t,e){
var n=this._relativeTime[t>0?"future":"past"];
return"function"==typeof n?n(e):n.replace(/%s/i,e);
},
ordinal:function(t){
return this._ordinal.replace("%d",t);
},
_ordinal:"%d",
preparse:function(t){
return t;
},
postformat:function(t){
return t;
},
week:function(t){
return b(t,this._week.dow,this._week.doy);
},
_week:{
dow:0,
doy:6
}
},C=function(t,e,n){
return F({
_i:t,
_f:e,
_l:n,
_isUTC:!1
});
},C.utc=function(t,e,n){
return F({
_useUTC:!0,
_isUTC:!0,
_l:n,
_i:t,
_f:e
});
},C.unix=function(t){
return C(1e3*t);
},C.duration=function(t,e){
var n,s=C.isDuration(t),r="number"==typeof t,a=s?t._data:r?{}:t;
return r&&(e?a[e]=t:a.milliseconds=t),n=new o(a),s&&t.hasOwnProperty("_lang")&&(n._lang=t._lang),
n;
},C.version=x,C.defaultFormat=K,C.lang=function(t,e){
return t?(e?_(t,e):A[t]||m(t),void(C.duration.fn._lang=C.fn._lang=m(t))):C.fn._lang._abbr;
},C.langData=function(t){
return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),m(t);
},C.isMoment=function(t){
return t instanceof i;
},C.isDuration=function(t){
return t instanceof o;
},C.fn=i.prototype={
clone:function(){
return C(this);
},
valueOf:function(){
return+this._d;
},
unix:function(){
return Math.floor(+this._d/1e3);
},
toString:function(){
return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
},
toDate:function(){
return this._d;
},
toJSON:function(){
return C.utc(this).format("YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
},
toArray:function(){
var t=this;
return[t.year(),t.month(),t.date(),t.hours(),t.minutes(),t.seconds(),t.milliseconds()];
},
isValid:function(){
return null==this._isValid&&(this._isValid=this._a?!l(this._a,(this._isUTC?C.utc(this._a):C(this._a)).toArray()):!isNaN(this._d.getTime())),
!!this._isValid;
},
utc:function(){
return this._isUTC=!0,this;
},
local:function(){
return this._isUTC=!1,this;
},
format:function(t){
var e=Y(this,t||C.defaultFormat);
return this.lang().postformat(e);
},
add:function(t,e){
var n;
return n="string"==typeof t?C.duration(+e,t):C.duration(t,e),h(this,n,1),this;
},
subtract:function(t,e){
var n;
return n="string"==typeof t?C.duration(+e,t):C.duration(t,e),h(this,n,-1),this;
},
diff:function(t,e,n){
var s,r,a=this._isUTC?C(t).utc():C(t).local(),i=6e4*(this.zone()-a.zone());
return e&&(e=e.replace(/s$/,"")),"year"===e||"month"===e?(s=432e5*(this.daysInMonth()+a.daysInMonth()),
r=12*(this.year()-a.year())+(this.month()-a.month()),r+=(this-C(this).startOf("month")-(a-C(a).startOf("month")))/s,
"year"===e&&(r/=12)):(s=this-a-i,r="second"===e?s/1e3:"minute"===e?s/6e4:"hour"===e?s/36e5:"day"===e?s/864e5:"week"===e?s/6048e5:s),
n?r:d(r);
},
from:function(t,e){
return C.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e);
},
fromNow:function(t){
return this.from(C(),t);
},
calendar:function(){
var t=this.diff(C().startOf("day"),"days",!0),e=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";
return this.format(this.lang().calendar(e,this));
},
isLeapYear:function(){
var t=this.year();
return t%4===0&&t%100!==0||t%400===0;
},
isDST:function(){
return this.zone()<C([this.year()]).zone()||this.zone()<C([this.year(),5]).zone();
},
day:function(t){
var e=this._isUTC?this._d.getUTCDay():this._d.getDay();
return null==t?e:this.add({
d:t-e
});
},
startOf:function(t){
switch(t=t.replace(/s$/,"")){
case"year":
this.month(0);

case"month":
this.date(1);

case"week":
case"day":
this.hours(0);

case"hour":
this.minutes(0);

case"minute":
this.seconds(0);

case"second":
this.milliseconds(0);
}
return"week"===t&&this.day(0),this;
},
endOf:function(t){
return this.startOf(t).add(t.replace(/s?$/,"s"),1).subtract("ms",1);
},
isAfter:function(t,e){
return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)>+C(t).startOf(e);
},
isBefore:function(t,e){
return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)<+C(t).startOf(e);
},
isSame:function(t,e){
return e="undefined"!=typeof e?e:"millisecond",+this.clone().startOf(e)===+C(t).startOf(e);
},
zone:function(){
return this._isUTC?0:this._d.getTimezoneOffset();
},
daysInMonth:function(){
return C.utc([this.year(),this.month()+1,0]).date();
},
dayOfYear:function(t){
var e=U((C(this).startOf("day")-C(this).startOf("year"))/864e5)+1;
return null==t?e:this.add("d",t-e);
},
isoWeek:function(t){
var e=b(this,1,4);
return null==t?e:this.add("d",7*(t-e));
},
week:function(t){
var e=this.lang().week(this);
return null==t?e:this.add("d",7*(t-e));
},
lang:function(t){
return void 0===t?this._lang:(this._lang=m(t),this);
}
},W=0;W<ee.length;W++)H(ee[W].toLowerCase().replace(/s$/,""),ee[W]);
H("year","FullYear"),C.fn.days=C.fn.day,C.fn.weeks=C.fn.week,C.fn.isoWeeks=C.fn.isoWeek,
C.duration.fn=o.prototype={
weeks:function(){
return d(this.days()/7);
},
valueOf:function(){
return this._milliseconds+864e5*this._days+2592e6*this._months;
},
humanize:function(t){
var e=+this,n=L(e,!t,this.lang());
return t&&(n=this.lang().pastFuture(e,n)),this.lang().postformat(n);
},
lang:C.fn.lang
};
for(W in ne)ne.hasOwnProperty(W)&&(z(W,ne[W]),O(W.toLowerCase()));
return z("Weeks",6048e5),C.lang("zh-cn",{
months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),
weekdaysMin:"日_一_二_三_四_五_六".split("_"),
longDateFormat:{
LT:"Ah点mm",
L:"YYYY年MMMD日",
LL:"YYYY年MMMD日",
LLL:"YYYY年MMMD日LT",
LLLL:"YYYY年MMMD日ddddLT",
l:"YYYY年MMMD日",
ll:"YYYY年MMMD日",
lll:"YYYY年MMMD日LT",
llll:"YYYY年MMMD日ddddLT"
},
meridiem:function(t,e){
return 9>t?"早上":11>t&&30>e?"上午":13>t&&30>e?"中午":18>t?"下午":"晚上";
},
calendar:{
sameDay:"[今天]LT",
nextDay:"[明天]LT",
nextWeek:"[下]ddddLT",
lastDay:"[昨天]LT",
lastWeek:"[上]ddddLT",
sameElse:"L"
},
ordinal:function(t,e){
switch(e){
case"d":
case"D":
case"DDD":
return t+"日";

case"M":
return t+"月";

case"w":
case"W":
return t+"周";

default:
return t;
}
},
relativeTime:{
future:"%s内",
past:"%s前",
s:"几秒",
m:"1分钟",
mm:"%d分钟",
h:"1小时",
hh:"%d小时",
d:"1天",
dd:"%d天",
M:"1个月",
MM:"%d个月",
y:"1年",
yy:"%d年"
}
}),C;
});define("biz_common/jquery.validate.js",[],function(){
!function(t){
t.extend(t.fn,{
validate:function(e){
if(!this.length)return void(e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));
var i=t.data(this[0],"validator");
return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),
i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){
i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),
void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0);
}),this.submit(function(e){
function r(){
var r;
return i.settings.submitHandler?(i.submitButton&&(r=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&r.remove(),!1):!0;
}
return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,r()):i.form()?i.pendingRequest?(i.formSubmitted=!0,
!1):r():(i.focusInvalid(),!1);
})),i);
},
valid:function(){
if(t(this[0]).is("form"))return this.validate().form();
var e=!0,i=t(this[0].form).validate();
return this.each(function(){
e=e&&i.element(this);
}),e;
},
removeAttrs:function(e){
var i={},r=this;
return t.each(e.split(/\s/),function(t,e){
i[e]=r.attr(e),r.removeAttr(e);
}),i;
},
rules:function(e,i){
var r=this[0];
if(e){
var n=t.data(r.form,"validator").settings,s=n.rules,a=t.validator.staticRules(r);
switch(e){
case"add":
t.extend(a,t.validator.normalizeRule(i)),delete a.messages,s[r.name]=a,i.messages&&(n.messages[r.name]=t.extend(n.messages[r.name],i.messages));
break;

case"remove":
if(!i)return delete s[r.name],a;
var o={};
return t.each(i.split(/\s/),function(t,e){
o[e]=a[e],delete a[e];
}),o;
}
}
var u=t.validator.normalizeRules(t.extend({},t.validator.classRules(r),t.validator.attributeRules(r),t.validator.dataRules(r),t.validator.staticRules(r)),r);
if(u.required){
var l=u.required;
delete u.required,u=t.extend({
required:l
},u);
}
return u;
}
}),t.extend(t.expr[":"],{
blank:function(e){
return!t.trim(""+t(e).val());
},
filled:function(e){
return!!t.trim(""+t(e).val());
},
unchecked:function(e){
return!t(e).prop("checked");
}
}),t.validator=function(e,i){
this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init();
},t.validator.format=function(e,i){
return 1===arguments.length?function(){
var i=t.makeArray(arguments);
return i.unshift(e),t.validator.format.apply(this,i);
}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),
i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){
e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){
return i;
});
}),e);
},t.extend(t.validator,{
defaults:{
messages:{},
groups:{},
rules:{},
errorClass:"error",
validClass:"valid",
errorElement:"label",
focusInvalid:!0,
errorContainer:t([]),
errorLabelContainer:t([]),
onsubmit:!0,
ignore:":hidden",
ignoreTitle:!1,
onfocusin:function(t){
this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),
this.addWrapper(this.errorsFor(t)).hide());
},
onfocusout:function(t){
this.checkable(t)||this.element(t);
},
onkeyup:function(t,e){
(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t);
},
onclick:function(t){
t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode);
},
highlight:function(e,i,r){
"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(r):t(e).addClass(i).removeClass(r);
},
unhighlight:function(e,i,r){
"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(r):t(e).removeClass(i).addClass(r);
}
},
setDefaults:function(e){
t.extend(t.validator.defaults,e);
},
messages:{
required:"This field is required.",
remote:"Please fix this field.",
email:"Please enter a valid email address.",
url:"Please enter a valid URL.",
date:"Please enter a valid date.",
dateISO:"Please enter a valid date (ISO).",
number:"Please enter a valid number.",
digits:"Please enter only digits.",
creditcard:"Please enter a valid credit card number.",
equalTo:"Please enter the same value again.",
maxlength:t.validator.format("Please enter no more than {0} characters."),
minlength:t.validator.format("Please enter at least {0} characters."),
rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),
range:t.validator.format("Please enter a value between {0} and {1}."),
max:t.validator.format("Please enter a value less than or equal to {0}."),
min:t.validator.format("Please enter a value greater than or equal to {0}.")
},
autoCreateRanges:!1,
prototype:{
init:function(){
function e(e){
var i=t.data(this[0].form,"validator"),r="on"+e.type.replace(/^validate/,"");
i.settings[r]&&i.settings[r].call(i,this[0],e);
}
this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),
this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},
this.reset();
var i=this.groups={};
t.each(this.settings.groups,function(e,r){
"string"==typeof r&&(r=r.split(/\s/)),t.each(r,function(t,r){
i[r]=e;
});
});
var r=this.settings.rules;
t.each(r,function(e,i){
r[e]=t.validator.normalizeRule(i);
}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),
this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);
},
form:function(){
return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),
this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),
this.valid();
},
checkForm:function(){
this.prepareForm();
for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);
return this.valid();
},
element:function(e){
e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),
this.currentElements=t(e);
var i=this.check(e)!==!1;
return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),
this.showErrors(),i;
},
showErrors:function(e){
if(e){
t.extend(this.errorMap,e),this.errorList=[];
for(var i in e)this.errorList.push({
message:e[i],
element:this.findByName(i)[0]
});
this.successList=t.grep(this.successList,function(t){
return!(t.name in e);
});
}
this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();
},
resetForm:function(){
t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,
this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue");
},
numberOfInvalids:function(){
return this.objectLength(this.invalid);
},
objectLength:function(t){
var e=0;
for(var i in t)e++;
return e;
},
hideErrors:function(){
this.addWrapper(this.toHide).hide();
},
valid:function(){
return 0===this.size();
},
size:function(){
return this.errorList.length;
},
focusInvalid:function(){
if(this.settings.focusInvalid)try{
t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");
}catch(e){}
},
findLastActive:function(){
var e=this.lastActive;
return e&&1===t.grep(this.errorList,function(t){
return t.element.name===e.name;
}).length&&e;
},
elements:function(){
var e=this,i={};
return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){
return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),
this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0);
});
},
clean:function(e){
return t(e)[0];
},
errors:function(){
var e=this.settings.errorClass.replace(" ",".");
return t(this.settings.errorElement+"."+e,this.errorContext);
},
reset:function(){
this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),
this.currentElements=t([]);
},
prepareForm:function(){
this.reset(),this.toHide=this.errors().add(this.containers);
},
prepareElement:function(t){
this.reset(),this.toHide=this.errorsFor(t);
},
elementValue:function(e){
var i=t(e).attr("type"),r=t(e).val();
return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof r?r.replace(/\r/g,""):r;
},
check:function(e){
e=this.validationTargetFor(this.clean(e));
var i,r=t(e).rules(),n=!1,s=this.elementValue(e);
for(var a in r){
var o={
method:a,
parameters:r[a]
};
try{
if(i=t.validator.methods[a].call(this,s,e,o.parameters),"dependency-mismatch"===i){
n=!0;
continue;
}
if(n=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));
if(!i)return this.formatAndAdd(e,o),!1;
}catch(u){
throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+o.method+"' method.",u),
u;
}
}
return n?void 0:(this.objectLength(r)&&this.successList.push(e),!0);
},
customDataMessage:function(e,i){
return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase());
},
customMessage:function(t,e){
var i=this.settings.messages[t];
return i&&(i.constructor===String?i:i[e]);
},
findDefined:function(){
for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t];
return void 0;
},
defaultMessage:function(e,i){
return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>");
},
formatAndAdd:function(e,i){
var r=this.defaultMessage(e,i.method),n=/\$?\{(\d+)\}/g;
"function"==typeof r?r=r.call(this,i.parameters,e):n.test(r)&&(r=t.validator.format(r.replace(n,"{$1}"),i.parameters)),
this.errorList.push({
message:r,
element:e
}),this.errorMap[e.name]=r,this.submitted[e.name]=r;
},
addWrapper:function(t){
return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t;
},
defaultShowErrors:function(){
var t,e;
for(t=0;this.errorList[t];t++){
var i=this.errorList[t];
this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),
this.showLabel(i.element,i.message);
}
if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);
if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);
this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show();
},
validElements:function(){
return this.currentElements.not(this.invalidElements());
},
invalidElements:function(){
return t(this.errorList).map(function(){
return this.element;
});
},
showLabel:function(e,i){
var r=this.errorsFor(e);
r.length?(r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
r.html(i)):(r=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),
this.settings.wrapper&&(r=r.hide().show().wrap("<"+this.settings.wrapper+" class='frm_msg fail'/>").parent()),
this.labelContainer.append(r).length||(this.settings.errorPlacement?this.settings.errorPlacement(r,t(e)):r.insertAfter(e))),
!i&&this.settings.success&&(r.text(""),"string"==typeof this.settings.success?r.addClass(this.settings.success):this.settings.success(r,e)),
this.toShow=this.toShow.add(r);
},
errorsFor:function(e){
var i=this.idOrName(e);
return this.errors().filter(function(){
return t(this).attr("for")===i;
});
},
idOrName:function(t){
return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name);
},
validationTargetFor:function(t){
return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),
t;
},
checkable:function(t){
return/radio|checkbox/i.test(t.type);
},
findByName:function(e){
return t(this.currentForm).find("[name='"+e+"']");
},
getLength:function(e,i){
switch(i.nodeName.toLowerCase()){
case"select":
return t("option:selected",i).length;

case"input":
if(this.checkable(i))return this.findByName(i.name).filter(":checked").length;
}
return e.length;
},
depend:function(t,e){
return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0;
},
dependTypes:{
"boolean":function(t){
return t;
},
string:function(e,i){
return!!t(e,i.form).length;
},
"function":function(t,e){
return t(e);
}
},
optional:function(e){
var i=this.elementValue(e);
return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch";
},
startRequest:function(t){
this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0);
},
stopRequest:function(e,i){
this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],
i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),
this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),
this.formSubmitted=!1);
},
previousValue:function(e){
return t.data(e,"previousValue")||t.data(e,"previousValue",{
old:null,
valid:!0,
message:this.defaultMessage(e,"remote")
});
}
},
classRuleSettings:{
required:{
required:!0
},
email:{
email:!0
},
url:{
url:!0
},
date:{
date:!0
},
dateISO:{
dateISO:!0
},
number:{
number:!0
},
digits:{
digits:!0
},
creditcard:{
creditcard:!0
}
},
addClassRules:function(e,i){
e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e);
},
classRules:function(e){
var i={},r=t(e).attr("class");
return r&&t.each(r.split(" "),function(){
this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this]);
}),i;
},
attributeRules:function(e){
var i={},r=t(e),n=r[0].getAttribute("type");
for(var s in t.validator.methods){
var a;
"required"===s?(a=r.get(0).getAttribute(s),""===a&&(a=!0),a=!!a):a=r.attr(s),/min|max/.test(s)&&(null===n||/number|range|text/.test(n))&&(a=Number(a)),
a?i[s]=a:n===s&&"range"!==n&&(i[s]=!0);
}
return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,
i;
},
dataRules:function(e){
var i,r,n={},s=t(e);
for(i in t.validator.methods)r=s.data("rule-"+i.toLowerCase()),void 0!==r&&(n[i]=r);
return n;
},
staticRules:function(e){
var i={},r=t.data(e.form,"validator");
return r.settings.rules&&(i=t.validator.normalizeRule(r.settings.rules[e.name])||{}),
i;
},
normalizeRules:function(e,i){
return t.each(e,function(r,n){
if(n===!1)return void delete e[r];
if(n.param||n.depends){
var s=!0;
switch(typeof n.depends){
case"string":
s=!!t(n.depends,i.form).length;
break;

case"function":
s=n.depends.call(i,i);
}
s?"string"!=typeof n&&(e[r]=void 0!==n.param?n.param:!0):delete e[r];
}
}),t.each(e,function(r,n){
e[r]=t.isFunction(n)?n(i):n;
}),t.each(["minlength","maxlength"],function(){
e[this]&&(e[this]=Number(e[this]));
}),t.each(["rangelength","range"],function(){
var i;
e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),
e[this]=[Number(i[0]),Number(i[1])]));
}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,
delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],
delete e.minlength,delete e.maxlength)),e;
},
normalizeRule:function(e){
if("string"==typeof e){
var i={};
t.each(e.split(/\s/),function(){
i[this]=!0;
}),e=i;
}
return e;
},
addMethod:function(e,i,r){
t.validator.methods[e]=i,t.validator.messages[e]=void 0!==r?r:t.validator.messages[e],
i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e));
},
methods:{
required:function(e,i,r){
if(!this.depend(r,i))return"dependency-mismatch";
if("select"===i.nodeName.toLowerCase()){
var n=t(i).val();
return n&&n.length>0;
}
return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0;
},
email:function(t,e){
return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t);
},
url:function(t,e){
return this.optional(e)||/^(https?|s?ftp|weixin):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t);
},
date:function(t,e){
return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString());
},
dateISO:function(t,e){
return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t);
},
number:function(t,e){
return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t);
},
digits:function(t,e){
return this.optional(e)||/^\d+$/.test(t);
},
creditcard:function(t,e){
if(this.optional(e))return"dependency-mismatch";
if(/[^0-9 \-]+/.test(t))return!1;
var i=0,r=0,n=!1;
t=t.replace(/\D/g,"");
for(var s=t.length-1;s>=0;s--){
var a=t.charAt(s);
r=parseInt(a,10),n&&(r*=2)>9&&(r-=9),i+=r,n=!n;
}
return i%10===0;
},
minlength:function(e,i,r){
var n=t.isArray(e)?e.length:this.getLength(t.trim(e),i);
return this.optional(i)||n>=r;
},
maxlength:function(e,i,r){
var n=t.isArray(e)?e.length:this.getLength(t.trim(e),i);
return this.optional(i)||r>=n;
},
rangelength:function(e,i,r){
var n=t.isArray(e)?e.length:this.getLength(t.trim(e),i);
return this.optional(i)||n>=r[0]&&n<=r[1];
},
min:function(t,e,i){
return this.optional(e)||t>=i;
},
max:function(t,e,i){
return this.optional(e)||i>=t;
},
range:function(t,e,i){
return this.optional(e)||t>=i[0]&&t<=i[1];
},
equalTo:function(e,i,r){
var n=t(r);
return this.settings.onfocusout&&n.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){
t(i).valid();
}),e===n.val();
},
remote:function(e,i,r){
if(this.optional(i))return"dependency-mismatch";
var n=this.previousValue(i);
if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),n.originalMessage=this.settings.messages[i.name].remote,
this.settings.messages[i.name].remote=n.message,r="string"==typeof r&&{
url:r
}||r,n.old===e)return n.valid;
n.old=e;
var s=this;
this.startRequest(i);
var a={};
return a[i.name]=e,t.ajax(t.extend(!0,{
url:r,
mode:"abort",
port:"validate"+i.name,
dataType:"json",
data:a,
success:function(r){
s.settings.messages[i.name].remote=n.originalMessage;
var a=r===!0||"true"===r;
if(a){
var o=s.formSubmitted;
s.prepareElement(i),s.formSubmitted=o,s.successList.push(i),delete s.invalid[i.name],
s.showErrors();
}else{
var u={},l=r||s.defaultMessage(i,"remote");
u[i.name]=n.message=t.isFunction(l)?l(e):l,s.invalid[i.name]=!0,s.showErrors(u);
}
n.valid=a,s.stopRequest(i,a);
}
},r)),"pending";
}
}
}),t.format=t.validator.format;
}(jQuery),function(t){
var e={};
if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,r){
var n=t.port;
"abort"===t.mode&&(e[n]&&e[n].abort(),e[n]=r);
});else{
var i=t.ajax;
t.ajax=function(r){
var n=("mode"in r?r:t.ajaxSettings).mode,s=("port"in r?r:t.ajaxSettings).port;
return"abort"===n?(e[s]&&e[s].abort(),e[s]=i.apply(this,arguments),e[s]):i.apply(this,arguments);
};
}
}(jQuery),function(t){
t.extend(t.fn,{
validateDelegate:function(e,i,r){
return this.bind(i,function(i){
var n=t(i.target);
return n.is(e)?r.apply(n,arguments):void 0;
});
}
});
}(jQuery),function(t){
t.validator.defaults.errorClass="frm_msg_content",t.validator.defaults.errorElement="span",
t.validator.defaults.errorPlacement=function(t,e){
e.parent().after(t);
},t.validator.defaults.wrapper="p",t.validator.messages={
required:"必选字段",
remote:"请修正该字段",
email:"请输入正确格式的电子邮件",
url:"请输入合法的网址",
date:"请输入合法的日期",
dateISO:"请输入合法的日期 (ISO).",
number:"请输入合法的数字",
digits:"只能输入整数",
creditcard:"请输入合法的信用卡号",
equalTo:"请再次输入相同的值",
accept:"请输入拥有合法后缀名的字符串",
maxlength:t.validator.format("请输入一个长度最多是 {0} 的字符串"),
minlength:t.validator.format("请输入一个长度最少是 {0} 的字符串"),
rangelength:t.validator.format("请输入一个长度介于 {0} 和 {1} 之间的字符串"),
range:t.validator.format("请输入一个介于 {0} 和 {1} 之间的值"),
max:t.validator.format("请输入一个最大为 {0} 的值"),
min:t.validator.format("请输入一个最小为 {0} 的值")
},function(){
function e(t){
var e,i=0;
"x"==t[17].toLowerCase()&&(t[17]=10);
for(var r=0;17>r;r++)i+=n[r]*t[r];
return e=i%11,t[17]==s[e]?!0:!1;
}
function i(t){
var e=t.substring(6,10),i=t.substring(10,12),r=t.substring(12,14),n=new Date(e,parseFloat(i)-1,parseFloat(r));
return(new Date).getFullYear()-parseInt(e)<18?!1:n.getFullYear()!=parseFloat(e)||n.getMonth()!=parseFloat(i)-1||n.getDate()!=parseFloat(r)?!1:!0;
}
function r(r){
if(r=t.trim(r.replace(/ /g,"")),15==r.length)return!1;
if(18==r.length){
var n=r.split("");
return i(r)&&e(n)?!0:!1;
}
return!1;
}
var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],s=[1,0,10,9,8,7,6,5,4,3,2];
t.validator.addMethod("idcard",function(t){
return r(t);
},"身份证格式不正确，或者年龄未满18周岁，请重新填写"),t.validator.addMethod("mobile",function(e){
return e=t.trim(e),/^1\d{10}$/.test(e);
},"请输入正确的手机号码"),t.validator.addMethod("telephone",function(e){
return e=t.trim(e),/^\d{1,4}(-\d{1,12})+$/.test(e);
},"请输入正确的座机号码，如020-12345678"),t.validator.addMethod("verifycode",function(e){
return e=t.trim(e),/^\d{6}$/.test(e);
},"验证码应为6位数字"),t.validator.addMethod("byteRangeLength",function(t,e,i){
return this.optional(e)||t.len()<=i[1]&&t.len()>=i[0];
},"_(必须为{0}到{1}个字节之间)");
}();
}(jQuery);
var t={
optional:function(){
return!1;
},
getLength:function(t){
return t?t.length:0;
}
},e=$.validator;
return e.rules={},$.each(e.methods,function(i,r){
e.rules[i]=function(e,i){
return r.call(t,e,null,i);
};
}),e;
});define("common/wx/tooltips.js",["tpl/tooltips.html.js"],function(o,t,n){
"use strict";
var i={
position:{},
container:"",
type:"hover",
buttons:[],
delay:300,
disabled:!1,
reposition:!1,
container_close:!1,
parentClass:"",
container_mode:"absolute"
},s=wx.T,e=o("tpl/tooltips.html.js"),p="btn_disabled",c="hover",h="show",a=function(o){
if(this.options=o=$.extend(!0,{},i,o),this.$container=$(this.options.container),
this.$container&&0!=this.$container.length){
var t=this.$container.offset(),n=this.$container.height(),a=this.options.position.left||this.$container.data("x")||0,l=n+(this.options.position.top||this.$container.data("y")||0);
this.options.offset={
left:t.left+a,
top:t.top+l,
left_x:a,
top_y:l
},!o.content&&(o.content=this.$container.data("tips")||""),this.$dom=$(s(e,o)).appendTo("body"),
this.options.disabled&&this.$container.addClass(p);
var d=this,f=this.options.type===c||"click"===this.options.type?this.options.type:c;
if(f==c){
var r=null;
this.$container.hover(function(){
d.options.onshow&&"function"==typeof d.options.onshow?d.options.onshow.apply(d):!d.options.disabled&&d.show();
},function(){
r=window.setTimeout(function(){
d.hide();
},d.options.delay);
}),this.$dom.hover(function(){
r&&window.clearTimeout(r);
},function(){
d.hide();
});
}else this.$container.click(function(){
return d.options.disabled||d.options.onbeforeclick&&"function"==typeof d.options.onbeforeclick&&d.options.onbeforeclick.apply(d)===!1?void 0:(d.$dom.data(h)?d.options.onclose&&"function"==typeof d.options.onclose?d.options.onclose.apply(d):d.hide():d.options.onshow&&"function"==typeof d.options.onshow?d.options.onshow.apply(d):d.show(),
!1);
});
$(document).on("click",function(o){
d.$dom.find(o.target).length||(d.options.onclose&&"function"==typeof d.options.onclose?d.options.onclose.apply(d,[o]):d.hide());
}),d.$dom.find(".js_popover_close").on("click",function(o){
return d.options.onclose&&"function"==typeof d.options.onclose?d.options.onclose.apply(d,[o]):d.hide(),
!1;
}),this.$dom.hide(),function(){
$.each(d.$dom.find(".js_btn"),function(o,t){
d.options.buttons[o].click&&$(t).on("click",function(){
d.options.buttons[o].click.apply(d);
});
});
}();
}
};
a.prototype={
constructor:a,
show:function(){
if(this.options.reposition){
var o=this.$container.offset(),t=o.left+this.options.offset.left_x,n=o.top+this.options.offset.top_y;
this.$dom.css({
left:t,
top:n
}).show();
}else this.$dom.show();
this.$dom.data(h,!0);
},
hide:function(){
this.$dom.hide(),this.$dom.data(h,!1);
},
enable:function(){
return this.options.disabled=!1,this.$container.removeClass(p),this;
},
disable:function(){
return this.options.disabled=!0,this.$container.addClass(p),this;
}
},n.exports=a;
});define("biz_web/ui/dropdown.js",["biz_web/widget/dropdown.css","tpl/biz_web/ui/dropdown.html.js"],function(e){
"use strict";
function t(e){
e.render&&(e.renderHtml="",$.each(e.data,function(t,a){
e.renderHtml+=e.render(a);
})),e=$.extend(!0,{},d,e);
var t=this;
t.container=$(e.container),t.container.addClass(e.search?i+" search":i),this.isDisabled=e.disabled,
e.disabled?t.container.addClass("disabled"):t.container.removeClass("disabled"),
t.opt=e,t.container.html(template.compile(n)(e)).find(".jsDropdownList").hide(),
t.bt=t.container.find(".jsDropdownBt"),t.dropdown=t.container.find(".jsDropdownList"),
$.each(e.data,function(e,a){
$.data(t.dropdown.find(".jsDropdownItem")[e],"value",a.value),$.data(t.dropdown.find(".jsDropdownItem")[e],"name",a.name),
$.data(t.dropdown.find(".jsDropdownItem")[e],"item",a);
}),"undefined"!=typeof e.index&&0!==e.data.length&&(t.bt.find(".jsBtLabel").html(e.data[e.index].name||e.label),
t.value=e.data[e.index].value),t.bt.on("click",function(){
return a(),e.disabled||(t.dropdown.show(),t.container.addClass("open")),!1;
}),e.search&&t.bt.find(".jsBtLabel").on("keyup",function(e){
if(!t.disabled){
var a=$(this);
if(13==e.keyCode)t.value?(a.html(a.data("name")).removeClass("error"),t.dropdown.hide()):a.find("div").remove();else{
var n=a.html().trim(),d=[];
t.value=null,t.dropdown.show().find(".jsDropdownItem").each(function(){
var e=$(this);
e.hasClass("js_empty")||(e.data("name").indexOf(n)>-1?(e.parent().show(),d.push({
name:e.data("name"),
value:e.data("value")
})):e.parent().hide());
}),0==d.length?0==t.dropdown.find(".js_empty").length&&t.dropdown.append('<li class="jsDropdownItem js_empty empty">未找到"'+n+'"</li>'):(t.dropdown.find(".js_empty").remove(),
1==d.length&&(d[0].name==n?a.removeClass("error"):a.data("name",d[0].name),t.value=d[0].value));
}
}
}).on("blur",function(){
if(!t.disabled){
var a=$(this);
t.value?$(this).html()!=$(this).data("name")&&(a.addClass("error"),t.value=null):""!=a.html()?a.addClass("error"):(a.html(e.label).removeClass("error"),
t.value=null);
}
}).on("focus",function(){
if(!t.disabled){
var a=$(this),n=$(this).html().trim();
n==e.label&&a.html("").removeClass("error"),""==n&&a.removeClass("error"),t.dropdown.show(),
t.container.addClass("open");
}
}),$(document).on("click",a),t.dropdown.on("click",".jsDropdownItem",function(){
if("disabled"==$(this).attr("disabled"))return!1;
var a=$(this).data("value"),n=$(this).data("name"),d=$(this).data("index"),i=$(this).parents(".jsDropdownList").siblings(".jsDropdownBt").find(".jsBtLabel").attr("data-value");
if((!t.value||t.value&&t.value!=a)&&(t.value=a,t.name=n,e.callback&&"function"==typeof e.callback)){
var o=e.callback(a,n,d,$(this).data("item"),i)||n,s=$(this).data("value");
e.search?t.bt.find(".jsBtLabel").html(o).data("name",o).removeClass("error"):t.bt.find(".jsBtLabel").attr("data-value",s).html(o);
}
t.dropdown.hide();
});
}
function a(){
$(".jsDropdownList").hide(),$(".dropdown_menu").each(function(){
!$(this).hasClass("dropdown_checkbox")&&$(this).removeClass("open");
});
}
e("biz_web/widget/dropdown.css");
var n=e("tpl/biz_web/ui/dropdown.html.js"),d={
label:"请选择",
data:[],
callback:$.noop,
render:$.noop,
delay:500,
disabled:!1,
search:!1
},i="dropdown_menu";
return t.prototype={
selected:function(e,t){
var a=this;
if("number"==typeof e){
if(this.opt.data&&this.opt.data[e]){
var n=this.opt.data[e].name,d=this.opt.data[e].value;
0==t||this.dropdown.find(".jsDropdownItem:eq("+e+")").trigger("click",d),this.bt.find(".jsBtLabel").html(n);
}
}else $.each(this.opt.data,function(n,i){
return e==i.value||e==i.name?(0==t||a.dropdown.find(".jsDropdownItem:eq("+n+")").trigger("click",d),
a.bt.find(".jsBtLabel").html(i.name),!1):void 0;
});
return this;
},
reset:function(){
return this.bt.find(".jsBtLabel").html(this.opt.label),this.value=null,this;
},
hidegreater:function(e){
var t=this;
return"number"==typeof e&&t.opt.data&&t.opt.data[e]&&(t.dropdown.find(".jsDropdownItem").show(),
t.dropdown.find(".jsDropdownItem:gt("+e+")").hide()),this;
},
destroy:function(){
return this.isDisabled&&this.container.removeClass("disabled"),this.container.children().remove(),
this.container.off(),this;
},
enable:function(){
return this.opt.disabled=!1,this.container.removeClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!0),
this;
},
disable:function(){
return this.opt.disabled=!0,this.container.addClass("disabled"),this.opt.search&&this.bt.find(".jsBtLabel").attr("contenteditable",!1),
this;
}
},t;
});