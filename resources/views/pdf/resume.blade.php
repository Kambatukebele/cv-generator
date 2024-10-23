<div style="max-width: 210mm; position: relative; z-index: 20; margin: auto; padding: 6px; background-color: #f9fafb; box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;">

    <div style="width: 80mm; float: left; margin-right: 10px;">
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px;">Personal Detail</h3>
            <p style="font-size: 16px; color: #374151;">Email: <span>{{$resume->contact_info[0]->email}}</span></p>
            <p style="font-size: 16px; color: #374151;">Phone: <span>{{$resume->contact_info[0]->phone}}</span></p>
            <p style="font-size: 16px; color: #374151;">Linkedin: <span>{{$resume->contact_info[0]->linkedin}}</span></p>
            <p style="font-size: 16px; color: #374151;">X: <span>{{$resume->contact_info[0]->twitter}}</span></p>
        </div>
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; margin-bottom: 4px; font-weight: 600; color: #1f2937;">Education</h3>
            @foreach ($resume->educations as $education)
                <div style="margin-bottom: 8px;">
                    <small style="font-size: 12px; padding: 3px 8px; background-color: #5b21b6; color: white; border-radius: 4px;">
                        {{$education->start_date}} - {{$education->end_date}}
                    </small>
                    <h4 style="font-size: 16px; color: #1f2937; font-weight: 600;">{{$education->degree}}</h4>
                    <p style="font-size: 14px; color: #374151;">{{$education->institution}}</p>
                </div>
            @endforeach
        </div>
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827;">Language</h3>
            <table style=" width: 100%;">
                <thead>
                    <tr>
                        <td style="width: 7%;  text-align: center; padding: 4px; background-color: #5b21b6; color: white;">Language</td>
                        <td style="width: 7%;  text-align: center; padding: 4px; background-color: #5b21b6; color: white;">Proficiency</td>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($resume->languages as $language)
                        <tr>
                            <td style="width: 7%;  text-align: center; padding: 4px; background-color: #f3f4f6; color: #111827;">{{$language->language}}</td>
                            <td style="width: 7%;  text-align: center; padding: 4px; background-color: #f3f4f6; color: #111827;">{{ $language->proficiency }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; margin-bottom: 4px; font-weight: 600; color: #1f2937;">Project</h3>
            @foreach ($resume->projects as $project)
                <div style="margin-bottom: 8px;">
                    <h4 style="font-size: 16px; color: #1f2937; font-weight: 600;">{{$project->title}}</h4>
                    <p style="font-size: 14px; color: #374151;">{{$project->description}}</p>
                    <a href="" style="font-size: 14px; color: #374151;">{{$project->url}}</a>
                </div>
            @endforeach
        </div>
    </div>

    <div style="width: 110mm; float: left;">
        <div style="margin-bottom: 24px;">
            <h1 style="font-size: 32px; font-weight: bold;">{{$resume->contact_info[0]->first_name}} <span style="color: #5b21b6;">{{$resume->contact_info[0]->last_name}}</span></h1>
            <h4 style="font-size: 18px; color: #1f2937; font-weight: 600;">{{$resume->title}}</h4>
        </div>
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; margin-bottom: 4px; font-weight: 600; color: #1f2937;">Career Objective</h3>
            <p style="font-size: 14px; color: #374151;">{{$resume->summary}}</p>
        </div>
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; margin-bottom: 4px; font-weight: 600; color: #1f2937;">Work Experience</h3>
            @foreach ($resume->experiences as $experience)
                <div style="margin-bottom: 8px;">
                    <small style="font-size: 12px; padding: 3px 8px; background-color: #5b21b6; color: white; border-radius: 4px;">
                        {{$experience->start_date}} - {{$experience->end_date}}
                    </small>
                    <h4 style="font-size: 16px; color: #1f2937; font-weight: 600;">{{$experience->job_title}}</h4>
                    <p style="font-size: 14px; color: #374151;">{{$experience->company}}</p>
                </div>
            @endforeach
        </div>
        <div style="margin-bottom: 24px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827;">Technical Skills</h3>
            <table style=" width: 100%;">
                <thead>
                    <tr>
                        <td style="width: 7%;  text-align: center; padding: 4px; background-color: #5b21b6; color: white;">Development</td>
                        <td style="width: 72%;  text-align: center; padding: 4px; background-color: #5b21b6; color: white;">Technologies</td>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($resume->skills as $skill)
                        <tr>
                            <td style="width: 7%;  text-align: center; padding: 4px; background-color: #f3f4f6; color: #111827;">{{$skill->name}}</td>
                            <td style="width: 72%;  text-align: center; padding: 4px; background-color: #f3f4f6; color: #111827;">{{$skill->level}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
    <div style="position: absolute; width: 176px; height: 176px; background-color: #f3e8ff; border-radius: 9999px; z-index: -10; top: 0; left: -112px;"></div>
</div>
