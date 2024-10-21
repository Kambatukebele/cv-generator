<?php

namespace App\Http\Controllers;

use App\Models\ContactInfo;
use Illuminate\Http\Request;

class ContactInfoController extends Controller
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
        return inertia('ContactInfo/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $resume_id = session('resume_id');

        $request->validate([
            'first_name'=> "required|string",
            'last_name' => "required|string",
            'email' => "required|email",
            "phone" => "required|numeric",
            "linkedin" => "nullable|url:https",
            "twitter" => "nullable|url:https",
            "github" => "nullable|url:https",
            "website" => "nullable|url:https",
        ]);

        $contactInfo = new ContactInfo;
        $contactInfo->first_name = $request->first_name;
        $contactInfo->last_name = $request->last_name;
        $contactInfo->email = $request->email;
        $contactInfo->phone = $request->phone;
        $contactInfo->linkedin = $request->linkedin;
        $contactInfo->twitter = $request->twitter;
        $contactInfo->github = $request->github;
        $contactInfo->website = $request->website;
        $contactInfo->resume_id = $resume_id;

        $contactInfo->save();

        return redirect()->route('experience.create');
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
