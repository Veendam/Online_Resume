var bio = {
    "name": "Cross Bell",
    "role": "Stay at home",
    "contacts": {
        "mobile": "15115683713",
        "email": "hezhengda@163.com",
        "github": "https://github.com/veendam",
        "location": "Changde, Hunan, China"
    },
    "welcomeMessage": "Hello!",
    "biopic": "images/fry.jpg",
    "skills": ["Every", "Thing"]
};

var education = {
    "schools": [{
        "name": "XJTLU",
        "location": "Suzhou, Jiangsu, China",
        "degree": "BEng Computer Science and Technology",
        "majors": ["Computer Science and Technology"],
        "dates": "Sep. 2011 - Jun. 2013",
        "url": "http://www.xjtlu.edu.cn/zh/"
    },

    {
        "name": "University of Liverpool",
        "location": "Liverpool, UK",
        "degree": "BEng Computer Science and Electronic Engineering",
        "majors": ["Computer Science and Electronic Engineering"],
        "dates": "Sep. 2013 - Jun. 2015",
        "url": "https://www.liverpool.ac.uk/"
    },

    {
        "name": "University of Southampton",
        "location": "Southampton, UK",
        "degree": "Msc Computer Science",
        "majors": ["Computer Science"],
        "dates": "Sep. 2015 - Nov. 2016",
        "url": "http://www.southampton.ac.uk/"
    }],
    "onlineCourses": [{
        "title": "Front-End Nanodegree",
        "school": "Udacity",
        "dates": "Feb. 2017",
        "url": "https://classroom.udacity.com/nanodegrees/nd001"
    }]
};

var work = {
    "jobs": [{
        "employer": "some fake employer",
        "title": "Some unreal title",
        "location": "M76",
        "dates": "In progress",
        "description": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF"
    }]
};

var projects = {
    "projects": [{
        "title": "Some unreal title",
        "dates": "ysterday - tomorrow",
        "description": "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF",
        "images": ["images/197x148.gif"],
    }]
};

bio.display = function() {
    var name = HTMLheaderName.replace("%data%", bio.name);
    var role = HTMLheaderRole.replace("%data%", bio.role);
    var biopic = HTMLbioPic.replace("%data%", bio.biopic);
    var welcomemsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var contacts = [];
    contacts.push(HTMLemail.replace("%data%", bio.contacts.email));
    contacts.push(HTMLgithub.replace("%data%", bio.contacts.github));
    contacts.push(HTMLlocation.replace("%data%", bio.contacts.location));
    contacts.push(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#header").prepend(role);
    $("#header").prepend(name);
    $("#header").append(biopic,welcomemsg,HTMLskillsStart);
    for (i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
    for (i = 0; i < contacts.length; i++) {
        $("#topContacts").append(contacts[i]);
        $("#footerContacts").append(contacts[i]);
    }
};

education.display = function() {
    for (i = 0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);
        var name = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
        var degree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var major = [];
        var url = HTMLonlineURL.replace("%data%", education.schools[i].url);
        for (j = 0; j < education.schools[i].majors.length; j++) {
            major.push(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
        }
        $(".education-entry:last").append(name + degree,dates,location,major);
    }

    for (i = 0; i < education.onlineCourses.length; i++) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var url = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
        var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        $(".education-entry:last").append(title,school,dates,url);
    }
};

work.display = function() {
    for (i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var location = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);

        $(".work-entry:last").append(employer + title,location,dates,description);
    }
};

projects.display = function() {
    for (i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(title,dates,description);
        for (j = 0; j < projects.projects[i].images.length; j++) {
            var image = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
            $(".project-entry:last").append(image);
        }
    }
};
bio.display();
education.display();
work.display();
projects.display();
$("#mapDiv").append(googleMap);