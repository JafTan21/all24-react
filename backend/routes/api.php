<?php

use App\Http\Controllers\AnswerController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClubController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\QuestionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {

    Route::post('token-is-valid', function (Request $request) {
        return response()->json([
            'status' => true
        ]);
    });
});

Route::get('/get-notice', [NoticeController::class, 'get_notice']);

Route::apiResource('clubs', ClubController::class);

// auth
Route::post('user/register', [AuthController::class, 'register']);
Route::post('user/login', [AuthController::class, 'login']);


// games
Route::apiResource('games', GameController::class);
Route::apiResource('questions', QuestionController::class);
Route::apiResource('answers', AnswerController::class);