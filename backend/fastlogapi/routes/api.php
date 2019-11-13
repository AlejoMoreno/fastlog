<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', 'UserController@login');
Route::post('register', 'UserController@register');

//mirar luego como hacer el middleware


/** COMIENZO CON EL API */

/**
 * Rutas principles para clinicas 
 * @param create
 * @param show
 * @param showAll
 * @param destroy
 * @param update
 * Cada uno con su get o post desde la base de clinicas
 */
Route::post('clinicas/create', 'ClinicasController@create');
Route::get('clinicas/{id}', 'ClinicasController@show');
Route::get('clinicas', 'ClinicasController@showAll');
Route::post('clinicas/delete', 'ClinicasController@destroy');
Route::post('clinicas/update', 'ClinicasController@update');
