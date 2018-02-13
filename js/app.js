$(document).foundation()

$('[data-toggle-dia]').click(function (ev){
  const panel = $(this).data('toggle-dia')
  $('#lineup-tabs').foundation('selectTab', panel)
})


const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function (ev){
  $offCanvas.foundation('close')
  setTimeout(() => {
    $sticky.css('left', '0px')
  }, 0);
})