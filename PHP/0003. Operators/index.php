<?php
echo 2 + 5;
echo '<br>';
echo 2 - 5;
echo '<br>';
echo 2 * 5;
echo '<br>';
echo 2 / 5;
echo '<br>';
echo 2 % 5;
echo '<br>';
// Od wersji PHP 5.6
echo 2 ** 5;
echo '<br>';
echo '<br>';
$zmA = 2;
$zmB = 5;
echo $zmB;
echo ++$zmB;
echo $zmB;
echo '<br>';
echo $zmA;
echo $zmA++;
echo $zmA;
echo '<br>';
echo $zmA;
echo $zmA--;
echo $zmA;
echo '<br>';
echo $zmB;
echo --$zmB;
echo $zmB;
echo '<br>';
echo '<br>';
$zmB += 2;
echo $zmB;
echo '<br>';
$zmB -= 2;
echo $zmB;
echo '<br>';
$zmB *= 2;
echo $zmB;
echo '<br>';
$zmB /= 2;
echo $zmB;
echo '<br>';
$zmB %= 2;
echo $zmB;
echo '<br>';
echo '<br>';
var_dump(2 == 5);
echo '<br>';
var_dump(2 === 5);
echo '<br>';
var_dump(2 !== 5);
echo '<br>';
var_dump(2 != 5);
echo '<br>';
var_dump(2 <> 5);
echo '<br>';
var_dump(2 < 5);
echo '<br>';
var_dump(2 > 5);
echo '<br>';
var_dump(2 <= 5);
echo '<br>';
var_dump(2 >= 5);
echo '<br>';
var_dump(2 <=> 5);
echo '<br>';
echo 'ABC' . 2 . 5 . true;
echo '<br>';
echo '<br>';
var_dump(false and true);
echo '<br>';
var_dump(true && true);
echo '<br>';
var_dump(true or true);
echo '<br>';
var_dump(false || true);
echo '<br>';
var_dump(true xor true);
echo '<br>';
var_dump(true ^ true);
echo '<br>';
var_dump(!true);
echo '<br>';
echo '<br>';
var_dump([1, 2, 3, 4, "5"] + [1, 2, 3, 4, "5", 6, 7]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] == [1, 2, 3, 4, 5]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] === [1, 2, 3, 4, 5]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] === [1, 2, 3, 4, "5"]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] != [1, 2, 3, 4, "5"]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] <> [1, 2, 3, 4, "5"]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] !== [1, 2, 3, 4, "5"]);
echo '<br>';
var_dump([1, 2, 3, 4, "5"] !== [1, 2, 3, 4, 5]);
?>