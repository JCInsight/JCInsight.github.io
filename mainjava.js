let sectionToggle = 0;
function SectionHoverRight(num, toggle) {
    if (toggle == 1) {
        document.getElementById(num).style.color = "blue";
    } else {
        document.getElementById(num).style.color = "white";
    }
}