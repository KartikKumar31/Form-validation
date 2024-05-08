function validateForm()
{
    let name  = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value

    let regExName = new RegExp(/^\d/)
    let regExEmail = new RegExp(/^[\w]+@[a-z]+\.[a-z]{2,}$/)
    if(name === ""){
        alert("Name field cannot be empty!")
        return false
    }
    else if(email === "")
        {
            alert("Email field cannot be empty!")
            return false
        }
    else if(email === "")
        {
            alert("Phone field cannot be empty!")
            return false
        }
    else if(regExName.test(name)){
        alert("Name field cannot contain digit!")
        return false
    }
    else if(phone.length!==10){
        alert("Phone number is invalid")
        return false
    }
    else if(!regExEmail.test(email)){
        alert("Email is invalid")
        return false
    }

    else 
      return  true
}