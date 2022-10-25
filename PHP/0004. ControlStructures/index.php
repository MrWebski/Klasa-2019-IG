<?php
$date = date("H");
if ($date < "10") {
    echo 'Dzień dobry!';
    echo '<br>';
}
elseif($date < "18") {
    echo 'Miłego dnia!';
    echo '<br>';
}
else {
    echo 'Dobrej nocy!';
    echo '<br>';
}
echo '<br>';
switch($date) {
    case "06":
    case "07":
    case "08":
    case "09":
        echo 'Wstawaj dzbanie!';
        echo '<br>';
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
        echo 'Dzień dobry!';
        echo '<br>';
        break;
    case "18":
        echo 'Miłego dnia!';
        echo '<br>';
        break;
    default:
        echo 'Dobrej nocy!';
        echo '<br>';
}
echo '<br>';
echo '<br>';
$i = 0;
while($i < 10) {
    echo $i++;
}
echo '<br>';
echo '<br>';
do {
    echo $i++;
} while($i < 10);
echo '<br>';
echo '<br>';
for($i = 0;; $i++) {
    if($i % 2 == 0) echo $i;
    if($i >= 10) break;
}
?>