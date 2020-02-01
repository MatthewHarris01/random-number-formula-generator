// this is JS code to determine the correct formula for generating a random number in a specified range.
// this JS code is intended for use with "random number formula generator.html"

// created 1/31/2020 and copyright 2020 by Matthew S Harris


$(document).ready(function () {
  console.log("inside document is ready function");


    //put focus on the first input field
    document.getElementById("min-input").focus();

  var low = 0;
  var high = 0;
  var tiecount=0;

    //set desiered max and min value for the range of random numbers.
    var max;
    var min;
    var max2;
    var min2;

    console.log("the max should be: " + max);
    console.log("the min should be: " + min);


    $('#range-input').click(function(event) {
      event.preventDefault();
      console.log("inside range input click event-handler");

        var feeback = document.getElementById("feedback");  //get a handle on the feeback paragraph for error messages to user.

      //capture min input value

      //min input value must be 0 or 1 -- id=min-input
      var min = $("#min-input").val().trim();

      //min value may not be blank
      if (min == "") {
        feeback.innerText = "ERROR, MIN VALUE MAY NOT BE BLANK!! please try again.";
        return; // bail out, no work to do
      }
      // else if ((min != 1) && (min!= 0)) {
        //min input value must be 0 or 1 
        // feedback.innerText = "ERROR, MIN VALUE MUST BE '0' OR '1'.";
        // return; // bail out, no work to do
      // }


      //capture max input value
      var max = $("#max-input").val().trim();

      //ensure max value is not blank
      if (max == "") {
        feedback.innerText = "ERROR, MAX VALUE MAY NOT BE BLANK!! please try again."
        // console.log("MAX VALUE IS BLANK");
        return;  //bail out, no work to do
      }

      //can't leave input values as strings, convert them to numbers
      min = parseInt(min);
      max = parseInt(max);

      //ensure that max is greater than min
      if (max <= min) {
        feedback.innerText = "ERROR, MAX VALUE MUST BE GREATER THAN THE MINIMUM VALUE!! please try again.";
        // console.log("MAX MUST BE GREATER THAN MIN");
        return; //bail out, not work to be done
      }
      
      if (min == 0) {
        max2 = max + 1; //for reasons I don't clearly understand, if the min of the range is 0, then the max in the formula must be 1 greater than eht desired max
      }
      else {
        max2 = max;
      }
      if (min > 1) {
        // console.log("MIN IS: " + min + " AND MAX NEEDS TO BE FUDGED TO: " + (max - (min-1)));
        max2 = max -(min-1);
      }


console.log("min of range is: " + min);
console.log("max of range is: " + max);
console.log("max2 of range is: " + max2);
console.log("type of min: " + typeof min);
console.log("type of max: " + typeof max);
console.log("type of max2: " + typeof max2);

//CLEAR THE FEEDBACK AREA
feedback.innerText="";

console.log("generate a random number 5000 times and find the high and low values when generating a random from " + min + " to " + max2 + " inclusive");
for (i=0; i <=5000; i++) {
  var tmp =-1;

  // console.log("min of range is: " + min);
  // console.log("max of range is: " + max);
  
  tmp = (Math.floor(Math.random() * max2 )) + min; //gets random num min-max, inclusive
  if (i==0) {
    console.log("first time thru loop");
    console.log(tmp);
    low=tmp;
    high=tmp;
  }
  else if (tmp<low) {
    // console.log("new low number");
    low=tmp;
  }
  else if (tmp>high) {
    // console.log("new high number");
    high=tmp;
  }



    }  //end of for loop
    document.getElementById("output").innerText = "The formula below will produce random numbers between " + low + " and " + high +", inclusive. Copy and paste the formula below into your code.";

    
    
    console.log("high value: " + high);
    console.log("low value: " + low);
  
    //output formula:
    document.getElementById("formula").innerText = "(Math.floor(Math.random() * " + max2 + ")) + " +   min + ";";

    
    
  } // END OF click event
    )
  console.log("end of document ready function");
} //end of document ready function
) //end of document ready evant handler parameter list
