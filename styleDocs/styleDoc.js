/*After many hours of testing, I have given up. Time to resort to classes*/
function toggle(id, sty1, sty2) {
    let target = document.getElementById("styleText");
    if (document.getElementById(id).checked == true) {
        target.setAttribute("style", sty1 + sty2);
    } else {
        target.setAttribute("style", sty1 + "1");
    }
}
function tik() {

}
