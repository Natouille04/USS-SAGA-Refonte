<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class planetes extends Model
{
    protected $table = 'planetes';

    public function documents()
    {
        return $this->hasMany(Document::class, 'planete_id'); // 🔁 clé étrangère dans la table documents
    }
}
