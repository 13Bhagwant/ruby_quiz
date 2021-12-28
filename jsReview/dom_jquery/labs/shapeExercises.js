//Part 1
a = $('#orange-container .shape.red' );
b = $('#green-container .shape.medium,#green-container .small' );
c = $('.container .shape');
d = $('a');
e = $('li a');
f = $('.small.blue.circle').length;

//Part 2
a = $('#button-1').on('click', function(event) {
    $('.shape').remove()
  });

b = $('#button-2').on('click', function(event) {
    $(this).attr('disabled','true')
    });

c =  $('#button-3').on('click', function(event) {
    console.log('Button 3 was clicked ')
});

//Part 3

a = $("button").on("click", function(){
    console.log("Button " + $(this).attr("id") + " was clicked");
    });; 