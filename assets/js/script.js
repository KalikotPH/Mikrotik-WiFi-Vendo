    
    document.login.username.focus();
    //document.getElementById('title').innerHTML = window.location.hostname + " > login";
    
    // login page 2 mode by Laksamadi Guko
    var username = document.login.username;
    var password = document.login.password;
    var luser = document.getElementById("luser");
    var lpass = document.getElementById("lpass");
    var btnmem = document.getElementById("btnmem");
    var btnvcr = document.getElementById("btnvcr");
    
    // set password = username
    function setpass()
    {
        var user = username.value		
        password.value = user;
    }
    username.onchange = setpass;
    btnmem.style.backgroundColor = "#494949";
    btnvcr.style.backgroundColor = "#757575";  
    
    // change to voucher mode
    function voucher()
    {
        username.focus();
        username.onchange = setpass;
        username.placeholder = "Voucher";
        password.type = "hidden";
        password.value = username.value;  
        btnmem.style.backgroundColor = "#494949";
        btnvcr.style.backgroundColor = "#757575";  
    }
    
    // change to member mode
    function member()
    {
        username.focus();
        username.onchange = "";
        username.placeholder = "Username";
        password.type= "password";
        password.value = "";
        btnmem.style.backgroundColor = "#757575"; 
        btnvcr.style.backgroundColor = "#494949"; 
    }