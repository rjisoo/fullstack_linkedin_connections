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

// https://www.linkedin.com/in/rjisoo/,https://www.linkedin.com/in/damonye/,https://www.linkedin.com/in/lisa-pan/,https://www.linkedin.com/in/sam-wheeler/,https://www.linkedin.com/in/robbyntongue/,https://www.linkedin.com/in/ianmunrobot/,https://www.linkedin.com/in/yoo-nah-park/
