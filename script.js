window.onload = function(){
var map;

    function initialize(){
        var mapProp = {
            center: { lat:-23.681659827962147, lng:  -46.77601414723451},
            zoom: 17,
            
            scrollwheel: false,
        
        }
        
       
    map = new google.maps.Map(document.getElementById("maps"),mapProp);
    
}
   
   
    initialize();
}