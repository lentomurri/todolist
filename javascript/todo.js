let ul = $("ul");
let li = $("li");

//cross over to do
ul.on("click", "li", function() {
  $(this).toggleClass("linethrough");
})

//click on bin icon to remove
ul.on("click", "span", function(ev) {
    //fadeOut: the milliseconds for the fade out +
    //the remove function happens at THE END of the Fadeout
      $(this).parent().fadeOut(500, function(){
        $(this).remove();
      });
      //stops events piling up from child to parents
      ev.stopPropagation();
      ev.preventDefault();
});

//create new to do
let input = $("input[type='text']");


input.keydown( function(e) {
  //set enter as the key to record the to do
  var key = e.which;
  if(key === 13) {
    let todo = input.val();
    $(this).val("");
    todo = "<li><span><i class='far fa-trash-alt'></i></span>" + todo + "</li>";
    ul.append(todo);
  }
}
);

// //hover over icon to highlight which toDo is selected
// ul.on("mouseenter", "li", function() {
//   $(this).addClass("listhover")
// });
// ul.on("mouseleave", "li", function() {
//   $(this).removeClass("listhover")
// });
