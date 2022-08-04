function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here
  // pls remove the below and make some magic in here!
  /**
* I'll be working on the module for the js. I'll declutter when i'm thoroughly done
*The thought process for this function. 
It's divided into 4 parts

*Function 1 prefixCollector takes the prefix from the number. The reason i need this is because we can put in number in 2 forms, 0809 or 234809

*Function 2 numberChecker takes in an argument being the telco prefix- 803,811,809 etc. and returns a string of the telco company

*Function 2 displayImage takes the string gotten from numberChecker and appends the image to the body of the page

*Function 3 startApp basically houses all the functions. it's the function we'll export and it takes an argument. The Argument is the telco prefix.
*/
  //First to get our input
  var raw_number = document.getElementById("phone").value;
  //This is the input that was put into the form on the html end
  var notify = document.getElementById("notify");

  function prefixCollector(rawnum) {
    //We need to differentiate numbers with country code from numbers without country code
    return (rawnum.slice(0, 3) == "234") ? rawnum.slice(3, 6) : rawnum.slice(1, 4);
    }
  

  function numberChecker(number) { //This function takes in an argument number and check if it's mtn, glo or 9mobile
    /*For now, first thing i want to do is create the arrays for the various telco companies. */
    const mtn_array = [703, 704, 706, 803, 806, 810, 813, 814, 816, 903, 906, 913, 916]; //MTN
    const glo_array = [705, 805, 807, 811, 815, 905, 915];//GLO
    const airtel_array = [701, 708, 802, 808, 812, 901, 902, 904, 907, 912];//Airtel
    const ninemobile_array = [809, 817, 818, 908, 909];//9mobile
    //The reason i am using 803 instead of 0803 is to account for those that put number in using country code as that would read as 234809 instead of 2340809
    /* Now, i'll create a function that checks for a certain set of numbers within the array and produce a string being mtn, glo, airtel or 9mobile.*/
   let prefix = parseInt(prefixCollector(number)); //This takes the prefix gotten from the prefixcollector function and converts to integer
if(mtn_array.includes(prefix)) {
        //Checks if it's mtn
      return "MTN";
    } else if (glo_array.includes(prefix)) {
        // checks if it's glo
      return "GLO";
    } else if (airtel_array.includes(prefix)) {
        //checks if it's airtel
      return "AIRTEL";
    } else if (ninemobile_array.includes(prefix)) {
        // checks if it's 9mobile
      return "9MOBILE";
    } else  {
  if(prefix.toString().length<3){ 
         //returns invalid as we'll be dealing with just this 4 carriers

            return "STILL TYPING"

        }else{

  return "INVALID"
  }
        }
      
  }

  //Finally we'll need to return a picture after the numberChecker function is done.
  function displayImage(num_from_page) {

    var telco = numberChecker(num_from_page);

    if(["STILL TYPING"].includes(telco)){
         notification("")
        document.getElementById('logo_box').innerHTML = '';
    }else if(['MTN','GLO','AIRTEL','9MOBILE'].includes(telco)) {
      notification('')
      var a = document.createElement("img");
      a.src = "icons/" + telco + ".svg";
      a.width = 30;
      a.height = 30;
      a.id = 'logo_image';
      a.alt = telco + ".jpg";
      document.getElementById('logo_box').innerHTML = '';
      document.getElementById('logo_box').appendChild(a);
    }else if(["INVALID"].includes(telco)){
        notification("The Phone number is not valid")
        document.getElementById('logo_box').innerHTML = '';
    }else{
      notification("")
    }
  }

  displayImage(raw_number)

}


      function notification(info){
        notify.innerHTML = info;
      }
    
/*  
    const header = document.querySelector('h2');
    if(header) {
      header.textContent = 'make some magic here!!';
    }
  };
*/
// ======= DO NOT EDIT ============== //
export default startApp;
  // ======= EEND DO NOT EDIT ========= //

