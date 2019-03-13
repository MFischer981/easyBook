function popup() {
    document.getElementById("popup_stage1").style.display = "block";
}

function popup2() {
    document.getElementById("popup_stage1").style.display = "none";
    document.getElementById("popup_stage2").style.display = "block";
}

function popup3() {
    document.getElementById("popup_stage2").style.display = "none";
    document.getElementById("popup_stage3").style.display = "block";
}

function finish() {
    document.getElementById("popup_stage3").style.display = "none";
}