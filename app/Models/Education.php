<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    use HasFactory;
      protected $table = 'educations';

     protected $fillable = [
        'degree',
        'institution',
        'start_date',
        'end_date',
        'location',
        'resume_id', // Add resume_id here
    ];
     public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
