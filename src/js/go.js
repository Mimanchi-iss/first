$(function () { 
  const username = $('#go #username').value()
  const password = $('#go #password').value()
  const nickname = $('#go #check').value()





  $.post('../server/global.php', username)
})