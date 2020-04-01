<?php
require_once ('Estacionamento.php');
$estacionamento = new Estacionamento();
$estacionamento->sai($_GET['_id']);
header("Location: valet.php");