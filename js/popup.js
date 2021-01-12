$(document).ready(function () {
    $('#close').click(function () {
        $('#popup').hide();
        $('#mask').hide();
        $('#body').css('background-color', '#ffffff');
        $('.file-upload').css('background-color', '#ffffff')
    })
})

function result_img_popup() {
    $('#result_btn').click(function () {
        $('#popup').css('display', 'block');
        // $('#body').css('background-color', '#808080');
        // $('.file-upload').css('background-color', '#808080')
        //화면의 높이와 너비를 구한다.
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
        $('#mask').css({
            'width': maskWidth,
            'height': maskHeight
        });
        $('#mask').fadeIn();
        $('#popup').css('opacity', '1')
    })
}