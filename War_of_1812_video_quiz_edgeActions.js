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
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         sym.setVariable("index", 1);
         //Record the number of guesses per question
         sym.setVariable("statistics", new Array(4));
         sym.setVariable("clicks", 0);
         
         var questions = new Array("What Bill did Congress pass in 1810?"
         					, "What Shawnee Tribe leader did the British align themselves with?"
         					, "When was the War of 1812 declared?"
         					, "What building did the British infamously burn down?"
         					, "When was peace made?");
         
         sym.setVariable("questionValues", questions);
         
         var answers =[['Macons Bill', 'Embargo Act', 'Navigation Act']
         				, ['Hatam Kumeyaay', 'Tecumseh', 'Geronimo Apache']
         				, ['May of 1812', 'July of 1812', 'June of 1812']
         				, ['Capitol', 'Supreme Court', 'White House']
         				, ['September 1812', 'December 1812', 'January 1813']];
         
         sym.setVariable("answerValues", answers);
         
         var explainations = new Array("The Macon's Bill would lift all embargoes with either Great \
         							Britian or France if either country ceased attacks against American ships"
         							, "Shawnee Chief Tecumseh's confederacy allied with \
         							the British and helped in the capture of Fort Detroit"
         							, "The War of 1812 was declared on June 18, 1812. The War \
         							ended on February 18, 1815 after 2 years and 8 months."
         							, "After the raids on Chesapeake Bay, the British attacked \
         							Washington DC and infamously burned down the White House, \
         							along with the Capitol building, and the Navy Yard.");
         
         sym.setVariable("explainValues", explainations);
         
         var youtube = $("<iframe/>");
         sym.$("video").append(youtube);
         youtube.attr('type', 'text/html');
         youtube.attr('width', '560');
         youtube.attr('height', '315');
         youtube.attr('src', 'https://www.youtube.com/embed/IfvqGZhRBFc?rel=0');
         youtube.attr('frameborder', '0');
         youtube.attr('allowfullscreen','no');
         
         //The answer selections to each question is hard-coded:
         //They are as followed:
         //1. A
         //2. B
         //3. C
         //4. C
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Questions'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_answerC}", "mouseout", function(sym, e) {
         sym.getSymbol("answerC").getSymbol("selection").stop("Off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerC}", "mouseover", function(sym, e) {
         sym.getSymbol("answerC").getSymbol("selection").stop("On");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerC}", "click", function(sym, e) {
         var current = sym.getComposition().getStage().getVariable("index");
         var clicks = sym.getComposition().getStage().getVariable("clicks");
         var array = sym.getComposition().getStage().getVariable("statistics");
         
         clicks = clicks + 1;
         sym.getComposition().getStage().setVariable("clicks", clicks);
         
         if (current == 3){
         	sym.stop("correct 3");
         	current = current + 1;
         	sym.getComposition().getStage().setVariable("index", current);
         	//Record clicks
         	array[current-1] = clicks;
         	sym.getComposition().getStage().setVariable("statistics", array);
         	//Reset the number of clicks for next question
         	sym.getComposition().getStage().setVariable("clicks", 0);
         }else if (current == 4){
         	sym.stop("correct 4");
         	current = current + 1;
         	sym.getComposition().getStage().setVariable("index", current);
         	//Record clicks
         	array[current-1] = clicks;
         	sym.getComposition().getStage().setVariable("statistics", array);
         	//Reset the number of clicks for next question
         	sym.getComposition().getStage().setVariable("clicks", 0);
         }

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerB}", "mouseout", function(sym, e) {
         
         sym.getSymbol("answerB").getSymbol("selection").stop("Off");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerB}", "mouseover", function(sym, e) {
         sym.getSymbol("answerB").getSymbol("selection").stop("On");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerB}", "click", function(sym, e) {
         var current = sym.getComposition().getStage().getVariable("index");
         var clicks = sym.getComposition().getStage().getVariable("clicks");
         var array = sym.getComposition().getStage().getVariable("statistics");
         
         clicks = clicks + 1;
         sym.getComposition().getStage().setVariable("clicks", clicks);
         
         if (current == 2){
         	sym.stop("correct 2");
         	current = current + 1;
         	sym.getComposition().getStage().setVariable("index", current);
         	//Record clicks
         	array[current-1] = clicks;
         	sym.getComposition().getStage().setVariable("statistics", array);
         	//Reset the number of clicks for next question
         	sym.getComposition().getStage().setVariable("clicks", 0);
         }
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerA}", "mouseout", function(sym, e) {
         
         sym.getSymbol("answerA").getSymbol("selection").stop("Off");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerA}", "mouseover", function(sym, e) {
         
         sym.getSymbol("answerA").getSymbol("selection").stop("On");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerA}", "click", function(sym, e) {
         
         var current = sym.getComposition().getStage().getVariable("index");
         var clicks = sym.getComposition().getStage().getVariable("clicks");
         var array = sym.getComposition().getStage().getVariable("statistics");
         
         clicks = clicks + 1;
         sym.getComposition().getStage().setVariable("clicks", clicks);
         
         if (current == 1){
         	sym.stop("correct 1");
         	//Keep track of the number of questions
         	current = current + 1;
         	sym.getComposition().getStage().setVariable("index", current);
         	//Record clicks
         	array[current-1] = clicks;
         	sym.getComposition().getStage().setVariable("statistics", array);
         	//Reset the number of clicks for next question
         	sym.getComposition().getStage().setVariable("clicks", 0);
         
         }
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         var questions = sym.getComposition().getStage().getVariable("questionValues");
         var answers = sym.getComposition().getStage().getVariable("answerValues");
         
         var question2 = questions[1];	
         var answer1 = answers[1][0];
         var answer2 = answers[1][1];
         var answer3 = answers[1][2];
         
         sym.$("Question").html(question2);
         
         // Change the text in an element
         sym.getSymbol("answerA").$("answer").html(answer1);
         sym.getSymbol("answerB").$("answer").html(answer2);
         sym.getSymbol("answerC").$("answer").html(answer3);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         var explainArr = sym.getComposition().getStage().getVariable("explainValues");
         var explaination = explainArr[1];
         
         sym.getComposition()
         	.getStage()
         		.getSymbol("Questions")
         			.getSymbol("Explaination")
         				.$("explaination")
         					.html(explaination);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         var questions = sym.getComposition().getStage().getVariable("questionValues");
         var answers = sym.getComposition().getStage().getVariable("answerValues");
         
         var question3 = questions[2];	
         var answer1 = answers[2][0];
         var answer2 = answers[2][1];
         var answer3 = answers[2][2];
         
         sym.$("Question").html(question3);
         
         sym.getSymbol("answerA").$("answer").html(answer1);
         sym.getSymbol("answerB").$("answer").html(answer2);
         sym.getSymbol("answerC").$("answer").html(answer3);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         var explainArr = sym.getComposition().getStage().getVariable("explainValues");
         var explaination = explainArr[2];
         
         sym.getComposition()
         	.getStage()
         		.getSymbol("Questions")
         			.getSymbol("Explaination")
         				.$("explaination")
         					.html(explaination);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         var questions = sym.getComposition().getStage().getVariable("questionValues");
         var answers = sym.getComposition().getStage().getVariable("answerValues");
         
         var question4 = questions[3];	
         var answer1 = answers[3][0];
         var answer2 = answers[3][1];
         var answer3 = answers[3][2];
         
         sym.$("Question").html(question4);
         
         sym.getSymbol("answerA").$("answer").html(answer1);
         sym.getSymbol("answerB").$("answer").html(answer2);
         sym.getSymbol("answerC").$("answer").html(answer3);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         var explainArr = sym.getComposition().getStage().getVariable("explainValues");
         var explaination = explainArr[3];
         
         sym.getComposition()
         	.getStage()
         		.getSymbol("Questions")
         			.getSymbol("Explaination")
         				.$("explaination")
         					.html(explaination);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         var score = sym.getComposition().getStage().getVariable("correct");
         var array = sym.getComposition().getStage().getVariable("statistics");
         var totalGuesses = 0;
         var statsStr = "<ins><b>Statistics</b></ins>: <br>";
         
         for (i = 1; i < array.length; i ++){
         	totalGuesses = totalGuesses + array[i];
         	statsStr = statsStr + "Question " + i + ":&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + array[i]  + " guess(es)" + "<br>";
         }
         
         if (totalGuesses <= 4){
         	sym.getComposition()
         	.getStage()
         		.getSymbol("Questions")
         			.getSymbol("Explaination")
         				.$("explaination")
         					.html(statsStr + "\r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='green'>You did a great job!</font>");
         }else{
         	sym.getComposition()
         	.getStage()
         		.getSymbol("Questions")
         			.getSymbol("Explaination")
         				.$("explaination")
         					.html(statsStr + "\r&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color='green'>You can do better!</font>");
         }
         
         
         
         
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerA}", "mousedown", function(sym, e) {
         var array = sym.getComposition().getStage().getVariable("questionValues");
         console.log(array[0]);
         var arr2 = sym.getComposition().getStage().getVariable("answerValues");
         console.log(arr2[1][1]);
         
         var current = sym.getComposition().getStage().getVariable("index");
         
         if (current == 1){
         	sym.getSymbol("answerA").getSymbol("selection").stop("xOff");
         
         	sym.getComposition().getStage().$("correctAnswerSound")[0].play();
         
         }else{
         	sym.getSymbol("answerA").getSymbol("selection").stop("xOn");
         
         	sym.getComposition().getStage().$("wrongAnswerSound")[0].play();
         
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerB}", "mousedown", function(sym, e) {
         var current = sym.getComposition().getStage().getVariable("index");
         
         if (current == 2){
         	sym.getSymbol("answerB").getSymbol("selection").stop("xOff");
         	sym.getComposition().getStage().$("correctAnswerSound")[0].play();
         }else{
         	sym.getSymbol("answerB").getSymbol("selection").stop("xOn");
         	sym.getComposition().getStage().$("wrongAnswerSound")[0].play();
         }
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_answerC}", "mousedown", function(sym, e) {
         var current = sym.getComposition().getStage().getVariable("index");
         
         if (current == 3 || current == 4){
         	sym.getSymbol("answerC").getSymbol("selection").stop("xOff");
         	sym.getComposition().getStage().$("correctAnswerSound")[0].play();
         }else{
         	sym.getSymbol("answerC").getSymbol("selection").stop("xOn");
         	sym.getComposition().getStage().$("wrongAnswerSound")[0].play();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         var questions = sym.getComposition().getStage().getVariable("questionValues");
         var answers = sym.getComposition().getStage().getVariable("answerValues");
         
         var question1 = questions[0];	
         var answer1 = answers[0][0];
         var answer2 = answers[0][1];
         var answer3 = answers[0][2];
         
         sym.$("Question").html(question1);
         
         // Change the text in an element
         sym.getSymbol("answerA").$("answer").html(answer1);
         sym.getSymbol("answerB").$("answer").html(answer2);
         sym.getSymbol("answerC").$("answer").html(answer3);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         var explainArr = sym.getComposition().getStage().getVariable("explainValues");
         var explaination = explainArr[0];
         
         sym.getComposition()
         	.getStage()
         		.getSymbol("Questions")
         			.getSymbol("Explaination")
         				.$("explaination")
         					.html(explaination);
         console.log(explaination);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_beginButton}", "click", function(sym, e) {
         sym.stop("question 1");

      });
      //Edge binding end

   })("Questions");
   //Edge symbol end:'Questions'

   //=========================================================
   
   //Edge symbol: 'selectAnswer'
   (function(symbolName) {   
   
   })("selectAnswer");
   //Edge symbol end:'selectAnswer'

   //=========================================================
   
   //Edge symbol: 'selectAnswerB'
   (function(symbolName) {   
   
   })("selectAnswerB");
   //Edge symbol end:'selectAnswerB'

   //=========================================================
   
   //Edge symbol: 'selectAnswerC'
   (function(symbolName) {   
   
   })("selectAnswerC");
   //Edge symbol end:'selectAnswerC'

   //=========================================================
   
   //Edge symbol: 'answerC'
   (function(symbolName) {   
   
   })("answerC");
   //Edge symbol end:'answerC'

   //=========================================================
   
   //Edge symbol: 'answerB'
   (function(symbolName) {   
   
   })("answerB");
   //Edge symbol end:'answerB'

   //=========================================================
   
   //Edge symbol: 'answerA'
   (function(symbolName) {   
   
   })("answerA");
   //Edge symbol end:'answerA'

   //=========================================================
   
   //Edge symbol: 'QuestionsSet'
   (function(symbolName) {   
   
   })("QuestionsSet");
   //Edge symbol end:'QuestionsSet'

   //=========================================================
   
   //Edge symbol: 'continueBtn'
   (function(symbolName) {   
   
   })("continueBtn");
   //Edge symbol end:'continueBtn'

   //=========================================================
   
   //Edge symbol: 'Explaination'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_continueBtn}", "click", function(sym, e) {
         
         var current = sym.getComposition().getStage().getVariable("index");
         
         sym.getComposition().getStage().$("navigateNextSound")[0].play();
         if (current == 2){
         	sym.getComposition().getStage().getSymbol("Questions").stop("question 2");
         }else if (current == 3){
         	sym.getComposition().getStage().getSymbol("Questions").stop("question 3");
         }else if (current == 4){
         	sym.getComposition().getStage().getSymbol("Questions").stop("question 4");
         }else if (current == 5){
         	sym.getComposition().getStage().getSymbol("Questions").stop("end");
         
         	sym.getComposition().getStage().$("applauseSound")[0].play();
         
         	sym.$("continueBtn").hide();
         
         }
         
         

      });
      //Edge binding end

   })("Explaination");
   //Edge symbol end:'Explaination'

   //=========================================================
   
   //Edge symbol: 'beginButton'
   (function(symbolName) {   
   
   })("beginButton");
   //Edge symbol end:'beginButton'

})(jQuery, AdobeEdge, "EDGE-4921344");