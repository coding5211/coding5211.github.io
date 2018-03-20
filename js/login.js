
function getA(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    if(username.value === "" || password.value===""){
        alert("请输入用户名或密码！")
        
        if(username.value === "" ){
            username.focus();
        }
        else{
            password.focus();
        }
        return false;
        
    }
    else{
        alert("登陆成功")
    }
    return true;
       
}