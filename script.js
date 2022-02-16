$(document).ready(function() {
    $("#search-button").on("click", function() { 

        var searchValue = $("#search-value").val();
        $("#search-value").val("");
        
        
        searchWeather(searchValue);
    });
    let API_KEY = "9ad43bd7d81eeecac50dd047c44c95d9"
    function searchWeather(searchValue) {
        $.ajax ({
            type:"GET",
            url: "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=" + API_KEY,
            dataType: "json",
            success: function(data){
                console.log(data);
            }
        })
    }





































});