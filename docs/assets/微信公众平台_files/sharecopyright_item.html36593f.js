define("cardticket/common_template_helper.js",["common/wx/upload.js","common/wx/Cgi.js","biz_common/moment.js","cardticket/add/msg_operate_type_html.js"],function(e){
"use strict";
function t(e){
for(var t,r,n,a,_=[],i=0;i<e.length;i++){
var s=e[i];
"object"==typeof s&&(s=d[s.type]),a=h[s],s?i==e.length-1?n&&s-n!=1?(_.push(t+(r?"至"+r:"")),
_.push(a)):_.push(t?t+"至"+a:a):n&&s-n!=1?(_.push(t+(r?"至"+r:"")),t=a,r="",n=s):(t?r=a:t=a,
n=s):(s=8,i==e.length-1&&t&&_.push(t+"至"+r),_.push(a),t=r=n="");
}
return _.join("、");
}
function r(e){
return e.replace(/\r\n|\\n|\n/g,"<br/>");
}
function n(e){
var t="YYYY-MM-DD HH:mm:ss",r=l(e,t);
return r?r.format("YYYY-MM-DD"):"";
}
function a(e){
return 1==e||3==e||2==e;
}
function _(e,t){
return 1==e&&119>=t?!0:(2!=e||215!=t&&210!=t&&208!=t&&207!=t&&206!=t&&204!=t&&203!=t&&211!=t&&201!=t&&202!=t)&&(3!=e||308!=t&&309!=t&&306!=t&&305!=t&&304!=t&&303!=t&&314!=t&&316!=t&&317!=t)&&(6!=e||601!=t&&602!=t&&603!=t)?4==e&&402==t?!0:7==e&&701==t?!0:(5!=e||501!=t&&502!=t&&503!=t)&&(8!=e||812!=t&&811!=t&&808!=t&&817!=t&&818!=t&&827!=t&&804!=t&&803!=t&&802!=t&&801!=t&&824!=t&&822!=t&&823!=t&&821!=t&&828!=t&&814!=t&&825!=t&&826!=t&&809!=t&&807!=t&&816!=t&&819!=t&&813!=t)?!1:!0:!0;
}
function i(e){
for(var t=0;t<M.length;t++){
var r=M[t];
"function"!=typeof r&&(r=$.noop),r(e);
}
M=[];
}
function s(e){
return M.push(e),"undefined"!=typeof I?(i(I),!0):U?!1:(U=!0,u.get({
url:"/merchant/cardhelpmakesend",
data:{
action:"list",
begin:0,
count:9999999,
status_list:1
},
complete:function(){
U=!1;
}
},function(e){
if(0==e.base_resp.ret||-1==e.base_resp.ret){
for(var t=$.parseJSON(e.bind_list),r=t.List,n=!1,a=!1,s=0;s<r.length;s++){
var o=r[s];
if(_(o.PrimaryCategoryId,o.SecondaryCategoryId)){
a=!0;
break;
}
}
e.attr&&e.attr.merchant_info&&(n=_(e.attr.merchant_info.primary_category_id,e.attr.merchant_info.secondary_category_id)),
n&&a&&(I=1),n&&!a&&(I=2),!n&&a&&(I=3),n||a||(I=4),4==I&&e.is_can_use_sns_card&&!e.is_can_use_help_make_and_send&&(I=5),
i(I);
}
}),!1);
}
function o(e,t){
var r=!1;
e.create_time&&e.create_time<1463648400&&(r=!0),"undefined"==typeof t&&(t=!0);
var n="",a=!1;
return 4==e.type||2==e.type?(t&&e.reduce_cost&&(n="价值%s元代金券一张".sprintf(e.reduce_cost)),
r?n:(e.use_condition_least_cost?(n&&(n+="，"),n+="消费满%s元可用".sprintf(e.use_condition_least_cost)):4!=e.type||"1"!=e.is_sns_card&&e.is_sns_card!==!0||(n&&(n+="；"),
n+="无最低消费限制"),e.accept_category&&(n&&(n+="；"),n+="适用于%s".sprintf(e.accept_category),
a=!0),e.reject_category&&(n&&(n+="；"),n+="不适用于%s".sprintf(e.reject_category),a=!0),
"1"!=e.is_sns_card&&e.is_sns_card!==!0||4!=e.type||a||(n&&(n+="；"),n+="全场通用，不限品类"),
!(4!=e.type||"1"!=e.is_sns_card&&e.is_sns_card!==!0||e.has_condition||"0"!=e.uncheckcount&&!e.id),
n)):3==e.type?(t&&(e.title||e.gift_title)&&(n="%s%s%s%s".sprintf("1"==e.is_sns_card||e.is_sns_card===!0?"兑换":"",e.gift_title||e.title,e.gift_num||"",e.gift_unit||"")),
r?n:(2==e.use_condition_least_cost_type&&e.object_use_for&&(n&&(n+="；"),n+="购买%s可用".sprintf(e.object_use_for),
a=!0),1==e.use_condition_least_cost_type&&e.use_condition_least_cost&&(n&&(n+="，"),
n+="消费满%s元可用".sprintf(e.use_condition_least_cost),a=!0),"1"!=e.is_sns_card&&e.is_sns_card!==!0||a||(n&&(n+="；"),
n+="无最低消费限制"),n)):void 0;
}
function c(e){
if(!e.begin_time||!e.end_time)return"";
var t="YYYY.MM.DD";
return l.unix(e.begin_time).format(t)+"-"+l.unix(e.end_time).format(t);
}
var p=e("common/wx/upload.js"),u=e("common/wx/Cgi.js"),l=e("biz_common/moment.js"),m={
10:"会员卡",
21:"门票",
22:"电影票",
4:"代金券",
1:"团购券",
2:"折扣券",
3:"兑换券",
0:"优惠券"
},f={
1:"审核中",
2:"未通过",
3:"待投放",
4:"已删除",
5:"待投放",
6:"已投放",
8:"已过期",
7:"违规下架"
},d={
MONDAY:"1",
TUESDAY:"2",
WEDNESDAY:"3",
THURSDAY:"4",
FRIDAY:"5",
SATURDAY:"6",
SUNDAY:"7"
};
template.helper("$has_day",function(e,t){
if(!e)return"";
for(var r=0;r<e.length;r++){
var n=d[e[r].type];
if(n||(n=8),n==t)return"checked";
}
return"";
});
var h={
1:"周一",
2:"周二",
3:"周三",
4:"周四",
5:"周五",
6:"周六",
7:"周日",
8:"节假日"
};
template.helper("convert_time_limit",function(e){
return t(e);
});
var v={
1:"免费WIFI",
2:"可带宠物",
4:"免费停车",
8:"可外卖"
};
template.helper("convert_business_service",function(e){
if(!e)return"无";
var t=[];
for(var r in v){
var n=parseInt(r);
(e&n)>0&&t.push(v[r]);
}
return t.join("&nbsp;&nbsp;");
});
var l=e("biz_common/moment.js");
template.helper("convert_state",function(e){
return f[e]||e;
}),template.helper("convert_type",function(e){
return m[e]||e;
}),template.helper("card_type_map",function(e){
return e;
}),template.helper("unixFormat",function(e,t){
return t&&(t=t.replace(","," ")),l.unix(e).format(t);
}),template.helper("validtime",function(e,t){
if(1==e.time_type){
var r=l.unix(e.begin_time).format(t)+"至"+l.unix(e.end_time).format(t);
return e.end_time<l().unix()&&(r+="(已过期)"),r;
}
return 2==e.time_type?(e.from_day=0==e.from_day?"当":e.from_day,"领取后{from_day}天生效{fixed_term}天有效".format(e)):"";
}),template.helper("addtoken",function(e){
return wx.url(e);
}),template.helper("nl2br",function(e){
return r(e.html(!0));
});
var g={
1:"50万以下",
2:"50-100万",
3:"100-500万",
4:"500-1000万",
5:"1000万以上"
};
template.helper("convert_business_volume_type",function(e){
return g[e]||e;
});
var y={
0:"已提交",
2:"已提交",
3:"生效",
4:"不通过"
};
template.helper("convert_store_state",function(e){
return y[e]||e;
}),template.helper("$preview",function(e){
if(!e)return"无";
var t;
return 0===e.indexOf("temp_")?(e=e.replace(/^temp_/,""),t=p.tmpFileUrl(e)):t=p.multimediaFileUrl(e),
"<a href='%s' target='_blank'><img src='%s' /></a>".sprintf(t,t);
}),template.helper("$upload_preview",function(e){
if(!e)return"";
var t;
return 0===e.indexOf("temp_")?(e=e.replace(/^temp_/,""),t=p.tmpFileUrl(e)):t=p.multimediaFileUrl(e),
"<img src='%s' style='width:260px;' />".sprintf(t);
}),template.helper("$preview_stuffs",function(e){
for(var t=[],r=e.stuffs,n=0;n<r.length;n++){
var a=r[n]+"_preview_tpl";
$("#"+a).length&&t.push(template.render(a,e));
}
return t.join("");
});
var x={
2:"女",
1:"男"
};
template.helper("convert_gender",function(e){
return x[e]||"未知";
}),template.helper("percentage",function(e,t,r,n){
var r=e/t*100;
return n&&r>n&&(r=n),r.toFixed(2);
});
var b={
"":"全部",
0:"API渠道",
1:"嵌入图文消息",
2:"直接群发卡券",
3:"下载二维码"
};
template.helper("convert_channel",function(e){
return b[e]||e;
}),template.helper("convert_provide_time",n),template.helper("http2https",function(e){
return e?(e+"").http2https():"";
}),template.helper("https2http",function(e){
return e?(e+"").https2http():"";
}),template.helper("codepad",function(e){
var t=new RegExp("([^s]{4})(?=([^s])+$)","ig");
return e.replace(t,"$1-");
}),template.helper("yuan",function(e){
if(!e)return"--";
var e=e/100;
return e.toFixed(2);
}),template.helper("is_paycard",function(){
return window.wx_is_paycard;
});
var w={
0:"等待接收",
1:"已接收",
3:"过期退回",
2:"已拒绝"
},j={
0:"等待接收",
2:"已拒绝",
1:"已接收",
3:"过期退回"
};
template.helper("convert_intercard_status",function(e){
return w[e]||e;
}),template.helper("convert_intercard_rec_status",function(e){
return j[e]||e;
});
var Y={
0:"无",
1:"图文消息",
2:"卡券货架",
3:"小店货架",
4:"网页链接",
5:"卡券"
};
template.helper("convert_msg_operate_type",function(e){
return Y[e]||"无";
});
var k=e("cardticket/add/msg_operate_type_html.js"),u=e("common/wx/Cgi.js");
template.helper("msg_operate_content",function(e){
return 5===e._type?"":e._notexist?"无":template.compile(k[e._type])({
msg_operation:e
})||"";
});
var D={
CHECKING:"审核中",
APPROVED:"已通过",
REJECTED:"未通过",
EXPIRED:"已过期"
};
template.helper("convert_sub_merchant_status",function(e){
return D[e]||e;
}),template.helper("$is_can_use_help_make_and_send",function(){
return 1==window.wx_is_can_use_help_make_and_send;
}),template.helper("wx_url",function(e){
return wx.url(e);
});
var A={
".*?_4":"激活"
};
template.helper("convert_use_source",function(e,t){
var r=e+"_"+t;
return 4==t?"激活":1==t||6==t||7==t?"自助买单":5==t?"自助核销":2==t?"收款":3==e?"手机核销":1==e?"网页核销":2==e?"API核销":3==t?"积分变更":A[r]||"";
}),template.helper("convert_fee_coin",function(e,t){
return 0==t?"--":a(e)?'<span class="number_add">+%s</span>'.sprintf(t/100):'<span class="number_degress">-%s</span>'.sprintf(t/100);
});
var E={
1:"平台赠送",
2:"充值",
3:"退还券点",
4:"支出",
5:"平台扣减"
};
template.helper("convert_fee_order_type",function(e){
return E[e]||e;
});
var F={
2:{
1:"等待确认",
2:"充值成功",
3:"充值成功",
8:"充值成功"
},
3:"已退券点",
4:{
1:"等待确认",
3:"库存发放中",
4:"库存已发放",
7:"库存添加失败, 已返还券点",
6:"库存已发放",
5:"库存已发放"
}
};
template.helper("convert_fee_order_status",function(e,t){
var r=F[t];
return r?"string"==typeof r?r:r[e]||e:e;
}),template.helper("addhttp",function(e){
return/^http:\/\//.test(e)?e:"http://"+e;
});
var I,C=[],U=!1,M=[];
template.helper("$fix_abstract4friendcard",function(e,t){
return o(e,t);
}),template.helper("$gen_use_time",function(e){
return c(e);
});
var R={
0:"生效",
1:"已使用",
2:"过期",
3:"转赠中",
4:"已转赠",
5:"转赠过期",
6:"已删除"
};
template.helper("convert_user_card_state",function(e){
return R[e]||e;
});
var S={
0:"审核通过",
1:"待商户审核",
2:"审核不通过",
3:"待激活",
4:"请添加库存"
};
return template.helper("convert_swipe_card_status",function(e){
return S[e]||e;
}),{
type_map:m,
status_map:f,
store_status:y,
gender_map:x,
source_map:b,
convert_provide_time:n,
nl2br:r,
sub_merchant_status_map:D,
fix_money:function(e){
var t=/(\.\d{2}).+$/,r=e;
return r=parseFloat((r+"").replace(t,"$1"));
},
parse_assistsend_quota:function(e,t){
for(var r=0,n=0,a=0;a<e.length;a++){
var _=e[a];
_.quota_name==(t||"merchant_auth_create_card")&&(r=_.value),_.quota_name==(t?t+"_max_sku":"merchant_auth_create_card_max_sku")&&(n=_.value);
}
return{
max_card:r,
max_sku:n
};
},
check_friend_card_word:function(e,t){
if(!e)return!0;
for(var r=0;r<C.length;r++)if(e.indexOf(C[r])>=0)return t?t():!0;
return!0;
},
check_assist_brand_name_type:s,
can_category_use_sns_card:_,
fix_abstract4friendcard:o,
strlen:function(e){
for(var t=0,r=0;r<e.length;r++){
var n=e.charCodeAt(r);
128>n?t++:t+=2;
}
return t;
},
gen_use_time:c,
gen_time_limit:t
};
});define("cardticket/store_cgi.js",["common/wx/Cgi.js","common/wx/Tips.js","common/wx/tooltips.js","common/wx/tooltipsManager.js","common/wx/dialog.js"],function(t){
"use strict";
var e=t("common/wx/Cgi.js"),s=t("common/wx/Tips.js"),o=t("common/wx/tooltips.js"),c=t("common/wx/tooltipsManager.js"),n=(t("common/wx/dialog.js"),
{
deleteStore:function(t){
e.post({
url:"/merchant/entityshop?action=delete",
data:{
id:t.store_id
},
btn:t.btn
},function(o){
0==o.base_resp.ret?(s.suc("删除门店成功"),t.success&&t.success()):e.show(o);
});
},
deleteWithConfirm:function(t){
if(3==t.state||4==t.state){
var e=new o({
container:t.container,
content:"删除将影响在用此门店的卡券功能、微信连Wi-Fi、摇一摇周边、LBS广告等相关业务。<br />你确定要删除吗？",
type:"click",
buttons:[{
text:"确定",
type:"btn_primary",
click:function(){
if(t.success){
var e=t.success;
t.success=function(){
e&&e(),c.removeAll();
};
}
n.deleteStore(t);
}
},{
text:"取消",
type:"btn_default",
click:function(){
c.removeAll();
}
}]
});
e.show(),c.removeAll(),c.add(e);
}
},
listStore:function(t){
var s=$.extend({},{
action:"list",
begin:0,
count:9999999,
keyword:t.keyword,
task_id:t.task_id,
audit_state:t.audit_state||3
},t.getDataExtra);
e.get({
url:"/merchant/entityshop",
data:s
},function(s){
var o,c=s?1*s.base_resp.ret:-1;
if(0===c){
var n=$.parseJSON(s.data);
o={
shop_list:n.store_location,
total_num:s.total_count,
is_from_wxapoi:"true"===s.is_from_wxapoi
};
}else{
if(-7!==c&&200007!==c)return void e.show(s);
o={
shop_list:[],
total_num:0,
access_deny:!0
};
}
t.success&&t.success(o),wx.cgiData&&!wx.cgiData._store_data&&(wx.cgiData._store_data=o);
});
},
canSendCard:function(t){
t.success&&t.success(!0);
}
});
return n;
});define("tpl/biz_web/ui/timeRange.html.js",[],function(){
return"<div>\n    <label style=\"color:#8d8d8d\">时间</label>\n    <div class=\"dropdown_wrp dropdown_menu js_dr_timeSelectBox\" style=\"width:62px;\">\n        <a href=\"javascript:;\" class=\"btn dropdown_switch js_dr_selecter\"><label class='js_dr_timeLabel'>{timeList.mTime}</label><i class=\"arrow\"></i></a>\n        <div class=\"dropdown_data_container js_dr_option\">\n            <ul class=\"dropdown_data_list\">\n                {each ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'] as item i}\n                    <li class=\"dropdown_data_item\">\n                        <a href=\"javascript:;\" class='js_dr_time' data-value=\"{item}\">{item}</a>\n                    </li>\n                {/each}\n            </ul>\n        </div>\n    </div> :\n    <span class=\"frm_input_box\" style=\"width:30px;\">\n        <input type=\"text\" class=\"frm_input js_dr_msLabel js_dr_minLabel\" value=\"{timeList.mMin}\" style='text-align: center;'>\n    </span> :\n    <span class=\"frm_input_box\" style=\"width:30px;\">\n        <input type=\"text\" class=\"frm_input js_dr_msLabel js_dr_secLabel\" value=\"{timeList.mSec}\" style='text-align: center;'>\n    </span>\n</div>";
});define("tpl/biz_web/ui/dateRange.html.js",[],function(){
return'<div class="ta_date" id="div_{title_id}">\n	<span class="date_title" id="{title_id}"></span>\n	<a class="opt_sel" id="{inputTrigger}" href="#">\n		<i class="i_orderd"></i>\n	</a>\n</div>\n';
});define("tpl/media/preview/chat.html.js",[],function(){
return'<div class="wx_phone_hd">\n	微信团队</div>\n<div class="wx_phone_bd wx_phone_preview_chat_wrp">\n    {each list as item index}\n    <div class="wx_phone_preview_chat">\n        <img class="chat_user_avatar" src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_avatar_wechat.jpg">\n        <div class="chat_content">\n            <div class="chat_appmsg_msg jsPhoneViewCard" data-index="{index}">\n                <div class="chat_appmsg_title" title="{item.title}">{item.title}</div>\n                <div class="chat_appmsg_content">\n                    <img class="chat_appmsg_thumb" src="{item.img||item.avatar}">\n                    <div class="chat_appmsg_desc" title="{item.digest}">{item.digest}</div>\n                </div>\n                <span class="chat_arrow_wrp">\n                    <i class="chat_arrow arrow_out"></i>\n                    <i class="chat_arrow arrow_in"></i>\n                </span>\n            </div>\n        </div>\n    </div>\n    {/each}\n</div>\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">图文消息</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="appmsg">消息正文</li>\n        <li class="wx_view_item jsPhoneViewLink " data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="chat">发送给朋友</li>\n    </ul>\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n\n\n\n\n';
});define("tpl/media/preview/moments.html.js",[],function(){
return'<div class="wx_phone_hd">\n    朋友圈</div>\n<div class="wx_phone_bd">\n    {each list as item index}\n    <div class="wx_phone_preview_moments">\n        <img class="moments_user_avatar" src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_avatar_wechat.jpg" alt="">\n        <div class="moments_content_wrp">\n            <p class="moments_nickname">微信团队</p>\n            <div class="moments_content jsPhoneViewCard" data-index="{index}">\n                <img class="moments_appmsg_thumb" src="{item.img||item.avatar}">\n                <div class="moments_appmsg_title" title="{item.title}">{item.title}</div>\n            </div>\n        </div>\n    </div>\n    {/each}\n</div>\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">图文消息</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="appmsg">消息正文</li>\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n\n';
});define("tpl/media/preview/card.html.js",[],function(){
return'<div class="wx_phone_hd">\n    {nickName}\n</div>\n<div class="wx_phone_bd wx_phone_preview_card_wrp" > \n{if list}\n<div class="msg_card wx_phone_preview_multi_card {if (list[0].img)}has_first_cover{/if}">\n        <div class="msg_card_inner">\n            <div class="card_cover_appmsg_item jsPhoneViewCard" data-index="0">\n                {if (list[0].img)}\n                <div class="card_cover_appmsg_inner" style="background-image:url(\'{list[0].img}\');">\n                    <!--<img class="card_cover_thumb" src="">-->\n                </div>\n                {/if}\n                <strong class="card_cover_title" title="{list[0].title}">{list[0].title}</strong>\n                {if (!list[0].img && list[0].digest)}\n                <div class="msg_card_cover_desc" title="{list[0].digest}">{list[0].digest}</div>\n                {/if}\n            </div>\n            {each list as d i }\n            <div class="card_appmsg_item {if i==0}dn{/if} jsPhoneViewCard" data-index="{i}">\n                {if d.img}<img class="card_appmsg_thumb" src="{d.img}">{/if}\n                <div class="card_appmsg_content" title="{d.title}">{d.title}</div>\n            </div>\n            {/each}\n        </div>\n    </div>\n{else}\n    <div class="msg_card wx_phone_preview_card jsPhoneViewCard" data-index="0">\n        <div class="msg_card_inner">\n            <div class="msg_card_bd">\n                <h4 class="msg_card_title" title="{title}">{title}</h4>\n                <div class="msg_card_info">\n                    {date}\n                </div>\n                {if img}\n                <div class="msg_card_extra_info" style="background-image:url(\'{img}\');">\n                    <!--<img class="appmsg_thumb" src="">-->\n                </div>\n                {/if}\n                <div class="msg_card_desc" title="{digest}">{digest}</div>\n            </div>\n            <div class="msg_card_ft">\n                <i class="icon_arrow_default"></i>\n                阅读原文            </div>\n        </div>\n    </div>\n{/if}\n</div>\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="card">图文消息</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="appmsg">消息正文</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n\n\n\n\n\n';
});define("tpl/media/preview/appmsg.html.js",[],function(){
return'<div class="wx_phone_hd">\n    {data.nickName}\n</div>\n<div class="wx_phone_bd">\n    <div class="wx_phone_preview_appmsg appmsg_wap">\n        <div class="rich_media">\n            <div class="rich_media_area_primary">\n                {if data.is_share_copyright*1==1}\n                <div class="flex_context account_info">\n                    <div class="flex_hd">\n                        <span class="radius_avatar account_avatar">\n                            <img class="account_avatar" src="{data.avatar}" alt="{data.nickName}">\n                        </span>\n                    </div>\n                    <div class="flex_bd">\n                        <div class="account_nickname">\n                            <strong class="account_nickname_inner">{data.nickName}</strong>\n                        </div>\n                        <div class="account_desc">\n                            <div class="account_desc_inner">\n                                <span>{data.time}</span>\n                                分享\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                {else}\n                <h2 class="rich_media_title" title="{data.title}">{data.title}</h2>\n                <div class="rich_media_meta_list">\n                    <!-- <span class="rich_media_meta meta_original_tag dn">原创</span>\n                    <a class="rich_media_meta meta_enterprise_tag" href="javascript:;"><img src="{data.img}"></a> -->\n                    <em class="rich_media_meta rich_media_meta_text">{data.time}</em>\n                    <em class="rich_media_meta rich_media_meta_text">{data.author}</em>\n                    <span class="rich_media_meta rich_media_meta_link" title="请发送到手机查看完整效果">{data.nickName}</span>\n                </div>\n                {if (data.show_cover==1 && data.img)}\n                <div class="rich_media_thumb_wrp">\n                    <img src="{data.img}" class="rich_media_thumb" onerror="this.parentNode.removeChild(this)"/>\n                </div>\n                {/if}\n                {/if}              \n                <div class="rich_media_content">\n                    {if data.is_share_copyright*1==1}\n                    {=data.guide_words.html(true).replace(/\\r/g,"").replace(/\\n/g,"<br>").replace(/\\s/g,"&nbsp;")}\n                    {else}\n                    {=data.content}\n                    {/if}\n                </div>\n                {if data.is_share_copyright*1==1}\n                <div class="rich_media_origin_preview">\n                    <div class="original_panel" lang="en">\n                        <div class="flex_context original_account">\n                            <div class="flex_hd">\n                                <span class="radius_avatar original_account_avatar">\n                                    <img class="account_avatar" src="{data.copyright_headimg}" alt="{data.copyright_nickname}">\n                                </span>\n                            </div>\n                            <div class="flex_bd">\n                                <div class="original_account_nickname">{data.copyright_nickname}</div>\n                            </div>\n                        </div>\n                        <div class="original_panel_title">\n                            {data.title}\n                            <span class="icon_original_tag_primary">原创</span>\n                        </div>\n                        <div class="original_panel_content">\n                            {=data.content}\n                        </div>\n                        <div class="original_panel_tool">\n                            <a target="_blank" href="{data.share_copyright_url}">阅读全文</a>\n                        </div>\n                    </div>\n                </div>\n                {/if}\n                {if data.ad_info && data.ad_info.ad_id}\n                <div class="rich_media_mpda">\n                    <div class="mpda_box">\n                        <div class="mpda_desc tips_global"></div>\n                        <div class="mpda_content">\n                            <div class="mpda_wrp">\n                                <div class="mpda_area show">\n                                    <div class="mpda_placeholder">\n                                        <p class="mpda_tips">广告，也是生活的一部分</p>\n                                    </div>\n                                    <div class="mpda_inner">\n                                        <div class="mpda_hd">\n                                            <span class="mpda_main_img img_bg_cover" id="" style="background-image:url({data.ad_info.ad_img})"></span> \n                                        </div>\n                                        <div class="mpda_bd"> \n                                            <span class="mpda_logo img_bg_cover" style="background-image:url({data.ad_info.img})"></span>\n                                            <div class="mpda_desc_box" id="">\n                                                <p class="mpda_title">{data.ad_info.nick_name}</p>\n                                                <p class="mpda_details">提供的广告</p>\n                                            </div>\n                                            <a class="mpda_btn_more">\n                                                {if data.ad_info.pt == 108||data.ad_info.pt==116}\n                                                查看详情                                                {else if data.ad_info.pt == 109}\n                                                下载应用                                                {else if data.ad_info.pt == 110 || data.ad_info.pt==117}\n                                                了解公众号                                                {/if}\n                                            </a>\n                                            <a class="mpda_btn_about" href="javascript:void(0);">关于赞助广告</a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                {/if}\n                {if data.sourceurl}\n                <div class="rich_media_tool">\n                    <a class="media_tool_meta meta_primary" href="{data.sourceurl}" target="_blank">阅读原文</a>\n                </div>\n                {/if}\n            </div>\n        </div>\n    </div>\n</div>\n<!--wx_phone_bd-->\n<!--pulgin-->\n<div>\n    <ul class="wx_view_list">\n        <li class="wx_view_item jsPhoneViewLink" data-id="card">图文消息</li>\n        <li class="wx_view_item jsPhoneViewLink selected" data-id="appmsg">消息正文</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="moments">分享到朋友圈</li>\n        <li class="wx_view_item jsPhoneViewLink" data-id="chat">发送给朋友</li>\n    </ul>\n    {if length>1}\n    <ul class="wx_article_crtl">        \n        <li class="crtl_btn crtl_pre_btn {if (index-1)<0}disabled{/if} jsPhoneViewCard" data-index="{index-1}">上一篇</li>        \n        <li class="crtl_btn crtl_next_btn {if (index+1)>=length}disabled{/if} jsPhoneViewCard" data-index="{index+1}">下一篇</li>\n    </ul>\n    {/if}\n    <div class="btn_wx_phone_preview_wrp">\n        <a class="btn btn_default btn_wx_phone_preview jsPhoneViewPub">发送到手机预览</a>\n    </div>\n</div>\n\n';
});define("common/wx/phoneView.js",["tpl/media/preview/layout.html.js","widget/wx_phone_preview/wx_phone_preview.css"],function(t,e){
"use strict";
function i(t){
var e=t.html.split("<!--pulgin-->")[0],i=t.html.split("<!--pulgin-->")[1],p=template.compile(n)({
content:e,
plugin:i
});
this.$dom=$(template.compile(p)(t.data)).appendTo("body"),o(),t.todo&&"function"==typeof t.todo&&t.todo.apply(this,[t.data,t.html]);
var l=this;
this.$dom.find(".jsPhoneViewClose").click(function(){
l.remove();
});
}
function o(){
$("img").each(function(){
$(this).data("src")&&$(this).attr("src",$(this).data("src"));
});
}
{
var n=t("tpl/media/preview/layout.html.js");
t("widget/wx_phone_preview/wx_phone_preview.css");
}
return i.prototype.hide=function(){
this.$dom.hide();
},i.prototype.remove=function(){
this.$dom.remove();
},i.prototype.render=function(t,e){
var i=t.split("<!--pulgin-->")[0],o=t.split("<!--pulgin-->")[1];
this.$dom.find(".jsPhoneViewMain").html(template.compile(i)(e)),this.$dom.find(".jsPhoneViewMain").on("click","a.weapp_text_link,a.weapp_image_link",function(){
return alert("将在微信端打开小程序"),!1;
}),o&&this.$dom.find(".jsPhoneViewPlugin").html(template.compile(o)(e)).show();
},e.module=i;
});!function(n){
"use strict";
function t(n,t){
var r=(65535&n)+(65535&t),u=(n>>16)+(t>>16)+(r>>16);
return u<<16|65535&r;
}
function r(n,t){
return n<<t|n>>>32-t;
}
function u(n,u,e,o,c,f){
return t(r(t(t(u,n),t(o,f)),c),e);
}
function e(n,t,r,e,o,c,f){
return u(t&r|~t&e,n,t,o,c,f);
}
function o(n,t,r,e,o,c,f){
return u(t&e|r&~e,n,t,o,c,f);
}
function c(n,t,r,e,o,c,f){
return u(t^r^e,n,t,o,c,f);
}
function f(n,t,r,e,o,c,f){
return u(r^(t|~e),n,t,o,c,f);
}
function i(n,r){
n[r>>5]|=128<<r%32,n[(r+64>>>9<<4)+14]=r;
var u,i,h,a,g,l=1732584193,d=-271733879,v=-1732584194,C=271733878;
for(u=0;u<n.length;u+=16)i=l,h=d,a=v,g=C,l=e(l,d,v,C,n[u],7,-680876936),C=e(C,l,d,v,n[u+1],12,-389564586),
v=e(v,C,l,d,n[u+2],17,606105819),d=e(d,v,C,l,n[u+3],22,-1044525330),l=e(l,d,v,C,n[u+4],7,-176418897),
C=e(C,l,d,v,n[u+5],12,1200080426),v=e(v,C,l,d,n[u+6],17,-1473231341),d=e(d,v,C,l,n[u+7],22,-45705983),
l=e(l,d,v,C,n[u+8],7,1770035416),C=e(C,l,d,v,n[u+9],12,-1958414417),v=e(v,C,l,d,n[u+10],17,-42063),
d=e(d,v,C,l,n[u+11],22,-1990404162),l=e(l,d,v,C,n[u+12],7,1804603682),C=e(C,l,d,v,n[u+13],12,-40341101),
v=e(v,C,l,d,n[u+14],17,-1502002290),d=e(d,v,C,l,n[u+15],22,1236535329),l=o(l,d,v,C,n[u+1],5,-165796510),
C=o(C,l,d,v,n[u+6],9,-1069501632),v=o(v,C,l,d,n[u+11],14,643717713),d=o(d,v,C,l,n[u],20,-373897302),
l=o(l,d,v,C,n[u+5],5,-701558691),C=o(C,l,d,v,n[u+10],9,38016083),v=o(v,C,l,d,n[u+15],14,-660478335),
d=o(d,v,C,l,n[u+4],20,-405537848),l=o(l,d,v,C,n[u+9],5,568446438),C=o(C,l,d,v,n[u+14],9,-1019803690),
v=o(v,C,l,d,n[u+3],14,-187363961),d=o(d,v,C,l,n[u+8],20,1163531501),l=o(l,d,v,C,n[u+13],5,-1444681467),
C=o(C,l,d,v,n[u+2],9,-51403784),v=o(v,C,l,d,n[u+7],14,1735328473),d=o(d,v,C,l,n[u+12],20,-1926607734),
l=c(l,d,v,C,n[u+5],4,-378558),C=c(C,l,d,v,n[u+8],11,-2022574463),v=c(v,C,l,d,n[u+11],16,1839030562),
d=c(d,v,C,l,n[u+14],23,-35309556),l=c(l,d,v,C,n[u+1],4,-1530992060),C=c(C,l,d,v,n[u+4],11,1272893353),
v=c(v,C,l,d,n[u+7],16,-155497632),d=c(d,v,C,l,n[u+10],23,-1094730640),l=c(l,d,v,C,n[u+13],4,681279174),
C=c(C,l,d,v,n[u],11,-358537222),v=c(v,C,l,d,n[u+3],16,-722521979),d=c(d,v,C,l,n[u+6],23,76029189),
l=c(l,d,v,C,n[u+9],4,-640364487),C=c(C,l,d,v,n[u+12],11,-421815835),v=c(v,C,l,d,n[u+15],16,530742520),
d=c(d,v,C,l,n[u+2],23,-995338651),l=f(l,d,v,C,n[u],6,-198630844),C=f(C,l,d,v,n[u+7],10,1126891415),
v=f(v,C,l,d,n[u+14],15,-1416354905),d=f(d,v,C,l,n[u+5],21,-57434055),l=f(l,d,v,C,n[u+12],6,1700485571),
C=f(C,l,d,v,n[u+3],10,-1894986606),v=f(v,C,l,d,n[u+10],15,-1051523),d=f(d,v,C,l,n[u+1],21,-2054922799),
l=f(l,d,v,C,n[u+8],6,1873313359),C=f(C,l,d,v,n[u+15],10,-30611744),v=f(v,C,l,d,n[u+6],15,-1560198380),
d=f(d,v,C,l,n[u+13],21,1309151649),l=f(l,d,v,C,n[u+4],6,-145523070),C=f(C,l,d,v,n[u+11],10,-1120210379),
v=f(v,C,l,d,n[u+2],15,718787259),d=f(d,v,C,l,n[u+9],21,-343485551),l=t(l,i),d=t(d,h),
v=t(v,a),C=t(C,g);
return[l,d,v,C];
}
function h(n){
var t,r="";
for(t=0;t<32*n.length;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);
return r;
}
function a(n){
var t,r=[];
for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;
for(t=0;t<8*n.length;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;
return r;
}
function g(n){
return h(i(a(n),8*n.length));
}
function l(n,t){
var r,u,e=a(n),o=[],c=[];
for(o[15]=c[15]=void 0,e.length>16&&(e=i(e,8*n.length)),r=0;16>r;r+=1)o[r]=909522486^e[r],
c[r]=1549556828^e[r];
return u=i(o.concat(a(t)),512+8*t.length),h(i(c.concat(u),640));
}
function d(n){
var t,r,u="0123456789abcdef",e="";
for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+=u.charAt(t>>>4&15)+u.charAt(15&t);
return e;
}
function v(n){
return unescape(encodeURIComponent(n));
}
function C(n){
return g(v(n));
}
function s(n){
return d(C(n));
}
function A(n,t){
return l(v(n),v(t));
}
function m(n,t){
return d(A(n,t));
}
n.md5=function(n,t,r){
return t?r?A(t,n):m(t,n):r?C(n):s(n);
};
}("function"==typeof jQuery?jQuery:this);define("resp_types/file_cnt.rt.js",[],function(){
"use strict";
return{
file_cnt_R:{
total:"number",
img_cnt:"number",
voice_cnt:"number",
video_cnt:"number",
app_msg_cnt:"number",
commondity_msg_cnt:"number",
video_msg_cnt:"number",
short_video_cnt:"number",
app_msg_sent_cnt:"number"
}
};
});define("resp_types/base_resp.rt.js",[],function(){
"use strict";
return{
base_resp_R:{
ret_R:"number",
err_msg:"string"
}
};
});define("tpl/media/sharecopyright_item.html.js",[],function(){
return'{each data as item index}\n<label class="share_article_item frm_radio_label">\n    <i class="icon_radio"></i>\n    <span class="lbl_content">\n        <div class="flex_context original_account">\n            <div class="flex_hd">\n                <span class="radius_avatar original_account_avatar">\n                    <img class="account_avatar" src="{item.head_img_url}" alt="{item.nickname}">\n                </span>\n            </div>\n            <div class="flex_bd">\n                <div class="original_account_nickname">{item.nickname}</div>\n            </div>\n        </div>\n        <div class="original_panel_title">\n            {item.title}\n        </div>\n        <div class="original_panel_tool">\n            <a target="_blank" href="{item.url}">阅读全文</a>\n        </div>\n    </span>\n    <input type="radio" name="ori_article_item" data-index="{index}" class="frm_radio">\n</label>\n{/each}\n';
});