<?php

namespace Database\Seeders;

use App\Models\Notice;
use App\Models\Question;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        Notice::create([
            'notice' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ab laboriosam velit nobis recusandae tenetur error. Nihil velit quia architecto adipisci minus facilis distinctio.",
        ]);

        $this->call(ClubSeeder::class);
        User::create([
            'name' => 'developer',
            'username' => 'developer',
            'email' => 'dev@dev.com',
            'password' => Hash::make('dev@dev.com'),
            'club_id' => 1,
            'phone' => '123',
        ]);

        $this->call([
            GameSeeder::class,
            QuestionSeeder::class,
            AnswerSeeder::class,
        ]);
    }
}