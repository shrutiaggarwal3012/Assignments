
requests = [];
$(document).ajaxComplete(function(){
	requests.push(this);	
})
var dummyRequest ;
dummyRequest = $.ajax({
					url:"http://ip.jsontest.com/",
					dataType: 'jsonp',
					type:"GET",
					success:function(data)
					{
						alert("Hello");
					}

				});

dummyRequest = $.ajax({
	url:"http://echo.jsontest.com/key/value/one/two",
	 dataType: 'jsonp',
	type:"GET",
	success:function(data)
	{
		alert("Hello");
	}

});

dummyRequest = $.ajax({
	url:"http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D",
	 dataType: 'jsonp',
	type:"GET",
	success:function(data)
	{
		alert("Hello");
	}

});

$.when.apply($, requests).done(function()
	{
		alert("Completed"); console.log("Hello");
	});

