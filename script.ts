
const Form = document.getElementById("ShareableResume") as HTMLFormElement;
 const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;
const shareableLinkContainer=document.getElementById("shareablelinkcontainer") as HTMLDivElement;
const linkElementContainer= document.getElementById("ShareableLink")as HTMLAnchorElement;
const downloadYourPdf=document.getElementById("downloadpdf")as HTMLButtonElement;


/// getting values form input labels 
Form.addEventListener("submit" , (event : Event)=> {
    event.preventDefault();
    const username = (document.getElementById('userName') as
    HTMLInputElement).value;
    const name = (document.getElementById("yourName") as HTMLInputElement).value;
    const email = (document.getElementById("userGmail") as HTMLInputElement).value;
    const Contact = (document.getElementById("PhoneNumber") as HTMLInputElement).value;
    const bioLinks = (document.getElementById("otherURL") as HTMLInputElement).value;
    const education = (document.getElementById("userEducation") as HTMLInputElement).value;
    const eduactionalInstitute = (document.getElementById("institute") as HTMLTextAreaElement).value;
    const scores = (document.getElementById("GRADES") as HTMLInputElement).value;
    const experiences = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    // save data with in variable user name 
    const resumeData={
        name,
        email,
        Contact,
        bioLinks,
        education,
        eduactionalInstitute,
        scores,
        experiences,
        skills
    };
    localStorage.setItem(username,JSON.stringify(resumeData));

 const resumeHTMLData =`
  <h2><b> Editable RESUME <b><h2>
  <h3> Personal Information</h3>
  <p> Name: <span contenteditable="true">${name}</span></p>
  <p> G-MAIL:<span contenteditable="true"> ${email} </span></p>
  <p> Phone-Number: <span contenteditable="true">${Contact}</span></p>
  <p> Bio-Links: <span contenteditable="true">${bioLinks} </span></p>

 <h3> Education</h3>
 <p contenteditable="true"> Degree : ${education}
 <p contenteditable="true"> Institute Name: ${eduactionalInstitute}</p>
 <p contenteditable="true"> Grades/Marks: ${scores}</p>

  <h3> Experiences </h3>
  <p contenteditable="true"> Experience: ${experiences}</p>

  <h3> Skills</h3>
  <p contenteditable="true">skills: ${skills}</p>
 `
//   display resume 
 if(resumeDisplayElement){
     resumeDisplayElement.innerHTML = resumeHTMLData
     // shareable link generation process here 
     const shareURL=`${window.location.origin}?username=${encodeURIComponent(username)}`;
 
     // display link 
     shareableLinkContainer.style.display = 'block';
     linkElementContainer.href = shareURL;
     linkElementContainer.textContent = shareURL;
 }
 })

 //handle pdf button 
 document.addEventListener("DOMContentLoaded", function() {
    var downloadYourPdf = document.getElementById("downloadpdf");
    if (downloadYourPdf) {
        downloadYourPdf.addEventListener("click", function() {
            window.print();
        });
    }

   });
 

 // filling the form on the basis of username in the url
 window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('userName');

 // 

 if(username){
 const savedResumeData = localStorage.getItem(username);
 if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('userName') as HTMLInputElement).value =username;

    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =resumeData.email;


(document.getElementById('Contact') as HTMLInputElement).value =
resumeData.Contact;

(document.getElementById('bioLinks') as HTMLInputElement).value =resumeData.bioLinks;
(document.getElementById('education') as HTMLInputElement).value =resumeData.education;

(document.getElementById('educationalInstitute') as HTMLInputElement).value =resumeData.eduactionalInstitute;

(document.getElementById('grades') as HTMLInputElement).value =resumeData.scores;
(document.getElementById('expereince') as HTMLInputElement).value =resumeData.expereince;
(document.getElementById('skills') as HTMLInputElement).value =resumeData.skills;

 }};
 });