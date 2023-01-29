//clicking of list items
$("ul").on("click", " li ", function(){
	$(this).toggleClass("completed");
});


//clicking of delete icon
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
    	$(this).remove();
    });
    event.stopPropagation();
});


//add new todo in input box
$("input[type='text']").keypress(function(event){
     if(event.which === 13){
     	var textValue= $(this).val();
     	$(this).val("");
     $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + textValue + "</li>")
     }
});


