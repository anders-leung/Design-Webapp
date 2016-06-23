/**
 * Created by Anders on 2016-06-20.
 */
$(document).ready(function() {
    $('.corner-info').hide();

    $('#carousel-button').on('click', function() {
        $('#carousel').slideToggle();
    });

    $('.panel').hover(
        function() {
            $(this).css('border', '#cee0ee solid 1px');
            $(this).find('.corner-info').show();
        }, function() {
            $(this).css('border', '#ffffff solid 1px');
            $(this).find('.corner-info').hide();
        });

    $('#emailButton').on('click', function() {
        var emailRegEx = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$');
        var email = $('#email').val();
        if (emailRegEx.test(email)) {
            $('#emailError').hide();
            /* Send default email to the input email address */
        } else {
            $('#emailError').show();
        }
        
    });
});