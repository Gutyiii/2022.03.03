<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//  use App\Models\Task;    //adott tábla kontrollerének becsatolása, ezt a táblát kell mindenhova a "Task" helyett

class TaskController extends Controller
{
    //minden adatot lekér az adott táblából
    public function mindenAdat() { return Task::all(); }
 

    //egy adatot lekér az adott táblából
    public function egyAdat(Task $task) { return $task; }


    //adatot visz fel az adott táblából
    public function adatFelvetel(Request $request)
    {
        $task = Task::create($request->all());
        return response()->json($task, 201);
    }


    //adatot frissít/ ír felül az adott táblából
    public function adatFrissites(Request $request, Task $task)
    {
        $task->update($request->all());
        return response()->json($task, 200);
    }


    //adatot töröl az adot táblából
    public function adatTroles(Task $task)
    {
        $task->delete();
        return response()->json(null, 204);
    }


    //adatok rendezés
    public function rendez(){}


    //keresés konkrét adatra vagy objektumra
    public function keres(){}
}
