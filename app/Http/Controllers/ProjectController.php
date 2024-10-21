<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
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
        return inertia('Project/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $resume_id = session('resume_id');
         // Validate the incoming request
        $validatedData = $request->validate([
            'projects' => 'required|array',
            'projects.*.title' => 'required|string|max:255',
            'projects.*.description' => 'required|string',
            'projects.*.url' => 'nullable|url|max:255',
        ]);

        // Loop through each project and create a record
        foreach ($validatedData['projects'] as $project) {
            Project::create([
                 'resume_id' => $resume_id,
                'title' => $project['title'],
                'description' => $project['description'],
                'url' => $project['url'] ?? null,
            ]);
        }

        return redirect()->route('language.create');
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
