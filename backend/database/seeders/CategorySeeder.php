<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('vaisseaux')->insert([
            'id' => 1,
            'prefix' => 'USS',
            'name' => 'Enterprise-D',
            'registration' => 'NCC-1701-D',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('vaisseaux')->insert([
            'id' => 2,
            'prefix' => 'USS',
            'name' => 'Voyager',
            'registration' => 'NCC-74656',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('vaisseaux')->insert([
            'id' => 3,
            'prefix' => 'USS',
            'name' => 'Excelsior',
            'registration' => 'NCC-2000',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('capitaines')->insert([
            'id' => 1,
            'first_name' => "Jean-Luc",
            'last_name' => "Picard",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('capitaines')->insert([
            'id' => 2,
            'first_name' => "James",
            'middle_name' => "Tiberius",
            'last_name' => "Kirk",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('capitaines')->insert([
            'id' => 3,
            'first_name' => "Kathryn",
            'last_name' => "Janeway",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('planetes')->insert([
            'id' => 1,
            'name' => "terre",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('planetes')->insert([
            'id' => 2,
            'name' => "vulcain",
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('planetes')->insert([
            'id' => 3,
            'name' => "mars",
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
