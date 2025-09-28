// console.log("It's alive!!");

// function $$(selector, context = document) {
//     return Array.from(context.querySelectorAll(selector));
// }

// let navLinks = $$("nav a");

// let currentLink = navLinks.find(n => a.host === location.host && a.pathname === location.pathname);

// currentLink?.classList.add("current");

// let pages = [
// 	   {url: "./", title: "Home"},
// 	   {url: "projects", title: "Projects"},
//     {url: "contact", title: "Contact"},
//     {url: "cv", title: "Resume"},
// ];

// let nav = document.createElement("nav");
// document.body.prepend(nav);

// for (let p of pages) {
//     let url = p.url;
//     let title = p.title;
//     const ARE_WE_HOME = document.documentElement.classList.contains("home");


//     //create link for each page in the nav element, making the href the url and the content the title to match the home page
//     let a = document.createElement("a");
//     a.href = url;
//     a.textContent = title;
//     nav.append(a);

//     //add class name 'current' to the current page
//     if (a.host === location.host && a.pathname === location.pathname) {
// 	    a.classList.add("current");
//     }

// }


