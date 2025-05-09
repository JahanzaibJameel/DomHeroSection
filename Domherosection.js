document.body.innerHTML = "";

document.body.style.margin = "0";
document.body.style.fontFamily = "Poppins, sans-serif";

let nav = document.createElement("div");
nav.style.display = "flex";
nav.style.justifyContent = "space-between";
nav.style.alignItems = "center";
nav.style.width = "100%";
nav.style.padding = "15px 50px";
document.body.appendChild(nav);

let logo = document.createElement("div");
logo.innerHTML = "Luxe";
logo.style.fontWeight = "900";
logo.style.fontSize = "30px";
logo.style.color = "#DC0155";
nav.appendChild(logo);

let links = document.createElement("div");
links.style.display = "flex";
links.style.gap = "30px";
nav.appendChild(links);

let createNavLink = (text) => {
  let link = document.createElement("a");
  link.href = "#";
  link.style.textDecoration = "none";
  link.style.color = "black";
  link.style.fontSize = "18px";
  link.innerHTML = text;
  return link;
};

["Home", "Service", "Portfolio", "How we work"].forEach((text) => {
  links.appendChild(createNavLink(text));
});

let navbtn = document.createElement("img");
navbtn.src = "Menu.svg";
navbtn.style.width = "30px";
nav.appendChild(navbtn);

let heromain = document.createElement("div");
heromain.style.display = "flex";
heromain.style.alignItems = "center";
heromain.style.justifyContent = "space-between";
heromain.style.padding = "50px";
heromain.style.flexWrap = "wrap";
document.body.appendChild(heromain);

let textarea = document.createElement("div");
textarea.style.maxWidth = "600px";
textarea.style.textAlign = "center";

let text1 = document.createElement("div");
text1.innerHTML = "Hi, there!";
text1.style.color = "black";
text1.style.fontSize = "25px";
textarea.appendChild(text1);

let text2 = document.createElement("div");
text2.innerHTML =
  "<span style='color: #DC0155;'>LUXE</span> is here to be your assistance";
text2.style.fontSize = "60px";
text2.style.lineHeight = "70px";
textarea.appendChild(text2);

let text3 = document.createElement("div");
text3.innerHTML =
  "I am here ready to help you in making creative digital products";
text3.style.fontSize = "19px";
text3.style.marginTop = "20px";
textarea.appendChild(text3);

let button = document.createElement("a");
button.href = "#";
button.innerHTML = "Let’s Discuss";
button.style.textDecoration = "none";
button.style.color = "white";
button.style.fontSize = "18px";
button.style.backgroundColor = "#DC0155";
button.style.padding = "10px 20px";
button.style.borderRadius = "30px";
button.style.marginTop = "30px";
textarea.appendChild(button);

heromain.appendChild(textarea);

let heroimg = document.createElement("img");
heroimg.src = "image.png";
heroimg.style.width = "600px";
heroimg.style.height = "auto";
heromain.appendChild(heroimg);

let ourService = document.createElement("div");
ourService.innerHTML = "Our Services";
ourService.style.fontSize = "40px";
ourService.style.fontWeight = "600";
ourService.style.margin = "50px 50px 20px";
document.body.appendChild(ourService);

let Service = document.createElement("div");
Service.style.display = "flex";
Service.style.flexWrap = "wrap";
Service.style.gap = "40px";
Service.style.padding = "0 50px";
document.body.appendChild(Service);

let services = [
  {
    icon: "Branding.png",
    title: "Branding",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.s",
  },
  {
    icon: "Ui Design.png",
    title: "UI/UX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: "Product.png",
    title: "Product Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

services.forEach((service) => {
  let serviceContainer = document.createElement("div");
  serviceContainer.style.width = "250px";
  serviceContainer.style.display = "flex";
  serviceContainer.style.flexDirection = "column";
  serviceContainer.style.gap = "10px";

  let icon = document.createElement("img");
  icon.src = service.icon;
  icon.style.width = "50px";
  serviceContainer.appendChild(icon);

  let title = document.createElement("div");
  title.innerHTML = service.title;
  title.style.fontSize = "24px";
  title.style.fontWeight = "500";
  serviceContainer.appendChild(title);

  let desc = document.createElement("div");
  desc.innerHTML = service.description;
  desc.style.color = "#909090";
  desc.style.fontSize = "16px";
  serviceContainer.appendChild(desc);

  Service.appendChild(serviceContainer);
});

// Apply responsive styles based on screen size
function applyResponsiveStyles() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    // Mobile view adjustments
    nav.style.flexDirection = "row";
    links.style.display = "none";
    navbtn.style.display = "block";
    nav.style.width = "74%";

    heromain.style.flexDirection = "column";
    heromain.style.textAlign = "center";
    textarea.style.textAlign = "center";
    heroimg.style.width = "90%";
    heromain.style.padding = "20px";

    Service.style.flexDirection = "column";
    Service.style.alignItems = "center";
  } else if (screenWidth < 1024) {
    // Tablet view adjustments
    nav.style.flexDirection = "row";
    links.style.display = "none";
    navbtn.style.display = "flex";
    nav.style.width = "87%";

    heromain.style.flexDirection = "column";
    heroimg.style.width = "67%";

    Service.style.flexDirection = "row";
    Service.style.flexWrap = "wrap";
    Service.style.justifyContent = "center";
  } else {
    // Desktop view adjustments
    nav.style.flexDirection = "row";
    links.style.display = "flex";
    nav.style.width = "90%";
    navbtn.style.display = "flex";

    heromain.style.flexDirection = "row";
    heromain.style.display = "flex";
    heromain.style.alignItems = "center";
    heromain.style.justifyContent = "center";
    heromain.style.width = "%";
    textarea.style.maxWidth = "600px";
    textarea.style.textAlign = "start";
    textarea.style.gap = "10px";
    textarea.style.display = "flex";
    textarea.style.flexDirection = "column";
    button.style.width = "120px";
    heroimg.style.width = "50%";

    Service.style.flexDirection = "row";
    Service.style.flexWrap = "wrap";
    Service.style.justifyContent = "flex-start";
  }
}

// Apply initial styles and update on resize
applyResponsiveStyles();
window.addEventListener("resize", applyResponsiveStyles);
