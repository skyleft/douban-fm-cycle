var prevSong;
var isRepeat = false;
chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          //return {cancel: false}; 
          var pat = /^.*mr\d{1}\.douban.com.*\.mp4$/;
          var currentSong = details.url;
          if(pat.test(currentSong)){
            // chrome.storage.local.get('isRepeat',function(data){
            //   if (data.isRepeat) {
            //     chrome.storage.local.get('currentSong',function(data2){
            //       if(data2.currentSong){
            //         alert(data2.currentSong);
            //         details.url = data2.currentSong;
                    
            //       }
                    
            //     })
            //   }else{
            //     saveCurrentSong(currentSong);
            //   }
            // });
            if(isRepeat&&prevSong&&(prevSong!=currentSong)){
              return {redirectUrl:prevSong};
            }else{
              prevSong = currentSong;
            }
          } 
       },
        {urls: ["*://*.douban.com/*"],types:["image", "object","other"]},
        ["blocking"]
);

chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
  if(message.isRepeat){
    isRepeat = true;
  }else{
    isRepeat = false;
  }
  console.log('Got a message,turn '+isRepeat?'On':'Off' );
});


function saveCurrentSong(currentSong) {
        if(currentSong){
          chrome.storage.local.set({'currentSong': currentSong}, function() {
            console.log("current song url is "+currentSong);
          });
        }
}