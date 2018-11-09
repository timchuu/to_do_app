// check of ul todos by clicking

$("ul").on("click", "li", function() {
	/*********************************************************
	//Long Way
	// //if li is grey 
	// console.log($(this).css("color"));
	// if($(this).css("color") === "rgb(128, 128, 128)") {
	// 	//turn it black
	// 	$(this).css({
	// 	//else turn it gray
	// 	color: "black",
	// 	textDecoration: "none"
	// });
	
	// }
	// else {
	// $(this).css({
	// 	//else turn it gray
	// 	color: "gray",
	// 	textDecoration: "line-through"
	// });
	
	// }
	**********************************************************/
	//short way

	$(this).toggleClass("completed");	

});

//click on x to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
		e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
	if(e.which === 13) {
		//grabing todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});