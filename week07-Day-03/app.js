$(document).ready(() => {

    let inputNum = $('#num').val()

    let counter = 0

    $('form').submit((e) => {

        e.preventDefault()

        let regex = new RegExp("^[0-9]+$");

        if ($('#num').val() !== 'enough') {

            if ($('#num').val()) {
                if (counter >= 10) {
                    $('h4').html('Max 10 queues only')

                    $('.button').attr('disabled', '')

                    $('#num').attr('readonly', '')

                } else {

                    counter = counter + 1

                    let remaining = 10 - counter

                    let main = $('main')

                    let section = $('<section></section>')

                    section.addClass('w-50 text-center bg-light border rounded border-danger py-2 text-danger my-2')

                    main.prepend(section)

                    section.html($('#num').val())

                    $('span').html(`Remaining ${remaining}`)

                    $('#num').val('')
                }
            } else {
                $('label').html('Fields Can\'t Be Empty')

                $('label').css({ 'color': 'red' })

                $('#num').css({ 'border': '1px solid red', 'color': 'red' })

                setTimeout(() => {
                    $('label').html('Enter Numbers')

                    $('label').css({ 'color': '' })

                    $('#num').css({ 'border': '', 'color': '' })

                    $('#num').val('')
                }, 1500)
            }

            console.log(counter)

        } else {

            $('label').html('Nothing Will Enter Now')

            $('label').css({ 'color': 'red' })

            $('#num').css({ 'border': '1px solid red', 'color': 'red' })

            $('.button').attr('disabled', '')

            $('#num').attr('disabled', '')

            $('#num').val('')

        }

    })

    $('#num').click(() => {
        $('label').html('Enter Numbers')

        $('label').css({ 'color': '' })

        $('#num').css({ 'border': '' })

        $('#num').val('')
    })
})