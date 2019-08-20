$(document).ready(() => {

    $('#title1').on('click', () => {
        $('.menu1').show();
    });
    $('.menu1').on('mouseleave', () => {
        $('.menu1').hide();
    });
    $('#title2').on('click', () => {
        $('.menu2').show();
    });
    $('.menu2').on('mouseleave', () => {
        $('.menu2').hide();
    });
    $('.headline3').on('click', () => {
        $('.passed').toggle();    
    });
   
});