/*
 *description: 1号抢购;
 *author: yuting2;
 *date: 2017/01/22;
 *update: 2017/05/17;
 */

var seckillScript = {
	initFun: function() {
		this.popMethods();
		this.agree_to_state();
		this.change_rule();
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
	popMethods:function(){
		$('.bangding_account').on('click', '.text_3', function() {
			$('.no_bind_box').show();
			$('.mask_tcdiv').show();
			$('.close_2').on('click', function() {
				$('.no_bind_box').hide();
				$('.mask_tcdiv').hide();
			});
			$('.pop_btn').on('click', function() {
	 			$('.no_bind_box').hide();
	 			$('.mask_tcdiv').hide();
	 			seckillScript.showRemindSuccessPop();
	 		});
		});
	},
	showRemindSuccessPop: function() {
	 	$('.authorization_state_box').show();
	 	$('.mask_tcdiv_2').show();
	 	$('.close').on('click', function() {
				$('.authorization_state_box').hide();
				$('.mask_tcdiv_2').hide();
			});
	},
	agree_to_state:function(){
		$('.icon-square').on('click', function() {
			$('.no_read').hide();
			$('.already_read').show();
		});
		$('.icon-duihao').on('click', function() {
			$('.already_read').hide();
			$('.no_read').show();
		});
	},
};
seckillScript.initFun();