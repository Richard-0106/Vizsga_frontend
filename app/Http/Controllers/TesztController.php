<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Teszt;
class TesztController extends Controller
{
    public function index()
    {
      return response()->json(Teszt::with('kategoria')->get());
    }
}
