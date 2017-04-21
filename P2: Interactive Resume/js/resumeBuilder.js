/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Hector Matias Martin",
    "role": "QA Analys & Software Developer",
    "welcomeMessage": "I'm always looking for new challenges and opportunities to learn and grow. One of my greatest strengths is the ability to quickly learn and adapt to new technologies. Currently I am working in a project with FIS-Global, a world-wide leader in financial services technology with a focuses in retail and institutional banking, payments, asset and wealth management. Additionally, I devote several hours a week to various independent, personal, software projects.",
    "image": "images/me.jpg",
    "contacts": {
        "mobile": "+54 261 540 0880",
        "gitHub": "https://github.com/matimartin",
        "skype": "matias.martin89",
        "location": "Mendoza, Argentina",
        "email": "matias.martin89@gmail.com"
    },
    "skills": ["HTML5", "CSS3", "Javascript", "Java"]
};

var work = {
    "jobs": [{
        "employer": "BelatrixSF",
        "title": "QA Analyst",
        "dates": "2016-Present",
        "location": "Mendoza, Argentina",
        "description": "At Belatrix we follow the agile scrum methodology for project management and increase our outputs by focusing on collaboration, flexibility and adaptability in a team environment. In this position, I: Analyze requirements for creating test cases, documentation and running them an recording the results, Run different QA strategies in order to assure the quality of the application, Work with the QA Manager and colleagues to define QA process and strategy, Identify,         analyze, and document problems with program function, output, online screen, or content, Help planning test schedules or strategies in accordance with project scope/delivery dates, Participate in product design reviews to provide input on functional requirements, product designs, schedules, or potential problems, Automated test tools using eggPlant."
    }, {
        "employer": "BelatrixSF",
        "title": "iOS Developer",
        "dates": "2016-2017",
        "location": "Mendoza, Argentina",
        "description": "At Belatrix we follow the agile scrum methodology for project management and increase our outputs by focusing on collaboration, flexibility and adaptability in a team environment. In this position, I: Develop and maintain code for a mobile banking application for FIS-Global's Project in Objective-C language, Analyze and perform code reviews developed by the team in Android, Java, JavaScript, and Objective-C languages; Help on-board the rest of the team, Report and resolve issues/bugs discovered inside the code using JIRA, Create Unit Test using the kiwi framework; and Deliberate and find solutions with the team to resolve critical bugs reported to the Quality Assurance team and Product Owners."
    }, {
        "employer": "Google Developer group",
        "title": "Developer / researcher",
        "dates": "2013-2015",
        "location": "Mendoza, Argentina",
        "description": "Google Developer Groups (GDGs) consist of professionals, as well as computer science students, which gather to learn about new technologies. This is a group for those interested in Google's developer technology, in researching new technologies, and in their application. In this group in particular, we studied Android, Chrome, Drive, and Google Cloud platforms, to product APIs like the Cast API, Maps API, and YouTube API. Our biggest achievement was the development of software that allowed disabled children to communicate with their parents and caretakers by connecting a computer to their electric wheel chair."
    }]
};

var projects = {
    "project": [{
        "title": "Movies Theatre",
        "dates": "2017",
        "description": "It's a project that consume an API which update all the movies shown on Theatres",
        "images": ["images/1.png", "images/2.png", "images/3.png"]
    }, {
        "title": "Bike 2 Rush",
        "dates": "2016",
        "description": "Bike 2 Rush Bike 2 Rush Bike 2 Rush Bike 2 Rush",
        "images": ["images/4.png", "images/5.png", "images/6.png"]
    }, {
        "title": "Classic Arcade Game",
        "dates": "2015",
        "description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer Nanodegree",
        "images": ["images/7.png", "images/8.png", "images/9.png"]
    }]
};

var education = {
    "schools": [{
        "name": "Universidad Tecnologica Nacional",
        "location": "Mendoza, Argentina",
        "degree": "Facultad de Ingenieria y Sistemas",
        "major": "Computer Programmer",
        "dates": "2014-2016",
        "url": "http://www.frm.utn.edu.ar/index.php"
    }, {
        "name": "Universidad de Mendoza",
        "location": "Mendoza, Argentina",
        "degree": "Facultad de Ingenieria",
        "major": "Bio Ingenieria",
        "dates": "2008-2013",
        "url": "http://www.um.edu.ar/es/"
    }],
    "online courses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/nanodegree"
    }, {
        "title": "Full-Stack Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2017",
        "url": "https://www.udacity.com/nanodegree"
    }]
};

//Bio
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedImage = HTMLbioPic.replace("%data%", bio.image);
    var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").prepend(formattedName, formattedRole).append(formattedImage, formattedMessage);
    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#header").append(formattedSkills);
    }
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgitHub.replace("%data%", bio.contacts.gitHub);
    var formattedSkype = HTMLcontactGeneric.replace("%contact%", "skype").replace("%data%", bio.contacts.skype);
    $("#footerContacts").append(formattedMobile, formattedEmail, formattedGitHub, formattedSkype);
};

//Education
education.display = function() {
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
    }
//TODO: Make an if statement
    if (education["online courses"].length !== 0) {
        $("#education").append(HTMLonlineClasses);
    }
    for (var course in education["online courses"]) {
        $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education["online courses"][course].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education["online courses"][course].school);
        var formattedDates = HTMLonlineDates.replace("%data%", education["online courses"][course].dates);
        var formattedURL = HTMLonlineURL.replace("%data%", education["online courses"][course].url);
        $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDates, formattedURL);
    }
};

//Work
work.display = function() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
    }
};

//Projects
projects.display = function() {
    for (var item in projects.project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
        for (var image in projects.project[item].images) {
            var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};

bio.display();
education.display();
work.display();
projects.display();

function inName(name) {
    var fullName, firstName, lastName;
    fullName = name.split(" ");
    firstName = fullName[0].toLowerCase();
    firstName = firstName.slice(0,1).toUpperCase() + firstName.slice(1);
    lastName = fullName[1].toUpperCase();
    fullName = firstName + " " + lastName;
    return fullName;
}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
