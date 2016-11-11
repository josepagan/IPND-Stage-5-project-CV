//This javascript file is the core of the project, it holds the content
//access and formats the content and then attach it to the page with
//jquery commands
//the four next blocks generate the objects that contain the data to be used
var bio = {
    "name": "Jose Pagan",
    "role": "aspiring software developer",
    "contacts": {
        "mobile": "+44 7411470360",
        "email": "jm.pagan@gmail.com",
        "twitter": "@daifuco",
        "github": "josepagan",
        "blog": "http://daifucode.blogspot.co.uk/",
        "location": "Caterham, Surrey, UK"
    },
    "biopic": "images/mimi.jpg",
    "welcomeMessage": "Recovered underanchiever turned into codeholic and aspiring developer",
    "skills": [
        "Curiosity",
        "Enthusiasm",
        "Creativity",
        "Mario Kart Racing"
    ]
};



var work = {
    "jobs": [{
        "employer": "Gardners Books",
        "title": "Warehouse Operative",
        "dates": "2005/Current",
        "location": "Eastbourne, East Sussex, UK",
        "description": "Dealing with goods and products that come into the warehouse or a stockroom. Daily tasks would include, checking for damaged or missing items, moving stock around by hand or using forklift truck, picking and packing orders and keeping the paperwork up to date."
    }, {
        "employer": "Shep Plastics",
        "title": "Machine Operator",
        "dates": "2001/2005",
        "location": "Lower Dicker, East Sussex, UK",
        "description": "Setting up, maintaining and operate plastic moulding machinery. Ensuring the efficient running of production."
    }, {
        "employer": "Calypso Real State",
        "title": "Office Technology assistant",
        "dates": "2001",
        "location": "Algeciras, Cadiz, Spain",
        "description": "Maintaining and solving issues related to the IT system in the office, performing tasks such as OS and software instalation, Network securing and hardware upgrading."
    }]
};

var projects = {
    "projects": [{
        "title": "Fill In The Blanks Generator",
        "dates": "1980/1983",
        "description": "Well beyond the requirements of the project for the IPND I sucessfully created a generator of a classical Fill In the Blanks game, so given a text, no matter how big, and a array of key words, it will generate and display the game",
        "images": ["images/miniproject.png"]
    }, {
        "title": "placeholder",
        "dates": "2016",
        "description": "hopefully soon I will have something to put here",
        "images": ["images/desert2.jpg", "images/Combing_the_desert.jpg"]
    }]
};


var education = {
    "schools": [{
        "name": "Sussex Downs College",
        "degree": "ESOL",
        "dates": "1992/2000",
        "location": "Eastbourne",
        "majors": ["English SFL", "Final Fantasy"],
        "url": "http://www.sussexdowns.ac.uk/"
    }, {
        "name": "Open University",
        "degree": "UAD",
        "dates": "2015/2016",
        "location": "Milton Keynes, UK",
        "majors": ["Information Technology", "Mario Kart", "Making resumes great again"],
        "url": "http://www.open.ac.uk/"
    }],
    "onlineCourses": [{
        "title": "Intro To Programming Nanodegree",
        "school": "Udacity",
        "dates": "August/2016 - Current",
        "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
    }, {
        "title": "Intro to Computer Science",
        "school": "Udacity",
        "dates": "November/2016 - Current",
        "url": "https://www.udacity.com/course/intro-to-computer-science--cs101"
    }]
};


var data = "%data%"; /*string "%data%" is placeholder used in formatting variables in helper.js*/

// This function will format and display the biographical information contained in the bio object
bio.display = function() {

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedemail = HTMLemail.replace(data, bio.contacts.email);
    var formattedmobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedgithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedblog = HTMLblog.replace(data, bio.contacts.blog);
    var formattedlocation = HTMLlocation.replace(data, bio.contacts.location);
    var formatedpicture = HTMLbioPic.replace(data, bio.biopic);
    var formattedwelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formatedpicture);
    $("#header").append(formattedwelcome);

    $("#topContacts, #footerContacts").append(formattedmobile);
    $("#topContacts, #footerContacts").append(formattedemail);
    $("#topContacts, #footerContacts").append(formattedtwitter);
    $("#topContacts, #footerContacts").append(formattedblog);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedlocation);

    // bio skills displaying block
    // variable formattedSkill is looped through

    if (bio.skills) {
        $("#header").append(HTMLskillsStart);
        for (var skillindex = 0; skillindex < bio.skills.length; skillindex++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[skillindex]);
            $("#skills").append(formattedSkill);
        }
    }

};

// This function will format and append the work information contained in the work object
work.display = function() {

    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
        var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedWorkdates = HTMLworkDates.replace(data, work.jobs[job].dates);
        var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkdates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
};

// This function will formats and displays the school information contained in the education object
education.schools.display = function() {
    $("#education").append(HTMLschoolStart);

    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace(data, education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
        var formattedSchoolUrl = HTMLonlineURL.replace(data, education.schools[i].url);

        $(".education-entry:last").append(formattedSchoolName);
        $(".education-entry:last").append(formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolUrl);


        for (var major = 0; major < education.schools[i].majors.length; major++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].majors[major]);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

    }
};

// This function will format and display the online education information contained in the education object
education.onlineCourses.display = function() {
    $(".education-entry:last").append(HTMLonlineClasses);

    for (var i = 0; i < education.onlineCourses.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace(data, education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace(data, education.onlineCourses[i].url);

        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);

    }

};

// This function will encapsulate both education functions into a main one
education.display = function() {
    education.schools.display();
    education.onlineCourses.display();
};

// This function will format and display the project information contained in the projects object
projects.display = function() {
    $("#projects").append(HTMLprojectStart);

    for (var pro = 0; pro < projects.projects.length; pro++) {
        var formattedProjectTitle = HTMLprojectTitle.replace(data, projects.projects[pro].title);
        var formattedProjectDates = HTMLprojectDates.replace(data, projects.projects[pro].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, projects.projects[pro].description);
        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);

        for (var imageIndex = 0; imageIndex < projects.projects[pro].images.length; imageIndex++) {
            var formattedProjectImage = HTMLprojectImage.replace(data, projects.projects[pro].images[imageIndex]);


            $(".project-entry:last").append(formattedProjectImage);
        }
    }
};

//finally all four main displaying functions are called to generate most of the resume

bio.display();
work.display();
education.display();
projects.display();

//this function contains some code to reformat a name with a given string
// in international capitalization mode so Albert Einstein returns ALBERT EINSTEIN
//this function is used by the internationalizeButton
function inName(string) {
    var p = string.split(" ");
    p[1] = p[1].toUpperCase();
    p[0] = p[0].slice(0, 1).toUpperCase() + p[0].slice(1).toLowerCase();
    p = p[0] + " " + p[1];
    return p;
}

//attachement of the last two elements on the web, the internationalizeButton and the google map
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
