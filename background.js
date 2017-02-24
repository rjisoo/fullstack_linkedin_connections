let url_arr =
  ['https://www.linkedin.com/in/lisa-pan',
  'https://www.linkedin.com/in/damonye',
  'https://www.linkedin.com/in/schen22',
  'https://www.linkedin.com/in/rjisoo']


url_arr.forEach( url => {
  chrome.tabs.create({url: url}, function(tab) {
    chrome.tabs.executeScript(null, {file: "content.js"});
  })
})
