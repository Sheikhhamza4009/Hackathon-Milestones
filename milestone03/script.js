var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone number').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skills').value;
    // generate resume
    var resumeHtml = "\n    <h2><b>Resume</b><h2/>\n    <h3>Personal Infomation</h3>\n    <p><b>Name:</b>".concat(name, "</p>\n    <p><b>Phone:</b>").concat(phone, "</p>\n    <p><b>email:</b>").concat(email, "</p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skill, "</p>\n    \n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.log('Missing Element');
    }
});
