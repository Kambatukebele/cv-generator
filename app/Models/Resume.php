<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'summary', 'template_id']; // Add other fillable fields as necessary
    public function contact_info(){
        return $this->hasMany(ContactInfo::class);
    }
    public function experiences()
    {
        return $this->hasMany(Experience::class);
    }

    public function educations()
    {
        return $this->hasMany(Education::class);
    }

    public function skills()
    {
        return $this->hasMany(Skill::class);
    }

    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function languages()
    {
        return $this->hasMany(Language::class);
    }
}
