<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Szemely;

class SzemelyController extends Controller
{
    public function index() 
    { 
        return response()->json(Szemely::all());
    }
}
