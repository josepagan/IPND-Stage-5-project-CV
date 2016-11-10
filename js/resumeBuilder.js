//This javascript file is the core of the project, it holds the content
//access and formats the content and then attach it to the page with
//jquery commands
//the four next blocks generate the objects that contain the data to be used
var bio = {
    "name": "Jose Pagan",
    "role": "aspiring software developer",
    "contactinfo": {
        "mobile": "+44 7411470360",
        "email": "jm.pagan@gmail.com",
        "twitter": "@daifuco",
        "github": "josepagan",
        "blog": "http://daifucode.blogspot.co.uk/",
        "location": "Caterham, Surrey, UK"
    },
    "pictureurl": "images/mimi.jpg",
    "welcomemessage": "Recovered underanchiever turned into codeholic and aspiring developer",
    "skills": [
        "Curiosity",
        "Enthusiasm",
        "Creativity",
        "Mario Kart Racing"
    ]
}



var work = [{
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

var projects = [{
    "title": "Fill In The Blanks Generator",
    "dates": "1980/1983",
    "description": "Well beyond the requirements of the project for the IPND I sucessfully created a generator of a classical Fill In the Blanks game, so given a text, no matter how big, and a array of key words, it will generate and display the game",
    "image": "images/miniproject.png"
}, {
    "title": "placeholder",
    "dates": "2016",
    "description": "hopefully soon I will have something to put here",
    "image": "images/desert2.jpg"
}]


var education = {
    "brickandmortar": [{
        "name": "Sussex Downs College",
        "degree": "ESOL",
        "dates": "1992/2000",
        "location": "Eastbourne",
        "major": "English SFL"
    }, {
        "name": "Open University",
        "degree": "UAD",
        "dates": "2015/2016",
        "location": "Milton Keynes, UK",
        "major": "Information Technology"
    }],
    "online": [{
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
}



// This function will format and display the biographical information contained in the bio object
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name)
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
    var formattedemail = HTMLemail.replace("%data%", bio.contactinfo.email)
    var formattedmobile = HTMLmobile.replace("%data%", bio.contactinfo.mobile)
    var formattedgithub = HTMLgithub.replace("%data%", bio.contactinfo.github)
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contactinfo.twitter)
    var formattedblog = HTMLblog.replace("%data%", bio.contactinfo.blog)
    var formattedlocation = HTMLlocation.replace("%data%", bio.contactinfo.location)
    var formatedpicture = HTMLbioPic.replace("%data%", bio.pictureurl)
    var formattedwelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage)


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formatedpicture);

    $("#topContacts").append(formattedmobile);
    $("#topContacts").append(formattedemail);
    $("#topContacts").append(formattedtwitter);
    $("#topContacts").append(formattedblog);
    $("#topContacts").append(formattedgithub);
    $("#topContacts").append(formattedlocation);

    $("#footerContacts").append(formattedmobile);
    $("#footerContacts").append(formattedemail);
    $("#footerContacts").append(formattedtwitter);
    $("#footerContacts").append(formattedblog);
    $("#footerContacts").append(formattedlocation);


    $("#header").append(formattedwelcome);

    // bio skills displaying block
    // variable formattedSkill is looped through

    if (bio.skills) {
        $("#header").append(HTMLskillsStart);
        for (var skillindex = 0; skillindex < bio.skills.length; skillindex++) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillindex]);
            $("#skills").append(formattedSkill);
        }
    }

}




// This function will format and append the work information contained in the work object
work.display = function() {

    for (var job = 0; job < work.length; job++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work[job].employer)
        var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[job].location)
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[job].title)
        var formattedWorkdates = HTMLworkDates.replace("%data%", work[job].dates)
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[job].description)

        $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
        $(".work-entry:last").append(formattedWorkLocation);
        $(".work-entry:last").append(formattedWorkdates);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}




// This function will formats and displays the school information contained in the education object
education.brickandmortar.display = function() {
        $("#education").append(HTMLschoolStart)

        for (var i = 0; i < education.brickandmortar.length; i++) {
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.brickandmortar[i].name);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.brickandmortar[i].degree);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.brickandmortar[i].dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.brickandmortar[i].location)
            var formattedSchoolMayor = HTMLschoolMajor.replace("%data%", education.brickandmortar[i].major);

            $(".education-entry:last").append(formattedSchoolName);
            $(".education-entry:last").append(formattedSchoolDegree);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMayor);

        }
    }
    // This function will format and display the online education information contained in the education object
education.online.display = function() {
    $(".education-entry:last").append(HTMLonlineClasses);

    for (var i = 0; i < education.online.length; i++) {
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.online[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.online[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.online[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.online[i].url);

        $(".education-entry:last").append(formattedOnlineTitle);
        $(".education-entry:last").append(formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineURL);

    }


}

// This function will encapsulate both education functions into a main one
education.display = function() {
    education.brickandmortar.display()
    education.online.display()
}


// This function will format and display the project information contained in the projects object
projects.display = function() {
    $("#projects").append(HTMLprojectStart)

    for (var pro = 0; pro < projects.length; pro++) {
        var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[pro].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[pro].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[pro].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects[pro].image)

        $(".project-entry:last").append(formattedProjectTitle);
        $(".project-entry:last").append(formattedProjectDates);
        $(".project-entry:last").append(formattedProjectDescription);
        $(".project-entry:last").append(formattedProjectImage);
    }
}

//finally all four main displaying functions are called to generate most of the resume

bio.display()
work.display()
education.display()
projects.display()




//this function contains some code to reformat a name with a given string
// in international capitalization mode so Albert Einstein returns ALBERT EINSTEIN
//this function is used by the internationalizeButton

function inName(string) {
    var p = string.split(" ")
    p[1] = p[1].toUpperCase();
    p[0] = p[0].slice(0, 1).toUpperCase() + p[0].slice(1).toLowerCase();
    p = p[0] + " " + p[1];
    return p
}

//attachement of the last two elements on the web, the internationalizeButton and the google map

$("#main").append(internationalizeButton)




$("#mapDiv").append(googleMap);
