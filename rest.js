  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange=function(){
      if (this.readyState ==4 && this.status== 200){
     var mydata= JSON.parse(this.responseText);//gets the json file and says its as mydata
     window.alert(mydata.bento[1].ingredients[1]);
     
      }
    };
    xmlhttp.open("GET","bento.json",true);
    xmlhttp.send();
    //do this function when a criteria is met
    //4 means ready
    //200 means ok
    function addItem()
    {
      document.getElementById("userInput").value;
    }
    
    function addItem(){
    
      
    }
    