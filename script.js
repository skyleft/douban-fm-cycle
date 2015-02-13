$(document).ready(function(){

	//add the button
	$("<div class='manipulator' id='repeat' />").appendTo("body");

	var isRepeat = false;
	$("#repeat").click(function(){

		//chrome.storage.local.get('isRepeat',function(data){
			if(isRepeat){
				isRepeat = false;
				chrome.runtime.sendMessage({'isRepeat': false});
				console.log("Repeat Mode is Off!");
				// chrome.storage.local.set({'isRepeat': false}, function() {
		  //           console.log("Repeat Mode is Off!");
		  //       });
			}else{
				isRepeat = true;
				chrome.runtime.sendMessage({'isRepeat': true});
				console.log("Repeat Mode is On!");
				// chrome.storage.local.set({'isRepeat': true}, function() {
    //         		console.log("Repeat Mode is On!");
    //       		});
			}
		//})
		
	});

});
