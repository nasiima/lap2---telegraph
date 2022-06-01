


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

  

function goToPost(id){
    let url = window.location.href
    let newUrl = url + `?${id}`
    window.open(newUrl, "_self");
}


async function createPost() {
    let url = window.location.href
    let splitUrl = url.split("/?")
    console.log(url)
    // if (splitUrl[0] ===  )
    const id = splitUrl[1];
    
    if (!(splitUrl[1] === undefined)){
    await fetch(`http://localhost:3000/posts/${id}`)
    .then(r => r.json())
    .then(data =>{

        const postSection = document.querySelector('#postSection')


        const postBody = document.createElement('div')
        postBody.className = 'postBody'

        const title = document.createElement('h3')
        title.className = 'title'
        title.textContent = data.title        
        
        
        const name = document.createElement('h4')
        name.className = 'name'
        name.textContent = data.name
        
        const content = document.createElement('p')
        content.className = 'title'
        content.textContent = data.content

        postBody.appendChild(h3)
        postBody.appendChild(h4)
        postBody.appendChild(p)

        postSection.appendChild(postBody)



    
    })
    
    
    form.style.display = "none"
    }
    
    
    }
 





  











