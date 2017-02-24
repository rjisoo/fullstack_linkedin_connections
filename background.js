chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(urls) {
       // console.log("message recieved" + msg);
       // port.postMessage("Hi Popup.js");

       console.log('URLS', urls)

       urls.split(',').forEach((url, i) => {
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

// DEMO LINKS

// https://www.linkedin.com/in/rjisoo/,https://www.linkedin.com/in/damonye/,https://www.linkedin.com/in/lisa-pan/,https://www.linkedin.com/in/sam-wheeler/,https://www.linkedin.com/in/robbyntongue/,https://www.linkedin.com/in/ianmunrobot/,https://www.linkedin.com/in/yoo-nah-park/
