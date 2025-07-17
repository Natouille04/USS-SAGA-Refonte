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

        Schema::create('capitaines', function (Blueprint $table) {
            $table->id();
            $table->string('first_name');
            $table->string('middle_name')->nullable();
            $table->string('last_name');
            $table->timestamps();
        });

        Schema::create('vaisseaux', function (Blueprint $table) {
            $table->id();
            $table->enum('prefix', [
                    'USS', 'ISS', 'IKS', 'IKC', 'IKV', 'IRW', 'RIS', 
                    'PWB', 'OSS', 'IGV', 'VS', 'ECS', 'SS', 'VK', 'NX', 
                    'NS', 'NAR', 'BDR', 'NDT', 'NFT', 'NGL', 'NSP',
                    'DEV', 'FMS', 'USGS'
                ])->default('USS');
            $table->string('name');
            $table->string('registration');
            $table->timestamps();
        });

        Schema::create('planetes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('og_title')->nullable();
            $table->string('isbn')->nullable();
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->string('comment')->nullable();
            $table->string('url');
            $table->foreignId('capitaine_id')->nullable()->constrained('capitaines')->onDelete('set null');
            $table->foreignId('vaisseau_id')->nullable()->constrained('vaisseaux')->onDelete('set null');
            $table->foreignId('planete_id')->nullable()->constrained('planetes')->onDelete('set null');
            $table->string('type')->nullable();
            $table->timestamps();
        });


        Schema::create('bulletins', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->string('description');
            $table->date('date');
            $table->timestamps();
        });

        Schema::create('fk_document_bulletin', function (Blueprint $table) {
            $table->id();
            $table->foreignId('document_id')->constrained()->onDelete('cascade');
            $table->foreignId('bulletin_id')->constrained()->onDelete('cascade');
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
        Schema::dropIfExists('fk_document_bulletin');
        Schema::dropIfExists('bulletins');
        Schema::dropIfExists('documents');
        Schema::dropIfExists('planetes');
        Schema::dropIfExists('vaisseaux');
        Schema::dropIfExists('capitaines');
        Schema::dropIfExists('correctors');
        Schema::dropIfExists('traductors');
        Schema::dropIfExists('illustrators');
        Schema::dropIfExists('authors');
    }
};
