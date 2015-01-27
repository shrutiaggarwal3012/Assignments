$(document).ready(function(){
	AsynTask.initialize();
});

AsynTask = 
(function()
{
	'use strict';
	var  initialize = function()
	{
		$('#start').click(function(){
			startAsynctask();
		});
	}

	function startAsynctask() 
	{
		var requests = [];
		requests.push(sendAsyncRequest("http://ip.jsontest.com/", "first request completed"));
		requests.push(sendAsyncRequest("http://echo.jsontest.com/key/value/one/two", "second request completed"));
		requests.push(sendAsyncRequest("http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D", "third request completed"));
		
		$.when.apply($, requests).done(function(){alert("all request completed");});
	}

	function sendAsyncRequest(url,message)
	{
	
		var	dummyRequest = 
		$.ajax({
			url:url,
			dataType: 'jsonp',
			type:"GET",
			success:function(data)
			{
				alert(message);
			}
		}); 
		return dummyRequest;
	}

	var AsynTask  = { initialize : initialize } ;
	return AsynTask;
})();


