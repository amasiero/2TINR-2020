<?php

require_once("Veiculo.php");

class Ticket
{
    private static int $id = 0;
    private Veiculo $veiculo;
    private DateTime $entrada;
    private DateTime $saida;
    private double $preco;

    public function __construct(Veiculo $veiculo, $entrada = null)
    {
        Ticket::$id++;
        $this->veiculo = $veiculo;
        $this->entrada = $entrada == null ? new DateTime() : $entrada;
    }

    public static function getId(): int
    {
        return self::$id;
    }

    public function getVeiculo(): Veiculo
    {
        return $this->veiculo;
    }

    public function getEntrada(): DateTime
    {
        return $this->entrada;
    }

    public function getSaida(): DateTime
    {
        return $this->saida;
    }

    public function registraSaida(): void
    {
        $this->saida = new DateTime();
        $diff = $this->entrada->diff($this->saida);
        $this->preco = $this->calculaValorEstacionamento($diff);
    }

    private function calculaValorEstacionamento(DateInterval $diff)
    {
        return $diff->h * 3;
    }
}

