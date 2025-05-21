<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('authors', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->timestamps();
        });

        Schema::create('illustrators', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->timestamps();
        });

        Schema::create('traductors', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->timestamps();
        });

        Schema::create('correctors', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name')->nullable();
            $table->timestamps();
        });

        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('og_title')->nullable();
            $table->string('isbn')->nullable();
            $table->string('image');
            $table->text('description')->nullable();
            $table->string('comment')->nullable();
            $table->string('url');
            $table->string('type')->nullable();
            $table->timestamps();
        });

        Schema::create('fk_document_author', function (Blueprint $table) {
            $table->id();
            $table->foreignId('document_id')->constrained()->onDelete('cascade');
            $table->foreignId('author_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('fk_document_illustrator', function (Blueprint $table) {
            $table->id();
            $table->foreignId('document_id')->constrained()->onDelete('cascade');
            $table->foreignId('illustrator_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('fk_document_traductor', function (Blueprint $table) {
            $table->id();
            $table->foreignId('document_id')->constrained()->onDelete('cascade');
            $table->foreignId('traductor_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('fk_document_corrector', function (Blueprint $table) {
            $table->id();
            $table->foreignId('document_id')->constrained()->onDelete('cascade');
            $table->foreignId('corrector_id')->constrained()->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('fk_document_corrector');
        Schema::dropIfExists('fk_document_traductor');
        Schema::dropIfExists('fk_document_illustrator');
        Schema::dropIfExists('fk_document_author');
        Schema::dropIfExists('documents');
        Schema::dropIfExists('correctors');
        Schema::dropIfExists('traductors');
        Schema::dropIfExists('illustrators');
        Schema::dropIfExists('authors');
    }
};
