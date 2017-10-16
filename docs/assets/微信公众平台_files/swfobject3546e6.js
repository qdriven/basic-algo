define("tpl/cardticket/select_sub_merchant_table.html.js",[],function(){
return'{if loading}<i class="icon_loading_small white"></i>\n{else}\n<div class="sub_title_bar">\n    <span class="frm_input_box search append l">\n        <a href="javascript:void(0);" class="js_search_btn frm_input_append">\n            <i class="icon16_common search_gray">\n                搜索\n            </i>\n            &nbsp;\n        </a>\n        <input type="text" placeholder="请输入商户名" value="{param.keyword}" class="frm_input js_search_input">\n    </span>\n    <div class="tr">\n        <a data-actionid="2014" class="btn btn_primary r" href="{wx_url \'/merchant/cardhelpmakesend?action=addpage\'}" target="_blank"><i class="icon14_common add_white"></i>添加子商户</a>\n    </div>\n</div>\n<div class="in_bd">\n	{if !data.length}\n	<div class="account_list empty js_empty">\n		{if param.keyword}\n		你输入的名称未搜索到，请确认否输入正确或未添加该子商户。		{else}\n		您还没有添加子商户，请点击右上角按钮添加子商户		{/if}\n		<!-- 抱歉，未找到符合公众号 -->\n	</div>\n	{else}\n	<ul class="account_list js_merchant_item_p">\n		{each data as sub i}\n		<li class="list_item js_merchant_item{if check_remain_quota && (sub.remain_quota==0||sub.can_not_use_sns_card)} js_merchant_disabled disabled{/if}" data-id="{sub.Id}">\n	        <div class="inner_list_item">\n	            <img class="pic" src="{http2https sub.Logo}" width="100px">\n				<div class="item_txt">\n					<p class="nick_name">{sub.BrandName}</p>\n                    {if check_remain_quota}{if max_card===0}<p>账号违规，暂停制券</p>{else}{if sub.remain_quota==0}<p>已超出制券量</p>{else if sub.can_not_use_sns_card}<p>该商户类目不可创建朋友的券</p>{/if}{/if}{/if}\n				</div>\n			</div>\n			<a href="javascript:;" class="account_selected"></a>\n			<div class="list_mask"></div>\n	    </li>\n	    {/each}\n	</ul>\n	<div class="js_pager"></div>\n	{/if}\n	<!-- <div class="loading_box empty dn" id="js_loading">\n		<img src="<%@GetResFullName($images_comm_path$icon/common/icon32_loading_light.gif)%>">\n		<p>加载中，请稍候</p>\n	</div> -->\n</div>\n{/if}\n';
});define("tpl/media/cardmsg.html.js",[],function(){
return'<div class="msg_card{if _className} {_className}{/if}">\n	<div class="card_content" style="background-color: {color};">\n		<img class="logo js_logourl" data-src="{logo_url}" />\n		<div class="card_info">\n			<h4 class="card_title">{title}</h4>\n		</div>\n		<div class="deco"></div>\n	</div>\n	<p class="store">{brand_name}</p>\n</div>\n';
});define("tpl/cardticket/card_quantity.html.js",[],function(){
return'<div class="pop_store">\n	{if !data.is_sns_card}\n	{if data.quantity==0}\n	<p class="frm_msg fail" style="display:block;">库存为0，请先增加库存</p>\n	{/if}\n	<!-- 普通卡券增减库存 -->\n	<div class="pop_card_normal">\n		<!--增减库存-->\n		{if setquantity}\n		<!-- 这一部分貌似要废弃掉 -->\n		<div class="frm_control_group">\n			<div class="frm_controls">\n				<label class="frm_radio_label selected">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">增加</span>\n					<input type="radio" name="isadd" checked value="1" class="frm_radio js_quantity_type">\n				</label>\n				<label class="frm_radio_label">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">减少</span>\n					<input type="radio" name="isadd" value="0" class="frm_radio js_quantity_type">\n				</label>\n			</div>\n		</div>\n		{/if}\n		<div class="frm_control_group">                        \n			<div class="frm_controls">\n				<div class="frm_controls_hint group">\n					<span class="frm_input_box"><input type="text" class="frm_input js_value"></span>\n					<span class="frm_hint">份</span>\n				</div>\n				<p class="frm_tips fail">库存不能少于1</p>\n			</div>\n		</div>\n		<!--增减库存 end-->\n	</div>\n	{else}\n	<!-- 朋友券增加库存 -->\n	<!-- message fail-->\n	<div class="js_state_5 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg info"></i>\n            </span>\n            <div class="msg_content">\n                <h4> 当前未开通券点账户，暂时无法添加库存 </h4>\n            </div>\n        </div>\n        <div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_primary js_go_activate">去开通</a>\n        </div>\n    </div>\n	<i class="loading js_satate_0 js_state_quantity" style="display:none"></i>\n	<div class="js_state_1 js_state_quantity pop_card_quantity" style="display:none">\n		{if data.quantity==0}\n		<p class="frm_msg fail" style="display:block;">库存为0，请先增加库存</p>\n		{/if}\n		<div class="pop_hd">\n			<div class="frm_control_group frm_card_extend">                        \n				<label for="" class="frm_label">\n					<span class="title">库存单价</span>\n				</label>\n				<div class="frm_preview"><span class="js_price">0.2</span>券点/张\n				</div>\n			</div>\n			<div class="frm_control_group frm_card_extend">                        \n				<label for="" class="frm_label">\n					<span class="title">增加库存</span>\n				</label>\n				<div class="">\n					<span class="frm_input_box"><input type="text" class="frm_input js_value"></span>\n					<span class="frm_hint">张</span>\n				</div>\n				<!-- <p class="frm_tips fail">库存不能少于1</p> -->\n			</div>\n		</div>\n		<div class="frm_control_group frm_card_extend js_total_price_container">                        \n			<label for="" class="frm_label">\n				所需券点			</label>\n			<div class="frm_preview">\n				<span class="js_total_price card_fee_quantity">0</span>券点			</div>\n		</div>\n		<p class="js_error frm_msg fail"></p>\n		<div class="popover_bar">\n			<a href="javascript:;" class="btn btn_primary js_confirm">确认添加</a>\n			<a href="javascript:;" class="btn btn_default js_cancel">取消</a>\n        </div>\n	</div>\n	<!-- 朋友券 确认预览 -->\n	<div class="js_state_2 js_state_quantity pop_card_quantity" style="display:none">\n		<div class="pop_hd">\n			<div class="frm_control_group frm_card_extend">                        \n				<label for="" class="frm_label">\n					卡券名称				</label>\n                <div class="frm_preview js_cardname">{data.title}\n				</div>\n			</div>\n			<div class="frm_control_group frm_card_extend">                        \n				<label for="" class="frm_label">\n					库存单价				</label>\n                <div class="frm_preview"><span class="js_price"></span>券点/张\n				</div>\n			</div>\n			<div class="frm_control_group frm_card_extend">                        \n				<label for="" class="frm_label">\n					增加库存\n				</label>\n                <div class="frm_preview"><span class="js_quantity"></span>张				</div>\n			</div>\n		</div>\n		<div class="frm_control_group frm_card_extend">                        \n			<label for="" class="frm_label">\n				支出券点\n			</label>\n			<div class="frm_preview">\n				免费券点<span class="js_freecoin"></span> ，付费券点<span class="js_paycoin"></span>\n			</div>\n		</div>\n		<div class="popover_bar">\n			<a href="javascript:;" class="btn btn_primary js_confirm">确定</a>\n			<a href="javascript:;" class="btn btn_default js_cancel">取消</a>\n        </div>\n	</div>\n	<!-- message success-->\n	<div class="js_state_3 js_state_quantity pop_card_quantity page_msg small msg_success default" style="display:none">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg success"></i>\n                <!-- loging gif也可以放到这里 -->\n            </span>\n            <div class="msg_content">\n                <h4> 已添加成功 </h4>\n            </div>\n        </div>\n    </div>\n	<!-- message success-->\n	<div class="js_state_9 js_state_quantity pop_card_quantity page_msg small msg_success default" style="display:none">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg success"></i>\n                <!-- loging gif也可以放到这里 -->\n            </span>\n            <div class="msg_content">\n                <h4> 已购买成功 </h4>\n                <p class="tl">请通知适用商户登录微信支付平台审核，通过库存生效。若不通过，将退回券点。</p>\n            </div>\n        </div>\n        <div class="plant_msg">\n        	总库存：        	<span class="frm_preview js_cardname"><span class="js_total_price mini_tips weak_text js_current_quantity">{data.quantity}</span>\n			</span>\n			<div class="mini_tips weak_text">(<span class=\'js_quantity\'></span>库存审核通过后生效)</div>\n        </div>\n        <!--\n        <div class="frm_control_group frm_card_extend">                        \n			<label for="" class="frm_label">\n				总库存：			</label>\n            <div class="frm_preview js_cardname"><span class="js_total_price card_fee_quantity mini_tips weak_text js_current_quantity">{data.quantity}</span><span class="mini_tips weak_text">(<span class=\'js_quantity\'></span>库存审核通过后生效)</span>\n			</div>\n			<p class="frm_msg" style="display:block">少于100时，将通过公众号通知核销员 <a href="">修改</a></p>\n		</div>-->\n        <div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_primary js_close_quantity">完成</a>\n        </div>\n    </div>\n	<!-- message fail-->\n	<div class="js_state_4 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg info"></i>\n            </span>\n            <div class="msg_content">\n                <h4> 库存添加中，可前往流水记录查看本次添加进度 </h4>\n            </div>\n        </div>\n        <div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_primary js_close_quantity">我知道了</a>\n        </div>\n    </div>\n    <!-- 子商户库存提示-->\n	<div class="js_state_8 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg info"></i>\n            </span>\n            <div class="msg_content js_quantity_exceed_msg">\n                <h4> 子商户每张券累计只可发放10000份 </h4>\n            </div>\n        </div>\n        <div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_primary js_close_quantity">我知道了</a>\n        </div>\n    </div>\n	<!-- message fail-->\n	<div class="js_state_7 js_state_quantity pop_card_quantity page_msg small default" style="display:none">\n        <div class="inner group">\n            <span class="msg_icon_wrp">\n                <i class="icon_msg warn"></i>\n            </span>\n            <div class="msg_content">\n                <h4> 库存添加失败，请稍后再试 </h4>\n                <p> 所扣币值将退回你的账户，请耐心等待 </p>\n            </div>\n        </div>\n        <div class="popover_bar tc">\n			<a href="javascript:;" class="btn btn_primary js_close_quantity">我知道了</a>\n        </div>\n    </div>\n    {/if}\n</div>\n';
});define("tpl/cardticket/choose_card_type.html.js",[],function(){
return'{if is_sns_card}<div class="proc_put_tick">\n	<div class="choose_card_friend">\n	    <div class="frm_control_group">\n	        <label class="frm_radio_label selected">\n	            <i class="icon_radio"></i>\n	            <span class="lbl_content">创建朋友共享的优惠券</span> <i class="icon_common new" style=""></i>\n	            <input type="radio" value="1" checked class="frm_radio js_is_friend">\n	        </label>\n	        <div class="frm_tips js_is_friend_tips js_is_friend_support_tips">用户领取一张优惠券后，他的好友无需领取即可在优惠券列表看到和使用该张优惠券。这将为你的优惠券带来更多的曝光和使用。</div>\n	        <div style="display:none;" class="frm_tips js_is_friend_tips js_is_friend_view_mode2_tips">所选子商户类目不支持制作朋友的券，<a target="_blank" href="/cgi-bin/readtemplate?t=cardticket/faq_tmpl&type=info&lang=zh_CN#0dot2">查看类目要求</a></div>\n	        <div style="display:none;" class="frm_tips js_is_friend_tips js_is_friend_view_mode1_tips">当前商户类目不支持制作朋友的券，<a target="_blank" href="/cgi-bin/readtemplate?t=cardticket/faq_tmpl&type=info&lang=zh_CN#0dot2">查看类目要求</a></div>\n	    </div>\n	</div>\n    <div class="choose_card_type js_is_friend_type js_is_friend_type_1">\n	    <div class="frm_control_group radio_row frm_tab">\n			<div class="frm_controls frm_vertical_lh">\n				<label class="frm_radio_label selected">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">无使用门槛代金券</span>\n					<input type="radio" value="4" data-not_has_condition="1" class="frm_radio js_card_type" checked="checked">\n	                <p class="frm_tips">可抵扣现金，无使用门槛</p>\n				</label>\n				<label class="frm_radio_label selected">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">满减代金券/指定品类代金券</span>\n					<input type="radio" value="4" class="frm_radio js_card_type">\n	                <p class="frm_tips">可抵扣现金，需消费指定金额或品类</p>\n				</label>\n				<label class="frm_radio_label">\n					<i class="icon_radio"></i>\n					<span class="lbl_content">兑换券</span>\n					<input type="radio" value="3" class="frm_radio js_card_type">\n					<p class="frm_tips">可兑换商品或服务</p>\n				</label>\n			</div>\n		</div>\n		<div class="frm_tab_content">\n			<div class="tab_items">\n				<div class="frm_tab_item js_tabed_item_4">\n					<div class="tab_inner">\n						<ul class="prom_list">\n							<li>消费者体验好</li>\n							<li>使用转化率高</li>\n							<li>引流效果较好</li>\n							{if view_mode==1}\n							<li>支持微信买单</li>\n							{/if}\n						</ul>\n						<p>查看案例：<a href="http://mp.weixin.qq.com/s?__biz=MjM5NDQ5Njk3OA==&mid=407898139&idx=1&sn=f3ea0f070d756d8d2f61d496aeb35286#rd" target="_blank">广州某百货公司无门槛代金券活动 ></a></p>\n					</div>\n				</div>\n				<div class="frm_tab_item js_tabed_item_4">\n					<div class="tab_inner">\n						<ul class="prom_list">\n							<li>成本可控</li>\n							<li>提升客单价</li>\n							<li>多种优惠使用条件组合</li>\n							{if view_mode==1}\n							<li>支持微信买单</li>\n							{/if}\n						</ul>\n					</div>\n				</div>\n				<div class="frm_tab_item js_tabed_item_3">\n					<div class="tab_inner">\n						<ul class="prom_list">\n							<li>成本可控</li>\n							<li>推广新品效果佳</li>\n							<li>引流到店效果好</li>\n							<li>方便组合促销</li>\n						</ul>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n	{if show_all_card}\n	<div class="choose_card_normal">\n	    <div class="frm_control_group frm_card_normal">\n	        <label class="frm_radio_label">\n	            <i class="icon_radio"></i>\n	            <span class="lbl_content">我要创建普通优惠券</span>\n	            <input type="radio" value="2" class="frm_radio js_is_friend">\n	        </label>\n	        <div class="frm_tips">传统优惠券的电子版，可在微信中收纳、传播和使用。只可领取到我的卡券自己使用</div>\n	        <div class="frm_control_group radio_row js_is_friend_type js_is_friend_type_2" style="display:none">\n				<div class="frm_controls frm_vertical_lh">\n					{if flag==0}\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">折扣券</span>\n						<input type="radio" value="2" class="frm_radio js_card_type">\n		                <p class="frm_tips">可为用户提供消费折扣{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n					</label>\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">代金券</span>\n						<input type="radio" value="4" class="frm_radio js_card_type">\n		                <p class="frm_tips">可为用户提供抵扣现金服务。可设置成为“满*元，减*元”{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n					</label>\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">兑换券</span>\n						<input type="radio" value="3" class="frm_radio js_card_type">\n						<p class="frm_tips">可为用户提供消费送赠品服务</p>\n					</label>\n					{/if}\n					<label class="frm_radio_label selected">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">团购券</span>\n						<input type="radio" value="1" class="frm_radio js_card_type">\n						<p class="frm_tips">可为用户提供团购套餐服务</p>\n					</label>\n					<label class="frm_radio_label">\n						<i class="icon_radio"></i>\n						<span class="lbl_content">优惠券</span>\n						<input type="radio" value="0" class="frm_radio js_card_type">\n						<p class="frm_tips">{if flag==0}即“通用券”，建议当以上四种无法满足需求时采用{else}即“通用券”，建议当团购券无法满足需求时适用{/if}</p>\n					</label>\n				</div>\n			</div>\n	    </div>\n    </div>\n{/if}    \n</div>\n{else}<div class="proc_put_tick js_is_friend_type_2">\n<div class="choose_card_normal">\n	<div class="frm_control_group radio_row frm_card_normal">\n		<label for="" class="frm_label">选择你要创建的卡券类型</label>\n		<div class="frm_controls frm_vertical_lh">\n		{if flag==0}\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">折扣券</span>\n				<input type="radio" value="2" class="frm_radio js_card_type">\n                <p class="frm_tips">可为用户提供消费折扣{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">代金券</span>\n				<input type="radio" value="4" class="frm_radio js_card_type">\n                <p class="frm_tips">可为用户提供抵扣现金服务。可设置成为“满*元，减*元”{if is_paycard()}，支持优惠抵扣快速买单{/if}</p>\n			</label>\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">兑换券</span>\n				<input type="radio" value="3" class="frm_radio js_card_type">\n				<p class="frm_tips">可为用户提供消费送赠品服务</p>\n			</label>\n		{/if}\n			<label class="frm_radio_label selected">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">团购券</span>\n				<input type="radio" value="1" class="frm_radio js_card_type">\n				<p class="frm_tips">可为用户提供团购套餐服务</p>\n			</label>\n		\n			<label class="frm_radio_label">\n				<i class="icon_radio"></i>\n				<span class="lbl_content">优惠券</span>\n				<input type="radio" value="0" class="frm_radio js_card_type">\n				<p class="frm_tips">{if flag==0}即“通用券”，建议当以上四种无法满足需求时采用{else}即“通用券”，建议当团购券无法满足需求时适用{/if}</p>\n			</label>\n		</div>\n	</div>\n</div>\n</div>\n{/if}';
});define("cardticket/select_sub_merchant_table.js",["tpl/cardticket/select_sub_merchant_table.html.js","common/wx/popup.js","common/wx/Cgi.js","common/wx/pagebar.js","common/wx/Tips.js","biz_web/ui/checkbox.js","page/cardticket/dialog_choose_sub_store.css","cardticket/common_template_helper.js"],function(t){
"use strict";
function e(t){
var e,a=t.opt;
e=t.$container,e.html(c({
loading:!0,
param:a.param
})),a.resetPosition&&a.resetPosition();
}
function a(t,a){
var o=a.opt,r=$.extend(!0,{
action:"list",
offset:o.pageInfo.begin,
limit:o.pageInfo.count
},o.param);
f=!0,e(a),l.get({
url:o.url||"/merchant/cardhelpmakesend",
data:r,
complete:function(){
f=!1;
}
},function(t){
if(0==t.base_resp.ret||-1==t.base_resp.ret){
var e=$.parseJSON(t.bind_list),r=$.parseJSON(t.sub_merchant_remain_quota);
if(o.data=e.List,o.remain_data=r.list,o.is_sns_card)for(var i=0;i<e.List.length;i++){
var s=e.List[i];
s.can_not_use_sns_card=!p.can_category_use_sns_card(s.PrimaryCategoryId,s.SecondaryCategoryId);
}
o.pageInfo.total_count=t.total_count||0,n(o.pageInfo,a);
}else l.show(t);
});
}
function n(t,e){
for(var a,n=e.opt,s=0;s<n.data.length;s++)$.extend(n.data[s],n.remain_data[s]);
return a=e.$container,a.html(c(n)),n.resetPosition&&n.resetPosition(),n.data.length?(e.pagebar=null,
i(n.pageInfo,e),r(e,n.data,a),o(e,a),void(n.getDataComplete&&n.getDataComplete(n.data))):(r(e,n.data,a),
void o(e,a));
}
function o(t,e){
function n(e){
o.param.keyword=e,a(o.pageInfo,t);
}
var o=t.opt,r=$(".js_search_input",e).on("keyup",function(t){
var e=$.trim($(this).val());
wx.isHotkey(t,"enter")&&n(e);
});
$(".js_search_btn",e).click(function(){
var t=$.trim(r.val());
n(t);
});
}
function r(t){
var e=t.opt;
$(".js_merchant_item").click(function(){
var t=$(this).hasClass("js_merchant_disabled");
t||($(".js_merchant_item").removeClass("selected"),$(this).addClass("selected"));
}),e.resetPosition&&e.resetPosition();
}
function i(t,e){
var n=t.total_count,o=e.$container;
if(t.count&&n>t.count){
var r=t.begin/t.count;
e.pagebar=new u({
container:$(".js_pager",o),
first:!1,
last:!1,
midRange:5,
initShowPage:r+1,
perPage:t.count,
totalItemsNum:n,
callback:function(n){
if(f)return!1;
var o=n.currentPage;
return o!=r+1&&(t.begin=(o-1)*t.count,a(t,e)),!0;
}
});
}
}
function s(t,e){
for(var a=0;a<t.length;a++)if(t[a].Id==e)return t[a];
return null;
}
{
var c=t("tpl/cardticket/select_sub_merchant_table.html.js"),l=(t("common/wx/popup.js"),
t("common/wx/Cgi.js")),u=t("common/wx/pagebar.js"),m=t("common/wx/Tips.js");
t("biz_web/ui/checkbox.js");
}
t("page/cardticket/dialog_choose_sub_store.css");
var p=t("cardticket/common_template_helper.js");
c=template.compile(c);
var _={
pageInfo:{
begin:0,
count:12,
total_count:0
},
param:{
status_list:1,
keyword:""
},
url:null,
data:null,
is_sns_card:!1,
selectComplete:$.noop,
onHide:$.noop
},d=function(t){
this.opt=$.extend(!0,{},_,t),this.init();
},f=!1;
return d.prototype={
init:function(){
var t=this.opt,e=this;
e.$container=$(t.container),t.data?n(t.pageInfo,e):a(t.pageInfo,e);
},
get:function(){
return this.$container;
},
selectedValue:function(){
var t=this.opt;
if(!t.data||!t.data.length)return!1;
var e=this.get(),a=e.find(".js_merchant_item.selected");
if(!a.length)return m.err("请选择子商户"),!1;
var n=a.attr("data-id"),o=s(t.data,n);
return o;
}
},d;
});define("cardticket/add/msg_operate_type_html.js",["tpl/media/cardmsg.html.js"],function(a){
"use strict";
var s={
1:'{if msg_operation.appmsg_title}<div class="appmsg single">                <div class="appmsg_content">                    <div class="appmsg_info">                        <em class="appmsg_date">{msg_operation.appmsg_update_time}</em>                    </div>                    <div class="appmsg_item">                        <h4 class="appmsg_title">                            <a href="{msg_operation.url}" target="_blank">{msg_operation.appmsg_title}</a>                        </h4>                        <div class="appmsg_thumb_wrp" style="background-image:url(\'{msg_operation.appmsg_cover}\')"></div>                        <p class="appmsg_desc">{msg_operation.appmsg_digest}</p>                    </div>                    {if msg_operation.appmsg_type == 10}<a href="" class="edit_mask preview_mask js_preview" data-msgid="{msg_operation.appmsg_appmsgid}" data-idx="{msg_operation.appmsg_itemidx-1}">                        <div class="edit_mask_content">                            <p class="">                                预览文章                            </p>                        </div>                        <span class="vm_box"></span>                    </a>{/if}                </div>             </div>             {else}            <a href="{msg_operation.url}" target="_blank">{msg_operation.text}</a>             {/if}',
2:'<a target="_blank" href="{msg_operation.url}">{msg_operation.url}</a>',
5:a("tpl/media/cardmsg.html.js"),
4:'<a target="_blank" href="{msg_operation.url}">{msg_operation.url}</a>',
0:""
};
return s;
});define("common/wx/tooltipsManager.js", [ "common/wx/tooltips.js" ], function(e, t, n) {
try {
var r = +(new Date);
"use strict";
var i = e("common/wx/tooltips.js"), s = {
tooltips: [],
init: function(e, t) {
var n = this;
$(e).each(function() {
t.container = this, n.add(new i(t));
});
},
add: function(e) {
this.tooltips.push(e);
},
hideAll: function() {
for (var e = 0; e < this.tooltips.length; e++) this.tooltips[e].hide();
},
removeItem: function(e) {
for (var t = 0; t < this.tooltips.length; t++) if (this.tooltips[t] === e) return this.tooltips.splice(t, 1), e.$dom.remove(), !0;
return !1;
},
removeIndex: function(e) {
if (e >= this.tooltips.length || e < 0) return;
var t = this.tooltips[e];
this.tooltips.splice(e, 1), t.$dom.remove();
},
current: function() {},
hide: function() {},
removeAll: function() {
for (var e = 0; e < this.tooltips.length; e++) this.tooltips[e].$dom.remove();
this.tooltips = [];
}
};
return s;
} catch (o) {
wx.jslog({
src: "common/wx/tooltipsManager.js"
}, o);
}
});define("tpl/media/preview/layout.html.js",[],function(){
return'<div class="wx_phone_preview_wrp jsPhoneView">\n    <div class="wx_phone_preview">\n        <span class="btn btn_default btn_phone_preview_closed jsPhoneViewClose">关闭</span>\n        <div class="wx_phone jsPhoneViewMain">\n            {=content} \n        </div>\n        <!--jsPhoneViewMain-->\n        {if plugin}<div class="wx_view_container jsPhoneViewPlugin">{=plugin}</div>\n        {else}<div class="wx_view_container jsPhoneViewPlugin dn">{=plugin}</div>\n        {/if}\n    </div>\n    <div class="mask"></div>\n</div>\n';
});define("tpl/media/videomsg.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="richvideo Js_videomsg">\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">{title}</h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <!--#0001#-->\n            <em class="res">{from}</em>\n            <!--%0001%-->\n        </div>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n            {if for_network}\n            <div class="wxNetworkVideo video_shot" data-contenturl="{content_url}">\n            {else}\n            <div class="{if !for_transfer}wxVideoScreenshot {/if}video_shot">\n            {/if}\n                <!--#0002#-->\n                {if img_url}\n                    <img src="{img_url}"/>\n                {else}\n                    <img src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/>\n                {/if}\n                <!--%0002%-->\n                <!-- <i class="icon_video"></i> -->\n                <!-- <span class="video_duration"><em>{play_length}"</em></span> -->\n                {if for_transfer}\n                <div class="loading_tips" {if hide_transfer}style="display:none"{/if}>\n                    <i class="icon32_loading dark"></i>\n                    <p>转码中</p>\n                </div>\n                {/if}\n            </div>\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line">\n            {if for_network}\n            <li class="richvideo_opr_item grid_item size1of2">\n                <a class="js_edit js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n                <a class="js_del js_tooltip" data-id="{id}" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else}\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a class="js_edit js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a {if for_transfer}href="javascript:;" class="js_tooltip js_download"{else}href="{video_download_url}" class="js_tooltip"{/if} data-tooltip="下载">\n                    <i class="icon18_common download_gray">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3 no_extra">\n                <a class="js_del js_tooltip" data-id="{app_id}" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n    {if for_notitle}\n    <div class="richvideo_mask"></div>\n    <div class="richvideo_tips">\n        <i class="icon_richvideo_error"></i>\n        <p>该素材没有标题，<a href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}">马上编辑</a></p>\n    </div>\n    {/if}\n</div>';
});define("tpl/media/wxvideo.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="richvideo smallvideo with_msg_box Js_videomsg">\n	<div class="richvideo_content" style="z-index: 0">\n		<h4 class="title">{name}</h4>\n        <div class="video_wrp Js_videoContent">\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayContent video_player">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin"  \n                    preload="auto" controls="controls" data-src="{video_url}"></video>\n            </div>\n			<div class="wxVideoScreenshot video_shot">\n                {if video_thumb_cdn_url}\n                <img src="{video_thumb_cdn_url}">\n                {else}\n                <!--#00001#-->\n				<img src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source=file&fileId={file_id}">\n                <!--%00001%-->\n                {/if}\n				<div class="video_mask">\n					<span class="ic_play"></span>\n				</div>\n			</div>\n        </div>\n	</div>\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line">\n            <li class="richvideo_opr_item grid_item size1of2">\n                <a class="js_popedit js_tooltip" data-id="{id}" data-name="{name}" href="javascript:void(0);" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n                <a class="js_del js_tooltip" data-id="{id}" data-type="sv" href="javascript:void(0);" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n        </ul>\n    </div>\n    {/if}\n    {if for_selection}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n<div class="richvideo_msg_box">\n    <p class="mini_tips warn" style="display: none;">该视频由于版权问题无法在微信中播放</p>\n</div>';
});define("tpl/media/simple_videomsg.html.js",[],function(){
return'<!--群发功能-已发送页面视频模版-->\n<div class="appmsgSendedItem simple_videomsg" data-id="{id}" data-src="{video_url}">\n    {if for_network}\n    <a href="{content_url}" class="title_wrp" data-contenturl="{content_url}" target="_blank">\n    {else}\n    <a href="javascript:;" class="title_wrp js_video">\n    {/if}\n        <!-- <img class="icon icon_lh" src="/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}"/> -->\n        <span class="icon icon_lh cover" style="background-image:url("/cgi-bin/getimgdata?token={token}&msgid={app_id}&mode=large&source=file&fileId={file_id}");"></span>\n        <span class="title">[视频]{title}</span>\n    </a>\n    <p class="desc">{if for_transfer}{if !hide_transfer}转码中{/if}{/if} {digest}</p>\n</div>\n';
});define("tpl/media/video.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="mediaBox videoBox{if type == 62} smallvideo_box{/if}">\n	<div class="mediaContent">\n		<div class="wxVideoPlayContent">\n            <div class="wxVideoBoxAction{id}">\n                <a id="wxVideoBoxFold{id}" class="video_switch"><i class="icon14_common switch_gray"></i>收起</a>\n			</div>\n            <div id="wxVideoPlayer{id}" class="wxVideoPlayer">\n                <video id="wxVideo{id}" class="video-js vjs-default-skin" width="260" height="195" preload="auto"  loop controls="controls" src="{src}" poster="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}"></video>\n            </div>\n		</div>\n        <div class="wxVideoScreenshot" data-vid="{id}" data-fid="{fileid}" data-source="{source}">\n            {if video_thumb_url}\n            <img class="wxImg" src="{video_thumb_url}">\n            {else}\n            <img class="wxImg" src="/cgi-bin/getimgdata?token={token}&msgid={id}&mode=small&source={source}&fileId={file_id}" alt="" title=\'点击播放视频\' />\n            {/if}\n			<span class="iconVideo" title=\'点击播放视频\'></span>\n            <div class="videoDuration"><em>{play_length}"</em></div>\n		</div>\n    </div>\n</div>\n';
});define("biz_web/lib/swfobject.js",[],function(){
var e=function(){
function t(){
if(!G){
try{
var e=V.getElementsByTagName("body")[0].appendChild(m("span"));
e.parentNode.removeChild(e);
}catch(t){
return;
}
G=!0;
for(var n=D.length,a=0;n>a;a++)D[a]();
}
}
function n(e){
G?e():D[D.length]=e;
}
function a(e){
if(typeof M.addEventListener!=k)M.addEventListener("load",e,!1);else if(typeof V.addEventListener!=k)V.addEventListener("load",e,!1);else if(typeof M.attachEvent!=k)g(M,"onload",e);else if("function"==typeof M.onload){
var t=M.onload;
M.onload=function(){
t(),e();
};
}else M.onload=e;
}
function i(){
R?r():o();
}
function r(){
var e=V.getElementsByTagName("body")[0],t=m(B);
t.setAttribute("type",F);
var n=e.appendChild(t);
if(n){
var a=0;
!function(){
if(typeof n.GetVariable!=k){
var i=n.GetVariable("$version");
i&&(i=i.split(" ")[1].split(","),X.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)]);
}else if(10>a)return a++,void setTimeout(arguments.callee,10);
e.removeChild(t),n=null,o();
}();
}else o();
}
function o(){
var e=W.length;
if(e>0)for(var t=0;e>t;t++){
var n=W[t].id,a=W[t].callbackFn,i={
success:!1,
id:n
};
if(X.pv[0]>0){
var r=h(n);
if(r)if(!w(W[t].swfVersion)||X.wk&&X.wk<312)if(W[t].expressInstall&&s()){
var o={};
o.data=W[t].expressInstall,o.width=r.getAttribute("width")||"0",o.height=r.getAttribute("height")||"0",
r.getAttribute("class")&&(o.styleclass=r.getAttribute("class")),r.getAttribute("align")&&(o.align=r.getAttribute("align"));
for(var f={},u=r.getElementsByTagName("param"),p=u.length,v=0;p>v;v++)"movie"!=u[v].getAttribute("name").toLowerCase()&&(f[u[v].getAttribute("name")]=u[v].getAttribute("value"));
c(o,f,n,a);
}else d(r),a&&a(i);else C(n,!0),a&&(i.success=!0,i.ref=l(n),a(i));
}else if(C(n,!0),a){
var y=l(n);
y&&typeof y.SetVariable!=k&&(i.success=!0,i.ref=y),a(i);
}
}
}
function l(e){
var t=null,n=h(e);
if(n&&"OBJECT"==n.nodeName)if(typeof n.SetVariable!=k)t=n;else{
var a=n.getElementsByTagName(B)[0];
a&&(t=a);
}
return t;
}
function s(){
return!J&&w("6.0.65")&&(X.win||X.mac)&&!(X.wk&&X.wk<312);
}
function c(e,t,n,a){
J=!0,N=a||null,T={
success:!1,
id:n
};
var i=h(n);
if(i){
"OBJECT"==i.nodeName?(S=f(i),A=null):(S=i,A=n),e.id=$,(typeof e.width==k||!/%$/.test(e.width)&&parseInt(e.width,10)<310)&&(e.width="310"),
(typeof e.height==k||!/%$/.test(e.height)&&parseInt(e.height,10)<137)&&(e.height="137"),
V.title=V.title.slice(0,47)+" - Flash Player Installation";
var r=X.ie&&X.win?"ActiveX":"PlugIn",o="MMredirectURL="+M.location.toString().replace(/&/g,"%26")+"&MMplayerType="+r+"&MMdoctitle="+V.title;
if(typeof t.flashvars!=k?t.flashvars+="&"+o:t.flashvars=o,X.ie&&X.win&&4!=i.readyState){
var l=m("div");
n+="SWFObjectNew",l.setAttribute("id",n),i.parentNode.insertBefore(l,i),i.style.display="none",
function(){
4==i.readyState?i.parentNode.removeChild(i):setTimeout(arguments.callee,10);
}();
}
u(e,t,n);
}
}
function d(e){
if(X.ie&&X.win&&4!=e.readyState){
var t=m("div");
e.parentNode.insertBefore(t,e),t.parentNode.replaceChild(f(e),t),e.style.display="none",
function(){
4==e.readyState?e.parentNode.removeChild(e):setTimeout(arguments.callee,10);
}();
}else e.parentNode.replaceChild(f(e),e);
}
function f(e){
var t=m("div");
if(X.win&&X.ie)t.innerHTML=e.innerHTML;else{
var n=e.getElementsByTagName(B)[0];
if(n){
var a=n.childNodes;
if(a)for(var i=a.length,r=0;i>r;r++)1==a[r].nodeType&&"PARAM"==a[r].nodeName||8==a[r].nodeType||t.appendChild(a[r].cloneNode(!0));
}
}
return t;
}
function u(e,t,n){
var a,i=h(n);
if(X.wk&&X.wk<312)return a;
if(i)if(typeof e.id==k&&(e.id=n),X.ie&&X.win){
var r="";
for(var o in e)e[o]!=Object.prototype[o]&&("data"==o.toLowerCase()?t.movie=e[o]:"styleclass"==o.toLowerCase()?r+=' class="'+e[o]+'"':"classid"!=o.toLowerCase()&&(r+=" "+o+'="'+e[o]+'"'));
var l="";
for(var s in t)t[s]!=Object.prototype[s]&&(l+='<param name="'+s+'" value="'+t[s]+'" />');
i.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+r+">"+l+"</object>",
H[H.length]=e.id,a=h(e.id);
}else{
var c=m(B);
c.setAttribute("type",F);
for(var d in e)e[d]!=Object.prototype[d]&&("styleclass"==d.toLowerCase()?c.setAttribute("class",e[d]):"classid"!=d.toLowerCase()&&c.setAttribute(d,e[d]));
for(var f in t)t[f]!=Object.prototype[f]&&"movie"!=f.toLowerCase()&&p(c,f,t[f]);
i.parentNode.replaceChild(c,i),a=c;
}
return a;
}
function p(e,t,n){
var a=m("param");
a.setAttribute("name",t),a.setAttribute("value",n),e.appendChild(a);
}
function v(e){
var t=h(e);
t&&"OBJECT"==t.nodeName&&(X.ie&&X.win?(t.style.display="none",function(){
4==t.readyState?y(e):setTimeout(arguments.callee,10);
}()):t.parentNode.removeChild(t));
}
function y(e){
var t=h(e);
if(t){
for(var n in t)"function"==typeof t[n]&&(t[n]=null);
t.parentNode.removeChild(t);
}
}
function h(e){
var t=null;
try{
t=V.getElementById(e);
}catch(n){}
return t;
}
function m(e){
return V.createElement(e);
}
function g(e,t,n){
e.attachEvent(t,n),z[z.length]=[e,t,n];
}
function w(e){
var t=X.pv,n=e.split(".");
return n[0]=parseInt(n[0],10),n[1]=parseInt(n[1],10)||0,n[2]=parseInt(n[2],10)||0,
t[0]>n[0]||t[0]==n[0]&&t[1]>n[1]||t[0]==n[0]&&t[1]==n[1]&&t[2]>=n[2]?!0:!1;
}
function b(e,t,n,a){
if(!X.ie||!X.mac){
var i=V.getElementsByTagName("head")[0];
if(i){
var r=n&&"string"==typeof n?n:"screen";
if(a&&(I=null,L=null),!I||L!=r){
var o=m("style");
o.setAttribute("type","text/css"),o.setAttribute("media",r),I=i.appendChild(o),X.ie&&X.win&&typeof V.styleSheets!=k&&V.styleSheets.length>0&&(I=V.styleSheets[V.styleSheets.length-1]),
L=r;
}
X.ie&&X.win?I&&typeof I.addRule==B&&I.addRule(e,t):I&&typeof V.createTextNode!=k&&I.appendChild(V.createTextNode(e+" {"+t+"}"));
}
}
}
function C(e,t){
if(U){
var n=t?"visible":"hidden";
G&&h(e)?h(e).style.visibility=n:b("#"+e,"visibility:"+n);
}
}
function E(e){
var t=/[\\\"<>\.;]/,n=null!=t.exec(e);
return n&&typeof encodeURIComponent!=k?encodeURIComponent(e):e;
}
{
var S,A,N,T,I,L,k="undefined",B="object",O="Shockwave Flash",j="ShockwaveFlash.ShockwaveFlash",F="application/x-shockwave-flash",$="SWFObjectExprInst",x="onreadystatechange",M=window,V=document,P=navigator,R=!1,D=[i],W=[],H=[],z=[],G=!1,J=!1,U=!0,X=function(){
var e=typeof V.getElementById!=k&&typeof V.getElementsByTagName!=k&&typeof V.createElement!=k,t=P.userAgent.toLowerCase(),n=P.platform.toLowerCase(),a=/win/.test(n?n:t),i=/mac/.test(n?n:t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,l=[0,0,0],s=null;
if(typeof P.plugins!=k&&typeof P.plugins[O]==B)s=P.plugins[O].description,!s||typeof P.mimeTypes!=k&&P.mimeTypes[F]&&!P.mimeTypes[F].enabledPlugin||(R=!0,
o=!1,s=s.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),l[0]=parseInt(s.replace(/^(.*)\..*$/,"$1"),10),
l[1]=parseInt(s.replace(/^.*\.(.*)\s.*$/,"$1"),10),l[2]=/[a-zA-Z]/.test(s)?parseInt(s.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof M.ActiveXObject!=k)try{
var c=new ActiveXObject(j);
c&&(s=c.GetVariable("$version"),s&&(o=!0,s=s.split(" ")[1].split(","),l=[parseInt(s[0],10),parseInt(s[1],10),parseInt(s[2],10)]));
}catch(d){}
return{
w3:e,
pv:l,
wk:r,
ie:o,
win:a,
mac:i
};
}();
!function(){
X.w3&&((typeof V.readyState!=k&&"complete"==V.readyState||typeof V.readyState==k&&(V.getElementsByTagName("body")[0]||V.body))&&t(),
G||(typeof V.addEventListener!=k&&V.addEventListener("DOMContentLoaded",t,!1),X.ie&&X.win&&(V.attachEvent(x,function(){
"complete"==V.readyState&&(V.detachEvent(x,arguments.callee),t());
}),M==top&&!function(){
if(!G){
try{
V.documentElement.doScroll("left");
}catch(e){
return void setTimeout(arguments.callee,0);
}
t();
}
}()),X.wk&&!function(){
return G?void 0:/loaded|complete/.test(V.readyState)?void t():void setTimeout(arguments.callee,0);
}(),a(t)));
}(),function(){
X.ie&&X.win&&window.attachEvent("onunload",function(){
for(var t=z.length,n=0;t>n;n++)z[n][0].detachEvent(z[n][1],z[n][2]);
for(var a=H.length,i=0;a>i;i++)v(H[i]);
for(var r in X)X[r]=null;
X=null;
for(var o in e)e[o]=null;
e=null;
});
}();
}
return{
registerObject:function(e,t,n,a){
if(X.w3&&e&&t){
var i={};
i.id=e,i.swfVersion=t,i.expressInstall=n,i.callbackFn=a,W[W.length]=i,C(e,!1);
}else a&&a({
success:!1,
id:e
});
},
getObjectById:function(e){
return X.w3?l(e):void 0;
},
embedSWF:function(e,t,a,i,r,o,l,d,f,p){
var v={
success:!1,
id:t
};
X.w3&&!(X.wk&&X.wk<312)&&e&&t&&a&&i&&r?(C(t,!1),n(function(){
a+="",i+="";
var n={};
if(f&&typeof f===B)for(var y in f)n[y]=f[y];
n.data=e,n.width=a,n.height=i;
var h={};
if(d&&typeof d===B)for(var m in d)h[m]=d[m];
if(l&&typeof l===B)for(var g in l)typeof h.flashvars!=k?h.flashvars+="&"+g+"="+l[g]:h.flashvars=g+"="+l[g];
if(w(r)){
var b=u(n,h,t);
n.id==t&&C(t,!0),v.success=!0,v.ref=b;
}else{
if(o&&s())return n.data=o,void c(n,h,t,p);
C(t,!0);
}
p&&p(v);
})):p&&p(v);
},
switchOffAutoHideShow:function(){
U=!1;
},
ua:X,
getFlashPlayerVersion:function(){
return{
major:X.pv[0],
minor:X.pv[1],
release:X.pv[2]
};
},
hasFlashPlayerVersion:w,
createSWF:function(e,t,n){
return X.w3?u(e,t,n):void 0;
},
showExpressInstall:function(e,t,n,a){
X.w3&&s()&&c(e,t,n,a);
},
removeSWF:function(e){
X.w3&&v(e);
},
createCSS:function(e,t,n,a){
X.w3&&b(e,t,n,a);
},
addDomLoadEvent:n,
addLoadEvent:a,
getQueryParamValue:function(e){
var t=V.location.search||V.location.hash;
if(t){
if(/\?/.test(t)&&(t=t.split("?")[1]),null==e)return E(t);
for(var n=t.split("&"),a=0;a<n.length;a++)if(n[a].substring(0,n[a].indexOf("="))==e)return E(n[a].substring(n[a].indexOf("=")+1));
}
return"";
},
expressInstallCallback:function(){
if(J){
var e=h($);
e&&S&&(e.parentNode.replaceChild(S,e),A&&(C(A,!0),X.ie&&X.win&&(S.style.display="block")),
N&&N(T)),J=!1;
}
}
};
}();
return e;
});