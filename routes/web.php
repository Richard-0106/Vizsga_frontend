<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KategoriaController;
use App\Http\Controllers\TesztController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('teszt');
});
Route::get('/kategoria',[KategoriaController::class,'index']);
Route::get('/tesztek',[TesztController::class,'index']);
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
