<?php

require_once("Ticket.php");
require_once ("Veiculo.php");
require_once ("EstacionamentoDAO.php");

class Estacionamento
{
    private array $tickets;
    private EstacionamentoDAO $dao;

    public function __construct()
    {
        $this->dao = new EstacionamentoDAO();
        $this->tickets = $this->dao->consultaTodos();
    }

    public function estaciona(Ticket $ticket) : void
    {
        $this->dao->adiciona($ticket);
    }

    public function sai(String $id) : void
    {
        $ticket = $this->consultaPorId($id);
        if ($ticket == null) throw new Exception("Ticket não encontrado.");
        $ticket->registraSaida();
        $this->dao->atualiza($ticket);
    }

    public function consultaTodos()
    {
        return $this->tickets;
    }

    public function consultaPorId(String $id) : Ticket
    {
        foreach ($this->tickets as $ticket) {
            if($ticket->getId() == $id) {
                return $ticket;
            }
        }
        return null;
    }
}