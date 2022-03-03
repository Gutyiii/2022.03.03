<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Berlet_tipus;

class BerletVasarlasController extends Controller
{
    public function index()
    {
        return response()->json(Berlet_tipus::all());
    }
}
