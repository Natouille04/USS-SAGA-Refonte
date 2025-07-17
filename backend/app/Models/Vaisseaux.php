<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class vaisseaux extends Model
{
    protected $table = 'vaisseaux';

    public function documents()
    {
        return $this->hasMany(Document::class, 'vaisseau_id');
    }
}
