<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ResumeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Resumes/Index');
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
        $authUser = Auth::user()->id;
         $request->validate([
            'title'=> "required|string",
            'summary' => "required|string",
        ]);
        // $request->validate([
        //     'first_name'=> "required|string",
        //     'last_name' => "required|string",
        //     'email' => "required|email",
        //     "phone" => "required|numeric",
        //     "linkedin" => "nullable|url:https",
        //     "twitter" => "nullable|url:https",
        //     "github" => "nullable|url:https",
        //     "website" => "nullable|url:https",
        // ]);

        $resume = new Resume;
        $resume->title = $request->title;
        $resume->summary = $request->summary;
         $resume->user_id = $authUser;
        // $resume->first_name = $request->first_name;
        // $resume->last_name = $request->last_name;
        // $resume->email = $request->email;
        // $resume->phone = $request->phone;
        // $resume->linkedin = $request->linkedin;
        // $resume->twitter = $request->twitter;
        // $resume->github = $request->github;
        // $resume->website = $request->website;

        $resume->save();
        return redirect(route('contact_info.create'));
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
        // $this->authorize('delete', $resume);
        // $resume->delete();
        // return redirect()->route('resumes.index');
    }
}
