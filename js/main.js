$(function(){
    // 비주얼 버튼 클릭
    $('#visual_pager > a').click(function(){
        $('#visual_pager > a').removeClass('selected');
        $(this).addClass('selected');
    });
});
