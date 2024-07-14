var urls = [];
chrome.runtime.onStartup.addListener(function () {
  fetch(chrome.runtime.getURL("urls.txt"))
    .then((response) => response.text())
    .then((data) => {
      console.log("Contents of urls.txt:", data);
      urls = data.split("\n");
    })
    .catch((error) => {
      console.error("Error reading urls.txt:", error);
    });
});

//same thing but for when it's first installed
chrome.runtime.onInstalled.addListener(function () {
  fetch(chrome.runtime.getURL("urls.txt"))
    .then((response) => response.text())
    .then((data) => {
      console.log("Contents of urls.txt:", data);
      urls = data.split("\n");
    })
    .catch((error) => {
      console.error("Error reading urls.txt:", error);
    });
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.tabs.get(tabId, function (tab) {
    console.log("Tab updated:", tab.url);
    checkUrl(tab.url, tab.id);
  });
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    console.log("User switched to tab:", tab.url);
    checkUrl(tab.url, tab.id);
  });
});

function checkUrl(url, id) {
  for (let i = 0; i < urls.length; i++) {
    if (url.includes(urls[i])) {
      console.log("Match found for url:", url);
      chrome.scripting.executeScript({
        target: { tabId: id },
        files: ["scripts/popup.js"],
      });
      break;
    } else {
      console.log("No match found");
    }
  }
}
