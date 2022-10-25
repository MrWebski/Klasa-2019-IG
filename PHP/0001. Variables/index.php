<?php error_reporting(E_ALL); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./style.css">
</head>
<body>
<?php
$alaMaKota = "Ala ma kota";
var_dump($alaMaKota);

$integerVarlable = 123;
var_dump($integerVarlable);

$floatVarlable = 123.456;
var_dump($floatVarlable);

$booleanVarlable = true;
var_dump($booleanVarlable);

$arrayVarlable = array('A', 'B', 'C', 1, 2, 3);
var_dump($arrayVarlable);

class Car {
    public $color;
    public $model;
    public function __construct($color, $model) {
        $this->color = $color;
        $this->model = $model;
    }
    public function message() {
        return "My car is a " . $this->color . " " . $this->model . "!";
    }
}
$objectVarlable = new Car('black', 'BMW');
var_dump($objectVarlable);

$nullVarlable = null;
var_dump($nullVarlable);
?>
</body>
</html>