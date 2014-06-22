$(document)
  .ready(function() {

    $('.ui.checkbox')
      .checkbox('toggle')
    ;

    //菜單
    $('a.item')
      .click(function(){
        $('a.item.active').removeClass("active");
        $(this).addClass("active");
      })
    ;

    $('.ui.dropdown')
      .dropdown({
        on: 'hover'
      })
    ;

    //進入註冊 登入頁面按鈕
    $('.ui.modal.members').modal('attach events','.ui.button.animated', 'show');
    $('.ui.modal.search').modal('attach events','.ui.green.button.animated.search', 'show');
    $('#recipe1').modal('attach events','#block1', 'show');
    $('#recipe2').modal('attach events','#block2', 'show');
    $('#recipe3').modal('attach events','#block3', 'show');
    $('#recipe4').modal('attach events','#block4', 'show');
    $('#recipe5').modal('attach events','#block5', 'show');

    $('#1')
    	.mouseover(function(){
    		$('.ui.circular.image.1').transition('pulse');
    	})
    ;

    $('#2')
    	.mouseover(function(){
    		$('.ui.circular.image.2').transition('pulse');
    	})
    ;

    $('#3')
    	.mouseover(function(){
    		$('.ui.circular.image.3').transition('pulse');
    	})
    ;

    $('#4')
    	.mouseover(function(){
    		$('.ui.circular.image.4').transition('pulse');
    	})
    ;

    $('#5')
    	.mouseover(function(){
    		$('.ui.circular.image.5').transition('pulse');
    	})
    ;

    $('#6')
    	.mouseover(function(){
    		$('.ui.circular.image.6').transition('pulse');
    	})
    ;

    //註冊登入驗證表單
    $('.ui.form')
      .form({
        email: {
          identifier  : 'email',
          rules: [{
              type   : 'empty',
              prompt : 'Please enter an e-mail'
            },{
              type   : 'email',
              prompt : 'Please enter a valid e-mail'
            }]
        },
        password1: {
          identifier : 'password',
          rules: [{
            type   : 'empty',
            prompt : 'Please enter a password'
          },{
            type   : 'length[6]',
            prompt : 'Your password must be at least 6 characters'
          }]
        },
        password: {
          identifier : 'password-c',
          rules: [{
            type   : 'empty',
            prompt : 'Please enter again'
          },{
            type   : 'match[password]',
            prompt : 'Your password are not same'
          }]
        }});

    $('.masthead .information')
      .transition('scale in')
    ;

  })
;