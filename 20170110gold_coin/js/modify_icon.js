var good = {
    initFun: function() {
        this.count();
    },

    count: function() {
         

        $(document)
        .on('click',".num_first",function() {
            console.log(111);
            
             $(".change_btn").css("display","none");
             $(".change_btn_v").css("display","block");

        });

    }
};
good.initFun();