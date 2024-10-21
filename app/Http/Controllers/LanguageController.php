<?php

namespace App\Http\Controllers;

use App\Models\Language;
use Illuminate\Http\Request;

class LanguageController extends Controller
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
        return inertia('Language/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $resume_id = session('resume_id');
         $validatedData = $request->validate([
            'languages' => 'required|array',
            'languages.*.language' => 'required|string|max:255',
            'languages.*.proficiency' => 'required|string|max:255',
        ]);

        // Loop through each language and create a record
        foreach ($validatedData['languages'] as $language) {
            Language::create([
                'resume_id' => $resume_id,
                'language' => $language['language'],
                'proficiency' => $language['proficiency'],
            ]);
        }
        $request->session()->forget('resume_id');
        return redirect()->route('register');
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
