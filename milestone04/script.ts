const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();//prevent page reload

    //collect input values
    const name= (document.getElementById('name') as HTMLInputElement).value
    const phone= (document.getElementById('phone number') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const education= (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skill= (document.getElementById('skills') as HTMLInputElement).value

    // generate resume

    const resumeHtml = `
    <h2><b>Editable Resume</b><h2/>
    <h3>Personal Infomation</h3>
    <p><b>Name:</b><span contenteditable="true"> ${name}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
    <p><b>email:</b><span contenteditable="true">${email}</span></p>
    
    <h3>Education</h3>
    <p><span contenteditable="true">${education}</span></p>
    
    <h3>Experience</h3>
    <p><span contenteditable="true">${experience}</span></p>

    <h3>Skills</h3>
    <p><span contenteditable="true">${skill}</span></p>
 `;

    // Display the generated resume

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHtml;
    }else{
        console.log('Missing Element');
    }
});