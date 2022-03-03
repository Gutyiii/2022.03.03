<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Eszkoz extends Model
{
    protected $eszkoz = ['eszkoz_id', 'terem_id', 'eszkoz_tipus_szamlalo', 'qr_kod'];
}
