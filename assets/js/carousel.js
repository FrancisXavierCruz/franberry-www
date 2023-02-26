document.addEventListener("DOMContentLoaded", function () {
    var selected = 1;
    setInterval(function () {
        document.querySelector("#item-" + selected).checked = true;
        selected++;
        if (selected > 5) {
            selected = 1;
        }
    }, 2000);
});