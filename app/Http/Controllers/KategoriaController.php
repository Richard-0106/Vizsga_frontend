<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kategoria;
class KategoriaController extends Controller
{
    public function index()
    {
        $kategoriak= response()->json(Kategoria::all());
        return $kategoriak;
    }
}
