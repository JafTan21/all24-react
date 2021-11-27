<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->id();

            $table->integer('game_type_id');
            $table->string("team1");
            $table->string("team2");
            $table->timestamp("starting_time")->nullable();
            $table->timestamp("ending_time")->nullable();
            $table->string("live_score")->nullable();
            $table->integer('status')->default(2);
            // 1-live, 2-upcoming, 0-closed, 3-hidden from user
            $table->boolean('is_active')->default(true);
            // show but no bet
            $table->string('short_description')->nullable();
            $table->boolean('area_hidden')->default(false);
            $table->string('added_by_email')->nullable();


            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('games');
    }
}