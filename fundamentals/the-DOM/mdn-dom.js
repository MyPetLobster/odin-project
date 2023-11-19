const link = document.querySelector('a');
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = "We hope you enjoyed the ride.";

sect.appendChild(para);

const text = document.createTextNode(
    " - the premier source for web development knowledge.",
);

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);

// sect.removeChild(linkPara);
// // or
// linkPara.remove(); // not supported in older browsers
// // because they have no method to tell a node to remove itself

// // instead would have to do:

// linkPara.parentNode.removeChild(linkPara);


// para.style.color = "white";
// para.style.backgroundColor = "black";
// para.style.padding = "10px";
// para.style.width = "250px";
// para.style.textAlign = "center";

const body = document.querySelector('body');
body.style.display = "flex";
body.style.justifyContent = "center";

sect.style.display = "flex";
sect.style.flexDirection = "column"
sect.style.alignItems = "center";

para.setAttribute("class", "highlight");