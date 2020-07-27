jQuery(document).ready(function ($) {
    $('#search_frm_input').on('input',function () {
        var input_txt = $(this).val();
        if (input_txt !== ''){
            $('#clear_btn').css('display', 'block');
        }else {
            $('#clear_btn').css('display', 'none');
        }
    });
    $('#clear_btn').on('click', function () {
        $('#search_frm_input').val('');
        $(this).css('display', 'none');
    });
})