<?php

namespace Database\Seeders;

use App\Models\Club;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class ClubSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Club::create([
            'name' => 'fake club',
            'owner_email' => 'fakeclub@gmail.com',
            'owner_password' => Hash::make('fakeclub@gmail.com'),
            'owner_name' => 'Fake-Club-owner'
        ]);
    }
}