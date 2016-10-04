/**
 * Created by jaWeber on 10/1/16.
 */

var $ = function (id) {
    "use strict";
    return document.getElementById(id);
};

var thumb = 0;
var slide = new(Image);
var slides = ["images/familyMexico2013.png","images/familybeach2013.png","images/MarkHannahMexico.png","images/family2015_1.png",
    "images/family2015_2.png","images/MJ2015.png","images/christian.png","images/joseph.png","images/aaron.png",
    "images/hannah.png","images/nate.png","images/luke.png","images/mark.png","images/janet.png","images/theBoys2015.png",
    "images/MarkHannah2015.png","images/dogs.png","images/family2016_1.png","images/family2016_2.png"];
var titles = ["Family (Mexico) 2013", "More from Mexico 2013", "Daddy/Daughter Mexico 2013", "Family 2015", "More Family 2015",
    "Mark & Janet","Christian", "Joseph","Aaron", "Hannah", "Nate", "Luke", "Mark", "Janet", "Just the Boyz!", "Daddy/Daughter 2015",
    "Our Four Legged Family Members", "Family 2016", "More Family 2016"];
var captions = ["The eight of us at a photo shoot while on vacation at the NOW Sapphire resort, Riviera Maya, Mexico in August 2013." +
    " This was the only candid the photographer took and it's our favorite shot of the entire trip!",
    "In our own little world!",
    "My favorite photo of Mark & Hannah!",
    "The eight of us for photo shoot in August 2015 (for Nate's senior pics)",
    "Another of the eight of us",
    "Mark & Janet 2015 - just before celebrating 25 years of marriage.",
    "Thing 1: age 24, Logistics Analyst for TMC, A Division of CH Robinson in the West Loop.",
    "Thing 2: age 23, in 5th year of 5year program earning MS in Physician Assistant Studies at Seton Hill University",
    "Thing 3: age 21, graduating in May 2017 with a BS in Aviation studies from Quincy University",
    "Thing 4: age 20, a junior at Lewis University majoring in nursing and playing soccer for the NCAA D2 Flyers!",
    "Thing 5: age 18, a freshman at Valparaiso University majoring in Computer Science - and loving it!",
    "Thing 6: age 17, a senior in high school - looking forward to college - enjoying his senior soccer season.",
    "Mark: VP of R&D at Fresenius Kabi, USA in Lake Zurich.  An avid fisherman - loves the outdoors.",
    "Janet: Currently enrolled at MCC earning certificates in Mobile ApplicationmDevelopment (iOS & Android) and possibly Web Development",
    "My six boys: Mark, Christian, Joseph, Aaron, Nate, Luke",
    "Another daddy/daughter - more recent (2015).  Mark and Hannah",
    "Star, the grandma.  Marley and Lacey, the younger ones. All trouble.  All cherished.",
    "August 2016 at Weber family reunion. Fun, crazy time.",
    "Another from August 2016 - trying to replicate our candid from Mexico 2013 (see next pic)"];
var count = slides.length;

// *************************************************
// preloading the images for the slide show
function preload() {
    "use strict";
    var i;
    for (i=0; i<count; i++) {
        slide.src = slides[i];
        slides.push(slide);
    }
}  // end of preload


// *************************************************
//moving through the thumbnails
function changeThumb(direction) {
    "use strict";

    //alert (direction);

    if (direction === 0) {      // shifting right
        thumb++;
    } else {                    // shifting left
        thumb--;
        if (thumb === -1) {
            thumb = count-1;
        }
    }

    if ((thumb + 2) === count) {
        $("thumb1").src = slides[thumb-2];
        $("thumb2").src = slides[thumb-1];
        $("thumb3").src = slides[thumb];
        $("thumb4").src = slides[thumb+1];
        $("thumb5").src = slides[0];
    } else if ((thumb + 1) === count) {
        $("thumb1").src = slides[thumb-2];
        $("thumb2").src = slides[thumb-1];
        $("thumb3").src = slides[thumb];
        $("thumb4").src = slides[0];
        $("thumb5").src = slides[1];
    } else if ((thumb === count) || (thumb === 0)) {
        $("thumb1").src = slides[count-2];
        $("thumb2").src = slides[count-1];
        $("thumb3").src = slides[0];
        $("thumb4").src = slides[1];
        $("thumb5").src = slides[2];
        thumb = 0;
    } else if (thumb === 1) {
        $("thumb1").src = slides[count-1];
        $("thumb2").src = slides[thumb-1];
        $("thumb3").src = slides[thumb];
        $("thumb4").src = slides[thumb+1];
        $("thumb5").src = slides[thumb+2];
    } else {
        $("thumb1").src = slides[thumb-2];
        $("thumb2").src = slides[thumb-1];
        $("thumb3").src = slides[thumb];
        $("thumb4").src = slides[thumb+1];
        $("thumb5").src = slides[thumb+2];
    }
}  // end of changeThumb()

// *************************************************
// make clicked on image large
 function makeLarge(thumbPos) {
 "use strict";
     var index = -1;

     switch (thumbPos) {
         case 1: index = thumb -2;
             break;
         case 2: index = thumb -1;
             break;
         case 3: index = thumb;
             break;
         case 4: index = thumb + 1;
             break;
         case 5: index = thumb + 2;
             break;
     }

     if (index === -2) {index = count - 2;}
     if (index === -1) {index = count - 1;}
     if (index === count) {index = 0;}
     if (index === (count + 1)) {index = 1;}

 $("main_image").src = slides[index];
 $("title").innerHTML = titles[index];
 $("caption").innerHTML = captions[index];
 }

// *************************************************
function onload() {
    "use strict";
    preload();
}
