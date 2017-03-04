

//Global variables
var answers = ['30', '11', '35', '23', '27'];
var data =$('input');
var correctAnswer=0;
var inCorrectAnswer=0;
var empty=0;
var counter=30;

function startGame(){
	$('.data').css('display', 'none');
	for(var i=0; i<data.length; i++){
		if(data[i].checked){
			if(answers.indexOf(data[i].value) !==-1){
				correctAnswer++;

			}
			else{
				inCorrectAnswer++;
			}
		}//End of first if statement

	}//End of for loop
	var result=correctAnswer+inCorrectAnswer;
	if(result!==answers.length){
		empty= answers.length-result;

	}
	$('.empty').html("You have "+empty+" empty.")

	$('.correct').html("You have "+correctAnswer+" correct answers.");
	$('.incorrect').html("You have "+inCorrectAnswer+" wrong answers.");

	$('.result').css('display','block');

}//End of the startGame function




$('.start').on('click', function(){
	$('.start').css('display', 'none');
	$('.data').css('display', 'block');

	var startCounter = setInterval(function(){
		counter--;
		if(counter>9){
				$('.counter').html("The time remaining is....."+"00:"+counter+".");
		}
		else if(counter<=9){
				$('.counter').html("The time remaining is....."+"00:0"+counter+".");
		}
		if(counter <=0){
			clearInterval(startCounter);
			startGame();
		}
	}, 1000);


	$('.done').on('click',function(){
		clearInterval(startCounter);
		startGame();

	});

});