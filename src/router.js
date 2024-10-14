window.addEventListener("DOMContentLoaded", (evt) => {
  switch (location.hash) {
    case "":
        document.querySelector('#about_me_btn').style.borderBottom = '1px solid #FF8C40'
        document.querySelector("#about_me").style.display = "flex"
      break;
    case "#personal_projects":
        document.querySelector("#projects_btn").style.borderBottom = '1px solid #FF8C40'
        document.querySelector("#projects").style.display = "flex"
      break;
    case "#client_projects":
        document.querySelector('#projects_btn').style.borderBottom = '1px solid #FF8C40'
        document.querySelector("#clients").style.display = "flex"
      break;
    case "#blogs":
        document.querySelector('#blog_btn').style.borderBottom = '1px solid #FF8C40'
        document.querySelector("#blogs").style.display = "flex"
      break;
    case "#home":
        document.querySelector('#about_me_btn').style.borderBottom = '1px solid #FF8C40'
        document.querySelector("#about_me").style.display = "flex"
      break;
    case "#contact":
        document.querySelector('#contact_btn').style.borderBottom = '1px solid #FF8C40'
        document.querySelector("#contact").style.display = "flex"
      break;
    default:
      console.log("Invalid url hash - 404");
  }
})
