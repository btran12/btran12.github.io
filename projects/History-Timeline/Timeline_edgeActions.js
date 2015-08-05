
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){var width=window.innerWidth;var half=width/2;var gap=half-287.5;this.onMove=function(posX,posY){timelineCtrl=(Number(posX)-gap)*10;sym.stop(timelineCtrl);}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Stage}","mousemove",function(sym,e){this.onMove(e.pageX,e.pageY);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Timeline'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Event1}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("Andrew Johnson is the Seventeenth President of the United States (1865-1869)");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("AndrewJohnsonImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event1}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("AndrewJohnsonImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event2}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Civil Rights Act of 1866, enacted April 9, 1866, was the first United States \
         federal law to define US citizenship and affirmed that all citizens were equally protected \
         by the law. It was mainly intended to protect the civil rights of African-Americans, in the \
         wake of the American Civil War.");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("CRAImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event2}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("CRAImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event3}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Ku Klux Klan is the name of three distinct movements in the United States.");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("KKKImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event3}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("KKKImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event4}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Alaska Purchase was the United States' acquisition of Alaska from the Russian Empire \
         in 1867 by a treaty ratified by the U.S. Senate.");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("AlaskaPurchImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event5}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("Ulysses S. Grant was the 18th President of the United States (1869–77)");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("UlyssesGrantImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event6}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Great Chicago Fire was a conflagration that burned from Sunday, October 8, \
         to early Tuesday, October 10, 1871. The fire killed up to 300 people, destroyed roughly 3.3 \
         square miles of Chicago, Illinois, and left more than 100,000 residents homeless");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("ChicagoFireImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event11}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Nez Perce War was an armed conflict between several bands of the Nez Perce tribe \
         of Native Americans and their allies, a small band of the Palouse tribe led by Red Echo \
         (Hahtalekin) and Bald Head (Husishusis Kute), against the United States Army.");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("NezWarImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event10}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Battle of the Little Bighorn, was an armed engagement between combined forces \
         of the Lakota, Northern Cheyenne, and Arapaho tribes, against the 7th Cavalry Regiment of the \
         United States Army.");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("BighornImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event9}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Civil Rights Act of 1875 sometimes called Enforcement Act or Force Act, \
         was a United States federal law enacted during the Reconstruction Era that guaranteed \
         African Americans equal treatment in public accommodations, public transportation, and \
         prohibited exclusion from jury service. ");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("CRAImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event8}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("The Red River War was a military campaign launched by the United States Army in 1874 \
         to remove the Comanche, Kiowa, Southern Cheyenne, and Arapaho Native American tribes from the \
         Southern Plains and forcibly relocate them to reservations in Indian Territory. ");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("RedWarImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event7}","mouseover",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("Yellowstone National Park is located primarily in the U.S. state of Wyoming, \
         although it also extends into Montana and Idaho. It was established by the U.S. Congress and \
         signed into law by President Ulysses S. Grant on March 1, 1872.");sym.getComposition().getStage().getSymbol("InformationArea").play();sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("YellowstoneImg").stop("on");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event7}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("YellowstoneImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event8}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("RedWarImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event9}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("CRAImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event10}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("BighornImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event11}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("NezWarImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event6}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("ChicagoFireImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event5}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("UlyssesGrantImg").stop("off");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Event4}","mouseout",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("");sym.getComposition().getStage().getSymbol("InformationArea").getSymbol("AlaskaPurchImg").stop("off");});
//Edge binding end
})("Timeline");
//Edge symbol end:'Timeline'

//=========================================================

//Edge symbol: 'TimeBar'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_Period1}","mouseover",function(sym,e){var div=sym.$("Period1")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period1}","mouseout",function(sym,e){var div=sym.$("Period1")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period2}","mouseover",function(sym,e){var div=sym.$("Period2")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period2}","mouseout",function(sym,e){var div=sym.$("Period2")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period3}","mouseover",function(sym,e){var div=sym.$("Period3")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period3}","mouseout",function(sym,e){var div=sym.$("Period3")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period4}","mouseover",function(sym,e){var div=sym.$("Period4")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period4}","mouseout",function(sym,e){var div=sym.$("Period4")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period5}","mouseover",function(sym,e){var div=sym.$("Period5")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period5}","mouseout",function(sym,e){var div=sym.$("Period5")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period7}","mouseover",function(sym,e){var div=sym.$("Period7")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period7}","mouseout",function(sym,e){var div=sym.$("Period7")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period6}","mouseover",function(sym,e){var div=sym.$("Period6")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period6}","mouseout",function(sym,e){var div=sym.$("Period6")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period8}","mouseover",function(sym,e){var div=sym.$("Period8")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period8}","mouseout",function(sym,e){var div=sym.$("Period8")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period13}","mouseover",function(sym,e){var div=sym.$("Period13")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period13}","mouseout",function(sym,e){var div=sym.$("Period13")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period12}","mouseover",function(sym,e){var div=sym.$("Period12")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period12}","mouseout",function(sym,e){var div=sym.$("Period12")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period11}","mouseover",function(sym,e){var div=sym.$("Period11")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period11}","mouseout",function(sym,e){var div=sym.$("Period11")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period10}","mouseover",function(sym,e){var div=sym.$("Period10")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period10}","mouseout",function(sym,e){var div=sym.$("Period10")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period9}","mouseover",function(sym,e){var div=sym.$("Period9")[0];div.style.borderColor="#27ff3b";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period9}","mouseout",function(sym,e){var div=sym.$("Period9")[0];div.style.borderColor="#273cff";});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period1}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Abraham Lincoln assassinated <br> \
          Andrew Jackson elected as the Seventeenth President <br> \
          Nevada admissioned to the US <br> \
          United States Civil War ends");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period2}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Civil Rights Act of 1866 <br> \
          Ku Klux Klan founded");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period3}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Nebraska admissioned to the US <br> \
          Alaska Purchase from Russia");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period4}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          ");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period5}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Ulysses Simpson Grant elected as the Eighteenth President of the United States");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period6}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          ");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period7}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Great Chicago Fire <br> \
          Treaty of Washington with Canada regarding the Dominion of Canada");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period8}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Yellowstone National Park established");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period9}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          ");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period10}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Red River Wars");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period11}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Civil Rights Act of 1875");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period12}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Battle of the Little Bighorn");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Period13}","click",function(sym,e){sym.getComposition().getStage().getSymbol("InformationArea").$("Text").html("<ins>Events That Happened</ins>:<br><br> \
          Rutherford Birchard Hayes elected as the Nineteeth President of the United States <br>\
          Colorado admissioned to the US <br> \
          Nez Perce War");sym.getComposition().getStage().getSymbol("InformationArea").play();});
//Edge binding end
})("TimeBar");
//Edge symbol end:'TimeBar'

//=========================================================

//Edge symbol: 'InformationArea'
(function(symbolName){})("InformationArea");
//Edge symbol end:'InformationArea'

//=========================================================

//Edge symbol: 'AndrewJohnsonImg'
(function(symbolName){})("AndrewJohnsonImg");
//Edge symbol end:'AndrewJohnsonImg'

//=========================================================

//Edge symbol: 'UlyssesGrantImg'
(function(symbolName){})("UlyssesGrantImg");
//Edge symbol end:'UlyssesGrantImg'

//=========================================================

//Edge symbol: 'CRAImg'
(function(symbolName){})("CRAImg");
//Edge symbol end:'CRAImg'

//=========================================================

//Edge symbol: 'YellowstoneImg'
(function(symbolName){})("YellowstoneImg");
//Edge symbol end:'YellowstoneImg'

//=========================================================

//Edge symbol: 'NezWarImg'
(function(symbolName){})("NezWarImg");
//Edge symbol end:'NezWarImg'

//=========================================================

//Edge symbol: 'KKKImg'
(function(symbolName){})("KKKImg");
//Edge symbol end:'KKKImg'

//=========================================================

//Edge symbol: 'ChicagoFireImg'
(function(symbolName){})("ChicagoFireImg");
//Edge symbol end:'ChicagoFireImg'

//=========================================================

//Edge symbol: 'AlaskaPurchaseImg'
(function(symbolName){})("AlaskaPurchaseImg");
//Edge symbol end:'AlaskaPurchaseImg'

//=========================================================

//Edge symbol: 'AlaskaImg'
(function(symbolName){})("AlaskaImg");
//Edge symbol end:'AlaskaImg'

//=========================================================

//Edge symbol: 'AlaskaPurchImg'
(function(symbolName){})("AlaskaPurchImg");
//Edge symbol end:'AlaskaPurchImg'

//=========================================================

//Edge symbol: 'BighornImg'
(function(symbolName){})("BighornImg");
//Edge symbol end:'BighornImg'

//=========================================================

//Edge symbol: 'RedWarImg'
(function(symbolName){})("RedWarImg");
//Edge symbol end:'RedWarImg'
})(jQuery,AdobeEdge,"EDGE-18366958");