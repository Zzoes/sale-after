
    /**
     * 
     * @param {* 请求类型} type 
     * @param {* 请求地址} url 
     * @param {* 发送的数据} data 
     * @param {* 请求的数据类型} dataType 
     * @param {* 请求成功调用函数} successFunc 
     */
    function ajaxQuery(type,url,data,successFunc,that){
        $.ajax({
            type: type,
            url: url,
            data: data,
            success: function(data){
                successFunc(data,that);
            },
            error:function(err){
                alert('请求失败');
            }
        });
    };

     /*获取某个元素的attr*/
     function getAttr(ele,prop){
        return ele.attr(prop);
     };
     
     /*获取ele的父级元素*/
     function getPrs(ele,prsClass){
        return $(ele).parents(prsClass);
     };

     /*获取元素data-target*/
     function getModalId(ele){
         var targetId = ele.attr('data-target');
         var targetModal = $(targetId);
         return targetModal;
     };
     /*显示隐藏某个元素*/
     function fadeInOutEle(ele){
         if(ele.is(':visible')){
             ele.fadeOut(200);
         }else{
             ele.fadeIn(200);
         }
     };
     /*激活/取消某个元素的active状态*/
     function activeEle(that,activeClass){
         if(that.hasClass(activeClass)){
             that.removeClass(activeClass);
         }else{
             that.addClass(activeClass);
         }
     };
     /*激活/取消某个元素的active状态同时改变sibs状态*/  
     function activeBtn(ele,sibs,defaultClass,activeClass){
         ele.addClass(activeClass).removeClass(defaultClass);
         sibs.removeClass(activeClass).addClass(defaultClass);
     };

    //  加减器计算
     function plusReduce(that,type) {

        var prs = getPrs(that,'.plus-reduce');
        var sibsInpEle = prs.find('.i-inp'); 
        var inpVal = parseInt(sibsInpEle.val());

        if(type == 'reduce'){
            if(inpVal > 1){
                inpVal --;
                sibsInpEle.val(inpVal);
            }
        };

        if(type == 'plus'){
            if(inpVal < 10){
                inpVal ++;
                sibsInpEle.val(inpVal);
            }else{
                alert('已到达最大申请数量');
            }
        }

     };

     $(function(){
        var cancelBtn = $('.btn-cancel');//取消
        var blackOver = $('.black-over'); //遮罩
                //点击遮罩
        blackOver.unbind('click').click(function(){
            fadeInOutEle(getPrs($(this),'.modal-box'));
            activeEle(maskFiltrate,'active');
        });
        //点击modal btn-cancel
        cancelBtn.unbind('click').click(function(){
            fadeInOutEle(getPrs($(this),'.modal-box'));
        });

        $('.back-icon').click(function(){
           history.back(-1); 
        });

        //加减器
        $('.plus-reduce .reduce-icon').unbind('click').click(function(){
            plusReduce($(this),'reduce');

        });
        $('.plus-reduce .plus-icon').unbind('click').click(function(){
            plusReduce($(this),'plus');
        });

     });
     