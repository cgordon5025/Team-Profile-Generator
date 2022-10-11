var managerCard;
//first variable is for a single card, the second is for multiple
var engineerCard;
var engineerCards;
//first is for a single card, the second is for multiple
var internCard;
var internCards;
function makeCards(data) {
    console.log(data)
    // console.log(data.getRole())
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].getRole())
        // this conditional is going through my array of objects and getting the correct infomation depending on the employee type
        if (data[i].getRole() === 'Manager') {
            console.log("Making Manager cards")
            managerCard = `<div class="main card" style="width: 20rem;" id="managerCard">
<div class="card-header bg-primary">
    <h5 class="card-title text-white">${data[i].name}</h5>
    <h6 class="card-subtitle mb-2 text-white"><span class="fa fa-coffee"></span>Manager</h6>
</div>
<div class="card-body">
    <div class="card" style="width: 16rem;">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${data[i].id}</li>
            <li class="list-group-item">Email: ${data[i].email}</li>
            <li class="list-group-item">Office Number: ${data[i].officeNum}</li>
        </ul>
    </div>
</div>
</div>`
            console.log(managerCard)
        } else if (data[i].getRole() === "Engineer") {
            console.log("Making Engineer Cards")
            engineerCard = `<div class="main card" style="width: 20rem;">
            <div class="card-header bg-primary">
                <h5 class="card-title text-white">Jung</h5>
                <h6 class="card-subtitle mb-2 text-white"><span class="fas fa-glasses"></span>Engineer</h6>
            </div>
            <div class="card-body">
                <div class="card" style="width: 16rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item"> Github</li>
                    </ul>
                </div>
            </div>
        </div>`
        } else if (data[i].getRole() === "Intern") {
            console.log("Making Intern Cards")
            internCard = `<div class="main card" style="width: 20rem;">
            <div class="card-header bg-primary">
                <h5 class="card-title text-white">MMMMMMMME</h5>
                <h6 class="card-subtitle mb-2 text-white"><span class="fas fa-user-graduate"></span>Intern</h6>
            </div>
            <div class="card-body">
                <div class="card" style="width: 16rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item">School</li>
                    </ul>
                </div>
            </div>
        </div>`
        }

        //build out other and do the cards


    }
}
function generateHTML(data) {
    makeCards(data)

        `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" href="./assets/css/reset.css" />-->
    <link rel="stylesheet" href="test.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="jumbotron jumbotron-fluid bg-danger">
        <div class="container">
            <h1 class="display-4 text-center text-white">My Team</h1>
        </div>
    </div>
    <div class="row justify-content-center" id="employees">
        ${managerCard}
        ${}
        ${}
        <div class="main card" style="width: 20rem;">
            <div class="card-header bg-primary">
                <h5 class="card-title text-white">MMMMMMMME</h5>
                <h6 class="card-subtitle mb-2 text-white"><span class="fas fa-user-graduate"></span>Intern</h6>
            </div>
            <div class="card-body">
                <div class="card" style="width: 16rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item">School</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`
}
module.exports = generateHTML;
