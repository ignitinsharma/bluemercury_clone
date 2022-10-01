let signup_data= JSON.parse(localStorage.getItem('signup_data'))

let login= document.getElementById('login')

login.onclick= ()=>{
    checkData()
}

function checkData(){
    let d={
        email:document.getElementById('email').value,
        password:document.getElementById('password').value,
    }
    let flagE=false
    let flagP=false

    signup_data.forEach((el)=>{
        if(el.email===d.email){
            flagE=true
            if(el.password===d.password){
                flagP=true
                localStorage.setItem('nameofuser',JSON.stringify(el.first_name))
            }
        }
    })
    if(flagE==true && flagP==true){
        alert('Login successfull')
        window.location.href='./index.html'
    }else if(flagE==false ){
        return alert('User Does Not Exists!')
    }else if(flagP===false){
        return alert('Wrong Credentials Provided!')
    }
}