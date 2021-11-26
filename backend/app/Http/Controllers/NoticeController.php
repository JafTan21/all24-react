<?php

namespace App\Http\Controllers;

use App\Models\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function get_notice()
    {
        return $this->apiResponse([
            'notice' => Notice::first()->notice
        ]);
    }
}