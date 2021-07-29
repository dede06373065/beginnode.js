const serverHandle=(req,res)=>{
//setup the return JSON
res.setHeader('Content-type','application/json')//返回是字符串但是是JSON格式的
const resData={
    name:"dede100",
    site:"Site",
    env:process.env.NODE_ENV
}
res.end(
    JSON.stringify(resData)
)
}

module.exports=serverHandle