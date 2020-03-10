<?php

require_once("Ticket.php");
require_once ("Veiculo.php");

class Estacionamento
{
    private static $tickets = [];

    public function __construct()
    {
        self::$tickets[] = new Ticket(new Veiculo("ABC-1234", "Citroen", "C3"), new DateTime("2020-03-10T15:52:01+03:00"));
        self::$tickets[] = new Ticket(new Veiculo("DEF-5678", "Ferrari", "458"), new DateTime("2020-03-10T15:22:00+03:00"));
    }

    public function estaciona(Ticket $ticket) : void
    {
        self::$tickets[] = $ticket;
    }

    public function sai(int $id) : void
    {
        $ticket = $this->consultaPorId($id);
        if ($ticket == null) throw new Exception("Ticket não encontrado.");
        $ticket->registraSaida();
    }

    public function consultaTodos()
    {
        return self::$tickets;
    }

    public function consultaPorId(int $id) : Ticket
    {
        foreach (self::$tickets as $ticket) {
            if($ticket->id == $id) {
                return $ticket;
            }
        }
        return null;
    }
}