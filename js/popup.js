$(document).ready(function() {
    $('#body').css('background-color', '#b7a786')
    $('.file-upload').css('background-color', '#bea96c')
    $('.drag-text').css('background-color', '#bbbbbb')
    $('#close').click(function() {
        $('#popup').hide()
        $('#body').css('background-color', '#f0dbb0')
        $('.file-upload').css('background-color', '#f0d689')
        $('.drag-text').css('background-color', '#ffffff')
    })
})