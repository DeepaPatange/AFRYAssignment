// ******************************************************************************************************************
// The functions here read data from user.json file and fetch data for an indivdual user
// The data is then returned to the html script which calls each of these fuction on clicking the repective button.
// ******************************************************************************************************************


function getGender() {
    fetch('../Program/users.json')
        .then(response => response.json())
        .then(jsonResponse => {
            RequestedInfo.innerHTML = jsonResponse.gender;
            return jsonResponse.gender
        })
}
function getAge() {
    fetch('../Program/users.json')
        .then(response => response.json())
        .then(jsonResponse => {
            age = new Date().getFullYear() - jsonResponse.birthYear
            RequestedInfo.innerHTML = age;
            return age
        })
}
function getName() {
    fetch('../Program/users.json')
        .then(response => response.json())
        .then(jsonResponse => {
            RequestedInfo.innerHTML = jsonResponse.firstName + " " + jsonResponse.lastName;
            return jsonResponse.firstName + " " + jsonResponse.lastName;
        })
}
function getAllData() {
    fetch('../Program/users.json')
        .then(response => response.json())
        .then(jsonResponse => {
            RequestedInfo.innerHTML = JSON.stringify(jsonResponse, null, 0);
            return jsonResponse
        })
}