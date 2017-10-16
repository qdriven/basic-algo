define("common/lib/datepicker.js", [ "widget/datepicker.css" ], function(e, t, n) {
try {
var r = +(new Date);
e("widget/datepicker.css"), function(e, t) {
function n(t, n) {
var i, s, o, u = t.nodeName.toLowerCase();
return "area" === u ? (i = t.parentNode, s = i.name, !t.href || !s || i.nodeName.toLowerCase() !== "map" ? !1 : (o = e("img[usemap=#" + s + "]")[0], !!o && r(o))) : (/input|select|textarea|button|object/.test(u) ? !t.disabled : "a" === u ? t.href || n : n) && r(t);
}
function r(t) {
return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
return e.css(this, "visibility") === "hidden";
}).length;
}
var i = 0, s = /^ui-id-\d+$/;
e.ui = e.ui || {}, e.extend(e.ui, {
version: "1.10.3",
keyCode: {
BACKSPACE: 8,
COMMA: 188,
DELETE: 46,
DOWN: 40,
END: 35,
ENTER: 13,
ESCAPE: 27,
HOME: 36,
LEFT: 37,
NUMPAD_ADD: 107,
NUMPAD_DECIMAL: 110,
NUMPAD_DIVIDE: 111,
NUMPAD_ENTER: 108,
NUMPAD_MULTIPLY: 106,
NUMPAD_SUBTRACT: 109,
PAGE_DOWN: 34,
PAGE_UP: 33,
PERIOD: 190,
RIGHT: 39,
SPACE: 32,
TAB: 9,
UP: 38
}
}), e.fn.extend({
focus: function(t) {
return function(n, r) {
return typeof n == "number" ? this.each(function() {
var t = this;
setTimeout(function() {
e(t).focus(), r && r.call(t);
}, n);
}) : t.apply(this, arguments);
};
}(e.fn.focus),
scrollParent: function() {
var t;
return e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? t = this.parents().filter(function() {
return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0) : t = this.parents().filter(function() {
return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"));
}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t;
},
zIndex: function(n) {
if (n !== t) return this.css("zIndex", n);
if (this.length) {
var r = e(this[0]), i, s;
while (r.length && r[0] !== document) {
i = r.css("position");
if (i === "absolute" || i === "relative" || i === "fixed") {
s = parseInt(r.css("zIndex"), 10);
if (!isNaN(s) && s !== 0) return s;
}
r = r.parent();
}
}
return 0;
},
uniqueId: function() {
return this.each(function() {
this.id || (this.id = "ui-id-" + ++i);
});
},
removeUniqueId: function() {
return this.each(function() {
s.test(this.id) && e(this).removeAttr("id");
});
}
}), e.extend(e.expr[":"], {
data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
return function(n) {
return !!e.data(n, t);
};
}) : function(t, n, r) {
return !!e.data(t, r[3]);
},
focusable: function(t) {
return n(t, !isNaN(e.attr(t, "tabindex")));
},
tabbable: function(t) {
var r = e.attr(t, "tabindex"), i = isNaN(r);
return (i || r >= 0) && n(t, !i);
}
}), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(n, r) {
function i(t, n, r, i) {
return e.each(s, function() {
n -= parseFloat(e.css(t, "padding" + this)) || 0, r && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), i && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
}), n;
}
var s = r === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = r.toLowerCase(), u = {
innerWidth: e.fn.innerWidth,
innerHeight: e.fn.innerHeight,
outerWidth: e.fn.outerWidth,
outerHeight: e.fn.outerHeight
};
e.fn["inner" + r] = function(n) {
return n === t ? u["inner" + r].call(this) : this.each(function() {
e(this).css(o, i(this, n) + "px");
});
}, e.fn["outer" + r] = function(t, n) {
return typeof t != "number" ? u["outer" + r].call(this, t) : this.each(function() {
e(this).css(o, i(this, t, !0, n) + "px");
});
};
}), e.fn.addBack || (e.fn.addBack = function(e) {
return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
return function(n) {
return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
};
}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
disableSelection: function() {
return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
e.preventDefault();
});
},
enableSelection: function() {
return this.unbind(".ui-disableSelection");
}
}), e.extend(e.ui, {
plugin: {
add: function(t, n, r) {
var i, s = e.ui[t].prototype;
for (i in r) s.plugins[i] = s.plugins[i] || [], s.plugins[i].push([ n, r[i] ]);
},
call: function(e, t, n) {
var r, i = e.plugins[t];
if (!i || !e.element[0].parentNode || e.element[0].parentNode.nodeType === 11) return;
for (r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n);
}
},
hasScroll: function(t, n) {
if (e(t).css("overflow") === "hidden") return !1;
var r = n && n === "left" ? "scrollLeft" : "scrollTop", i = !1;
return t[r] > 0 ? !0 : (t[r] = 1, i = t[r] > 0, t[r] = 0, i);
}
});
}(jQuery), function(e, t) {
function n() {
this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
closeText: "Done",
prevText: "Prev",
nextText: "Next",
currentText: "Today",
monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
dayNamesMin: [ "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" ],
weekHeader: "Wk",
dateFormat: "mm/dd/yy",
firstDay: 0,
isRTL: !1,
showMonthAfterYear: !1,
yearSuffix: ""
}, this._defaults = {
showOn: "focus",
showAnim: "fadeIn",
showOptions: {},
defaultDate: null,
appendText: "",
buttonText: "...",
buttonImage: "",
buttonImageOnly: !1,
hideIfNoPrevNext: !1,
navigationAsDateFormat: !1,
gotoCurrent: !1,
changeMonth: !1,
changeYear: !1,
yearRange: "c-10:c+10",
showOtherMonths: !1,
selectOtherMonths: !1,
showWeek: !1,
calculateWeek: this.iso8601Week,
shortYearCutoff: "+10",
minDate: null,
maxDate: null,
duration: "fast",
beforeShowDay: null,
beforeShow: null,
onSelect: null,
onChangeMonthYear: null,
onClose: null,
numberOfMonths: 1,
showCurrentAtPos: 0,
stepMonths: 1,
stepBigMonths: 12,
altField: "",
altFormat: "",
constrainInput: !0,
showButtonPanel: !1,
autoSize: !1,
disabled: !1
}, e.extend(this._defaults, this.regional[""]), this.dpDiv = r(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}
function r(t) {
var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return t.delegate(n, "mouseout", function() {
e(this).removeClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).removeClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).removeClass("ui-datepicker-next-hover");
}).delegate(n, "mouseover", function() {
e.datepicker._isDisabledDatepicker(o.inline ? t.parent()[0] : o.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && e(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && e(this).addClass("ui-datepicker-next-hover"));
});
}
function i(t, n) {
e.extend(t, n);
for (var r in n) n[r] == null && (t[r] = n[r]);
return t;
}
e.extend(e.ui, {
datepicker: {
version: "1.10.3"
}
});
var s = "datepicker", o;
e.extend(n.prototype, {
markerClassName: "hasDatepicker",
maxRows: 4,
_widgetDatepicker: function() {
return this.dpDiv;
},
setDefaults: function(e) {
return i(this._defaults, e || {}), this;
},
_attachDatepicker: function(t, n) {
var r, i, s;
r = t.nodeName.toLowerCase(), i = r === "div" || r === "span", t.id || (this.uuid += 1, t.id = "dp" + this.uuid), s = this._newInst(e(t), i), s.settings = e.extend({}, n || {}), r === "input" ? this._connectDatepicker(t, s) : i && this._inlineDatepicker(t, s);
},
_newInst: function(t, n) {
var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
return {
id: i,
input: t,
selectedDay: 0,
selectedMonth: 0,
selectedYear: 0,
drawMonth: 0,
drawYear: 0,
inline: n,
dpDiv: n ? r(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
};
},
_connectDatepicker: function(t, n) {
var r = e(t);
n.append = e([]), n.trigger = e([]);
if (r.hasClass(this.markerClassName)) return;
this._attachments(r, n), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), e.data(t, s, n), n.settings.disabled && this._disableDatepicker(t);
},
_attachments: function(t, n) {
var r, i, s, o = this._get(n, "appendText"), u = this._get(n, "isRTL");
n.append && n.append.remove(), o && (n.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[u ? "before" : "after"](n.append)), t.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), r = this._get(n, "showOn"), (r === "focus" || r === "both") && t.focus(this._showDatepicker);
if (r === "button" || r === "both") i = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = e(this._get(n, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
src: s,
alt: i,
title: i
}) : e("<button type='button'></button>").addClass(this._triggerClass).html(s ? e("<img/>").attr({
src: s,
alt: i,
title: i
}) : i)), t[u ? "before" : "after"](n.trigger), n.trigger.click(function() {
return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
});
},
_autoSize: function(e) {
if (this._get(e, "autoSize") && !e.inline) {
var t, n, r, i, s = new Date(2009, 11, 20), o = this._get(e, "dateFormat");
o.match(/[DM]/) && (t = function(e) {
n = 0, r = 0;
for (i = 0; i < e.length; i++) e[i].length > n && (n = e[i].length, r = i);
return r;
}, s.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), e.input.attr("size", this._formatDate(e, s).length);
}
},
_inlineDatepicker: function(t, n) {
var r = e(t);
if (r.hasClass(this.markerClassName)) return;
r.addClass(this.markerClassName).append(n.dpDiv), e.data(t, s, n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(t), n.dpDiv.css("display", "block");
},
_dialogDatepicker: function(t, n, r, o, u) {
var a, f, l, c, h, p = this._dialogInst;
return p || (this.uuid += 1, a = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + a + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], s, p)), i(p.settings, o || {}), n = n && n.constructor === Date ? this._formatDate(p, n) : n, this._dialogInput.val(n), this._pos = u ? u.length ? u : [ u.pageX, u.pageY ] : null, this._pos || (f = document.documentElement.clientWidth, l = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [ f / 2 - 100 + c, l / 2 - 150 + h ]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], s, p), this;
},
_destroyDatepicker: function(t) {
var n, r = e(t), i = e.data(t, s);
if (!r.hasClass(this.markerClassName)) return;
n = t.nodeName.toLowerCase(), e.removeData(t, s), n === "input" ? (i.append.remove(), i.trigger.remove(), r.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (n === "div" || n === "span") && r.removeClass(this.markerClassName).empty();
},
_enableDatepicker: function(t) {
var n, r, i = e(t), o = e.data(t, s);
if (!i.hasClass(this.markerClassName)) return;
n = t.nodeName.toLowerCase();
if (n === "input") t.disabled = !1, o.trigger.filter("button").each(function() {
this.disabled = !1;
}).end().filter("img").css({
opacity: "1.0",
cursor: ""
}); else if (n === "div" || n === "span") r = i.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1);
this._disabledInputs = e.map(this._disabledInputs, function(e) {
return e === t ? null : e;
});
},
_disableDatepicker: function(t) {
var n, r, i = e(t), o = e.data(t, s);
if (!i.hasClass(this.markerClassName)) return;
n = t.nodeName.toLowerCase();
if (n === "input") t.disabled = !0, o.trigger.filter("button").each(function() {
this.disabled = !0;
}).end().filter("img").css({
opacity: "0.5",
cursor: "default"
}); else if (n === "div" || n === "span") r = i.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0);
this._disabledInputs = e.map(this._disabledInputs, function(e) {
return e === t ? null : e;
}), this._disabledInputs[this._disabledInputs.length] = t;
},
_isDisabledDatepicker: function(e) {
if (!e) return !1;
for (var t = 0; t < this._disabledInputs.length; t++) if (this._disabledInputs[t] === e) return !0;
return !1;
},
_getInst: function(t) {
try {
return e.data(t, s);
} catch (n) {
throw "Missing instance data for this datepicker";
}
},
_optionDatepicker: function(n, r, s) {
var o, u, a, f, l = this._getInst(n);
if (arguments.length === 2 && typeof r == "string") return r === "defaults" ? e.extend({}, e.datepicker._defaults) : l ? r === "all" ? e.extend({}, l.settings) : this._get(l, r) : null;
o = r || {}, typeof r == "string" && (o = {}, o[r] = s), l && (this._curInst === l && this._hideDatepicker(), u = this._getDateDatepicker(n, !0), a = this._getMinMaxDate(l, "min"), f = this._getMinMaxDate(l, "max"), i(l.settings, o), a !== null && o.dateFormat !== t && o.minDate === t && (l.settings.minDate = this._formatDate(l, a)), f !== null && o.dateFormat !== t && o.maxDate === t && (l.settings.maxDate = this._formatDate(l, f)), "disabled" in o && (o.disabled ? this._disableDatepicker(n) : this._enableDatepicker(n)), this._attachments(e(n), l), this._autoSize(l), this._setDate(l, u), this._updateAlternate(l), this._updateDatepicker(l));
},
_changeDatepicker: function(e, t, n) {
this._optionDatepicker(e, t, n);
},
_refreshDatepicker: function(e) {
var t = this._getInst(e);
t && this._updateDatepicker(t);
},
_setDateDatepicker: function(e, t) {
var n = this._getInst(e);
n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n));
},
_getDateDatepicker: function(e, t) {
var n = this._getInst(e);
return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null;
},
_doKeyDown: function(t) {
var n, r, i, s = e.datepicker._getInst(t.target), o = !0, u = s.dpDiv.is(".ui-datepicker-rtl");
s._keyEvent = !0;
if (e.datepicker._datepickerShowing) switch (t.keyCode) {
case 9:
e.datepicker._hideDatepicker(), o = !1;
break;
case 13:
return i = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", s.dpDiv), i[0] && e.datepicker._selectDay(t.target, s.selectedMonth, s.selectedYear, i[0]), n = e.datepicker._get(s, "onSelect"), n ? (r = e.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [ r, s ])) : e.datepicker._hideDatepicker(), !1;
case 27:
e.datepicker._hideDatepicker();
break;
case 33:
e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
break;
case 34:
e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
break;
case 35:
(t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
break;
case 36:
(t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
break;
case 37:
(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(s, "stepBigMonths") : -e.datepicker._get(s, "stepMonths"), "M");
break;
case 38:
(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
break;
case 39:
(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, u ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(s, "stepBigMonths") : +e.datepicker._get(s, "stepMonths"), "M");
break;
case 40:
(t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
break;
default:
o = !1;
} else t.keyCode === 36 && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
o && (t.preventDefault(), t.stopPropagation());
},
_doKeyPress: function(t) {
var n, r, i = e.datepicker._getInst(t.target);
if (e.datepicker._get(i, "constrainInput")) return n = e.datepicker._possibleChars(e.datepicker._get(i, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !n || n.indexOf(r) > -1;
},
_doKeyUp: function(t) {
var n, r = e.datepicker._getInst(t.target);
if (r.input.val() !== r.lastVal) try {
n = e.datepicker.parseDate(e.datepicker._get(r, "dateFormat"), r.input ? r.input.val() : null, e.datepicker._getFormatConfig(r)), n && (e.datepicker._setDateFromField(r), e.datepicker._updateAlternate(r), e.datepicker._updateDatepicker(r));
} catch (i) {}
return !0;
},
_showDatepicker: function(t) {
t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = e("input", t.parentNode)[0]);
if (e.datepicker._isDisabledDatepicker(t) || e.datepicker._lastInput === t) return;
var n, r, s, o, u, a, f;
n = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== n && (e.datepicker._curInst.dpDiv.stop(!0, !0), n && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), r = e.datepicker._get(n, "beforeShow"), s = r ? r.apply(t, [ t, n ]) : {};
if (s === !1) return;
i(n.settings, s), n.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(n), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function() {
return o |= e(this).css("position") === "fixed", !o;
}), u = {
left: e.datepicker._pos[0],
top: e.datepicker._pos[1]
}, e.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
position: "absolute",
display: "block",
top: "-1000px"
}), e.datepicker._updateDatepicker(n), u = e.datepicker._checkOffset(n, u, o), n.dpDiv.css({
position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
display: "none",
left: u.left + "px",
top: u.top + "px"
}), n.inline || (a = e.datepicker._get(n, "showAnim"), f = e.datepicker._get(n, "duration"), n.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[a] ? n.dpDiv.show(a, e.datepicker._get(n, "showOptions"), f) : n.dpDiv[a || "show"](a ? f : null), e.datepicker._shouldFocusInput(n) && n.input.focus(), e.datepicker._curInst = n);
},
_updateDatepicker: function(t) {
this.maxRows = 4, o = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
var n, r = this._getNumberOfMonths(t), i = r[1], s = 17;
t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), i > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + i).css("width", s * i + "em"), t.dpDiv[(r[0] !== 1 || r[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (n = t.yearshtml, setTimeout(function() {
n === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), n = t.yearshtml = null;
}, 0));
},
_shouldFocusInput: function(e) {
return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
},
_checkOffset: function(t, n, r) {
var i = t.dpDiv.outerWidth(), s = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, u = t.input ? t.input.outerHeight() : 0, a = document.documentElement.clientWidth + (r ? 0 : e(document).scrollLeft()), f = document.documentElement.clientHeight + (r ? 0 : e(document).scrollTop());
return n.left -= this._get(t, "isRTL") ? i - o : 0, n.left -= r && n.left === t.input.offset().left ? e(document).scrollLeft() : 0, n.top -= r && n.top === t.input.offset().top + u ? e(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + i > a && a > i ? Math.abs(n.left + i - a) : 0), n.top -= Math.min(n.top, n.top + s > f && f > s ? Math.abs(s + u) : 0), n;
},
_findPos: function(t) {
var n, r = this._getInst(t), i = this._get(r, "isRTL");
while (t && (t.type === "hidden" || t.nodeType !== 1 || e.expr.filters.hidden(t))) t = t[i ? "previousSibling" : "nextSibling"];
return n = e(t).offset(), [ n.left, n.top ];
},
_hideDatepicker: function(t) {
var n, r, i, o, u = this._curInst;
if (!u || t && u !== e.data(t, s)) return;
this._datepickerShowing && (n = this._get(u, "showAnim"), r = this._get(u, "duration"), i = function() {
e.datepicker._tidyDialog(u);
}, e.effects && (e.effects.effect[n] || e.effects[n]) ? u.dpDiv.hide(n, e.datepicker._get(u, "showOptions"), r, i) : u.dpDiv[n === "slideDown" ? "slideUp" : n === "fadeIn" ? "fadeOut" : "hide"](n ? r : null, i), n || i(), this._datepickerShowing = !1, o = this._get(u, "onClose"), o && o.apply(u.input ? u.input[0] : null, [ u.input ? u.input.val() : "", u ]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
position: "absolute",
left: "0",
top: "-100px"
}), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
},
_tidyDialog: function(e) {
e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
},
_checkExternalClick: function(t) {
if (!e.datepicker._curInst) return;
var n = e(t.target), r = e.datepicker._getInst(n[0]);
(n[0].id !== e.datepicker._mainDivId && n.parents("#" + e.datepicker._mainDivId).length === 0 && !n.hasClass(e.datepicker.markerClassName) && !n.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || n.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== r) && e.datepicker._hideDatepicker();
},
_adjustDate: function(t, n, r) {
var i = e(t), s = this._getInst(i[0]);
if (this._isDisabledDatepicker(i[0])) return;
this._adjustInstDate(s, n + (r === "M" ? this._get(s, "showCurrentAtPos") : 0), r), this._updateDatepicker(s);
},
_gotoToday: function(t) {
var n, r = e(t), i = this._getInst(r[0]);
this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (n = new Date, i.selectedDay = n.getDate(), i.drawMonth = i.selectedMonth = n.getMonth(), i.drawYear = i.selectedYear = n.getFullYear()), this._notifyChange(i), this._adjustDate(r);
},
_selectMonthYear: function(t, n, r) {
var i = e(t), s = this._getInst(i[0]);
s["selected" + (r === "M" ? "Month" : "Year")] = s["draw" + (r === "M" ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(i);
},
_selectDay: function(t, n, r, i) {
var s, o = e(t);
if (e(i).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0])) return;
s = this._getInst(o[0]), s.selectedDay = s.currentDay = e("a", i).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = r, this._selectDate(t, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear));
},
_clearDate: function(t) {
var n = e(t);
this._selectDate(n, "");
},
_selectDate: function(t, n) {
var r, i = e(t), s = this._getInst(i[0]);
n = n != null ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), r = this._get(s, "onSelect"), r ? r.apply(s.input ? s.input[0] : null, [ n, s ]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], typeof s.input[0] != "object" && s.input.focus(), this._lastInput = null);
},
_updateAlternate: function(t) {
var n, r, i, s = this._get(t, "altField");
s && (n = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), i = this.formatDate(n, r, this._getFormatConfig(t)), e(s).each(function() {
e(this).val(i);
}));
},
noWeekends: function(e) {
var t = e.getDay();
return [ t > 0 && t < 6, "" ];
},
iso8601Week: function(e) {
var t, n = new Date(e.getTime());
return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), t = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((t - n) / 864e5) / 7) + 1;
},
parseDate: function(t, n, r) {
if (t == null || n == null) throw "Invalid arguments";
n = typeof n == "object" ? n.toString() : n + "";
if (n === "") return null;
var i, s, o, u = 0, a = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, f = typeof a != "string" ? a : (new Date).getFullYear() % 100 + parseInt(a, 10), l = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, c = (r ? r.dayNames : null) || this._defaults.dayNames, h = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, p = (r ? r.monthNames : null) || this._defaults.monthNames, d = -1, v = -1, m = -1, g = -1, y = !1, b, w = function(e) {
var n = i + 1 < t.length && t.charAt(i + 1) === e;
return n && i++, n;
}, E = function(e) {
var t = w(e), r = e === "@" ? 14 : e === "!" ? 20 : e === "y" && t ? 4 : e === "o" ? 3 : 2, i = new RegExp("^\\d{1," + r + "}"), s = n.substring(u).match(i);
if (!s) throw "Missing number at position " + u;
return u += s[0].length, parseInt(s[0], 10);
}, S = function(t, r, i) {
var s = -1, o = e.map(w(t) ? i : r, function(e, t) {
return [ [ t, e ] ];
}).sort(function(e, t) {
return -(e[1].length - t[1].length);
});
e.each(o, function(e, t) {
var r = t[1];
if (n.substr(u, r.length).toLowerCase() === r.toLowerCase()) return s = t[0], u += r.length, !1;
});
if (s !== -1) return s + 1;
throw "Unknown name at position " + u;
}, x = function() {
if (n.charAt(u) !== t.charAt(i)) throw "Unexpected literal at position " + u;
u++;
};
for (i = 0; i < t.length; i++) if (y) t.charAt(i) === "'" && !w("'") ? y = !1 : x(); else switch (t.charAt(i)) {
case "d":
m = E("d");
break;
case "D":
S("D", l, c);
break;
case "o":
g = E("o");
break;
case "m":
v = E("m");
break;
case "M":
v = S("M", h, p);
break;
case "y":
d = E("y");
break;
case "@":
b = new Date(E("@")), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
break;
case "!":
b = new Date((E("!") - this._ticksTo1970) / 1e4), d = b.getFullYear(), v = b.getMonth() + 1, m = b.getDate();
break;
case "'":
w("'") ? x() : y = !0;
break;
default:
x();
}
if (u < n.length) {
o = n.substr(u);
if (!/^\s+/.test(o)) throw "Extra/unparsed characters found in date: " + o;
}
d === -1 ? d = (new Date).getFullYear() : d < 100 && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (d <= f ? 0 : -100));
if (g > -1) {
v = 1, m = g;
do {
s = this._getDaysInMonth(d, v - 1);
if (m <= s) break;
v++, m -= s;
} while (!0);
}
b = this._daylightSavingAdjust(new Date(d, v - 1, m));
if (b.getFullYear() !== d || b.getMonth() + 1 !== v || b.getDate() !== m) throw "Invalid date";
return b;
},
ATOM: "yy-mm-dd",
COOKIE: "D, dd M yy",
ISO_8601: "yy-mm-dd",
RFC_822: "D, d M y",
RFC_850: "DD, dd-M-y",
RFC_1036: "D, d M y",
RFC_1123: "D, d M yy",
RFC_2822: "D, d M yy",
RSS: "D, d M y",
TICKS: "!",
TIMESTAMP: "@",
W3C: "yy-mm-dd",
_ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1e7,
formatDate: function(e, t, n) {
if (!t) return "";
var r, i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, s = (n ? n.dayNames : null) || this._defaults.dayNames, o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, u = (n ? n.monthNames : null) || this._defaults.monthNames, a = function(t) {
var n = r + 1 < e.length && e.charAt(r + 1) === t;
return n && r++, n;
}, f = function(e, t, n) {
var r = "" + t;
if (a(e)) while (r.length < n) r = "0" + r;
return r;
}, l = function(e, t, n, r) {
return a(e) ? r[t] : n[t];
}, c = "", h = !1;
if (t) for (r = 0; r < e.length; r++) if (h) e.charAt(r) === "'" && !a("'") ? h = !1 : c += e.charAt(r); else switch (e.charAt(r)) {
case "d":
c += f("d", t.getDate(), 2);
break;
case "D":
c += l("D", t.getDay(), i, s);
break;
case "o":
c += f("o", Math.round(((new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 864e5), 3);
break;
case "m":
c += f("m", t.getMonth() + 1, 2);
break;
case "M":
c += l("M", t.getMonth(), o, u);
break;
case "y":
c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
break;
case "@":
c += t.getTime();
break;
case "!":
c += t.getTime() * 1e4 + this._ticksTo1970;
break;
case "'":
a("'") ? c += "'" : h = !0;
break;
default:
c += e.charAt(r);
}
return c;
},
_possibleChars: function(e) {
var t, n = "", r = !1, i = function(n) {
var r = t + 1 < e.length && e.charAt(t + 1) === n;
return r && t++, r;
};
for (t = 0; t < e.length; t++) if (r) e.charAt(t) === "'" && !i("'") ? r = !1 : n += e.charAt(t); else switch (e.charAt(t)) {
case "d":
case "m":
case "y":
case "@":
n += "0123456789";
break;
case "D":
case "M":
return null;
case "'":
i("'") ? n += "'" : r = !0;
break;
default:
n += e.charAt(t);
}
return n;
},
_get: function(e, n) {
return e.settings[n] !== t ? e.settings[n] : this._defaults[n];
},
_setDateFromField: function(e, t) {
if (e.input.val() === e.lastVal) return;
var n = this._get(e, "dateFormat"), r = e.lastVal = e.input ? e.input.val() : null, i = this._getDefaultDate(e), s = i, o = this._getFormatConfig(e);
try {
s = this.parseDate(n, r, o) || i;
} catch (u) {
r = t ? "" : r;
}
e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), e.currentDay = r ? s.getDate() : 0, e.currentMonth = r ? s.getMonth() : 0, e.currentYear = r ? s.getFullYear() : 0, this._adjustInstDate(e);
},
_getDefaultDate: function(e) {
return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date));
},
_determineDate: function(t, n, r) {
var i = function(e) {
var t = new Date;
return t.setDate(t.getDate() + e), t;
}, s = function(n) {
try {
return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), n, e.datepicker._getFormatConfig(t));
} catch (r) {}
var i = (n.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, s = i.getFullYear(), o = i.getMonth(), u = i.getDate(), a = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, f = a.exec(n);
while (f) {
switch (f[2] || "d") {
case "d":
case "D":
u += parseInt(f[1], 10);
break;
case "w":
case "W":
u += parseInt(f[1], 10) * 7;
break;
case "m":
case "M":
o += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
break;
case "y":
case "Y":
s += parseInt(f[1], 10), u = Math.min(u, e.datepicker._getDaysInMonth(s, o));
}
f = a.exec(n);
}
return new Date(s, o, u);
}, o = n == null || n === "" ? r : typeof n == "string" ? s(n) : typeof n == "number" ? isNaN(n) ? r : i(n) : new Date(n.getTime());
return o = o && o.toString() === "Invalid Date" ? r : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o);
},
_daylightSavingAdjust: function(e) {
return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
},
_setDate: function(e, t, n) {
var r = !t, i = e.selectedMonth, s = e.selectedYear, o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), (i !== e.selectedMonth || s !== e.selectedYear) && !n && this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(r ? "" : this._formatDate(e));
},
_getDate: function(e) {
var t = !e.currentYear || e.input && e.input.val() === "" ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
return t;
},
_attachHandlers: function(t) {
var n = this._get(t, "stepMonths"), r = "#" + t.id.replace(/\\\\/g, "\\");
t.dpDiv.find("[data-handler]").map(function() {
var t = {
prev: function() {
e.datepicker._adjustDate(r, -n, "M");
},
next: function() {
e.datepicker._adjustDate(r, +n, "M");
},
hide: function() {
e.datepicker._hideDatepicker();
},
today: function() {
e.datepicker._gotoToday(r);
},
selectDay: function() {
return e.datepicker._selectDay(r, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
},
selectMonth: function() {
return e.datepicker._selectMonthYear(r, this, "M"), !1;
},
selectYear: function() {
return e.datepicker._selectMonthYear(r, this, "Y"), !1;
}
};
e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
});
},
_generateHTML: function(e) {
var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D, P, H, B, j, F, I, q = new Date, R = this._daylightSavingAdjust(new Date(q.getFullYear(), q.getMonth(), q.getDate())), U = this._get(e, "isRTL"), z = this._get(e, "showButtonPanel"), W = this._get(e, "hideIfNoPrevNext"), X = this._get(e, "navigationAsDateFormat"), V = this._getNumberOfMonths(e), $ = this._get(e, "showCurrentAtPos"), J = this._get(e, "stepMonths"), K = V[0] !== 1 || V[1] !== 1, Q = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)), G = this._getMinMaxDate(e, "min"), Y = this._getMinMaxDate(e, "max"), Z = e.drawMonth - $, et = e.drawYear;
Z < 0 && (Z += 12, et--);
if (Y) {
t = this._daylightSavingAdjust(new Date(Y.getFullYear(), Y.getMonth() - V[0] * V[1] + 1, Y.getDate())), t = G && t < G ? G : t;
while (this._daylightSavingAdjust(new Date(et, Z, 1)) > t) Z--, Z < 0 && (Z = 11, et--);
}
e.drawMonth = Z, e.drawYear = et, n = this._get(e, "prevText"), n = X ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : n, r = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>" : W ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "e" : "w") + "'>" + n + "</span></a>", i = this._get(e, "nextText"), i = X ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>" : W ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (U ? "w" : "e") + "'>" + i + "</span></a>", o = this._get(e, "currentText"), u = this._get(e, "gotoCurrent") && e.currentDay ? Q : R, o = X ? this.formatDate(o, u, this._getFormatConfig(e)) : o, a = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", f = z ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (U ? a : "") + (this._isInRange(e, u) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (U ? "" : a) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, c = this._get(e, "showWeek"), h = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), d = this._get(e, "monthNames"), v = this._get(e, "monthNamesShort"), m = this._get(e, "beforeShowDay"), g = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), w = "", E;
for (S = 0; S < V[0]; S++) {
x = "", this.maxRows = 4;
for (T = 0; T < V[1]; T++) {
N = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), C = " ui-corner-all", k = "";
if (K) {
k += "<div class='ui-datepicker-group";
if (V[1] > 1) switch (T) {
case 0:
k += " ui-datepicker-group-first", C = " ui-corner-" + (U ? "right" : "left");
break;
case V[1] - 1:
k += " ui-datepicker-group-last", C = " ui-corner-" + (U ? "left" : "right");
break;
default:
k += " ui-datepicker-group-middle", C = "";
}
k += "'>";
}
k += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && S === 0 ? U ? s : r : "") + (/all|right/.test(C) && S === 0 ? U ? r : s : "") + this._generateMonthYearHeader(e, Z, et, G, Y, S > 0 || T > 0, d, v) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", L = c ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "";
for (E = 0; E < 7; E++) A = (E + l) % 7, L += "<th" + ((E + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + h[A] + "'>" + p[A] + "</span></th>";
k += L + "</tr></thead><tbody>", O = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, O)), M = (this._getFirstDayOfMonth(et, Z) - l + 7) % 7, _ = Math.ceil((M + O) / 7), D = K ? this.maxRows > _ ? this.maxRows : _ : _, this.maxRows = D, P = this._daylightSavingAdjust(new Date(et, Z, 1 - M));
for (H = 0; H < D; H++) {
k += "<tr>", B = c ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "";
for (E = 0; E < 7; E++) j = m ? m.apply(e.input ? e.input[0] : null, [ P ]) : [ !0, "" ], F = P.getMonth() !== Z, I = F && !y || !j[0] || G && P < G || Y && P > Y, B += "<td class='" + ((E + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (P.getTime() === N.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === P.getTime() && b.getTime() === N.getTime() ? " " + this._dayOverClass : "") + (I ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !g ? "" : " " + j[1] + (P.getTime() === Q.getTime() ? " " + this._currentClass : "") + (P.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!F || g) && j[2] ? " title='" + j[2].replace(/'/g, "&#39;") + "'" : "") + (I ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (F && !g ? "&#xa0;" : I ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === R.getTime() ? " ui-state-highlight" : "") + (P.getTime() === Q.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
k += B + "</tr>";
}
Z++, Z > 11 && (Z = 0, et++), k += "</tbody></table>" + (K ? "</div>" + (V[0] > 0 && T === V[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += k;
}
w += x;
}
return w += f, e._keyEvent = !1, w;
},
_generateMonthYearHeader: function(e, t, n, r, i, s, o, u) {
var a, f, l, c, h, p, d, v, m = this._get(e, "changeMonth"), g = this._get(e, "changeYear"), y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", w = "";
if (s || !m) w += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else {
a = r && r.getFullYear() === n, f = i && i.getFullYear() === n, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for (l = 0; l < 12; l++) (!a || l >= r.getMonth()) && (!f || l <= i.getMonth()) && (w += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + u[l] + "</option>");
w += "</select>";
}
y || (b += w + (s || !m || !g ? "&#xa0;" : ""));
if (!e.yearshtml) {
e.yearshtml = "";
if (s || !g) b += "<span class='ui-datepicker-year'>" + n + "</span>"; else {
c = this._get(e, "yearRange").split(":"), h = (new Date).getFullYear(), p = function(e) {
var t = e.match(/c[+\-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? h + parseInt(e, 10) : parseInt(e, 10);
return isNaN(t) ? h : t;
}, d = p(c[0]), v = Math.max(d, p(c[1] || "")), d = r ? Math.max(d, r.getFullYear()) : d, v = i ? Math.min(v, i.getFullYear()) : v, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for (; d <= v; d++) e.yearshtml += "<option value='" + d + "'" + (d === n ? " selected='selected'" : "") + ">" + d + "</option>";
e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
}
}
return b += this._get(e, "yearSuffix"), y && (b += (s || !m || !g ? "&#xa0;" : "") + w), b += "</div>", b;
},
_adjustInstDate: function(e, t, n) {
var r = e.drawYear + (n === "Y" ? t : 0), i = e.drawMonth + (n === "M" ? t : 0), s = Math.min(e.selectedDay, this._getDaysInMonth(r, i)) + (n === "D" ? t : 0), o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(r, i, s)));
e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), (n === "M" || n === "Y") && this._notifyChange(e);
},
_restrictMinMax: function(e, t) {
var n = this._getMinMaxDate(e, "min"), r = this._getMinMaxDate(e, "max"), i = n && t < n ? n : t;
return r && i > r ? r : i;
},
_notifyChange: function(e) {
var t = this._get(e, "onChangeMonthYear");
t && t.apply(e.input ? e.input[0] : null, [ e.selectedYear, e.selectedMonth + 1, e ]);
},
_getNumberOfMonths: function(e) {
var t = this._get(e, "numberOfMonths");
return t == null ? [ 1, 1 ] : typeof t == "number" ? [ 1, t ] : t;
},
_getMinMaxDate: function(e, t) {
return this._determineDate(e, this._get(e, t + "Date"), null);
},
_getDaysInMonth: function(e, t) {
return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
},
_getFirstDayOfMonth: function(e, t) {
return (new Date(e, t, 1)).getDay();
},
_canAdjustMonth: function(e, t, n, r) {
var i = this._getNumberOfMonths(e), s = this._daylightSavingAdjust(new Date(n, r + (t < 0 ? t : i[0] * i[1]), 1));
return t < 0 && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(e, s);
},
_isInRange: function(e, t) {
var n, r, i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), o = null, u = null, a = this._get(e, "yearRange");
return a && (n = a.split(":"), r = (new Date).getFullYear(), o = parseInt(n[0], 10), u = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += r), n[1].match(/[+\-].*/) && (u += r)), (!i || t.getTime() >= i.getTime()) && (!s || t.getTime() <= s.getTime()) && (!o || t.getFullYear() >= o) && (!u || t.getFullYear() <= u);
},
_getFormatConfig: function(e) {
var t = this._get(e, "shortYearCutoff");
return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
shortYearCutoff: t,
dayNamesShort: this._get(e, "dayNamesShort"),
dayNames: this._get(e, "dayNames"),
monthNamesShort: this._get(e, "monthNamesShort"),
monthNames: this._get(e, "monthNames")
};
},
_formatDate: function(e, t, n, r) {
t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
var i = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
return this.formatDate(this._get(e, "dateFormat"), i, this._getFormatConfig(e));
}
}), e.fn.datepicker = function(t) {
if (!this.length) return this;
e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), e("#" + e.datepicker._mainDivId).length === 0 && e("body").append(e.datepicker.dpDiv);
var n = Array.prototype.slice.call(arguments, 1);
return typeof t != "string" || t !== "isDisabled" && t !== "getDate" && t !== "widget" ? t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [ this[0] ].concat(n)) : this.each(function() {
typeof t == "string" ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [ this ].concat(n)) : e.datepicker._attachDatepicker(this, t);
}) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [ this[0] ].concat(n));
}, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.10.3", e.datepicker.regional.zh_CN = {
closeText: "关闭",
prevText: "&#x3C;上月",
nextText: "下月&#x3E;",
currentText: "今天",
monthNames: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
monthNamesShort: [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
dayNames: [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ],
dayNamesShort: [ "周日", "周一", "周二", "周三", "周四", "周五", "周六" ],
dayNamesMin: [ "日", "一", "二", "三", "四", "五", "六" ],
weekHeader: "周",
dateFormat: "yy-mm-dd",
firstDay: 1,
isRTL: !1,
showMonthAfterYear: !0,
yearSuffix: "年"
}, e.datepicker.setDefaults(e.datepicker.regional.zh_CN);
}(jQuery);
} catch (i) {
wx.jslog({
src: "common/lib/datepicker.js"
}, i);
}
});define("tpl/vote/vote_item.html.js",[],function(){
return'<div class="frm_control_group vote_op_third">\n	<div class="frm_label">选项{itemSize}</div>\n	<div class="frm_controls">\n		<span class="frm_input_box with_counter counter_in append"><input type="text" placeholder="" class="frm_input" name="optionss"><em class="frm_input_append frm_counter">43/43</em></span>\n		<span class="btn btn_input btn_default">\n			<button>上传图片</button>\n		</span>\n		<a href="javascript:;" class="js_delete_item" data-tag="{index}" data-item="{itemSize}">删除选项</a>\n	</div>\n</div>';
});define("tpl/vote/vote_question.html.js",[],function(){
return'<form id="question_{index}" class="vote_form">\n	<div class="vote_meta_title group">\n		<div class="vote_meta_title_opr">\n			<a href="javascript:;" class="js_question_edit" data-tag="{index}">收起</a>\n			{if index > 0}\n			<a href="javascript:;" class="js_question_delete" data-tag="{index}">删除</a>\n			{/if}\n		</div>\n		<span class="vote_warn" style="display:none">问题填写完整才能添加下一个问题</span>\n		<span class="vote_num">问题{size}</span>\n		<span class="vote_question js_vote_question"></span>\n	</div>\n	<div class="vote_meta js_item_container vote_meta_content" style="display:{if show == false}none{/if}">\n		<div class="vote_meta_detail">\n			<div class="frm_control_group">\n				<label for="" class="frm_label">标题</label>\n				<div class="frm_controls">\n					<span class="frm_input_box with_counter counter_in append vote_title js_question_title">\n						<input autofocus="" type="text" placeholder="" class="frm_input js_option_input" name="question_title" value="{title}"><em class="frm_input_append frm_counter">0/35</em>\n					</span>\n					<span class="frm_tips"></span>\n				</div>\n			</div>\n		</div>\n		<div class="vote_meta_detail js_vote_type vote_meta_radio">\n			<div class="frm_control_group">\n				<div class="frm_controls vote_meta_radio">\n					<label class="vote_radio_label selected">\n						<i class="icon_radio"></i>\n						<span type="label_content">单选</span>\n						<input name="isMlt" type="radio" value="1" class="vote_radio" {if type == 1}checked{/if}>\n					</label>\n					<label class="vote_radio_label">\n						<i class="icon_radio"></i>\n						<span type="label_content">多选</span>\n						<input name="isMlt" type="radio" value="2" class="vote_radio" {if type == 2}checked{/if}>\n					</label>\n				</div>\n			</div>	\n		</div>\n		{each options as item ids}\n		<div class="vote_meta_detail js_vote_option">\n			<div class="frm_control_group">\n				<div class="frm_label">选项{formartNum ids+1}</div>\n				<div class="frm_controls">\n					<span class="frm_input_box with_counter counter_in append">\n						<input type="text" placeholder="" class="frm_input js_option_input" name="option{ids}" value="{item.name}"><em class="frm_input_append frm_counter">0/35</em>\n					</span>\n					<!-- <span class="frm_num warning">0/35</span> -->\n					<!-- <span class="btn btn_input btn_default">\n						<a href="javascript:;" id="123">上传图片</a>\n					</span> -->\n					<div class="upload_area">\n						{if item.url}\n						<a class="btn btn_upload js_vote_upload_btn" id="js_upload_{index}_{ids}">重新上传</a>\n						{else}\n						<a class="btn btn_upload js_vote_upload_btn" id="js_upload_{index}_{ids}">上传图片</a>\n						{/if}\n					</div>\n					\n					{if ids >=2 }\n					<a href="javascript:;" class="link_delete js_delete_item" data-tag="{index}" data-item="{ids}">删除选项</a>\n					{/if}\n					<span class="frm_tips"></span>\n				</div>\n\n				<div class="js_img_container img_container" id="js_upload_{index}_{ids}" style="display:{if item.url}\'\'{else}none{/if}">\n					<span class="img_panel">\n					<!-- <img class="preview" src="{item.url}"/> -->\n						<span class="js_img_preview preview bg_img poi" data-src="{item.url}" style="background-image:url({item.url});"></span>\n					</span>\n					<a href="javascript:;" class="link_dele" id="js_delete_{index}_{ids}">删除</a>\n				</div>\n			</div>\n		</div>\n		{/each}\n		<div class="vote_meta_detail tips_wrp">\n			<p id="voteAdd" class="tips_global option_tips">\n				<a href="javascript:;" class="js_add_item" data-tag="{index}">添加选项</a>\n			</p>\n			<!--<p id="voteFull" class="tips_global option_tips">选项已满，不可继续添加</p>-->\n		</div>\n	</div>\n</form>	';
});define("tpl/vote/vote.html.js",[],function(){
return'<div class="tc_dialog_content vote_container">\n    <form id="voteForm">\n		<div class="vote_meta">\n	        <div class="vote_meta_detail">\n				<div class="frm_control_group">\n					<label for="" class="frm_label">投票名称</label>\n					<div class="frm_controls">\n						<span class="frm_input_box with_counter counter_in append vote_title"><input autofocus="" type="text" placeholder="" class="frm_input" name="vote_title" id=""><em class="frm_input_append frm_counter">0/35</em></span>\n						<p class="frm_tips">投票名称只用于管理，不显示在下发的投票内容中</p>\n					</div>\n				</div>\n	        </div>\n	    </div>\n	\n		<div class="vote_meta time_setting">\n	        <div class="vote_meta_detail">\n				<div class="frm_control_group">\n					<label for="" class="frm_label">截止时间</label>\n					<div class="frm_controls">\n						<div class="date_select timepicker">\n							<div class="datepicker_area">\n								<span class="btn datepicker_switch">\n									<input type="text" class="frm_input" style="ime-mode:disabled" onpaste="return false" id="jsVoteDate">\n									<i class="icon_datepicker"></i>\n								</span>\n							</div>\n							<!-- <div id="js_begin_time_container"><div class="ta_date">\n								<span class="date_title" id=""></span>\n								<a class="opt_sel" id="" href="#">\n									<i class="i_orderd"></i>\n								</a>\n							</div></div> -->\n							<div class="dropdown_menu time" id="jsVoteHour"></div>\n							<span class="date_select_gap">时</span>\n\n							<div class="dropdown_menu time" id="jsVoteMin"></div>\n							<span class="date_select_gap">分</span>\n						</div>\n					</div>\n				</div>\n	        </div>\n	    </div>\n		<div class="vote_meta js_vote_auth">\n	        <div class="vote_meta_detail">\n				<div class="frm_control_group">\n					<label for="" class="frm_label frm_label_top">投票权限</label>\n					<div class="frm_controls">\n						<span type="label_content">所有人都可参与</span>\n					</div>\n				</div>\n	        </div>\n	    </div>\n		 <p class="frm_tips frm_tips_btm">上传图片的最佳尺寸：300像素*300像素，其他尺寸会影响页面效果，格式png，jpeg，jpg，gif。大小不超过1M  </p>\n	</form>		\n	   \n	<div class="">\n		<div class="vote_meta_container js_question_container">\n			\n		</div>\n		<div class="vote_container_dec">\n			<a class="btn btn_default btn_add btn_vote_add" href="javascript:;" id="js_add_question"><i class="icon14_common add_gray"></i>添加问题</a>\n                        <!--#0001#--> \n			<p id="js_error" style="display:none;" class="frm_tips">问题填写完整才能添加下一个问题</p>\n                        <!--%0001%-->\n			<!--<div id="js_error" style="display:none;" class="bubble_tips bubble_left warn">\n				<div class="bubble_tips_inner">\n					<p>问题填写完整才能添加下一个问题</p>\n				</div>\n				<i class="bubble_tips_arrow out"></i>\n				<i class="bubble_tips_arrow in"></i>\n			</div>-->\n		</div>\n	</div>\n   \n</div>\n';
});define("original/tpl/whitepop.html.js",[],function(){
return'<div class="setting_panel">\n    <div class="dialog_bd_inner">\n        <p class="tips">设置该帐号的转载权限，仅对设置后再转载的文章生效，不会影响历史已转载的文章：</p>\n        <ul class="permission_list">\n            {if showAllowRe}\n            <li class="list_item gray">\n                <label class="frm_checkbox_label selected">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">可转载</span>\n                    <input type="checkbox" class="frm_checkbox" checked="checked">\n                </label>\n            </li>\n            {/if}\n            <li class="list_item">\n            {if showModify}\n                <label class="frm_checkbox_label selected">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">可修改文章</span>\n                    <input type="checkbox" class="frm_checkbox js_popinput" value="md" checked="checked">\n                </label>\n                <p class="desc">该帐号可以修改文章的内容、格式、排版等。勾选后，原公众号再行投诉修改并转载的文章侵犯著作权将不被支持。腾讯不会也无法介入该文章修改事宜的纠纷解决。建议你与该帐号事先沟通后再行选择。</p>\n            {else}\n                <label class="frm_checkbox_label">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">可修改文章</span>\n                    <input type="checkbox" class="frm_checkbox js_popinput" value="md">\n                </label>\n                <p class="desc">该帐号可以修改文章的内容、格式、排版等。勾选后，原公众号再行投诉修改并转载的文章侵犯著作权将不被支持。腾讯不会也无法介入该文章修改事宜的纠纷解决。建议你与该帐号事先沟通后再行选择。</p>\n            {/if}\n            </li>\n            <li class="list_item">\n            {if showHideSor}\n                <label class="frm_checkbox_label selected">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">可不显示转载来源</span>\n                    <input type="checkbox" class="frm_checkbox js_popinput" value="hs" checked="checked">\n                </label>\n                <p class="desc">该帐号转载文章将不再由系统注明出处。</p>\n            {else}\n                <label class="frm_checkbox_label">\n                    <i class="icon_checkbox"></i>\n                    <span class="lbl_content">可不显示转载来源</span>\n                    <input type="checkbox" class="frm_checkbox js_popinput" value="hs">\n                </label>\n                <p class="desc">该帐号转载文章将不再由系统注明出处。</p>\n            {/if}\n            </li>\n        </ul>\n    </div>\n</div>\n';
});define("original/tpl/MultiStepDialog.html.js",[],function(){
return'<div class="whitelist_dialog">\n    <div class="processor_wrp js_process"></div>\n    {each steps as item idx}\n    {if idx==0}\n    <div class="processor_panel step{idx} js_step{idx}"></div>\n    {else}\n    <div class="processor_panel step{idx} js_step{idx}" style="display:none;"></div>\n    {/if}\n    {/each}\n</div>\n';
});define("biz_web/lib/spin.js",[],function(){
var t=function(){
function t(t,n){
for(var e=~~((t[f]-1)/2),r=1;e>=r;r++)n(t[2*r-1],t[2*r]);
}
function n(n){
var e=document.createElement(n||"div");
return t(arguments,function(t,n){
e[t]=n;
}),e;
}
function e(t,n,r){
return r&&!r[z]&&e(t,r),t.insertBefore(n,r||null),t;
}
function r(t,n){
var e,r=[h,n,~~(100*t)].join("-"),i="{"+h+":"+t+"}";
if(!A[r]){
for(e=0;e<T[f];e++)try{
D.insertRule("@"+(T[e]&&"-"+T[e].toLowerCase()+"-"||"")+"keyframes "+r+"{0%{"+h+":1}"+n+"%"+i+"to"+i+"}",D.cssRules[f]);
}catch(o){}
A[r]=1;
}
return r;
}
function i(t,n){
var e,r,i=t[g];
if(void 0!==i[n])return n;
for(n=n.charAt(0).toUpperCase()+n.slice(1),r=0;r<T[f];r++)if(e=T[r]+n,void 0!==i[e])return e;
}
function o(n){
return t(arguments,function(t,e){
n[g][i(n,t)||t]=e;
}),n;
}
function s(n){
return t(arguments,function(t,e){
void 0===n[t]&&(n[t]=e);
}),n;
}
var a,u="width",f="length",l="radius",c="lines",d="trail",p="color",h="opacity",v="speed",m="shadow",g="style",w="height",b="left",x="top",y="px",k="childNodes",$="firstChild",z="parentNode",C="position",M="relative",R="absolute",j="animation",B="transform",N="Origin",E="Timeout",L="coord",O="#000",S=g+"Sheets",T="webkit0Moz0ms0O".split(0),A={};
e(document.getElementsByTagName("head")[0],n(g));
var D=document[S][document[S][f]-1],H=function(t){
this.opts=s(t||{},c,12,d,100,f,7,u,5,l,10,p,O,h,.25,v,1);
},I=H.prototype={
spin:function(t){
var n=this,r=n.el=n[c](n.opts);
if(t&&e(t,o(r,b,~~(t.offsetWidth/2)+y,x,~~(t.offsetHeight/2)+y),t[$]),!a){
var i=n.opts,s=0,u=20/i[v],f=(1-i[h])/(u*i[d]/100),l=u/i[c];
!function p(){
s++;
for(var t=i[c];t;t--){
var e=Math.max(1-(s+t*l)%u*f,i[h]);
n[h](r,i[c]-t,e,i);
}
n[E]=n.el&&window["set"+E](p,50);
}();
}
return n;
},
stop:function(){
var t=this,n=t.el;
return window["clear"+E](t[E]),n&&n[z]&&n[z].removeChild(n),t.el=void 0,t;
}
};
I[c]=function(t){
function i(e,r){
return o(n(),C,R,u,t[f]+t[u]+y,w,t[u]+y,"background",e,"boxShadow",r,B+N,b,B,"rotate("+~~(360/t[c]*k)+"deg) translate("+t[l]+y+",0)","borderRadius","100em");
}
for(var s,a=o(n(),C,M),g=r(t[h],t[d]),k=0;k<t[c];k++)s=o(n(),C,R,x,1+~(t[u]/2)+y,B,"translate3d(0,0,0)",j,g+" "+1/t[v]+"s linear infinite "+(1/t[c]/t[v]*k-1/t[v])+"s"),
t[m]&&e(s,o(i(O,"0 0 4px "+O),x,2+y)),e(a,e(s,i(t[p],"0 0 1px rgba(0,0,0,.1)")));
return a;
},I[h]=function(t,n,e){
t[k][n][g][h]=e;
};
var U="behavior",V="url(#default#VML)",W="group0roundrect0fill0stroke".split(0);
return function(){
var t,r=o(n(W[0]),U,V);
if(!i(r,B)&&r.adj){
for(t=0;t<W[f];t++)D.addRule(W[t],U+":"+V);
I[c]=function(){
function t(){
return o(n(W[0],L+"size",d+" "+d,L+N,-a+" "+-a),u,d,w,d);
}
function r(r,i,f){
e(v,e(o(t(),"rotation",360/s[c]*r+"deg",b,~~i),e(o(n(W[1],"arcsize",1),u,a,w,s[u],b,s[l],x,-s[u]/2,"filter",f),n(W[2],p,s[p],h,s[h]),n(W[3],h,0))));
}
var i,s=this.opts,a=s[f]+s[u],d=2*a,v=t(),g=~(s[f]+s[l]+s[u])+y;
if(s[m])for(i=1;i<=s[c];i++)r(i,-2,"progid:DXImage"+B+".Microsoft.Blur(pixel"+l+"=2,make"+m+"=1,"+m+h+"=.3)");
for(i=1;i<=s[c];i++)r(i);
return e(o(n(),"margin",g+" 0 0 "+g,C,M),v);
},I[h]=function(t,n,e,r){
r=r[m]&&r[c]||0,t[$][k][n+r][$][$][h]=e;
};
}else a=i(r,j);
}(),H;
}();
$.fn.spin=function(n,e){
return this.each(function(){
var r=$(this),i=r.data();
i.spinner&&(i.spinner.stop(),delete i.spinner),n!==!1&&(n=$.extend({
color:e||r.css("color")
},$.fn.spin.presets[n]||n),i.spinner=new t(n).spin(this));
});
},$.fn.spin.presets={
tiny:{
lines:8,
length:2,
width:2,
radius:3
},
small:{
lines:8,
length:4,
width:3,
radius:5
},
large:{
lines:10,
length:8,
width:4,
radius:8
}
};
});define("tpl/popup.html.js",[],function(){
return'<div class="dialog_wrp {className}" style="{if width}width:{width}px;{/if}{if height}height:{height}px;{/if}">\n	<div class="dialog">\n		<div class="dialog_hd">\n			<h3>{title}</h3>\n			<!--#0001#-->\n			<a href="javascript:;" onclick="return false" class="icon16_opr closed pop_closed">关闭</a>\n			<!--%0001%-->\n		</div>\n		<div class="dialog_bd">{=content}</div>\n		{if buttons && buttons.length}\n		<div class="dialog_ft">\n			{if miniTips}\n			<div class="js_mini_tips dialog_tool_tips">\n                {=miniTips.text}\n            </div>\n			{/if}            \n			{each buttons as bt index}\n            <span style="{if bt.isHide}display:none;{/if}" class="{bt.classWrap} btn {bt.type} btn_input js_btn_p"><button type="button" class="js_btn" data-index="{index}">{bt.text}</button></span>\n	        {/each}\n		</div>\n		{/if}\n	</div>\n</div>{if mask}<div class="mask"><iframe frameborder="0" style="filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;" src="about:blank"></iframe></div>{/if}\n';
});define("common/wx/widgetBridge.js", [], function(e, t, n) {
try {
var r = +(new Date);
"use strict", $.widgetBridge || ($.widgetBridge = function(e, t) {
var n = e, r = n.split("."), e = r.length > 1 ? r[1] : r[0];
$.fn[e] = function(r) {
var i = typeof r == "string", s = [].slice.call(arguments, 1), o = this;
r = r || {};
if (i) {
var u;
return r.indexOf("_") !== 0 && this.each(function() {
var t = $.data(this, n);
if (!t) return $.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + r + "'");
if (r === "instance") return u = t, !1;
if (r === "option") return u = t.options, !1;
u || (u = (t[r] || jQuery.noop).apply(t, s)), r === "destroy" && (t.elements = null);
}), u;
}
var a = this;
return this.each(function() {
var e = this, i = $.data(this, n);
if (!i) {
i = $.extend(!0, {}, t), i.destroy || (i.destroy = function() {
$.removeData(e, n);
}), i.options = $.extend(!0, i.options || {}, r), i.element = $(this), i.elements = a, i._create && (o = i._create.call(i, r));
var s = o && o.length && o.get(0) || this;
$.data(s, n, i);
}
}), o;
};
});
} catch (i) {
wx.jslog({
src: "common/wx/widgetBridge.js"
}, i);
}
});define("biz_common/utils/monitor.js",[],function(){
var n=[],i={};
return i.setAvg=function(e,t,o){
return n.push(e+"_"+t+"_"+o),n.push(e+"_"+(t-1)+"_1"),i;
},i.setSum=function(e,t,o){
return n.push(e+"_"+t+"_"+o),i;
},i.send=function(){
if(0!=n.length){
var i=new Image;
i.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";"),n=[];
}
},i;
});define("media/preview.js",["common/qq/events.js","common/wx/phoneView.js","biz_common/moment.js","tpl/media/preview/appmsg.html.js","tpl/media/preview/card.html.js","tpl/media/preview/moments.html.js","tpl/media/preview/chat.html.js"],function(e,i){
"use strict";
function t(e,i){
var t=wx.data.time;
wx.cgiData.appmsg_data&&wx.cgiData.appmsg_data.create_time&&(t=wx.cgiData.appmsg_data.create_time);
for(var a=[],n=0;8>n&&e["title"+n];n++)a.push({
copyright_headimg:i[n].copyright_headimg,
copyright_nickname:i[n].copyright_nickname,
title:e["title"+n],
time:d.unix(t).format("YYYY-MM-DD"),
unix:t,
avatar:wx.url("/misc/getheadimg?fakeid="+wx.data.uin),
author:e["author"+n],
nickName:wx.data.nick_name,
content:e["content"+n],
digest:e["digest"+n],
img:e["cdn_url"+n]||e["fileid"+n]&&wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId="+e["fileid"+n])||"",
show_cover:e["show_cover_pic"+n],
sourceurl:e["sourceurl"+n],
ad_info:e["ad_info"+n],
is_share_copyright:e["is_share_copyright"+n],
guide_words:e["guide_words"+n],
share_copyright_url:e["share_copyright_url"+n]
});
return a;
}
var a=e("common/qq/events.js")(!0),n=e("common/wx/phoneView.js"),d=e("biz_common/moment.js"),s=null,m={
appmsg:e("tpl/media/preview/appmsg.html.js"),
card:e("tpl/media/preview/card.html.js"),
moments:e("tpl/media/preview/moments.html.js"),
chat:e("tpl/media/preview/chat.html.js")
};
i.show=function(i,r,o){
if(r=r||0,s=t(i,o),s.index=r,0!=s.length){
s[0].date=d.unix(s[0].unix).format("MM月DD日");
{
new n({
html:e("tpl/media/preview/card.html.js"),
data:s.length>1?{
list:s,
nickName:wx.data.nick_name
}:s[0],
todo:function(){
var e=this;
e.$dom.find(".jsPhoneViewPlugin").on("click",".jsPhoneViewLink",function(){
$(this).hasClass("selected")||($(this).addClass("selected").siblings().removeClass("selected"),
"appmsg"==$(this).data("id")?e.render(m.appmsg,{
data:s[r],
index:r,
length:s.length
}):"card"==$(this).data("id")?s.length>1?e.render(m.card,{
list:s,
nickName:wx.data.nick_name
}):e.render(m.card,s[0]):"moments"==$(this).data("id")?e.render(m.moments,{
list:s
}):"chat"==$(this).data("id")&&e.render(m.chat,{
list:s
}));
}),e.$dom.on("click",".jsPhoneViewCard",function(){
var i=$(this);
i.hasClass("disabled")||("undefined"!=typeof i.data("index")&&(r=i.data("index")),
e.render(m.appmsg,{
data:s[r],
index:r,
length:s.length
}));
}),e.$dom.on("click",".jsPhoneViewPub",function(){
a.trigger("_preview");
});
}
});
}
}
};
});define("tpl/media/appmsg_edit/article_list_item.html.js",[],function(){
return'<div id="appmsgItem{id}" data-fileId="{file_id}" data-id="{id}" data-msgindex="{msg_index}" class="js_appmsg_item appmsg_item_wrp {if cover}has_thumb{/if}">\n    <div class="first_appmsg_item" {if !isFirst}style="display:none;"{/if} title="{title_tips}">\n        <div class="cover_appmsg_item">\n            <h4 class="appmsg_title"><a class="js_appmsg_title" href="javascript:void(0);" onclick="return false;">{title || \'标题\'}</a></h4>\n            <div class="appmsg_thumb_wrp js_appmsg_thumb" style="background-image:url(\'{cover.nogif()}\');">\n                <!--<img class="js_appmsg_thumb appmsg_thumb" src="{cover}">-->\n                <div class="appmsg_thumb default">\n                    <i class="icon_appmsg_thumb">封面图片</i>\n                </div>\n            </div>        \n        </div>\n        <div class="appmsg_edit_mask js_readonly">\n            <a onclick="return false;" class="icon20_common sort_down_white js_down" data-id="{id}" href="javascript:;" title="下移">向下</a>\n        </div>\n    </div>\n    <div class="appmsg_item has_cover" {if isFirst}style="display:none;"{/if} title="{title_tips}">\n        <div class="appmsg_thumb_wrp js_appmsg_thumb" style="background-image:url(\'{cover.nogif()}\');">\n            <div class="appmsg_thumb default">\n                <i class="icon_appmsg_thumb_small">缩略图</i>\n            </div>\n        </div>\n        <h4 class="appmsg_title js_appmsg_title">{title || \'标题\'}</h4>\n        <div class="appmsg_edit_mask js_readonly">\n            <a onclick="return false;" class="icon20_common sort_up_white   js_up"   data-id="{id}" href="javascript:;" title="上移">向上</a>\n            <a onclick="return false;" class="icon20_common sort_down_white js_down" data-id="{id}" href="javascript:;" title="下移">向下</a>\n            <a onclick="return false;" class="icon20_common del_media_white js_del"  data-id="{id}" href="javascript:;" title="删除">删除</a>\n        </div>\n    </div>\n</div>\n';
});define("media/draft.js",["biz_common/jquery.md5.js","common/qq/Class.js","biz_web/lib/store.js","biz_common/moment.js","media/report.js"],function(t){
"use strict";
function e(t,e){
return"draft_ls|%s|bizuin:%s|appid:%s|ua:%s|start_write:%s|start_read:%s|start_write_err_STK:%s|start_read_err_STK:%s".sprintf(t||"",wx.data.uin||"",e||0,window.navigator.userAgent,h.lsStartWriteEnable,h.lsStartReadEnable,h.lsStartWriteErrLog,h.lsStartReadErrLog);
}
function a(t){
var e=t.stack||t.toString()||"";
try{
e=e.replace(/http(s)?:\/\/res\.wx\.qq\.com/g,"");
for(var a=/\/([^.]+)\/js\/(\S+?)\.js(\,|:)?/g;a.test(e);)e=e.replace(a,"$2$3");
}catch(t){
e=t.stack?t.stack:"";
}
return e.replace(/\n/g,"");
}
function r(){
if(!f.isLocalStorageNameSupported()){
var t=e("notsupport");
return m.logReport("65080_44_1;65080_45_1",t,"img"),void(h.lsSupport=!1);
}
m.logReport("65080_44_1","","img"),h.lsSupport=!0;
var r=+new Date+"";
try{
window.localStorage.setItem(h.namespace,r);
}catch(i){
h.lsStartWriteEnable=0,h.lsStartWriteErrLog=a(i);
}
var s="";
try{
s=window.localStorage.getItem(h.namespace);
}catch(i){
h.lsStartReadEnable=0,h.lsStartReadErrLog=a(i);
}
window.localStorage.removeItem(h.namespace),s==r&&(h.lsStartWriteEnable=1,h.lsStartWriteErrLog="",
h.lsStartReadEnable=1,h.lsStartReadErrLog="");
}
function i(t,e,a,r){
return l(t,e,a,3,0,r);
}
function s(t,e,a){
return l(t,e,a,4);
}
function n(t){
var e=c(t);
e.appKey+=h.readOnlyDraftName;
var a=o(e.appKey);
return a&&a.list?a.list||!1:!1;
}
function _(t){
var e=c(t);
e.appKey+=h.readOnlyDraftName,f.remove(e.appKey);
}
function o(t){
var e=!1,a=!1;
if(e=f.get(t,function(){
a=!0;
}),a===!0||!e||"v2"!=e.v)return!1;
if(e.md5===$.md5(e.data)){
try{
e=JSON.parse(e.data);
}catch(r){
return!1;
}
return e?e:!1;
}
return!1;
}
function l(t,r,i,s,n,_){
if(h.lsSupport!==!0||!t)return!1;
i=1*i||0,_=1*_||0;
var o=c(r);
3==s&&(o.appKey+=h.conflictName),4==s&&(o.appKey+=h.readOnlyDraftName);
var l=1,d=[],p="65080_31_1",u="",g={
data:"",
md5:"",
v:v
},y=+new Date,S={
list:t,
seq:i,
write_t:y,
active_id:n
};
3==s&&(S.ls_seq=_);
try{
g.data=JSON.stringify(S),g.md5=$.md5(g.data);
}catch(K){
l=-6,p+=";65080_86_1",d.push("serialize_err_STK:"+a(K));
}
if(1==l&&f.set(o.appKey,g,function(t){
l=-1,p+=";65080_34_1",d.push("write_err_STK:"+a(t));
}),1==l&&(u=f.get(o.appKey,function(t){
l=-2,p+=";65080_36_1",d.push("read_err_STK:"+a(t));
})),1==l&&g.md5!=u.md5&&(p+=";65080_38_1",l=-3),1==l)return 2==s&&(p+=";65080_47_1"),
3==s?(p+=";65080_88_1",m.logReport(p,e("conflict_data",r)+("|data:"+g.data),"ajax")):m.logReport(p,"","img"),
$("#js_autosave").attr("title"," 已自动保存").fadeIn(500),!0;
var q=e("writeerr",r)+"|handle_type："+l+"|"+d.join("|");
return p+=";65080_32_1",p+=h.lsStartWriteEnable&&h.lsStartReadEnable?";65080_40_1":";65080_42_1",
2==s?(p+=";65080_48_1",q+="|leave_data:"+g.data):3==s&&(p+=";65080_88_1",q+="|conflict_data:"+g.data),
m.logReport(p,q,"ajax"),!1;
}
function d(t){
if(h.lsSupport!==!0)return!1;
var r=c(t);
f.remove(r.timeKey);
var i=1,s=[],n="65080_63_1";
f.remove(r.appKey,function(t){
n+=";65080_70_1",i=-4,s.push("clear_err_STK:"+a(t));
});
var _="";
if(1==i&&(_=f.get(r.appKey,function(t){
n+=";65080_72_1",i=-2,s.push("read_err_STK:"+a(t));
})),1==i&&_&&(n+=";65080_74_1",i=-3),1==i)return m.logReport(n,"","img"),!0;
n+=";65080_64_1",n+=h.lsStartWriteEnable&&h.lsStartReadEnable?";65080_66_1":";65080_68_1";
var o=e("clearerr",t)+"|handle_type："+i+"|"+s.join("|");
return m.logReport(n,o,"ajax"),!1;
}
function c(t){
var e={
draftId:wx.data.uin+(t?t:"")
};
return e.timeKey="Time"+e.draftId,e.appKey="App"+e.draftId,e;
}
t("biz_common/jquery.md5.js");
var p=t("common/qq/Class.js"),f=t("biz_web/lib/store.js"),u=t("biz_common/moment.js"),m=t("media/report.js"),v="v2",h={
lsStartWriteEnable:0,
lsStartReadEnable:0,
lsStartWriteErrLog:"",
lsStartReadErrLog:"",
namespace:"__editordraft__",
conflictName:"__conflict",
readOnlyDraftName:"__readonlydraft",
lsSupport:!1,
diffTime:Math.floor(wx.cgiData.svr_time-new Date/1e3)
};
r();
var g=p.declare({
init:function(t,e,a){
var r=this;
r.app_id=t;
var i=c(t);
r.draftId=i.draftId,r.timeKey=i.timeKey,r.appKey=i.appKey,r.seq=1*e,r.editor=a,r.isDropped=!1,
r.conflict=!1,r.activeId=0,r.data=r.get();
},
_updateAppid:function(t,e){
this.app_id=t;
var a=c(t);
this.draftId=a.draftId,this.timeKey=a.timeKey,this.appKey=a.appKey,this.seq=e;
},
_supportUserData:function(){
try{
var t=document.createElement("input");
t.addBehavior("#default#userData");
}catch(e){
return!1;
}
return!0;
},
_getSaveTime:function(){
return f.get(this.timeKey);
},
_showTips:function(t){
$("#js_autosave").attr("title",t+" 已自动保存").show(),$("#js_draft_tips").show().find(".js_msg_content").html("已从本地读取"+t+"的草稿");
},
_getDefaultLog:function(t){
return e(t,this.app_id);
},
_getErrorMessage:function(t){
return a(t);
},
_validateMutilWin:function(t,e){
"undefined"==typeof e&&(e=this.activeId);
var a=this,r=o(this.appKey);
return a.editor.fireEvent("reportAddNum",65080,104,1),r&&r.list?1*this.seq>1*r.seq?!0:1*this.seq<1*r.seq?(this.data=r.list||!1,
this.seq=1*r.seq,t!==!0&&a.editor.fireEvent("syn_draft"),!1):!r.active_id||1*r.active_id<1*e?!0:1*r.active_id>1*e?(this.data=r.list||!1,
this.seq=1*r.seq,t!==!0&&a.editor.fireEvent("syn_draft"),!1):!0:!0;
},
showTips:function(){
$("#js_draft_tips").show().find(".js_msg_content").html('<span class="js_msg_content">点击<span class="link_global" id="js_draft_cancel">撤消</span>刚刚的导入操作。</span>');
},
active:function(t){
var e=this;
return this.activeId>0?!0:(this.activeId=+new Date,this.editor.fireEvent("active_state_change"),
setTimeout(function(){
e._validateMutilWin(t,0);
},1e3),!0);
},
silent:function(){
this.activeId=0,this.editor.fireEvent("active_state_change");
},
clear:function(){
return d(this.app_id);
},
save:function(t,e){
var a=this._validateMutilWin();
return a===!1?(this.silent(),!1):l(t,this.app_id,this.seq,e,this.activeId);
},
forceSave:function(t,e){
return l(t,this.app_id,this.seq,1,e||+new Date);
},
get:function(){
if(h.lsSupport!==!0)return!1;
var t=this,e=1,a=[],r="65080_50_1",i=!1,s="",n="";
if(s=f.get(t.appKey,function(i){
e=-2,r+=";65080_76_1",a.push("read_err_STK:"+t._getErrorMessage(i));
}),1==e&&s)if(r+=";65080_57_1","v2"==s.v)if(r+=";65080_82_1",n="",s.md5===$.md5(s.data)){
try{
s=JSON.parse(s.data);
}catch(_){
r+=";65080_80_1",e=-5;
}
1==e&&(1*s.seq>1*t.seq?(i=!1,e=-8,r+=";65080_90_1"):1*t.seq>1*s.seq?(t.conflict=!0,
t.conflict_ls_seq=1*s.seq,i=s.list||!1):(t.conflict_ls_seq=1*s.seq,i=s.list||!1));
}else e=-3,r+=";65080_78_1";else"v1"==s.v?(r+=";65080_59_1",n=s.t||"",i=s.list||!1,
t.conflict_ls_seq=0):(n=f.get(t.timeKey),r+=";65080_61_1",i=s||!1,t.conflict_ls_seq=0);
if(1==e&&n)try{
Number(wx.cgiData.updateTime)>u(n,"YYYY-MM-DD HH:mm:ss").unix()+h.diffTime&&(t.conflict=!0);
}catch(_){}
if(t.conflict===!0&&(r+=";65080_84_1"),1==e)return m.logReport(r,"","img"),i||!1;
r+=";65080_51_1",r+=h.lsStartWriteEnable&&h.lsStartReadEnable?";65080_53_1":";65080_55_1";
var o=t._getDefaultLog("readerr")+"|handle_type："+e+"|"+a.join("|");
return m.logReport(r,o,"ajax"),!1;
}
});
return{
constructor:g,
clear:d,
saveConflict:i,
saveReadOnlyDraft:s,
getReadOnlyDraft:n,
clearReadOnlyDraft:_
};
});define("media/article.js",["media/common.js","common/qq/Class.js","biz_common/jquery.validate.js","common/wx/Tips.js","common/wx/dialog.js","common/wx/mpEditor/plugin/remoteimg.js","common/wx/popover.js"],function(e){
"use strict";
var t=e("media/common.js"),i=e("common/qq/Class.js"),r=e("biz_common/jquery.validate.js"),s=e("common/wx/Tips.js"),n=(e("common/wx/dialog.js"),
e("common/wx/mpEditor/plugin/remoteimg.js")),o=(e("common/wx/popover.js"),r.rules),a=wx.cgiData,_=["一","二","三","四","五","六","七","八","九","十"],d=i.declare({
init:function(e){
this.opt=e,this.$dom=$(e.dom),this.ueditor=e.ueditor,this.data=this._initData(e.data,e.index),
this.freeUEditor=e.freeUEditor,this.scrollTop=Math.min($(".main_hd").offset().top,$(".main_bd").offset().top),
this._initDigest();
},
_initDigest:function(){
{
var e=this.data,t=e.get("digest");
e.get("content"),e.get("is_share_copyright");
}
return!this.opt.app_id||this.opt.isNew?void(this.autoDigest=!0):this.getDigestFromContent()==t?void(this.autoDigest=!0):void(this.autoDigest=!1);
},
_initData:function(e,t){
var i={};
if(i=$.extend({
is_new_video:0,
can_reward:0,
tags:[],
title:"",
title_tips:"",
author:"",
file_id:"",
digest:"",
content:"",
source_url:"",
cover:"",
releasetime:0,
need_open_comment:1,
only_fans_can_comment:0,
isFirst:0==t,
cdn_url:"",
cdn_url_back:"",
reward_money:0,
seq:t,
reward_wording:"",
msg_index:t,
source_url_checked:0,
show_cover_pic:0,
link_count:0,
copyright_type:0,
releasefirst:"",
platform:"",
reprint_permit_type:"",
original_article_type:"",
ori_white_list:"",
free_content:"",
fee:0,
ad_info:{
ad_id:"",
ad_img:"",
img:"",
nick_name:"",
pt:"",
trade_mode:""
},
copyright_headimg:"",
copyright_nickname:"",
guide_words:"",
is_share_copyright:0,
share_copyright_url:""
},e),i.only_fans_can_comment=1*i.only_fans_can_comment,i.file_id=1*i.file_id===0?"":i.file_id+"",
wx&&wx.cgiData&&0==wx.cgiData.can_use_comment&&(i.need_open_comment=0),0==i.need_open_comment&&(i.only_fans_can_comment=0),
i.title_tips="第%s篇图文".sprintf(_[t]),i.cdn_url_back||(i.cdn_url_back=i.cdn_url),i.cdn_url?i.cover=i.cdn_url=i.cdn_url.nogif():i.file_id&&(wx.cgiData.appmsg_data.multi_item&&$.each(wx.cgiData.appmsg_data.multi_item,function(e,t){
t.file_id==i.file_id&&(i.cover=t.cover);
}),i.cover||(i.cover=wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s".sprintf(i.file_id)))),
i.source_url_checked=i.source_url?1:0,1*i.is_share_copyright==1){
i.guide_words=i.guide_words||"分享一篇文章。",i.cdn_url=i.cover,i.author="",i.file_id="";
var r=i.content.html(!1).replace(/<img[^>]*>/g,"<p>[图片]</p>").replace(/<iframe [^>]*?class=\"res_iframe card_iframe js_editor_card\"[^>]*?data-cardid=\"\"[^>]*?><\/iframe>/gi,"<p>[卡券]</p>").replace(/<mpvoice([^>]*?)js_editor_audio([^>]*?)><\/mpvoice>/g,"<p>[语音]</p>").replace(/<qqmusic([^>]*?)js_editor_qqmusic([^>]*?)><\/qqmusic>/g,"<p>[音乐]</p>").replace(/<mpgongyi([^>]*?)js_editor_gy([^>]*?)><\/mpgongyi>/g,"<p>[公益]</p>").replace(/<mpshop([^>]*?)js_editor_shop([^>]*?)><\/mpshop>/g,"<p>[小店]</p>").replace(/<iframe([^>]*?)class=[\'\"][^\'\"]*video_iframe([^>]*?)><\/iframe>/g,"<p>[视频]</p>").replace(/(<iframe[^>]*?js_editor_vote_card[^<]*?<\/iframe>)/gi,"<p>[投票]</p>").replace(/<mp-weapp([^>]*?)weapp_element([^>]*?)><\/mp-weapp>/g,"<p>[小程序]</p>"),s=document.createElement("div");
s.innerHTML=r,r=s.innerText.trim().substr(0,140),r=r.split("\n").map(function(e){
return"<p>"+e+"</p>";
}),i.content=r.join("");
}
return i=this.ueditor.initPluginData(i),{
set:function(e,t){
"undefined"!=typeof i[e]&&(i[e]=t);
},
get:function(e){
return i[e];
},
getData:function(){
return i;
},
setData:function(e){
i=e;
}
};
},
updateIndex:function(e){
this.data.set("seq",e),this.data.set("msg_index",e),this.data.set("isFirst",0==e),
this.data.set("title_tips","第%s篇图文".sprintf(_[e]));
},
getIndex:function(){
return 1*this.data.get("seq");
},
setListItem:function(e){
this.$item=$(e);
},
showErrMsg:function(e,t){
this.ueditor.fireEvent("showErrMsg",e,t);
},
scrollIntoView:function(e,t){
this.ueditor.fireEvent("scrollIntoView",e,t);
},
hideAllErrMsg:function(){
this.ueditor.fireEvent("hideAllErrMsg");
},
_setEditorContent:function(){
var e=this,t=e.data.getData();
e.ueditor.ready(function(){
e.ueditor.setContent("");
try{
e.ueditor.setContent(t.content);
}catch(i){
t.content&&""==e.ueditor.getUeditor().getContent()&&((new Image).src="//mp.weixin.qq.com/mp/jsmonitor?idkey=%s_%s_1&lc=1&log0=editor_setcontent_error;errmsg:%s,uin:%s".sprintf(28308,0,i.message,wx.data.uin),
window.BJ_REPORT&&"function"==typeof window.BJ_REPORT.report&&i&&i.stack&&(i.stack="editor_setcontent_error|"+i.stack,
window.BJ_REPORT.report(i)),i.stack&&console&&console.error&&console.error("[BJ-REPORT]",i.stack));
}
e.ueditor.setHistory(e.undoHistory);
});
},
_setOriginal:function(){
var e=this,t=e.data.getData(),i=e.$dom,r=$("#js_original");
if(r.find(".js_original_type").hide().eq(t.copyright_type||0).show(),t.copyright_type){
if(r.find(".js_original_content").show(),r.find(".js_original_publish").val(t.releasefirst),
r.find(".js_reprint_frm").val(t.reprint_permit_type),r.find(".js_url").text(t.source_url).closest("li")[t.source_url?"show":"hide"](),
r.find(".js_author").text(t.author),r.find(".js_platform").text(+t.releasefirst?"微信公众平台":t.platform),
r.find(".js_classify").text(t.original_article_type),i.find(".js_author").closest(".appmsg_edit_item").eq(0).hide(),
i.find(".js_reward").checkbox("disabled",!1),$("#js_pay").checkbox("disabled",1==t.reprint_permit_type),
1==t.reprint_permit_type?r.find(".js_pay_tips").text("（只有“禁止转载”的原创文章才可以设置付费阅读）").show():r.find(".js_pay_tips").text("（每月可群发10篇付费阅读文章）"),
"object"!=typeof t.ori_white_list)try{
t.ori_white_list=$.parseJSON(t.ori_white_list.html(!1)).white_list;
}catch(s){
t.ori_white_list=[];
}
$.each(t.ori_white_list,function(e,i){
i.title=[],1!=t.reprint_permit_type&&i.title.push("可转载"),1*i.can_modify&&i.title.push("可修改文章"),
1*i.can_hide_source&&i.title.push("可不显示转载来源"),i.title=i.title.join("、");
});
var n=template.render("tpl_whitelist",{
list:t.ori_white_list
});
r.find(".js_whitelist").html(n);
}else r.find(".js_original_content").hide(),i.find(".js_author").closest(".appmsg_edit_item").eq(0).show(),
i.find(".js_reward").checkbox("disabled",!0),i.find(".js_reward_div.js_reward_ios_wrap").hide(),
$("#js_pay").checkbox("disabled",!0),r.find(".js_pay_tips").show().text("（只有“禁止转载”的原创文章才可以设置付费阅读）"),
r.find(".js_pay_setting").hide(),r.find(".js_whitelist").empty();
},
_setPay:function(){
var e=this,t=e.data.getData(),i=e.$dom;
$("#js_pay").checkbox("checked",!!t.payforread_enabled),i.find(".js_pay_setting")[t.payforread_enabled?"show":"hide"]().find(".js_fee").text(t.fee?(t.fee/100).toFixed(2):""),
i.find(".js_pay_tips")[t.payforread_enabled?"hide":"show"](),e.freeUEditor.val(t.free_content||"").trigger("keydown");
},
_setReprintArticle:function(){
var e=this.data,t=$("#reprint_article_main");
t.find(".js_title").text(e.get("title")),t.find(".js_nickname").text(e.get("copyright_nickname")),
t.find(".js_headimg").attr("src",e.get("copyright_headimg")).attr("alt",e.get("copyright_nickname")),
t.find(".js_content").html(e.get("content")),t.find(".js_link").attr("href",e.get("share_copyright_url")),
t.show();
},
_setAd:function(){
var e=this,t=e.data.getData(),i=e.$dom;
if(t.ad_info&&t.ad_info.ad_id){
t.ad_info.video_info&&(t.ad_info.ad_img=t.ad_info.video_info.thumbUrl);
var r=template.render("js_ad_preview_tpl",{
ad_id:t.ad_info.ad_id,
ad_img:t.ad_info.ad_img,
img:t.ad_info.img,
nick_name:t.ad_info.nick_name,
pt:t.ad_info.pt
});
i.find(".js_ad_preview").html(r),i.find(".js_tag").text(0==t.ad_info.trade_mode?"广告推荐":"内容定制");
}
},
hideErrorTips:function(){
this.$dom.find(".js_title_error,.js_author_error,.js_desc_error,.js_tip_mask_msg,.js_cover_error,.js_url_error,.js_content_error,.js_platform_error,.js_ad_error_tips,.js_reward_money_error").hide(),
this.$dom.find(".js_tip_mask").removeClass("error_mask").addClass("hover_mask");
},
setAutoDigest:function(e){
this.autoDigest=!!e;
},
getDigestFromContent:function(){
var e=this.data;
return $.trim(1*e.get("is_share_copyright")==1?e.get("guide_words").substr(0,54):e.get("content").text().html(!1).substr(0,54));
},
setDigest:function(){
var e=this.data,t=$.trim(e.get("digest"));
this.autoDigest&&!t?e.set("digest",this.getDigestFromContent()):e.set("digest",t);
},
flush:function(){
var e=this,t=e.data,i=e.$dom;
i.find(".js_field").each(function(){
var e=$(this),i=e.attr("name"),r=e.attr("type");
"checkbox"==r?t.set(i,e.checkbox("value")?1:0):"checkbox"==e.data("type")?t.set(i,1*e.val()?1:0):"guide_words"==i?t.set(i,e.val()):t.set(i,$.trim(e.val()));
}),1*t.get("is_share_copyright")==1?(t.set("guide_words",t.get("guide_words")||"分享一篇文章。"),
e.setDigest(),t.set("file_id",""),t.set("author","")):(t.setData(e.ueditor.getEditorData(t.getData())),
e.setDigest()),i.find('.js_desc[name="digest"]').val(t.get("digest")),t.set("source_url",t.get("source_url_checked")?t.get("source_url"):"");
var r=t.get("source_url");
r&&!/:\/\//.test(r)&&t.set("source_url","http://"+r),0==i.find(".js_reward_ios:checked").val()&&t.set("reward_money",0);
var s=i.find("#js_original");
if(t.set("copyright_type",$(".js_original_type:visible").index()),t.set("copyright_type",t.get("copyright_type")<0?0:t.get("copyright_type")),
t.get("copyright_type")){
t.set("releasefirst",s.find(".js_original_publish").val()),t.set("author",s.find(".js_author").text()),
t.set("platform",+t.get("releasefirst")?"":s.find(".js_platform").text()),t.set("reprint_permit_type",s.find(".js_reprint_frm").val()),
t.set("original_article_type",s.find(".js_classify").text());
var n=[];
s.find(".js_whitelist").children().each(function(){
n.push({
nickname:$.trim($(this).text()),
openid:$(this).attr("data-openid"),
can_modify:$(this).attr("data-can_modify"),
can_hide_source:$(this).attr("data-can_hide_source")
});
}),t.set("ori_white_list",JSON.stringify2({
white_list:n
}));
}
var o=$(".js_ad_msg");
if(t.set("ad_info",{
ad_id:o.data("ad_id")||"",
ad_img:o.data("ad_img")||"",
img:o.data("img")||"",
nick_name:o.data("nick_name")||"",
pt:o.data("pt")||"",
trade_mode:o.data("trade_mode")||""
}),0==t.get("need_open_comment")?t.set("only_fans_can_comment",0):t.set("only_fans_can_comment",1*$(".js_comment_setting:checked").val()||0),
1==a.can_use_hyperlink){
var _=t.get("content").match(/<a([^>]*)>(.*?)<\/a>/g);
_&&t.set("link_count",_.length);
}
return t.set("isFirst",0==e.$item.index()),t.set("free_content",this.freeUEditor.val()||""),
t.set("fee",100*i.find(".js_fee").text()),e.scrollTop=Math.max($(window).scrollTop(),$(".main_hd").offset().top),
e.undoHistory=e.ueditor.getHistory(),this;
},
setHistory:function(e){
this.undoHistory=e;
},
getHistory:function(){
return this.undoHistory;
},
getData:function(e,t){
var i=this,r=i.data.getData(),s={},n=["title","content","digest","author","fileid","cdn_url","cdn_url_back","music_id","video_id","show_cover_pic","shortvideofileid","vid_type","copyright_type","releasefirst","platform","reprint_permit_type","original_article_type","can_reward","reward_wording","reward_money","need_open_comment","only_fans_can_comment","sourceurl","payforread_enabled","free_content","fee","voteid","voteismlt","supervoteid","cardid","cardquantity","cardlimit","isbn","ori_white_list","ad_info","guide_words","is_share_copyright","share_copyright_url"];
$.each(n,function(e,t){
switch(t){
case"fileid":
s.fileid=r.file_id;
break;

case"sourceurl":
s.sourceurl=r.source_url;
break;

case"cdn_url":
s.cdn_url=(r.cdn_url||"").https2http().nogif();
break;

case"cover":
break;

case"ad_info":
s.ad_id=r.ad_info&&r.ad_info.ad_id||"";
break;

default:
s[t]=r[t];
}
});
var o=e?t?i.validateStrictly(s):i.validate(s):$.extend(!0,{},r);
return!!o&&(o.cover=void 0),o;
},
getAllImgData:function(){
var e=this.ueditor.fireEvent("getRemoteList"),t=[];
for(var i in e){
var r=e[i];
t.push(r.uid);
}
t=0==t.length?"":","+t.join(",")+",";
for(var s=this.ueditor.getDocument(),n=s.getElementsByTagName("*"),o=",",a=[],i=0,_=n.length;_>i;i++){
var r=n[i];
if(/img/i.test(r.nodeName)){
var d=r.getAttribute("_src")||r.src||"",c=r.getAttribute("data-remoteid")||"";
if($(r).hasClass("js_catchremoteimageerror"))continue;
if(!d)continue;
if(o.indexOf(","+d+",")>=0)continue;
var l=!1;
t&&c&&t.indexOf(","+c+",")>=0&&(l=!0),o+=d+",",a.push({
url:this.git2Img(d),
uid:c,
isRemote:l
});
}else{
var u=r.getAttribute("style")||r.style.cssText||"";
if(u=u.match(/;?\s*(background|background-image)\s*\:[^;]*?url\(([^\)]+)\)/),u&&u[2]){
var d=u[2].replace(/^['"]|['"]$/g,""),c=r.getAttribute("data-remoteid")||"";
if($(r).hasClass("js_catchremoteimageerror"))continue;
if(!d)continue;
if(o.indexOf(","+d+",")>=0)continue;
var l=!1;
t&&c&&t.indexOf(","+c+",")>=0&&(l=!0),o+=d+",",a.push({
url:this.git2Img(d),
uid:c,
isRemote:l
});
}
}
}
return a;
},
git2Img:function(e){
return/\/0\?(.*&)?wx_fmt=gif/.test(e)?e.replace(/\/0\?/,"/s640?"):e;
},
validate:function(e){
var i,r=this,n=r.data.getData(),a=r.$dom,_=$("<div>").html(e.content),d=!0,c=null,l="",u=$(_).find(".js_catchremoteimageerror").length;
if(u)return i=a.find(".js_content_error"),this.showErrMsg(i,"正文有%s张图片粘贴失败".sprintf(u)),
this.scrollIntoView(i,200),null;
e.title||e.content||e.fileid||(this.showErrMsg(a.find(".js_content_error"),"请先输入一段正文（或者标题），再点击保存按钮。"),
r.ueditor.getUeditor().focus(),c=c||".js_content_error",d=null),wx.cgiData.is_no_cover_open&&(e.cdn_url&&!e.fileid||wx.cgiData.cover_restrict&&e.fileid);
var f=t.validate({
key:"title",
content:e.title
});
if(f&&f.msg&&(this.showErrMsg(a.find(".js_title_error"),f.msg),c=c||".js_title_error",
d=null,2==f.type&&((new Image).src="https://mp.weixin.qq.com/misc/jslog?id=115&content=badjs&level=error")),
1*e.is_share_copyright==1)o.rangelength(e.guide_words,[0,140])||(this.showErrMsg(a.find(".js_content_error"),"推荐语长度不能超过140字"),
c=c||".js_content_error",d=null);else{
0==e.copyright_type&&e.author.len()>16&&(this.showErrMsg(a.find(".js_author_error"),"作者不能超过8个字"),
c=c||".js_author_error",d=null);
var m=t.validate({
key:"content",
content:e.content,
editor:r.ueditor
});
m&&m.msg&&(4==m.errType?d=null:(this.showErrMsg(a.find(".js_content_error"),m.msg),
c=c||".js_content_error",d=null));
}
if(n.source_url_checked&&""==e.sourceurl&&(a.find(".js_url_error").text("请输入原文链接").show(),
c=c||".js_url",l=l||"请输入原文链接",d=null),e.sourceurl&&!o.url(e.sourceurl)&&(a.find(".js_url_error").text("链接不合法").show(),
c=c||".js_url",l=l||"链接不合法",d=null),o.rangelength(e.digest,[0,120])||(a.find(".js_desc_error").text("摘要长度不能超过120字").show(),
c=c||".js_desc",d=null),1==e.can_reward&&e.reward_wording.len()>30&&(l=l||"赞赏引导语不能超过15个字",
c=c||".js_reward_div",d=null),1==e.can_reward&&e.reward_money>0&&(e.reward_money<1||e.reward_money>256||e.reward_money.toString().indexOf(".")>-1)&&(a.find(".js_reward_money_error").text("赞赏金额范围为1-256，只能是整数").show(),
l=l||"赞赏金额范围为1-256",c=c||".js_reward_ios_money",d=null),!d)return c&&this.scrollIntoView(a.find(c),150),
null;
if(e.payforread_enabled){
if(!/\d+(\.\d+)?/.test(e.fee))return s.err("请输入正确的付费金额"),null;
if(""==e.free_content)return s.err("请输入免费区域内容"),null;
}
return this.hideAllErrMsg(),e;
},
validateStrictly:function(e){
var i,r=this,n=r.data.getData(),a=r.$dom,_=$("<div>").html(e.content),d=!0,c=null,l="",u=$(_).find(".js_catchremoteimageerror").length;
if(u)return i=a.find(".js_content_error"),this.showErrMsg(i,"正文有%s张图片粘贴失败".sprintf(u)),
this.scrollIntoView(i,200),null;
var f=t.validate({
key:"title",
content:e.title,
strict:!0
});
if(f&&f.msg&&(this.showErrMsg(a.find(".js_title_error"),f.msg),c=c||".js_title_error",
d=null,2==f.type&&((new Image).src="https://mp.weixin.qq.com/misc/jslog?id=115&content=badjs&level=error")),
1*e.is_share_copyright==1)o.rangelength(e.guide_words,[0,140])||(this.showErrMsg(a.find(".js_content_error"),"推荐语长度不能超过140字"),
c=c||".js_content_error",d=null);else{
0==e.copyright_type&&e.author.len()>16&&(this.showErrMsg(a.find(".js_author_error"),"作者不能超过8个字"),
c=c||".js_author_error",d=null);
var m=t.validate({
key:"content",
content:e.content,
strict:!0,
editor:r.ueditor
});
m&&m.msg&&(4==m.errType?d=null:(this.showErrMsg(a.find(".js_content_error"),m.msg),
c=c||".js_content_error",d=null));
}
if(e.fileid||e.cdn_url||(this.showErrMsg(a.find(".js_cover_error"),"必须插入一张图片"),c=c||".js_cover_error",
d=null),n.source_url_checked&&""==e.sourceurl&&(a.find(".js_url_error").text("请输入原文链接").show(),
c=c||".js_url",l=l||"请输入原文链接",d=null),0==e.copyright_type&&e.sourceurl&&!o.url(e.sourceurl)&&(a.find(".js_url_error").text("链接不合法").show(),
c=c||".js_url",l=l||"链接不合法",d=null),o.rangelength(e.digest,[0,120])||(a.find(".js_desc_error").text("摘要长度不能超过120字").show(),
c=c||".js_desc",d=null),1==e.can_reward&&e.reward_wording.len()>30&&(l=l||"赞赏引导语不能超过15个字",
d=null),1==e.can_reward&&e.reward_money>0&&(e.reward_money<1||e.reward_money>256||e.reward_money.toString().indexOf(".")>-1)&&(a.find(".js_reward_money_error").text("赞赏金额范围为1-256，只能是整数").show(),
l=l||"赞赏金额范围为1-256",c=c||".js_reward_ios_money",d=null),!d)return c&&this.scrollIntoView(a.find(c),150),
null;
if(e.payforread_enabled){
if(!/\d+(\.\d+)?/.test(e.fee))return s.err("请输入正确的付费金额"),null;
if(""==e.free_content)return s.err("请输入免费区域内容"),null;
}
return e;
},
render:function(){
{
var e=this,t=e.$dom,i=e.data.getData();
0==e.$item.index();
}
if(t.find(".js_field").each(function(){
var e=$(this),t=e.attr("name"),r=e.attr("type");
"checkbox"==r?e.checkbox("checked",!!i[t]):e.val(i[t]||"").trigger("blur keydown ");
}),i.reward_money?(t.find(".js_reward_ios_money").show().find("input").val(i.reward_money),
t.find(".js_reward_ios").eq(1).checkbox("checked",!0)):(t.find(".js_reward_ios_money").hide(),
t.find(".js_reward_ios").eq(0).checkbox("checked",!0)),1*t.find(".js_show_cover_pic").val()===1,
t.find("textarea.js_guide_words,input.js_title,input.js_author,input.js_reward_wording,input.js_reward_ios_money.js_desc,textarea.js_desc").trigger("keydown"),
t.find("textarea.js_guide_words,input.js_title,input.js_author,textarea.js_desc").trigger("blur"),
t.find(".js_comment").checkbox("checked",0==i.need_open_comment?!1:!0),t.find(".js_comment_setting").each(function(e){
e==Number(i.only_fans_can_comment||0)?$(this).checkbox("checked",!0):$(this).checkbox("checked",!1);
}),i.cdn_url){
var r=i.cdn_url.http2https().nogif();
if(t.find(".js_cover").find("img").remove(),n.isLocalDomain(r)){
var s=t.find(".js_cover").show().find(".js_cover_preview").css("backgroundImage",'url("'+r+'")');
s.find(".js_tip_mask_msg").hide(),s.find(".js_tip_mask").removeClass("error_mask").addClass("hover_mask");
}else $(".js_appmsg_item.current").removeClass("has_thumb").find(".js_appmsg_thumb").css("backgroundImage",'url("")'),
t.find(".js_cover").hide(),t.find(".js_cdn_url").val("");
}else if(i.file_id){
var r=i.cover||wx.url("/cgi-bin/getimgdata?mode=large&source=file&fileId=%s>".sprintf(i.file_id));
t.find(".js_cover").find("img").remove(),n.isLocalDomain(r)?t.find(".js_cover").prepend('<img src="%s">'.sprintf(r)).show():(t.find(".js_cover").hide(),
$(".js_appmsg_item.current").removeClass("has_thumb").find(".js_appmsg_thumb").css("backgroundImage",'url("")'),
t.find(".js_file_id").val(""));
}else t.find(".js_cover").hide().find("img").remove();
i.source_url_checked?t.find(".js_url_area .frm_input_box").show():t.find(".js_url_area .frm_input_box").hide(),
1==i.can_reward?(t.find(".js_reward").checkbox("checked",!0),t.find(".js_reward_div,.js_reward_ios_wrap").show()):(t.find(".js_reward").checkbox("checked",!1),
t.find(".js_reward_div,.js_reward_ios_wrap").hide()),0==i.need_open_comment?$("#js_comment_setting_wrp").hide():$("#js_comment_setting_wrp").show(),
i.ad_info&&i.ad_info.ad_id?($("#js_editor_insertad").addClass("disabled"),t.find(".js_ad_preview").empty(),
t.find(".js_ad_preview").parent().show()):($("#js_editor_insertad").removeClass("disabled"),
t.find(".js_ad_preview").empty(),t.find(".js_ad_preview").parent().hide()),e._setOriginal(),
e._setPay(),e._setAd(),1*i.is_share_copyright==1?(t.find(".js_cover_tip").html("分享图文不可设置封面"),
e.ueditor.fireEvent("renderEditorByType",2),$("#guide_words_main").show(),e._setReprintArticle()):(e.ueditor.fireEvent("renderEditorByType",1),
$("#guide_words_main").hide(),$("#reprint_article_main").hide(),e._setEditorContent()),
e.ueditor.getUeditor().focus();
}
});
return d;
});