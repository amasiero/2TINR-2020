<?php

require_once('funcoes.php');

$veiculos = [
    "ABC-1234" => [
    "marca" => "Citroen",
    "modelo" => "C3"
    ],
    "DEF-5678" => [
        "marca" => "Ferrari",
        "modelo" => "458"
    ],
];

adicionaVeiculo($veiculos, "GHI-9012", "Ford", "Shelby Mustang");

$veiculos = removeVeiculo($veiculos, "DEF-5678");

?>

<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Valet</title>
</head>
<body>
<?php foreach ($veiculos as $placa =>$veiculo) { ?>
    <?= $placa . " " . $veiculo['marca'] . " " . $veiculo['modelo'] ?> <br />
<?php } ?>
</body>
</html>
