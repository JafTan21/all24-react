<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();

            $table->string("question");
            $table->timestamp("starting_time")->nullable();
            $table->timestamp("ending_time")->nullable();
            $table->foreignId("game_id")->constrained();
            $table->integer("status")->default(2);
            // 1-active, 2-hidden from user
            $table->boolean('is_active')->default(true);
            // show but no bet
            $table->boolean('area_hidden')->default(false);


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
        Schema::dropIfExists('questions');
    }
}