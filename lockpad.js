$(function () {
    $(".lockpad").on("click", function (e) {
        var t = $(this);
        t.is(".locked") && (t.addClass("unlocking").removeClass("locked"), setTimeout(function () {
                t.removeClass("unlocking").addClass("unlocked")
            }, 300))
    });
});