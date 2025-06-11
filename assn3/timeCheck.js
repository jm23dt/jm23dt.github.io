 /*     
        Jesse Miller
        COP4813 Assignment 3
        06/11/2025

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
            else{
                night();
            }
        }
        // The morning() function sets the body backgroundcolor style to "lightblue",
        // the font color to "darkslategrey" and the image of a sunrise.
        function morning(){
            document.body.style.backgroundColor = "lightblue";
            document.body.style.color = "darkslategrey"
            document.getElementById("image_source").src = "morning.jpg";


        }
        // The afternoon() function sets the body backgroundcolor style to "goldenrod" ,
        // the font color to "navy" and an image of a sunflower
        function afternoon(){
            document.body.style.backgroundColor = "goldenrod";
            document.body.style.color = "navy"
            document.getElementById("image_source").src = "afternoon.jpg";

        }

        // The night() function sets the body backgroundcolor style to "darkslategrey" ,
        // the font color to "lightblue", and an image of the moon
        function night(){
            document.body.style.backgroundColor = "darkslategrey";
            document.body.style.color = "lightblue"
            document.getElementById("image_source").src = "night.jpg";

        }