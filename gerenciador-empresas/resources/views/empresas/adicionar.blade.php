@extends("layout")

@section("titulo")
Adicionar Empresa
@endsection

@section("conteudo")
<form method="post">
    @csrf
    <div class="form-group">
        <label for="nomeEmpresa">Nome da Empresa</label>
        <input type="text" class="form-control"
               name="nome"
               placeholder="Digite o nome da empresa.">
    </div>
    <button class="btn btn-primary">Salvar</button>
</form>
@endsection
