<?php

$username = $_GET['username'];
$password = $_GET['password'];
$nickname = $_GET['nickname'];

$link = mysql_connect('localhost', 'root', 'root', 'huali');

$sql = 'INSERT INTO `users`(`username`, `password`, `nickname`) VALUES(username, password, nickname )';

$res = mysql_query($link, $sql)

?>