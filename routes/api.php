<?php

use \App\Http\Controllers\EmailController;
use \Illuminate\Support\Facades\Route;

Route::post('/email', [EmailController::class, 'send']);
