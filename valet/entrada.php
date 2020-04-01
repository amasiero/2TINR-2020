<?php
require_once ('Estacionamento.php');
$estacionamento = new Estacionamento();
$estacionamento->estaciona(
    new Ticket(
        new Veiculo(
            $_POST["placa"],
            $_POST["marca"],
            $_POST["modelo"]
        )
    )
);
header("Location: valet.php");