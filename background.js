chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
        	console.log(details);
         return {cancel: "mp4".indexOf(details.url)!=-1}; 
       },
        {urls: ["*://*.douban.com/*"],types:["image", "object","other"]},
        ["blocking"]
);