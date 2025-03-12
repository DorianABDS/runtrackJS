const button = document.createElement("button");
button.id = "button";
button.textContent = "Click me";
document.body.appendChild(button);

const p = document.createElement("p");
p.id = "count";
p.textContent = "0";
document.body.appendChild(p);


function addOne() {
    p.textContent = parseInt(p.textContent) + 1;
}

button.addEventListener("click", addOne);