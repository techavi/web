
$(document).ready(function(){
	$.ajax({
		url: "https://webfeed.firebaseio.com/feeds.json",
		dataType: 'json',
		success: function(data){
			updateStream(data);
		}

	});	


	function updateStream(data){
		var $targSection = $('#css ul');

		$.each(data,function(index,value){
			$("<li>" + value.text + "</li>").appendTo($targSection);
		});

	}






});

