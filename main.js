  $(document).ready(function(){
        $.getJSON("https://ipinfo.io/json?token={{token_key}}", function (data) {
          var my_country = data.country;
          my_country = my_country.toLowerCase();
          countryCode = my_country;
           console.log('data ',data);
          console.log('my_country ',my_country);
           if (my_country == 'us'){
            showPrice();
           }
          }else{
          console.log("User is from outside USA")
          }
        });
      }); 
