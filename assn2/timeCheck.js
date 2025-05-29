 /*     
        Jesse Miller
        COP4813 Assignment 2 
        05/28/2025

        The timeCheck() function uses the Date() object to determine current time. 
        The "hour" variable uses the getHours() function to extract the hour.
        The following conditional statements call the appropriate function for the
        current time.
        */
        function timeCheck(){
            const time = new Date();
            let hour = time.getHours();
            if (hour >= 6 && hour < 12){
                morning();
            }
            else if(hour >= 12 && hour < 18){
                afternoon();
            }
            else if(hour >= 18 && hour < 21){
                evening();
            }
            else{
                night();
            }
        }
        // The morning() function sets the body backgroundcolor style to "lightblue" and
        // the font color to "darkslategrey" 
        function morning(){
            document.body.style.backgroundColor = "lightblue";
            document.body.style.color = "darkslategrey"

        }
        // The afternoon() function sets the body backgroundcolor style to "goldenrod" and
        // the font color to "navy"
        function afternoon(){
            document.body.style.backgroundColor = "goldenrod";
            document.body.style.color = "navy"
        }
        // The evening() function sets the body backgroundcolor style to "steelblue" and
        // the font color to "goldenrod"
        function evening(){
            document.body.style.backgroundColor = "steelblue";
            document.body.style.color = "goldenrod"

        }
        // The night() function sets the body backgroundcolor style to "darkslategrey" and
        // the font color to "lightblue"
        function night(){
            document.body.style.backgroundColor = "darkslategrey";
            document.body.style.color = "lightblue"
        }