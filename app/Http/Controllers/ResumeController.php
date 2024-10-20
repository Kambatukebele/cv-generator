<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResumeRequest;
use App\Http\Requests\UpdateResumeRequest;
use App\Models\Resume;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resumes = auth()->user()->resumes;
        return inertia('Resumes/Index', ['resumes' => $resumes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resumes/Create", []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequesStoreResume $request)
    {
        $request->validate([
            'sections' => 'required|json',
        ]);

        $resume = auth()->user()->resumes()->create([
            'title' => $request->input('title', 'Untitled Resume'),
            'sections' => $request->input('sections'),
        ]);

        return redirect()->route('resumes.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Resume $resume)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Resume $resume)
    {
         $this->authorize('update', $resume);

        $resume->update([
            'title' => $request->input('title'),
            'sections' => $request->input('sections'),
        ]);

        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Resume $resume)
    {
        $this->authorize('delete', $resume);
        $resume->delete();
        return redirect()->route('resumes.index');
    }
}
