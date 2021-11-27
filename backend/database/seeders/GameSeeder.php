<?php

namespace Database\Seeders;

use App\Constants\GameTypes;
use App\Models\Game;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $gameTypes = GameTypes::$values;
        for ($i = 1; $i <= 10; $i++) {
            Game::create([
                "game_type_id" => $gameTypes[rand(0, count($gameTypes) - 1)]['id'],
                "team1" => "Bangladesh-$i",
                "team2" => "India-$i",
                "status" => rand(1, 2),
            ]);
        }
    }
}