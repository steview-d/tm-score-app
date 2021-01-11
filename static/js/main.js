$('.plus').click(function () {
  $(this)
    .prev()
    .val(+$(this).prev().val() + 1);
});
$('.minus').click(function () {
  let credits = $(this)[0].hasAttribute('data-credits') ? -5 : 0;

  if ($(this).next().val() > credits) {
    $(this)
      .next()
      .val(+$(this).next().val() - 1);
  }
});

$('.tr-plus').click(function () {
  $(this)
    .prev()
    .val(+$(this).prev().val() + 1);
});
$('.tr-minus').click(function () {
  if ($(this).next().val() > 14) {
    $(this)
      .next()
      .val(+$(this).next().val() - 1);
  }
});

$('#reset-board').click(function () {
  $('input').each(function () {
    if ($(this).hasClass('tr-count')) {
      $(this).val(20);
    } else {
      $(this).val(0);
    }
  });
});

$('#production-phase').click(function () {
  // Convert energy to heat
  let energyBank = parseInt($('#energy-bank').val());
  let heatBank = parseInt($('#heat-bank').val());
  heatBank += energyBank;
  $('#heat-bank').val(heatBank);
  $('#energy-bank').val(0);

  // Add prod to bank
  $('.prod').each(function () {
    let prod = parseInt($(this).find('input').val());
    let bank = parseInt($(this).prev().find('input').val());
    bank += prod;
    $(this).prev().find('input').val(bank);
  });

  // Add TR to Credits
  let trNum = parseInt($('#tr-num').val());
  let creditsBank = parseInt($('#credits-bank').val());
  creditsBank += trNum;
  $('#credits-bank').val(creditsBank);

  // Need to add section for TR num so it can
  // be added to Credits when running prod phase.
});

$('#load-state').click(function () {
  if (localStorage.getItem('tmSaveState') != null) {
    let saveState = localStorage.getItem('tmSaveState').split(',');
    $('input').each(function (idx) {
      this.value = saveState[idx];
    });
  }
});

$('#save-state').click(function () {
  let saveState = [];
  $('input').each(function () {
    saveState.push(this.value);
  });
  localStorage.setItem('tmSaveState', saveState);
});

$('#clear-state').click(function () {
  localStorage.removeItem('tmSaveState');
});
