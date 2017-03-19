$(document).ready(() => {
  let $connect = $("span:contains('Connect')");

  $connect.on('click', function() {
    setTimeout(() => {
      let $sendnow = $("button:contains('Send now')");
      $sendnow.on('click', function() {
        window.close();
      })
      $sendnow.trigger('click');
    }, 1000);
  })

  if ($connect.length === 0) {
    window.close();
  } else {
    $connect.trigger('click');
  }
})
