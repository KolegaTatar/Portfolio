<?php
/*
$name = $_POST['name'];
$email = $_POST['email'];
$text = $_POST['subject'];
$message = $_POST['message'];


*/
#

setcookie("New_Cookies",1,time()*3600);

if(!isset($_COOKIE["New_Cookies"])){
    echo "Witaj na stronie";
}
else{
    echo "Miło Cię widzieć ponownie";
};
