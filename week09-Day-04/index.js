let filesystem = require('fs')

let obj = {
    Name : 'Rajeev Ranjan',
    AadharNumber : '8683-1901-2222',
    DOB : '03/01/1998',
    Address : 'A.C.Gardens, Rajahmundry',
    Gender : 'Male'
}

let insertobj = ({Name, AadharNumber, DOB, Address, Gender})=>{
    let inserttext = 
`Name         : ${Name},
AadharNumber : ${AadharNumber},
DOB          : ${DOB},
Address      : ${Address},
Gender       : ${Gender}
`
    filesystem.appendFile('./aadhar.txt',inserttext, err => {if(err) console.log(err)})
}

insertobj(obj)
