<?php


class EstacionamentoDAO
{
    private MongoDB\Driver\Manager $mng; // Soh funciona a partir do 7.4

    // private $mng; para PHP 7.3 ou anterior

    public function __construct()
    {
        $this->mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
    }

    public function consultaTodos()
    {
        try {
            $query = new MongoDB\Driver\Query([]);
            $cursor = $this->mng->executeQuery('valetdb.tickets', $query);
            $tickets = [];

            foreach ($cursor as $document) {
                $ticket = new Ticket(
                    new Veiculo(
                        $document->veiculo->placa,
                        $document->veiculo->marca,
                        $document->veiculo->modelo
                    ),
                    $document->entrada->toDatetime()
                );
                $ticket->setId($document->_id->__toString());
                if (!empty($document->saida)) {
                    $ticket->setSaida($document->saida->toDatetime());
                    $ticket->setPreco(floatval($document->preco));
                }
                $tickets[] = $ticket;
            }
            return $tickets;

        } catch (MongoDB\Driver\Exception\Exception $e) {
            echo "Exception: " . $e->getMessage();
        }
        return null;
    }

    public function adiciona(Ticket $ticket): void
    {
        try {
            $documento = [
                '_id' => new MongoDB\BSON\ObjectId,
                'veiculo' => [
                    'placa' => $ticket->getVeiculo()->getPlaca(),
                    'marca' => $ticket->getVeiculo()->getMarca(),
                    'modelo' => $ticket->getVeiculo()->getModelo()
                ],
                'entrada' => new MongoDB\BSON\UTCDateTime(
                    $ticket->getEntrada()->getTimestamp() * 1000
                )
            ];

            $bulk = new MongoDB\Driver\BulkWrite;
            $bulk->insert($documento);
            $this->mng->executeBulkWrite('valetdb.tickets', $bulk);
        } catch (MongoDB\Driver\Exception\Exception $e) {
            echo "Exception: " . $e->getMessage();
        }
    }

    public function atualiza(Ticket $ticket): void
    {
        try {
            $bulk = new MongoDB\Driver\BulkWrite;
            $bulk->update(
              [
                  '_id' => new MongoDB\BSON\ObjectId($ticket->getId())
              ],
              [
                  '$set' => [
                      'saida' => new MongoDB\BSON\UTCDateTime(
                          $ticket->getSaida()->getTimestamp() * 1000
                      ) ,
                      'preco' => $ticket->getPreco()
                  ]
              ]
            );
            $this->mng->executeBulkWrite('valetdb.tickets', $bulk);
        } catch (MongoDB\Driver\Exception\Exception $e) {
            echo "Exception: " . $e->getMessage();
        }
    }

}