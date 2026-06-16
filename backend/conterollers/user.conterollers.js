import UserSchema  from "../model/user.model.js"
export const getUsers = async (req,res)=> {
    try {
        const getData = await UserSchema.find()
        // const getData = await UserSchema.find({name: 'sultan'})
        console.log(getData)
        res.json(getData)
    } catch(err) {
        console.log(err)
    }
}
export const postUser = async (req,res)=> {
    try {
        // const data = req.body
        const newDAta = new UserSchema(req.body)
        newDAta.save()
        res.json("get user ")
    } catch(err) {
        console.log(err)
    }
}
export const getUser2 = async (req,res)=> {
// getUser2
app.get('/name/:name', (req, res) => {
  res.json(req.params.name);
});
}
export const PutUser = (req,res)=> {
    try {
        res.json("get user sltan")
    } catch(err) {
        console.log(err)
    }
}
export const deleteUser = async (req,res)=> {
    try {
        // console.log(req)
        await UserSchema.findByIdAndDelete(req.params.id)
        res.json("get user sltan")
    } catch(err) {
        console.log(err)
    }
}

