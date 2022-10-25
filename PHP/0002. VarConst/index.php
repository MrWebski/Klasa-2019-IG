<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$x = 'nazwaZmiennej';
$$x = 123;
echo $nazwaZmiennej;
$$x = 345;
echo $nazwaZmiennej;

define('ALAMAKOTA', 'Ala ma kota');
const SIEROTKAMARYSIA = 'Sierotka ma rysia';
echo ALAMAKOTA;
echo constant('SIEROTKAMARYSIA');
echo __LINE__ .'<br>';
echo __FILE__.'<br>';
echo __DIR__.'<br>';
function funkcja() {
    echo __FUNCTION__.'<br>';
}
function funkcja2() {
    funkcja();
}
funkcja();
funkcja2();
?>
</body>
</html>