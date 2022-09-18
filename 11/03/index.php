<?php
function capitalize($str): array|string
{
    if (is_string($str)) {

        $part = explode('-', $str);

        $firstEl = $part[0];
        $lastEl = end($part);
        $regExp = '/(^.[\'`"].*)/u';

        $changeRegister = array_map(function ($part) use ($regExp, $firstEl, $lastEl) {

            if (preg_match($regExp, $part)) {
                return mb_strtolower(mb_substr($part, 0, 1)) . mb_strtoupper(mb_substr($part, 1, 2)) . mb_strtolower(mb_substr($part, 2));
            }

            if ($part === $firstEl) {
                return mb_strtoupper(mb_substr($part, 0, 1)) . mb_strtolower(mb_substr($part, 1));
            } elseif ($part === $lastEl) {
                return mb_strtoupper(mb_substr($part, 0, 1)) . mb_strtolower(mb_substr($part, 1));
            } elseif (mb_strlen($part) > 3) {
                return mb_strtoupper(mb_substr($part, 0, 1)) . mb_strtolower(mb_substr($part, 1));
            } else {
                return mb_strtolower($part);
            }

        }, $part);

        return implode('-', $changeRegister);
    } elseif (is_array($str)) {
        return array_map('capitalize', $str);
    } else {
        return 'Невірно вказано тип міста';
    }
}

print_r(capitalize('київ'));
print_r('<br>');
print_r(capitalize('нью-йорк'));
print_r('<br>');
print_r(capitalize('ЛОС-АНДЖЕЛЕС'));
print_r('<br>');
print_r(capitalize('РіО-дЕ-ЖаНеЙрО'));
print_r('<br>');
print_r(capitalize('франкФУРТ-НА-майНІ'));
print_r('<br>');
print_r(capitalize('сен-сатюрнен-лез-апт'));
print_r('<br>');
print_r(capitalize('лаГАрд-Д\'аПт'));
print_r('<br>');
print_r(capitalize('скоп\'є'));
print_r('<br>');
print_r(capitalize('прем\'єР-скоп\'Є'));
print_r('<br>');
print_r(capitalize(123));
print_r('<br>');
print_r(capitalize(false));
print_r('<br>');
print_r(capitalize(['київ', 'нью-йорк', 'ЛОС-АНДЖЕЛЕС', 'РіО-дЕ-ЖаНеЙрО', 'франкФУРТ-НА-майНІ', 'сен-сатюрнен-лез-апт', 'лаГАрд-Д\'аПт']));