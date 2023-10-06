<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::name('user.')->middleware(['guest'])->group(function () {

    Route::get('/', [UserController::class, 'loginPage'])->name('login-page');
    Route::post('/login', [UserController::class, 'login'])->name('login');

    Route::get('/register', [UserController::class, 'registerPage'])->name('register-page');
    Route::post('/registerUser', [UserController::class, 'register'])->name('register');
});

Route::name('user.')->middleware(['auth'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('dashboard');
    Route::get('/logout', [UserController::class, 'logout'])->name('logout');
});
