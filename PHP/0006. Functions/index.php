<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            white-space: pre;
            font-size: 2rem;
        }
    </style>
</head>
<body>
<?php
function nazwaProcedury($par1 = 4, $par2 = 5, $par3 = "Lorem ipsum!") {
    echo $par1." ";
    echo $par2." ";
    echo $par3."\n\n";
}
nazwaProcedury(1, 2, 3);
nazwaProcedury("Ala", "ma", "kota");
nazwaProcedury();

function nazwaFunkcji($a, $b) {
    return sqrt(($a ** 2) + ($b ** 2));
}
echo nazwaFunkcji(3, 4)."\n\n";

function licznik($i, $j) {
    if($i <= $j) {
        echo $i."\n";
        licznik($i + 1, $j);
    }
}
licznik(1, 5)."\n\n";

function silnia($n)
{
    if ($n < 0) return -1;
    if ($n == 0) return 1;
    return ($n * silnia ($n -1));
}
?>
</body>
</html>