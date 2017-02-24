
 var port = chrome.extension.connect({
      name: "Sample Communication"
 });

// $('#submitButton').on('click', () => {
//   const $urlval = $('#urls').val()
//   console.log($urlval)
//   console.log('IN HERE')
//   port.postMessage($('#urls').val());
// })
// $('form').on('submit', (event) => {
//   console.log(event);
// })

document.getElementById('submitButton').onclick

 port.onMessage.addListener(function(msg) {
    console.log("message recieved" + msg);
 });
