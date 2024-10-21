<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    protected $fillable = [
        "title",
        "description",
        "url",
        'resume_id', // Add resume_id here
    ];
     public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
