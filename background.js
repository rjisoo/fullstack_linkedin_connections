chrome.extension.onConnect.addListener(function(port) {
  port.onMessage.addListener(function(urls) {
    let urls_arr = urls.match(/\S+/g);

    urls_arr.forEach((url, i) => {
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

// http://www.linkedin.com/in/rjisoo/,
// http://www.linkedin.com/in/damonye/,
// http://www.linkedin.com/in/lisa-pan/,
// http://github.com/sianokotoba
