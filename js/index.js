let arr= [{"name":"待接单","status":"WAIT_ACCEPT","isShadowed":true},{"name":"待发货","status":"WAIT_DELIVER","isShadowed":true,"isCurrentStatus":true},{"name":"验货入库","status":"STOCK_IN"},{"name":"已完成","status":"DELIVERED"}];


let check = (arr,context)=>{
    let wait, layer,checked;

    // 创建四种不同形状的图形，通过条件判断在目标中插入哪一种
    let end = '<div class="layer end">'+
                '<div class="content m_right white red">'+
                '已中止'+
                '</div></div>'
                       
    if(arr.length==1){
        $(context).append(end);
    }
    else{
        for(let i = 0;i<arr.length;i++){
            wait =  '<div class="layer wait">'+
            '<div class="l_arrow">'+
            '<div class="l_inner grey"></div>'+
            '<div class="l_outer"></div>'+
            '</div>'
            + '<div class="content white">'+arr[i].name
            + '</div>'
            + '<div class="r_arrow">'
            +'<div class="r_outer"></div>' 
            +'<div class="r_inner white_b"></div>'
            +'</div>';

            layer =  '<div class="layer then">'
            + '<div class="content white">'+arr[i].name
            + '</div>'
            + '<div class="r_arrow">'
            +'<div class="r_outer"></div>' 
            +'<div class="r_inner white_b"></div>'
            +'</div>';
            checked =  '<div class="layer">'+
            '<div class="l_arrow">'+
               '<div class="l_inner grey"></div>'+
                '<div class="l_outer"></div>'+
            '</div>'+
            '<div class="content white m_right">'+
            arr[i].name+
            '</div></div>'
            if(i == 0){
                $(context).append(layer);
            }else if( i == arr.length-1){
                $(context).append(checked);
                
            }
            else{
                $(context).append(wait);
                
            }
// 通过对数组内对象属性的判断，改变图形css样式，使其变色
            if(arr[i].isShadowed == true&& arr[i].isCurrentStatus== true){
                console.log($('.layer').eq(i).children().filter('.r_arrow'));
                $('.layer').eq(i).children().filter('.r_arrow').children().removeClass('white_b').addClass('blue_b');
                $('.layer').eq(i).children('.l_arrow').children().filter('.l_inner').removeClass('grey');
                $('.layer').eq(i).children().filter('.content').removeClass('white').addClass('border_n blue');
            }else if(arr[i].isShadowed == true){
                $('.layer').eq(i).children().filter('.r_arrow').children().removeClass('white_b');
                $('.layer').eq(i).children().filter('.content').removeClass('white');
            
            }
        }
           
       

    }
}

//根据数组形成图形
check(arr,$('body'));
