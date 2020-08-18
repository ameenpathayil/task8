document.getElementById("linka").onclick = function(){       
    document.getElementById("dashboard").style.display= "block";
    document.getElementById("classes").style.display= "none";
    document.getElementById("resources").style.display= "none";
    document.getElementById("linka").style.color= "black";
    document.getElementById("linkb").style.color= "#9d9ea5";
    document.getElementById("linkc").style.color= "#9d9ea5";
  }   
  document.getElementById("linkb").onclick = function(){       
    document.getElementById("dashboard").style.display= "none";
    document.getElementById("classes").style.display= "block";
    document.getElementById("resources").style.display= "none";
    document.getElementById("linka").style.color= "#9d9ea5";
    document.getElementById("linkb").style.color= "black";
    document.getElementById("linkc").style.color= "#9d9ea5";
    
  }  
  document.getElementById("linkc").onclick = function(){       
    document.getElementById("dashboard").style.display= "none";
    document.getElementById("classes").style.display= "none";
    document.getElementById("resources").style.display= "block";
    document.getElementById("linka").style.color= "#9d9ea5";
    document.getElementById("linkb").style.color= "#9d9ea5";
    document.getElementById("linkc").style.color= "black";
  } 
