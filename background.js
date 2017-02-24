// let url_arr =
//   ['https://www.linkedin.com/in/james-dicolandrea/',
//   'https://www.linkedin.com/in/mb3311/',
//   'https://www.linkedin.com/in/reicolee/',
//   'https://www.linkedin.com/in/chloemrice/'
//   // 'https://www.linkedin.com/in/andres-de-jesus-80566054/'
//   // 'https://www.linkedin.com/in/anujshah333'
//   // 'https://www.linkedin.com/in/schen22',
//   // 'https://www.linkedin.com/in/rjisoo'
//   ]



 chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(urls) {
       // console.log("message recieved" + msg);
       // port.postMessage("Hi Popup.js");

       console.log('URLS', urls)

       urls.split('/n').forEach((url, i) => {
          setTimeout(function() {
            chrome.tabs.create({url: url}, function(tab) {
              chrome.tabs.executeScript(null, { file: "jquery.js" }, function() {
                chrome.tabs.executeScript(null, {file: "content.js"});
              })
            });
          }, 10000 * i);
        })
    });
 })
