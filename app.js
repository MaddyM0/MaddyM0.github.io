$( () => {
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');

    const openModal = () => {
        // $modal.css('display', 'block');
        $('#modal').css('display', 'block');
        // $modal.show();
    }
    const closeModal = () => {
        $modal.css('display', 'none');
    }
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);

    // setTimeout(openModal, 1000);
});



$(() => {
        $('#submitBtn').on('click', (event) => {
            event.preventDefault();
            const $userInput = $('#inputType').val();
        $('#submitBtn').trigger('reset')
        $.ajax(
            {
                url:'https://pokeapi.co/api/v2/pokemon/' + $userInput
            }
        ).then(
            (data) => {
                console.log(data.forms[0].name)
                $('#nameInsert').text(data.forms[0].name);
                $('#abilitiesInsert').text(data.abilities[0].ability.name);
                $('#heightInsert').text(data.height);
                $('#weightInsert').text(data.weight);
                $('#photoInsert').attr("src", data.sprites.front_default);
            },
            (error) => {
                console.log(error)
            }
        )
    })
})




//**CODE GRAVEYARD **//
//--------------------
// console.log('testing 1..2..3')
//console log tested and working 
// const $name  = $('#name');
// const $abilities = $('#abilities');
// const $height = $('#height');
// const $weight = $('#weight');
// const $pokéImg = $('.pokeImg');
// $('#name').text(data.forms.name);
// Inside of this ajax request / add + userInput 
// console.log($userInput);
//append data to modal div
//append data.count to the body 


