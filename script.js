var Form = document.getElementById("ShareableResume");
var resumeDisplayElement = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("shareablelinkcontainer");
var linkElementContainer = document.getElementById("ShareableLink");
var downloadYourPdf = document.getElementById("downloadpdf");
/// getting values form input labels 
Form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById('userName').value;
    var name = document.getElementById("yourName").value;
    var email = document.getElementById("userGmail").value;
    var Contact = document.getElementById("PhoneNumber").value;
    var bioLinks = document.getElementById("otherURL").value;
    var education = document.getElementById("userEducation").value;
    var eduactionalInstitute = document.getElementById("institute").value;
    var scores = document.getElementById("GRADES").value;
    var experiences = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // save data with in variable user name 
    var resumeData = {
        name: name,
        email: email,
        Contact: Contact,
        bioLinks: bioLinks,
        education: education,
        eduactionalInstitute: eduactionalInstitute,
        scores: scores,
        experiences: experiences,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var resumeHTMLData = "\n  <h2><b> Editable RESUME <b><h2>\n  <h3> Personal Information</h3>\n  <p> Name: <span contenteditable=\"true\">".concat(name, "</span></p>\n  <p> G-MAIL:<span contenteditable=\"true\"> ").concat(email, " </span></p>\n  <p> Phone-Number: <span contenteditable=\"true\">").concat(Contact, "</span></p>\n  <p> Bio-Links: <span contenteditable=\"true\">").concat(bioLinks, " </span></p>\n\n <h3> Education</h3>\n <p contenteditable=\"true\"> Degree : ").concat(education, "\n <p contenteditable=\"true\"> Institute Name: ").concat(eduactionalInstitute, "</p>\n <p contenteditable=\"true\"> Grades/Marks: ").concat(scores, "</p>\n\n  <h3> Experiences </h3>\n  <p contenteditable=\"true\"> Experience: ").concat(experiences, "</p>\n\n  <h3> Skills</h3>\n  <p contenteditable=\"true\">skills: ").concat(skills, "</p>\n ");
    //   display resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTMLData;
        // shareable link generation process here 
        var shareURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
        // display link 
        shareableLinkContainer.style.display = 'block';
        linkElementContainer.href = shareURL;
        linkElementContainer.textContent = shareURL;
    }
});
//handle pdf button 
document.addEventListener("DOMContentLoaded", function () {
    var downloadYourPdf = document.getElementById("downloadpdf");
    if (downloadYourPdf) {
        downloadYourPdf.addEventListener("click", function () {
            window.print();
        });
    }
});
// filling the form on the basis of username in the url
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('userName');
    // 
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('userName').value = username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('Contact').value =
                resumeData.Contact;
            document.getElementById('bioLinks').value = resumeData.bioLinks;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('educationalInstitute').value = resumeData.eduactionalInstitute;
            document.getElementById('grades').value = resumeData.scores;
            document.getElementById('expereince').value = resumeData.expereince;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
    ;
});
