<?php
    echo extension_loaded("mongodb") ? "loaded\n" : "not loaded\n";

    use MongoDB\Driver\Manager as Manager;
    use MongoDB\Driver\BulkWrite as BulkWrite;

    $manager = new Manager("mongodb://localhost:27017");

    $datetime = new DateTime("2020-03-31 16:32:15");
    $milisegundos = $datetime->getTimestamp() * 1000;

    $bulk = new BulkWrite;

    $documento = [
      '_id' => new MongoDB\BSON\ObjectId,
      'veiculo' => [
          'placa' => 'ABC-1234',
          'marca' => 'Dodge',
          'modelo' => 'Challenger SRT8'
      ],
      'entrada' => new MongoDB\BSON\UTCDateTime($milisegundos)
    ];
    $bulk->insert($documento);

    $documento = [
        '_id' => new MongoDB\BSON\ObjectId,
        'veiculo' => [
            'placa' => 'DEF-5678',
            'marca' => 'Dodge',
            'modelo' => 'Charger SRT8'
        ],
        'entrada' => new MongoDB\BSON\UTCDateTime($milisegundos)
    ];
    $bulk->insert($documento);

    $documento = [
        '_id' => new MongoDB\BSON\ObjectId,
        'veiculo' => [
            'placa' => 'GHI-9012',
            'marca' => 'Ferrari',
            'modelo' => 'F458'
        ],
        'entrada' => new MongoDB\BSON\UTCDateTime($milisegundos)
    ];
    $bulk->insert($documento);

    $manager->executeBulkWrite('valetdb.tickets', $bulk);

