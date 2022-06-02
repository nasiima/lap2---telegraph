const db = connect("mongodb://localhost:27017/postsDatabase")
db.posts.drop()

// Sample Posts
db.posts.insertMany([
    {
      post_id: 1,
      title: "Hello World!",
      name: "Chris",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi!",
    },
    {
      post_id: 2,
      title: "Hello Chicago!",
      name: "Nasiima",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi!",
    },
    {
      post_id: 3,
      title: "Hello Boston!",
      name: "Dave",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, commodi!",
    },
  ]);
