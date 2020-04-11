<?php

namespace App\Http\Controllers;

class EmpresaController
{
    public function index() {
        $empresas = [
            'Google',
            'JetBrains',
            'Microsoft',
            'FIAP'
        ];

        return view('empresas.index', compact('empresas'));
    }

    public function create() {
        return view( 'empresas.adicionar');
    }
}
