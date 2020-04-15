<?php

namespace App\Http\Controllers;


use App\Empresa;
use Illuminate\Http\Request;

class EmpresaController
{
    public function index(Request $request)
    {
        $empresas = Empresa::query()->orderBy('nome')->get();
        $mensagem = $request->session()->get('mensagem');

        return view('empresas.index', compact('empresas', 'mensagem'));
    }

    public function create()
    {
        return view( 'empresas.adicionar');
    }

    public function store(Request $request)
    {
        $empresa = Empresa::create($request->all());
        $request
            ->session()
            ->flash(
                'mensagem',
                "Empresa {$empresa->id} - {$empresa->nome} criada com sucesso."
            );

        return redirect('/empresas');
    }

    public function destroy(Request $request)
    {
        Empresa::destroy($request->id);
        $request
            ->session()
            ->flash(
                'mensagem',
                "Empresa excluida com sucesso."
            );

        return redirect('/empresas');
    }
}
