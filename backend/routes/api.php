<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;

Route::get('/', function () {
    return 'Hello World';
});

Route::prefix('document')->group(function () {
    Route::get('/all', [DocumentController::class, 'index'])->name('documents.index');
    Route::get('/all/{id}', [DocumentController::class, 'show'])->name('documents.show');

    Route::get('/getLast', [DocumentController::class, 'getLast'])->name('documents.getLast');

    Route::get('/delete/{id}', [DocumentController::class, 'destroy'])->name('documents.destroy');

    Route::post('/store', [DocumentController::class, 'store'])->name('documents.store');
});