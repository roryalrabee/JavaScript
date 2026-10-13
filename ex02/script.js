const title = document.getElementById("page-title");
const message = document.getElementById("message");
const button = document.getElementById("change-button");

const status = document.querySelector(".status");

title.textContent = "DOM Manipulation Works!";
message.textContent = "JavaScript changed this message!";
status.textContent = "Status: Updated";

title.style.color = "#176b45";
message.style.fontSize = "22px";

message.classList.add("active");
status.classList.add("active");

console.log(title);
console.log(message);
console.log(button);
console.log(status);
