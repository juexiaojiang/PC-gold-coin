var seckillScript = {
	initFun: function() {
		this.popMethods();
		this.no_code();
		this.change_rule();
		this.exceed_coin_num();
	},
	popMethods:function(){
		$('.sure_to_exchange_btn').click(function() {
			var num=Math.random()*1;
			if(num<0.5)
			{
				$('.pop_box_suc').hide();
				$('.mask_tcdiv').hide();
				$('.pop_box_fail').show();
				$('.mask_tcdiv_2').show();
			}else{
				$('.pop_box_suc').show();
				$('.mask_tcdiv').show();
				$('.pop_box_fail').hide();
				$('.mask_tcdiv_2').hide();
			}
		});
		$('.close').on('click', function() {
				$('.pop_box_suc').hide();
				$('.mask_tcdiv').hide();
			});
	    $('.close_2').on('click', function() {
				$('.pop_box_fail').hide();
				$('.mask_tcdiv_2').hide();
			});
	    $('.sure').on('click', function() {
				$('.pop_box_fail').hide();
				$('.mask_tcdiv_2').hide();
			});
	},
	no_code:function(){
		$('.identify_code_text_remind').click(function() {
			$('.pop_box_no_code').show();
			$('.mask_tcdiv_3').show();
		});
		$('.close_3').on('click', function() {
				$('.pop_box_no_code').hide();
				$('.mask_tcdiv_3').hide();
			});
	},
	change_rule:function(){
		$('.exchange_rule').click(function() {
			$('.pop_box_exchange_rule').show();
			$('.mask_tcdiv_4').show();
		});
		$('.close_4').on('click', function() {
				$('.pop_box_exchange_rule').hide();
				$('.mask_tcdiv_4').hide();
			});
	},
	exceed_coin_num:function(){
		$('.input_coin').keyup(function() {
			$('.danwei span.blank').html($('.input_coin').val());
		});
		$('.input_coin').blur(function() {
				$('.exceed_coin_num').show();
				$('.input_wrap_one').addClass('change_border');
			});	
	},
	
};

   seckillScript.initFun();