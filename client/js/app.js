


// const form = document.querySelector("form");
// form.addEventListener("submit", postEntry);



const createForm = () => {
  const body = document.querySelector("body");
  body.innerHTML =
    '<form><div class="wrapper"><div><input dir="auto" id="title" contenteditable="true" type="text" placeholder="Title"></div><div><input dir="auto" id="name" contenteditable="true" type="text" placeholder="Your name"></div><div><input dir="auto" id="content" contenteditable="true" type="text" placeholder="Your story..."></div><button class="button" onsubmit="postEntry()">PUBLISH</button><div id="postSection"></div></div></form>';
  }



async function postEntry(e) {
  e.preventDefault();
  // guard clause
  if (!e.target.title.value) {
    console.log("no post title");
    return;
  }
  try {
    const postData = {
      title: e.target.title.value,
      name: e.target.name.value,
      content: e.target.content.value,
    };
    console.log(postData)
    const options = {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch('http://localhost:3000/posts', options)
    .then(r => r.json())
    .then(data =>{
        data.title = postData.title;
        data.name = postData.name;
        data.content = postData.content;
        console.log(data.post_id);
        window.location.hash = `${data.post_id}`;
    })
} catch (err) {
    console.warn(err);
  }
}

  // create the title
const createTitle = (text) => {
  const div = document.createElement("h3");
  div.classList.add("title");
  div.innerText = text;

  return div;
};


// create the name
const createName = (text) => {
  const div = document.createElement("h4");
  div.classList.add("name");
  div.innerText = text;

  return div;
};


// create the content
const createContent= (text) => {
  const div = document.createElement("p");
  div.classList.add("content");
  div.innerText = text;
  return div;
};
    
  

  











