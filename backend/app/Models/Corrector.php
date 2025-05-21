<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Corrector extends Model
{
    use HasFactory;

    protected $fillable = ['first_name', 'middle_name', 'last_name'];

    public function documents()
    {
        return $this->hasMany(Document::class);
    }

    public function pivotDocuments()
    {
        return $this->belongsToMany(Document::class, 'fk_document_corrector');
    }
}
