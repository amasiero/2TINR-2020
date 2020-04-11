<?php

use Illuminate\Support\Facades\Route;

Route::get('/empresas', 'EmpresaController@index');
Route::get('/empresas/adicionar', 'EmpresaController@create');
