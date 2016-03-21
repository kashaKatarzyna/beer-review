// THIS FUNCTION GET INVOKED WHEN THE USER CLICKS THE BUTTON. HERE WE TAKE THE USER INPUT OF BEER AND CATEGORY 
// AND APPEND IT TO THE BEER SECTION AS A PARAGRAPH. SO WE CAN HAVE A LIST OF EACH ONE UNDER ANOTHER.
// THIS FUNCTION ALSO INVOKED LATER FUNCTIONS.

$('.post-beer').on('click', function (e) {
    e.preventDefault();

    var beerName = $('#beer-name').val();
    var beerCategory = $('#beer-category').val();

$('.beers').append('<p>' + beerName + " " + beerCategory + '</p>');

  addBeer(beerName, beerCategory);
  updateBeers();
});


// THIS FUNCTION WAS INVOKED BY THE .POST-BEER FUNCTION. IT CREATES A NEW OBJECT FROM THE USERS INPUT OF BEER NAME AND CATEGORY.
// DEPENDING WHAT THE USER PUT IN IT GETS ASSIGNED TO THE NAME AND CATEGORY PROPERTY AS A NEW VALUE.
// THE PROPERTY WAS DECLARED IN THE PARENTHESIS OF THE FUNCTION.
// ONCE THE OBJECT GETS CREATED IT IS PUSHED INTO THE ARRAY- BEERS.

var beers = [];
var addBeer = function(name, category){
    var beer = {
      name: name,
      category: category
 } 
beers.push(beer);
};


// THIS FUNCTION GETS INVOKED ALSO BY THE POST-BEER FUNCTION. IN THIS ONE WE CLEAR THE BEER SECTION BY REMOVING THE PARAGRPH
// (I DONT KNOW WHY), AND WE LOOP THRU THE BEER ARRAY SO WE CAN GET ACCESS TO EACH BEER AND CATEGORY ENTERED BY THE USER AND
// APPEND ITS NAME TO THE NEW PARAGRAPH IN THE BEER SECTION. ???? MAKES NO SENSE.

var updateBeers = function(){

  $('.beers').find('p').remove();

  for (var i = 0; i<beers.length; i++){
    $('.beers').append('<p>' + beers[i].name + " " + beers[i].category + '</p>');
 };
};




