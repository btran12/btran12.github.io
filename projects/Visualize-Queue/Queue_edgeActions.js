/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_slideButton}", "click", function(sym, e) {
         var count = sym.getVariable("slideClickCount");
         
         //Track of when to slide out and when to slide in
         if (count == 1){
         	sym.getSymbol("slideButton").playReverse();
         	sym.setVariable("slideClickCount", 2);
         }else{
         	sym.getSymbol("slideButton").play();
         	sym.setVariable("slideClickCount", 1);
         }
         

      });
      //Edge binding end

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stopAll();

      });
      //Edge binding end

      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         //Variables for clicks
         sym.setVariable("enClickCount", 1);
         sym.setVariable("deClickCount", 1);
         sym.setVariable("slideClickCount", 1);
         sym.setVariable("slideUpCount", 1);

      });
      //Edge binding end

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_slideUpBtn}", "click", function(sym, e) {
         var clickCount = sym.getVariable("slideUpCount");
         
         //Track of when to slide up and when to slide down
         if (clickCount == 1){
         	sym.getSymbol("slideUpBtn").playReverse();
         	sym.setVariable("slideUpCount", 2);
         }else{
         	sym.getSymbol("slideUpBtn").play();
         	sym.setVariable("slideUpCount", 1);
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_goBtn}", "click", function(sym, e) {
         //Start the animation
         sym.play();
         // Change the text in the slideButton element
         sym.getSymbol("slideButton").$("txt").html("Enqueuing");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         sym.getSymbol("slideButton").$("txt").html("Enqueuing");
         
         // Change the text in slideUpBtn
         //The '<br>' stands for break, in this case it is used as a new line
         sym.getSymbol("slideUpBtn").$("code").html("Node newNode = new Node(element); <br> rear.setLink(newNode); <br> rear = newNode; ");
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         sym.getSymbol("slideButton").$("txt").html("Dequeuing");
         sym.getSymbol("slideUpBtn").$("code").html("element = front.getInfo(); <br> front = front.getLink(); <br> return element;");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6250, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.getSymbol("slideButton").$("txt").html("Enqueuing");
         sym.getSymbol("slideUpBtn").$("code").html("Node newNode = new Node(element); <br> rear.setLink(newNode); <br> rear = newNode; ");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 12500, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.getSymbol("slideButton").$("txt").html("Dequeuing");
         sym.getSymbol("slideUpBtn").$("code").html("element = front.getInfo(); <br> front = front.getLink(); <br> return element;");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 21000, function(sym, e) {
         // insert code here
         // Change the text in an element
         sym.getSymbol("slideButton").$("txt").html("End!");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pauseBtn}", "click", function(sym, e) {
         
         // Set a toggle to play or pause the audio timeline 
         if (sym.isPlaying()) {
         	sym.stop();
         } else {
         	sym.play();
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pauseBtn}", "mousedown", function(sym, e) {
         // insert code to be run when the mouse button is down
         sym.getSymbol("pauseBtn").play();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pauseBtn}", "mouseup", function(sym, e) {
         // insert code to be run when the mouse button is released
         sym.getSymbol("pauseBtn").playReverse();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'slideButton'
   (function(symbolName) {   
   
   })("slideButton");
   //Edge symbol end:'slideButton'

   //=========================================================
   
   //Edge symbol: 'Arrow'
   (function(symbolName) {   
   
   })("Arrow");
   //Edge symbol end:'Arrow'

   //=========================================================
   
   //Edge symbol: 'valueField'
   (function(symbolName) {   
   
   })("valueField");
   //Edge symbol end:'valueField'

   //=========================================================
   
   //Edge symbol: 'enqueueBtn'
   (function(symbolName) {   
   
   })("enqueueBtn");
   //Edge symbol end:'enqueueBtn'

   //=========================================================
   
   //Edge symbol: 'dequeueBtn'
   (function(symbolName) {   
   
   })("dequeueBtn");
   //Edge symbol end:'dequeueBtn'

   //=========================================================
   
   //Edge symbol: 'arrow1'
   (function(symbolName) {   
   
   })("arrow1");
   //Edge symbol end:'arrow1'

   //=========================================================
   
   //Edge symbol: 'arrow2'
   (function(symbolName) {   
   
   })("arrow2");
   //Edge symbol end:'arrow2'

   //=========================================================
   
   //Edge symbol: 'arrow3'
   (function(symbolName) {   
   
   })("arrow3");
   //Edge symbol end:'arrow3'

   //=========================================================
   
   //Edge symbol: 'arrow4'
   (function(symbolName) {   
   
   })("arrow4");
   //Edge symbol end:'arrow4'

   //=========================================================
   
   //Edge symbol: 'arrow5'
   (function(symbolName) {   
   
   })("arrow5");
   //Edge symbol end:'arrow5'

   //=========================================================
   
   //Edge symbol: 'arrow6'
   (function(symbolName) {   
   
   })("arrow6");
   //Edge symbol end:'arrow6'

   //=========================================================
   
   //Edge symbol: 'arrow7'
   (function(symbolName) {   
   
   })("arrow7");
   //Edge symbol end:'arrow7'

   //=========================================================
   
   //Edge symbol: 'element1'
   (function(symbolName) {   
   
   })("element1");
   //Edge symbol end:'element1'

   //=========================================================
   
   //Edge symbol: 'element2'
   (function(symbolName) {   
   
   })("element2");
   //Edge symbol end:'element2'

   //=========================================================
   
   //Edge symbol: 'element3'
   (function(symbolName) {   
   
   })("element3");
   //Edge symbol end:'element3'

   //=========================================================
   
   //Edge symbol: 'element4'
   (function(symbolName) {   
   
   })("element4");
   //Edge symbol end:'element4'

   //=========================================================
   
   //Edge symbol: 'element5'
   (function(symbolName) {   
   
   })("element5");
   //Edge symbol end:'element5'

   //=========================================================
   
   //Edge symbol: 'element6'
   (function(symbolName) {   
   
   })("element6");
   //Edge symbol end:'element6'

   //=========================================================
   
   //Edge symbol: 'element7'
   (function(symbolName) {   
   
   })("element7");
   //Edge symbol end:'element7'

   //=========================================================
   
   //Edge symbol: 'element8'
   (function(symbolName) {   
   
   })("element8");
   //Edge symbol end:'element8'

   //=========================================================
   
   //Edge symbol: 'slideUpBtn'
   (function(symbolName) {   
   
   })("slideUpBtn");
   //Edge symbol end:'slideUpBtn'

   //=========================================================
   
   //Edge symbol: 'goBtn'
   (function(symbolName) {   
   
   })("goBtn");
   //Edge symbol end:'goBtn'

   //=========================================================
   
   //Edge symbol: 'pauseBtn'
   (function(symbolName) {   
   
   })("pauseBtn");
   //Edge symbol end:'pauseBtn'

})(jQuery, AdobeEdge, "EDGE-15144668");