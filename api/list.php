<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');




$list = [
    [
        'title' => 'New design',
        'date'  => date('Y-m-d H:i:s'),
        'user'  => 'wissem',
        'votes' => 4
    ]

];


echo json_encode($list);