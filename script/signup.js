let signup= document.getElementById('signup')
let signup_data= JSON.parse(localStorage.getItem('signup_data'))||[]

signup.onclick= ()=>{
    getdata()
}

function getdata(){
    let d={
        email: document.getElementById('email').value,
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        password: document.getElementById('password').value,
    }
    let flag= true;    // consiidering the email provided is different
   signup_data.forEach(({email})=>{
    if(email==d.email){
        flag=false   // if email already exist
    }
   })
   if(flag==false){
    return alert('User Already Exist')
   }
    signup_data.push(d)
    localStorage.setItem('signup_data',JSON.stringify(signup_data))
    document.getElementById('email').value=null
    document.getElementById('first_name').value=null
    document.getElementById('last_name').value=null
    document.getElementById('password').value=null
    alert('Account created Successfully')
    displayData()
}

function displayData(){
    console.log(signup_data)
}
window.onload=()=>{
    displayData()
}