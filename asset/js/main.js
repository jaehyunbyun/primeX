$(function(){


    // 기존 파일에 있던거
    // var swiper = new Swiper(".sc-recruit .swiper", {
    //     slidesPerView:'auto',
    //     spaceBetween: 0,

    // });

    
    $('.features-item').hover(function(e){
        e.preventDefault();
        $(this).toggleClass('active');
    });

    
    logoTl = gsap.timeline({})
    .from ('.visual-logo-wrap',{delay:1, opacity: 0,duration:2});
        
// 아직 오류해결 못함 07/11

    gsap.to('.visual-logo',{
        scrollTrigger:{
            trigger:'.sc-visual',
            start:"0% 0%", // ['트리거','윈도으']
            // end:"100% top", // ['트리거','윈도으']
            end:"+=100%",
            // markers:true,
            scrub:0,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
            // pin:true,
        },
        ease:'none',
        'yPercent':-350,
        'opacity':0,
        // duration: 3,
    });



    // 예상가능한 다양한  효과를 하나로 만드는법

    // x->100
    // y->100
    // opacity0-1>



$('.motion').each(function(index,item){
    // yVal = $(this).data('y') ? $(this).data('y') : 0;

    if($(this).data('y')){
        yVal = $(this).data('y');
    }else{
        yVal = 0;
    }

    gsap.from(item,{
        scrollTrigger:{
            trigger:item,
            start:"0% 100%", // ['트리거','윈도으']
            end:"bottom bottom",
            markers:true,
            // scrub:1,
        },
        yPercent:yVal,
        yPercent:50,
        // xPercent:xVal,
        opacity:0,
        // duratsion: 1,
    })

})

textside = gsap.utils.toArray('.sidemove')
textside.forEach((textside) => {
    gsap.from(textside,{
        xPercent: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: textside,
            start : '50% 100%',
            markers:true,
        }
    })
})
//모션 효과 다시써봄

// $('.motion').each(function(index,item){
//     if ($(this).data("y")) {
//         yVal = $(this).data("y");
//     } else {
//         yVal = 0;
//     }


//     gsap.from(itemz)
// });


gsap.from('.sc-product .performance-area .inner',{
    scrollTrigger:{
        trigger: '.sc-product .performance-area .inner',
        start: '0% 100%',
    },
    opacity: 0,
    duration: 1.5,
})






$('.img-motion').each(function(index,item){
    gsap.to(item,{
        scrollTrigger:{
            trigger:item,
            start:"0% 100%", // ['트리거','윈도으']
            // end:"bottom top",
            // markers:true,
            scrub:1,
        },
        yPercent:-30,
        ease:'none',
        // xPercent:xVal,
        // opacity:0,
    })
})





//마우스 호버시 이미지 붙는 부분
$('.features-list').mousemove(function(e){
    x = e.clientX
    y = e.clientY
    // x = e.pageX
    // y = e.pageY
    // x = e.offsetX
    // y = e.offsetY
    // console.log(x+'///'+y);
    gsap.to('.features-list .cursor',{
        opacity:1,
        // visublity:visible
        // x:x,
        // y:y
        top:y,
        left:x
    })
})

$('.features-list').mouseleave(function(){
    gsap.to('.features-list .cursor',{opacity:0})
})


const imgArr = ['./asset/images/bg/bag-bg.jpg','./asset/images/bg/bag-bg2.jpg','./asset/images/contents/bag04.jpg','./asset/images/contents/bag03.jpg','./asset/images/contents/bag05.jpg']
$('.features-item').hover(function(){
    idx = $(this).index();
    // console.log(idx);
    // alert(idx);
    $('.cursor img').attr('src',imgArr[idx]);
})




textUp = gsap.utils.toArray('.text-up')
textUp.forEach((textUp) => {
    gsap.from(textUp,1.5,{
        xPercent: 20,
        opacity: 0,
        scrollTrigger: {
            trigger: textUp,
            start : '0% 100%',
        }
    })
})



prdTl = gsap.timeline({})
.from ('.style-list',{delay:1, opacity: 0,duration:2});





    // gsap.from('.story-wrap',{
    //     scrollTrigger:{
    //         trigger:'.sc-story',
    //         start:"0% 20%", // ['트리거','윈도으']
    //         // end:"100% top", // ['트리거','윈도으']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     // yPercent:300,
    //     'opacity':0,
    //     // duration: 3,
    // });
    






    // gsap.from('.sc-product .sc-title, .sc-product .desc',{
    //     scrollTrigger:{
    //         trigger:'.sc-product',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         // markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'yPercent':-300,
    //     // duration: 5,

    //     // opacity:0,
    //     // duration: 3,
    // });

    // gsap.from('.info-box .txt-box',{
    //     scrollTrigger:{
    //         trigger:'.performance-area .inner',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'opacity':0,
    //     'xPercent': -300,
    // });
    
    
    // gsap.from('.info-box .ic-rolling',{
    //     scrollTrigger:{
    //         trigger:'.performance-area .inner',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'rotation': 360,
    //     // xPercent: -300,
    // });





    // // material-area
    // gsap.from('.material-area .title-box',{
    //     scrollTrigger:{
    //         trigger:'.material-area .common-inner',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'opacity':0,
    //     'xPercent': -300,
    // })

    // // sc-features
    // gsap.from('.sc-features .title-box .sc-title',{
    //     scrollTrigger:{
    //         trigger:'.sc-features',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'opacity':0,
    //     'xPercent': -300,
    // })

    // gsap.from('.sc-features .title-box .desc',{
    //     scrollTrigger:{
    //         trigger:'.sc-features',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'opacity':0,
    //     'xPercent': 300,
    // })



    // gsap.from('.sc-style .title-box',{
    //     scrollTrigger:{
    //         trigger:'.sc-style',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'opacity':0,
    //     'xPercent': 300,
    // })

    // gsap.from('.sc-style .style-list',{
    //     scrollTrigger:{
    //         trigger:'.sc-style',
    //         start:"0% 100%", // ['트리거','윈도우']
    //         // end:"100% top", // ['트리거','윈도우']
    //         end:"0% 0%",
    //         markers:true,
    //         scrub:1,//왔다 갔다 할때 반복도 됨 내 스크롤에 따라서 0은 내 스크롤 기준 보통은 1 높을수록 좀만 스크롤이 닿아도 많이 실행됨
    //         // pin:true,
    //     },
    //     'opacity':0,
    //     'xPercent': 300,
    // })



})