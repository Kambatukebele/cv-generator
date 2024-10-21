<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    use HasFactory;
    protected $fillable = [
        'job_title',
        'company',
        'start_date',
        'end_date',
        'location',
        'description',
        'resume_id', // Add resume_id here
    ];
     public function resume()
    {
        return $this->belongsTo(Resume::class);
    }
}
