<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\GepekController;
use App\Http\Controllers\CostumAuthController;

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

/*oldalak*/
Route::get('/', function () { return view('pages.index'); });
Route::get('/gepek', function () { return view('pages.gepek'); });
Route::get('/kapcsolatok', function () { return view('pages.kapcsolatok'); });
Route::get('/vasarlas', function () { return view('pages.vasarlas'); });
Route::get('/cikkek_etrend', function () { return view('pages.cikkek_etrend'); });
Route::get('/bejelentkezes', function () { return view('pages.bejelentkezes'); });
Route::get('/regisztracio', function () { return view('pages.regisztracio'); });
Route::get('/elfelejtettjelszo', function () { return view('pages.elfelejtettjelszo'); });
Route::get('/berletVasarlas', function () { return view('pages.berletVasarlas'); });
Route::get('/admin', function () { return view('pages.admin'); });



/*Login, regist*/

//Route::get('/login', function(){ return view("Login"); });

Route::get('/login', [CostumAuthController::class, 'login'])->middleware('alreadyLoggedIn');
Route::get('/registration', [CostumAuthController::class, 'registration'])->middleware('alreadyLoggedIn');
Route::post('/register-user', [CostumAuthController::class, 'registerUser'])->name('register-user');
Route::post('/login-user',[CostumAuthController::class, 'loginUser'])->name('login-user');
Route::get('/dashboard', [CostumAuthController::class, 'dashboard'])->middleware('isLoggedIn');
Route::get('/logout', [CostumAuthController::class, 'logout']);


/*Gépek keresőpontjai*/
//Route::get('/api/gepek/search', [GepekController::class, 'search']);
//Route::get('/api/gepek/sort', [GepekController::class, 'sortBy']);
Route::get('/api/gepek/{id}', [GepekController::class, 'show']);
