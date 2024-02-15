$(document).ready(function(){


  //사이드바
  $("#sidebar").css({"left":"0px"});
  $(".sub_box").css({"left":"-190px"});

  /* 서브박스 */
  $(".main").hover(function(){
    $(this).find(".sub").stop().show("slow");
    $(".sub_box").stop().animate({left:"260px"});
  },function(){
    $(this).find(".sub").stop().hide("fast");
  });
  /* 서브메뉴가 있는 메뉴영역을 나가면 서브배경박스 다시 들어가게 */
  $(".main").mouseleave(function(){
    $(".sub_box").stop().animate({left:"-260px"});
  });



  let $simg = $(".slide ul");
  let $simgli = $(".slide ul li");
  let $sbtn = $(".slide_btn ul li");
  let $snext = $(".slide_side_btn .rbtn");
  let $spre = $(".slide_side_btn .lbtn");
  let simg_w = $simgli.width(); /* 이미지의 가로너비 */
  let simg_n = $simgli.length; /* 이미지의 총 개수 */
  let soldidx=0; /* 기존이미지 */
  let sindex=0; /* 선택된 새 이미지 */

  /* index번째 비주얼이미지 이동하는 함수생성 */
  function slideImg(sindex){ 
    targetX=-(sindex*simg_w) /* 움직이는 거리(너비) */
    $simg.stop().animate({left:targetX},600); /* 위에서 계산한 거리만큼 움직임 */
    $sbtn.eq(soldidx).removeClass("active"); /* 기존버튼 비활성화 */
    $sbtn.eq(sindex).addClass("active"); /* 선택버튼 활성화 */
    soldidx=sindex;
  };

  /* 자동함수 생성 */
  function slideAuto(){
    sindex++;
    if(sindex > simg_n-1){  /* simg_n 은 이미지개수 5, index는 0,1,2,3,4 */
      sindex=0;
    }
    slideImg(sindex); /* 함수호출 */
  }
  auto = setInterval(slideAuto,4000); 
  
  /* 좌우버튼 */
  $spre.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex--;
    if(sindex < 0){ /* 선택한 이미지가 4,3,2...0 첫번째일때 맨 마지막부터 다시 시작 */
    sindex=simg_n-1;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto,4000); 
  });

  $snext.click(function(){
    clearInterval(auto);
    $(".play").hide();
    $(".stop").show();
    sindex++;
    if(sindex > simg_n-1){
      sindex=0;
    }
    slideImg(sindex);
    auto = setInterval(slideAuto,4000); 
  });


  $(".gnb").hover(function(){
    $(this).find(".sheader .ssub").stop().slideDown();
    $(".ssub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".sheader .ssub").stop().slideUp();
    $(".ssub_bgbox").stop().slideUp();
  });


  // 온라인신청 왼쪽
  
  let $lsimg = $(".lslide ul");
  let $lsimgli = $(".lslide ul li");
  let $lsbtn = $(".left_slide_btn ul li");
  let lsimg_w = $lsimgli.width(); /* 이미지의 가로너비 */
  let lsimg_n = $lsimgli.length; /* 이미지의 총 개수 */
  let lsoldidx=0; /* 기존이미지 */
  let lsindex=0; /* 선택된 새 이미지 */


  /* index번째 비주얼이미지 이동하는 함수생성 */
  function lslideImg(lsindex){ 

    $lsbtn.eq(lsoldidx).removeClass("active");
    $lsbtn.eq(lsindex).addClass("active");
    lsoldidx=lsindex;
  };

  function lslideAuto(){
    lsindex++;
    if(lsindex > lsimg_n-1){
      lsindex=0;
    }
    lslideImg(lsindex);
  }
  lsauto = setInterval(lslideAuto,3000);

  /* 자동함수 생성 */
  function lsbannerAuto(){
    $(".lslide ul").stop(true,true).animate({marginLeft:"-=350px"},1000,function(){
      $(".lslide ul li:first-child").appendTo(".lslide ul");
      $(".lslide ul").css({marginLeft:"0px"});
    });
  };
  lsauto=setInterval(lsbannerAuto,3000);
  

  $(".lslide ul li").hover(function(){
    clearInterval(lsauto);
  }, function(){
    lsauto=setInterval(slideAuto,3000);
  });


  // 온라인신청 우측
  function rsbannerAuto(){
    $(".rslide ul").stop(true,true).animate({marginLeft:"-=422px"},1000,function(){
      $(".rslide ul li:first-child").appendTo(".rslide ul");
      $(".rslide ul").css({marginLeft:"0px"});
    });
  };
  rsauto=setInterval(rsbannerAuto,3000);

  $(".rslide_1_text").hover(function(){
    clearInterval(rsauto);
  }, function(){
    rsauto=setInterval(rsbannerAuto,3000);
  }); 

  /* 다음보기 */
  $(".right_slide_btn_right").click(function(){

    clearInterval(rsauto);
    
    $(".rslide ul").stop(true,true).animate({marginLeft:"-=422px"},1000,function(){
      $(".rslide ul li:first-child").appendTo(".rslide ul");
      $(".rslide ul").css({marginLeft:"0px"});
    });
    rsauto=setInterval(rsbannerAuto,3000);
  });

  /* 이전보기 */
  $(".right_slide_btn_left").click(function(){

    clearInterval(rsauto);
    
    $(".rslide ul").stop(true,true).animate({marginLeft:"422px"},1000,function(){
      $(".rslide ul li:last-child").prependTo(".rslide ul");
      $(".rslide ul").css({marginLeft:"0px"});
    });
    rsauto=setInterval(rsbannerAuto,3000);
  });


  // 더아트로 이미지
  function tbannerAuto(){
    $(".theatro ul").stop(true,true).animate({marginLeft:"-=1300px"},1000,function(){
      $(".theatro ul li:first-child").appendTo(".theatro ul");
      $(this).css({marginLeft:"0px"});
    });
  };
  tbauto=setInterval(tbannerAuto,3000);


  $(".theatro_text img").hover(function(){
    clearInterval(tbauto);
  }, function(){
    tbauto=setInterval(tbannerAuto,3000);
  });



  // 공지사항-탭메뉴
  $(".title").click(function(){
    $(this).siblings().removeClass("active");
    $(this).toggleClass("active");
    $(this).siblings(".desc").stop().slideUp();
    $(this).next().stop().slideToggle();

    let dataImage = $(this).attr("data-image");
    $(".image img").attr("src",dataImage).hide().fadeIn();
  });



  // 스크롤
  window.addEventListener("wheel", function(e){
    e.preventDefault();
    },{passive : false});

  var $html = $("html");
  var page = 1;
  var lastPage = $(".content").length;

  $html.animate({scrollTop:0},10);

  $(window).on("wheel", function(e){
    if($html.is(":animated")) return;
    if(e.originalEvent.deltaY > 0){
      if(page== lastPage) return;
      page++;
    }else if(e.originalEvent.deltaY < 0){
      if(page == 1) return;
      page--;
    }
    var posTop = (page-1) * $(window).height();
    $html.animate({scrollTop : posTop});
  });

});
