
    function currentDay(){
        var myDate = new Date(); 
        var myDay = myDate.getDay();
        
        // Array of days. 
        var weekday = ['Sunday', 'Monday', 'Tuesday', 
            'Wednesday', 'Thursday', 'Friday', 'Saturday' 
            
        ]; 
        return "Today is: " + weekday[myDay];
      
    }
        
