
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","keydown",function(sym,e){var element=sym.$("player")[0];var currentTop=element.style.top;var currentLeft=element.style.left;var px=currentTop.split("p");var px2=currentLeft.split("p");var X=parseInt(px2[0]);var Y=parseInt(px[0]);userCoor="X: "+X+" | "+"Y: "+Y;var coor=userCoor+"<br>"+sym.$("playerCoor").html();sym.$("playerCoor").html(coor);var outY=sym.getVariable("Y");var left=sym.getVariable("outLeft");var right=sym.getVariable("outRight");var outX=sym.getVariable("X");var top=sym.getVariable("outTop");var bottom=sym.getVariable("outBottom");var moveBy=25;var maxX=525;var minX=0;var maxY=525;var minY=0;var playerSize=25;var knockBack=150;if(X>maxX||X<minX||Y<minY||Y>maxY){sym.getSymbol("Barrier").$("laser1")[0].play();}
if(e.which==38){if(X==outX&&top==true){element.style.top=(Y-moveBy)+"px";}else if(Y>=moveBy){element.style.top=(Y-moveBy)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.top=(Y+knockBack)+"px";}}
if(e.which==40){if(X==outX&&bottom==true){element.style.top=(Y+moveBy)+"px";}else if(Y<=maxY-playerSize){element.style.top=(Y+moveBy)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.top=(Y-knockBack)+"px";}}
if(e.which==37){if(Y==outY&&left==true){element.style.left=(X-moveBy)+"px";}else if(X>=moveBy){element.style.left=(X-moveBy)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.left=(X+knockBack)+"px";}}
if(e.which==39){if(Y==outY&&right==true){element.style.left=(X+moveBy)+"px";}else if(X<=maxX-playerSize){element.style.left=(X+moveBy)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.left=(X-knockBack)+"px";}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("level",5);sym.setVariable("outLeft",false);sym.setVariable("outRight",false);sym.setVariable("outTop",false);sym.setVariable("outBottom",false);sym.setVariable("X",-1);sym.setVariable("Y",-1);sym.getSymbol("Timer").play();sym.$("door").hide();sym.getSymbol("player").play();sym.getSymbol("NPCs").getSymbol("NPC1").play();sym.getSymbol("NPCs2").getSymbol("NPC").play();sym.getSymbol("NPCs").play();sym.getSymbol("NPCs2").play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Barrier'
(function(symbolName){})("Barrier");
//Edge symbol end:'Barrier'

//=========================================================

//Edge symbol: 'Timer'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3500,function(sym,e){var randomSide;var randomExit;var door=sym.getComposition().getStage().$("door")[0];function getRandom(max,min,mod){var random=(Math.floor(Math.random()*(max))+min)*mod;return random;}
function setSide(randomSide,location){if(randomSide==1){sym.getComposition().getStage().setVariable("outLeft",false);sym.getComposition().getStage().setVariable("outRight",false);sym.getComposition().getStage().setVariable("outTop",true);sym.getComposition().getStage().setVariable("outBottom",false);door.style.top=-25+"px";door.style.left=location+"px";}else if(randomSide==2){sym.getComposition().getStage().setVariable("outLeft",false);sym.getComposition().getStage().setVariable("outRight",true);sym.getComposition().getStage().setVariable("outTop",false);sym.getComposition().getStage().setVariable("outBottom",false);door.style.left=550+"px";door.style.top=location+"px";}else if(randomSide==3){sym.getComposition().getStage().setVariable("outLeft",false);sym.getComposition().getStage().setVariable("outRight",false);sym.getComposition().getStage().setVariable("outTop",false);sym.getComposition().getStage().setVariable("outBottom",true);door.style.top=550+"px";door.style.left=location+"px";}else if(randomSide==4){sym.getComposition().getStage().setVariable("outLeft",true);sym.getComposition().getStage().setVariable("outRight",false);sym.getComposition().getStage().setVariable("outTop",false);sym.getComposition().getStage().setVariable("outBottom",false);door.style.left=-25+"px";door.style.top=location+"px";}}
randomExit=getRandom(20,1,25);randomSide=getRandom(4,1,1);sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("time").play();});
//Edge binding end
})("Timer");
//Edge symbol end:'Timer'

//=========================================================

//Edge symbol: 'time'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){var level=sym.getComposition().getStage().getVariable("level");var secondsAttr=sym.$("seconds")[0];var seconds=parseInt(sym.$("seconds").html());seconds=seconds+1;if(seconds==10){secondsAttr.style.left=-3+"px";}else if(seconds==100){secondsAttr.style.left=-13+"px";}else if(seconds==1000){secondsAttr.style.left=-23+"px";}
sym.$("seconds").html(seconds);sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("tenthsecond").play(0);});
//Edge binding end
})("time");
//Edge symbol end:'time'

//=========================================================

//Edge symbol: 'player'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("player");
//Edge symbol end:'player'

//=========================================================

//Edge symbol: 'collision'
(function(symbolName){})("collision");
//Edge symbol end:'collision'

//=========================================================

//Edge symbol: 'NPC'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33,function(sym,e){var level=sym.getComposition().getStage().getVariable("level");var element=sym.getComposition().getStage().$("player")[0];var playerCurrentTop=element.style.top;var playerCurrentLeft=element.style.left;var a=playerCurrentTop.split("p");var b=playerCurrentLeft.split("p");var playerCurrentX=parseInt(b[0]);var playerCurrentY=parseInt(a[0]);var elementNPC=sym.getComposition().getStage().$("NPCs")[0];var enemyCurrentTop=elementNPC.style.top;var enemyCurrentLeft=elementNPC.style.left;var a=enemyCurrentTop.split("p");var b=enemyCurrentLeft.split("p");var enemyCurrentX=parseInt(b[0]);var enemyCurrentY=parseInt(a[0]);if(enemyCurrentX<playerCurrentX){elementNPC.style.left=(enemyCurrentX+level)+"px";}else if(enemyCurrentX>playerCurrentX){elementNPC.style.left=(enemyCurrentX-level)+"px";}
if(enemyCurrentY<playerCurrentY){elementNPC.style.top=(enemyCurrentY+level)+"px";}else if(enemyCurrentY>playerCurrentY){elementNPC.style.top=(enemyCurrentY-level)+"px";}
if((enemyCurrentX>=playerCurrentX&&enemyCurrentX<=playerCurrentX+25)&&(enemyCurrentY>=playerCurrentY&&enemyCurrentY<=playerCurrentY+25)){sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").stop(0);sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").getSymbol("tenthsecond").stop(0);var seconds=sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").$("seconds").html();var tenthsecond=sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").getSymbol("tenthsecond").$("_10thsecond").html();var time=seconds+"."+tenthsecond;sym.getComposition().getStage().$("playerCoor").html("You LOSE! <br>"+"Your Time:<br> "+time+"s");}
sym.play(0);});
//Edge binding end
})("NPCs");
//Edge symbol end:'NPCs'

//=========================================================

//Edge symbol: 'NPC1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("NPC1");
//Edge symbol end:'NPC1'

//=========================================================

//Edge symbol: 'tenthsecond'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",100,function(sym,e){var tenth=parseInt(sym.$("_10thsecond").html());tenth=tenth+1;if(tenth==10){tenth=0;}
sym.$("_10thsecond").html(tenth);sym.play(0);});
//Edge binding end
})("tenthsecond");
//Edge symbol end:'tenthsecond'

//=========================================================

//=========================================================

//Edge symbol: 'NPC1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1500,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("NPC");
//Edge symbol end:'NPC'

//=========================================================

//Edge symbol: 'NPC'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",33,function(sym,e){var level=sym.getComposition().getStage().getVariable("level");var element=sym.getComposition().getStage().$("player")[0];var playerCurrentTop=element.style.top;var playerCurrentLeft=element.style.left;var a=playerCurrentTop.split("p");var b=playerCurrentLeft.split("p");var playerCurrentX=parseInt(b[0]);var playerCurrentY=parseInt(a[0]);var elementNPC=sym.getComposition().getStage().$("NPCs2")[0];var enemyCurrentTop=elementNPC.style.top;var enemyCurrentLeft=elementNPC.style.left;var a=enemyCurrentTop.split("p");var b=enemyCurrentLeft.split("p");var enemyCurrentX=parseInt(b[0]);var enemyCurrentY=parseInt(a[0]);if(enemyCurrentX<playerCurrentX){elementNPC.style.left=(enemyCurrentX+level)+"px";}else if(enemyCurrentX>playerCurrentX){elementNPC.style.left=(enemyCurrentX-level)+"px";}
if((enemyCurrentX==playerCurrentX)&&(enemyCurrentY==playerCurrentY)){sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").stop(0);sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").getSymbol("tenthsecond").stop(0);var seconds=sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").$("seconds").html();var tenthsecond=sym.getComposition().getStage().getSymbol("Timer").getSymbol("time").getSymbol("tenthsecond").$("_10thsecond").html();var time=seconds+"."+tenthsecond;sym.getComposition().getStage().$("playerCoor").html("You LOSE! <br>"+"Your Time:<br> "+time+"s");}
sym.play(0);});
//Edge binding end
})("NPCs2");
//Edge symbol end:'NPCs2'

//=========================================================

//Edge symbol: 'endScreen'
(function(symbolName){})("endScreen");
//Edge symbol end:'endScreen'
})(jQuery,AdobeEdge,"EDGE-103807847");