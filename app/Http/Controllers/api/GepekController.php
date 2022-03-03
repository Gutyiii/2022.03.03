<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Eszkoz_tipus;
use Illuminate\Support\Facades\DB;

class GepekController extends Controller
{
    /*Minden vissza ad json-ba*/
    public function index()
    {
        return response()->json(Eszkoz_tipus::all());
    }

    /*Konkrét keresés*/
    public function search(Request $request)
    {
        $queryString = $request->query();
        foreach ($queryString as $key => $value) {
            $explodedKey = explode('_', $key);
            $column = $explodedKey[0];
            $expression = $explodedKey[1];
            $tasks = Eszkoz_tipus::with('eszkoz_tipuse')->where($column, $expression, '%' . $value . '%')->get();
        }
        return $tasks;
    }

    /*Rendezés*/
    public function sortBy(Request $request)
    {
        $column = $request->_sort;
        if ($request->has('_order')) {
            $order = $request->_order;
            $task = Eszkoz_tipus::with('eszkoz_tipus')->orderBy($column, $order)->get();
        } else {
            $task = Eszkoz_tipus::with('eszkoz_tipus')->orderBy($column, 'asc')->get();
        }
        return response()->json($task);
    }

    /*Index alapján keresés*/
    public function show($id)
    {
        $task = DB::table('eszkoz_tipuses')
            ->where('eszkoz_tipus_szamlalo', $id)->get();
        return response()->json($task);
    }
}
