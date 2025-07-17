<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Capitaines extends Model
{
    protected $table = 'capitaines';

    public function documents()
    {
        return $this->hasMany(Document::class, 'capitaine_id');
    }
}