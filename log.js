var objPeople = [
    {
        //admin all
        username : "admin",
        password : "123456"
    },
    {
        //پیمانکار
        username : "Contractor", 
        password : "123456"
    },
    {   //واحد اجرا
        username : "Execution",
        password : "123456",   
    }
]

function  getInfo() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    for (var i = 0 ; i < objPeople.length; i++)
        {
            if (username == objPeople[i].username && password == objPeople[i].password) 
                {
                    console.log(username + "is logged in!!!");
                    window.location.replace("http://127.0.0.1:5500/templates/dashboard.html");
                    return;
                }
        }
        console.log('incorrect username');
}