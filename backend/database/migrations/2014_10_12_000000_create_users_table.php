<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();

            $table->string('username')->unique();
            $table->string('phone')->unique();
            $table->string('sponsor')->nullable();
            $table->foreignId('club_id')->constrained();
            $table->double('balance')->default('0');
            $table->double('sponsor_percentage')->default(0);
            $table->boolean('is_reseller')->default(false);
            $table->double('withdraw_limit')->nullable();
            $table->double('deposit_limit')->nullable();

            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}