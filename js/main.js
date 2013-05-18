$(document).ready(function(){
	$.ajax({
		url: "https://webfeed.firebaseio.com/feeds.json",
		//url: "https//localhost/data.json",
		dataType: 'json',
		success: function(data){
			updateStream(data);
		}
 
	});	

	function updateStream(data){
		//var $targSection = $('#css ul');
		var $targSection = null;
		
		$.each(data,function(index,value){
			//TODO value.cat contains the target reference do accordingly cat ['html','css','js'] if cat is empty of general or none of the above should go to general
			if( value.cat == 'css'){
				$targSection = $('#css ul');
			}		
			else if( value.cat == 'html'){
				$targSection = $('#html ul');
			}
			else if( value.cat == 'js'){
				$targSection = $('#javascript ul');
			}
			else if(value.cat == 'general'){
				$targSection = $('#general ul');
			}
			$("<li>" + value.text + "</li>").appendTo($targSection);
		});

	}
});

