@extends("layout")

@section("titulo")
Gerenciador de Empresas
@endsection

@section("conteudo")
@if(!empty($mensagem))
    <div class="alert alert-success">
        {{ $mensagem }}
    </div>
@endif

<a href="/empresas/adicionar" class="btn btn-dark mb-2">
    Adicionar
</a>
<ul class="list-group">
    @foreach ($empresas as $empresa)
        <li class="list-group-item d-flex justify-content-between align-items-center">
            {{ $empresa->nome }}
            <form method="post" action="/empresas/{{ $empresa->id }}">
                @csrf
                @method('DELETE')
                <button class="btn btn-danger">
                    <i class="fas fa-trash-alt mr-1"></i>
                    Excluir
                </button>
            </form>
        </li>
    @endforeach
</ul>
@endsection
