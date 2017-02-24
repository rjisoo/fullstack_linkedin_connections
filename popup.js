$(document).ready(() => {

   var port = chrome.extension.connect({
        name: "Sample Communication"
   });

  $('#submitButton').on('click', () => {
    const urls = $('#urls').val()
    port.postMessage(urls);
  })

   port.onMessage.addListener(function(msg) {
      console.log("message recieved" + msg);
   });

})
