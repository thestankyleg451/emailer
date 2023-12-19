const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const submit = document.getElementById('submit');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Email: </h1>${fname.value}
    <br>
    <h1>Bug Fix Problem: </h1>${lname.value}
    `;

    Email.send({
        SecureToken : "1d382db4-d8c8-4fda-ac1e-7bf7bc1ac783", //add your token here
        To : 'liorstestingrq@gmail.com', 
        From : "liorstestingrq@gmail.com",
        Subject : "Bug Fix Request",
        Body : ebody
    }).then(
      window.location.replace(
        "s.html"
      ));
});