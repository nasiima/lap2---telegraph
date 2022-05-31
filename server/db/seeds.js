const db = connect("mongodb://localhost:27017/posts")
db.posts.drop()
