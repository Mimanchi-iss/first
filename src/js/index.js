// jQuery 的入口函数
$(function () {

  // 1. 根据 cookie 中的信息
  // 判断用户信息面板中显示哪一个内容
  const nickname = getCookie('nickname')

  // 2. 根据 nickname 信息进行判断
  if (nickname) {
    // 表示存在, 不是 undefined
    $('.top-right > a.off').addClass('hide')
    $('.top-right > span.on').removeClass('hide').text(`欢迎您: ${nickname}`)
    $('.top-right > span.on2').removeClass('hide')
  } else {
    // 表示不存在, 是 undefined
    $('.off').removeClass('hide')
    $('.on').addClass('hide')
  }

  $('.top-right > span.on2').on('click', function () { 
    console.log('开始');
    $('.top-right > span.on').addClass('hide')
    $('.head-right > span.on2').addClass('hide')
    $('.top-right > .off').removeClass('hide')
    // const key = getCookie(nickname)
    delCookie(nickname)
    window.location.href = './index.html'
  })
  
})
  /**
 * 清除指定cookie值
 * */


