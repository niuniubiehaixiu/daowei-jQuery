//禁止浏览器缩放
$(document).ready(function () {
  // chrome 浏览器直接加上下面这个样式就行了，但是ff不识别
  $('body').css('zoom', 'reset');
  $(document).keydown(function (event) {

    if ((event.ctrlKey === true || event.metaKey === true)
      && (event.which === 61 || event.which === 107
        || event.which === 173 || event.which === 109
        || event.which === 187 || event.which === 189)) {
      event.preventDefault();
    }
  });

  $(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.ctrlKey === true || event.metaKey) {
      event.preventDefault();
    }

  });
});

$(function () {
  //导航栏切换
  $('.nav-content .text a').click(function () {
    $(this).addClass('on').parent().siblings().children().removeClass('on')
  })

  //轮播图
  $('.swiper img:first').show()
  let num = 0
  let timer = setInterval(function () {
    num++;
    if (num > 2) {
      num = 0;
    }
    $('.swiper-btn .btn').eq(num).addClass('active').siblings().removeClass('active')
    $('.swiper img').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
  }, 2000);

  $(".swiper img").mouseleave(function () {
    clearInterval(timer)
    $('.swiper-btn .btn').click(function () {
      num++
      if (num > 2) {
        num = 0
      }
      $('.swiper-btn .btn').eq(num).addClass('active').siblings().removeClass('active')
      $('.swiper img').eq(num).stop().fadeIn(500).siblings().stop().fadeOut(500);
    })
  });

  //头部
  $(window).scroll(function () {
    if ($(this).scrollTop()>70){
      $('.header').addClass('actives')
    } else {
      $('.header').removeClass('actives')
    }
  })

})
