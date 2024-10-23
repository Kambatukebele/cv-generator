 <div  className="max-w-[210mm] kamba relative z-20 mx-auto p-6 bg-gray-50 shadow-md flex justify-between items-start">
    <div className="w-[80mm] border">
        <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Personal Detail
            </h3>
            <p className="text-base font-normal text-gray-700">
                Email: <span>{{$resume->contact_info[0]->email}}</span>
            </p>
            <p className="text-base font-normal text-gray-700">
                Phone: <span>{{$resume->contact_info[0]->phone}}</span>
            </p>
            <p className="text-base font-normal text-gray-700">
                Linkedin: <span>{{$resume->contact_info[0]->linkedin}}</span>
            </p>
            <p className="text-base font-normal text-gray-700">
                X: <span>{{$resume->contact_info[0]->twitter}}</span>
            </p>
        </div>
        <div className="mb-6 flex flex-col justify-start items-start gap-4">
            <h3 className="text-xl mb-1 font-semibold text-gray-800">
                Education
            </h3>
             @foreach ($resume->educations as $education)
                <div className="flex flex-col justify-start items-start gap-1">
                    <small className="text-xs px-3 py-1 bg-purple-800 text-white rounded-md">
                        {{$education->start_date}} - {{$education->end_date}}
                    </small>
                    <h4 className="text-base text-gray-800 font-semibold">
                        {{$education->degree}}
                    </h4>
                    <p className="text-sm font-normal text-gray-700">
                        {{$education->institution}}
                    </p>
                </div>
            @endforeach
        </div>
        <div className="mb-6 flex flex-col justify-start items-start gap-4">
            <h3 className="text-xl font-semibold text-gray-900">
                Language
            </h3>
            <table className="border">
                <thead>
                    <tr>
                        <td className="w-7 border text-center px-2 py-1 bg-purple-800 text-white">
                            Language
                        </td>
                        <td className="w-7 border text-center px-2 py-1 bg-purple-800 text-white">
                            Proficiency
                        </td>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($resume->languages as $language)
                        <tr>
                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                {{$language->language}}
                            </td>
                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                {{ $language->proficiency }}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div className="mb-6 flex flex-col justify-start items-start gap-4">
            <h3 className="text-xl mb-1 font-semibold text-gray-800">
                Project
            </h3>
            @foreach ($resume->projects as $project)
                <div className="flex flex-col justify-start items-start gap-1">
                    <h4 className="text-base text-gray-800 font-semibold">
                        {{$project->title}}
                    </h4>
                    <p className="text-sm font-normal text-gray-700">
                    {{$project->description}}
                    </p>
                    <a  href="" className="text-sm font-normal text-gray-700">
                        {{$project->url}}
                    </a>
                </div>
            @endforeach
        </div>
    </div>
    <div className="w-[110mm] border">
        <div className="mb-6">
            <h1 className="text-4xl font-bold">
                {{$resume->contact_info[0]->first_name}} <span className="text-purple-800">{{$resume->contact_info[0]->last_name}}</span>
            </h1>
            <h4 className="text-lg text-gray-800 font-semibold">
               {{$resume->title}}
            </h4>
        </div>
        <div className="mb-6">
            <h3 className="text-xl mb-1 font-semibold text-gray-800">
                Career Objective
            </h3>
            <p className="text-sm font-normal text-gray-700">
                {{$resume->summary}}
            </p>
        </div>
        <div className="mb-6 flex flex-col justify-start items-start gap-4">
            <h3 className="text-xl mb-1 font-semibold text-gray-800">
                Work Experience
            </h3>
            @foreach ($resume->experiences as $experience)
                <div className="flex flex-col justify-start items-start gap-1">
                    <small className="text-xs px-3 py-1 bg-purple-800 text-white rounded-md">
                        {{$experience->start_date}} - {{$experience->end_date}}
                    </small>
                    <h4 className="text-base text-gray-800 font-semibold">
                        {{$experience->job_title}}
                    </h4>
                    <p className="text-sm font-normal text-gray-700">
                        {{$experience->company}}
                    </p>
                </div>
            @endforeach
        </div>
        <div className="mb-6 flex flex-col justify-start items-start gap-4">
            <h3 className="text-xl font-semibold text-gray-900">
                Technical Skills
            </h3>
            <table className="border">
                <thead>
                    <tr>
                        <td className="w-7 border text-center px-2 py-1 bg-purple-800 text-white">
                            Development
                        </td>
                        <td className="w-72 border text-center px-2 py-1 bg-purple-800 text-white">
                            Technologies
                        </td>
                    </tr>
                </thead>
                <tbody>
                     @foreach ($resume->skills as $skill)
                        <tr>
                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                {{$skill->name}}
                            </td>
                            <td className="w-7 border text-center px-2 py-1 bg-gray-100 text-gray-900">
                                {{$skill->level}}
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div className="absolute w-44 h-44 block bg-purple-100 rounded-full -z-10 top-0 -left-28"></div>
 </div>



