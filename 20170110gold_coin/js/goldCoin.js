/*
 *@Description:1号金币 js
 *@Author: zhangqian7
 *@Update: zhangqian7(17-01-10 上午9:00)
 */

var goldCoin={

    /*  //tab切换  */
    tabClick:function(){
        function tabChange(para){
            $(para.clickObj).on('click',function(){
                var _this=$(this),
                    i=_this.index();
                _this.addClass('cur').siblings().removeClass('cur')
                    .parents(para.objParents)
                    .siblings(para.objParSibling)
                    .find(para.sibChild).eq(i).show()
                    .siblings(para.sibChild).hide();
            });
        }
        var tabChangePara=[
            // 金币内容切换
            {
                clickObj:'.bill_title .title a',
                objParents:'.bill_title',
                objParSibling:'.bill_tab',
                sibChild:'.bill_classify'
            },
            // 时间切换
            {
                clickObj:'.bill_title .time a',
                objParents:'.bill_title',
                objParSibling:'',
                sibChild:''
            },
            // 信息分类切换
            {
                clickObj:'.bill_classify .type',
                objParents:'.bill_classify',
                objParSibling:'.bill_table',
                sibChild:'.table'
            }
        ];

        for(var i=0;i<tabChangePara.length;i++){
            tabChange(tabChangePara[i]);
        }

    },




    init:function(){
        this.tabClick();
    }

};
goldCoin.init();

