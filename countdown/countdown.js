const i = 1;

//getMonth() function gives range from 0-11, not 1-12 like we want it to.
function Timer() {
    let d = new Date();
    document.getElementById("year").innerHTML = d.getFullYear();
    document.getElementById("month").innerHTML = d.getMonth() + 1;
    document.getElementById("day").innerHTML = d.getDate();
    document.getElementById("hour").innerHTML = d.getHours();
    document.getElementById("minute").innerHTML = d.getMinutes();
    document.getElementById("second").innerHTML = d.getSeconds();
    if (document.getElementById("second").innerText.length == 1) {
        document.getElementById("second").style.color = "blue";
        document.getElementById("second").style.translate = "15px";
    } else {
        document.getElementById("second").style.color = "red";
        document.getElementById("second").style.translate = "0";
    }
    document.getElementById("milli").innerHTML = d.getMilliseconds();
}