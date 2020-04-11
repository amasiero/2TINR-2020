@extends("layout")

@section("titulo")
Gerenciador de Empresas
@endsection

@section("conteudo")
<a href="/empresas/adicionar" class="btn btn-dark mb-2">
    Adicionar
</a>
<ul class="list-group">
    <?php  foreach ($empresas as $empresa): ?>
    <li class="list-group-item"><?= $empresa ?></li>
    <?php endforeach ?>
</ul>
@endsection
