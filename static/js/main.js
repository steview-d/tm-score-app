$('.plus').click(function () {
  $(this)
    .prev()
    .val(+$(this).prev().val() + 1);
});
$('.minus').click(function () {
  let credits = $(this)[0].hasAttribute('data-credits') ? -5 : 0;

  if ($(this).next().val() > credits)
    $(this)
      .next()
      .val(+$(this).next().val() - 1);
});

$('#reset-board').click(function () {
  $('input').each(function (index, data) {
    $(this).val(0);
  });
});

$('#production-phase').click(function () {
  // Convert energy to heat
  let energyBank = parseInt($('#energy-bank').val());
  let heatBank = parseInt($('#heat-bank').val());
  heatBank += energyBank;
  $('#heat-bank').val(heatBank);

  // Add prod to bank
});
