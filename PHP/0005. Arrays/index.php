<?php
$arrStdKeys = [
    1, 2, 3, 4, 6
];
$arrManKeys = [
    0 => 5,
    2 => 7,
    3 => 9,
    5 => 10
];
$arrAssocKeys = [
    "Sierotka" => "Ala",
    "ma" => "ma",
    "rysia" => "kota"
];
?>
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
// foreach ($arrStdKeys as $val) {
//     echo $val."\t";
// }
// echo "\n";
// for($i = 0; $i < count($arrStdKeys); $i++) {
//     echo $arrStdKeys[$i]."\t";
// }
// echo "\n";
// foreach ($arrManKeys as $val) {
//     echo $val."\t";
// }
// echo "\n";
// foreach ($arrAssocKeys as $val) {
//     echo $val."\t";
// }
// echo "\n";
// foreach ($arrAssocKeys as $key => $val) {
//     echo $key."\t";
// }
// echo "\n";
// foreach ($arrManKeys as $key => $val) {
//     echo $key."\t=\t".$val."\n";
// }
for ($i = 0; $i < 6; $i++)
{
    for($j = 0; $j <= $i; $j++ )
    {
        echo "* ";
    }
    echo "\n";
}
?>
</body>
</html>