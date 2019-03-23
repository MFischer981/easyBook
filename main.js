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

var student;
function deleteStudent() {
    student = event.target.parentNode;
    document.getElementById("popup_delete").style.display = "block";
}

function closeDelete() {
    document.getElementById("popup_delete").style.display = "none";
}

function acceptDelete() {
    document.getElementById("popup_delete").style.display = "none";
    student.style.display = 'none';
}