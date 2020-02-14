<?php

function adicionaVeiculo(array &$veiculos,
                         string $placa,
                         string $marca,
                         string $modelo)
{
    $veiculos[$placa] = [
        "marca" => $marca,
        "modelo" => $modelo
    ];

}

function removeVeiculo(array $veiculos,
                       string $placa) : array
{
    unset($veiculos[$placa]);
    return $veiculos;
}