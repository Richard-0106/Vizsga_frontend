<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teszt extends Model
{
    protected $table='teszts';
    protected $primaryKey='id';
    protected $fillable=[
        'id',
        'kerdes',
        'v1',
        'v2',
        'v3',
        'v4',
        'helyes',
        'kategoriaId'
        
    ];
    use HasFactory;
    public function kategoria()
    {
        return $this->hasOne(Kategoria::class, 'id', 'kategoriaId');
    }
}
