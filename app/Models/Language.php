<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    use HasFactory;
    protected $fillable = [
        "language",
        "proficiency",
        'resume_id', // Add resume_id here
    ];
     public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
