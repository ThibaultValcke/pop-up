document.addEventListener("DOMContentLoaded", function() {
    var cross = document.getElementById('pop_up_cross')

    cross.onclick = function() {
        var popup = document.getElementById('popup')
        popup.style.display='none';

        var popup_bg = document.getElementById('popup_container')
        popup_bg.style.display='none';
    };
});
