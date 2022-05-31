module.exports = class Post {
  constructor(title, name, content) {
    (this.title = title), (this.name = name), (this.content = content);
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init()
        const postData = await db.collection('posts').find().toArray // converts db data to array
        const posts = postData.map(p => new Post({...p, id: p._id})) // turns array back into Post objects
        resolve(posts)
      } catch (err) {
        console.log(err);
        reject("Error retrieving posts")
      }
    });
  }
  static create(title, name, content) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        let postData = await db.collection('posts').insertOne({title, name, content})
        console.log('postData.ops[0]',postData.ops[0]) // what the hell is this?
        let newPost = new Post(postData.ops[0])
        resolve(newPost);
      } catch (err) {
        reject('Error creating post')
      }
    });
  }
  static findById(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init()
        let postData = await db.collection('posts').find({ _id: ObjectId(id)}).toArray() // ObjectId???
        let post = new Post({...postData[0], id: postData[0]._id}); // postData[0]???
        resolve(post)
      } catch (err) {
        reject('Post not found')
      }
    });
  }
};
