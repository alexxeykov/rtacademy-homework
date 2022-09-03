<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="utf-8">
    <title>02</title>
</head>
<body>
<pre>
<?php

$bool = true;
$int = 1;
$float = 1.1;
$string_single = 'string with single quotes';
$string_double = "string with double quotes and var ${int}";

$string_heredoc = <<<STRING
HEREDOC string
with $string_single
STRING;

$string_nowdoc = <<<'STRING'
NOWDOC string
STRING;

$arr_simple = ['1', 'hello'];
$arr_associative = [
    '1' => 'hello',
    '2' => 'world',
];

$null = null;

echo("-----var_dump-----\n\n");
var_dump($bool);
var_dump($int);
var_dump($float);
var_dump($string_single);
var_dump($string_double);
var_dump($string_heredoc);
var_dump($string_nowdoc);
var_dump($arr_simple);
var_dump($arr_associative);
var_dump($null);
echo("\n-----print_r-----\n\n");
print_r($bool . "\n");
print_r($int . "\n");
print_r($float);
print_r($string_single . "\n");
print_r($string_double . "\n");
print_r($string_heredoc . "\n");
print_r($string_nowdoc . "\n");
print_r($arr_simple);
print_r($arr_associative);
print_r($null . "\n");
echo("\n-----echo-----\n\n");
echo($bool . "\n");
echo($int . "\n");
echo($float);
echo($string_single . "\n");
echo($string_double . "\n");
echo($string_heredoc . "\n");
echo($string_nowdoc . "\n");
foreach($arr_simple as $simple){
    echo $simple . "\n";
}
foreach($arr_associative as $associative){
    echo $associative . "\n";
}
echo($null . "\n");

?>
</pre>
</body>
</html>
