<?php

namespace App\Http\Controllers;

use App\Models\Club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
    public function index()
    {
        return $this->apiResponse([
            'clubs' => Club::whereActive()->get()
        ]);
    }
}