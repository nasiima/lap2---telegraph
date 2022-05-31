// function to update content

window.addEventListener('hashchange', updateContent); //fires when the URL hash changes from one to another

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

async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

module.exports = {
    postEntry, getPost
}
