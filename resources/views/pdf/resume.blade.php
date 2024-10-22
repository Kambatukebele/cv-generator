 <div className="max-w-[210mm] mx-auto p-6 bg-white shadow-md">
            <header className="border-b pb-4 mb-6">
                <h1 className="text-3xl font-bold uppercase">
                    {{$resume->contact_info[0]->first_name . " " . $resume->contact_info[0]->last_name}}
                </h1>
                <p className="text-gray-600">{{$resume->title}}</p>
                <p className="text-gray-600">{{$resume->contact_info[0]->email}}</p>
                <p className="text-gray-600">+420 {{$resume->contact_info[0]->phone}}</p>
                <p className="text-gray-600">{{$resume->contact_info[0]->linkedin}}</p>
                <p className="text-gray-600">{{$resume->contact_info[0]->twitter}}</p>
            </header>


            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                    Professional Summary
                </h2>
                <p className="text-gray-700">{{$resume->summary}}</p>
            </section>


            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Experience</h2>
                <div className="space-y-4">
                    @foreach ($resume->experiences as $experience)
                        <div key={id} className="border-b pb-4">
                            <h3 className="text-lg font-bold">
                                {{$experience->job_title . " - " . $experience->company}}
                            </h3>
                            <p className="text-gray-600">

                                {{$experience->start_date."-".$experience->end_date."-".$experience->location}}
                            </p>
                            <p>{{$experience->description}}</p>
                        </div>
                    @endforeach
                </div>
            </section>
            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Education</h2>
                <div className="space-y-4">
                    @foreach ($resume->educations as $education)
                        <div className="border-b pb-4">
                            <h3 className="text-lg font-bold">
                               {{$education->degree . "-" . $education->institution}}
                            </h3>
                            <p className="text-gray-600">
                                {{$education->start_date .
                                    "-" .
                                    " " .
                                    $education->end_date .
                                    " " .
                                    "-" .
                                    $education->location}}
                            </p>
                        </div>
                    @endforeach
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Skills</h2>
                <ul className="list-disc list-inside">
                    @foreach ($resume->skills as $skill)

                        <li>
                            {{$skill->name . " " . $skill->level}}
                        </li>
                    @endforeach
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Projects</h2>
                <div className="space-y-4">
                    @foreach ($resume->projects as $project)
                        <div className="border-b pb-4">
                            <h3 className="text-lg font-bold">{{$project->title}}</h3>
                            <p className="text-gray-600">{{$project->description}}</p>
                            <a href= className="text-blue-500">
                                view project
                            </a>
                        </div>
                    @endforeach
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Languages</h2>
                <ul className="list-disc list-inside">
                    @foreach ($resume->languages as $language)
                         <li>
                            {{$language->language . " " . $language->proficiency}}
                        </li>
                    @endforeach
                </ul>
            </section>
        </div>
