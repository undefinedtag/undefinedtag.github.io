<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');
Route::get('/portfolio', function () {
    return Inertia::render('portfolio');
})->name('portfolio');
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});
require __DIR__.'/api.php';
require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
