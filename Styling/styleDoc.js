function toggle(id) {
    if (document.getElementById(id).innerHTML == "x") {
        document.getElementById(id).innerHTML = " ";
    } else {
        document.getElementById(id).innerHTML = "x";
    }
}