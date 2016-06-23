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
});