$(document).ready(function() {

    $('#phone').mask('(00) 0000-00009', {
        placeholder: '(00) 0000-0000'
    })

    $('#phone').on('keydown', function() {
        let validationPhone = $('#phone').val().length

        if (validationPhone>=14) {
            $('#phone').mask('(00) 00000-0000', {
                placeholder: '(00) 00000-0000'
            })
        } else {
            $('#phone').mask('(00) 0000-0000', {
                placeholder: '(00) 0000-0000'
            })
        }
    })

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: 'Please insert your name',
            email: 'Please insert a valid e-mail',
            phone: 'Please insert a valid phone number',
            message: 'Please insert your message'
        },

        submitHandler: function(form) {
            const modalContact = new bootstrap.Modal('#modal-contact-send')
            
            modalContact.show() ;

            $('#name').val('') ;
            $('#email').val('') ;
            $('#phone').val('') ;
            $('#message').val('') ;
        }
    })
})