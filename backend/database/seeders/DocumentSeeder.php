<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Author;
use App\Models\Illustrator;
use App\Models\Traductor;
use App\Models\Corrector;

class DocumentSeeder extends Seeder
{
    public function run(): void
    {
        // Création de plusieurs auteurs, illustrateurs, traducteurs et correcteurs
        $authorIds = [];
        $illustratorIds = [];
        $traductorIds = [];
        $correctorIds = [];

        for ($i = 1; $i <= 10; $i++) {
            $authorIds[] = DB::table('authors')->insertGetId([
                'first_name' => 'Auteur' . $i,
                'middle_name' => $i % 2 == 0 ? 'M.' . $i : null,
                'last_name' => 'Nom' . $i,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $illustratorIds[] = DB::table('illustrators')->insertGetId([
                'first_name' => 'Illustrateur' . $i,
                'middle_name' => null,
                'last_name' => 'Graph' . $i,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $traductorIds[] = DB::table('traductors')->insertGetId([
                'first_name' => 'Traducteur' . $i,
                'middle_name' => null,
                'last_name' => 'Lingua' . $i,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $correctorIds[] = DB::table('correctors')->insertGetId([
                'first_name' => 'Correcteur' . $i,
                'middle_name' => 'C.' . $i,
                'last_name' => 'Fix' . $i,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        // Insertion de 50 documents
        for ($i = 1; $i <= 50; $i++) {
            $documentId = DB::table('documents')->insertGetId([
                'title' => "Document $i",
                'og_title' => "Original Title $i",
                'isbn' => '978-' . rand(1000000000, 9999999999),
                'image' => "https://picsum.photos/200/300?random=$i",
                'description' => "Description du document $i",
                'comment' => $i % 2 === 0 ? "Commentaire $i" : null,
                'url' => "https://example.com/documents/$i",
                'type' => ['book', 'magazine', 'pdf'][array_rand(['book', 'magazine', 'pdf'])],
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            // Associations aléatoires (1 à 3 de chaque)
            $selectedAuthors = collect($authorIds)->random(rand(1, 3));
            $selectedIllustrators = collect($illustratorIds)->random(rand(1, 2));
            $selectedTraductors = collect($traductorIds)->random(rand(1, 2));
            $selectedCorrectors = collect($correctorIds)->random(rand(1, 2));

            foreach ($selectedAuthors as $id) {
                DB::table('fk_document_author')->insert([
                    'document_id' => $documentId,
                    'author_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            foreach ($selectedIllustrators as $id) {
                DB::table('fk_document_illustrator')->insert([
                    'document_id' => $documentId,
                    'illustrator_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            foreach ($selectedTraductors as $id) {
                DB::table('fk_document_traductor')->insert([
                    'document_id' => $documentId,
                    'traductor_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }

            foreach ($selectedCorrectors as $id) {
                DB::table('fk_document_corrector')->insert([
                    'document_id' => $documentId,
                    'corrector_id' => $id,
                    'created_at' => now(),
                    'updated_at' => now(),
                ]);
            }
        }
    }
}
