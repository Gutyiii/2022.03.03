<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\EszkozView;

class EszkozController extends Controller
{
    public function index(){
        return response()->json(EszkozView::all());
    }
}
