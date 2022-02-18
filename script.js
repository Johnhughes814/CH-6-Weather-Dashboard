$(document).ready(function() {
    $("#search-button").on("click", function() { 

        var searchValue = $("#search-value").val();
        $("#search-value").val("");
        
        
        searchWeather(searchValue);
    });

    $(".history").on("click", "li", function() {
        searchWeather($(this).text());
      });
    
      function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
      }




    let API_KEY = "9ad43bd7d81eeecac50dd047c44c95d9"
    function searchWeather(searchValue) {
        $.ajax ({
            type:"GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + API_KEY,
            dataType: "json",
            success: function(data){
                console.log(data);
                // Store searches in local storage
                if (history.indexOf(searchValue) === -1 {
                    history.push(searchValue);
                    window.localStorage.setItem("history", JSON.stringify(history));
                    
                    makeRow(searchValue);
                }

                $("#today").empty();
            }
        })
    }





































});