// 存放数据 使用订阅发布模式来实现数据的发放

const  DataSource = {
    data:{
        comments:[
            {id:1,title:'新的一天新的烦恼'},
            {id:2,title:'今天也是元气满满的一天'},
        ],
        blogs:[
            {id:1,title:'史莱姆'},
            {id:2,title:'参见萌王'}
        ]
    },
    getComments(){
        return this.data.comments
    },
    getBlogs(){
        return this.data.blogs
    },
    handlders: [],  // 用来存放一些监听函数
    // 可以写一个对象 键名是触发的函数名 键值是函数
    addEventListen(hander){  // 绑定监听事件 
        this.handlders.push(hander)
    },
    removeEventListen(hander){
        this.handlders = this.handlders.filter(item=>item!=hander)
    },
    addComment(){
        console.log(this)
        this.data.comments.push({id:3,title:'ojbk'})
        this.emit()   // 触发监听事件
    },
    addBlog(){
        this.data.blogs.push({id:3,title:'ok'})
        this.emit()
    },
    emit(){
        this.handlders.forEach(hander=>hander())
    }
}

DataSource.addComment = DataSource.addComment.bind(DataSource)  // 点击按钮 调用的时候this丢失 先绑定好
DataSource.addBlog = DataSource.addBlog.bind(DataSource) 

export default DataSource




