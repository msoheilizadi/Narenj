function openForm(x) {
    document.getElementById("myForm").style.display = "block";
    x.style.display = 'none';
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}  

function openCity(evt, cityName) 
{
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function calculation() 
{
    let lenght =  document.getElementById("lenght").value;
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let number = document.getElementById("number").value;

    if (width == 0) {
        width = 1;
    }

    if (height == 0) {
        height = 1;
    }

    let ans = lenght * width * height;
    console.log(ans);
    document.getElementById("box1").value = ans;
    let ans1 = ans * number
    document.getElementById("box2").value = ans1;
}