// console.log('testing 1..2..3')
//console log tested and working 
const $name  = $('#name');
const $userInput = $('').val();
// Inside of this ajax request / add + userInput 


$(() => {
    $.ajax(
        {
            url:'https://pokeapi.co/api/v2/pokemon'
        }
    ).then(
        (data) => {
            console.log(data)
        }
    )
})


//succesfully pulled data /array of pokemon 
 
//attempting to call on individual pokemon from array [0] to determine modal names such as height name etc..


//append data.count to the body 

