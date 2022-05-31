const db = connect("mongodb://localhost:27017/postsDatabase")
db.posts.drop()

// Sample Posts
db.posts.insertMany([
    { title: "Hello World!", name: "Chris", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi!" },
    { title: "Hello Chicago!", name: "Nasiima", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi!" },
    { title: "Hello Boston!", name: "Dave", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi!" }
])
