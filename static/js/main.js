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
  $('input').each(function () {
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
  $('.prod').each(function () {
    let prod = parseInt($(this).find('input').val());
		let bank = parseInt($(this).prev().find('input').val());
		bank += prod
		$(this).prev().find('input').val(bank)

		// credits cannot go below 0, but should be ok
		// as the TR will be min 20 so will stop it ever
		// going to 0 as most the neg prod can be is -5


  });

  // Need to add section for TR num so it can
  // be added to Credits when running prod phase.
});

// Add save state
// - Save all input values to local storage and
// retieve on click on repop input values.
