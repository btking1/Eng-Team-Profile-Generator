// create the team
const generateTeam = (team) => {
  // create the manager html
  const generateManager = (manager) => {
    return `
    <div class="col-8 col-lg-4">
        <div class="card">
            <div class="card-body text-center py-4">
               <h4 class="card-title">${manager.getName()}</h4> 
               <p class=" lead card-subtitle my-4">${manager.getRole()}</p>
                        <i class="fas fa-user-tie fa-2x"></i>
                    </p>
                    <div class="border-bottom"></div>

                    <ul class="list-group d-lg-block mt-4">
                        <li class="list-group-item ">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
            </div>
         </div>
    </div>
         
          `;
  };

  // create the html for engineers
  const generateEngineer = (engineer) => {
    return `
    <div class="col-8 col-lg-4">
                <div class="card">
                    <div class="card-body text-center py-4">
                       <h4 class="card-title">${engineer.getName()}</h4> 
                       <p class=" lead card-subtitle my-4"> ${engineer.getRole()}</p>
                            <p class="card-subtitle my-4"><i class="fas fa-wrench fa-2x"></i></p>
                            <div class="border-bottom"></div>
                                <ul class="list-group mt-4">
                                <li class="list-group-item">ID: ${engineer.getId()} </li>
                                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHubUsername()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHubUsername()}</a> </li>
                            </ul>
                    </div>
                 </div>
            </div>
         
          `;
  };

  // create the html for interns
  const generateIntern = (intern) => {
    return `
    <div class="col-8 col-lg-4">
                <div class="card">
                    <div class="card-body text-center py-4">
                       <h4 class="card-title">${intern.getName()}</h4> 
                          <p class=" lead card-subtitle my-4"> ${intern.getRole()}</p>
                            <p class="card-subtitle my-4"><i class="fas fa-user-graduate fa-2x"></i></i></p>
                            <div class="border-bottom"></div>
                                <ul class="list-group mt-4">
                                <li class="list-group-item">ID: ${intern.getId()} </li>
                                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a> </li>
                                <li class="list-group-item">School: ${intern.getSchool()} </li>
                            </ul>
                    </div>
                 </div>
            </div>
        
          `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
    
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team</title>
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    </head>

    <body>

        <header class="jumbotron-fluid mb-10">
            <h1 class="display-4">Welcome to your team</h1>
        </header>

        <div class="row my-5 px-5 gy-2 align-items-center justify-content-center">
            ${generateTeam(team)}
        </div>    
        </body>    
    </html>
      
      `;
};













// <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <meta charset="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//       <title>My Team</title>
//       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
//           integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
//       <link rel="stylesheet" href="style.css">
//       <script src="https://kit.fontawesome.com/c502137733.js"></script>
//   </head>
//   <body>
//       <div class="container-fluid">
//           <div class="row">
//               <div class="col-12 jumbotron mb-3 team-heading">
//                   <h1 class="text-center">My Team</h1>
//               </div>
//           </div>
//       </div>
//       <div class="container">
//           <div class="row">
//               <div class="team-area col-12 d-md-inline-flex flex-row justify-content-center">
//                   ${generateTeam(team)}
//               </div>
//           </div>
//       </div>
//   </body>
//   </html>



// intern
/* <div class="card employee-card mx-auto">
<div class="card-header">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div>
</div> */

// eng

/* <div class="card employee-card px-auto mx-auto">
<div class="card-header">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGitHubUsername()}" target="_blank" rel="noopener noreferrer">${engineer.getGitHubUsername()}</a></li>
    </ul>
</div>
</div> */

// manager
/* <div class="card employee-card mx-auto px-auto">
<div class="card-header">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
    </ul>
</div>
</div> */