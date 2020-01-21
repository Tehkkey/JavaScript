
const $pTag = $('#petDescription');
const $petName = $('#petName');
const $animalPic = $('#animal');

$animalPic.on('mouseover', function(){
    $animalPic.fadeTo('slow', 0.5);
});
 
$animalPic.on('mouseout', function(){
    $animalPic.fadeTo('slow', 1.0);
});

    $('#format').on('click', function(){
          $pTag.addClass('blue');
          $('#animal').addClass('animal');
          $petName.addClass('blue');
          
     });
     $('#reset').on('click', function() {
          $pTag.removeClass('blue');
          $('#animal').removeClass('animal');
          $petName.removeClass('blue');

     });
$animalPic.on('dblclick', function(){
    $animalPic.attr('src','images/dog.jpg');
    $animalPic.attr('alt', 'pug dog');
    $('#petName').html('This is a Breed of Dog named "Pug"');
    $('#petDescription').html('The pug is a breed of dog with physically distinctive features of a wrinkly, short-muzzled face, and curled tail. The breed has a fine, glossy coat that comes in a variety of colours,most often fawn or black, and a compact square body with well-developed muscles.');
});
    