<?php

use Illuminate\Support\Facades\Route;

Route::get('/empresas', 'EmpresaController@index');
Route::get('/empresas/adicionar', 'EmpresaController@create');
Route::post('/empresas/adicionar', 'EmpresaController@store');
Route::delete('/empresas/{id}', 'EmpresaController@destroy');
