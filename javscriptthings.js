$(document).ready(function(){

    $("#button").click(
    function(e){
      var myCategory = document.getElementById("dropdown").value;
       
     var myQuery = document.getElementById("inputbox").value;
      var urls = "http://api.walmartlabs.com/v1/search?apiKey=2w9xg6wasagm2atc99qn8fjg&query="+myQuery+"&categoryId="+ myCategory +"&sort=price&ord=asc";
      console.log(urls);

      //document.getElementById("result").<html>
       document.getElementById("result").innerHTML = ""
      console.log("Hello");
      $.ajax({
        // console.log("Walmart");
        url: urls,
          dataType: 'jsonp',
          success: function( data ){

            console.log("Hello from data");
            console.log(data);
            $("#result")
          $.each(data['items'], function(name2, value)
          {
             $("#result").append("<div class='items'><strong>"+value.name+"</strong><br><img src="+value.largeImage+"><br>Price: <strong>$" + value.salePrice+"</strong> <p></p><a href="+value.addToCartUrl+"><button type='button' class='btn btn-primary'>Click here to Buy</button></a></div><br><br>");
             console.log(value.parentItemId);
          });
           document.getElementById("title").innerHTML="";
           document.getElementById("result").style.backgroundImage="none";
          document.getElementById("result").style.backgroundColor= "white";     
            document.getElementById("result").style.width="55%";
             document.getElementById("result").style.height="500px";
             document.getElementById("result").style.overflow= "scroll";
             document.getElementById("result").display="block";
             document.getElementById("result").marginLeft="auto";
             document.getElementById("result").marginRight="auto";



          
    



          }

}
    )
    });


    })

//twitter javascript
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
