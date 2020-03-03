<?php

require_once('funcoes.php');
require_once ('Veiculo.php');

session_start();

if(isset($_POST['submitButton'])) {
    $_SESSION["veiculos"][] = new Veiculo($_POST["placa"],$_POST["marca"],$_POST["modelo"]);
}else{
    $veiculos = [
        new Veiculo("ABC-1234","Citroen","C3"),
        new Veiculo("DEF-5678", "Ferrari","458")
    ];
    $_SESSION["veiculos"] = $veiculos;
}

?>

<!doctype html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Valet</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
</head>
<body>
    <nav class="navbar navbar-light bg-light">
        <a href="#" class="navbar-brand">
            <i class="fas fa-car-alt"></i>
            Just Park
        </a>
    </nav>
    <section class="container">
        <h2 class="mt-4">Inserir novo veículo</h2>
        <form class="mt-4" method="post" action="">
            <div class="form-group">
                <label for="inputPlaca">Placa</label>
                <input type="text" class="form-control" id="inputPlaca" name="placa" placeholder="Digite a placa do veículo.">
            </div>
            <div class="form-group">
                <label for="inputMarca">Marca</label>
                <input type="text" class="form-control" id="inputMarca" name="marca"  placeholder="Digite a marca do veículo.">
            </div>
            <div class="form-group">
                <label for="inputModelo">Modelo</label>
                <input type="text" class="form-control" id="inputModelo" name="modelo" placeholder="Digite o modelo do veículo.">
            </div>
            <button type="submit" class="btn btn-primary" name="submitButton">Cadastrar entrada</button>
        </form>
        <h2 class="mt-4">Veículos Estacionados</h2>
        <table class="table mt-4">
            <thead>
            <tr>
                <th>Placa</th>
                <th>Veículo</th>
            </tr>
            </thead>

            <tbody>
                <?php foreach ($_SESSION["veiculos"] as $veiculo) { ?>
                    <tr>
                        <td><?= $veiculo->getPlaca() ?></td>
                        <td><?=  $veiculo->veiculoInfo() ?></td>
                    </tr>
                <?php } ?>
            </tbody>
        </table>
    </section>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>
</body>
</html>
