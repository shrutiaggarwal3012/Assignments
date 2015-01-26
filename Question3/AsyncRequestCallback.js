requests = [];
var dummyRequest ;
dummyRequest = $.ajax({
					url:"http://ip.jsontest.com/",
					dataType: 'jsonp',
					type:"GET",
					success:function(data)
					{
						alert("first request completed");
					}

				});
requests.push(dummyRequest);
dummyRequest = $.ajax({
	url:"http://echo.jsontest.com/key/value/one/two",
	 dataType: 'jsonp',
	type:"GET",
	success:function(data)
	{
		alert("second request complted");
	}

})

requests.push(dummyRequest);
dummyRequest = $.ajax({
	url:"http://validate.jsontest.com/?json=%7B%22key%22:%22value%22%7D",
	 dataType: 'jsonp',
	type:"GET",
	success:function(data)
	{
		alert("third request completed");
	}

})
requests.push(dummyRequest);
/*
loadInfo: function(){
    var room = ['room1','room2','room3'],
    dates = [],
    prices = [],
    requests = [];

    $.each(booking.rooms, function(key, room_name) {
        var aRequest;

        aRequest = $.getJSON('/get_info.php?room='+room_name, function(data) {
            dates[room_name] = data;
        });
        requests.push(aRequest);

        aRequest = $.getJSON('/get_info.php?room='+room_name+'&prices', function(data) {
            prices[room_name] = data;
        });
        requests.push(aRequest);

    })*/

    $.when.apply($, requests).done(function(){alert("completed");console.log("Hello");});

