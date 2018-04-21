$(function () {
    //var url = " http://localhost:3000/upload";
    var url= "http://192.168.0.156:8000/face/";
    $('#face').fileupload({
        url: url,
        type:'POST',
        //dataType: 'json',
        autoUpload : true,
        success: function (data) {    
            $('#faceorigin').attr('src', data+"?time="+new Date().getTime());
            // $.each(data.result.files, function (index, file) {
            //     $('#faceimage').attr('src', );
            // });           
        },
        fail:function(e,data){
            console.log("failed:"+data.errorThrown);
        }
        // progressall: function (e, data) {
        //     var progress = parseInt(data.loaded / data.total * 100, 10);
        //     $('#progress .progress-bar').css(
        //         'width',
        //         progress + '%'
        //     );
        // }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
})

$(function () {
    var url= "http://192.168.0.156:8000/face/detect/";
    $('.jmod-detect').on('click',function(){
        $.post(url,
        {
            name:"http://192.168.0.156:8000/static/images/face4.jpg"
        },
        function(data,status){
            $('#facedetect').attr('src', data+"?time="+new Date().getTime());
        });
    });
})

$(function () {
    //var url = " http://localhost:3000/upload";
    var url= "http://192.168.0.156:8000/face/";
    $('#face-left').fileupload({
        url: url,
        type:'POST',
        //dataType: 'json',
        autoUpload : true,
        success: function (data) {    
            $('#faceimage-left').attr('src', data);
        },
        fail:function(e,data){
            console.log("failed:"+data.errorThrown);
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
})

$(function () {
    //var url = " http://localhost:3000/upload";
    var url= "http://192.168.0.156:8000/face/";
    $('#face-right').fileupload({
        url: url,
        type:'POST',
        //dataType: 'json',
        autoUpload : true,
        success: function (data) {    
            $('#faceimage-right').attr('src', data);
        },
        fail:function(e,data){
            console.log("failed:"+data.errorThrown);
        }
    }).prop('disabled', !$.support.fileInput)
        .parent().addClass($.support.fileInput ? undefined : 'disabled');
})

$(function () {
    var url= "http://192.168.0.156:8000/face/compare/";
    $('.jmod-compare-btn').on('click',function(){
        $.post(url,
        {
            name:"OK"
        },
        function(data,status){
            var obj = document.getElementById("jmod-compare-result"); 
            obj.innerHTML= data; 
        });
    });
})

