<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();

            $table->string("answer");
            $table->double("rate");
            $table->double("minimum_bet")->nullable();
            $table->double("maximum_bet")->nullable();
            $table->timestamp("starting_time")->nullable();
            $table->timestamp("ending_time")->nullable();
            $table->foreignId("question_id")->constrained();
            $table->foreignId("game_id")->constrained();
            $table->integer("status")->default(1);
            // 1-active, 2-hidden from user
            $table->boolean("is_active")->default(true);
            // show but no bet
            $table->string('result_by_email')->nullable();

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
        Schema::dropIfExists('answers');
    }
}