<?php

namespace App\Http\Controllers;

use App\Models\Education;
use Illuminate\Http\Request;

class EducationController extends Controller
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
        return inertia('Education/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $resume_id = session('resume_id');
         // Validate the request data
        $validatedData = $request->validate([
            'educations' => 'required|array',
            'educations.*.degree' => 'required|string|max:255',
            'educations.*.institution' => 'required|string|max:255',
            'educations.*.start_date' => 'required|date',
            'educations.*.end_date' => 'nullable|date',
            'educations.*.location' => 'nullable|string|max:255',
        ]);
         // Loop through the educations and create them
        foreach ($validatedData['educations'] as $education) {
            Education::create([
                'resume_id' => $resume_id,
                'degree' => $education['degree'],
                'institution' => $education['institution'],
                'start_date' => $education['start_date'],
                'end_date' => $education['end_date'] ?? null,
                'location' => $education['location'] ?? null,
            ]);
        }

        return redirect()->route('skill.create');
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
