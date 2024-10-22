<?php

use App\Http\Controllers\ContactInfoController;
use App\Http\Controllers\EducationController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\LanguageController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ResumeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\TemplateController;
use Barryvdh\DomPDF\Facade\Pdf;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


//Template
Route::resource('/build_cv/app/templates', TemplateController::class)->only([
    'index', 'show'
]);

// Resumes
Route::resource('/build_cv/app/templates/resumes', ResumeController::class)->only([
    'create', 'store'
]);
// Protected routes for viewing resumes
Route::middleware(['auth'])->group(function () {
    Route::resource('dashboard/resumes', ResumeController::class)->only([
        'index', 'show'
    ]);
});
//COntact info
Route::resource('/build_cv/app/templates/contact_info', ContactInfoController::class)->only([
    'create', 'store'
]);

// Employement
Route::resource('/build_cv/app/templates/experience', ExperienceController::class)->only([
    'create', 'store'
]);

//Education
Route::resource('/build_cv/app/templates/education', EducationController::class)->only([
    'create', 'store'
]);

//Skill
Route::resource('/build_cv/app/templates/skill', SkillController::class)->only([
    'create', 'store'
]);

//Project
Route::resource('/build_cv/app/templates/project',ProjectController::class)->only([
    'create', 'store'
]);

//Language
Route::resource('/build_cv/app/templates/language', LanguageController::class)->only([
    'create', 'store'
]);

//pdf route
Route::get('/resume/{id}/pdf', [ResumeController::class, 'downloadPDF'])->name('resume.pdf');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
