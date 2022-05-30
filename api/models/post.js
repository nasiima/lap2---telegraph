module.exports = class Post {
    constructor(title,name,content){
        this.title = title,
        this.name = name,
        this.content = content
    }

    static create(data){
        return new Promise
    }

    static findById () {
        return new Promise (async (resolve,reject))
    }
}
