
var switchon=true

if($('.body').hasClass('light') && switchon=true){
	$('.switch').on('click', function(e){
	$('.status').text('Hey, who turn off the lights?')
	$('body').removeClass('light')
	$('body').addClass('dark')
	})}


else if($('.body').hasClass('dark')){
	$('.switch').on('click', function(e){
	$('.status').text("It's so bright in here!")
	$('body').removeClass('dark')
	$('body').addClass('light')

	

})}
