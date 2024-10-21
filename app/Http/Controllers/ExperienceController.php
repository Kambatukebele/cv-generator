<?php

namespace App\Http\Controllers;

use App\Models\Experience;
use Illuminate\Http\Request;

class ExperienceController extends Controller
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
        return inertia('Experience/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $resume_id = session('resume_id');
        $validatedData = $request->validate([
            'experiences.*.job_title' => 'required|string',
            'experiences.*.company' => 'required|string',
            'experiences.*.start_date' => 'required|date',
            'experiences.*.end_date' => 'nullable|date',
            'experiences.*.location' => 'nullable|string',
            'experiences.*.description' => 'nullable|string',
        ]);

         // Assuming the `experiences` array is sent from the frontend
        $experiences = $validatedData['experiences'];
        foreach ($experiences as $experienceData) {
            Experience::create([
                'resume_id' => $resume_id,
                'job_title' => $experienceData['job_title'],
                'company' => $experienceData['company'],
                'start_date' => $experienceData['start_date'],
                'end_date' => $experienceData['end_date'],
                'location' => $experienceData['location'],
                'description' => $experienceData['description'],
            ]);
        }

        return redirect()->route('education.create');
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
