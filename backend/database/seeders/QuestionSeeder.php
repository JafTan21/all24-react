<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10; $i++) {
            for ($j = 1; $j <= 2; $j++) {
                Question::create([
                    "question" => "This is question($j) for game $i",
                    "game_id" => "$i",
                    "status" => 1
                ]);
            }
        }
    }
}