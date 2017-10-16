define("tpl/media/appmsg_edit/article.html.js",[],function(){
return'<div id="read_only_container" class="page_msg mini" style="display:none;">\n    <div class="inner">\n        <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n        <div class="msg_content">\n            <p></p>\n            <span class="js_close msg_closed" style="display:none;">关闭</span>\n        </div>\n    </div>    \n</div>\n<div class="appmsg_editor">\n    <div class="appmsg_editor_inner">\n        <!-- BEGIN UEDITOR -->\n        <div id="js_ueditor" class="appmsg_edit_item content_edit">\n            <label for="" class="frm_label" style="display:none;">\n                <strong class="title">正文</strong>\n\n                <p class="tips l">\n                    <em id="js_auto_tips"></em>\n                    <a id="js_cancle" style="display:none;" href="javascript:void(0);"\n                       onclick="return false;">取消</a>\n                </p>\n            </label>\n<!--        <div class="frm_msg fail js_catch_tips" style="display:none;">有5张图片粘贴失败</div>\n            <div class="frm_msg fail js_content_error" style="display:none;">正文不能为空且长度不能超过20000字</div> -->\n            <div id="js_editor" class="edui_editor_wrp"></div>\n        </div>\n        <!-- END UEDITOR -->\n\n        <!-- BEGIN 原创文章预览 -->\n        <div id="reprint_article_main" style="display:none;" class="appmsg_edit_origin_preview">\n            <div class="share_media">\n                <div class="original_panel" lang="en">\n                    <div class="flex_context original_account">\n                        <div class="js_head_img flex_hd">\n                            <span class="radius_avatar original_account_avatar">\n                                <img class="js_headimg account_avatar" src="" alt="">\n                            </span>\n                        </div>\n                        <div class="flex_bd">\n                            <div class="js_nickname original_account_nickname"></div>\n                        </div>\n                    </div>\n                    <div class="js_title original_panel_title">\n                    </div>\n                    <div class="js_content original_panel_content"></div>\n                    <div class="original_panel_tool">\n                        <a class="js_link" target="_blank" href="javascript:;">阅读全文</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- END 原创文章预览 -->\n\n        <!-- BEGIN 广告预览 -->\n        <div class="appmsg_edit_ad_preview js_readonly" style="display: none;">\n            <div class="page_msg mini js_ad_error_tips" style="display: none;">\n                <div class="inner">\n                    <span class="msg_icon_wrp"><i class="icon_msg_mini warn"></i></span>\n                    <div class="msg_content">\n                        <p class="js_ad_tips_wording">该广告为头条广告位，不能插入在非头条文章中。</p>\n                    </div>\n                </div>\n                <span class="msg_closed js_msg_close">关闭</span>\n            </div>\n            <div class="ad_preview_box js_ad_preview"></div>\n            <div class="mpda_preview_ft_tips">\n                <span class="radius_tag js_tag">广告推荐</span><span class="tips_global">文章编辑后需发送给广告主预览，操作请进入<a class="js_jumpToOrder" target="_blank" href="javascript:void(0);">广告订单页面</a></span>\n            </div>\n        </div>\n        <!-- END 广告预览-->\n\n        <div class="appmsg_edit_function_area js_readonly">\n            <!-- BEGIN 原文链接 -->\n            <div class="js_url_area appmsg_edit_item origin_url_area js_reprint_hide">\n                <label for="" class="frm_label">\n                    <label class="frm_checkbox_label" for="js_url_checkbox">\n                        <input type="checkbox" class="frm_checkbox js_url_checkbox js_field" name="source_url_checked">\n                        <i class="icon_checkbox"></i>\n                        <span class="lbl_content">\n                            原文链接                        </span>\n                    </label>\n                </label>\n                <span class="frm_input_box" style="display:none;"><input type="text" class="js_url frm_input js_field" name="source_url"></span>\n                <span class="js_url_ban_wording" style="position:relative; top:1em;"></span>\n                <div class="profile_link_msg_global source_url frm_msg fail js_warn" style="display:none;">请勿添加其他公众号的主页链接</div>\n                <div class="frm_msg fail js_url_error" style="display:none;">链接不合法</div>\n            </div>\n            <!-- END 原文链接 -->\n            <!--BEGIN 留言 -->\n            {if can_use_comment}\n            <div class="appmsg_edit_item ">\n                <label class="frm_checkbox_label comment_checkbox" for="">\n                    <input type="checkbox" class="frm_checkbox js_comment js_field" checked name="need_open_comment">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">留言</span>\n                </label>\n                <div class="comment_radio_wrp" id="js_comment_setting_wrp" style="display:none;">\n                    <input data-label="所有人可留言" class="frm_radio js_comment_setting" type="radio" value="0">\n                    <input data-label="仅关注后可留言" class="frm_radio js_comment_setting" type="radio" value="1">\n                </div>\n            </div>\n            {/if}\n            <!-- END 留言-->\n            {if has_invited_original}\n            <!--如果可以使用原创功能-->\n            <div id="js_original" class="appmsg_edit_item original_area js_reprint_hide">\n                <!--BEGIN 未开通原创-->\n                {if can_use_copyright}\n                <div class="unorigin js_original_type">\n                    <div class="cont">\n                        <h4 class="subtitle">原创：未声明</h4>\n                        <!--\n                        <p class="tips_global original_title_tips">原创声明是公众平台关于支持原创者的功能</p>\n                        -->\n                    </div>\n                    <div class="opt">\n                        <a href="javascript:;" onclick="return false;" class="btn btn_default js_original_apply">声明原创</a>\n                    </div>\n                </div>\n                {else}\n                <div class="unorigin js_original_type">\n                    <div class="cont">\n                        {if orginal_apply_stat == 0}\n                        <h4 class="subtitle">原创声明：未开通</h4>\n                        {else if orginal_apply_stat == 1}\n                        <h4 class="subtitle">原创声明：审核中</h4>\n                        {else if orginal_apply_stat == 2}\n                        <h4 class="subtitle">原创声明：申请失败</h4>\n                        {else if orginal_apply_stat == 3}\n                        {/if}\n                    </div>\n                    {if orginal_apply_stat == 0}\n                    <div class="opt">\n                        <div class="description">\n                            <p class="desc">原创声明是公众平台为维护原创作者权益推出的功能。</p>\n                            <p class="desc">1. 开通后，你可以选择文章是否允许被转载；</p>\n                            <p class="desc">2. 声明原创的文章被转载时，系统会自动注明文章出处。</p>\n                        </div>\n                        <a href="javascript:;" onclick="return false;" class="btn btn_default" id="js_original_func_open">开通</a>\n                    </div>\n                    {/if}\n                </div>\n                {/if}\n                <!--END 未开通原创-->\n                <!--BEGIN 开通原创-->\n                <div class="origined js_original_type" style="display:none;">\n                    <label class="frm_label" id="js_original_open">\n                        <span class="mini_tips icon_before l">\n                            原创：已声明                        </span>\n                        <a href="javascript:;" onclick="return false;" class="js_original_cancel r">撤销声明</a>\n                        <a href="javascript:;" onclick="return false;" class="js_original_apply r">编辑声明</a>\n                    </label>\n\n                    <div class="normal_flow js_original_content" style="display:none">\n                        <!--添加.js_original_content元素 .open类名，小箭头向上，不添加则向下-->\n                        <div id="js_original_detail" class="preview_hd">\n                            原创详情<i class="icon_arrow"></i>\n                        </div>\n                        <ul class="simple_preview_list tips_global">\n                            <!--\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">原文链接</label>\n\n                                <div class="simple_preview_value js_url"></div>\n                            </li>\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">首发平台</label>\n\n                                <div class="simple_preview_value js_platform"></div>\n                            </li>\n                            -->\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">作者</label>\n\n                                <div class="simple_preview_value js_author"></div>\n                            </li>\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">文章类别</label>\n\n                                <div class="simple_preview_value js_classify"></div>\n                            </li>\n                            <!--\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label" for="">转载类型</label>\n\n                                <div class="simple_preview_value js_frm"></div>\n                            </li>\n                            -->\n                            <li class="simple_preview_item">\n                                <label class="simple_preview_label mini_tips icon_after" for="">白名单<i class="icon_msg_mini ask js_whitelist_tips"></i></label>\n                                <div class="simple_preview_value">\n                                    <div class="original_user_list js_whitelist"></div>\n                                    <a href="javascript:;" class="js_add_whitelist">添加白名单</a>\n                                </div>\n                            </li>\n                        </ul>\n                        {if can_use_reward}\n                        <!--如果可以使用赞赏功能-->\n                        <div class="reward_edit_item">\n\n                            <h4 class="reward_edit_title">赞赏设置</h4>\n                            <p class="reward_edit_tips tips_global">\n                                根据苹果公司规定，微信iOS版赞赏功能关闭，其他客户端版本仍可照常使用。                                <a onclick="return false;" href="javascript:;" class="js_reward_notice">查看须知</a>\n                            </p>\n\n                            <label class="frm_checkbox_label" for="reward">\n                                <input type="checkbox" name="can_reward" class="frm_checkbox js_reward js_field" value="1" checked>\n                                <i class="icon_checkbox"></i>\n                                <span class="lbl_content">\n                                    接受用户赞赏                                    <!--<span class="mini_tips weak_text">（申请原创声明后才可勾选）</span>-->\n                                </span>\n                            </label>\n\n                            <div class="frm_control_group js_reward_div">\n                                <label for="" class="frm_label">赞赏引导语（选填）</label>\n                                <div class="frm_controls">\n                                <span class="frm_input_box reward_wording"><input type="text" name="reward_wording" class="frm_input  js_counter js_reward_wording js_field"\n                                    max-length="15" placeholder="赞赏引导语（选填）"></span>\n                                </div>\n                            </div>\n                            {if is_ios_reward_open}\n                            <div class="frm_control_group js_reward_ios_wrap">\n                                <label for="" class="frm_label mini_tips icon_after">iOS转账金额设置<i class="icon_msg_mini ask js_reward_ios_tips"></i></label>\n                                <div class="frm_controls">\n                                    <div class="reward_radio_wrp frm_vertical_lh">\n                                        <label class="frm_radio_label">\n                                            <i class="icon_radio"></i>\n                                            <span class="lbl_content">任意金额</span>\n                                            <input type="radio" class="frm_radio js_reward_ios" value="0">\n                                        </label>\n                                        <label class="frm_radio_label">\n                                            <i class="icon_radio"></i>\n                                            <span class="lbl_content">固定金额</span>\n                                            <input type="radio" class="frm_radio js_reward_ios" value="1">\n                                        </label>\n                                    </div>\n                                    <div class="frm_input_box with_counter counter_in append fix_money_input js_reward_ios_money">\n                                        <input type="text" name="reward_money" class="frm_input js_field">\n                                        <em class="frm_input_append frm_counter">元</em>\n                                    </div>\n                                    <div class="frm_msg fail js_reward_money_error" style="display:none;"></div>\n                                    <!--\n                                    <div class="js_reward_ios_wrap" style="display: none;">\n                                        <input type="checkbox" name="reward_money" class="frm_checkbox js_reward_ios js_field" value="1" data-label="iOS转账固定金额" />\n                                        <i class="icon_msg_mini ask js_reward_ios_tips"></i>\n                                        <div class="appmsg_edit_item js_reward_ios_money" style="display: none;">\n                                            <span class="frm_input_box with_counter counter_in append">\n                                                <input type="text" name="reward_money" class="frm_input js_field">\n                                                <em class="frm_input_append frm_counter">元</em>\n                                            </span>\n                                        </div>\n                                    </div>\n                                    -->\n                                </div>\n                            </div>\n                            {/if}\n                        </div>\n\n\n                        </div>\n                        {/if}\n                        {if can_use_payforread}\n                        <!--如果可以使用付费阅读功能-->\n                        <div class="payread">\n                            <label class="frm_checkbox_label" for="js_pay">\n                                <input name="payforread_enabled" type="checkbox" id="js_pay" class="frm_checkbox js_field" value="1">\n                                <i class="icon_checkbox"></i>\n                                <span class="lbl_content">\n                                    付费阅读                                    <span class="mini_tips weak_text js_pay_tips">（只有“禁止转载”的原创文章才可以设置付费阅读）</span>\n                                </span>\n                                <p class="pay_seting js_pay_setting" style=\'display:none\'>\n                                    <label class="frm_fee">金额：<span class="js_fee"></span>元</label>\n                                    <a onclick="return false;" href="javascript:;" class="js_pay_edit">修改</a>\n                                </p>\n                            </label>\n                        </div>\n                        {/if}\n                        <!--<input type="hidden" class="js_original_publish">-->\n                        <input type="hidden" class="js_reprint_frm">\n                    </div>\n\n                    <p class="frm_msg fail js_error_msg" id="original_type_msg" style=\'display:none\'>请设置转载类型</p>\n                </div>\n                <!--END 开通原创-->\n            </div>\n            {/if}\n        </div>\n        \n        <div class="appmsg_edit_highlight_area js_readonly">\n\n            <div class="appmsg_edit_title">发布样式编辑</div>\n            <!-- EBGIN 封面 -->\n            <div class="appmsg_edit_item gap_left">\n                <label for="" class="frm_label">\n                    <strong class="title">封面</strong>\n\n                    <p class="js_cover_tip tips gap_left"></p>\n                </label>\n                <div class="upload_wrap">\n                    <div class="js_reprint_hide">\n                        <!--\n                        <div class="upload_box">\n                            <div class="upload_area">\n                                <a id="js_appmsg_upload_cover" href="javascript:void(0);" onclick="return false;"\n                                   class="btn btn_upload">\n                                    本地上传                                </a>\n                            </div>\n                        </div>-->\n                        <a id="js_selectCoverFromContent" href="javascript:void(0);" onclick="return false;"\n                           class="btn btn_upload">从正文选择</a>\n                        &nbsp;&nbsp;\n                        <a id="js_imagedialog" href="javascript:void(0);" onclick="return false;"\n                                       class="btn btn_upload">从图片库选择</a>\n                    </div>\n                    \n\n                    <div class="cover_preview_wrp js_cover">\n                        <!-- 20160415 -->\n                        <!-- 这里的js_cover先去掉了，要改dom，不能用img，改用span加背景图片方式 -->\n                        <!-- cover_preview默认隐藏，有数据了才显示 -->\n                        <span class="cover_preview js_cover_preview">\n                            <div id="js_cover_mask" class="card_mask_global js_tip_mask hover_mask">\n                                <!--\n                                <p class="js_tip_mask_msg cover_error_msg">源图片已被删除<br>请<a href="javascript:void(0);">重新设置</a>封面</p>\n                                -->\n                                <!--修改封面 -->\n                                <a class="js_modifyCover icon20_common edit_media_white" title="修改封面" href="javascript:void(0);" onclick="return false;">修改封面</a>\n                                \n                                <a class="js_removeCover icon20_common del_media_white" title="删除封面" href="javascript:void(0);" onclick="return false;">删除</a>\n                            </div>\n                        </span>\n                        <input type="hidden" class="js_field js_file_id" name="file_id">\n                        <input type="hidden" class="js_field js_cdn_url" name="cdn_url">\n                        <input type="hidden" class="js_field js_cdn_url_back" name="cdn_url_back">\n                        <input type="hidden" class="js_show_cover_pic js_field" data-type=\'checkbox\' name="show_cover_pic">\n                    </div>\n                </div>                \n\n                <!-- <p class="frm_tips">\n                    <label for="" class="frm_checkbox_label">\n                        <i class="icon_checkbox"></i>\n                        <input type="checkbox" class="frm_checkbox js_show_cover_pic js_field" name="show_cover_pic" checked>\n                        封面图片显示在正文中                    </label>\n                </p> -->\n                <div class="frm_msg js_show_cover_pic_tips" style="display: none;">\n                    <span class="tips js_msg_content">在正文顶部插入封面图原图片</span>\n                </div>\n                <div class="frm_msg fail js_cover_error js_error_msg" style="display:none;">\n                    <span class="js_msg_content"></span>\n                </div>\n            </div>\n            <!-- END 封面 -->\n            <!-- BEGIN 摘要 -->\n            <div class="js_desc_area appmsg_edit_item gap_left align_counter appmsg_description">\n                <label for="" class="frm_label">\n                    <strong class="title">摘要</strong>\n                </label>\n                <span class="frm_textarea_box with_counter counter_out">\n                    <textarea placeholder="选填，如果不填写会默认抓取正文前54个字" class="frm_textarea js_desc js_counter js_field" name="digest" max-length="120"></textarea>\n                    <em class="frm_input_append frm_counter">0/120</em>\n                </span>\n\n                <div class="frm_msg fail js_desc_error" style="display:none;"></div>\n            </div>\n            <!-- END 摘要 -->\n        </div>\n    </div>\n</div>\n';
});define("common/wx/mpEditor/editor.js",["widget/ueditor_new/themes/default/ueditor.css","widget/ueditor_new/themes/default/css/ueditor.css","widget/tooltip.css","tpl/mpEditor/layout.html.js","common/wx/mpEditor/plugin/filter.js","common/wx/mpEditor/contextmenu.js","common/wx/mpEditor/editor_options.js","common/wx/mpEditor/plugin/popup.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/mpEditor/plugin/scaleimg.js","common/wx/mpEditor/plugin/cropimg.js","tpl/tooltip.html.js","media/report.js"],function(t){
"use strict";
function e(t){
this.__o={
needPopup:!0,
imgScale:!0,
scaleimgWheelScroll:!1,
cropimgWheelScroll:!1,
plugins:[],
onReady:function(){}
},this.__ueditor_config={
pluginsContainer:{},
debug:0,
layout:"",
is_illegal:0,
contextMenu:r,
UEDITOR_HOME_URL:m.URL,
isShow:!0,
canChangeIframeHeight:!0,
initialContent:"",
autoClearinitialContent:!1,
iframeCssUrl:wx.EditorRes.iframe,
textarea:"editorValue",
focus:!1,
minFrameWidth:800,
minFrameHeight:400,
autoClearEmptyNode:!0,
fullscreen:!1,
readonly:!1,
zIndex:999,
imagePopup:!0,
enterTag:"p",
pageBreakTag:"_baidu_page_break_tag_",
customDomain:!0,
lang:m.LANG,
theme:"default",
allHtmlEnabled:!1,
scaleEnabled:!1,
wordCount:!1,
elementPathEnabled:!1,
autoHeightEnabled:!1,
autoFloatEnabled:!0,
sourceEditor:"textarea",
imageUrl:"/cgi-bin/uploadimg2cdn?t=ajax-editor-upload-img&lang="+m.LANG+"&token="+m.TOKEN,
imagePath:"",
compressSide:1,
catchRemoteImageEnable:!0,
catcherUrl:"/cgi-bin/uploadimg2cdn?lang="+m.LANG+"&token="+m.TOKEN,
separater:"",
toolbars:[["more","|","fontsize","|","blockquote","horizontal","|","removeformat"],["bold","italic","underline","forecolor","backcolor","|","justifyleft","justifycenter","justifyright","justifyindent","|","rowspacingtop","rowspacingbottom","lineheight","letterspacing","|","insertorderedlist","insertunorderedlist","|","imagenone","imageleft","imageright","imagecenter"]],
labelMap:{
anchor:"",
undo:""
},
topOffset:0
},this.__init(t);
}
function n(t){
if(!t)return null;
for(var e=0,n=m.allEditor.length;n>e;e++)if(t===m.allEditor[e].getWindow())return m.allEditor[e];
return null;
}
t("widget/ueditor_new/themes/default/ueditor.css"),t("widget/ueditor_new/themes/default/css/ueditor.css"),
t("widget/tooltip.css");
var i=t("tpl/mpEditor/layout.html.js"),o=t("common/wx/mpEditor/plugin/filter.js"),r=t("common/wx/mpEditor/contextmenu.js"),a=t("common/wx/mpEditor/editor_options.js"),u=t("common/wx/mpEditor/plugin/popup.js"),s=t("common/wx/mpEditor/plugin/remoteimg.js"),l=t("common/wx/mpEditor/plugin/scaleimg.js"),d=t("common/wx/mpEditor/plugin/cropimg.js"),c=t("tpl/tooltip.html.js"),f=t("media/report.js"),m={
allEditor:[],
LANG:window.wx.data.lang,
TOKEN:window.wx.data.t,
URL:/^dev/.test(location.host)?"/mpres/htmledition/style/widget/ueditor_new/":"//res.wx.qq.com/mpres/htmledition/style/widget/ueditor_new/"
};
return e.prototype={
__init:function(t){
this.__g={
id:+new Date,
asynList:{}
},this.__extend(t),this.__extendPlugins(),this.__registerPlugins(),this.__createEditor(),
this.__initReport(),this.__initPulginEvent(),new s(this),this.__customEventHandle(),
m.allEditor.push(this);
},
__extendPlugins:function(){
var t=this.__o;
t.imgScale&&t.plugins.push(new l({
wheelScroll:t.scaleimgWheelScroll
})),t.needPopup&&t.plugins.push(new d({
coverWheelScroll:t.cropimgWheelScroll
}));
},
__initReport:function(){
var t=this;
this.addListener("funcPvUvReport",function(e,n,i){
t.funcPvUvReport(n,i);
}),this.addListener("reportAddNum",function(t,e,n,i){
f.addNum(e,n,i);
}),this.addListener("getCommonReportIDKey",function(e,n){
if(!n)return null;
var i;
i="[object String]"==Object.prototype.toString.call(n)?[n]:n;
for(var o=t.getUeditor(),r=o.options.commonReportConf,a=r,u=0,s=n.length;s>u&&(a=a[n[u]],
a);u++);
if(a){
var l=a.split("_");
return{
id:l[0],
key:l[1]
};
}
return null;
});
},
__extend:function(t){
var e=this.__ueditor_config,n=this.__o,o=a.getOptions();
for(var r in o)o.hasOwnProperty(r)&&(e[r]=o[r]);
for(var r in t)n.hasOwnProperty(r)?n[r]=t[r]:e.hasOwnProperty(r)&&(e[r]=t[r]);
e.layout||(e.layout=i),e.layout=template.compile(e.layout);
},
__registerPlugins:function(){
for(var t=this,e=this.__o.plugins,n=0,i=e.length;i>n;n++){
var o=e[n];
!function(e){
var n=e.getName();
t.__ueditor_config.pluginsContainer[n]=function(){
var i=this;
"function"==typeof e.beforeDefineCommand&&e.beforeDefineCommand(i,t),"function"==typeof e.getExecCommand&&(i.commands[n]={
execCommand:e.getExecCommand(),
noCommandReprot:"function"==typeof e.noCommandReprot?e.noCommandReprot():!1
}),"function"==typeof e.getQueryCommandState&&(i.commands[n].queryCommandState=e.getQueryCommandState()),
"function"==typeof e.getQueryCommandValue&&(i.commands[n].queryCommandValue=e.getQueryCommandValue());
},t.__setPluginMenu(e),t.__pluginPerformance(e);
}(o);
}
},
__setPluginMenu:function(t){
var e=this.__ueditor_config.contextMenu;
"function"==typeof t.getContextMenu&&e.push("-",t.getContextMenu());
},
__pluginPerformance:function(t){
var e=0;
switch("function"==typeof t.getType&&(e=t.getType()||0),e){
case 0:
this.__ceateDefaultBtn(t);
break;

case 1:
this.__createToolBarBtn(t);
}
},
__ceateDefaultBtn:function(t){
var e=this;
if("function"==typeof t.getContainer){
var n=t.getContainer();
if(n){
var i=$(n),o=t.getName();
i&&i.length>0&&i.click(function(){
e.execCommand(o);
});
}
}
},
__createEditor:function(){
var t=this,e=this.__o,n=this.__ueditor_config;
this.ueditor=new UE.ui.Editor(n),this.ueditor.ready(function(){
t.__initToolbarTips(),e.needPopup&&new u(t),"function"==typeof e.onReady&&e.onReady.call(t,t.ueditor);
});
},
__initToolbarTips:function(){
if(this.__ueditor_config.toolbars&&0!=this.__ueditor_config.toolbars.length){
var t=this.__g;
t.toolbarsTips=$(template.compile(c)({
content:""
})),t.toolbarsTips.hide(),$("body").append(t.toolbarsTips),$(this.ueditor.container).find("[id*=_toolbarboxouter]").on("mouseover",function(e){
var n=$(e.target||e.srcElement),i=n.parents("div[data-tooltip]");
if(1==i.length){
var o=i.data("tooltip");
if(o){
t.toolbarsTips.find(".tooltip_inner").html(o);
var r=i.offset();
t.toolbarsTips.css({
top:r.top-5-t.toolbarsTips.height(),
left:r.left+i.width()/2-t.toolbarsTips.width()/2
}).show();
}
}
}).on("mouseout",function(e){
0==$(e.toElement).parents("div[data-tooltip]").length&&t.toolbarsTips.hide();
});
}
},
__initPulginEvent:function(){
for(var t=this,e=this.__o.plugins,n=0,i=e.length;i>n;n++){
var o=e[n];
o.editor=this,"function"==typeof o.addListener&&o.addListener(t);
}
},
__createToolBarBtn:function(t){
if("function"==typeof t.initToolBar)return void t.initToolBar(this);
var e="";
"function"==typeof t.getTitle&&(e=t.getTitle()||"");
var n=t.getName(),i=this.getUi();
i[n]=function(t){
return function(n){
var o=new i.Button({
className:"edui-for-"+t,
title:e,
onclick:function(){
n.execCommand(t);
},
theme:n.options.theme,
showText:!1
});
return i.buttons[t]=o,n.addListener("selectionchange",function(e,i,r){
var a=n.queryCommandState(t);
-1==a?(o.setDisabled(!0),o.setChecked(!1)):r||(o.setDisabled(!1),o.setChecked(a));
}),o;
};
}(n);
},
__customEventHandle:function(){
var t=this;
t.addListener("focus keyup aftersetcontent",function(){
t.getDom("contentplaceholder").style.display="none";
}),t.addListener("blur",function(){
""==t.ueditor.getContent().trim()&&(t.getDom("contentplaceholder").style.display="block");
}),t.addListener("checkdomAsynList",function(){
return t.checkdomAsynList();
}),t.addListener("handleWinScroll",function(t,e){
document.body.style.overflow=document.documentElement.style.overflow=e?"auto":"hidden";
});
},
destory:function(){
for(var t=this.__o.plugins,e=0,n=t.length;n>e;e++)"function"==typeof t[e].beforeEditorDestory&&t[e].beforeEditorDestory();
for(var e=0,n=m.allEditor.length;n>e;e++)m.allEditor[e]===this&&m.allEditor.splice(e,1);
this.hasDestory=!0;
},
ready:function(t){
if("function"==typeof t){
{
var e=this;
this.__o;
}
this.ueditor.ready(function(){
t.call(e,e.ueditor),""==e.ueditor.getContent().trim()&&(e.getDom("contentplaceholder").style.display="block");
});
}
},
addListener:function(t,e){
this.ueditor.addListener(t,e);
},
handlerContent:function(t,e){
for(var n=this.__o.plugins,i=0,o=n.length;o>i;i++){
var r=n[i];
"function"==typeof r.beforeSetContent&&(t=r.beforeSetContent(t,e));
}
return t=t.replace(/background\-image:\s*url\(https\:\/\/mp\.weixin\.qq\.com\/cgi\-bin\/appmsg(.*?)\)/g,"");
},
insertTemplate:function(t,e){
e!==!0&&(t=this.handlerContent(t,!1)),this.execCommand("insertHtml",t),this.afterSetContent();
},
afterSetContent:function(){
for(var t=this.__o.plugins,e=0,n=t.length;n>e;e++){
var i=t[e];
"function"==typeof i.afterSetContent&&i.afterSetContent();
}
},
setContent:function(t,e,n){
n!==!0&&(t=this.handlerContent(t,!1)),this.ueditor.setContent(t,e),this.afterSetContent();
},
initPluginData:function(t){
t=t||{};
for(var e=this.__o.plugins,n=0,i=e.length;i>n;n++){
var o=e[n];
if("function"==typeof o.initPluginData){
var r=o.initPluginData();
r=r||[],"string"==typeof r&&(r=[r]);
for(var a=0,u=r.length;u>a;a++)"undefined"==typeof t[r[a]]&&(t[r[a]]="");
}
}
return t;
},
getEditorData:function(t){
for(var e=this.__o.plugins,n=0,i=e.length;i>n;n++){
var r=e[n];
"function"==typeof r.beforeGetContent&&r.beforeGetContent();
}
t=t||{},t.content=this.ueditor.getContent();
for(var n=0,i=e.length;i>n;n++){
var r=e[n];
if("function"==typeof r.getPluginData){
var a=this.getPluginDataTmpl(t);
r.getPluginData({
init:a.init
}),this.fillPluginData(a,t);
}
}
return t.content=t.content.replace(/(<\w+[^>]*)\sid=\"([^\">]*)\"([^>]*>)/g,"$1$3"),
t.content=t.content.replace(/(<[^>]+?style=([\'\"]))([^\2]*?text-decoration-line[\s]*:[^\2]*?)(\2)/gi,function(){
return arguments[1]+arguments[3].replace(/text-decoration-line[\s]*:/g,"text-decoration:")+arguments[4];
}),t.content=o.formatStyle(t.content),t;
},
fillPluginData:function(t,e){
var n=t.getData();
for(var i in n)n.hasOwnProperty(i)&&"undefined"!=typeof e[i]&&(e[i]=n[i]);
},
getPluginDataTmpl:function(t){
var e={
content:t.content||""
};
return{
init:function(t){
t=t||[],"string"==typeof t&&(t=[t]);
for(var n=0,i=t.length;i>n;n++)"undefined"==typeof e[t[n]]&&(e[t[n]]="");
return{
set:function(t,n){
"undefined"!=typeof e[t]&&(e[t]=n);
},
get:function(t){
return e[t];
}
};
},
getData:function(){
return e;
}
};
},
queryCommandValue:function(t){
return this.ueditor.queryCommandValue(t);
},
getSelection:function(){
return this.ueditor.selection;
},
getSelectionRange:function(){
return this.getSelection().getRange();
},
getSelectionStart:function(){
return this.getSelection().getStart();
},
render:function(t){
this.ueditor.render(t);
},
getUeditor:function(){
return this.ueditor;
},
getWindow:function(){
return this.ueditor.window;
},
getDocument:function(){
return this.getWindow().document;
},
execCommand:function(){
var t=this.ueditor;
return t.execCommand.apply(t,arguments);
},
fireEvent:function(){
var t=this.ueditor;
return t.fireEvent.apply(t,arguments);
},
removeListener:function(){
var t=this.ueditor;
return t.removeListener.apply(t,arguments);
},
funcPvUvReport:function(t,e){
f.addPvUv(t,e);
},
getUtils:function(){
return UE.utils;
},
getDomUtils:function(){
return UE.dom.domUtils;
},
getBrowser:function(){
return UE.browser;
},
getUi:function(){
return UE.ui;
},
getDom:function(t){
return this.ueditor.ui.getDom(t);
},
enableToolbar:function(){
var t=this.ueditor.ui.getDom("toolbar_mask");
return t&&(t.style.display="none"),t;
},
disableToolbar:function(){
var t=this.ueditor.ui.getDom("toolbar_mask");
return t&&(t.style.display="block"),t;
},
checkPlugins:function(t){
var e=this.__o.plugins,n=!0;
return $.each(e,function(e,i){
return"function"==typeof i.check?n=i.check(t):!0;
}),n;
},
isHighlight:function(){
return this.ueditor.highlight;
},
getuid:function(){
return this.__g.id++;
},
delegateDomAsyn:function(t){
function e(){
var t,e,n={
newDom:null,
tempDoc:null
},r=u.uid;
if(u.article){
var a=u.article;
if(o.fireEvent("is_article_alive",a)!==!0)return n;
var s=a.data("article").data,l=o.fireEvent("is_article_editing",a);
if(l)e=$(i.getDocument()).find("[data-asynid="+r+"]");else{
t=$("<div>");
var d=s.get("content");
if(!d)return n;
e=t.html(d).find("[data-asynid="+r+"]");
}
}else e=$(i.getDocument()).find("[data-asynid="+r+"]");
return e&&0!=e.length?(n.newDom=e,n.tempDoc=t||null,n):n;
}
function n(){
if(u){
var e=u.newDom;
try{
if(!e)return delete i.__g.asynList[u.uid],void(i.checkdomAsynList()===!0&&(o.fireEvent("draft_force_save"),
o.fireEvent("domasyn_all_complete")));
if(e.removeClass("js_asyningdom").removeAttr("data-asynid").data("asynid",""),delete i.__g.asynList[u.uid],
u.tempDoc){
var n=u.tempDoc.html();
if(n){
var r=u.article.data("article").data;
r.set("content",n),r.setData(r.getData());
}
}
i.checkdomAsynList()===!0&&(o.fireEvent("draft_force_save"),o.fireEvent("domasyn_all_complete")),
t.requsetFailFun=null,t.requsetSucFun=null,t.requsetFun=null,u=null;
}catch(a){}
}
}
var i=this,o=i.ueditor;
if(t.dom&&"function"==typeof t.requsetFun){
var r=t.requsetFailFun||function(){},a=t.requsetSucFun||function(){},u=this.setDomAsynTag({
dom:t.dom
});
u&&(t.__hasHandle=!1,t.requsetSucFun=function(){
if(this.__timeoutid&&clearTimeout(this.__timeoutid),this.__hasHandle!==!0){
this.__hasHandle=!0;
try{
var i=Array.prototype.slice.call(arguments),o=e();
u.newDom=o.newDom,u.tempDoc=o.tempDoc,i.unshift(u),a.apply(t,i);
}catch(r){
throw r;
}
n();
}
},t.requsetFailFun=function(){
if(this.__timeoutid&&clearTimeout(this.__timeoutid),this.__hasHandle!==!0){
this.__hasHandle=!0;
try{
var i=Array.prototype.slice.call(arguments),o=e();
u.newDom=o.newDom,u.tempDoc=o.tempDoc,i.unshift(u),r.apply(t,i);
}catch(a){
throw a;
}
n();
}
},t.timeout&&(t.__timeoutid=setTimeout(function(){
"function"==typeof t.requsetFailFun&&t.requsetFailFun();
},1*t.timeout)),t.requsetFun());
}
},
checkdomAsynList:function(){
var t=0;
for(var e in this.__g.asynList)if(this.__g.asynList.hasOwnProperty(e))return t++,
!1;
return t>0?!1:!0;
},
setDomAsynTag:function(t){
var e=this.ueditor,n=this.getuid()+"",i=this.__g.asynList,o=e.fireEvent("get_current_article");
if(!t.dom)return!1;
var r=$(t.dom),a=r.attr("data-asynid")||r.data("asynid")||"";
if(a&&i[a]){
if(t.force!==!0)return!1;
delete i[a];
}
n=a||n;
var u=i[n]={
article:o,
uid:n
};
return r.addClass("js_asyningdom").attr("data-asynid",n),u;
},
setHistory:function(t){
var e=this.getUeditor().undoManger;
if(!e)return!1;
if(!t)return e.reset(),!0;
var n=t.list;
if("[object Array]"!==Object.prototype.toString.call(n)||0==n.length)return e.reset(),
!0;
var i=t.index;
return("undefined"==typeof i||0>i||i>n.length-1)&&(i=n.length-1),e.list=n,e.index=i,
e.clearKey(),e.update(),!0;
},
getHistory:function(){
var t=this.getUeditor().undoManger;
return t?{
list:JSON.parse(JSON.stringify2(t.list)),
index:t.index
}:null;
},
changeUeditorConf:function(t){
if(t.key&&t.value&&t.key.length==t.value.length)for(var e=0,n=t.key.length;n>e;e++)"undefined"!=typeof this.ueditor.options[t.key[e]]&&this.ueditor.options[t.key[e]]!==t.value[e]&&("function"==typeof this["beforeUeditorConf_"+t.key[e]+"_change"]&&this["beforeUeditorConf_"+t.key[e]+"_change"](),
this.ueditor.options[t.key[e]]=t.value[e],"function"==typeof this["afterUeditorConf_"+t.key[e]+"_change"]&&this["afterUeditorConf_"+t.key[e]+"_change"]());
},
afterUeditorConf_debug_change:function(){
this.ueditor.eventLog=this.ueditor.eventLog?null:[];
}
},function(t){
t.__editorIframeSelect=function(t){
if(t&&t.parent&&t.parent.window){
var e=n(t.parent.window);
if(e)for(var i=e.getDocument(),o=i.getElementsByTagName("iframe"),r=0,a=o.length;a>r;r++){
var u=o[r];
if(u.contentWindow===t){
var s=new UE.dom.Range(i);
s.selectNode(u).select();
break;
}
}
}
};
}(window),e;
});define("common/wx/mpEditor/plugin/adv.js",["common/wx/media/adDialog.js","common/wx/Tips.js"],function(e){
"use strict";
var t=e("common/wx/media/adDialog.js"),i=e("common/wx/Tips.js"),a=function(e){
e&&e.container&&(this.domid=e.container,this.container=$(e.container).show()),0==e.has_ad&&this.container&&this.container.length>0&&this.container.addClass("disabled"),
this.can_see_ad=e.can_see_ad||!1;
var t=this;
document.addEventListener("EditorCpcEdit",function(){
console.log("触发iframe EditorCpcEdit"),t._editCpc();
}),document.addEventListener("EditorCpcDel",function(){
console.log("触发iframe EditorCpcDel"),t._delCpc();
});
};
return a.beforeSetContent=function(e){
if(!e.html)return"";
var t=e.html.replace(/<mpcpc([^>]*?)js_editor_cpcad([^>]*?)><\/mpcpc>/g,"<iframe $1js_editor_cpcad$2></iframe>"),i=$("<div>"+t+"</div>");
return e.can_see_ad||(i=a.filterData(i)),i.html();
},a.filterData=function(e){
return e.find("mpcpc").remove(),e.find("iframe.js_cpc_area").remove(),e;
},a.prototype={
getName:function(){
return"insertad";
},
getContainer:function(){
return this.domid;
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
console.log("insert ad");
var a=e.editor,r=this;
return a?$(a.ueditor.getContent()).find("iframe.js_cpc_area").length>0||"block"==$(".appmsg_edit_ad_preview").css("display")?(i.err("每篇图文消息只可插入一个广告卡片"),
!1):wx.cgiData.has_ad?void new t({
idx:$(".js_appmsg_item.current").data("msgindex"),
onOK:function(t){
e.doCommand(r,t);
}
}):(i.err("暂无可插入的广告卡片"),!1):!1;
};
},
doCommand:function(e,t){
var i=this;
t.ad_id?i._insertSponsor(e,t):0==t.ad_type?this._insertCpcCatsItems(e,t.category_id_list):1==t.ad_type&&this._insertCpcSingleItem(e,t);
},
initPluginData:function(){},
beforeSetContent:function(e){
return a.beforeSetContent({
html:e,
can_see_ad:this.can_see_ad
});
},
addListener:function(e){
var t=this;
e.addListener("beforepaste",function(e,i){
var a=$("<div>"+i.html+"</div>");
a=t._filterData(a),i.html=a.html();
});
},
getPluginData:function(e){
var t=e.init(this.initPluginData()),i=t.get("content");
if(i){
var a=$("<div>"+i+"</div>");
this.can_see_ad||(a=this._filterData(a)),t.set("content",a.html().replace(/<iframe([^>]*?)js_editor_cpcad([^>]*?)><\/iframe>/g,"<mpcpc $1js_editor_cpcad$2></mpcpc>"));
}
},
check:function(e){
if(-1==e.html().indexOf("js_editor_cpcad"))return!0;
var t=e.html().split("js_editor_cpcad")[0]+">",i="<"+e.html().split("js_editor_cpcad")[1];
return t.replace(/<[^>]*>/g,"").replace(/ /g,"").length<300?(this._showErrMsg("文中广告卡片前未满300个字符"),
!1):i.replace(/<[^>]*>/g,"").replace(/ /g,"").length<300?(this._showErrMsg("文中广告卡片后未满300个字符"),
!1):!0;
},
_showErrMsg:function(e){
var t=$(this.editor.getDom()).find(".js_content_error");
this.editor.fireEvent("showErrMsg",t,e),this.editor.fireEvent("scrollIntoView",t,200);
},
_editCpc:function(){
var e=this,i=(e.editor.getDom(),$(this.editor.getDocument()).find("iframe.js_cpc_area").attr("data-category_id_list")||""),a=$(this.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_category_id")||"",r=$(this.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_aids")||"";
new t({
idx:$(".js_appmsg_item.current").data("msgindex"),
cpc_edit_data:{
category_id_list:i,
single_category_id:a,
single_aids:r
},
onOK:function(t){
$(e.editor.getDocument()).find("iframe.js_cpc_area").removeAttr("data-category_id_list"),
$(e.editor.getDocument()).find("iframe.js_cpc_area").removeAttr("data-single_category_id"),
$(e.editor.getDocument()).find("iframe.js_cpc_area").removeAttr("data-single_aids");
var i="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl";
if($(e.editor.getDocument()).find("iframe.js_cpc_area").attr("src",i),0==t.ad_type)$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("data-category_id_list",t.category_id_list.join("|"));else{
$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_category_id",t.single_category_id),
$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("data-single_aids",t.single_aids);
var i="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl&image_url="+encodeURIComponent(t.image_url)+"&aids_length="+t.single_aids_length;
$(e.editor.getDocument()).find("iframe.js_cpc_area").attr("src",i);
}
}
}),console.log("_editCpc");
},
_delCpc:function(){
$(this.editor.getDocument()).find("iframe.js_cpc_area").remove(),console.log("_delCpc");
},
_filterData:function(e){
return a.filterData(e);
},
_insertCpcCatsItems:function(e,t){
var i=e,a="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl",r=t.join("|"),n='<iframe js_editor_cpcad class="js_cpc_area res_iframe cpc_iframe" data-category_id_list="'+r+'" src="'+a+'"></iframe>';
i.execCommand("insertHtml",n);
},
_insertCpcSingleItem:function(e,t){
var i=e,a="/cgi-bin/readtemplate?t=tmpl/cpc_tmpl&image_url="+encodeURIComponent(t.image_url)+"&aids_length="+t.single_aids_length,r='<iframe js_editor_cpcad class="js_cpc_area res_iframe cpc_iframe" data-single_category_id="'+t.single_category_id+'" data-single_aids="'+t.single_aids+'"  src="'+a+'"></iframe>';
i.execCommand("insertHtml",r);
},
_insertSponsor:function(e,t){
var i=e,a=$(".js_ad_preview");
a.html(template.render("js_ad_preview_tpl",t)).parent().show(),a.parent().find(".js_tag").text(0==t.trade_mode?"广告推荐":"内容定制");
var r=new UE.dom.Range(i.document);
r.selectNode(i.body.childNodes[i.body.childNodes.length-1]).select().setCursor(!0,!1);
for(var n=$(i.body),c=n.height()-16,o="",d=0;d<n.children().length;d++)c-=n.children().eq(d).outerHeight(!0);
if(c>=0)for(var d=0;d<Math.floor(c/25);d++)o+="<br/>";
0==t.trade_mode&&i.execCommand("inserthtml","<p>"+o+t.ad_tips+"</p>",!0),i.fireEvent("scrollIntoView",a,$(window).height()-a.height()-72-30);
}
},a;
});define("common/wx/mpEditor/plugin/video.js",["common/wx/popup.js","biz_common/utils/url/parse.js","common/wx/dialog.js","common/wx/Tips.js","common/wx/getVinfo.js","common/wx/media/videoDialog.js","common/wx/Cgi.js","common/wx/mpEditor/plugin/filter.js"],function(t){
"use strict";
function e(t){
var e=27,r=wx.getBanInfo&&wx.getBanInfo(e);
return r&&t&&m.show({
msg:"经用户投诉，你的帐号上传的视频%s，已封禁添加视频能力至%s。".sprintf(r.reason_desc,r.ban_time==r.unlock_time?"永久":i(r.unlock_time)),
buttons:[{
text:"返回",
click:function(){
this.remove();
}
}]
}),r;
}
function i(t){
var e=new Date(1e3*t);
return e.getFullYear()+"年"+(e.getMonth()+1)+"月"+e.getDate()+"日";
}
function r(t){
if(t.editFrame)return['<iframe class="video_iframe wx_video_iframe',t.className?" "+t.className+'"':'"',t.attr?" "+t.attr+" ":"",' allowfullscreen frameborder=0 style="position:relative; z-index:1;" '," height=",t.height," width=",t.width,'  src="/cgi-bin/readtemplate?t=tmpl/video_tmpl&vid=',t.vid,'"'," ></iframe><br/>"].join("");
var e=500,i=Math.round(e/(t.ratio||h.ratio));
return['<iframe class="wx_video_iframe ',t.className?" "+t.className+'"':'"'," frameborder=0 "," height=",i," width=",e,'  src="https://v.qq.com/iframe/preview.html?vid='+t.vid+"&width="+e+"&height="+i+'&auto=1"'," ></iframe>"].join("");
}
function n(t){
if(!t)return h.ratio;
for(var e=[4/3,16/9],i=e[0],r=Math.abs(i-t),n=1,o=e.length;o>n;n++){
var a=Math.abs(e[n]-t);
r>a&&(r=a,i=e[n]);
}
return i;
}
function o(t){
var e=arguments[1]||window.location.search,i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),r=e.substr(e.indexOf("?")+1).match(i);
return null!=r?r[2]:"";
}
function a(t,e){
var i,r=$(t).find("iframe");
return r.each(function(){
var t=$(this),r=t.attr("src")||t.attr("data-src");
return o("vid",r)==e?(i=t,!1):void 0;
}),i;
}
function d(t,e,i){
return t.find("iframe").each(function(){
var t=$(this),r=s(t),a=t.attr("data-src")||t.attr("src")||"",d=t.attr("data-vidtype");
if(1==r)t.remove();else if(2==r)t.remove();else if(3==r){
var m=o("vid",a);
if(m){
var v=this.attributes;
if(v&&v.length>0){
for(var c=[],u=","+h.attrList.join(",")+",",f=0,l=v.length;l>f;f++)-1==u.indexOf(v[f].name)&&c.push(v[f].name);
for(var f=0,l=c.length;l>f;f++)t.removeAttr(c[f]);
}
t.addClass("video_iframe wx_video_iframe"),t.removeAttr("data-src");
var w=i,p=1*t.data("ratio");
p=p?n(p):h.ratio;
var g=Math.round(w/p);
t.removeAttr("style"),e===!0?(t.attr("width",w),t.attr("height","auto"),t.attr("src","https://v.qq.com/iframe/preview.html?vid="+m+"&width="+w+"&height=auto&auto=0")):(t.attr("width",w),
t.attr("height",g),t.attr("src","/cgi-bin/readtemplate?t=tmpl/video_tmpl&vid="+m)),
d||t.attr("data-vidtype","-1");
}else t.remove();
}else t.removeClass("video_iframe");
}),t;
}
function s(t){
var e=$(t),i=e.attr("data-src")||e.attr("src")||"";
return i.indexOf("//mp.weixin.qq.com/mp/getcdnvideourl?")>=0?1:/^http(s)*:\/\/z\.weishi\.com\/weixin\/player\.html/.test(i)?2:/http(s)*\:\/\/v\.qq\.com\/iframe\/(preview|player)\.html\?/.test(i)||i.indexOf("/cgi-bin/readtemplate?t=tmpl/video_tmpl")>=0?3:-1;
}
t("common/wx/popup.js");
var m=(t("biz_common/utils/url/parse.js"),t("common/wx/dialog.js")),v=t("common/wx/Tips.js"),c=t("common/wx/getVinfo.js"),u=t("common/wx/media/videoDialog.js"),f=t("common/wx/Cgi.js"),l=t("common/wx/mpEditor/plugin/filter.js"),h={
ratio:16/9,
maxLength:3,
attrList:["data-src","class","data-vidtype","allowfullscreen","frameborder","style","height","width","src","data-ratio","data-w","scrolling","data-vh","data-vw"]
},w=(wx.cgiData,function(t){
t&&t.container&&(this.domid=t.container,this.container=$(t.container).show());
var e=this;
e.report_vid_type=[],e.can_use_txvideo=t.can_use_txvideo;
});
return w.beforeSetContent=function(t){
var e=d($("<div></div>").html(t.html),t.isPreview,t.width);
return e.html();
},w.prototype={
getName:function(){
return"insertvideo";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var i=t.editor,r=this;
if(i){
var n=e(!0);
n||(t.getIframeLen()<h.maxLength?new u({
can_use_txvideo:t.can_use_txvideo,
scene:"ueditor",
onOK:function(e,n){
return 21==e||(15==e?(n.height=375,n.width=500,n.vid=n.content,n.vidtype=2,n.url="https://v.qq.com/iframe/preview.html?vid="+n.vid+"&width=500&height=375&auto=0",
t.doCommand(r,"insertvideo",n),i.funcPvUvReport("mpvideo")):(0==n.subtype?n.vidtype=1:1==n.subtype?n.vidtype=4:2==n.subtype&&(n.vidtype=5),
t.doCommand(r,"insertvideo",n),i.funcPvUvReport("qqvideo"))),!0;
}
}):v.err("最多添加3个素材库视频，微信小视频（帐号需认证）或腾讯视频"));
}
};
},
doCommand:function(t,e,i){
console.log("insert video");
var n=t;
i=UE.utils.isArray(i)?i:[i];
for(var o,a=[],d=$(this.editor.getDocument().body).width(),s=Math.round(d/h.ratio),m=0,v=i.length;v>m;m++){
o=i[m];
var c="";
o.vidtype&&(c="data-vidtype='"+o.vidtype+"'"),a.push(r({
vid:o.vid,
width:d,
height:s,
attr:c,
editFrame:!0
}));
}
n.execCommand("inserthtml",a.join(""),!0);
},
addListener:function(t){
var i=this;
t.addListener("beforepaste",function(t,r){
var n=i.filterInputData($("<div></div>").html(r.html)),o=n.find("iframe.video_iframe").length;
if(n.find(".img_loading[data-vid]").remove(),o){
var a=e(!0);
if(a)return r.html="",!0;
}
return i.getIframeLen()+o>h.maxLength?(v.err("最多添加3个素材库视频，微信小视频（帐号需认证）或腾讯视频"),r.html="",
!0):void(r.html=n.html());
}),t.addListener("afterpaste aftersetcontent afterinserthtml",function(e,r,n){
var a=$(n),d=a.filter("iframe.video_iframe").add(a.find("iframe.video_iframe"));
d.each(function(){
var e=$(this);
if(!e.attr("data-ratio")||!e.attr("data-w")){
var r=e.data("src")||e.attr("src")||"";
if(r){
var n=o("vid",r);
n&&!function(t,e){
e.delegateDomAsyn({
dom:t,
timeout:15e3,
requsetFun:function(){
var t=this;
i.getCkeyByVid({
vid:n,
onSuccess:function(e){
e&&e.base_resp&&0==e.base_resp.ret&&e.ckey?c.get({
vid:n,
ckey:e.ckey,
onSuc:function(e){
t.requsetSucFun(e);
},
onError:function(){
t.requsetFailFun();
}
}):t.requsetFailFun();
},
onError:function(){
t.requsetFailFun();
}
});
},
requsetSucFun:function(t,e){
if(t&&t.newDom){
var i,r;
e&&e.data&&(i=e.data.width,r=e.data.height),0!=i&&0!=r&&(t.newDom.attr("data-ratio",i/r),
t.newDom.attr("data-w",i));
}
},
requsetFailFun:function(t){
t&&t.newDom&&t.newDom.removeAttr("data-ratio").removeAttr("data-w");
}
});
}(e,t,n);
}
}
});
});
},
getIframeLen:function(){
var t=this.editor.getDocument();
return $(t).find("iframe.video_iframe").length;
},
getContainer:function(){
return this.domid;
},
getQueryCommandState:function(){
return function(){
var t=this,e=t.selection.getRange().getClosedNode(),i=e&&"edui-faked-video"==e.className;
return i?1:0;
};
},
initPluginData:function(){
return["video_id","vid_type","shortvideofileid"];
},
getPluginData:function(t){
var e=t.init(this.initPluginData());
if(e.get("content")){
var i=this,r=$("<div></div>"),n=[],a=[],d=[];
return r.html(e.get("content")).find("iframe").each(function(){
var t=$(this),e=i.getTypeByDom(t),r=(t.attr("data-shortvideofileid"),t.attr("src")||t.attr("data-src")||""),d=t.attr("data-vidtype");
if(1==e)t.remove();else if(2==e)t.remove();else if(3==e){
var s=o("vid",r);
s&&(t.attr("data-src","https://v.qq.com/iframe/preview.html?vid="+s+"&width=500&height=375&auto=0"),
t.removeAttr("src"),t.addClass("video_iframe"),t.removeClass("wx_video_iframe"),
t.removeAttr("width"),t.removeAttr("height"),t.removeAttr("data-vh"),t.removeAttr("data-vw"),
l.filterStyleAttr(t,["width","height"]),n.push(s),a.push(d||"-1"));
}else t.removeClass("video_iframe");
}),e.set("content",r.html()),e.set("video_id",n.join(",")),e.set("vid_type",a.join(",")),
e.set("shortvideofileid",d.join("|")),e;
}
},
getCkeyByVid:function(t){
f.post({
url:wx.url("/cgi-bin/getvideockey?"),
data:{
vid:t.vid
}
},{
done:function(e){
"function"==typeof t.onSuccess&&t.onSuccess(e);
},
fail:function(){
"function"==typeof t.onError&&t.onError();
}
});
},
getTypeByDom:function(t){
return s(t);
},
filterInputData:function(t,e){
var i=$(this.editor.getDocument().body).width();
return d(t,e,i);
},
beforeSetContent:function(t,e){
var i=$(this.editor.getDocument().body).width();
return w.beforeSetContent({
html:t,
isPreview:e,
width:i
});
}
},function(){
top.window.__crossFun||(top.window.__crossFun={});
var t=top.window.__crossFun;
t.__videoFrameClick||(t.__videoFrameClick=function(t){
var e=t.event.target||t.event.srcElement;
if(e){
var i=$(e);
if(i.hasClass("js_play_btn")&&!h.previewVideo){
var o,d;
t.win&&t.win.parent&&t.win.parent.document&&(o=a(t.win.parent.document,t.vid)),o&&o.length>0&&(d=o.attr("data-ratio")),
d=n(d),h.previewVideo=!0,$(r({
vid:t.vid,
editFrame:!1,
ratio:d
})).popup({
title:"预览视频",
className:"align_edge wx_video_dialog",
width:"960",
buttons:[{
text:"关闭",
click:function(){
h.previewVideo=!1,this.remove(),setTimeout(function(){
window.__editorIframeSelect(t.win);
},0);
}
}],
close:function(){
h.previewVideo=!1,this.remove(),setTimeout(function(){
window.__editorIframeSelect(t.win);
},0);
}
});
}else!!window.__editorIframeSelect&&window.__editorIframeSelect(t.win);
}
});
}(),w;
});define("common/wx/mpEditor/plugin/img.js",["tpl/mpEditor/plugin/img_popup.html.js","common/wx/media/imageDialog.js","common/wx/mpEditor/plugin/remoteimg.js"],function(t){
"use strict";
var e=t("tpl/mpEditor/plugin/img_popup.html.js"),i=t("common/wx/media/imageDialog.js"),o=t("common/wx/mpEditor/plugin/remoteimg.js"),n=function(t){
t&&t.container&&(this.domid=t.container,this.container=$(t.container).show());
};
return n.beforeSetContent=function(t){
var e=t.html.replace(/<img(.*?)\s+data\-src="/g,'<img$1 src="').replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qlogo.cn/")||"";
return e;
},n.formatHTML=function(t){
var e="300,640";
if(t=UE.utils.isArray(t)?t:[t],t.length){
var i,o=[],n="";
if(i=t[0],1==t.length){
var r=i.format||"";
"gif"==r&&(i.src+="/mmbizgif");
var a=' data-s="'+e+'" ';
i.src&&/\/mmbizgif$/.test(i.src)&&(i.src=i.src.replace(/\/mmbizgif$/,""),a=" "),
a+=r?' data-type="'+r+'" ':"",n="<img "+a+' src="'+i.src+'"'+("undefined"!=typeof i.copyright_status?' data-copyright="'+i.copyright_status+'"':"")+(i.title&&""!=i.title?' title="'+i.title+'"':"")+(i.border&&"0"!=i.border?' border="'+i.border+'"':"")+(i.alt&&""!=i.alt?' alt="'+i.alt+'"':"")+(i.hspace&&"0"!=i.hspace?' hspace = "'+i.hspace+'"':"")+(i.vspace&&"0"!=i.vspace?' vspace = "'+i.vspace+'"':"")+' style="'+(i.width?"width:"+i.width+"px;":"")+(i.height?" height:"+i.height+"px;":"")+("left"==i.floatStyle||"right"==i.floatStyle?"float:"+i.floatStyle+";":"")+'" />',
n="center"==i.floatStyle?'<p style="text-align: center">'+n+"</p>":"<p>"+n+"</p>",
o.push(n);
}else for(var s=0;i=t[s++];){
"gif"==i.format&&(i.src+="/mmbizgif");
var a=' data-s="'+e+'" ';
i.src&&/\/mmbizgif$/.test(i.src)&&(i.src=i.src.replace(/\/mmbizgif$/,""),a=" "),
a+=i.format?' data-type="'+i.format+'" ':"",n="<p "+("center"==i.floatStyle?'style="text-align: center" ':"")+"><img "+a+' src="'+i.src+'" '+("undefined"!=typeof i.copyright_status?' data-copyright="'+i.copyright_status+'"':"")+(i.title&&""!=i.title?' title="'+i.title+'"':"")+(i.border&&"0"!=i.border?' border="'+i.border+'"':"")+(i.alt&&""!=i.alt?' alt="'+i.alt+'"':"")+(i.hspace&&"0"!=i.hspace?' hspace = "'+i.hspace+'"':"")+(i.vspace&&"0"!=i.vspace?' vspace = "'+i.vspace+'"':"")+' style="'+(i.width?"width:"+i.width+"px;":"")+(i.height?" height:"+i.height+"px;":"")+("left"==i.floatStyle||"right"==i.floatStyle?"float:"+i.floatStyle+";":"")+'" /></p>',
o.push(n);
}
return o;
}
},n.prototype={
getName:function(){
return"insertimage";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this;
return function(){
var e=this,o=t.editor;
o&&i({
maxSelect:100,
doselected:!0,
uploadGroupId:3,
completeUploadMinSelectNum:1,
onOK:function(i){
t.doCommand(e,"insertimage",i.map(function(t){
return t.src=t.url,t;
}));
var n=0,r=0;
$.each(i,function(t,e){
"upload"==e.source?n++:r++;
}),n>0&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:39,
val:n,
level:"trace",
content:"[file=media/appmsg_edit]"
}),r>0&&$.post("/misc/jslog?1=1"+wx.data.param,{
id:40,
val:r,
level:"trace",
content:"[file=media/appmsg_edit]"
});
var a=i.length;
a>0&&o.funcPvUvReport("insertimage",a),this.destroy(),document.body.style.overflow=document.documentElement.style.overflow="auto";
},
onHide:function(){
this.destroy(),document.body.style.overflow=document.documentElement.style.overflow="auto";
}
});
};
},
doCommand:function(t,e,i){
if(i){
console.log("insert image");
var o=t,r=n.formatHTML(i);
return o.execCommand("insertHtml",r.join(""));
}
},
getContainer:function(){
return this.domid;
},
getPluginData:function(t){
var e=t.init(),i=e.get("content");
e.set("content",i.replace(/<img(.*?)\s+src="/g,'<img$1 data-src="').replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/"));
},
addListener:function(t){
var e=this,i=t.getUeditor();
t.getBrowser().ie?this._showPopup(t):t.addListener("click",function(e,o){
var n=o.target||o.srcElement;
if(n&&"IMG"==n.tagName&&"false"!=i.body.contentEditable){
var r=new UE.dom.Range(i.document);
r.selectNode(o.target).select(),t.fireEvent("img_selected",o,n);
}
}),t.addListener("get_img_popup_html",function(t,i){
return e._getImgPopupHtml(i);
}),t.addListener("afterpaste",function(t,e,i){
$(i).find(".gif_bg_tips_wrp").each(function(){
$(this).remove();
}),$(i).find(".gif_img_tips_group").each(function(){
$(this).remove();
}),$(i).find(".gif_img_tips").each(function(){
$(this).remove();
}),$(i).find(".load_img_tips").each(function(){
$(this).remove();
}),$(i).find(".load_img_wrp").each(function(){
$(this).remove();
}),$(i).find(".js_img_tips").each(function(){
$(this).remove();
}),$.each(i,function(){
$(this).find("img").each(function(){
var t=$(this).attr("src")||"";
t.indexOf("/s640?")>-1&&t.indexOf("wx_fmt=gif")>-1&&$(this).parent().hasClass("gif_img_wrp")&&$(this).parent().before(this).remove();
}),$(this).hasClass("js_img_tips")&&$(this).remove();
});
}),t.addListener("insertMaterialImg",function(t,o){
return e.doCommand(i,"insertimage",o);
}),t.addListener("afterpasteimg aftersetcontent afterinserthtml afterCropImg",function(e,i,o){
var n=$(t.getDocument()).find("body").width(),r=$(o),a=r.filter("img").add(r.find("img"));
a.each(function(){
var e=$(this);
e.attr("data-ratio")&&e.attr("data-w")||!function(t,e){
var i=new Image,o=t.attr("src");
e.delegateDomAsyn({
dom:t,
timeout:1e4,
requsetFun:function(){
i.onload=this.requsetSucFun,i.onerror=this.requsetFailFun,i.src=o;
},
requsetSucFun:function(t){
if(i){
if(t&&t.newDom){
var e=i.naturalWidth||i.width||0,o=i.naturalHeight||i.height||0;
0!=e&&0!=o&&(t.newDom.attr("data-ratio",o/e),t.newDom.attr("data-w",n==e?"":e));
}
i.onload=null,i.onerror=null,i=null;
}
},
requsetFailFun:function(t){
i&&(t&&t.newDom&&t.newDom.removeAttr("data-ratio").removeAttr("data-w"),i.onload=null,
i.onerror=null,i=null);
}
});
}(e,t);
});
});
},
beforeSetContent:function(t){
return n.beforeSetContent({
html:t
});
},
_showPopup:function(t){
var e=this,i=t.getUeditor();
t.addListener("handle_common_popup",function(t,o){
var n=i.selection.getRange().getClosedNode(),r=e._getImgPopupHtml(n,o);
r&&(o.html+=r,o.node=n);
});
},
_getImgPopupHtml:function(t,i){
var n=$(t),r="";
if(t&&/^img$/i.test(t.tagName)&&!n.hasClass("js_noimgpopup")&&!this._filterPopup(t)){
var a=!1;
"100%"==t.style.width&&"auto"==t.style.height&&(a=!0);
var s=!0,m=o.defaultRemoteImg.replace("http://","").replace("https://","");
(!o.isCdnImg(t.src)||t.src.indexOf(m)>0)&&(s=!1),r=wx.T(e,{
hasCropimg:s,
needBreak:i&&i.html?!0:!1,
hasadapt:a
});
}
return r;
},
_filterPopup:function(t){
if(!t)return!1;
var e=t.src||"";
return/^http(s)?:\/\/res\.wx\.qq\.com\/mpres\/htmledition\/images\/icon\/common\/emotion_panel/.test(e)?!0:/http(s)?:\/\/res\.wx\.qq\.com\/mpres\/zh_CN\/htmledition\/comm_htmledition\/images\/pic\/common\/pic_blank\.gif/.test(e)?!0:void 0;
}
},n;
});define("common/wx/mpEditor/plugin/weapp.js",["common/wx/popup.js","biz_web/ui/checkbox.js","common/wx/media/weappDialog.js","tpl/mpEditor/plugin/link_popup.html.js","common/wx/mpEditor/plugin/img.js"],function(a){
"use strict";
function t(a,t){
var r={};
for(var i in t)r[i]=encodeURIComponent(t[i]);
return a.replace(/\{(.+?)\}/g,function(a,t){
return r[t]||t;
});
}
function r(a,t){
var r=t;
for(var i in t)r[i]=(t[i]||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
return a.format(r);
}
function i(a){
var r=$("<div>"+a+"</div>");
return r.find("mp-miniprogram,mp-weapp").replaceWith(function(){
var a=$(this),r=a.attr("data-miniprogram-appid")||a.attr("data-weapp-appid")||"",i=a.attr("data-miniprogram-title")||a.attr("data-weapp-title")||"",e=a.attr("data-miniprogram-imageUrl")||a.attr("data-weapp-imageUrl")||"",n=a.attr("data-miniprogram-nickname")||a.attr("data-weapp-nickname")||"",p=a.attr("data-miniprogram-avatar")||a.attr("data-weapp-avatar")||"",m=a.attr("data-miniprogram-path")||a.attr("data-weapp-path")||"";
return $('<iframe class="res_iframe weapp_app_iframe js_editor_weapp" frameborder="0">').attr("src",t("/cgi-bin/readtemplate?t=tmpl/weapp_tmpl&title={title}&imageUrl={imageUrl}&avatar={avatar}&nickname={nickname}",{
nickname:n,
avatar:p,
title:i,
imageUrl:e
})).attr("data-miniprogram-appid",r).attr("data-miniprogram-path",m).attr("data-miniprogram-nickname",n).attr("data-miniprogram-avatar",p).attr("data-miniprogram-title",i).attr("data-miniprogram-imageUrl",e);
}),r.find("a.weapp_text_link,a.weapp_image_link").each(function(){
$(this).attr("href",""),$(this).attr("_href","");
}),r.find("span.js_weapp_display_element").remove(),r.html();
}
function e(a){
var t=$("<div>"+a+"</div>");
return t.find("iframe.js_editor_weapp").replaceWith(function(){
var a=$(this),t=a.attr("data-miniprogram-appid"),r=a.attr("data-miniprogram-title"),i=a.attr("data-miniprogram-imageUrl"),e=a.attr("data-miniprogram-nickname"),n=a.attr("data-miniprogram-avatar"),p=a.attr("data-miniprogram-path");
return $("<mp-miniprogram>").attr("class","miniprogram_element").attr("data-miniprogram-appid",t).attr("data-miniprogram-path",p).attr("data-miniprogram-nickname",e).attr("data-miniprogram-avatar",n).attr("data-miniprogram-title",r).attr("data-miniprogram-imageUrl",i);
}),t.html();
}
function n(a){
this.__o={
container:""
},this.editor=null,this.__init(a||{}),a&&a.container&&$(a.container).show(),this.can_use_weapp_card=a.can_use_weapp_card||!1;
}
a("common/wx/popup.js"),a("biz_web/ui/checkbox.js"),a("common/wx/popup.js");
var p=a("common/wx/media/weappDialog.js"),m=a("tpl/mpEditor/plugin/link_popup.html.js"),o=a("common/wx/mpEditor/plugin/img.js");
return n.beforeSetContent=function(a){
if(!a.html)return"";
var t=i(a.html);
return t;
},n.prototype={
getName:function(){
return"insertweapp";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var a=this;
return function(t,r){
var i=a.editor.queryCommandValue("insertweapp"),e={};
if(i){
{
i.getAttribute("data-miniprogram-appid");
}
e={
content:i.innerText,
main_page:i.getAttribute("data-miniprogram-path"),
nick_name:i.getAttribute("data-miniprogram-nickname"),
appid:i.getAttribute("data-miniprogram-appid"),
image:$(i).find("img").attr("src"),
step:r||1
};
}
p.show(e,function(t,i,e){
t&&a.__insert(i,e,4==r);
});
};
},
getContainer:function(){
return this.__o.container;
},
getQueryCommandValue:function(){
var a=this;
return function(){
var t=a.editor;
if(t){
var r,i=t.getSelectionRange(),e=t.getDomUtils();
if(!i.collapsed){
i.shrinkBoundary();
var n=3!=i.startContainer.nodeType&&i.startContainer.childNodes[i.startOffset]?i.startContainer.childNodes[i.startOffset]:i.startContainer,p=3==i.endContainer.nodeType||0==i.endOffset?i.endContainer:i.endContainer.childNodes[i.endOffset-1],m=i.getCommonAncestor();
if(r=e.findParentByTagName(m,"a",!0),!r&&1==m.nodeType)for(var o,d,c,g=m.getElementsByTagName("a"),l=0;c=g[l++];)if(o=e.getPosition(c,n),
d=e.getPosition(c,p),(o&e.POSITION_FOLLOWING||o&e.POSITION_CONTAINS)&&(d&e.POSITION_PRECEDING||d&e.POSITION_CONTAINS)){
r=c;
break;
}
return r;
}
return r=i.startContainer,r=1==r.nodeType?r:r.parentNode,r&&(r=e.findParentByTagName(r,"a",!0))&&!e.isInNodeEndBoundary(i,r)?r:void 0;
}
};
},
addListener:function(a){
a.addListener("beforepaste",function(a,t){
t.html=i(t.html);
}),a.addListener("handle_common_popup",function(t,r){
var i=a.queryCommandValue("insertweapp");
if(i&&-1==(i.href||"").indexOf("javascript:")){
if(!i.getAttribute("data-miniprogram-appid"))return;
var e=i.getAttribute("data-miniprogram-nickname")||"";
e.length>30&&(e=e.substring(0,20)+"..."),r.html+=wx.T(m,{
needBreak:r.html?!0:!1,
url:"javascript:;",
txt:e,
isWeapp:!0
}),r.node=i;
}
});
},
beforeSetContent:function(a){
return n.beforeSetContent({
html:a
});
},
getPluginData:function(a){
var t=a.init(),r=t.get("content");
return r?(r=e(r),t.set("content",r),t):void 0;
},
__init:function(a){
var t=this.__o;
for(var r in a)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]=a[r]);
},
__insert:function(a,i,e){
console.log(a,i);
var n=i.type,p="",m={
appid:a.appid,
nickname:a.nick_name,
avatar:a.pic_url,
title:i.title,
imageUrl:i.imageUrl,
path:i.path,
content:i.content
};
if(m.src=t("/cgi-bin/readtemplate?t=tmpl/weapp_tmpl&title={title}&imageUrl={imageUrl}&avatar={avatar}&nickname={nickname}",m),
"card"==n)p='<p><iframe class="res_iframe weapp_app_iframe js_editor_weapp" frameborder="0" src="{src}" data-miniprogram-appid="{appid}" data-miniprogram-nickname="{nickname}" data-miniprogram-title="{title}" data-miniprogram-imageUrl="{imageUrl}" data-miniprogram-avatar="{avatar}" data-miniprogram-path="{path}"></iframe></p>';else if("text"==n){
if(p='<a class="weapp_text_link" data-miniprogram-appid="{appid}" data-miniprogram-path="{path}" data-miniprogram-nickname="{nickname}" href="">{content}</a>',
e){
var d=this.editor.queryCommandValue("insertweapp");
if(d)return void $(d).replaceWith(function(){
return $(r(p,m));
});
}
}else"image"==n&&(p=o.formatHTML({
src:i.image,
_src:i.image
}).join(""),p=$(p).find("img").get(0).outerHTML,p='<p><a class="weapp_image_link" data-miniprogram-appid="{appid}" data-miniprogram-path="{path}" data-miniprogram-nickname="{nickname}" href="">'+p+"</a></p>");
p=r(p,m);
var c=this.editor,g=c.execCommand("inserthtml",p,!0);
console.log("execCommand",g);
}
},n;
});define("common/wx/mpEditor/plugin/audio_music.js",["common/wx/popup.js","biz_web/ui/checkbox.js","common/wx/media/audioMusicDialog.js","common/wx/Tips.js"],function(i){
"use strict";
function e(i,e){
if(!e){
var t=i.getUeditor();
e=$(t.body);
}
return e.find("iframe.js_editor_audio").length;
}
function t(i){
return i.find("iframe.js_editor_audio").removeAttr("isaac"),i.find("mpvoice").remove(),
i.find(".js_audio_frame").remove(),i.find("qqmusic").addClass("res_iframe qqmusic_iframe js_editor_qqmusic"),
i.find("span.qqmusic_area").remove(),i;
}
function n(i){
this.__o={
container:"",
allowAudio:!1,
allowMusic:!1
},this.editor=null,this.__init(i||{}),i&&i.container&&$(i.container).show();
}
i("common/wx/popup.js"),i("biz_web/ui/checkbox.js");
var o=i("common/wx/media/audioMusicDialog.js"),r=i("common/wx/Tips.js"),a=1;
return n.beforeSetContent=function(i){
if(!i.html)return"";
var e=$("<div>").html(i.html);
return e.find("mpvoice.js_editor_audio").replaceTagName("iframe"),e=t(e),e.find("qqmusic.js_editor_qqmusic").replaceTagName("iframe"),
e.html();
},n.prototype={
getName:function(){
return"insertaudio";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var i=this;
return function(){
var t=i.__o.allowAudio,n=i.__o.allowMusic,m=!1;
if(t&&e(i.editor)>=a){
if(!n)return void r.err("每篇图文消息只能添加一个语音");
m=!0;
}
o.show({
allowAudio:t,
allowMusic:n,
audioDisabled:m,
onOK:function(e){
i.__insert(e);
},
onCancel:function(){}
});
};
},
getContainer:function(){
return this.__o.container;
},
addListener:function(i){
var n=this;
i.addListener("beforepaste",function(i,o){
var m=$("<div></div>").html(o.html),s=m.find("iframe.js_editor_audio").length;
return e(n.editor)+s>a?(r.err("每篇图文消息只能添加一个语音"),o.html="",!0):(m=t(m),m.find("qqmusic.js_editor_qqmusic").replaceTagName("iframe"),
void(o.html=m.html()));
});
},
beforeSetContent:function(i){
return n.beforeSetContent({
html:i
});
},
initPluginData:function(){
return["music_id"];
},
getPluginData:function(i){
var e=i.init(this.initPluginData()),n=e.get("content");
if(n){
var o=$("<div></div>").html(n);
o=t(o),o.find("iframe.js_editor_audio").replaceTagName("mpvoice"),o.find("iframe.js_editor_qqmusic").replaceTagName("qqmusic"),
n=o.html(),e.set("content",n),n=e.get("content");
for(var r=/<qqmusic\s(?:[\s\S]*?)musicid=['"]([\d]*?)['"](?:[\s\S]*?)>/g,a=[],m="",s=null;null!=(s=r.exec(n));)s[1]&&-1==m.indexOf(s[1]+",")&&(a.push(s[1]),
m+=s[1]+",");
return e.set("music_id",a.join(",")),e;
}
},
check:function(i){
return i.find("mpvoice").length>a?(r.err("每篇图文消息只能添加一个语音"),!1):!0;
},
__init:function(i){
var e=this.__o;
for(var t in i)Object.prototype.hasOwnProperty.call(e,t)&&(e[t]=i[t]);
},
__insertAudio:function(i){
i.uri_encoded_name=encodeURIComponent(i.name),i.uri_encoded_title=encodeURIComponent(i.title),
i.title_encode=i.title.html(!0),i.src="/cgi-bin/readtemplate?t=tmpl/audio_tmpl&name={uri_encoded_title}&play_length={duration}".format(i);
var e='<p><iframe frameborder="0" class="res_iframe js_editor_audio audio_iframe" src="{src}" isaac2={is_aac} low_size="{low_size}" source_size="{source_size}" high_size="{high_size}" name="{title_encode}" play_length="{play_length}" voice_encode_fileid="{voice_encode_fileid}"></iframe></p>';
e=e.format(i);
var t=this.editor;
t.execCommand("inserthtml",e,!0),t.funcPvUvReport("insertaudio");
},
__insertMusic:function(i){
var e=i.musicid,t=i.mid,n=i.url,o=i.songname,r=i.albumurl,a=i.singername,m=i.play_length,s=(i.commentid||"",
"/cgi-bin/readtemplate?t=tmpl/qqmusic_tmpl&singer="+encodeURIComponent(a)+"&music_name="+encodeURIComponent(o)),c=['<iframe class="res_iframe qqmusic_iframe js_editor_qqmusic" scrolling="no" frameborder="0"',' musicid="'+e.html(!0)+'"',' mid="'+t.html(!0)+'"',' albumurl="'+r.html(!0)+'"',' audiourl="'+n.html(!0)+'"',' music_name="'+o.html(!0)+'"',' singer="'+a.html(!0)+'" ',' play_length="'+m+'" ',' src="'+s,'"></iframe>'].join(""),u=this.editor;
u.execCommand("inserthtml",c,!0),u.funcPvUvReport("insertmusic");
},
__insert:function(i){
"audio"===i.type?this.__insertAudio(i):this.__insertMusic(i);
}
},n;
});define("common/wx/mpEditor/plugin/templateList.js",["common/wx/media/templateListDialog.js"],function(t){
"use strict";
function n(t){
this._o={
token:""
},this._extend(t),this.editor=null;
}
var e=t("common/wx/media/templateListDialog.js");
return n.prototype={
_extend:function(t){
if(t)for(var n in t)this._o[n]=t[n];
},
getName:function(){
return"templatelist";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var t=this,n=this._o;
return function(){
var o=t.editor;
if(o){
new e({
token:n.token,
onSuccess:function(t){
t&&t.content&&o.insertTemplate(t.content,!0);
}
});
}
};
},
getType:function(){
return 1;
},
getTitle:function(){
return"插入图文模版";
}
},n;
});define("common/wx/mpEditor/plugin/insertTemplate.js",["media/template_common.js","common/wx/media/templateDialog.js","common/wx/Tips.js"],function(e){
"use strict";
function n(e){
this._o={
token:"",
appmsg_template_cnt:0,
can_use_vote:!1,
can_use_card:!1,
biz_uin:"",
can_use_voice:!1,
qqmusic_flag:!1,
can_use_weapp_card:!1,
can_use_txvideo:!1,
can_use_hyperlink:!1,
can_use_appmsg_outer_url:!1,
can_see_ad:!1
},this._extend(e),this.editor=null;
}
var t=e("media/template_common.js"),a=e("common/wx/media/templateDialog.js"),_=e("common/wx/Tips.js");
return n.prototype={
_extend:function(e){
for(var n in e)this._o[n]=e[n];
},
getName:function(){
return"inserttemplate";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this,n=this._o;
return function(){
var c=e.editor;
if(c){
if(t.maxTemplateNum-n.appmsg_template_cnt<=0)return void _.err("最多只能添加%s个模版".sprintf(t.maxTemplateNum));
var o=this,i="",s=o.selection.getRange().cloneContents();
if(s){
var u=document.createElement("div");
u.appendChild(s),i=u.innerHTML;
}
new a({
content:i,
formatContent:!1,
can_use_txvideo:n.can_use_txvideo,
can_use_hyperlink:n.can_use_hyperlink,
can_use_appmsg_outer_url:n.can_use_appmsg_outer_url,
can_use_vote:n.can_use_vote,
can_use_card:n.can_use_card,
biz_uin:n.biz_uin,
can_use_voice:n.can_use_voice,
qqmusic_flag:n.qqmusic_flag,
can_use_weapp_card:n.can_use_weapp_card,
can_see_ad:n.can_see_ad,
token:n.token,
onSuccess:function(){}
});
}
};
},
getType:function(){
return 1;
},
getTitle:function(){
return"添加图文模版";
}
},n;
});define("common/wx/mpEditor/plugin/emotion.js",["common/wx/mpEditor/plugin/emotionButton.js"],function(t){
"use strict";
function e(){
this.__o={},this.editor=null;
}
var n=(t("common/wx/mpEditor/plugin/emotionButton.js"),{
defaultImg:"https://res.wx.qq.com/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"
});
return e.beforeSetContent=function(t){
return t.html;
},e.prototype={
getName:function(){
return"mpemotion";
},
noCommandReprot:function(){
return!0;
},
beforeSetContent:function(t){
return e.beforeSetContent({
html:t
});
},
getExecCommand:function(){
var t=this;
return function(e,n){
var o=t.editor;
if(o&&n&&n.name){
var i=o.execCommand("insertHtml",t.formatHtml(n.name)),r=$(i[0]),m=r.css("backgroundImage").match(/url\(([^\)]+)\)/);
if(m&&m[1]){
m=m[1].replace(/^['"]|['"]$/g,"");
var a=6;
/^http(s)?:\/\/.+\.mp.weixin.qq.com(\:\d+)?/.test(m)&&(a=0),m=m.replace(/^http(s)?:\/\/.*\.mp.weixin.qq.com(\:\d+)?/,"https://res.wx.qq.com"),
m=m.split(".");
var c=m[m.length-2];
m[m.length-2]=c.substring(0,c.length-a),r.removeAttr("class").removeAttr("_src").attr({
src:m.join("."),
style:"display:inline-block;width:20px;vertical-align:text-bottom;"
});
}
}
};
},
getType:function(){
return 1;
},
getTitle:function(){
return"表情";
},
formatHtml:function(t){
return'<img class="'+t+'" src="'+n.defaultImg+'" data-ratio="1" data-w="20" style="width:20px;height:20px;vertical-align:middle;display:inline-block;-webkit-background-size:20px auto;background-size:20px auto;" />';
},
initToolBar:function(t){
var e=t.getUi(),n=this.getTitle(),o=this.getName();
e[o]=function(t){
return function(o){
var i=new e.EmotionButton({
useArrow:!1,
title:n,
editor:o,
_onEmotionSelect:function(t){
o.execCommand("mpemotion",t);
}
});
return e.buttons[t]=i,o.addListener("selectionchange",function(){
i.setDisabled(-1==o.queryCommandState(t));
}),i;
};
}(o);
}
},e;
});define("common/wx/mpEditor/plugin/unlink.js",[],function(){
"use strict";
function t(){
this.editor=null,this.__g={
name:"unlink",
title:"取消超链接"
};
}
return t.beforeSetContent=function(t){
return t.html;
},t.prototype={
getName:function(){
return this.__g.name;
},
getExecCommand:function(){
var t=this;
return function(){
if(t.editor){
var e,n=t.editor,i=n.getSelectionRange(),r=n.getDomUtils();
(!i.collapsed||r.findParentByTagName(i.startContainer,"a",!0))&&(e=i.createBookmark(),
n.fireEvent("link_optimize",i),i.removeInlineStyle("a").moveToBookmark(e).select());
}
};
},
beforeSetContent:function(e){
return t.beforeSetContent({
html:e
});
},
getType:function(){
return 1;
},
getTitle:function(){
return this.__g.title;
},
getQueryCommandState:function(){
var t=this;
return function(){
var e=t.editor;
return e&&!e.isHighlight()&&e.queryCommandValue("link")?0:-1;
};
},
getContextMenu:function(){
var t=this.__g,e={
label:t.title,
cmdName:t.name
};
return e;
}
},t;
});define("common/wx/mpEditor/plugin/link.js",["common/wx/popup.js","biz_web/ui/checkbox.js","biz_common/jquery.validate.js","common/wx/Cgi.js","tpl/mpEditor/plugin/link_dialog.html.js","tpl/mpEditor/plugin/link_appmsg.html.js","tpl/mpEditor/plugin/link_acc_item.html.js","tpl/mpEditor/plugin/link_popup.html.js","biz_common/moment.js","common/wx/Tips.js","common/wx/popover.js","common/wx/ban.js","common/wx/pagebar.js"],function(e){
"use strict";
function t(e){
this.editor=null,this.__g={
dom:{},
form:{},
canWriteBack:!1,
articlePerPage:5,
accPerPage:5,
can_use_hyperlink:e.can_use_hyperlink,
can_use_appmsg_outer_url:e.can_use_appmsg_outer_url
},i.addMethod("inner_link",function(e){
return/^https?:\/\/mp.weixin.qq.com\//.test(e)?!0:!1;
},"请输入公众号文章链接"),i.addMethod("temp_link",function(e){
return/^https?\:\/\/mp\.weixin\.qq\.com\/.*[\?&]tempkey=/.test(e)?!1:!0;
},"不能输入公众号文章的预览链接");
}
e("common/wx/popup.js"),e("biz_web/ui/checkbox.js");
var i=e("biz_common/jquery.validate.js"),a=e("common/wx/Cgi.js"),n=e("tpl/mpEditor/plugin/link_dialog.html.js"),r=e("tpl/mpEditor/plugin/link_appmsg.html.js"),c=e("tpl/mpEditor/plugin/link_acc_item.html.js"),s=e("tpl/mpEditor/plugin/link_popup.html.js"),o=e("biz_common/moment.js"),l=e("common/wx/Tips.js"),_=(e("common/wx/popover.js"),
e("common/wx/ban.js")),d=e("common/wx/pagebar.js"),u={
service_type:{
0:"订阅号",
1:"订阅号",
2:"服务号",
"-1":"服务号"
}
};
return t.beforeSetContent=function(e){
return e.html;
},t.prototype={
getName:function(){
return"link";
},
noCommandReprot:function(){
return!0;
},
getExecCommand:function(){
var e=this;
return function(){
e.editor&&e.__openDialog();
};
},
addListener:function(e){
var t=this;
e.addListener("link_optimize",function(e,i){
t.__optimize(i);
}),e.addListener("handle_common_popup",function(t,i){
var a,n=e.queryCommandValue("link",i.node||null);
if(n&&(a=n.getAttribute("_href")||n.getAttribute("href",2))){
var r=a;
a.length>30&&(r=a.substring(0,20)+"..."),i.html+=wx.T(s,{
needBreak:i.html?!0:!1,
url:a,
txt:r
}),i.node=n;
}
});
},
beforeSetContent:function(e){
return t.beforeSetContent({
html:e
});
},
getType:function(){
return 1;
},
getTitle:function(){
return"超链接";
},
getQueryCommandState:function(){
var e=this;
return function(){
var t=e.editor;
if(!t)return 0;
var i=t.getSelectionRange().getClosedNode(),a=i&&"edui-faked-video"==i.className;
return a?-1:0;
};
},
getQueryCommandValue:function(){
var e=this;
return function(t,i){
var a=e.editor;
if(a){
var n,r,c=a.getDomUtils();
if(i||(n=a.getSelectionRange()),n&&n.collapsed){
if(r=n.startContainer,r=1==r.nodeType?r:r.parentNode,r&&(r=c.findParentByTagName(r,"a",!0))&&!c.isInNodeEndBoundary(n,r))return r;
}else{
if(n){
n.shrinkBoundary();
var s=3!=n.startContainer.nodeType&&n.startContainer.childNodes[n.startOffset]?n.startContainer.childNodes[n.startOffset]:n.startContainer,o=3==n.endContainer.nodeType||0==n.endOffset?n.endContainer:n.endContainer.childNodes[n.endOffset-1],l=n.getCommonAncestor();
if(r=c.findParentByTagName(l,"a",!0),!r&&1==l.nodeType)for(var _,d,u,p=l.getElementsByTagName("a"),h=0;u=p[h++];)if(_=c.getPosition(u,s),
d=c.getPosition(u,o),(_&c.POSITION_FOLLOWING||_&c.POSITION_CONTAINS)&&(d&c.POSITION_PRECEDING||d&c.POSITION_CONTAINS)){
r=u;
break;
}
return r;
}
if(i){
if(r=c.findParentByTagName(i,"a",!0),!r&&1==i.nodeType){
var p=i.getElementsByTagName("a");
if(p&&p[0])return p[0];
}
return r;
}
}
}
};
},
__openDialog:function(){
this.__DialogInit(),this.__initDialogData(),this.__DialogEvent();
},
__DialogEvent:function(){
{
var e=this,t=this.__g,i=t.dom,a=t._linkDialog;
t._perPage;
}
i.$innerMain.find("input[name=link_type][type=radio]").checkbox({
onChanged:function(e){
var t=e.val();
i.$innerMain.find(".js_link_type").hide(),i.$innerMain.find(".js_link_type_"+t).show(),
a.popup("resetPosition");
}
}),t.form=i.$dialogDom.find("#myform").validate({
rules:{
innerLink:{
required:function(){
return i.$innerTabItem.hasClass("selected")&&i.$innerMain.find("input[name=link_type][type=radio][value=1]").prop("checked")?!0:!1;
},
url:!0,
inner_link:!0,
temp_link:!0
},
outerLink:{
required:function(){
return i.$outerTabItem.hasClass("selected")?!0:!1;
},
url:!0
},
outerTitle:{
required:function(){
return i.$outerTabItem.hasClass("selected")?!0:!1;
}
},
innerTitle:{
required:function(){
return i.$innerTabItem.hasClass("selected")?!0:!1;
}
}
},
messages:{
innerLink:{
required:"链接地址不能为空",
url:"请输入公众号文章链接，且必须以http://或https://开头",
inner_link:"请输入公众号文章链接，且必须以http://或https://开头",
temp_link:"不能输入公众号文章的预览链接"
},
outerLink:{
required:"链接地址不能为空",
url:"请输入有效的链接(必须以http://或https://开头)"
},
outerTitle:{
required:"请输入链接标题"
},
innerTitle:{
required:"请输入链接标题"
}
}
}),i.$tabMain.on("click",".js_tab_item",function(){
var e=$(this),a=e.data("tab");
"inner"==a?(i.$innerTabItem.addClass("selected"),i.$outerTabItem.removeClass("selected"),
i.$innerMain.show(),i.$outerMain.hide(),t._linkDialog.popup("resetPosition")):(i.$innerTabItem.removeClass("selected"),
i.$outerTabItem.addClass("selected"),i.$innerMain.hide(),i.$outerMain.show(),t._linkDialog.popup("resetPosition"));
}),i.$jsSelfAcc.click(function(){
e.__selectAcc({
nickname:wx.data.nick_name||wx.data.user_name||"",
fakeid:""
});
}),i.$dialogDom.find(".js_reset_acc").click(function(){
e.__resetAcc();
}),i.$accSearchDel.click(function(){
$(this).hide(),e.__resetAcc();
}),i.$accSearchInput.keyup(function(t){
i.$accSearchInput.val().trim()?i.$accSearchDel.show():(i.$accSearchDel.hide(),e.__resetAcc());
var a=t.keyCode||t.which||0;
13==a&&i.$accSearchBtn.trigger("click");
}),i.$accSearchBtn.click(function(){
var t=i.$accSearchInput.val().trim();
t&&e.__searchAcc(t);
}),i.$articleSearchDel.click(function(){
$(this).hide(),e.__resetArticle();
}),i.$articleSearchInput.keyup(function(t){
i.$articleSearchInput.val().trim()?i.$articleSearchDel.show():(i.$articleSearchDel.hide(),
e.__resetArticle());
var a=t.keyCode||t.which||0;
13==a&&i.$articleSearchBtn.trigger("click");
}),i.$articleSearchBtn.click(function(){
var t=i.$articleSearchInput.val().trim()||"";
e.__searchArticle(t);
}),i.$accList.on("click",".js_acc_item",function(){
var t=$(this),i=t.data("fakeid"),a=t.data("nickname");
e.__selectAcc({
fakeid:i,
nickname:a
});
});
},
__searchAcc:function(e){
var t=this.__g.dom;
t.$accSearchTips.hide(),t.$jsSelfAcc.parent().hide(),this.__getAccList({
searchKey:e,
page:0
});
},
__searchArticle:function(e){
this.__getArticleList({
searchKey:e,
page:0
});
},
__checkAccLoading:function(e){
return this.__g["getting_"+e+"_data"];
},
__showLoading:function(e){
var t=this.__g,i=t.dom;
t["getting_"+e+"_data"]=!0,i["$"+e+"Content"].show(),i["$"+e+"Loading"].show(),i["$"+e+"List"].hide(),
i["$"+e+"Pagebar"].hide();
},
__hideLoading:function(e){
var t=this.__g,i=t.dom;
t["getting_"+e+"_data"]=!1,i["$"+e+"Loading"].hide();
},
__getArticleList:function(e){
var t=this,i=this.__g;
t.__checkAccLoading("article")!==!0&&(t.__showLoading("article"),e.searchKey=e.searchKey||"",
a.get({
url:"/cgi-bin/appmsg",
data:{
action:"list_ex",
begin:e.page*i.articlePerPage,
count:i.articlePerPage,
query:e.searchKey,
fakeid:i.currentFakeid||"",
type:9
},
mask:!1
},{
done:function(a){
if(i._linkDialog)if(t.__hideLoading("article"),a&&a.base_resp&&0==a.base_resp.ret)t.__renderArticleList({
code:0,
list:a.app_msg_list||[],
total:1*a.app_msg_cnt,
page:e.page,
searchKey:e.searchKey
});else{
var n="";
a&&a.base_resp&&200013==a.base_resp.ret&&(n="操作太频繁，请稍后再试"),t.__renderArticleList({
code:-1,
msg:n,
searchKey:e.searchKey
});
}
},
fail:function(){
i._linkDialog&&(t.__hideLoading("article"),t.__renderArticleList({
code:-1,
searchKey:e.searchKey
}));
}
}));
},
__getAccList:function(e){
var t=this,i=this.__g;
e.searchKey&&t.__checkAccLoading("acc")!==!0&&(t.__showLoading("acc"),a.get({
url:"/cgi-bin/searchbiz?action=search_biz",
data:{
query:e.searchKey,
begin:e.page*i.accPerPage,
count:i.accPerPage
},
mask:!1
},{
done:function(a){
if(i._linkDialog)if(t.__hideLoading("acc"),a&&a.base_resp&&0==a.base_resp.ret)t.__renderAccList({
code:0,
list:a.list||[],
total:1*a.total,
page:e.page,
searchKey:e.searchKey
});else{
var n="";
a&&a.base_resp&&200013==a.base_resp.ret&&(n="操作太频繁，请稍后再试"),t.__renderAccList({
code:-1,
msg:n,
searchKey:e.searchKey
});
}
},
fail:function(){
i._linkDialog&&(t.__hideLoading("acc"),t.__renderAccList({
code:-1,
searchKey:e.searchKey
}));
}
}));
},
__renderArticleList:function(e){
var t=this.__g,i=t.dom;
t._linkDialog&&(0==e.code||e.msg?0!=e.code||e.list&&0!=e.list.length||e.msg||(e.msg="暂无搜索结果"):e.msg="系统繁忙，请稍后再试",
t.curArticleList=e.list||[],t.selectedArticle=void 0,t.curArticleList.each(function(e){
e.update_time_str=o.unix(e.update_time).format("YYYY-MM-DD"),e.link=$.trim(e.link.replace("#rd","&scene=21#wechat_redirect")),
e.title=$.trim(e.title||"无标题");
}),i.$articleList.html(template.compile(r)({
list:t.curArticleList,
service_type:u.service_type,
msg:e.msg
})).show(),i.$articleLoading.hide(),t.curArticleList.length>0&&i.$articleList.on("click",".js_article_i",function(){
var e=$(this);
i.$articleList.find(".js_article_label.selected").removeClass("selected").find("input[type=radio]").attr("checked",!1).prop("checked",!1),
e.parents(".js_article_label").addClass("selected").find("input[type=radio]").attr("checked",!0).prop("checked",!0),
t.selectedArticle=e.data("index");
}),0==e.code&&e.total>0&&"undefined"!=typeof e.page?this.__initPageBar({
type:"article",
curPage:e.page+1,
total:e.total,
searchKey:e.searchKey
}):i.$accPagebar.hide(),t._linkDialog.popup("resetPosition"));
},
__renderAccList:function(e){
var t=this.__g,i=t.dom;
t._linkDialog&&(0==e.code||e.msg?0!=e.code||e.list&&0!=e.list.length||e.msg||(e.msg="不存在该公众号"):e.msg="系统繁忙，请稍后再试",
e.msg?(i.$accSearchTips.show().find("span").text(e.msg),i.$accContent.hide()):(i.$accSearchTips.hide(),
i.$accContent.show(),i.$accList.html(template.compile(c)({
list:e.list,
service_type:u.service_type
})).show()),i.$accLoading.hide(),0==e.code&&e.total>0&&"undefined"!=typeof e.page?this.__initPageBar({
type:"acc",
curPage:e.page+1,
total:e.total,
searchKey:e.searchKey
}):i.$accPagebar.hide(),t._linkDialog.popup("resetPosition"));
},
__initPageBar:function(e){
var t=this,i=this.__g,a=i.dom,n=e.type+"_pagebar";
i[n]&&i[n].destroy(),i[n]=new d({
container:a["$"+e.type+"Pagebar"],
perPage:i[e.type+"PerPage"],
initShowPage:e.curPage,
totalItemsNum:Math.min(e.total,2e3),
first:!1,
last:!1,
isSimple:!0,
callback:function(i){
var a=e.type.substr(0,1).toUpperCase()+e.type.substr(1);
t["__get"+a+"List"]({
searchKey:e.searchKey,
page:1*i.currentPage-1
});
}
});
},
__resetArticle:function(){
var e=this.__g.dom;
e.$articleSearchInput.val("");
},
__resetAcc:function(){
var e=this.__g,t=e.dom;
e.currentFakeid="",e.curArticleList=[],e.selectedArticle=void 0,t.$accText.html(""),
t.$accDesc.hide(),t.$accSearchInput.val(""),t.$accSearchTips.hide().find("span").text(""),
t.$accSearchMain.show().parents(".frm_control_group").removeClass("show_value"),
t.$jsSelfAcc.parent().show(),t.$accContent.hide(),t.$articleContent.hide(),e._linkDialog.popup("resetPosition");
},
__selectAcc:function(e){
this.__g.currentFakeid=e.fakeid||"";
var t=this.__g.dom;
t.$accSearchMain.hide().parents(".frm_control_group").addClass("show_value"),t.$jsSelfAcc.parent().hide(),
t.$accContent.hide(),t.$accText.html((e.nickname||"").html(!0)),t.$accDesc.show(),
t.$articleContent.show(),t.$articleList.hide(),t.$articlePagebar.hide(),this.__resetArticle(),
this.__getArticleList({
searchKey:"",
page:0
});
},
__initDialogData:function(){
var e=this.__g,t=e.dom,i=(e._linkDialog,this.editor),a=i.getDomUtils(),n=i.getSelectionRange(),r=n.collapsed?i.queryCommandValue("link"):i.getSelectionStart();
if(e.tempLinkWarn=!0,e.getting_acc_data=!1,e.getting_article_data=!1,r){
a.findParentByTagName(r,"a",!0)&&(r=a.findParentByTagName(r,"a",!0));
var c=r.text||"你已选中了添加链接的文本内容";
t.$outerTitle.val(c).attr("disabled",!0).parent().addClass("disabled"),t.$innerTitle.val(c).attr("disabled",!0).parent().addClass("disabled"),
t.$outerLinkInput.val(r.href||"http://"),t.$innerLinkInput.val(r.href||"http://"),
e.canWriteBack=!1;
}else e.canWriteBack=!0;
if(window.wx&&window.wx.cgiData&&"undefined"!=typeof window.wx.cgiData.func_ban_info&&!_(wx.cgiData.func_ban_info,"outer-url")){
var s,o=18;
$.each(wx.cgiData.func_ban_info,function(e,t){
return t.func_id==o?(s=t,!1):void 0;
});
var l=_.getReason(s.reason_id),d='你的帐号<a target="_blank" href="'+(l.pc_url?l.pc_url:defaultReason.pc_url)+'">'+l.reason_description+"</a>，",u=new Date(1e3*s.unlock_time);
s.ban_time==s.unlock_time?d+="已被永久屏蔽图文消息外链功能。":(d+="已被屏蔽图文消息外链功能至",d+=u.getFullYear()+"/"+(u.getMonth()+1)+"/"+u.getDate(),
d+="，期间图文消息外链功能将不可用。"),t.$outerLinkInput.attr("disabled",!0).parent().addClass("disabled"),
t.$ok.disable(),t.$warnTips.show().find(".js_tips").html(d);
}
e._linkDialog.popup("show");
},
__destroy:function(){
var e=this.__g;
e._linkDialog&&(e._linkDialog.popup("remove"),e._linkDialog=null),this._popover&&(this._popover.remove(),
this._popover=null),e.acc_pagebar&&(e.acc_pagebar.destroy(),e.acc_pagebar=null),
e.article_pagebar&&(e.article_pagebar.destroy(),e.article_pagebar=null),e.dom={},
e.form={},e.currentFakeid="",e.selectedArticle=void 0,e.curArticleList=[];
},
__DialogInit:function(){
var e=this,t=this.__g,i=wx.T(n,{
flag:t.can_use_hyperlink&&0!=t.can_use_appmsg_outer_url
});
t._linkDialog=$(i).popup({
title:"编辑超链接",
className:"align_edge link_dialog_wrap",
width:"800",
autoShow:!1,
buttons:[{
text:"确定",
type:"primary",
click:function(){
t._linkDialog;
if(e.__checkAccLoading("acc")!==!0&&e.__checkAccLoading("article")!==!0){
if(!t.form.form())return void l.err("请完善表单内容");
if(t.dom.$innerTabItem.hasClass("selected")){
var i;
if(t.dom.$innerMain.find("input[name=link_type][type=radio][value=1]").prop("checked"))i={
href:t.dom.$innerLinkInput.val().trim(),
target:"_blank"
},t.canWriteBack&&(i.textValue=t.dom.$innerTitle.val().trim());else{
if(!t.curArticleList||0==t.curArticleList.length)return void l.err("请搜索公众号文章");
if("undefined"==typeof t.selectedArticle||!t.curArticleList[t.selectedArticle])return void l.err("请选择公众号文章");
var a=t.curArticleList[t.selectedArticle];
i={
href:a.link,
target:"_blank"
},t.canWriteBack&&(i.textValue=a.title.replace(/<em>/g,"").replace(/<\/em>/g,""));
}
i&&e.__insertLink(i);
}else t.dom.$outerTabItem.hasClass("selected")&&(i={
href:t.dom.$outerLinkInput.val().trim(),
target:"_blank"
},t.canWriteBack&&(i.textValue=t.dom.$outerTitle.val().trim()),e.__insertLink(i));
e.__destroy();
}
}
},{
text:"取消",
click:function(){
e.__destroy();
}
}],
onHide:function(){
e.__destroy();
}
});
var a=t._linkDialog.popup("get");
t.dom={
$dialogDom:a,
$ok:a.find(".js_btn").eq(0),
$tabMain:a.find(".js_tab_main"),
$innerTabItem:a.find(".js_tab_item[data-tab=inner]"),
$outerTabItem:a.find(".js_tab_item[data-tab=outer]"),
$innerMain:a.find(".js_inner_main"),
$outerMain:a.find(".js_outer_main"),
$accPagebar:a.find(".js_acc_pagebar"),
$articlePagebar:a.find(".js_article_pagebar"),
$accLoading:a.find(".js_acc_loading"),
$articleLoading:a.find(".js_article_loading"),
$articleContent:a.find(".js_article_content"),
$accContent:a.find(".js_acc_content"),
$articleList:a.find(".js_article_list"),
$accList:a.find(".js_acc_list"),
$warnTips:a.find(".js_warn_tips"),
$outerTitle:a.find(".js_outer_title"),
$innerTitle:a.find(".js_inner_title"),
$innerLinkInput:a.find(".js_inner_link_input"),
$outerLinkInput:a.find(".js_outer_link_input"),
$accSearchMain:a.find(".js_acc_search_main"),
$jsSelfAcc:a.find(".js_self_acc"),
$accSearchBtn:a.find(".js_acc_search_btn"),
$accSearchDel:a.find(".js_acc_search_del"),
$accSearchInput:a.find(".js_acc_search_input"),
$accSearchTips:a.find(".js_acc_search_tips"),
$articleSearchBtn:a.find(".js_article_search_btn"),
$articleSearchDel:a.find(".js_article_search_del"),
$articleSearchInput:a.find(".js_article_search_input"),
$accDesc:a.find(".js_acc_desc"),
$accText:a.find(".js_acc_Text")
};
},
__insertLink:function(e){
var t,i=this.editor,a=i.getUtils();
i.fireEvent("funcPvUvReport","link"),e._href&&(e._href=a.unhtml(e._href,/[<">]/g)),
e.href&&(e.href=a.unhtml(e.href,/[<">]/g)),e.textValue&&(e.textValue=a.unhtml(e.textValue,/[<">]/g)),
this.__doLink(t=i.getSelectionRange(),e),t.collapse().select(!0);
},
__optimize:function(e){
var t=this.editor.getDomUtils(),i=e.startContainer,a=e.endContainer;
(i=t.findParentByTagName(i,"a",!0))&&e.setStartBefore(i),(a=t.findParentByTagName(a,"a",!0))&&e.setEndAfter(a);
},
__doLink:function(e,t){
var i=this.editor,a=e.cloneRange(),n=i.getBrowser(),r=i.getDomUtils(),c=i.queryCommandValue("link"),s=i.getUtils();
this.__optimize(e=e.adjustmentBoundary());
var o=e.startContainer;
if(1==o.nodeType&&c&&(o=o.childNodes[e.startOffset],o&&1==o.nodeType&&"A"==o.tagName&&/^(?:https?|ftp|file)\s*:\s*\/\//.test(o[n.ie?"innerText":"textContent"])&&(o[n.ie?"innerText":"textContent"]=s.html(t.textValue||t.href))),
(!a.collapsed||c)&&(e.removeInlineStyle("a"),a=e.cloneRange()),a.collapsed){
var l=e.document.createElement("a"),_="";
t.textValue?(_=s.html(t.textValue),delete t.textValue):_=s.html(t.href),r.setAttributes(l,t),
o=r.findParentByTagName(a.startContainer,"a",!0),o&&r.isInNodeEndBoundary(a,o)&&e.setStartAfter(o).collapse(!0),
l[n.ie?"innerText":"textContent"]=_,e.insertNode(l).selectNode(l);
}else e.applyInlineStyle("a",t);
}
},t;
});