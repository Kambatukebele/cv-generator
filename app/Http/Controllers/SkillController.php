<?php

namespace App\Http\Controllers;

use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Skill/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $resume_id = session('resume_id');
          $validatedData = $request->validate([
            'skills' => 'required|array',
            'skills.*.name' => 'required|string|max:255',
            'skills.*.level' => 'required|string|max:255',
        ]);

        // Loop through each skill and create a record
        foreach ($validatedData['skills'] as $skill) {
            Skill::create([
                'resume_id' => $resume_id,
                'name' => $skill['name'],
                'level' => $skill['level'],
            ]);
        }

        return redirect()->route('project.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
