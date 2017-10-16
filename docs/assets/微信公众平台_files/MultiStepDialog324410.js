define("tpl/mpEditor/plugin/link_acc_item.html.js",[],function(){
return'{each list as item}\n<div data-fakeid="{item.fakeid}" data-nickname="{item.nickname||item.alias}" class="js_acc_item search_biz_item">\n    <div class="search_biz_type">\n        <p>{service_type[item.service_type]||service_type[\'-1\']}</p>\n    </div>\n    <div class="search_biz_avatar">\n        <img src="{item.round_head_img}" alt="{item.nickname}">\n    </div>\n    <div class="search_biz_info">\n        <p class="search_biz_nickname">{item.nickname||item.alias}</p>\n        <p class="search_biz_id">微信号：{item.alias}</p>\n    </div>\n</div>\n{/each}';
});define("tpl/mpEditor/plugin/link_appmsg.html.js",[],function(){
return'{if !!msg}\n<div class="media_list_tips_wrp tips_global">\n	<span class="tips">{msg}</span>\n	<span class="vm_box"></span>\n</div>\n{else}\n<ul class=" my_link_list">\n	{each list as item index}\n	<li data-index="{index}" class="my_link_item">\n		<label class="frm_radio_label js_article_label" for="">\n			<span class="date">{item.update_time_str}</span>\n	        <i data-index="{index}" class="icon_radio js_article_i"></i>\n	        <input type="radio" data-index="{index}" name="article_item" class="frm_radio">\n	        <span class="lbl_content">\n	        	<a target="_blank" href="{item.link}">{=(item.title.replace(/<em>/g,"__em_start__").replace(/<\\/em>/g,"__em_end__").html(true).replace(/__em_start__/g,"<em>").replace(/__em_end__/g,"</em>"))}</a>\n	        </span>\n	    </label>\n	</li>\n	{/each}\n</ul>\n{/if}';
});define("tpl/mpEditor/plugin/link_dialog.html.js",[],function(){
return'<form id="myform" class="link_dialog">\n    <div class="title_tab">\n        <ul class="js_tab_main tab_navs title_tab">\n            <li data-tab="inner" class="js_tab_item tab_nav first selected">\n                <a href="javascript:;">公众号文章链接</a>\n            </li>\n            {if !!flag}\n            <li data-tab="outer" class="js_tab_item tab_nav">\n                <a href="javascript:;" >外部链接</a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    <div class="js_warn_tips page_msg mini" style="display:none;">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg_mini warn"></i>\n            </span>\n            <div class="msg_content">\n                <p class="js_tips"></p>\n            </div>\n        </div>\n    </div>\n    <!--BEGIN 公众号消息链接-->\n    <div class="js_inner_main biz_link_form" style="display: block;">\n        <div class="frm_control_group">\n            <label for="" class="frm_label">链接输入方式</label>\n            <div class="frm_controls frm_vertical_lh">\n                <label class="frm_radio_label">\n                    <i class="icon_radio"></i>\n                    <span class="lbl_content">输入地址</span>\n                    <input type="radio" name="link_type" value="1" class="frm_radio" checked="true">\n                </label>\n                <label class="frm_radio_label selected">\n                    <i class="icon_radio"></i>\n                    <span class="lbl_content">查找文章</span>\n                    <input type="radio" name="link_type" value="2" class="frm_radio">\n                </label>\n            </div>\n        </div>\n        <!--BEGIN 输入文章链接-->\n        <div class="js_link_type js_link_type_1 input_address_tab">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">链接标题</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box link_address_input">\n                        <input type="text" name="innerTitle" class="js_inner_title frm_input">\n                    </span>\n                </div>\n            </div>\n            <div class="frm_control_group">\n                <label for="" class="frm_label">链接地址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box link_address_input">\n                        <input type="text" name="innerLink" class="js_inner_link_input frm_input" placeholder="http://">\n                    </span>\n                </div>\n            </div>\n        </div>\n        <!--END 输入文章链接-->\n        <!--BEGIN 搜索文章-->\n        <div style="display:none;" class="js_link_type js_link_type_2 search_article_tab">\n            <div class="frm_control_group">\n                <label for="" class="frm_label">公众号</label>\n                <div class="frm_controls">\n                    <span class="js_acc_search_main frm_input_box search_input_box search with_del append">\n                        <a style="display:none;" class="js_acc_search_del del_btn" href="javascript:">\n                            <i class="icon_search_del"></i>&nbsp;\n                        </a>\n                        <a href="javascript:void(0);" class="js_acc_search_btn frm_input_append">\n                            <i class="icon16_common search_gray">\n                                搜索\n                            </i>\n                            &nbsp;\n                        </a>\n                        <input type="text" placeholder="输入文章来源的公众号名称或微信号，回车进行搜索" value="" class="frm_input js_acc_search_input">\n                    </span>\n                    <!--选择了公众号之后，隐藏以上节点，show出以下节点，并给上面的 .frm_control_group 加上 show_value 类-->\n                    <span class="js_acc_desc frm_input_box" style="display: none;">\n                        <span class="js_acc_Text"></span>\n                        <a class="js_reset_acc" href="javascript:;">重新搜索</a>\n                    </span>\n                    <p class="frm_tips">\n                        <a class="js_self_acc" href="javascript:;">从本公众号已群发的消息中进行选择</a>\n                    </p>\n                    <p class="js_acc_search_tips frm_msg fail">\n                        <span class="frm_msg_content"></span>\n                    </p>\n                </div>\n            </div>\n            <div class="js_acc_content frm_control_group" style="display: none;">\n                <label for="" class="frm_label"></label>\n                <div class="frm_controls">\n                    <div class="search_biz_result_wrap">\n                        <!--loading-->\n                        <i style="display:none;" class="js_acc_loading icon_loading_small white"></i>\n                        <div class="search_biz_result js_acc_list"></div>\n                    </div>\n                    <div class="js_acc_pagebar pagination_wrp"></div>\n                </div>\n            </div>\n\n            <div class="js_article_content frm_control_group" style="display: none;">\n                <label for="" class="frm_label">公众号文章</label>\n                <div class="frm_controls">\n                    <div class="search_article_result">\n                        <div class="info_box">\n                            <div class="inner">\n                                <div class="info_hd">\n                                    <div class="ext_info"></div>\n                                    <h4>\n                                        <span class="frm_input_box search with_del append ">\n                                            <a style="display:none;" class="js_article_search_del del_btn" href="javascript:">\n                                                <i class="icon_search_del"></i>&nbsp;\n                                            </a>\n                                            <a href="javascript:" class="js_article_search_btn frm_input_append">\n                                                <i class="icon16_common search_gray">搜索</i>&nbsp;\n                                            </a>\n                                            <input type="text" value="" class="js_article_search_input frm_input" placeholder="输入文章名查找公众号群发过的文章">\n                                        </span>\n                                    </h4>\n                                </div>\n                                <div class="info_bd tc">\n                                    <i style="display:none;" class="js_article_loading icon_loading_small white"></i>\n                                    <div class="js_article_list">\n                                    </div>\n                                </div>\n                            </div>\n                            <!--BEGIN 分页-->\n                            <div class="js_article_pagebar pagination_wrp"></div>\n                            <!--END 分页-->\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!--END 搜索文章-->\n    </div>\n    <!--END 公众号消息链接-->\n    <!--BEGIN 外链-->\n    {if !!flag}\n    <div class="js_outer_main biz_link_form" style="display: none;">\n        <div class="frm_control_group">\n            <label for="" class="frm_label">链接标题</label>\n            <div class="frm_controls">\n                <span class="frm_input_box link_address_input">\n                    <input name="outerTitle" type="text" class="js_outer_title frm_input" placeholder="">\n                </span>\n            </div>\n        </div>\n        <div class="frm_control_group">\n                <label for="" class="frm_label">链接地址</label>\n                <div class="frm_controls">\n                    <span class="frm_input_box link_address_input">\n                        <input name="outerLink" type="text" class="js_outer_link_input frm_input" placeholder="http://">\n                    </span>\n                </div>\n            </div>\n    </div>\n    {/if}\n    <!--END 外链-->\n</form>';
});define("shop/shopDialog.js",["common/wx/popup.js","tpl/shop/shopDialog.html.js","tpl/shop/shopDialogItem.html.js","common/wx/Tips.js","common/wx/pagebar.js","common/wx/Cgi.js"],function(o){
"use strict";
o("common/wx/popup.js");
var t=o("tpl/shop/shopDialog.html.js"),e=o("tpl/shop/shopDialogItem.html.js"),s=o("common/wx/Tips.js"),n=o("common/wx/pagebar.js"),i=o("common/wx/Cgi.js");
t=wx.T(t,{
token:wx.data.t,
lang:wx.data.lang
});
var l=function(o){
document.body.style.overflow=document.documentElement.style.overflow="hidden",this.begin=0,
this.count=10;
var e=$(t).popup({
title:"选择小店商品",
className:"align_edge shopcard_dialog",
buttons:[{
text:"确定",
click:function(){
var t=n.find(".js_item.selected");
return 1!=t.length?(s.err("请选择一个商品"),!0):(o.onOk&&o.onOk(t.data()),document.body.style.overflow=document.documentElement.style.overflow="auto",
void this.remove());
},
type:"primary"
},{
text:"取消",
click:function(){
document.body.style.overflow=document.documentElement.style.overflow="auto",this.remove();
},
type:"default"
}],
close:function(){
this.remove(),document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
this.pop=e,this.getList();
var n=$(e.get()),i=n.find(".js_shopcard_list");
i.on("click",".js_item",function(){
i.find(".js_item").removeClass("selected");
var o=$(this);
o.addClass("selected");
});
};
return l.prototype.getList=function(){
var o=this.pop,t=$(o.get()),l=this.begin,a=this.count,r=this,c=t.find(".js_shopcard_list"),p=t.find(".js_shoploading"),m=t.find(".js_pagination");
c.hide(),p.show(),m.hide(),i.get("/merchant/goods?type=1&t=shop/list&offset="+l+"&count="+a,function(o){
if(o&&o.base_resp&&0==o.base_resp.ret)try{
var t=$.parseJSON(o.data);
console.log(t);
var i=t.total,d=t.goods;
p.hide(),c.html(wx.T(e,{
goods:d
}));
var h=l/a+1;
m.show();
{
new n({
container:m,
perPage:a,
first:!1,
last:!1,
isSimple:!0,
initShowPage:h,
totalItemsNum:i,
callback:function(o){
var t=o.currentPage;
if(t!=h)return t--,r.begin=t*a,r.getList(),!1;
}
});
}
return void c.show();
}catch(u){}
s.err("系统异常，请稍后重试");
},function(){
s.err("系统异常，请稍后重试");
});
},l.prototype.show=function(){
this.pop.show();
},l.prototype.hide=function(){
this.pop.hide();
},l;
});define("cardticket/parse_data.js",["cardticket/add/member_info_flag.js"],function(e){
"use strict";
function _(e){
var _=u[e.card_type]||e.card_type;
switch(_+=""){
case"2":
e=e.discount;
break;

case"1":
e=e.groupon;
break;

case"3":
e=e.gift;
break;

case"4":
e=e.cash;
break;

case"0":
e=e.general_coupon;
break;

case"10":
e=e.member_card;
break;

case"21":
e=e.scenic_ticket;
break;

case"22":
e=e.movie_ticket;
break;

default:
e=e.general_coupon||e.coupon;
}
return e?(e.type=_,e):null;
}
function t(e,_){
return"number"!=typeof e&&(e=praseFloat(e),isNaN(e))?0:(_||(_=2),parseFloat(e.toFixed(_)));
}
function i(e){
var _=/^https?:\/\/mp.weixin.qq.com\/s/,t=/^http:\/\/mp.weixin.qq.com\/bizmall\/cardshelf/,i=/^http:\/\/mp.weixin.qq.com\/bizmall\/mallshelf/;
return _.test(e)?1:t.test(e)?2:i.test(e)?3:4;
}
function s(e){
return e?(e+"").html(!1):"";
}
function o(e){
var _=e.url||"",t=e.url_type;
return 4==t?_.replace("http://",""):s(_);
}
function n(e){
var n={},e=_(e);
if(!e)return null;
a(n,e),a(n,e.base_info),n.background_pic_url=e.background_pic_url;
var r=e.base_info.date_info||{};
n.time_type=f[r.type]||r.type,1==n.time_type&&(n.begin_time=r.begin_timestamp,n.end_time=r.end_timestamp),
n.from_day=r.fixed_begin_term||0,n.fixed_term=r.fixed_term||30,n.quantity=e.base_info.sku.quantity,
n.shop_id_list=e.base_info.shop_id_list,n.location_id_list=e.base_info.location_id_list;
var u=l[n.code_type];
if(n.code_type="undefined"!=typeof u?u:n.code_type,"undefined"==typeof n.code_type&&(n.code_type=1),
n.least_cost=e.least_cost&&e.least_cost/100,n.reduce_cost=e.reduce_cost&&e.reduce_cost/100,
"0"==n.least_cost&&(n.least_cost=""),n.discount=n.discount&&(100-n.discount)/10,
n.detail=1==n.type?n.deal_detail:n.default_detail,/^http/.test(n.logo_url)||(n.logo_url=""),
n.shop_type||(n.shop_type=n.location_id_list&&n.location_id_list.length?2:3),n.auto_update_new_location&&(n.shop_type=1),
n.isnew=n.func_flag?!!(16&n.func_flag):!1,n.ispay=n.func_flag?64&n.func_flag:!1,
n.func_flag&&(n.show_in_nearby=!1),n.ispay&&(n.can_share=!0),n.ispay&&(n.detail=n.detail?n.detail.replace(/\n微信价：.*?元$/gm,""):""),
n.price=t(e.base_info.sku.price/100),n.original_price=t(e.base_info.sku.original_price/100),
1==n.create_source&&(n.isnew=!0),1==n.time_type&&n.end_time<new Date/1e3&&(n.is_expire=!0),
n.is_intercomm=16384&n.func_flag,"undefined"!=typeof e.base_info.task_info&&(n.is_from_intercomm=!0,
n.task_info=e.base_info.task_info),n.is_from_intercomm&&(n.isnew=!0),n.status=m[n.status]||n.status,
n.discount&&(n.supply_discount=!0),10==n.type){
var d=[];
if(n.promotion_url_name){
var p={
name:n.promotion_url_name,
tips:n.promotion_url_sub_title,
url:n.promotion_url
};
p.url_type=i(p.url),p.url=o(p),d=[p];
}
e.custom_cell1&&(e.custom_cell1.url_type=i(e.custom_cell1.url),e.custom_cell1.url=o(e.custom_cell1),
d.push(e.custom_cell1)),e.custom_cell2&&(e.custom_cell2.url_type=i(e.custom_cell2.url),
e.custom_cell2.url=o(e.custom_cell2),d.push(e.custom_cell2)),n.config_url=d;
var y=e.required_info||{
info_flag:0
},g=e.optional_info||{
info_flag:0
};
n.require_keywords=c.flag2info(y.info_flag),n.option_keywords=c.flag2info(g.info_flag),
n.require_self_keywords=y.field_list,n.option_self_keywords=g.field_list,n.must_activate=!n.auto_activate,
n.supply_discount&&(n.prerogative=n.prerogative.replace(/^用卡可享受.*?折优惠\n/,"")),n.quantity="--",
n.can_modify=(e.required_info?e.required_info.can_modify:!1)||(e.optional_info?e.optional_info.can_modify:!1),
n.supply_balance=e.supply_balance;
}else{
var d=[];
if(n.custom_url_name){
var p={
name:n.custom_url_name,
tips:n.custom_url_sub_title,
url:n.custom_url
};
p.url_type=i(p.url),p.url=o(p),d=[p];
}
n.config_url=d;
}
var b=e.base_info;
if(10==n.type)var h=e.modify_msg_operation||{
_notexist:!0
};else var h=b.consume_msg_operation||{
_notexist:!0
};
n.msg_operation=h.url_cell||h.card_cell||{
_notexist:!0
},n.msg_operation._notexist||(n.msg_operation._type=n.msg_operation.card_id?5:i(n.msg_operation.url),
n.msg_operation.url&&(n.msg_operation.url=s(n.msg_operation.url))),n.msg_operation.endtime=n.msg_operation.end_time,
n.bonus_rule=e.bonus_rule||{},n.bonus_rule.init_bonus=n.bonus_rule.init_increase_bonus,
n.bonus_rule.cost_money_unit=n.bonus_rule.cost_money_unit&&n.bonus_rule.cost_money_unit/100,
n.bonus_rule.reduce_money=n.bonus_rule.reduce_money&&n.bonus_rule.reduce_money/100,
n.bonus_rule.least_money_to_use_bonus=n.bonus_rule.least_money_to_use_bonus&&n.bonus_rule.least_money_to_use_bonus/100,
b.sub_merchant_info&&(n.sub_merchant_id=b.sub_merchant_info.merchant_id);
var v=e.advanced_info;
if(n.use_hours=[],v){
n.is_sns_card=1==v.gen_type,n.orig_time_limit=v.time_limit||[],n.text_image_list=v.text_image_list||[],
n.time_limit=[];
var T={};
if(v.time_limit)for(var E=0;E<v.time_limit.length;E++){
var w=v.time_limit[E];
T[w.type]||(T[w.type]=!0,n.time_limit.push(w));
}
1!=n.create_source&&v.time_limit&&v.time_limit.length&&v.time_limit[0].end_hour&&(n.use_hours.push(v.time_limit[0]),
v.time_limit.length>1&&v.time_limit[0].type==v.time_limit[1].type&&n.use_hours.push(v.time_limit[1])),
n.consume_share_self_num=v.consume_share_self_num,n.consume_share_self_num>0?(n.consume_is_share=!0,
n.consume_share_type=1):v.consume_share_card_list&&v.consume_share_card_list.length?(n.consume_is_share=!0,
n.consume_share_type=2,n.consume_share_card_id=v.consume_share_card_list[0].card_id):n.consume_is_share=!1,
n.business_service=v.business_service;
var A=v.abstract;
A&&($(".section_card_intro").show(),n.abstract=A.abstract,n.cover_logo=A.icon_url_list?A.icon_url_list[0]:"");
}
if(n.is_quit_money=n.func_flag&1<<22,n.can_edit_quantity=!(n.is_quit_money||10==n.type||n.is_from_intercomm||(3!=n.status&&5!=n.status&&6!=n.status||!n.is_sns_card||n.is_expire)&&n.is_sns_card),
n.is_sns_card&&(n.isnew=!0),n.isnew||(n.quantity="--"),3==n.type&&n.is_sns_card){
n.gift_title=n.title;
var k=v.use_condition;
n.title=k?k.least_cost?"满%s送%s".sprintf(k.least_cost/100,n.gift_title):k.object_use_for?"买%s送%s".sprintf(k.object_use_for,n.gift_title):n.gift_title+(n.gift_num?n.gift_num:"")+(n.gift_unit?n.gift_unit:""):n.gift_title+(n.gift_num?n.gift_num:"")+(n.gift_unit?n.gift_unit:"");
}
n.pay_info=b.pay_info&&b.pay_info.swipe_card||{};
var S=65536&n.func_flag;
if(S)n.dispose_method=1;else{
var D=n.func_flag&1<<24;
n.pay_info.is_swipe_card?(n.dispose_method=4,n.code_type=1e4):D?(n.dispose_method=2,
n.code_type=1e4):n.dispose_method=3;
}
var C=n.pay_info;
if(C.auditing_info_list||(C.auditing_info_list=[]),C.is_swipe_card){
var R=C.auditing_info_list;
if(R.length){
var q=R[R.length-1];
if(C.swipe_card_status=0==q.mid_list.length?1:1==q.ret?C.is_active?0:3:2,q.trans_buff){
var I=q.trans_buff.html(!1);
try{
I=$.parseJSON(I);
}catch(x){
I="";
}
q.trans_buff=I,C.last_audit_item=q;
}
}else C.swipe_card_status=0==n.quantity?4:0;
}
!C.is_swipe_card||1!=C.swipe_card_status&&3!=C.swipe_card_status||(n.can_edit_quantity=!1),
v&&v.consume_cell_info&&(n.need_verify_code=v.consume_cell_info.need_verify_code,
n.need_remark=v.consume_cell_info.need_remark),n._can_global_edit=!n.is_from_intercomm&&(!n.is_sns_card||n.is_sns_card&&!n.is_expire&&(3==n.status||5==n.status||6==n.status)||n.is_sns_card&&(1==n.status||2==n.status));
var k=v&&v.use_condition;
return k&&(n.use_condition_least_cost=k.least_cost/100||"",n.accept_category=k.accept_category,
n.reject_category=k.reject_category,n.can_use_with_other_discount=k.can_use_with_other_discount,
n.can_use_with_membercard=k.can_use_with_membercard,n.object_use_for=k.object_use_for,
n.has_condition=k.least_cost||k.object_use_for||k.accept_category||k.reject_category||!k.can_use_with_other_discount,
3==n.type&&(n.use_condition_least_cost_type=n.object_use_for?2:1)),n.is_sns_card&&3==n.type&&(n.has_condition=!0),
n;
}
function a(e,_){
for(var t in _)_.hasOwnProperty(t)&&"object"!=typeof _[t]&&(e[t]=_[t]);
return e;
}
function r(e){
for(var _={},t=[],i=0;i<e.length;i++){
var s=n(e[i]);
s&&(_[s.id]=s,t.push(s));
}
return{
card_cache:_,
card_list:t
};
}
var c=e("cardticket/add/member_info_flag.js"),u={
DISCOUNT:"2",
MEMBER_CARD:"10",
GROUPON:"1",
GIFT:"3",
CASH:"4",
GENERAL_COUPON:"0",
SCENIC_TICKET:"21",
MOVIE_TICKET:"22"
},l={
CODE_TYPE_TEXT:0,
CODE_TYPE_BARCODE:1,
CODE_TYPE_QRCODE:2
},m={
CARD_STATUS_INIT:0,
CARD_STATUS_NOT_VERIFY:1,
CARD_STATUS_VERIFY_FAIL:2,
CARD_STATUS_VERIFY_OK:3,
CARD_STATUS_DELETE:4,
CARD_STATUS_SYS_DELETE:5,
CARD_STATUS_DISPATCH:6,
CARD_STATUS_SYS_OFF_SHELF:7,
CARD_STATUS_EXPIRED:8
},f={
DATE_TYPE_FIX_TIME_RANGE:1,
DATE_TYPE_FIX_TERM:2,
DATE_TYPE_PERMANENT:100
};
return{
parse_cardticket:n,
parse_cardlist:r,
url_type:i
};
});define("cardticket/send_card.js",["common/wx/popup.js","common/wx/Step.js","cardticket/send_card_table.js","tpl/cardticket/send_card.html.js"],function(e){
"use strict";
var t=(e("common/wx/popup.js"),{
removeOnHide:!0,
view_mode:window.view_mode||0
}),p=(e("common/wx/Step.js"),function(e){
this.opt=$.extend(!0,{},t,e),this.init();
}),o=e("cardticket/send_card_table.js");
return p.prototype={
_html:e("tpl/cardticket/send_card.html.js"),
init:function(){
var e=this.opt,t=this,p=$(template.compile(this._html)()).popup({
title:"选择卡券",
autoShow:!1,
buttons:[{
text:"确定",
type:"primary",
click:function(){
t.sendCardTable.select();
}
},{
text:"取消",
type:"default",
click:function(){
t.sendCardTable.isLoading()||this.hide();
}
}],
onHide:function(){
e.onHide&&e.onHide.call(t),e.removeOnHide&&this.remove();
},
className:"send_card align_edge",
width:960
});
if(this.$send_popup=p,e.container=this.$send_popup,e.pageChanged=function(){
t.$send_popup.popup("resetPosition");
},e.getDataComplete=function(){
t.$send_popup.popup("resetPosition");
},e.selectComplete){
var n=e.selectComplete;
e.selectComplete=function(){
n.call(t,arguments[0],arguments[1],arguments[2]),t.hide();
};
}else e.selectComplete=function(){
t.hide();
};
e.hidePopup=function(){
t.$send_popup.popup("hide");
},this.sendCardTable=new o(e);
},
show:function(){
this.$send_popup.popup("show"),this.$send_popup.popup("resetPosition");
},
hide:function(){
this.$send_popup.popup("hide");
},
destroy:function(){
this.$send_popup.popup("remove");
}
},p;
});define("tpl/vote/vote_table.html.js",[],function(){
return'\n<div class="">\n	<div class="table_wrp with_border">\n		<table class="table" cellspacing="0">\n			<thead class="thead">\n				<tr>\n					<th class="table_cell vote_check">&nbsp;</th>\n					<th class="table_cell vote_title tl"><div class="td_panel">投票名称</div></th>\n					<th class="table_cell vote_time"><div class="td_panel">截至时间</div></th>\n					<th class="table_cell vote_num"><div class="td_panel">投票人数</div></th>\n				</tr>\n			</thead>\n			<tbody class="tbody">\n            {if loading}\n                <tr>\n                    <td class="empty_tips" colspan="4"><i class="icon_loading_small white">loading...</i></td>\n                </tr>\n            {else}\n                {if !data.super_vote_info.length}\n                    <tr>\n                        <td class="empty_tips" colspan="4">暂无有效投票</td>\n                    </tr>\n                {else}\n                {each data.super_vote_info as vote i}\n                    <!--Begin 现在的-->\n                    <tr id="js_ct_tr_{vote.super_vote_id}">\n                        <td class="table_cell" colspan="4">\n                            <label class="frm_radio_label">\n                                <span class="td_panel vote_check">\n                                    <i class="icon_radio"></i>\n                                </span>\n                                <input type="radio" data-id="{vote.super_vote_id}" data-biz="{biz}" value="{vote.super_vote_id}" class="frm_radio js_select" data-height="{vote.height}">\n\n                                <span class="td_panel vote_title">\n                                    <a target="_blank" href="/cgi-bin/newoperatevote?action=show&supervoteid={vote.super_vote_id}{token}">{vote.title}</a>\n                                </span>\n                                <span class="td_panel vote_time">\n                                    {datestring vote.expire_time*1000}\n                                </span>\n                                <span class="td_panel vote_num">\n                                    {vote.person_count}\n                                </span>\n                            </label>\n                        </td>\n                    </tr>\n                    <!--End 现在的-->\n                    \n                    <!--Begin 原来的-->\n                    <!--<tr id="js_ct_tr_{vote.super_vote_id}">\n                        <td class="table_cell vote_check">\n                            <div class="td_panel">\n                                <label class="frm_radio_label">\n                                    <i class="icon_radio"></i>\n                                    <input type="radio" data-id="{vote.super_vote_id}" data-biz="{biz}" value="{vote.super_vote_id}" class="frm_radio js_select" data-height="{vote.height}">\n                                </label>\n                            </div>\n                        </td>\n                        <td class="table_cell vote_title"><div class="td_panel"><a target="_blank" href="/cgi-bin/newoperatevote?action=show&supervoteid={vote.super_vote_id}{token}">{vote.title}</a></div></td>\n                        <td class="table_cell vote_time"><div class="td_panel">{datestring vote.expire_time*1000}</div></td>\n                        <td class="table_cell vote_num"><div class="td_panel">{vote.person_count}</div></td>\n                    </tr>-->\n                    <!--End 原来的-->\n                {/each}\n                {/if}\n            {/if}\n			</tbody>\n		</table>\n		<div class="js_pager"></div>\n	</div>\n</div>\n\n\n';
});define("vote/new.js",["common/wx/popup.js","tpl/vote/vote.html.js","tpl/vote/vote_question.html.js","tpl/vote/vote_item.html.js","biz_web/ui/checkbox.js","common/lib/datepicker.js","biz_web/ui/dateRange.js","biz_web/ui/dropdown.js","common/wx/preview.js","common/wx/upload.js","common/wx/media/imageDialog.js","biz_common/moment.js","common/qq/mask.js","common/wx/Tips.js","biz_common/jquery.validate.js","common/wx/dialog.js","common/wx/Cgi.js","common/wx/inputCounter.js","common/wx/tooltip.js","biz_web/lib/json.js"],function(e){
"use strict";
function t(){
$(".js_new_vote").html(""),$(".js_new_vote").html(template.compile(l)({})),_=$(".js_question_container"),
n(),x=[],0==x.length&&x.push(new a({})),a.refresh(),i();
}
function n(){
var e=$(".vote_container");
e.find(".js_vote_auth .vote_radio").checkbox({
multi:!1
});
var t=e.find("#jsVoteDate").datepicker();
t.datepicker("setDate",3),t.parent().find(".icon_datepicker").click(function(){
t.datepicker("show");
});
var n=new d({
container:e.find("#jsVoteHour"),
data:$.map("00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23".split(","),function(e){
return{
name:e,
value:e
};
}),
callback:function(e){
this.container.data("val",e);
},
search:!1
});
n.selected(0);
var o=new d({
container:e.find("#jsVoteMin"),
data:$.map("00,05,10,15,20,25,30,35,40,45,50,55".split(","),function(e){
return{
name:e,
value:e
};
}),
callback:function(e){
this.container.data("val",e);
},
search:!1
});
o.selected(0);
}
function o(){
var e=$(".js_question_container");
$("#js_add_question").on("click",function(){
var e=$(".js_question").size();
if(e>=q)return m.err("最多只能添加%s个问题".sprintf(q)),!1;
if(!h.form())return!1;
for(var t=0;t<k.length;t++)if(k[t]){
var n=$(".js_question").eq(t);
if(!k[t].form())return n.find(".vote_warn").show(),$("#js_error").show(),!1;
n.find(".vote_warn").hide(),$("#js_error").hide();
}
return a.fold(),x.push(new a({})),x[x.length-1].init(),i(),!1;
}),e.delegate(".js_add_item","click",function(e){
var t=$(e.target),n=t.data("tag");
return x[n].save(),x[n].add(),x[n].refresh(),i(),!1;
}),e.delegate(".js_delete_item","click",function(e){
var t=$(e.target),n=t.data("tag"),o=t.data("item");
return x[n].save(),x[n].remove(n,o),x[n].refresh(),i(),!1;
}),e.delegate(".js_question_edit","click",function(e){
var t=$(e.target),n=t.data("tag");
return"编辑"==t.html()?(t.html("收起"),$(".js_question").eq(n).removeClass("close_vote"),
x[n].open()):(t.html("编辑"),$(".js_question").eq(n).addClass("close_vote"),x[n].fold()),
!1;
}),e.delegate(".js_question_delete","click",function(e){
var t=$(e.target),n=t.data("tag");
return a.save(),x.splice(n,1),a.turn(),a.refresh(),a.fold(),i(),!1;
}),$(".js_complete_bnt").click(function(){
var e=r();
return"disabled"==$(".js_complete_bnt").attr("disabled")?!1:void(e&&($(".js_complete_bnt").btn(!1),
v.post({
url:wx.url("/cgi-bin/newoperatevote?action=create"),
dataType:"json",
data:{
action:"create",
json:e
},
mask:!1
},function(e){
0==e.base_resp.ret?(m.suc("操作成功"),location.href=wx.url("/cgi-bin/newoperatevote?action=list")):($(".js_complete_bnt").btn(!0),
m.err(e.base_resp.err_msg));
})));
}),e.delegate(".link_dele","click",function(e){
var t=$(e.target).parents(".img_container"),n=$(e.target).attr("id"),o=n.replace(/delete/gi,"upload");
return t.hide(),t.find(".preview").data("src","").css({
backgroundImage:""
}),$("#"+o).html("上传图片"),!1;
}),e.on("click",".js_img_preview",function(){
var e=$(this),t=e.parents(".js_img_container"),n=[],o=0;
$(".js_question_container").find(".js_img_container").each(function(e,r){
r===t[0]&&(o=n.length);
var i=$(r).find(".js_img_preview").data("src");
i&&n.push({
imgsrc:i
});
}),n.length>0&&p.show({
imgdata:n,
current:o
});
});
}
function r(){
a.save();
var e=$("#jsVoteDate").val().split("-").concat([$("#jsVoteHour").data("val"),$("#jsVoteMin").data("val")]).join(""),e=c(e,"YYYYMMDDHHmm").unix(),t=window.wx.data.time;
if(e-t>15811200||0>e-t)return m.err("投票截止时间只能在当前时间之后，半年之内"),!1;
if(!h.form())return!1;
for(var n=0;n<k.length;n++)if(k[n]){
var o=$(".js_question").eq(n);
if(!k[n].form())return o.find(".vote_warn").show(),!1;
o.find(".vote_warn").hide();
}
for(var r={
title:$("input[name=vote_title]").val(),
vote_permission:"1",
expire_time:e,
vote_subject:[]
},n=0;n<x.length;n++)r.vote_subject[n]={},r.vote_subject[n].title=x[n].title,r.vote_subject[n].type=x[n].type,
r.vote_subject[n].options=x[n].options;
return JSON.stringify2(r);
}
function i(){
h=$("#voteForm").validate({
rules:{
vote_title:{
required:!0,
rangelength:[1,35]
}
},
messages:{
vote_title:{
required:"请填写投票名称",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
}
},
ignore:[],
errorPlacement:function(e,t){
var n=t.parent().parent();
e.insertBefore(n.find(".frm_tips"));
}
}),k=[];
for(var e=0;q>e;e++)k.push($("#question_"+e).validate({
rules:{
question_title:{
required:!0,
rangelength:[1,35]
},
option0:{
required:!0,
rangelength:[1,35]
},
option1:{
required:!0,
rangelength:[1,35]
},
option2:{
required:!0,
rangelength:[1,35]
},
option3:{
required:!0,
rangelength:[1,35]
},
option4:{
required:!0,
rangelength:[1,35]
},
option5:{
required:!0,
rangelength:[1,35]
},
option6:{
required:!0,
rangelength:[1,35]
},
option7:{
required:!0,
rangelength:[1,35]
},
option8:{
required:!0,
rangelength:[1,35]
},
option9:{
required:!0,
rangelength:[1,35]
},
option10:{
required:!0,
rangelength:[1,35]
},
option11:{
required:!0,
rangelength:[1,35]
},
option12:{
required:!0,
rangelength:[1,35]
},
option13:{
required:!0,
rangelength:[1,35]
},
option14:{
required:!0,
rangelength:[1,35]
},
option15:{
required:!0,
rangelength:[1,35]
},
option16:{
required:!0,
rangelength:[1,35]
},
option17:{
required:!0,
rangelength:[1,35]
},
option18:{
required:!0,
rangelength:[1,35]
},
option19:{
required:!0,
rangelength:[1,35]
},
option20:{
required:!0,
rangelength:[1,35]
},
option21:{
required:!0,
rangelength:[1,35]
},
option22:{
required:!0,
rangelength:[1,35]
},
option23:{
required:!0,
rangelength:[1,35]
},
option24:{
required:!0,
rangelength:[1,35]
},
option25:{
required:!0,
rangelength:[1,35]
},
option26:{
required:!0,
rangelength:[1,35]
},
option27:{
required:!0,
rangelength:[1,35]
},
option28:{
required:!0,
rangelength:[1,35]
},
option29:{
required:!0,
rangelength:[1,35]
}
},
messages:{
question_title:{
required:"请填写问题的标题",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option0:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option1:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option2:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option3:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option4:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option5:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option6:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option7:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option8:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option9:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option10:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option11:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option12:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option13:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option14:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option15:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option16:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option17:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option18:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option19:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option20:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option21:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option22:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option23:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option24:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option25:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option26:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option27:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option28:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
},
option29:{
required:"请填写问题的选项",
rangelength:$.validator.format("需要在{0}到{1}个字之间")
}
},
ignore:[],
errorPlacement:function(e,t){
var n=t.parent().parent();
e.insertBefore(n.find(".frm_tips"));
}
}));
for(var t=$(".js_vote_upload_btn"),n=t.length,e=0;n>e;e++){
var o=t.eq(e).attr("id");
!function(e){
g.uploadCdnFile({
container:"#"+e,
url:wx.url("/cgi-bin/filetransfer?action=upload_material"),
multi:!1,
type:2,
accept:{
extensions:"png,jpeg,jpg,gif",
mimeType:"image/*"
},
fileSingleSizeLimit:1048576,
imageSize:!1,
onAllComplete:function(){},
onComplete:function(t,n,o,r,i){
return function(e,t){
switch(+t.base_resp.ret){
case 0:
var n=t.content;
m.suc("上传成功");
var o=(e.replace(/upload/gi,"delete"),$("#"+e).parent().parent().siblings(".img_container"));
o.show(),$("#"+e).html("重新上传"),o.find(".preview").data("src",n).css({
backgroundImage:"url("+n+")"
});
break;

case 200034:
m.err("尺寸建议为300*300像素，大小不能超过1M。");
break;

case 1:
m.err("图片太大");
break;

case 200011:
m.err("请上传合法的图片格式");
break;

case 220001:
m.err('"素材管理"中的存储数量已达到上限，请删除后再操作。');
break;

case 220002:
m.err("你的图片库已达到存储上限，请进行清理。");
break;

default:
m.err("上传图片失败");
}
}(e,r,i);
},
onProgress:function(){},
onSelect:function(){},
canContinueUpload:function(){
return!0/!1;
}
});
}(o);
}
s($("input[type=text][name=vote_title]"),35);
var r=$("input[type=text]");
r.each(function(){
$(this).hasClass("js_option_input")&&s($(this),35);
});
}
function a(e){
this.index=e.index||$(".js_question").size(),this.title=e.title||"",this.type=e.type||1,
this.options=e.options||[{
name:"",
url:""
},{
name:"",
url:""
},{
name:"",
url:""
}];
var t=this.index+1,n=t%10,o=(t-t%10)/10;
this.size=b[o]+w[n],this.show=!0,a.prototype.init=function(){
var e=this.index;
_.append(template.compile('<div class="vote_meta option_setting js_question">'+u+"</div>")(x[e]));
var t=$(".js_question").eq(e);
t.find(".js_vote_type .vote_radio").checkbox({
multi:!1
});
},a.prototype.check=function(){},a.prototype.add=function(){
var e=this.index,t=x[e].options.length;
j>t?x[e].options.push({
name:"",
url:""
}):m.err("最多只能添加%s个选项".sprintf(j));
},a.prototype.remove=function(e,t){
x[e].options.splice(t,1);
},a.prototype.turn=function(){},a.prototype.refresh=function(){
var e=this.index;
$(".js_question").eq(e).html(template.compile(u)(x[e]));
var t=$(".js_question").eq(e);
t.find(".js_vote_type .vote_radio").checkbox({
multi:!1
});
},a.prototype.save=function(){
var e=this.index;
x[e].title=$(".js_question").eq(e).find("input[name=question_title]").val(),x[e].type=$(".js_question").eq(e).find("input[name=isMlt][checked]").val();
var t=$(".js_question").eq(e).find(".js_vote_option"),n=t.find(".frm_input"),o=[];
n.each(function(e,n){
o.push({
name:n.value,
url:t.eq(e).find(".preview").data("src")
});
}),x[e].options=o;
},a.prototype.fold=function(){
var e=this.index,t=$(".js_question").eq(e);
t.find(".js_item_container").slideUp(),t.find(".js_vote_question").text(t.find("input[name=question_title]").val());
},a.prototype.open=function(){
var e=this.index,t=$(".js_question").eq(e);
t.find(".js_item_container").slideDown(),t.find(".js_vote_question").text("");
},a.refresh=function(){
_.html(""),$(x).each(function(e,t){
t.init();
});
},a.fold=function(){
_.find(".js_question_edit").html("编辑"),$(".js_question").addClass("close_vote");
for(var e=x.length,t=0;e>t;t++)x[t].fold();
},a.save=function(){
for(var e=x.length,t=0;e>t;t++)x[t].save();
},a.turn=function(){
for(var e=x.length,t=0;e>t;t++){
x[t].index=t;
var n=t+1,o=n%10,r=(n-n%10)/10;
x[t].size=b[r]+w[o],x[t].show=!1;
}
};
}
function s(e,t){
return new f(e,{
maxLength:t,
showCounter:!0
});
}
e("common/wx/popup.js");
{
var l=e("tpl/vote/vote.html.js"),u=e("tpl/vote/vote_question.html.js"),d=(e("tpl/vote/vote_item.html.js"),
e("biz_web/ui/checkbox.js"),e("common/lib/datepicker.js"),e("biz_web/ui/dateRange.js"),
e("biz_web/ui/dropdown.js")),p=e("common/wx/preview.js"),g=e("common/wx/upload.js"),c=(e("common/wx/media/imageDialog.js"),
e("biz_common/moment.js")),m=(e("common/qq/mask.js"),e("common/wx/Tips.js")),v=(e("biz_common/jquery.validate.js"),
e("common/wx/dialog.js"),e("common/wx/Cgi.js")),f=e("common/wx/inputCounter.js");
e("common/wx/tooltip.js");
}
e("biz_web/lib/json.js");
var h,_,q=10,j=30,w=["","一","二","三","四","五","六","七","八","九"],b=["","十","二十","三十","四十","五十"],x=[],k=[];
return template&&template.helper("formartNum",function(e){
var t=e%10,n=(e-e%10)/10;
return b[n]+w[t];
}),{
initPage:t,
eventBind:o,
getFullData:r
};
});define("tpl/pagebar.html.js", [], function(e, t, n) {
return '<div class="pagination">\n    <span class="page_nav_area">\n        <a href="javascript:void(0);" class="btn page_first">{firstButtonText}</a>\n        <a href="javascript:void(0);" class="btn page_prev"><i class="arrow"></i></a>\n        {if isSimple}\n            <span class="page_num">\n                <label>{initShowPage}</label>\n                <span class="num_gap">/</span>\n                <label>{endPage}</label>\n            </span>\n        {else}\n            {each startRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n            <span class="gap_prev">...</span>\n            {each midRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav js_mid">{pageIndex}</a>\n            {/each}\n            <span class="gap_next">...</span>\n            {each endRange as pageIndex index}\n            <a href="javascript:void(0);" class="btn page_nav">{pageIndex}</a>\n            {/each}\n        {/if}\n        <a href="javascript:void(0);" class="btn page_next"><i class="arrow"></i></a>\n        <a href="javascript:void(0);" class="btn page_last">{lastButtonText}</a>            \n    </span>\n    {if (endPage>1)}\n    <span class="goto_area">\n        <input type="text">\n        <a href="javascript:void(0);" class="btn page_go">跳转</a>\n    </span>\n    {/if}\n</div>\n';
});define("original/tpl/whitelist_search.html.js",[],function(){
return'{each list as item}\n<div class="search_user_item tj_item js_search_item {if (item.status == 2 || item .status == 3)}disabled{/if}" data-openid="{item.openid}">\n    <img class="search_user_thumb" src="{item.pic_url}" alt="">\n    <div class="search_user_info">\n        <strong class="search_user_nickname js_nickname">{item.nickname}</strong>\n        <p class="search_user_desc js_wx_name">{item.wx_name}</p>\n    </div>\n    <!-- 3自己 2是已添加 -->\n    {if (item.status == 2)}\n    <div class="card_mask_global wording_container">\n        已添加过该账号\n    </div>\n    {else if (item.status == 3)}\n    <div class="card_mask_global wording_container">\n        不能添加本账号\n    </div>\n    {else}\n    <div class="card_mask_global">\n        <i class="icon_card_selected_global"></i>\n    </div>\n    {/if}\n</div>\n{/each}';
});define("original/tpl/whitelist_record.html.js",[],function(){
return'<label class="frm_checkbox_label tj_item js_record_item {selected ? \'selected\' : \'\'}" data-openid="{openid}">\n    <i class="icon_checkbox"></i>\n    <span class="lbl_content">{nickname}</span>\n    <input type="checkbox" class="frm_checkbox js_record_checkbox">\n</label>&nbsp;\n';
});define("original/tpl/whitelist.html.js",[],function(){
return'<div class="account_panel">\n    <div class="account_area search_account_area">\n        <div class="account_area_hd">请输入公众号的昵称或微信号</div>\n        <div class="account_area_bd">\n            <span class="frm_input_box search append">\n                <a href="javascript:;" class="frm_input_append js_btn_search"><i class="icon16_common search_gray">搜索</i>&nbsp;</a>\n                <input value="" name="query" type="text" class="frm_input js_input_search valid" placeholder="">\n            </span>\n            <div class="frm_msg fail js_search_fail">搜索失败提示</div>\n            <p class="empty_tips js_search_msg">暂无记录</p>\n            <div class="search_user_list js_search_list"></div>\n        </div>\n    </div>\n    <div class="account_area history_account_area">\n        <div class="account_area_hd"><span>添加记录</span><a href="javascript:;" class="global_link_opr js_select_all" style="display: none;">全选</a></div>\n        <div class="account_area_bd js_record_list"><p class="empty_tips js_empty">暂无记录</p></div>\n    </div>\n</div>\n';
});define("original/whitepop.js",["original/tpl/whitepop.html.js","common/wx/popover.js"],function(o){
"use strict";
function e(o){
var e=this;
e.opt=$.extend(!0,{},p,o);
var n=e.opt.dom;
n.html(template.compile(i)({
showAllowRe:!1,
showModify:!1,
showHideSor:!1
})),n.find(".js_popinput").checkbox({
multi:!0,
onChanged:function(){
if(this.values().length>0||e.opt.showAllowRe){
var o=this.values(),i=o.indexOf("md")>-1?"1":"0",p=Number(i)&&o.indexOf("hs")>-1?"1":"0";
if(!Number(i))return n.find(".js_popinput").eq(1).checkbox("disabled",!0),n.find(".js_popinput").eq(1).checkbox("checked",!1),
void e.opt.bad();
n.find(".js_popinput").eq(1).checkbox("disabled",!1),e.opt.done({
can_modify:i,
can_hide_source:p
});
}else 0==this.values().length?(n.find(".js_popinput").eq(1).checkbox("disabled",!0),
n.find(".js_popinput").eq(1).checkbox("checked",!1),e.opt.bad()):e.opt.bad();
}
}),n.find(".js_popinput").eq(1).checkbox("disabled",!0);
}
var i=o("original/tpl/whitepop.html.js"),p=(o("common/wx/popover.js"),{
dom:null,
showAllowRe:!1,
done:$.noop,
bad:$.noop
});
return e;
});define("original/MultiStepDialog.js",["common/wx/Step.js","common/wx/popup.js","original/tpl/MultiStepDialog.html.js"],function(t){
"use strict";
function n(t){
var n=this;
n.opt=$.extend(!0,{},s,t),n.stepCount=0,n.currentStep=0,n.btnsConfig=[],n.btnCountMap={
0:0
},n.steps=[],n.initer=[],n.dialog=null,n.$dialog=null,n.$step=null,n.$stepDom=[],
n.$btns=[];
}
var e=t("common/wx/Step.js"),o=(t("common/wx/popup.js"),t("original/tpl/MultiStepDialog.html.js")),s={
title:"",
className:""
};
return n.prototype={
register:function(t){
var n=this;
n.steps.push(t.stepName||"Step"+(n.stepCount+1));
for(var e=t.buttons.length,o=0;e>o;o++)n.btnsConfig.push(t.buttons[o]);
return n.btnCountMap[n.stepCount+1]=n.btnCountMap[n.stepCount]+e,n.initer.push(t.init),
n.stepCount++,n;
},
show:function(){
for(var t=this,n=[],s=0,i=t.btnsConfig.length;i>s;s++){
var r={},p=t.btnsConfig[s];
for(var u in p)p.hasOwnProperty(u)&&"click"!=u&&(r[u]=p[u]);
r.click=function(n){
return function(){
n&&n.call(t);
};
}(p.click),n.push(r),t.$btns.push({
click:p.click
});
}
var a=template.compile(o)({
steps:t.steps
});
t.dialog=$(a).popup({
title:t.opt.title,
className:t.opt.className,
onShow:function(){
t.$dialog=this;
},
close:function(){
this.remove();
},
buttons:n
});
for(var l=[],s=0;s<t.stepCount;s++)l.push(s+1+" "+t.steps[s]),t.$stepDom.push(t.dialog.find(".js_step"+s));
t.$step=l.length>1?new e({
container:t.dialog.find(".js_process"),
selected:1,
names:l
}):null;
var c=t.dialog.find(".js_btn_p");
c.hide();
for(var s=0,i=t.$btns.length;i>s;s++)t.$btns[s].dom=c.eq(s),s<t.btnCountMap[1]&&t.$btns[s].dom.show();
return t.initer[0](t.$stepDom[0]),t.$stepDom[0].data("inited",!0),t.$dialog.resetPosition(),
t;
},
next:function(){
var t=this;
if(t.stepCount>t.currentStep+1){
t.$step.go(t.currentStep+2),t.$stepDom[t.currentStep].hide(),t.$stepDom[t.currentStep+1].show();
for(var n=0,e=t.$btns.length;e>n;n++)n>=t.btnCountMap[t.currentStep+1]&&n<t.btnCountMap[t.currentStep+2]?t.$btns[n].dom.show():t.$btns[n].dom.hide();
t.$stepDom[t.currentStep+1].data("inited")||(t.initer[t.currentStep+1](t.$stepDom[t.currentStep+1]),
t.$stepDom[t.currentStep+1].data("inited",!0),t.$dialog.resetPosition()),t.currentStep++;
}
return this;
},
pre:function(){
var t=this;
if(t.currentStep>0){
t.$step.go(t.currentStep),t.$stepDom[t.currentStep].hide(),t.$stepDom[t.currentStep-1].show();
for(var n=0,e=t.$btns.length;e>n;n++)n>=t.btnCountMap[t.currentStep-1]&&n<t.btnCountMap[t.currentStep]?t.$btns[n].dom.show():t.$btns[n].dom.hide();
t.currentStep--;
}
return this;
},
enableBtn:function(t,n){
var e=this,o=e.btnCountMap[t]+n;
return e.$btns[o].dom.removeClass("btn_disabled").addClass("btn_primary"),e;
},
disableBtn:function(t,n){
var e=this,o=e.btnCountMap[t]+n;
return e.$btns[o].dom.removeClass("btn_primary").addClass("btn_disabled"),e;
},
hide:function(){
return this.$dialog&&this.$dialog.hide(),!1;
},
remove:function(){
this.dialog&&(this.dialog.popup("remove"),this.dialog=null);
}
},n;
});