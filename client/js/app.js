// function to update content

window.addEventListener('hashchange', updateContent); 
window.addEventListener('load', updateContent);    //fires when the URL hash changes from one to another

function updateContent() {
    const postSection = document.querySelector('#postSection')
    postSection.innerHTML = ''
    window.location.hash.substring(1) // returns complete string
}

async function postEntry(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json();
        window.location.hash = `#${data}` //allows us to change content on page
    } catch (err) {
        console.warn(err);
    }
}

const postSection = document.querySelector('#postSection')

function displayPost(data) {


    const postBody = document.createElement('div')
    postBody.className = 'postBody'

    const form = document.createElement('form')
    form.className = 'postForm'
    form.id = data.id

    const title = document.createElement('h3')
    title.className = 'title'
    title.textContent = data.title

    const name = document.createElement('h4')
    name.className = 'name'
    name.textContent = data.name

    const content = document.createElement('p')
    content.className = 'title'
    content.textContent = data.content


    postBody.appendChild(form)
    postBody.appendChild(h3)
    postBody.appendChild(h4)
    postBody.appendChild(p)

    postSection.appendChild(postBody)

}


async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        data.forEach(e => displayPost(e))
    } catch (err) {
        console.warn(err);
    }
}







// export default {
//     postEntry, getPost, displayPost
// }
