<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BulletinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('bulletins')->insert([
            'id' => 1,
            'name' => "Bulletin Example 1",
            'image' => "https://picsum.photos/200/300?random=1",
            'description' => "This is a sample bulletin description.",
            'date' => now()->format('Y-m-d'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('bulletins')->insert([
            'id' => 2,
            'name' => "Bulletin Example 2",
            'image' => "https://picsum.photos/200/300?random=1",
            'description' => "This is a sample bulletin description.",
            'date' => now()->format('Y-m-d'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('bulletins')->insert([
            'id' => 3,
            'name' => "Bulletin Example 3",
            'image' => "https://picsum.photos/200/300?random=1",
            'description' => "This is a sample bulletin description.",
            'date' => now()->format('Y-m-d'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('bulletins')->insert([
            'id' => 4,
            'name' => "Bulletin Example 4",
            'image' => "https://picsum.photos/200/300?random=1",
            'description' => "This is a sample bulletin description.",
            'date' => now()->format('Y-m-d'),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 1,
            'bulletin_id' => 1,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 2,
            'bulletin_id' => 1,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 3,
            'bulletin_id' => 1,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 1,
            'bulletin_id' => 2,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 2,
            'bulletin_id' => 2,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 3,
            'bulletin_id' => 2,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 1,
            'bulletin_id' => 3,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 2,
            'bulletin_id' => 3,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 3,
            'bulletin_id' => 3,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 1,
            'bulletin_id' => 4,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 2,
            'bulletin_id' => 4,
        ]);

        DB::table('fk_document_bulletin')->insert([
            'document_id' => 3,
            'bulletin_id' => 4,
        ]);
    }
}