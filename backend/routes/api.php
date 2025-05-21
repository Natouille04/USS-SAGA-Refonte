<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;

Route::get('/', function () {
    return 'Hello World';
});

Route::get('/allDocuments', [DocumentController::class, 'index'])->name('documents.index');
Route::get('/allDocuments/{id}', [DocumentController::class, 'show'])->name('documents.show');
Route::get('/deleteDocument/{id}', [DocumentController::class, 'destroy'])->name('documents.destroy');

Route::post('/storeDocument', [DocumentController::class, 'store']);