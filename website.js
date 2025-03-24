let hoverLinks = document.querySelectorAll(".hover-link");
let currentHoveredLink;


let featuresLinks = document.querySelector("#features-links");

hoverLinks.forEach(currentLink => {
    currentLink.addEventListener("mouseover", (e) => {

 
        let subLinks = document.querySelector("#" + e.currentTarget.textContent.toLowerCase() + "-links");
        currentHoveredLink = subLinks;

        subLinks.classList.add("hoverToggleLink");

        subLinks.addEventListener("mouseleave", (e) => {

            // currentHoveredLink.classList.remove("hoverToggleLink");
            subLinks.classList.remove("hoverToggleLink");
        })
    })




});