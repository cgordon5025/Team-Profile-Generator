function engineerLoop(data) {
    engineerArray = []
    for (let i = 0; i < data.length; i++) {
        if (data[i] == 'Engineer') {
            engineerArray.push(data[i])
        }
    }
}
function internLoop(data) {
    internArray = []
    for (let i = 0; i < data.length; i++) {
        if (data[i] == 'Intern') {
            internArray.push(data[i])
        }
    }
}


//append the block x times per engineer/intern, but how to combine it with template literal
function generateHTML(data) {
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
        <title>My Team</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid bg-danger">
            <div class="container">
                <h1 class="display-4 text-center text-white">My Team</h1>
            </div>
        </div>
        <div class="row justify-content-center" id="employees">
            <div class="main card" style="width: 20rem;">
                <div class="card-header bg-primary">
                    <h5 class="card-title text-white">${data.manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-white">Manager</h6>
                </div>
                <div class="card-body">
                    <div class="card" style="width: 16rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID:</li>
                            <li class="list-group-item">Email:</li>
                            <li class="list-group-item">Office Number</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main card" style="width: 20rem;">
                <div class="card-header bg-primary">
                    <h5 class="card-title text-white">Jung</h5>
                    <h6 class="card-subtitle mb-2 text-white">Engineer</h6>
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
            </div>
            <div class="main card" style="width: 20rem;">
                <div class="card-header bg-primary">
                    <h5 class="card-title text-white">MMMMMMMME</h5>
                    <h6 class="card-subtitle mb-2 text-white">Intern</h6>
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
