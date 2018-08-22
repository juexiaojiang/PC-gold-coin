var jdouVertification = {
    initFun: function() {
        this.changeStyle(); //调整60s按钮的样式
        this.errorGet();
        this.checkSuccess();
        this.verify();
        this.timeChange();
        this.displayNone();
        // this.change_status();
        this.checkError();
        this.layer();
    },
    //改变60s弹窗的样式
    changeStyle: function() {
        var $input = $(".phonecode").val();
        $(".phonecode").focus(function() {
            if ($input != " ") {
                $(".check_now").addClass("check_new").removeClass("check_now");
             }  

        });

    },
    // change_status:function(){
    //     $('.check_now').click(function() {
    //         var num=Math.random()*1;
    //         if(num<0.5)
    //         {
    //             $('.pop-commons_fail').hide();
    //             $('.pop-commons').show();
    //             $('.full-opacity-bg').show();
    //         }else{
    //             $('.pop-commons_fail').show();
    //             $('.pop-commons').hide();
    //             $('.full-opacity-bg').show();
    //         }
    //     });
    // };
    // 实现点击取不到验证码的弹窗
    errorGet: function() {
        var $check = document.querySelector('.getcode');
        var $pop = document.querySelector('.pop-common-dialog');

        function checkTask() {
            $(".popup_mask").css('display', 'block');
            $(".pop-common-dialog").css('display', 'block');

        }
        $check.addEventListener("click", function() {
            checkTask()
        }, false);

        $(".close").click(function() {
            $(".pop-common-dialog").remove();
            $(".popup_mask").remove();
        });
        $(".sure").bind("click",function() {
            $(".pop-common-dialog").css('display', 'none');
            $(".popup_mask").css('display', 'none');


        });
    },



    //实现成功验证的弹窗
    checkSuccess: function() {
        $(".check_now").click(function() {
            $(".popup_mask").css('display', 'block');
            $(".pop-common-dialogs").css('display', 'block');
            var num=Math.random()*1;
            if(num<0.5)
            {
                $('.pop-commons_fail').hide();
                $('.pop-commons').show();
            }else{
                $('.pop-commons_fail').show();
                $('.pop-commons').hide();
            }

        });
        $(".sures").click(function() {
            $(".popup_mask").css('display', 'none');
            $(".pop-common-dialogs").css('display', 'none');

        });
        $(".closes").click(function() {
            $(".pop-common-dialogs").css('display', 'none');
            $(".popup_mask").css('display', 'none');
        });
    },



    //查看图片的验证码
    verify: function() {
        $(".check").click(function() {
            $(".popup_mask").css('display', 'block');
            $(".pop-common-dialog-s").css('display', 'block');
            $(".pop-common-dialog").css('display', 'none');
            $(".pop-common-dialogs").css('display', 'none');
        });
        $(".close-s").click(function() {
            $(".pop-common-dialog-s").css('display', 'none');
            $(".popup_mask").css('display', 'none');
        });
      $(".sure").click(function(){
      	setTimeout(function(){
              $(".getcode").addClass("seconds").removeClass("getcode").text("60s");
              $(".get_account").css("background", "#F6F6F6");
              $(".get_account").css("border", "none");
       },1);

      }); 

    },

     //实现60s的倒计时
    timeChange: function() {
         var secs = 60; // 设置多少秒
         var wait = secs * 100;
           $('#num').attr('disabled','true');
         // document.getElementById("num").disabled = true;
        $("#num").click(function(){
           for (var  i = 1; i <=(wait / 100); i++) {
        	(function(_i) {
         		setTimeout(function(){
             	   doUpdate(_i)
                  }, _i * 1000);
         	})(i);
           
         }
          setTimeout(Timer, wait);

        function doUpdate(num) {
             if (num == (wait / 100)) {  
                  
                  $("#num").html("重新获取验证码").addClass("account_again").removeClass("seconds");
                  $("#num").click(function(){
                          $("#num").text("60s").removeClass("account_again").addClass("seconds");
                          $(".pop-common-dialog").css("display","none");
                          $(".pop_out").css("display","none");

                  });
             } else {
                 wut = (wait / 100) - num;
                   
                 $("#num").html(wut + "s");
                 $("#num").attr("disabled","true");      
                  
             }

         }

          function Timer() {
         	 $('#num').attr('disabled','false');
         
         }

        });
         
    },

    //设置验证码错误的框
    checkError:function(){
      $(".request_input").blur(function(){
             $(".checkError").show();
             $(".second").addClass(" show_input");
      });

    },
    //设置display的值不为none
     displayNone:function(){
     	$("#num").click(function(){
     		      $(".warn").show();
     		      $(".work").show();
                  $(".rest").html("验证码错误，今日还剩余x次验证机会");
                  // $(".work").attr('disabled','true');
     	});
     	
     },
     //修改罩层
    layer:function(){
        var hei=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight); 
           $('.popup_mask').css('height',hei);
    }


};

jdouVertification.initFun();