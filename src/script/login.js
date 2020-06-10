! function($) {
    $('.btn').on('click', function() {
        $.ajax({
            type: 'post',
            url: 'http://10.31.162.45/1688/dist/login.html',
            data: {
                user: $('.username').val(),
                pass: $('.password').val()
            }
        }).done(function(result) {
            if (result) {
                location.href = "index.html";
                localStorage.setItem('username', $('.username').val());
            } else {
                $('.password').val('');
                alert('用户名或者密码错误');
            }
        });
    });
}(jQuery);