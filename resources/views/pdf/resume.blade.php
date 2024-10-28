<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    body {
        font-family: 'Roboto', sans-serif;
    }
</style>


<div style="max-width: 210mm; margin: auto; background-color: #f9fafb; position: relative;">
    <div style="width: 70mm; float: left; margin-right:30px">
        <div style="margin-bottom: 10px; ">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Personal Detail</h3>
            <p style="font-size: 16px; color: #374151;">
                <span>
                    Email:
                </span>
                <span>{{$resume->contact_info[0]->email}}</span></p>
            <p style="font-size: 16px; color: #374151;">Phone: <span>{{$resume->contact_info[0]->phone}}</span></p>
            <p style="font-size: 16px; color: #374151;">Linkedin: <span>{{$resume->contact_info[0]->linkedin}}</span></p>
            <p style="font-size: 16px; color: #374151;">X: <span>{{$resume->contact_info[0]->twitter}}</span></p>
        </div>
        <div style="margin-bottom: 10px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Education</h3>
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
        <div style="margin-bottom: 10px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Language</h3>
            <table>
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
        <div style="margin-bottom: 10px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Project</h3>
            @foreach ($resume->projects as $project)
                <div style="margin-bottom: 8px;">
                    <h4 style="font-size: 16px; color: #1f2937; font-weight: 600;">{{$project->title}}</h4>
                    <p style="font-size: 14px; color: #374151;">{{$project->description}}</p>
                    <a href="" style="font-size: 14px; color: #374151;">{{$project->url}}</a>
                </div>
            @endforeach
        </div>
    </div>

    <div style="width: 109mm; float: left;">
        <div style="margin-bottom: 10px;">
            <h1 style="font-size: 32px; font-weight: bold;">{{$resume->contact_info[0]->first_name}} <span style="color: #5b21b6;">{{$resume->contact_info[0]->last_name}}</span></h1>
            <h4 style="font-size: 18px; color: #1f2937; font-weight: 600;">{{$resume->title}}</h4>
        </div>
        <div style="margin-bottom: 10px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Career Objective</h3>
            <p style="font-size: 14px; color: #374151;">{{$resume->summary}}</p>
        </div>
        <div style="margin-bottom: 10px;">
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Work Experience</h3>
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
        <div>
            <h3 style="font-size: 20px; font-weight: 600; color: #111827; margin-bottom: 16px; text-decoration:underline; text-transform:uppercase">Technical Skills</h3>
            <table>
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
    <div style="display:block; width: 5mm; height:5mm; border-radius:50%; position: absolute; background-color:#5b21b6; top:10px; left:0px">

    </div>
</div>
