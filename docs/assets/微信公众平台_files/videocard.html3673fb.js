define("tpl/media/sharecopyright_dialog.html.js",[],function(){
return'<div class="share_appmsg_dialog">\n    <div class="frm_control_group share_appmsg_search_form">\n        <label for="" class="frm_label">\n            查找文章        </label>\n        <div class="frm_controls">\n            <div class="search_wrapper">\n                <span class="frm_input_box search with_del append ">\n                    <a class="del_btn js_search_del" href="javascript:" style="display: none;">\n                        <i class="icon_search_del"></i>&nbsp;\n                    </a>\n                    <a href="javascript:void(0);" class="js_search_btn frm_input_append">\n                        <i class="icon16_common search_gray">\n                            搜索\n                        </i>\n                        &nbsp;\n                    </a>\n                    <input type="text" class="js_search_input frm_input" placeholder="输入原创文章链接/标题/关键字，按回车查找">\n                </span>\n            </div>\n            <p class="frm_tips mini_tips icon_after">只能分享成功声明原创的文章链接<span class="js_tooltips" data-tips=\'原创特指自己写的、独立完成创作的作品。公众平台鼓励用户发表原创文章，平台会对原创声明的文章在群发后进行审核，审核通过后文章会被标识为原创文章。\'><i class="icon_msg_mini ask"></i></span></p>\n            <p class="js_tips_main frm_msg fail">\n                <span class="js_search_tips frm_msg_content"></span>\n            </p>\n        </div>\n    </div>\n\n    <div class="share_article_area">\n        <div style="display:none;" class="share_article_loading js_loading">\n            <i class="icon_loading_small white"></i>\n            <span class="vm_box"></span>\n        </div>\n        <div class="js_article_content share_article_list"></div>\n    </div>\n    <div class="pagination_wrp js_pagebar"></div>\n</div>\n';
});define("tpl/media/appmsg_edit/previewDialog.html.js",[],function(){
return'<div class="js_preview_dialog_content simple_dialog_content send_preview">\n    <div class="preview_form_box">\n        <form class="form"  onSubmit="return false;">\n            <div class="frm_control_group">\n                <label class="frm_label">关注公众号后，才能接收图文消息预览</label>\n                <span class="frm_input_box">\n                    <input type="text" class="frm_input jsAccountInput" placeholder="请输入微信号/QQ号/手机号"/>\n                </span>\n                <p class="frm_tips">预览功能仅用于公众号查看文章效果，不适用于公众传播，预览链接会在短期内失效                </p>\n                <p class="frm_msg fail jsAccountFail" style="display:none"></p>\n            </div>\n            {if accounts.length>0}\n            <div class="user_list jsAccountList">\n            {each accounts as o i}\n                <div class="user jsAccount" data-value="{o}">\n                    {o}\n                    <a href="javascript:;" class="opt jsAccountDel" data-index="{i}">x</a>\n                </div>\n            {/each}\n            </div>\n            {/if}\n        </form>\n    </div>\n    <div class="preview_qrcheck_box">\n        <img class="preview_qrcheck_img" src="/misc/getqrcode?fakeid={uin}&token={token}&style=1">\n        <p>扫描关注{nickname}</p>\n    </div>\n</div>';
});define("tpl/mpEditor/plugin/crop_img.html.js",[],function(){
return'<div class="js_crop_img_wrap img_edit_area" style="position:absolute">\n  <div class="js_crop_area img_edit_wrp" style="overflow:hidden;">\n    <div class="js_img_scale_cover" style="position:absolute;background-color: #fff;" draggable="false">\n    </div>\n    <img src="{url}">\n    <div class="js_img_scale edui-editor-imagescale img_edit_scale" draggable="false" style="display:block;z-index:500;">\n      <span draggable="false" class="edui-editor-imagescale-hand0"></span>\n      <span draggable="false" class="edui-editor-imagescale-hand2"></span>\n      <span draggable="false" class="edui-editor-imagescale-hand5"></span>\n      <span draggable="false" class="edui-editor-imagescale-hand7"></span>\n    </div>\n  </div>\n  <div class="js_tool_bar img_edit_toolbar" style="z-index:{zIndex}">    \n    <div class="weui-slider-box">\n      <div class="weui-slider">\n        <div class="js_drag_bar weui-slider__inner">\n          <div style="width: 0%;" class="js_progress weui-slider__track"></div>\n          <div style="left: 0%;" class="js_dot weui-slider__handler__wrp">\n            <div class="weui-slider__handler"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <a class="js_ok btn btn_primary" href="javascript:;">完成</a>\n    <a class="js_cancel btn btn_default" href="javascript:;">放弃裁剪</a>\n  </div>\n</div>\n';
});define("common/wx/mpEditor/plugin/wheelEventAdapter.js",[],function(){
"use strict";
function e(){
if(r.isIe){
var e=window.navigator.userAgent.toLowerCase(),t=e.match(/(?:msie\s([\w.]+))/),o=e.match(/(?:trident.*rv:([\w.]+))/),n=0;
n=t&&o&&t[1]&&o[1]?Math.max(1*t[1],1*o[1]):t&&t[1]?1*t[1]:o&&o[1]?1*o[1]:0,r.ieVersion=n;
}
try{
return new WheelEvent("wheel"),void(r.support="wheel");
}catch(i){}
if(void 0!==document.onmousewheel)return void(r.support="mousewheel");
try{
return document.createEvent("MouseScrollEvents"),void(r.support="DOMMouseScroll");
}catch(i){}
}
function t(e){
var t={
myDeltaY:void 0,
myWheel:void 0
};
return e=e||window.event,"deltaY"in e?(t.myDeltaY=e.deltaY,t.myWheel=e.deltaY/Math.abs(e.deltaY),
t):"wheelDelta"in e?(t.myWheel=-1*e.wheelDelta/Math.abs(e.wheelDelta),(window.opera&&opera.version()<10||r.isIe&&r.ieVersion<=9)&&(t.myWheel=-1*e.myWheel),
t):"detail"in e?(t.myWheel=-1*e.detail/Math.abs(e.detail),t):t;
}
var r={
support:"",
isIe:/(msie\s|trident.*rv:)([\w.]+)/.test(window.navigator.userAgent.toLowerCase()),
ieVersion:0
};
return e(),{
supportEvent:r.support,
eventAdapter:t
};
});define("common/wx/mpEditor/zh_CN.js",["common/wx/mpEditor/editor_all_min.js"],function(e){
"use strict";
e("common/wx/mpEditor/editor_all_min.js"),UE.I18N.zh_CN={
labelMap:{
anchor:"锚点",
undo:"撤销",
redo:"重做",
bold:"加粗",
indent:"首行缩进",
snapscreen:"截图",
italic:"斜体",
underline:"下划线",
strikethrough:"删除线",
subscript:"下标",
fontborder:"字符边框",
superscript:"上标",
formatmatch:"格式刷",
source:"源代码",
blockquote:"引用",
pasteplain:"纯文本粘贴模式",
selectall:"全选",
print:"打印",
preview:"预览",
horizontal:"分隔线",
removeformat:"清除格式",
time:"时间",
date:"日期",
insertrow:"前插入行",
insertcol:"前插入列",
mergeright:"右合并单元格",
mergedown:"下合并单元格",
deleterow:"删除行",
deletecol:"删除列",
splittorows:"拆分成行",
splittocols:"拆分成列",
splittocells:"完全拆分单元格",
mergecells:"合并多个单元格",
deletetable:"删除表格",
cleardoc:"清空文档",
insertparagraphbeforetable:"表格前插入行",
insertcode:"代码语言",
fontfamily:"字体",
fontsize:"字号 10~36px",
letterspacing:"字间距",
justifyindent:"两端缩进",
paragraph:"段落格式",
edittable:"表格属性",
edittd:"单元格属性",
emotion:"表情",
spechars:"特殊字符",
searchreplace:"查询替换",
map:"Baidu地图",
gmap:"Google地图",
insertvideo:"视频",
help:"帮助",
justifyleft:"居左对齐",
justifyright:"居右对齐",
justifycenter:"居中对齐",
justifyjustify:"两端对齐",
forecolor:"字体颜色",
backcolor:"背景色",
insertorderedlist:"有序列表",
insertunorderedlist:"无序列表",
fullscreen:"全屏",
directionalityltr:"从左向右输入",
directionalityrtl:"从右向左输入",
rowspacingtop:"段前距",
rowspacingbottom:"段后距",
highlightcode:"插入代码",
pagebreak:"分页",
insertframe:"插入Iframe",
imagenone:"默认",
imageleft:"左浮动",
imageright:"右浮动",
attachment:"附件",
imagecenter:"居中",
wordimage:"图片转存",
lineheight:"行间距",
edittip:"编辑提示",
customstyle:"自定义标题",
autotypeset:"自动排版",
webapp:"百度应用",
touppercase:"字母大写",
tolowercase:"字母小写",
background:"背景",
template:"模版",
scrawl:"涂鸦",
music:"音乐",
inserttable:"插入表格"
},
insertorderedlist:{
num:"1,2,3...",
num1:"1),2),3)...",
num2:"(1),(2),(3)...",
cn:"一,二,三....",
cn1:"一),二),三)....",
cn2:"(一),(二),(三)....",
decimal:"1,2,3...",
"lower-alpha":"a,b,c...",
"lower-roman":"i,ii,iii...",
"upper-alpha":"A,B,C...",
"upper-roman":"I,II,III..."
},
insertunorderedlist:{
circle:"○ 大圆圈",
disc:"● 小黑点",
square:"■ 小方块 ",
dash:"— 破折号",
dot:" 。 小圆圈"
},
paragraph:{
p:"段落",
h1:"标题 1",
h2:"标题 2",
h3:"标题 3",
h4:"标题 4",
h5:"标题 5",
h6:"标题 6"
},
fontfamily:{
songti:'"宋体"',
kaiti:'"楷体"',
heiti:'"黑体"',
lishu:'"隶书"',
yahei:'"微软雅黑"',
andaleMono:"andale mono",
arial:"arial",
arialBlack:"arial black",
comicSansMs:"comic sans ms",
impact:"impact",
timesNewRoman:"times new roman"
},
insertcode:{
as3:"ActionScript3",
bash:"Bash/Shell",
cpp:"C/C++",
css:"Css",
cf:"CodeFunction",
"c#":"C#",
delphi:"Delphi",
diff:"Diff",
erlang:"Erlang",
groovy:"Groovy",
html:"Html",
java:"Java",
jfx:"JavaFx",
js:"Javascript",
pl:"Perl",
php:"Php",
plain:"Plain Text",
ps:"PowerShell",
python:"Python",
ruby:"Ruby",
scala:"Scala",
sql:"Sql",
vb:"Vb",
xml:"Xml"
},
customstyle:{
tc:"标题居中",
tl:"标题居左",
im:"强调",
hi:"明显强调"
},
elementPathTip:"元素路径",
wordCountTip:"字数统计",
wordCountMsg:"当前已输入{#count}个字符, 您还可以输入{#leave}个字符。 ",
wordOverFlowMsg:'<span style="color:red;">字数超出最大允许值，服务器可能拒绝保存！</span>',
ok:"确认",
cancel:"取消",
closeDialog:"关闭对话框",
tableDrag:"表格拖动必须引入uiUtils.js文件！",
autofloatMsg:"工具栏浮动依赖编辑器UI，您首先需要引入UI文件!",
snapScreen_plugin:{
browserMsg:"仅支持IE浏览器！",
callBackErrorMsg:"服务器返回数据有误，请检查配置项之后重试。",
uploadErrorMsg:"截图上传失败，请检查服务器端环境! "
},
confirmClear:"确定清空当前文档么？",
contextMenu:{
"delete":"删除",
selectall:"全选",
deletecode:"删除代码",
cleardoc:"清空文档",
confirmclear:"确定清空当前文档么？",
unlink:"删除超链接",
paragraph:"段落格式",
edittable:"表格属性",
aligntd:"单元格对齐方式",
aligntable:"表格对齐方式",
tableleft:"左浮动",
tablecenter:"居中显示",
tableright:"右浮动",
edittd:"单元格属性",
justifyleft:"左对齐",
justifyright:"右对齐",
justifycenter:"居中对齐",
justifyjustify:"两端对齐",
table:"表格",
inserttable:"插入表格",
deletetable:"删除表格",
insertparagraphbefore:"前插入段落",
insertparagraphafter:"后插入段落",
deleterow:"删除当前行",
deletecol:"删除当前列",
insertrow:"前插入行",
insertcol:"左插入列",
insertrownext:"后插入行",
insertcolnext:"右插入列",
insertcaption:"插入表格名称",
deletecaption:"删除表格名称",
inserttitle:"插入表格标题行",
deletetitle:"删除表格标题行",
averageDiseRow:"平均分布各行",
averageDisCol:"平均分布各列",
mergeright:"向右合并",
mergeleft:"向左合并",
mergedown:"向下合并",
mergecells:"合并单元格",
splittocells:"完全拆分单元格",
splittocols:"拆分成列",
splittorows:"拆分成行",
tablesort:"表格排序",
reversecurrent:"逆序当前",
orderbyasc:"按ASCII字符升序",
reversebyasc:"按ASCII字符降序",
orderbynum:"按数值大小升序",
reversebynum:"按数值大小降序",
borderbk:"边框底纹",
setcolor:"表格隔行变色",
unsetcolor:"取消表格隔行变色",
setbackground:"选区背景隔行",
unsetbackground:"取消选区背景",
redandblue:"红蓝相间",
threecolorgradient:"三色渐变",
copy:"复制(Ctrl + c)",
copymsg:'请使用 "Ctrl + c"执行复制操作',
paste:"粘贴(Ctrl + v)",
pastemsg:'请使用 "Ctrl + v"执行粘贴操作',
highlightcode:"插入代码"
},
anthorMsg:"链接",
clearColor:"清空颜色",
standardColor:"标准颜色",
themeColor:"主题颜色",
basicColor:"基本色",
recentlyColor:"最近使用颜色",
property:"属性",
"default":"默认",
modify:"修改",
justifyleft:"左对齐",
justifyright:"右对齐",
justifycenter:"居中",
justify:"默认",
clear:"清除",
anchorMsg:"锚点",
"delete":"删除",
clickToUpload:"点击上传",
unset:"尚未设置语言文件",
t_row:"行",
t_col:"列",
pasteOpt:"粘贴选项",
pasteSourceFormat:"保留源格式",
tagFormat:"只保留标签",
pasteTextFormat:"只保留文本",
autoTypeSet:{
mergeLine:"合并空行",
delLine:"清除空行",
removeFormat:"清除格式",
indent:"首行缩进",
alignment:"对齐方式",
imageFloat:"图片浮动",
removeFontsize:"清除字号",
removeFontFamily:"清除字体",
removeHtml:"清除冗余HTML代码",
pasteFilter:"粘贴过滤",
run:"执行"
},
background:{
"static":{
lang_background_normal:"背景设置",
lang_background_local:"本地图片",
lang_background_set:"选项",
lang_background_none:"无",
lang_background_color:"颜色设置",
lang_background_netimg:"网络图片",
lang_background_align:"对齐方式",
lang_background_position:"精确定位",
repeatType:{
options:["居中","横向重复","纵向重复","平铺","自定义"]
}
},
noUploadImage:"当前未上传过任何图片！",
toggleSelect:"单击可切换选中状态\n原图尺寸: "
},
insertimage:{
"static":{
lang_tab_remote:"远程图片",
lang_tab_local:"本地上传",
lang_tab_imgManager:"在线管理",
lang_tab_imgSearch:"图片搜索",
lang_input_url:"地 址：",
lang_input_width:"宽 度：",
lang_input_height:"高 度：",
lang_input_border:"边 框：",
lang_input_vhspace:"边 距：",
lang_input_title:"描 述：",
lang_input_remoteAlign:"对 齐：",
lang_imgLoading:"　图片加载中……",
lock:{
title:"锁定宽高比例"
},
imgType:{
title:"图片类型",
options:["新闻","壁纸","表情","头像"]
},
imgSearchTxt:{
value:"请输入搜索关键词"
},
imgSearchBtn:{
value:"百度一下"
},
imgSearchReset:{
value:"清空搜索"
},
upload:{
style:"background: url(upload.png);"
},
duiqi:{
style:"background: url(imglabel.png) -12px 2px no-repeat;"
},
lang_savePath:"选择保存目录"
},
netError:"网络链接错误，请检查配置后重试！",
noUploadImage:"当前未上传过任何图片！",
imageLoading:"图片加载中，请稍后……",
tryAgain:" :( ，抱歉，没有找到图片！请重试一次！",
toggleSelect:"单击可切换选中状态\n原图尺寸: ",
searchInitInfo:"请输入搜索关键词",
numError:"请输入正确的长度或者宽度值！例如：123，400",
fileType:"图片",
imageUrlError:"不允许的图片格式或者图片域！",
imageLoadError:"图片加载失败！请检查链接地址或网络状态！",
flashError:"Flash插件初始化失败，请更新您的FlashPlayer版本之后重试！",
floatDefault:"默认",
floatLeft:"左浮动",
floatRight:"右浮动",
floatCenter:"居中",
flashI18n:{}
},
webapp:{
tip1:"本功能由百度APP提供，如看到此页面，请各位站长首先申请百度APPKey!",
tip2:"申请完成之后请至ueditor.config.js中配置获得的appkey! ",
applyFor:"点此申请",
anthorApi:"百度API"
},
template:{
"static":{
lang_template_bkcolor:"背景颜色",
lang_template_clear:"保留原有内容",
lang_template_select:"选择模版"
},
blank:"空白文档",
blog:"博客文章",
resume:"个人简历",
richText:"图文混排",
sciPapers:"科技论文"
},
scrawl:{
"static":{
lang_input_previousStep:"上一步",
lang_input_nextsStep:"下一步",
lang_input_clear:"清空",
lang_input_addPic:"添加背景",
lang_input_ScalePic:"缩放背景",
lang_input_removePic:"删除背景",
J_imgTxt:{
title:"添加背景图片"
}
},
noScarwl:"尚未作画，白纸一张~",
scrawlUpLoading:"涂鸦上传中,别急哦~",
continueBtn:"继续",
imageError:"糟糕，图片读取失败了！",
backgroundUploading:"背景图片上传中,别急哦~"
},
music:{
"static":{
lang_input_tips:"输入歌手/歌曲/专辑，搜索您感兴趣的音乐！",
J_searchBtn:{
value:"搜索歌曲"
}
},
emptyTxt:"未搜索到相关音乐结果，请换一个关键词试试。",
chapter:"歌曲",
singer:"歌手",
special:"专辑",
listenTest:"试听"
},
anchor:{
"static":{
lang_input_anchorName:"锚点名字："
}
},
attachment:{
"static":{
lang_input_fileStatus:" 当前未上传文件",
startUpload:{
style:"background:url(upload.png) no-repeat;"
}
},
browseFiles:"文件浏览…",
uploadSuccess:"上传成功!",
delSuccessFile:"从成功队列中移除",
delFailSaveFile:"移除保存失败文件",
statusPrompt:" 个文件已上传！ ",
flashVersionError:"当前Flash版本过低，请更新FlashPlayer后重试！",
flashLoadingError:"Flash加载失败!请检查路径或网络状态",
fileUploadReady:"等待上传……",
delUploadQueue:"从上传队列中移除",
limitPrompt1:"单次不能选择超过",
limitPrompt2:"个文件！请重新选择！",
delFailFile:"移除失败文件",
fileSizeLimit:"文件大小超出限制！",
emptyFile:"空文件无法上传！",
fileTypeError:"文件类型错误！",
unknownError:"未知错误！",
fileUploading:"上传中，请等待……",
cancelUpload:"取消上传",
netError:"网络错误",
failUpload:"上传失败!",
serverIOError:"服务器IO错误！",
noAuthority:"无权限！",
fileNumLimit:"上传个数限制",
failCheck:"验证失败，本次上传被跳过！",
fileCanceling:"取消中，请等待……",
stopUploading:"上传已停止……"
},
highlightcode:{
"static":{
lang_input_selectLang:"选择语言"
},
importCode:"请输入代码"
},
emotion:{
"static":{
lang_input_choice:"精选",
lang_input_Tuzki:"兔斯基",
lang_input_BOBO:"BOBO",
lang_input_lvdouwa:"绿豆蛙",
lang_input_babyCat:"baby猫",
lang_input_bubble:"泡泡",
lang_input_youa:"有啊"
}
},
gmap:{
"static":{
lang_input_address:"地址",
lang_input_search:"搜索",
address:{
value:"北京"
}
},
searchError:"无法定位到该地址!"
},
help:{
"static":{
lang_input_about:"关于UEditor",
lang_input_shortcuts:"快捷键",
lang_input_version:"版本:1.2.6",
lang_input_introduction:"UEditor是由百度web前端研发部开发的所见即所得富文本web编辑器，具有轻量，可定制，注重用户体验等特点。开源基于BSD协议，允许自由使用和修改代码。",
lang_Txt_shortcuts:"快捷键",
lang_Txt_func:"功能",
lang_Txt_bold:"给选中字设置为加粗",
lang_Txt_copy:"复制选中内容",
lang_Txt_cut:"剪切选中内容",
lang_Txt_Paste:"粘贴",
lang_Txt_undo:"重新执行上次操作",
lang_Txt_redo:"撤销上一次操作",
lang_Txt_italic:"给选中字设置为斜体",
lang_Txt_underline:"给选中字加下划线",
lang_Txt_selectAll:"全部选中",
lang_Txt_visualEnter:"软回车",
lang_Txt_fullscreen:"全屏"
}
},
insertframe:{
"static":{
lang_input_address:"地址：",
lang_input_width:"宽度：",
lang_input_height:"高度：",
lang_input_isScroll:"允许滚动条：",
lang_input_frameborder:"显示框架边框：",
lang_input_alignMode:"对齐方式：",
align:{
title:"对齐方式",
options:["默认","左对齐","右对齐","居中"]
}
},
enterAddress:"请输入地址!"
},
map:{
"static":{
lang_city:"城市",
lang_address:"地址",
city:{
value:"北京"
},
lang_search:"搜索"
},
cityMsg:"请选择城市",
errorMsg:"抱歉，找不到该位置！"
},
searchreplace:{
"static":{
lang_tab_search:"查找",
lang_tab_replace:"替换",
lang_search1:"查找",
lang_search2:"查找",
lang_replace:"替换",
lang_searchReg:"支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”",
lang_searchReg1:"支持正则表达式，添加前后斜杠标示为正则表达式，例如“/表达式/”",
lang_case_sensitive1:"区分大小写",
lang_case_sensitive2:"区分大小写",
nextFindBtn:{
value:"下一个"
},
preFindBtn:{
value:"上一个"
},
nextReplaceBtn:{
value:"下一个"
},
preReplaceBtn:{
value:"上一个"
},
repalceBtn:{
value:"替换"
},
repalceAllBtn:{
value:"全部替换"
}
},
getEnd:"已经搜索到文章末尾！",
getStart:"已经搜索到文章头部",
countMsg:"总共替换了{#count}处！"
},
snapscreen:{
"static":{
lang_showMsg:"截图功能需要首先安装UEditor截图插件！ ",
lang_download:"点此下载",
lang_step1:"第一步，下载UEditor截图插件并运行安装。",
lang_step2:"第二不，插件安装完成后即可使用，如不生效，请重启浏览器后再试！"
}
},
insertvideo:{
"static":{
lang_tab_insertV:"插入视频",
lang_video_url:"视频网址",
lang_video_size:"视频尺寸",
lang_videoW:"宽度",
lang_videoH:"高度",
lang_alignment:"对齐方式",
videoSearchTxt:{
value:"请输入搜索关键字！"
},
videoType:{
options:["全部","热门","娱乐","搞笑","体育","科技","综艺"]
},
videoSearchBtn:{
value:"百度一下"
},
videoSearchReset:{
value:"清空结果"
}
},
numError:"请输入正确的数值，如123,400",
floatLeft:"左浮动",
floatRight:"右浮动",
"default":"默认",
block:"独占一行",
urlError:"输入的视频地址有误，请检查后再试！",
loading:" &nbsp;视频加载中，请等待……",
clickToSelect:"点击选中",
goToSource:"访问源视频",
noVideo:" &nbsp; &nbsp;抱歉，找不到对应的视频，请重试！"
},
spechars:{
"static":{},
tsfh:"特殊字符",
lmsz:"罗马字符",
szfh:"数学字符",
rwfh:"日文字符",
xlzm:"希腊字母",
ewzm:"俄文字符",
pyzm:"拼音字母",
zyzf:"注音及其他"
},
edittable:{
"static":{
lang_tableStyle:"表格样式",
lang_insertCaption:"添加表格标题行",
lang_insertTitle:"添加表格名称行",
lang_orderbycontent:"使表格内容可排序",
lang_tableSize:"自动调整表格尺寸",
lang_autoSizeContent:"按表格文字自适应",
lang_autoSizePage:"按页面宽度自适应",
lang_example:"示例",
lang_borderStyle:"表格边框",
lang_color:"颜色:"
},
captionName:"表格名称",
titleName:"标题",
cellsName:"内容"
},
edittip:{
"static":{
lang_delRow:"删除整行",
lang_delCol:"删除整列"
}
},
edittd:{
"static":{
lang_tdBkColor:"背景颜色:"
}
},
formula:{
"static":{}
},
wordimage:{
"static":{
lang_resave:"转存步骤",
uploadBtn:{
src:"upload.png",
alt:"上传"
},
clipboard:{
style:"background: url(copy.png) -153px -1px no-repeat;"
},
lang_step:"1、点击顶部复制按钮，将地址复制到剪贴板；2、点击添加照片按钮，在弹出的对话框中使用Ctrl+V粘贴地址；3、点击打开后选择图片上传流程。"
},
fileType:"图片 ",
flashError:"FLASH初始化失败，请检查FLASH插件是否正确安装！ ",
netError:"网络连接错误，请重试！ ",
copySuccess:"图片地址已经复制！ ",
flashI18n:{}
}
};
});define("tpl/media/adcpc_singleitem.html.js",[],function(){
return'<label for="" class="frm_label">选择广告</label>\n<div class="frm_controls">\n    <div class="mpda_cpc_list ">\n        {each single_ad_list as item idx}\n        <div class="appmsg_card_context mpda_cpc_context tj_item js_cpc_single_item {if item.selected} selected {/if} " data-single_aid="{item.aid}" data-image_url="{if item.status==1}{item.image_url}{else}/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_thumb.png{/if}">\n            <div class="appmsg_card_bd mpda_cpc_bd" style="background-image:url({if item.status==1}{item.image_url}{else}/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_thumb.png{/if});"></div>\n            <div class="appmsg_card_ft mpda_cpc_ft">\n                <span class="dropdown_opr_tips">\n                    广告\n                    <span class="dropdown_opr_popover">xxxxx</span>\n                </span>\n                <a href="javascript:void(0);" class="appmsg_card_btn">\n                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAV1BMVEUAAAB2h9x4id51iNx1h9x1h9x2h9x2h912iNx9jOB2htx1htx1h9x1htx2h9x3iN94h9yDkup1h9x1htt2htx1h912ht14h9x2id58i+B3iNyAmeZ1htuK6q6xAAAAHHRSTlMAmS969uOvhWYY9/Dn1cw3Pwvp3MJvYVFFIToKgBX0wAAAALVJREFUKM+t0NsKgzAQhGFNk5h4tmfb//2fs2m3i0Txzrka+GBZpjgiU7i29aWctzI4frGntRiLZm0d4O+PqoF6yOSZJHxLdOAzOkEvLcA5oxJKaSPYHaqg25BeptKvb6+FTJ+kjQI+9ag0OaAxIk3q7q0UAS8S29R7sxwcbwLpG51FaUmn32zJwrhDZwjS+vXgHlz8D8czo6GGpnrcPbJOPrjGmmJtVsQNxSZzeanba5iKA/IBYyoQUSgoEyQAAAAASUVORK5CYII=" alt="">\n                    去逛逛\n                </a>\n            </div>\n            <div class="mpda_cpc_qrcode">\n                <img class="pic_mpda_cpc_qrcode_mini" src="/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_qrcode.jpg" alt="">\n                <div class="mpda_cpc_qrcode_pop">\n                    <img class="pic_mpda_cpc_qrcode" src="/merchant/ad_seller_manager?action=get_ad_qrcode&gh_id={item.gh_id}&path={item.path_encode}&token={token}" alt="">\n                    <strong class="mpda_cpc_qrcode_title">扫码查看广告详情页</strong>\n                </div>\n            </div>\n            <div class="card_mask_global vm_helper">\n                <div class="card_mask_content">\n                <i class="icon_card_selected_global"></i>\n                <p>{if item.status==1}  {else} 广告素材尚未审核通过 {/if}</p>\n                </div>\n            </div>\n        </div>&nbsp;\n        {/each}\n        \n        {if single_ad_list.length==0}\n        <p class="empty_tips" >该类目下暂无可选广告卡片</p>\n        {/if}\n        <p class="empty_tips" style="display:none">\n          <i class="icon_loading_small white"></i>\n        </p>\n    </div>\n</div>\n';
});define("tpl/media/adcpc_catitem.html.js",[],function(){
return'<div class="tag_choose_list">\n    {each sel_item as item idx}\n    <span class="tag_choose">{item.name}<span class="tag_choose_del js_cat_choose_del" data-category_id="{item.category_id}">删除</span></span>\n    {/each}\n    {if sel_item.length > 0}\n    <a class="global_link_opr js_clear_all" href="javascript:;" >清空</a>\n    {/if}\n</div>\n';
});define("tpl/media/adcpc_cat.html.js",[],function(){
return'<div class="frm_control_group">\n    <label for="" class="frm_label">商品类目</label>\n    <div class="frm_controls">\n        <div class="tag_choose_dropdown">\n            <div class="tag_choose_dropdown_hd js_cat_choose_list">\n            {if checkbox_type == \'checkbox\'}\n            <span class="tips_global">若不限定具体商品类目则按全类目展示广告</span>\n            {/if}\n            {if checkbox_type == \'radio\'}\n            <p class="tips_global">先单选类目，再选择该类目下广告卡片</p>\n            {/if}\n            </div>\n            <div class="tag_choose_dropdown_bd js_cat_choose_dp">\n                {each category_list as item i}\n                <label class="frm_{checkbox_type}_label tag_choose_label">\n                    <i class="icon_{checkbox_type}"></i>\n                    <span class="lbl_content">{item.name}</span>\n                    <input type="{checkbox_type}" class="frm_{checkbox_type} js_cpc_cat_item" data-category_id="{item.category_id}" value="{item.category_id}" {if item.selected}checked=\'checked\'{/if}>\n                </label>\n                {/each}\n                {if checkbox_type == \'radio\'}\n                <p class="tips_global">仅支持选择同类目下单品，更换类目后会清空已选单品</p>\n                {/if}   \n            </div>\n        </div>\n    </div>\n</div>\n';
});define("tpl/media/adcpc.html.js",[],function(){
return'<div class="mpda_cpc_choose_context">\n    <div class="frm_control_group">\n        <label for="" class="frm_label">广告位内容</label>\n        <div class="frm_controls frm_vertical_pt">\n            <label class="frm_radio_label">\n                <i class="icon_radio"></i>\n                <span class="lbl_content mini_tips icon_after" id="js_ad_mini_ask">仅限定商品类目 <i class="icon_msg_mini ask"></i> </span>\n                <input type="radio" class="frm_radio js_cpc_type" value="0">\n            </label>\n            {if can_use_single_ad == 1}\n            <label class="frm_radio_label selected">\n                <i class="icon_radio"></i>\n                <span class="lbl_content">精选单个商品</span>\n                <input type="radio" class="frm_radio js_cpc_type" value="1">\n            </label>\n            {/if}\n        </div>\n    </div>\n\n    <div class="js_cpc_cat_container"></div>\n\n    <div class="frm_control_group js_single_ad_container"></div>\n    \n    <p class="empty_tips js_single_loading" style="display:none;">\n        <i class="icon_loading_small white"></i>\n    </p>\n</div>\n';
});define("tpl/media/adtips.html.js",[],function(){
return'<div class="mpda_preview_area">\n    <div class="wx_preview_default">\n        <div class="wx_preview_default_hd">\n            <h3 class="wx_preview_default_title">{title}</h3>\n        </div>\n        <div class="mpda_tips_box">\n            <p class="tips_global">{=ad_info.ad_tips}</p>\n        </div>\n        <div class="mpda_wrp">\n            <div class="mpda_area show">\n                <div class="mpda_placeholder">\n                    <p class="mpda_tips">广告，也是生活的一部分</p>\n                </div>\n                <div class="mpda_inner">\n                    <div class="mpda_hd">\n                        <span class="mpda_main_img img_bg_cover" style="background-image:url({ad_info.ad_img})"></span> \n                    </div>\n                    <div class="mpda_bd"> \n                        <span class="mpda_logo img_bg_cover" style="background-image:url({ad_info.img})"></span>\n                        <div class="mpda_desc_box">\n                            <p class="mpda_title">{ad_info.nick_name}</p>\n                            <p class="mpda_details">提供的广告</p>\n                        </div>\n                        <a class="mpda_btn_more">\n                        {if ad_info.pt == 108 || ad_info.pt==116}\n                        查看详情                        {else if ad_info.pt == 109}\n                        下载应用                        {else if ad_info.pt == 110 || ad_info.pt==117}\n                        了解公众号                        {/if}\n                        </a>\n                        <a class="mpda_btn_about" href="javascript:void(0);">关于赞助广告</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="mpda_msg_area">\n    <div class="admsg_confirm_info">\n        <div class="admsg_info_key">推广要求</div>\n        <div class="admsg_info_value">\n            <!-- {if ad_info.background}\n            {=ad_info.background}\n            {else}\n            无            {/if} -->\n            {if ad_info.background}\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_bd">\n                    {=ad_info.background}\n                </div>\n            </div>\n            {/if}\n\n            {if ad_info.ad_request.length}\n            {each ad_info.ad_request as a}\n            {if a.field == \'no_compete\' || a.field == \'no_policy\'}\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    {a.title}\n                </div>\n                <div class="admsg_info_faq_bd">\n                    {each a.content as c}\n                    <span class="radius_tag">{c}</span>\n                    {/each}\n                </div>\n            </div>\n            {else}\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    {a.title}\n                </div>\n                <div class="admsg_info_faq_bd">\n                    {a.content}\n                </div>\n            </div>\n            {/if}\n            {/each}\n            {/if}\n\n            <!-- \n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_bd">\n                    xxxxxxxxxxxxxxxxxxxxxxx\n                </div>\n            </div>\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    禁止出现竞品\n                </div>\n                <div class="admsg_info_faq_bd">\n                    <span class="radius_tag">华为</span>\n                    <span class="radius_tag">小米</span>\n                </div>\n            </div>\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    禁止涉及敏感内容\n                </div>\n                <div class="admsg_info_faq_bd">\n                    <span class="radius_tag">政治</span>\n                    <span class="radius_tag">宗教</span>\n                </div>\n            </div>\n            <div class="admsg_info_faq">\n                <div class="admsg_info_faq_hd">\n                    其它\n                </div>\n                <div class="admsg_info_faq_bd">\n                    xxxxxxxxxxxxxxxxxxxxxxx\n                </div>\n            </div>\n            -->\n        </div>\n    </div>\n    <!--\n    {if ad_info.ad_request.length}\n    <div class="admsg_confirm_info">\n        <div class="admsg_info_key">服务要求</div>\n        <ol class="admsg_info_value">\n            {each ad_info.ad_request as a}\n            <li class="admsg_value_item">{a.title}：{a.content}</li>\n            {/each}\n        </ol>\n    </div>\n    {/if}\n    -->\n    <div class="admsg_confirm_info">\n        <div class="admsg_info_key">\n            {if ad_info.trade_mode == 1} <!-- 软文广告 -->\n            撰文要点            {else}\n            广告宣传语            {/if}\n        </div>\n        <div class="admsg_info_value">\n            {if ad_info.ad_tips}\n            {=ad_info.ad_tips}\n            {else}\n            无            {/if}\n        </div>\n    </div>\n</div>\n';
});define("tpl/media/admsg.html.js",[],function(){
return'<div class="admsg_item js_admsg_item" data-aid="{ad_id}">\n    <div class="admsg_item_hd">\n        <p class="admsg_info disabled_desc" {if insert_status == 0 || insert_status == 2}style="display: none;"{/if}>\n        {if insert_status == 1}\n            该广告卡片与图文消息位置不一致        {else if insert_status == 3 || insert_status == 4}\n            该广告卡片素材优化中        {/if}\n        </p>\n        <p class="admsg_info start_time">\n            投放时间：<span>{$changeTime play_time}</span>      \n            <span class="radius_tag">\n                {if trade_mode == 0}\n                广告推荐\n                {else}\n                内容定制\n                {/if}\n            </span>\n        </p>\n    </div>\n    <div class="admsg_item_bd">\n        <div class="mpda_wrp">\n            <div class="mpda_area show">\n                <div class="mpda_placeholder">\n                    <p class="mpda_tips">广告，也是生活的一部分</p>\n                </div>\n                <div class="mpda_inner">\n                    <div class="mpda_hd">\n                        <span class="mpda_main_img img_bg_cover" style="background-image:url({ad_img})"></span> \n                    </div>\n                    <div class="mpda_bd"> \n                        <span class="mpda_logo img_bg_cover" style="background-image:url({img})"></span>\n                        <div class="mpda_desc_box">\n                            <p class="mpda_title">{nick_name}</p>\n                            <p class="mpda_details">提供的广告</p>\n                        </div>\n                        <a class="mpda_btn_more">\n                        {if pt == 108||pt==116}\n                        了解详情                        {else if pt == 109}\n                        下载应用                        {else if pt == 110||pt==117}\n                        了解公众号                        {/if}\n                        </a>\n                        <a class="mpda_btn_about" href="javascript:void(0);">关于赞助广告</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class="admsg_item_ft {if insert_status == 0 || insert_status == 2}js_cover{/if}">\n        <div class="cover_choosable icon_card_selected" {if insert_status != 0 && insert_status != 2}style="display: none;"{/if}></div>\n        <div class="cover_un_choosable" {if insert_status == 0 || insert_status == 2}style="display: none;"{/if}>\n        {if insert_status == 1}\n            该广告卡片与图文消息位置不一致        {else if insert_status == 3 || insert_status == 4}\n            该广告卡片素材优化中        {/if}\n        </div>\n    </div>\n</div> \n';
});define("tpl/media/dialog/admsg_dialog.html.js",[],function(){
return'<div><!-- popup组件也是感人，debug了一个多钟，发现外层没有div会调用3次 -->\n    <div class="processor_bar_wrp js_step">\n        <!-- 初始化进度条 -->\n    </div>\n    <div class="processor_panel">\n        <!-- 第一步：选择广告 -->\n        <div class="loading_box js_loading" style="display: none;">\n            <i class="icon_loading_small white"></i>\n            <span class="vm_box"></span>\n        </div>\n        <div class="processor_content_step admsg_choose js_step1_view" style="display: none;">\n            <div class="admsg_choose_bd">\n                \n                <div class="mpda_list_area">\n                    <div class="js_cpc_area" style="display:none;">\n                        <strong class="mpda_list_title">选择文中广告</strong>\n                        <div class="cpc_area ">\n                            <div class="appmsg_card_context mpda_cpc_context js_admsg_item">\n                                <div class="appmsg_card_bd mpda_cpc_bd" style="background-image:url(/mpres/htmledition/images/pic/media/mpda/pic_mpda_cpc_thumb.png);"></div>\n                                <div class="appmsg_card_ft mpda_cpc_ft">\n                                    <span class="dropdown_opr_tips">\n                                        广告\n                                        <span class="dropdown_opr_popover">xxxxx</span>\n                                    </span>\n                                </div>\n                                <a href="javascript:void(0);" class="appmsg_card_btn">\n                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAMAAACelLz8AAAAV1BMVEUAAAB2h9x4id51iNx1h9x1h9x2h9x2h912iNx9jOB2htx1htx1h9x1htx2h9x3iN94h9yDkup1h9x1htt2htx1h912ht14h9x2id58i+B3iNyAmeZ1htuK6q6xAAAAHHRSTlMAmS969uOvhWYY9/Dn1cw3Pwvp3MJvYVFFIToKgBX0wAAAALVJREFUKM+t0NsKgzAQhGFNk5h4tmfb//2fs2m3i0Txzrka+GBZpjgiU7i29aWctzI4frGntRiLZm0d4O+PqoF6yOSZJHxLdOAzOkEvLcA5oxJKaSPYHaqg25BeptKvb6+FTJ+kjQI+9ag0OaAxIk3q7q0UAS8S29R7sxwcbwLpG51FaUmn32zJwrhDZwjS+vXgHlz8D8czo6GGpnrcPbJOPrjGmmJtVsQNxSZzeanba5iKA/IBYyoQUSgoEyQAAAAASUVORK5CYII=" alt="">\n                                    去逛逛\n                                </a>\n                                <div class="card_mask_global"><i class="icon_card_selected_global"></i></div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="js_ad_list" style="display: none;">\n                        <strong class="mpda_list_title">选择互选广告</strong>\n                        <div class="admsg_list">\n                        <!-- \n                            admsg_item在js/tpl/media/admsg.html\n                            admsg_col有两列需要像视频消息一样依次堆到这两列中 \n                            ！！示例：\n                            <div class="admsg_col">\n                                <div class="admsg_item">第一个item</div>\n                                <div class="admsg_item">第三个item</div>\n                            </div>\n                            <div class="admsg_col">\n                                <div class="admsg_item">第二个item</div>\n                                <div class="admsg_item">第四个item</div>\n                            </div>\n                            哈哈哈哈这里Radeon你get了就可以删掉了\n                        -->\n                            <div class="admsg_col">\n\n                            </div>\n                            <div class="admsg_col">\n                                \n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="admsg_choose_ft">\n                <div class="pagination_wrp js_pagebar"></div>\n            </div>\n            <div class="processor_step_opr">\n                <span class="btn btn_primary btn_input js_next">\n                    <button type="button">下一步</button>\n                </span>\n            </div>\n        </div>\n        <!-- 第二步：广告条款 -->\n        <div class="processor_content_step admsg_confirm js_step2_view" style="display: none;">\n            <div class="mpda_send_panel js_adtips"></div>\n            <div class="processor_step_opr">\n                <div class="dialog_tool_tips js_dialog_mini_tips" style="display:none;"></div>\n                <span class="btn btn_default btn_input js_prev">\n                    <button type="button">上一步</button>\n                </span>\n                <span class="btn btn_primary btn_input js_submit">\n                    <button type="button">确定</button>\n                </span>\n            </div>\n        </div>\n    </div>\n</div>\n';
});define("tpl/media/videocard.html.js",[],function(){
return'<div id="wxVideoBox{id}" class="richvideo with_msg_box Js_videomsg" {if video_ori_status == 1 && is_new_video && status == 3}data-original="1"{else}data-original="0"{/if} data-vid={video_id} data-title={title} data-duration={duration} data-cover={cover}>\n    <div class="richvideo_content" style="z-index: 0">\n        <h4 class="title">\n            {if video_ori_status == 1 && is_new_video && (status == 3 || for_selection)}\n            <i class="icon_tag_default original"></i>\n            {else if video_ori_status == 2 && is_new_video && (status == 3 || for_selection)}\n            <i class="icon_tag_default republish"></i>\n            {/if}\n            {title}\n        </h4>\n        <div class="video_info">\n            <em class="time">{time}</em>\n            <em class="res">{from}</em>\n        </div>\n        <div class="video_extra_info" data-seq="{seq}">\n            <img class="video_thumb" src="{if !cover}{if !!multi_item}{each multi_item as value}{value.cover}{/each}{/if}{else}{cover}{/if}" alt="">\n            {if is_new_video && status != 4}\n            <span class="video_length">{duration}</span>\n            {/if}\n            {if status == 0 || (status == 3 && video_ori_status == 0 && !before_original_video)}\n            <div class="status_mask">\n            <span class="status_msg">\n                审核中            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 1}\n            <div class="status_mask">\n            <span class="status_msg">\n                资料不完整            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 2}\n            <div class="status_mask">\n            <span class="status_msg mini_tips icon_after">\n                审核不通过                <i class="icon_mini_tips ask_white js_fail_reason" data-seq="{seq}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 3 && applyori == 1 && ((video_ori_status == 3 && (ori_fail_reason == 1 || ori_fail_reason == 3 || ori_fail_reason == 5) && is_new_video) || video_ori_status == 2) }\n            <div class="status_mask">\n            <span class="status_msg">\n                原创声明失败<i class="icon_mini_tips ask_white js_declare_fail" data-seq="{seq}" data-url="{url}" data-ori="{video_ori_status}" data-reason="{ori_fail_reason}" data-vid="{content}" data-name="{hit_nickname}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 3 && is_new_video}\n            <div class="play_mask">\n                <i class="icon_video_play"> </i>\n                <span class="vm_box"></span>\n            </div>\n\n            {else if status == 4}\n            <div class="status_mask">\n            <span class="status_msg">\n                转码中            </span>\n            <span class="vm_box"></span>\n            </div>\n            {else if status == 5}\n            <div class="status_mask">\n            <span class="status_msg">\n                转码失败<i class="icon_mini_tips ask_white js_fail_code" data-seq="{seq}"></i>\n            </span>\n            <span class="vm_box"></span>\n            </div>\n            {/if}\n        </div>\n        <div class="video_desc" data-digest="{digest}">{digest}</div>\n    </div>\n\n    {if for_operation}\n    <div class="richvideo_opr">\n        <ul class="grid_line" >\n            {if is_new_video}\n            <li class="richvideo_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else if is_new_video==0 && video_url!=""} <!-- 微信视频 -->\n            <li class="richvideo_opr_item grid_item size1of3">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3">\n                <a {if for_transfer}href="javascript:;" class="js_tooltip js_download"{else}href="{video_download_url}" class="js_tooltip"{/if} data-tooltip="下载">\n                    <i class="icon18_common download_gray">下载</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of3 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {else } <!-- 微视视频 -->\n            <li class="richvideo_opr_item grid_item size1of2">\n            <a class="js_tooltip" href="/cgi-bin/appmsg?t=media/videomsg_edit&action=video_edit&lang=zh_CN&token={token}&type=15&appmsgid={app_id}" data-seq="{seq}" data-tooltip="编辑">\n                    <i class="icon18_common edit_gray">编辑</i>\n                </a>\n            </li>\n            <li class="richvideo_opr_item grid_item size1of2 no_extra">\n            <a class="js_del js_tooltip" href="javascript:void(0);" data-id="{app_id}" data-tooltip="删除">\n                    <i class="icon18_common del_gray">删除</i>\n                </a>\n            </li>\n            {/if}\n        </ul>\n    </div>\n    {/if}\n    {if for_selection && !(status == 3 && video_ori_status == 0 && !before_original_video)}\n    <div class="richvideo_mask"></div>\n    <i class="icon_card_selected">已选择</i>\n    {/if}\n</div>\n<div class="richvideo_msg_box">\n    <p class="mini_tips warn" style="display: none;">该视频由于版权问题无法在微信中播放</p>\n</div>';
});