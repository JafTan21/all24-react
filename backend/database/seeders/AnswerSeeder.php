<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Question;
use Illuminate\Database\Seeder;

class AnswerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $questions = Question::all();

        for ($i = 1; $i <= 20; $i++) {
            for ($j = 1; $j <= rand(2, 4); $j++) {
                Answer::create([
                    "answer" => "answer($j)",
                    "rate" => rand(0, 3),
                    "question_id" => "$i",
                    "game_id" => $questions->where('id', $i)->first()->game_id,
                    "status" => 1
                ]);
            }
        }
    }
}