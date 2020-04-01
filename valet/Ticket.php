<?php

require_once("Veiculo.php");
date_default_timezone_set('America/Sao_Paulo');

class Ticket
{
    private String $id;
    private Veiculo $veiculo;
    private DateTime $entrada;
    private DateTime $saida;
    private float $preco;

    public function __construct(Veiculo $veiculo, $entrada = null)
    {
        $this->veiculo = $veiculo;
        $this->entrada = $entrada == null ? new DateTime() : $entrada;
    }

    public function getId(): String
    {
        return $this->id;
    }

    public function getVeiculo(): Veiculo
    {
        return $this->veiculo;
    }

    public function getEntrada(): DateTime
    {
        return $this->entrada;
    }

    public function getSaida()
    {
        return isset($this->saida) ? $this->saida : null;
    }

    public function getPreco() : float
    {
        return $this->preco;
    }

    public function setId(String $id) : void
    {
        $this->id = $id;
    }

    public function setSaida(Datetime $saida) : void
    {
        $this->saida = $saida;
    }

    public function setPreco(float $preco) : void
    {
        $this->preco = $preco;
    }

    public function registraSaida(): void
    {
        $this->saida = new DateTime();
        $diff = $this->entrada->diff($this->saida);
        $this->preco = $this->calculaValorEstacionamento($diff);
    }

    private function calculaValorEstacionamento(DateInterval $diff)
    {
        return floatval($diff->h * 3);
    }
}

