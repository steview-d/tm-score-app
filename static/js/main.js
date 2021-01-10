$('.plus').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
});
$('.minus').click(function () {
    let credits = $(this)[0].hasAttribute('data-credits') ? -5:0;

    if ($(this).next().val() > credits) $(this).next().val(+$(this).next().val() - 1);
});