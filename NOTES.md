# EXAMPLE: 
  
## DOM Traversal and Manipulation
Get the `<button>` element with the class `'continue'` and change its `HTML` to `'Next Step...'`
```
$( "button.continue" ).html( "Next Step..." )
```

## Event Handling
Show the `#banner-message` element that is hidden with `display:none` in its CSS when any `button` in `#button-container` is clicked.
```
var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();
});
```

## [Ajax](https://api.jquery.com/jQuery.ajax/) 
```
type (default: 'GET')
Type: String
An alias for method. You should use type if you're using versions of jQuery prior to 1.9.0.`
```


Call a local script on the server /api/getWeather with the query parameter zipcode=97201 and replace the element #weather-temp's html with the returned text.



```
$.ajax({
  url: "/api/getWeather",
  data: {
    zipcode: 97201
  },
  success: function( result ) {
    $( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  }
});
```


```

// HOW THIS IF STATEMENT WORKS:
// only look at forecasts around 3:00pm
// if (data.list[0].dt_txt.indexOf("15:00:00") !== -1) {
//     if not found = -1
// if  (-1 !== -1) {
// if  (false) {
// if (data.list[0].dt_txt.indexOf("15:00:00") !== -1) {

```