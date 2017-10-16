define("tpl/media/dialog/videomsg_layout.html.js",[],function(){
return'<div class="dialog_media_container">\n    <div class="sub_title_bar in_dialog">\n        <div class="title_tab js_videotab"></div>\n        <div class="search_bar dn">\n            <span class="frm_input_box search with_del append">\n                <a class="del_btn" href="javascript:"><i class="icon_search_del"></i>&nbsp;</a>\n                <a id="msgSearchBtn" href="javascript:" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input id="msgSearchInput" type="text" placeholder="关键字" value="" class="frm_input">\n            </span>\n        </div>\n        <div class="richvideo_create js_video_create">\n            <a class="btn btn_primary btn_add" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                <i class="icon14_common add_white"></i>新建视频            </a>\n        </div>\n    </div>\n    <div class="js_video_status js_video_content dn">\n        <div class="richvideo_list media_dialog" id="js_videomsg_list">\n            <div class="richvideo_col"><div class="inner"></div></div>&nbsp;\n            <div class="richvideo_col"><div class="inner"></div></div>\n        </div>\n    </div>\n    <div class="js_video_status js_video_tencent link_search_video_box dn js_video_search">\n        <div class="video">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">视频/图文网址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        <input type="text" class="frm_input js_video_txurl js_video_url" placeholder="支持插入微信公众号文章链接、视频详情页链接和腾讯视频链接">\n                    </span>\n                    <p class="frm_msg fail js_video_url_tip">只支持已发布的微信公众号链接、视频详情页链接和腾讯视频链接</p>\n                </div>\n            </div>\n			<!-- <div class="video_preview js_video_preview"></div> --><!-- 原来的js_video_preview去掉改成和素材库、小视频一样的方式通过richvideo_list插入视频@lulu -->\n		</div>\n        <div class="richvideo_list media_dialog" id="js_video_search_list">\n            <div class="richvideo_col"><div class="inner"></div></div><!-- 这里能否控制如果是腾讯视频的链接则只显示一个richvideo_col，如需支持多视频才显示两个richvideo_col？@lulu\n            肯定可以啊！ @radeonwu -->\n            <div class="richvideo_col"><div class="inner"></div></div>\n            <!--<div class="pagination_wrp pageNavigator js_video_tencent_pagebar"></div>--><!-- 如果有多视频的情况下才显示分页，视频搜索这里用单独的分页组件，不要使用外面的分页（js_pagebar） @lulu-->\n            <!--图文消息最多出现3个视频，这里不需要分页 @radeonwu-->\n        </div>\n    </div>\n    <div class="js_video_status js_video_loading">\n        <i class="icon_loading_small white">loading...</i>\n    </div>\n    <div class="js_video_status js_video_none dn">\n        <div class="no_media_wrp">\n            <p class="empty_tips js_empty_tips"></p>\n            <!--\n            <div class="richvideo_create js_video_create">\n                <a class="" target="_blank" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&type=15&lang=zh_CN&token={token}">\n                    <i class="icon_richvideo_small"></i><strong>新建视频消息</strong>\n                </a>\n            </div>\n            -->\n        </div>\n        <span class="vm_box"></span>\n    </div>\n    \n    <div class="pagination_wrp pageNavigator js_pagebar"></div><!-- 在视频搜索的tab下不要使用这个分页组件 @lulu-->\n</div>\n\n';
});define("common/wx/media/video.js",["widget/media/richvideo.css","widget/media.css","biz_web/lib/video.js","common/wx/Cgi.js","common/wx/time.js","common/qq/Class.js","biz_web/lib/swfobject.js","tpl/media/video.html.js","tpl/media/simple_videomsg.html.js","tpl/media/wxvideo.html.js","tpl/media/videomsg.html.js"],function(e){
"use strict";
e("widget/media/richvideo.css"),e("widget/media.css");
var i,t=e("biz_web/lib/video.js"),o=e("common/wx/Cgi.js"),d=e("common/wx/time.js"),s=e("common/qq/Class.js"),n=e("biz_web/lib/swfobject.js"),a=e("tpl/media/video.html.js"),r=wx.T,l=wx.data.t,m=document,c=!!n.ua.pv[0],f=m.createElement("video"),u=navigator.userAgent.toLowerCase(),v=/msie/.test(u),p=/firefox/.test(u);
t.options.flash.swf=wx.path.video;
var h={
id:"",
source:"",
type:"",
file_id:""
},w=5e3,g=function(e){
if(e.video_url){
{
var i="tmp"+(1e5*Math.random()|0);
$('<video id="%s"></video>'.sprintf(i)).appendTo("body");
}
t("#"+i).ready(function(){
$("#"+i).hide();
var t=this;
this.on("error",function(){
t.dispose(),e.dom.find(".loading_tips").show(),e.video_url="",setTimeout(function(){
g(e);
},w);
}),this.on("loadedmetadata",function(){
t.dispose(),$(e.selector).children().remove(),e.for_transfer=!1,e.digest=e.digest?e.digest.html(!1):"",
new _(e);
});
var o=e.video_url;
t.src(f.canPlayType?o:[{
type:"video/x-flv",
src:o+"&trans=1"
}]),t.play();
});
}else o.get({
url:wx.url("/cgi-bin/appmsg?action=get_video_url&videoid=%s".sprintf(e.video_id)),
error:function(){
setTimeout(function(){
g(e);
},w);
}
},function(i){
e.video_url=i.video_url||"",e.video_download_url=i.video_download_url||"",setTimeout(function(){
g(e);
},w);
});
},_=s.declare({
init:function(t){
var o=this;
if($(t.selector).data("opt",t),t=$.extend(!0,{},h,t),o.id=t.id,o.source=t.source,
o.file_id=t.file_id,o.type=t.type,o.video_url=t.video_url,o.tpl=t.tpl,o.ff_must_flash=t.ff_must_flash,
t.src=o.getVideoURL(),t.token=l||wx.data.t,t.time=t.create_time?d.timeFormat(t.create_time):"",
t.digest=t.digest?t.digest.replace(/<br.*>/g,"\n").html():"",t.for_network="string"==typeof t.video_url?!t.video_url:!t.content,
!t.file_id&&t.multi_item&&t.multi_item.length>0){
var s=t.multi_item[0];
s&&s.cover&&(t.img_url=s.cover);
}
i=e(t.sent?"tpl/media/simple_videomsg.html.js":21==+t.type||9==+t.type||11==+t.type?"tpl/media/wxvideo.html.js":"tpl/media/videomsg.html.js");
var n=$("videomsg"==t.tpl?r(i,t):r(a,t));
o.dom=t.dom=$(t.selector).append(n),"videomsg"==t.tpl&&t.for_transfer&&g(t,o.dom),
o.dom.find(".video_desc").length&&o.dom.find(".video_desc").html(o.dom.find(".video_desc").attr("data-digest").replace(/\n/g,"<br>")),
o.dom.find(".wxVideoScreenshot").on("click",function(){
o.dom.find(".mediaContent").css({
height:"auto"
}),o.play(t.play);
}),o.dom.find(".wxNetworkVideo").on("click",function(){
window.open($(this).attr("data-contenturl"));
}),o.dom.find(".video_switch").click(function(){
o.dom.find(".mediaContent").css({
height:"104px"
}),o.pause(t.pause);
});
},
getVideoURL:function(){
var e=this.source,i=this.id,t=(this.msg_id||"",this.file_id);
return e&&(e="&source="+e),this.video_url||"/cgi-bin/getvideodata?msgid={msgid}&fileid={fileid}&token={token}{source}".format({
msgid:i,
fileid:t,
source:e,
token:wx.data.t
});
},
canPlayType:function(){
this.type;
return!f.canPlayType&&!c;
},
play:function(e){
var i=this;
if(i.canPlayType())return void alert("您当前浏览器无法播放视频，请安装Flash插件/更换Chrome浏览器");
var o=this.id,d=this.player;
if(d)return $("#wxVideoBox"+o).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show(),
d.play(),e&&e(this);
var s=i.getVideoURL();
$("#wxVideoBox"+o).addClass("wxVideoPlaying").find(".wxVideoPlayContent").show();
var n="videomsg"==i.tpl?{
width:"100%",
height:"100%"
}:{};
t("#wxVideo"+o,n).ready(function(){
d=this;
var t=0;
return d.on("fullscreenchange",function(){
t?($("#wxVideoPlayer"+o).css({
overflow:"hidden",
zoom:"1"
}),$("#wxVideoBox"+o).css({
"z-index":"0"
})):($("#wxVideoPlayer"+o).css({
overflow:"visible",
zoom:"normal"
}),$("#wxVideoBox"+o).css({
"z-index":"1"
})),t=~t;
}),d.on("ended",function(){
this.currentTime(0);
}),d.src(v||!f.canPlayType||i.ff_must_flash&&p?[{
type:"video/x-flv",
src:s+"&trans=1"
}]:s),d.play(),i.player=d,e&&e(this);
});
},
pause:function(e){
var i=this.player;
i&&i.pause(),$("#wxVideoBox"+this.id).removeClass("wxVideoPlaying").find(".wxVideoPlayContent").hide(),
e&&e(this);
}
});
return _;
});define("common/wx/top.js",["tpl/top.html.js"],function(e,t,a){
"use strict";
function i(e,t,a){
return this.dom=$(e),this.dom.addClass("title_tab"),t&&"string"==typeof t&&(t=[{
name:"",
url:"javascript:;",
className:"selected"
}]),$.each(t,function(e,t){
t.url=t.url&&[t.url,wx.data.param].join("")||"javascript:;";
}),this.dom.html(template.compile(n)({
data:t
})),a&&a.render&&"function"==typeof a.render?$.each(this.dom.find("li"),function(e,i){
a.render.apply($(i),[t[e],a&&a.data]);
}):this.dom.html(template.compile(n)({
data:t
})),this.dom.on("click",".top_item",function(){
$(this).addClass("selected").siblings().removeClass("selected");
}),this;
}
var n=e("tpl/top.html.js"),s=wx.acl;
i.prototype.selected=function(e){
this.dom.find(".js_top").removeClass("selected"),"number"==typeof e?this.dom.find(".js_top:eq("+e+")").addClass("selected"):this.dom.find(".js_top[data-id="+e+"]").addClass("selected");
},i.DATA={
setting:[{
id:"info",
name:"帐号详情",
url:"/cgi-bin/settingpage?t=setting/index&action=index"
},{
id:"function",
name:"功能设置",
url:"/cgi-bin/settingpage?t=setting/function&action=function"
}],
mass:[{
id:"send",
name:"新建群发消息",
url:"/cgi-bin/masssendpage?t=mass/send"
},{
id:"jurisdiction",
name:"授权申请",
acl:s&&s.msg_acl&&s.msg_acl.can_use_reprintapply_list,
url:"/cgi-bin/copyrightlib?action=reprint_article&begin=0&count=10&auth_status=0&lang=zh_CN"
}],
message:[{
id:"total",
name:"全部消息",
url:"/cgi-bin/message?t=message/list&count=20&day=7"
},{
id:"star",
name:"已收藏的消息",
url:"/cgi-bin/message?t=message/list&count=20&action=star"
},{
id:"search",
name:"搜索结果"
}],
media:[{
id:"media11",
name:"商品消息",
acl:s&&s.material_acl&&s.material_acl.can_commodity_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list&type=11&action=list"
},{
id:"media10",
name:"图文消息",
acl:s&&s.material_acl&&s.material_acl.can_app_msg,
url:"/cgi-bin/appmsg?begin=0&count=10&t=media/appmsg_list2&type=10&action=list_card"
},{
id:"media2",
name:"图片",
acl:s&&s.material_acl&&s.material_acl.can_image_msg,
url:"/cgi-bin/filepage?type=2&begin=0&count=12&t=media/img_list"
},{
id:"media3",
name:"语音",
acl:s&&s.material_acl&&s.material_acl.can_voice_msg,
url:"/cgi-bin/filepage?type=3&begin=0&count=21&t=media/list"
},{
id:"media15",
name:"视频",
acl:s&&s.material_acl&&s.material_acl.can_video_msg,
url:"/cgi-bin/appmsg?begin=0&count=9&t=media/video_list&action=list_video&type=15"
}],
business:[{
id:"overview",
name:"数据概览",
url:"/merchant/business?t=business/overview&action=overview"
},{
id:"order",
name:"订单流水",
url:"/merchant/business?t=business/order&action=order"
},{
id:"info",
name:"商户信息",
url:"/merchant/business?t=business/info&action=info"
},{
id:"test",
name:"支付测试",
url:"/merchant/business?t=business/whitelist&action=whitelist"
},{
id:"rights",
name:"维权仲裁",
url:"/merchant/shop_rights?t=business/rights_list&action=batchgetpayfeedback"
},{
id:"course",
name:"使用教程",
url:"/merchant/business?t=business/course&action=course"
}],
user:[{
id:"useradmin",
name:"已关注",
url:"/cgi-bin/contactmanage?t=user/index&pagesize=10&pageidx=0&type=0&groupid=0"
}],
statistics:{
user:[{
id:"summary",
name:"用户增长",
url:"/misc/pluginloginpage?action=stat_user_summary&pluginid=luopan&t=statistics/index"
},{
id:"attr",
name:"用户属性",
url:"/misc/pluginloginpage?action=stat_user_attr&pluginid=luopan&t=statistics/index"
}],
article:[{
id:"detail",
name:"图文群发",
url:"/misc/pluginloginpage?action=stat_article_detail&pluginid=luopan&t=statistics/index"
},{
id:"analyse",
name:"图文统计",
url:"/misc/pluginloginpage?action=stat_article_analyse&pluginid=luopan&t=statistics/index"
}],
message:[{
id:"message",
name:"消息分析",
url:"/misc/pluginloginpage?action=stat_message&pluginid=luopan&t=statistics/index"
},{
id:"key",
name:"消息关键词",
url:"/misc/pluginloginpage?action=ctr_keyword&pluginid=luopan&t=statistics/index"
}],
"interface":[{
id:"interface",
name:"接口分析",
url:"/misc/pluginloginpage?action=stat_interface&pluginid=luopan&t=statistics/index"
}]
},
notification:[{
id:"notification",
name:"通知中心",
url:"/cgi-bin/frame?t=notification/index_frame"
}],
templateMessage:[{
id:"my_template",
name:"我的模版",
url:"/advanced/tmplmsg?action=list&t=tmplmsg/list"
},{
id:"template_message",
name:"模版库",
url:"/advanced/tmplmsg?action=tmpl_store&t=tmplmsg/store"
}],
assistant:[{
id:"mphelper",
name:"公众号助手",
url:"/misc/assistant?t=setting/mphelper&action=mphelper"
},{
id:"warning",
name:"接口告警",
url:"/misc/assistant?t=setting/warning&action=warning"
}],
shop:[{
id:"shopoverview",
name:"小店概况",
url:"/merchant/merchantstat?t=shop/overview&action=getoverview"
},{
id:"addGoods",
name:"添加商品",
url:"/merchant/goods?type=11&t=shop/precreate",
target:"_blank"
},{
id:"goodsManagement",
name:"商品管理",
url:"/merchant/goodsgroup?t=shop/category&type=1"
},{
id:"shelfManagement",
name:"货架管理",
url:"/merchant/shelf?status=0&action=get_shelflist&t=shop/myshelf&offset=0&count=5"
},{
id:"orderManagement",
name:"订单管理",
url:"/merchant/productorder?action=getlist&t=shop/order_list&last_days=30&count=10&offset=0"
},{
id:"deliverylist",
name:"运费模版管理",
url:"/merchant/delivery?action=getlist&t=shop/delivery_list"
},{
id:"images",
name:"图片库",
url:"/merchant/goodsimage?action=getimage&t=shop/shop_img&count=20&offset=0"
}],
adClient:[{
id:"adclientreport",
name:"报表统计",
url:"/merchant/ad_client_report?t=ad_system/client_report&action=list"
},{
id:"adclientmanage",
name:"广告管理",
url:"/merchant/advert?t=ad_system/promotion_list&action=get_advert_count"
},{
id:"materialmanage",
name:"推广页管理",
url:"/merchant/ad_material?t=material/list&action=get_material_list"
},{
id:"adclientpay",
name:"财务管理",
url:"/cgi-bin/frame?nav=10026&t=ad_system/host_frame"
},{
id:"adservice",
name:"广告服务商",
acl:s&&s.ad_system&&s.ad_system.can_use_sp,
url:"/cgi-bin/frame?nav=10026&t=ad_system/client_service_frame"
}],
adHost:[{
id:"adhostreport",
name:"报表统计",
url:"/merchant/ad_host_report?t=ad_system/host_report"
},{
id:"adhostmanage",
name:"流量管理",
url:"/merchant/ad_host_manage?t=ad_system/host_manage"
},{
id:"adhostpay",
name:"财务管理",
url:"/merchant/ad_host_pay?action=ad_host_pay&t=ad_system/host_pay"
}],
advanced:[{
id:"dev",
name:"日志查询",
url:"/advanced/advanced?action=log_home"
},{
id:"group-alert",
name:"接口报警",
url:"/advanced/advanced?action=alarm&t=advanced/alarm"
}],
cardticket:[{
id:"cardmgr",
name:"卡券管理",
url:"/merchant/electroniccardmgr?action=batch&t=cardticket/batch_card"
},{
id:"permission",
name:"卡券核销",
url:"/merchant/carduse?action=listchecker&t=cardticket/permission"
},{
id:"carduse",
name:"核销记录",
url:"/merchant/carduserecord?action=listrecord&t=cardticket/carduse_record"
},{
id:"cardreport",
name:"数据报表",
url:"/merchant/ecardreport?action=overviewpage&t=cardticket/overviewpage"
}],
infringement:[{
id:"infringement",
name:"我要投诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=1"
},{
id:"antiinfringement",
name:"我要申诉",
url:"/acct/infringement?action=getmanual&t=infringement/manual&type=2"
},{
id:"list",
name:"提交记录",
url:"/acct/infringement?action=getlist&t=infringement/ingringement_list&type=1&begin=0&count=10"
}],
scan:[{
id:"overview",
name:"数据概况",
url:"/merchant/scandataoverview?action=keydata"
},{
id:"product_list",
name:"商品管理",
url:"/merchant/scanproductlist?action=list&page=1&status=1"
},{
id:"firmcat_list",
name:"资质管理",
url:"/merchant/scanqualification?action=firmcatpage"
}],
rumor:[{
id:"list",
name:"谣言池",
url:"/misc/rumor?action=rumorlist&t=rumor/list"
},{
id:"result",
name:"辟谣数据",
url:"/misc/rumor?action=summarylist&t=rumor/result"
}],
reward:[{
id:"list",
name:"数据概况",
url:"/merchant/rewardstat?action=getoverview&t=reward/overview"
},{
id:"setting",
name:"赞赏设置",
url:"/merchant/reward?action=rewardsetting"
}],
discuss:[{
id:"list_latest",
name:"留言列表",
url:"/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7"
},{
id:"index",
name:"群发消息管理",
url:"/misc/appmsgcomment?action=list_app_msg&begin=0&count=10"
}],
search:[{
id:"search",
name:"搜索",
url:"/advanced/componentsearch?action=search"
},{
id:"authorized",
name:"已添加",
url:"/cgi-bin/component_unauthorize?action=list&t=service/auth_plugins"
}],
kf:[{
id:"account",
name:"账号管理",
url:"/misc/kf?t=services/list&action=list"
},{
id:"state",
name:"客服数据",
url:"/misc/kf?t=services/kf_stat&action=getstatpage"
},{
id:"media",
name:"客服素材",
url:"/misc/kf?t=services/kf-public-text&action=publicreplypage"
}],
ibeacon:[{
id:"deviceManagement",
name:"设备管理",
url:"/merchant/beacongetdevices?action=list"
},{
id:"pageManagement",
name:"页面管理",
url:"/merchant/beaconlistpage?action=list&need_dc=1"
},{
id:"dataReport",
name:"数据报表",
url:"/merchant/beaconstatsummary?action=list"
}]
},s&&s.ad_system&&s.ad_system.can_use_new_ad&&(i.DATA.adClient[0].url="/cgi-bin/frame?nav=10026&t=ad_system/client_report_frame",
i.DATA.adClient[1].url="/cgi-bin/frame?nav=10026&t=ad_system/promotion_list_frame"),
s&&s.merchant_acl&&s.merchant_acl.can_use_account_manage&&i.DATA.adClient.push({
id:"adclientaccountmanage",
name:"账户管理",
acl:s&&s.ad_system&&s.ad_system.can_use_account_manage,
url:"/cgi-bin/frame?nav=10026&t=ad_system/account_frame"
}),s&&s.merchant_acl&&s.merchant_acl.can_use_pay_tmpl&&i.DATA.templateMessage.push({
id:"template_pay_list",
name:"支付模版消息",
url:"/advanced/tmplmsg?action=pay_list&t=tmplmsg/payment"
}),i.RENDER={
setting:function(e,t){
"meeting"==e.id&&15!=t.role&&this.remove();
},
message:function(e,t){
"search"!=e.id||t&&"search"==t.action||this.remove();
},
assistant:function(e,t){
"warning"!=e.id||t&&0!=t.have_service_package||this.remove();
},
reward:function(e,t){
"invite"!=e.id||t&&0!=t.invite_authority||this.remove();
}
},a.exports=i;
});define("common/wx/loadscript.js",[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=document.createElement("script"),r=document.head||document.getElementsByTagName("head")[0]||document.documentElement,d=t.url+"&t="+Math.random(),i=t.callbackName,a="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,c="undefined"==typeof t.timeoutCode?500:t.timeoutCode,l="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,s=!1,f=null,m=function(e){
o&&!s&&(s=!0,f&&(clearTimeout(f),f=null),o.onload=o.onreadystatechange=o.onerror=null,
r&&o.parentNode&&r.removeChild(o),o=null,i&&-1==i.indexOf(".")&&(window[i]=null),
e!=u&&"loaded"!=a&&"function"==typeof t.onerror&&t.onerror(e));
};
if(i&&"function"==typeof t.callback){
var p=i;
-1==i.indexOf(".")&&(i=window[i]?i+e.counter++:i,window[i]=function(){
a="loaded",t.callback.apply(null,arguments);
}),d=d.replace("="+p,"="+i);
}
o.onload=o.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&m("loaded"==a?u:l);
},o.onerror=function(){
return n>0?(t.retry=n-1,f&&(clearTimeout(f),f=null),void e(t)):void m(l);
},t.timeout&&(f=setTimeout(function(){
m(c);
},parseInt(t.timeout,10))),a="loading",o.charset="utf-8",setTimeout(function(){
o.src=d;
try{
r.insertBefore(o,r.lastChild);
}catch(e){}
},0);
}
return e;
});define("tpl/media/weapp_dialog_content.html.js",[],function(){
return'{each list as item}\n<li class="weapplink_item selected">\n    <div class="weapplink_item_inner js_weapplink_item_inner" data-appid="{item.appid}">\n        <div class="weapplink_info">\n            <img class="weapplink_avatar" src="{item.pic_url}">\n            <strong class="weapplink_name" title="">{item.nick_name}</strong>\n        </div>\n        <div class="weapplink_select_mask js_weapplink_select_mask" style="display: none;">\n            <i class="icon_card_selected">已选择</i>\n        </div>\n    </div>\n</li>\n{/each}';
});define("tpl/media/weapp_dialog.html.js",[],function(){
return'<div class="menu_link_weapp js_weapp_select">\n    <div class="processor_bar_wrp js_weapp_select_step">\n        <!-- 初始化进度条 -->\n    </div>\n    <div class="processor_step_content js_weapp_select_step1" style="display: block"><!-- 第一步：选择小程序卡片 -->\n        <div class="step_content_bd">\n            <div class="link_weapp_desc">\n                <span class="js_weapplink_hint_select" style="display: none">请选择已关联的小程序</span><!--\n                --><span class="js_weapplink_hint_none link_weapp_empty_desc" style="display: none">无已关联的小程序</span> &nbsp;\n            </div>\n            <div class="link_weapp_wrp">\n                <div class="link_weapp_loading js_weapplink_loading" style="display: block">\n                    <i class="icon_loading_small white"></i>\n                </div>\n                <div class="link_weapp_box weapplinks_box">\n                    <ul class="wechat_list weapplink_list js_weapplink_list" style="display: none">\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_primary btn_input js_weapp_select_next_step">\n                <button type="button">下一步</button>\n            </span>\n            <span class="btn btn_default btn_input js_weapp_select_cancel">\n                <button type="button">取消</button>\n            </span>\n        </div>\n    </div>\n    <div class="processor_step_content step2 js_weapp_select_step2" style="display: none"><!-- 第二步：选择插入卡片的样式 -->\n        <div class="step_content_bd">\n            <div class="" style="display:none">\n                <span class="">请确认插入卡片的样式</span>\n            </div>\n            <div class="weapp_type_select_area" style="text-align: center;margin-right: 0;">\n                <!-- <div class="weapp_type_box">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">小程序首页</span>\n                        <input type="radio" name="add_type" class="frm_radio" value="1">\n                        <span class="type_preview" style="background-image: url(\'https://mmbiz.qlogo.cn/mmbiz_jpg/pxoYvTCGD3UHyRf2omC3RY6g1wVwSDx1qJhy1XZ8UllRFXlvaVO2J3uic2W2qLsjEH8a2qUtHXlicibSN5nk9rgdw/0?wx_fmt=jpeg\');"></span>\n                    </label>\n                </div> -->\n                <span class="type_preview" style="background-image: url(\'https://mmbiz.qlogo.cn/mmbiz_png/0PGibvic5Lia7q2q7KEP2A216OUmc6WjpXq3kuCOINOJ0tVEibrVVhWX4CUc12VrgjibsN0ibeuM10IicNsCsibxx2picww/0?wx_fmt=png\');"></span>\n                <!-- <div class="weapp_type_box">\n                    <label class="frm_radio_label">\n                        <i class="icon_radio"></i>\n                        <span class="lbl_content">自定义路径</span>\n                        <input type="radio" name="add_type" class="frm_radio" value="1">\n                        <span class="type_preview" style="background-image: url(\'https://mmbiz.qlogo.cn/mmbiz_png/pxoYvTCGD3UHyRf2omC3RY6g1wVwSDx1pvgrFExpicZB8pxEhxAv6RaPRyjaD6IYHJ7yUHYFsjA1kx2Ptr5eXgg/0?wx_fmt=png\');"></span>\n                    </label>\n                </div> -->\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_default btn_input js_weapp_select_prev_step">\n                <button type="button">上一步</button>\n            </span>\n            <span class="btn btn_primary btn_input js_weapp_select_next_step">\n                <button type="button">下一步</button>\n            </span>\n        </div>\n    </div>\n    <!-- <div class="processor_step_content step3 js_weapp_select_step3" style="display: none">\n        <div class="step_content_bd">\n            <div class="link_weapp_desc">\n                <span class="">订阅者点击小程序卡片会打开小程序首页</span>\n            </div>\n            <div class="frm_control_group show_value">\n                <label for="" class="frm_label">小程序首页</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        /weixin/app/com\n                    </span>\n                </div>\n            </div>\n            <div class="frm_control_group">\n                <label for="" class="frm_label">备用网页</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box">\n                        <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'\' placeholder=\'请输入网页链接\'>\n                    </span>\n                    <p class=\'frm_msg fail\' id=\'\'>\n                        <span class=\'frm_msg_content\'></span>\n                    </p>\n                    <p class=\'frm_tips\'>旧版微信客户端无法支持小程序，用户点击菜单时将会打开备用网页</p>\n                </div>\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_default btn_input js_weapp_select_prev_step">\n                <button type="button">上一步</button>\n            </span>\n            <span class="btn btn_primary btn_input js_weapp_select_confirm">\n                <button type="button">确定</button>\n            </span>\n        </div>\n    </div> -->\n    <div class="processor_step_content step4 js_weapp_select_step4" style="display: none"><!-- 第三步：填写详细信息 打开自定义页面的情况 -->\n        <div class="step_content_bd">\n            <div class="step_content_bd_inner">\n                <div class="link_weapp_desc">\n                    <span class="">点击小程序卡片会打开小程序路径指定的页面</span>\n                </div>\n                <div class="frm_control_group">\n                    <label for="" class="frm_label">小程序名称</label>\n                    <div class="frm_controls js_name"></div>\n                </div>\n                <div class="frm_control_group">\n                    <label for="" class="frm_label">小程序路径</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'path\' placeholder=\'\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'></p>\n                    </div>\n                </div>\n                <div class="frm_control_group">\n                    <label for="" class="frm_label">展示方式</label>\n                    <div class="frm_controls">\n                        <input data-label="文字" class="frm_radio js_weapp_display_way" type="radio" value="text" checked>\n                        <input data-label="图片" class="frm_radio js_weapp_display_way" type="radio" value="image">\n                        <input data-label="小程序卡片" class="frm_radio js_weapp_display_way" type="radio" value="card">\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'></p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_text_way js_weapp_way">\n                    <label for="" class="frm_label">文字内容</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'content\' placeholder=\'\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'>点击文字会打开小程序指定路径的页面</p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_image_way js_weapp_way" style="display:none;">\n                    <label for="" class="frm_label">上传图片</label>\n                    <div class="frm_controls file-control frm_vertical_pt">\n                        <div class="upload_box">\n                            <p class="upload_tips">点击图片会打开小程序指定路径的页面。图片规格不限，大小限制为2M。</p>\n                            <span class="upload_area">\n                                <a href="javascript:;" id="js_weapp_link_image_upload" class="btn btn_upload btn_default">上传图片</a>\n                                <input type=\'hidden\' value="" class=\'frm_input\' name=\'image\'>\n                            </span>\n                        </div>\n                        <div class="upload_preview_area js_weapp_link_image_cover" style="display:none">\n                            <span class="cover_preview js_weapp_link_image_preview" style="background-image: url(\'\');" style="display: none;">\n                                <div class="card_mask_global hover_mask">\n                                    <a class="icon20_common del_media_white js_weapp_link_image_remove" href="javascript:;" onclick="return false;">删除</a>\n                                </div>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_card_way js_weapp_way" style="display:none;">\n                    <label for="" class="frm_label">卡片标题</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'title\' placeholder=\'\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'></p>\n                    </div>\n                </div>\n                <div class="frm_control_group js_weapp_card_way js_weapp_way" style="display:none;">\n                    <label for="" class="frm_label">卡片图片</label>\n                    <div class="frm_controls file-control frm_vertical_pt">\n                        <div class="upload_box">\n                            <p class="upload_tips">图片尺寸必须为1080*864像素，文件大小限制为2M</p>\n                            <span class="upload_area">\n                                <a href="javascript:;" data-key="" id="weapp_select_upload" class="btn btn_upload btn_default">上传图片</a>\n                                <input type=\'hidden\' value="" class=\'frm_input\' name=\'imageUrl\'>\n                            </span>\n                        </div>\n                        <div class="upload_preview_area js_weapp_select_cover" style="display:none">\n                            <span class="cover_preview js_weapp_select_cover_preview" style="background-image: url(\'\');" style="display: none;">\n                                <div class="card_mask_global hover_mask">\n                                    <a class="js_removeCover icon20_common del_media_white js_weapp_select_cover_remove" title="删除封面图" href="javascript:void(0);" onclick="return false;">删除</a>\n                                </div>\n                            </span>\n                        </div>\n                    </div>\n                </div>\n                <!-- <div class="frm_control_group">\n                    <label for="" class="frm_label">备用网页</label>\n                    <div class="frm_controls">\n                        <span class="frm_input_box">\n                            <input type=\'text\' id=\'\' value="" class=\'frm_input\' name=\'\' placeholder=\'请输入网页链接\'>\n                        </span>\n                        <p class=\'frm_msg fail\' id=\'\'>\n                            <span class=\'frm_msg_content\'></span>\n                        </p>\n                        <p class=\'frm_tips\'>旧版微信客户端无法支持小程序，用户点击菜单时将会打开备用网页</p>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class="step_content_ft">\n            <span class="btn btn_default btn_input js_weapp_select_prev_step">\n                <button type="button">上一步</button>\n            </span>\n            <span class="btn btn_primary btn_input js_weapp_select_confirm">\n                <button type="button">确定</button>\n            </span>\n        </div>\n    </div>\n</div>\n';
});define("common/wx/media/audio.js",["biz_web/lib/soundmanager2.js","tpl/media/audio.html.js","tpl/media/qqmusicaudio.html.js","widget/media.css","common/qq/Class.js","biz_common/moment.js"],function(i,s,t){
"use strict";
var e=wx.T,o=i("biz_web/lib/soundmanager2.js"),n=i("tpl/media/audio.html.js"),d=i("tpl/media/qqmusicaudio.html.js"),l=(i("widget/media.css"),
i("common/qq/Class.js")),u=i("biz_common/moment.js"),a=null,m=null,h="wxAudioPlaying",c=function(){
m=o,m.setup({
url:"/mpres/zh_CN/htmledition/plprecorder/biz_web/",
preferFlash:!1,
debugMode:!1
});
};
$(window).load(function(){
c();
});
var r={
id:"",
source:"",
file_id:""
},f=l.declare({
init:function(i){
var s=this;
$.extend(!0,s,r,i),this.soundId=this.id||this.file_id,this.title=this.title||this.name,
this.play_length="undefined"==typeof this.play_length||0==this.play_length?"未知时长":u.unix(this.play_length/1e3).format("mm:ss");
var t;
t=$(this.qqmusictpl?e(d,s):e(n,s)),s.dom=$(i.selector).append(t).data("opt",i),t.click(function(){
s.toggle();
});
},
getAudioURL:function(){
if(this.qqmusicurl)return this.qqmusicurl;
var i=this.source,s=this.id,t=this.file_id;
return i&&(i="&source="+i),wx.url(this.voice_encode_fileid?"https://res.wx.qq.com/voice/getvoice?mediaid="+this.voice_encode_fileid:"/cgi-bin/getvoicedata?msgid={id}&fileid={fileid}{source}".format({
id:s,
fileid:t,
source:i
}));
},
isPlaying:function(){
return null!=a&&this==a;
},
toggle:function(){
this.isPlaying()?this.stop():(a&&a.stop(),this.play());
},
play:function(i){
var s=this;
this.isPlaying()||(this.dom.addClass(h),!!a&&a.dom.removeClass(h),a=this,this.sound||(!m&&c(),
this.sound=m.createSound({
id:s.soundId,
url:s.getAudioURL(),
onfinish:function(){
a&&(a.dom.removeClass(h),a=null);
},
onload:function(i){
i||m.unload(s.soundId),!i&&a&&(a.dom.removeClass(h),a.sound=null,a=null);
}
})),m.play(this.soundId),i&&i(this));
},
stop:function(i){
this.isPlaying()&&(a=null,this.dom.removeClass(h),m.stop(this.soundId),i&&i(this));
}
});
t.exports=f;
});define("tpl/media/dialog/audiomsg_layout.html.js",[],function(){
return'{if curnum == 0}\n<div class="media_list_tips_wrp tips_global">\n    <span class="tips">暂无素材</span>\n    <span class="vm_box"></span>\n</div>\n{else}\n<div class="media_list_tips_wrp" style="display:none;">\n    <i class="icon_loading_small white">loading...</i>\n    <span class="vm_box"></span>\n</div>\n<div class="qqmusic_list" id="js_audiomsg_list">\n    {each list as item}\n    <label class="frm_radio_label qqmusic_item">\n        <i class="icon_radio"></i>\n        <span class="lbl_content">\n            <span class="qqmusic_meta qqmusic_thumb_info">\n                <span class="songname" id=\'songname_{item.songid}\'>{item.songname}</span>\n                <span class="singername" id=\'singername_{item.songid}\'>{item.singername}</span>\n            </span>\n            <span class="qqmusic_meta qqmusic_songsize">{item.songsize}</span>\n            <span class="qqmusic_meta qqmusic_songtime">{item.songtime}</span>\n            <span class=\'qqmusic_meta qqmusic_audioplay\'  play_length=\'{item.play_length}\' id=\'url_{item.songid}\' audioid=\'{item.songid}\' audiourl=\'{item.m4a}\' mid=\'{item.mid}\' songid=\'{item.songid}\' albumurl=\'{item.albumurl}\'></span>\n        </span>\n        <input type="radio" class="frm_radio js_audio_music_item_radio" value=\'{item.songid}\'>\n    </label>\n    {/each}\n</div>\n<div class="js_pagebar pagination_wrp" id=\'js_music_pagebar\'></div>\n{/if}\n';
});define("tpl/media/plugin/audioItem.html.js",[],function(){
return'{each list as data i}\n<label class="frm_radio_label audio_item {if data.enable==true}disabled{/if}">\n    <i class="icon_radio"></i>\n    <span class="lbl_content">\n        <span class="audio_meta audio_title">{data.title}</span>\n        <span class="audio_meta audio_date">{data.update_time}</span>\n        <span class="audio_meta audio_length">{data.format_play_length}</span>\n        <span class=\'audio_meta audio_play jsPluginAudioPlay audio_default\' id="pluginAudioPlay_{i}">\n        </span>\n    </span>\n    <input type="radio" {if data.disabled}disabled="disabled"{/if}  data-label="{data.name}" data-value="{data.file_id}" data-index="{i}" class="frm_radio jsPluginAudioRadio js_audio_music_item_radio" >\n</label>\n{/each}\n';
});define("tpl/media/audioMusicDialog.html.js",[],function(){
return'<div id="audio_music_dialog_content" class="audio_music_dialog_content">\n  <div class="title_tab">\n    <ul class="tab_navs title_tab">\n      {if allowAudio}<li class="js_audio_tab_btn tab_nav first js_top"><a href="javascript:;">素材库</a></li>{/if}\n      {if allowMusic}<li class="js_music_tab_btn tab_nav first js_top"><a href="javascript:;">QQ音乐</a></li>{/if}\n    </ul>\n  </div>\n  <div>\n\n    {if allowAudio}<div class="js_audio_block audio_box" style="display:none">\n        {if audioDisabled}\n        <div class="page_msg mini audio_global_msg">\n            <div class="inner">\n                <span class="msg_icon_wrp"><i class="icon_msg_mini info"></i></span>\n                <div class="msg_content">\n                    <p>每篇图文消息只能添加一个语音</p>\n                </div>\n            </div>\n        </div>\n        {/if}\n      <div class="global_mod audio_box_hd float_layout gap_top" id="">\n          <p class="global_info gap_top_item tips_global jsAudioTips" {if !hasAudioLengthLimit}style="display:none;"{/if}>由于版本兼容的原因,你暂时只可以选择60秒内的语音发送</p>\n          <p class="global_extra">\n              <a class="btn btn_primary btn_add jsPluginAudioNew" href="javascript:;"><i class="icon14_common add_white"></i>新建语音</a>\n          </p>\n      </div>\n      <div class="audio_box_bd audio_list_container" id="">\n          <div class="media_list_tips_wrp tips_global" style="display:none;">\n              <span class="tips">暂无素材</span>\n              <span class="vm_box"></span>\n          </div>\n          <div class="media_list_tips_wrp" style="display:none;">\n              <i class="icon_loading_small white">loading...</i>\n              <span class="vm_box"></span>\n          </div>\n          <div class="audio_list jsPluginAudioList"></div>\n          <div class="pagination_wrp jsPluginAudioPage"></div>\n      </div>\n    </div>{/if}\n\n    {if allowMusic}<div class="js_music_block" style="display:none">\n      <div class="global_mod qqmusic_box_hd float_layout gap_top" id="searchDiv">\n          <span class="global_info frm_input_box search with_del append">\n              <a class="del_btn" onclick="return false" href="javascript:;" id="searchCloseBt"><i class="icon_search_del"></i>&nbsp;</a>\n              <a onclick="return false" id="searchBt" href="javascript:;" class="frm_input_append"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n              <input id="keyInput" type="text" placeholder="歌名/作者" value="" class="frm_input">\n          </span>\n          <p class="global_extra gap_top_item tips_global">\n              音乐数据由 <a href="http://cp.music.qq.com" target="_blank">QQ音乐</a> 版权提供          </p>\n      </div>\n      <input type=\'hidden\' id=\'inputSelectedMusicId\' value= \'\'>\n      <div class="qqmusic_box_bd qqmusic_list_container" id="dialog_audio_container"></div>\n    </div>{/if}\n\n  </div>\n</div>\n';
});define("tpl/media/templateListContent.html.js",[],function(){
return'{if !!msg}\n<p class="mpui-media-tips">{msg}</p>\n{else}\n<div class="mpui-media__list tj">\n  <div class="mpui-media__list-col tj_item">\n  {each list as item index}\n  {if index%2==0} \n  {=item.contentHtml}\n  {/if}\n  {/each}\n  </div>&nbsp;\n  <div class="mpui-media__list-col tj_item">\n  {each list as item index}\n  {if index%2==1} \n  {=item.contentHtml}\n  {/if}\n  {/each}\n  </div>\n</div>\n{/if}';
});define("tpl/media/templateListDialog.html.js",[],function(){
return'<div class="dialog_media_container">\n  <div class="mpui-global-mod mpui-media-global-bar">\n    <div class="mpui-global__extra">\n      <a class="btn btn_default" target="_blank" href=\'/cgi-bin/appmsgtemplate?action=list&begin=0&count=6&lang=zh_CN&token={token}\'>管理模版</a>\n    </div>\n  </div>\n  <div class="mpui-media-list-wrp">\n    <p class="js_loading icon_loading_small white">加载中</p>\n    <div class="js_content" style="display: none;"></div>\n  </div>\n  <div class="js_pagebar pagination_wrp"></div>\n</div>';
});define("tpl/mpEditor/templateDialogLayout.html.js",[],function(){
return'<div>\n    <div id="##" class="%%">\n        <!-- 正文 -->\n        <div class="editor_area">\n            <div class="split_line"></div>\n            <div id="##_iframeholder" class="%%-iframeholder js_reprint_hide">\n                <div id="##_contentplaceholder" class="editor_content_placeholder" style="display:none">从这里开始写模版</div>\n            </div>\n        </div>\n    </div>\n</div>\n';
});