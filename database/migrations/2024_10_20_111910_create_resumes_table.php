<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('summary');
            // $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('template_id')->nullable()->constrained('templates')->onDelete('set null');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('resumes', function (Blueprint $table) {
            // Drop foreign keys before dropping the table
            $table->dropForeign(['user_id']);  // Dropping the foreign key on 'user_id'
            $table->dropForeign(['template_id']); // Dropping the foreign key on 'template_id'
        });
        Schema::dropIfExists('resumes');
    }
};
