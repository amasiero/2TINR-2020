<?php

class Veiculo
{
    private string $placa;
    private string $marca;
    private string $modelo;

    public function __construct(string $placa, string $marca, string $modelo)
    {
        $this->placa = $placa;
        $this->marca = $marca;
        $this->modelo = $modelo;
    }

    public function veiculoInfo() {
        return "$this->marca $this->modelo";
    }

    public function getPlaca() {
        return $this->placa;
    }

    public function getMarca() {
        return $this->marca;
    }

    public function getModelo() {
        return $this->modelo;
    }
}

