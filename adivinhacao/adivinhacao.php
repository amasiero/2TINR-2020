<?php

echo "***********************************" . PHP_EOL;
echo " Bem vindo ao Jogo de Adivinhação! " . PHP_EOL;
echo "***********************************" . PHP_EOL;

$numeroSecreto = random_int(1, 100);
echo $numeroSecreto . PHP_EOL;
$totalTentativas = 0;
$pontos = 1000;

echo "Qual o nível de dificuldade?" . PHP_EOL;
echo "(1) Recruta (2) Profissional (3) Sobrevivente" . PHP_EOL;
$nivel = readline("Defina seu nível: ");

if($nivel == 1) {
    $totalTentativas = 20;
} elseif($nivel == 2) {
    $totalTentativas = 10;
} elseif($nivel == 3) {
    $totalTentativas = 5;
}

for($tentativa = 1; $tentativa <= $totalTentativas; $tentativa++) {
    echo "Tentativa $tentativa de $totalTentativas" . PHP_EOL;

    $palpite = intval(
        readline("Digite seu número entre 1 e 100: ")
    );
    echo "Você digitou: $palpite" . PHP_EOL;

    if($palpite < 1 || $palpite > 100) {
        echo "Você deve digitar um número entre 1 e 100" . PHP_EOL;
        continue;
    }

    $acertou = $palpite == $numeroSecreto;
    $maior = $palpite > $numeroSecreto;
    $menor = $palpite < $numeroSecreto;

    if($acertou) {
        echo "Parabéns!\nVocê acertou o número secreto." . PHP_EOL;
        break;
    } else {
        echo "Errrrooooouuuuu!!!!" . PHP_EOL;
        if($maior) {
            echo "O seu chute foi maior que o número secreto." . PHP_EOL;
        } elseif($menor) {
            echo "O seu chute foi maior que o número secreto." . PHP_EOL;
        }
        $pontosPerdidos = abs($palpite - $numeroSecreto);
        $pontos = $pontos - $pontosPerdidos;
    }
}

echo "Fim de Jogo." . PHP_EOL;

