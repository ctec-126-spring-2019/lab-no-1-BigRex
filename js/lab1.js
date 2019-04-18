// lab1.js

function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    let skills = ['Web Development','Gardening','Drumming','Volunteering']; //missing closing bracket
    let output = "<h2>Bruce's Skills<h2>";
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>'; //needed single quote on the closing "p" tag
}

function getStarted(){
    let firstName = 'Bruce'; //missing equals sign between variable and its value and semicolon
    let lastName = 'Elgort'; //missing semicolon
    let collegeName = 'Clark College';
    let city = 'Vancouver, Washington';
    let gpa = '3.2';  ///gpa was a number not a string (dicey)
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}.`; //three "$'s" missing in the template and period at the end of the sentence(dicey)

    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';  //personal aesthetic
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';  //personal aesthetic
}
window.onload = function(){
    getStarted();
    listSkills();
}
