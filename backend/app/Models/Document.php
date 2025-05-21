<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = [
        'title',
        'og_title',
        'isbn',
        'image',
        'description',
        'comment',
        'url',
        'type',
    ];

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'fk_document_author');
    }

    public function illustrators()
    {
        return $this->belongsToMany(Illustrator::class, 'fk_document_illustrator');
    }

    public function traductors()
    {
        return $this->belongsToMany(Traductor::class, 'fk_document_traductor');
    }

    public function correctors()
    {
        return $this->belongsToMany(Corrector::class, 'fk_document_corrector');
    }
}
