<?php

namespace App\Http\Controllers;
use App\Models\Szemely;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;

class CostumAuthController extends Controller
{
    public function login()
    {
        return view("auth.login");
    }

    public function registration()
    {
        return view("auth.registration");
    }
    public function registerUser(Request $request)
    {
        $request->validate([
            'nev' => 'required',                          //név
            'email' => 'required|email|unique:users',     //email
            'jelszo' => 'required|min:5|max:20',          //jelszó
            'jelszo_ujra' => 'required|min:5|max:20',     //jelszó űjra
            'neme' => 'boolean',                          //neme, true-false -> 1-0, checkbox ötlet
            'szul_daum' => 'integer|integer|integer',     //születési dátum
            'tel_szam' => 'integer|min:11|max:11'         //telefonszám
            //jogosultsag_id
            //igazolvany_szam
            //igazolvany_tipusa
            //kep
        ]);
        $szemely = new Szemely();
        $szemely->nev = $request->nev;
        $szemely->email = $request->email;
        $szemely->jelszo = Hash::make($request->password);         //hash titkosítás
        $szemely->jelszo_ujra = Hash::make($request->password);    //hash titkosítás
        $szemely->neme = $request->neme;
        $szemely->szul_daum = $request->szul_daum;
        $szemely->tel_szam = $request->tel_szam;
        $szemely->jogosultsag_id = 1;
        $res = $szemely->save();

        if ($szemely->jelszo ==  $szemely->jelszo_ujra) {
            if ($res) {
                return back()->with('success', 'Sikeres regisztráció');
            } else {
                return back()->with('fail', 'Valami baj van.');
            }
        } else {
            return back()->with('fail', 'A jelszavak nem egyeznek.');
        }
    }

    public function loginUser(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'jelszo' => 'required|min:5|max:20'
        ]);
        $szemely = Szemely::where('email', '=', $request->email)->first();
        if ($szemely) {
            if (Hash::check($request->jelszo, $szemely->jelszo)) {
                $request->session()->put('loginId', $szemely->id);
                return redirect('dashboard');
            } else {
                return back()->with('fail', 'A jelszavak nem egyeznek.');
            }
        } else {
            return back()->with('fail', 'Ez az email nincs regisztrálva.');
        }
    }

    public function dashboard()
    {
        $data = array();
        if (Session::has('loginId')) {
            $data = Szemely::where('id', '=', Session::get('loginId'))->first();
        }
        return view('auth.dashboard', compact('data'));
    }

    public function logout()
    {
        if (Session::has('loginId')) {
            Session::pull('loginId');
            return redirect('login');
        }
    }
}
