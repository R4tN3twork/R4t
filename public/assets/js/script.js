const cloakImages = [
  "/assets/img/r4t.png",
  "/assets/img/drive.png",
  "/assets/img/classroom.png",
  "/assets/img/docs.png",
  "/assets/img/khanacademy.png",
  "/assets/img/canvas.ico",
];
function saveData(name, data) {
  localStorage.removeItem(name);
  localStorage.setItem(name, data);
}
//ai
function changeFavicon(newIconPath) {
  let link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon"; // Or 'image/png', 'image/svg+xml' depending on your icon format
  link.rel = "icon"; // Or 'icon' for modern browsers
  link.href = newIconPath;
  document.getElementsByTagName("head")[0].appendChild(link);
}
// Example usage:
// To change the favicon to 'new-icon.png'
changeFavicon(cloakImages[0]); //sets the cloak image to the r4t logo
document.title = "R4t | Beta";
//not ai
function cloak(id) {
  if (id == cloakImages[0]) {
    changeFavicon(cloakImages[0]);
    document.title = "R4t | Beta";
    saveData("icon", cloakImages[0]);
  } else if (id == cloakImages[1]) {
    changeFavicon(cloakImages[1]);
    document.title = "Home - Google Drive";
    saveData("icon", cloakImages[1]);
  } else if (id == cloakImages[2]) {
    changeFavicon(cloakImages[2]);
    document.title = "Home";
    saveData("icon", cloakImages[2]);
  } else if (id == cloakImages[3]) {
    changeFavicon(cloakImages[3]);
    document.title = "Google Docs";
    saveData("icon", cloakImages[3]);
  } else if (id == cloakImages[4]) {
    changeFavicon(cloakImages[4]);
    document.title = "Khan Academy | Free Online Courses, Lessons & Practice";
    saveData("icon", cloakImages[4]);
  } else if (id == cloakImages[5]) {
    changeFavicon(cloakImages[5]);
    document.title = "Dashboard";
    saveData("icon", cloakImages[5]);
  }
}
/*var gameArea = document.getElementById("gameframe");//imma use inputs instead
function increaseSize(dimension) {
if (dimension == "width") {
gameArea.style.width += 10 + "px";
}
}*/
//jonasrhee1208wastaken(I modified it a bit)
function aboutBlank(url, redirect) {
  // Check if the code is running in a browser environment
  if (typeof window === "undefined") {
    throw new Error("This function can only be run in a browser environment.");
  }
  // Open a new browser window
  let maskedWindow = window.open();
  const doc = maskedWindow.document;
  // Set the title of the new document to an empty string
  doc.title = "New Tab";
  // Create an embed element to display the content
  let embed = doc.createElement("embed");
  // Set the source of the embed element, ensuring it starts with 'https://' or 'http://'
  embed.src =
    url.includes("https://") || url.includes("http://")
      ? url
      : "https://" + url;
  embed.width = "100%";
  embed.height = "100%";
  embed.style.position = "fixed";
  embed.style.top = "0";
  embed.style.left = "0";
  // Create a script element to handle the beforeunload event
  let script = doc.createElement("script");
  script.innerHTML = `
    window.onbeforeunload = function() {
      return "Reloading will destroy the iframe.";
    };
  `;
  // Append the embed and script elements to the document body
  doc.body.appendChild(embed);
  doc.body.appendChild(script);
  if (redirect == true) {
    // Redirect the current window to Google
    window.location.replace("https://google.com");
  }
  // Close the current window
  window.close();
}
//not jonasrhee1208wastaken
//embed proxy
//replaces the tab with the specified url and (usually) overwrites history https://
document.head = document.head || document.getElementsByTagName("head")[0];
function loadURL(url) {
  //window.open("/frame.html");
  if (url.includes("https://") || url.includes("http://")) {
    saveData("url", url);
    window.location.href = "/frame.html";
    var gameframe = document.getElementById("gameframe");
    gameframe.innerHTML =
      "<embed src='" +
      url +
      "' width='100%' height='100%' frameborder='0' allowfullscreen></embed>";
    //document.getElementById("requested-url").value = url;
  } else {
    alert("Please enter a valid URL \n (try using https:// or http://)");
  }
}
//not embed proxy
/*var body = document.getElementById("body");
function changeBackground(method, color) {
  if (method == bgColor) {
    body.style.background - color === color + ";";
    localStorage.setItem("color", color);
  }
}*/
function newPage(page) {
  window.location.href = "/" + page;
}
function gamePage(page) {
  saveData("url", window.location.origin + page);
  newPage("frame.html");
}
function changePanicKey() {
  let key = document.getElementById("panicKey").value;
  saveData("panicKey", key);
  alert("Panic key changed to " + key);
}
function changePanicKeyLink() {
  let newLink = document.getElementById("panicKeyLink").value;
  if (newLink.includes("https://") || newLink.includes("http://")) {
    saveData("panicKeyLink", newLink);
    alert("Panic key link updated");
  } else {
    alert("Please enter a valid url \n (try using https:// or http://)");
  }
}
document.addEventListener("keydown", function (event) {
  var pk = localStorage.getItem("panicKey");
  var pressedKey = event.key;
  console.log(pressedKey);
  if (pressedKey == pk) {
    //let state = { additionalInformation: "Updated the URL" };
    //window.history.replaceState(state, "Home", "https://classroom.google.com"); //replaces the current history entry with google classroom
    if (localStorage.getItem("panicKeyLink") == null) {
      window.location.replace("https://classroom.google.com");
    } else {
      window.location.replace(localStorage.getItem("panicKeyLink")); //sets the url to google classroom and makes it so that if you go through the tab history it doesnt show the site(sometimes)
    }
  }
});
function clearLocalStorage() {
  let areYouSure = window.confirm(
    "Are you sure you want to reset all saved settings?"
  );
  if (areYouSure == true) {
    localStorage.clear();
    alert("Settings have been reset");
  }
}
/*if (enter) {
console.log("h");
const gameContainer = document.getElementById("game-container");
gameContainer.innerHTML = `<embed src="${gameurl}" width="100%" height="100%" frameborder="0"></embed>`;
document.getElementById("url-input").value = gameurl;
}*/
//fullscreen
function fullScreen() {
  var gameframe = document.getElementById("gameframe");
  if (gameframe.requestFullscreen) {
    gameframe.requestFullscreen(); //normal
  } else if (gameframe.mozRequestFullScreen) {
    gameframe.webkitRequestFullscreen(); //safari
  } else if (gameframe.webkitRequestFullscreen) {
    gameframe.mozRequestFullScreen(); //firefox
  } else if (gameframe.msRequestFullscreen) {
    gameframe.msRequestFullscreen(); //internet explorer 11
  }
}
function onload() {
  if (localStorage.getItem("icon") == cloakImages[0]) {
    cloak(cloakImages[0]);
  } else if (localStorage.getItem("icon") == cloakImages[1]) {
    cloak(cloakImages[1]);
  } else if (localStorage.getItem("icon") == cloakImages[2]) {
    cloak(cloakImages[2]);
  } else if (localStorage.getItem("icon") == cloakImages[3]) {
    cloak(cloakImages[3]);
  } else if (localStorage.getItem("icon") == cloakImages[4]) {
    cloak(cloakImages[4]);
  } else if (localStorage.getItem("icon") == cloakImages[5]) {
    cloak(cloakImages[5]);
  }
  if (localStorage.getItem("url") == null) {
    console.log("No saved url");
  } else {
    let gameframe = document.getElementById("gameframe");
    gameframe.innerHTML =
      "<embed src='" +
      localStorage.getItem("url") +
      "' width='100%' height='100%' frameborder='0' allowfullscreen></embed>";
  }
  if (localStorage.getItem("panicKey") == null) {
    saveData("panicKey", "`");
  }
}
