// console.log('testing 1..2..3')
//console log tested and working 

$(() => {
        const $name  = $('#name');
        const $abilities = $('#abilities');
        const $pokéImg = $('.pokeImg');
        
        $('#submitBtn').on('click', (event) => {
            event.preventDefault();
            const $userInput = $('#inputType').val();
        // Inside of this ajax request / add + userInput 
        console.log($userInput);
        $.ajax(
            {
                url:'https://pokeapi.co/api/v2/pokemon/' + $userInput
            }
        ).then(
            (data) => {
                console.log(data)
            }
        )
    })
})
//append data to modal div

 
//attempting to call on individual pokemon from array [0] to determine modal names such as height name etc..


//append data.count to the body 

