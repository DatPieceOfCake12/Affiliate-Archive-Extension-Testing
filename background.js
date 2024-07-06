chrome.tabs.onActivated.addListener(function (activeInfo) {
  chrome.tabs.get(activeInfo.tabId, function (tab) {
    console.log("User switched to tab:", tab.url);
  });
});
