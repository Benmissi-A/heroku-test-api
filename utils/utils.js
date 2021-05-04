const fs = require('fs')

//users

exports.singUp = (user) => {
    const users = JSON.parse(fs.readFileSync('./utils/users.json','utf-8'))
    console.log(users)
    const userExist = users.some(users => users.userName === user) ? true : false
    if(!userExist){
        users.push({userName:user , dateCreation : Date.now()})
        console.log(users)
        fs.writeFileSync('./utils/users.json',JSON.stringify(users))
    }else{
      throw new Error(`Choose an other Name ${user} already exist`)  
    }  
}

exports.singIn = (user) => {
    try{
        const users = JSON.parse(fs.readFileSync('./utils/users.json','utf-8'))
        console.log(users)
        console.log({ userName: user})
        const userExist = users.some(users => users.userName === user) ? true : false
        console.log(userExist)
        return userExist
    }catch(e){
        return e.message
    }
    
}