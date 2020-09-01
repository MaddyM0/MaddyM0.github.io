// console.log('testing 1..2..3')
//console log tested and working 

$(() => {
        const $name  = $('#name');
        const $abilities = $('#abilities');
        const $height = $('#height');
        const $weight = $('#weight');
        const $pokéImg = $('.pokeImg');

        $('#submitBtn').on('click', (event) => {
            event.preventDefault();
            const $userInput = $('#inputType').val();
        $('#submitBtn').trigger('reset')
            // Inside of this ajax request / add + userInput 
            // console.log($userInput);
        $.ajax(
            {
                url:'https://pokeapi.co/api/v2/pokemon/' + $userInput
            }
        ).then(
            (data) => {
                console.log(data)
                $('#name').html(data[0].name);
            },
            (error) => {
                console.log(error)
            }
        )
    })
})

$('body').append('#modal');

//append data to modal div

 

//append data.count to the body 

