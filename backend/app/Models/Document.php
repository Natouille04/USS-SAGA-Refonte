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
        'capitaine_id',
        'vaisseau_id',
        'planete_id',
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

    public function capitaine()
    {
        return $this->belongsTo(Capitaines::class, 'capitaine_id');
    }

    public function vaisseau()
    {
        return $this->belongsTo(Vaisseaux::class, 'vaisseau_id');
    }

    public function planete()
    {
        return $this->belongsTo(Planetes::class, 'planete_id');
    }
}
