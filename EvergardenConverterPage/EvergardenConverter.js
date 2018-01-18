var veconv_a = document.getElementById("veconv_a");
var veconv_b = document.getElementById("veconv_b");
var veconv_editb = document.getElementById("veconv_editmode");
var veconv_box2 = document.getElementById("veconv_box2");
var veconv_editr = false;
var veconv_bgimg = "lightgray url(EvergardenConverterPage/vlcsnap21h25m59s933.jpg) no-repeat left top";
veconv_synca2b();
function veconv_synca2b() {
    veconv_b.value = veconv_a.value;
}
function veconv_syncb2a() {
    veconv_a.value = veconv_b.value;
}
function veconv_onClickA() {
    
}
function veconv_onClickB() {
    veconv_editmode(true,true);
}
function veconv_onBlurA() {
    veconv_editmode(false,true);
}
function veconv_editmode(isedit,cchg) {
    if (cchg && veconv_editr) {
        veconv_editr = false;
        return;
    }
    if (isedit) {
        veconv_b.style.display = "none";
        veconv_a.style.display = "inline";
        veconv_a.focus();
    } else {
        veconv_a.style.display = "none";
        veconv_b.style.display = "inline";
    }
    if (cchg) veconv_editb.checked = isedit;
}
function veconv_editmodechange() {
    veconv_editr = true;
    veconv_editmode(veconv_editb.checked);
}
function veconv_fontsizech(t) {
    veconv_b.style.fontSize = t.value;
}
function veconv_bgchange(t) {
    if (t.checked) {
        veconv_box2.style.background = veconv_bgimg;
    } else {
        veconv_box2.style.background = "#FFF";
    }
}