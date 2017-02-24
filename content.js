window.onLoad = () => {
  console.log("WHAT???")
  document.getElementsByTagName('span').filter()
    "span:contains('Connect')").trigger('click');
  setTimeout(function() {
    console.log("INSIDE HERE")
    jQuery("button:contains('Send now')").trigger('click');
  }, 1000);
})
