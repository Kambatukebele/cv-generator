<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Resume;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $resumes = Resume::with(['experiences', 'educations', 'skills', 'projects', 'languages', 'contact_info'])->get();
        return inertia('Resumes/Index', ['resumes' => $resumes]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Resumes/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //Retrieve tempate_id from session
        $template_id = session('selected_template_id');
        $request->validate([
            'title'=> "required|string",
            'summary' => "required|string",
        ]);

        $resume = new Resume;
        $resume->title = $request->title;
        $resume->summary = $request->summary;
        $resume->template_id = $template_id;

        $resume->save();
        $request->session()->forget('selected_template_id');
        session(['resume_id' => $resume->id]);
        return redirect()->route('contact_info.create');
    }

    /**
     * Display the specified resource.
     */
    public function show(Resume $resume)
    {
         // Fetch a single resume with its related data
        $resume = Resume::with(['experiences', 'educations', 'skills', 'projects', 'languages', 'contact_info'])
            ->findOrFail($resume->id);

        return inertia('Resumes/Show', ['resume' => $resume]);
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
        //  $this->authorize('update', $resume);

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
        //
    }
    public function downloadPDF($id)
    {
        $resume = Resume::with('experiences', 'educations', 'skills', 'projects', 'languages', 'contact_info')->findOrFail($id);
        $pdf = Pdf::loadView('pdf.resume', compact('resume'));

        // Download the PDF or stream it
         return $pdf->stream('resume.pdf');
    }
}
