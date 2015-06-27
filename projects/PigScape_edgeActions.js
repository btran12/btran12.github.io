
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","keydown",function(sym,e){var element=sym.$("player")[0];var currentTop=element.style.top;var currentLeft=element.style.left;var px=currentTop.split("p");var px2=currentLeft.split("p");var X=parseInt(px2[0]);var Y=parseInt(px[0]);var outY=sym.getVariable("Y");var left=sym.getVariable("outLeft");var right=sym.getVariable("outRight");var outX=sym.getVariable("X");var top=sym.getVariable("outTop");var bottom=sym.getVariable("outBottom");if(X>525||X<0||Y<0||Y>525){sym.getSymbol("Barrier").$("laser1")[0].play();}
if(e.which==38){if(X==outX&&top==true){element.style.top=(Y-25)+"px";}else if(Y>=25){element.style.top=(Y-25)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.top=(Y+150)+"px";}}
if(e.which==40){if(X==outX&&bottom==true){element.style.top=(Y+25)+"px";}else if(Y<=500){element.style.top=(Y+25)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.top=(Y-150)+"px";}}
if(e.which==37){if(Y==outY&&left==true){element.style.left=(X-25)+"px";}else if(X>=25){element.style.left=(X-25)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.left=(X+150)+"px";}}
if(e.which==39){if(Y==outY&&right==true){element.style.left=(X+25)+"px";}else if(X<=500){element.style.left=(X+25)+"px";}else{sym.getSymbol("Barrier").play(0);sym.getSymbol("Barrier").$("laser2")[0].play(0);element.style.left=(X-150)+"px";}}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.setVariable("outLeft",false);sym.setVariable("outRight",false);sym.setVariable("outTop",false);sym.setVariable("outBottom",false);sym.setVariable("X",-1);sym.setVariable("Y",-1);sym.getSymbol("Timer").play();sym.getSymbol("player").play();sym.getSymbol("NPCs").getSymbol("NPC1").play();});
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
randomExit=getRandom(20,1,25);sym.getComposition().getStage().setVariable("X",randomExit);sym.getComposition().getStage().setVariable("Y",randomExit);randomSide=getRandom(4,1,1);setSide(randomSide,randomExit);sym.play(0);});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.getSymbol("time").play();});
//Edge binding end
})("Timer");
//Edge symbol end:'Timer'

//=========================================================

//Edge symbol: 'time'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){var seconds=parseInt(sym.$("seconds").html());if(seconds<59){seconds=seconds+1;sym.$("seconds").html(seconds);sym.play(0);}else{var minutes=parseInt(sym.$("minutes").html());if(minutes<60){minutes=minutes+1;sym.$("minutes").html(minutes);sym.$("seconds").html(0);sym.play(0);}}});
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
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",250,function(sym,e){var element=sym.getComposition().getStage().$("player")[0];var playerCurrentTop=element.style.top;var playerCurrentLeft=element.style.left;var a=playerCurrentTop.split("p");var b=playerCurrentLeft.split("p");var playerCurrentX=parseInt(b[0]);var playerCurrentY=parseInt(a[0]);var elementNPC=sym.getComposition().getStage().$("NPCs")[0];var enemyCurrentTop=elementNPC.style.top;var enemyCurrentLeft=elementNPC.style.left;var a=enemyCurrentTop.split("p");var b=enemyCurrentLeft.split("p");var enemyCurrentX=parseInt(b[0]);var enemyCurrentY=parseInt(a[0]);if(enemyCurrentY!=playerCurrentY){elementNPC.style.top=(enemyCurrentY+5)+"px";}
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
})(jQuery,AdobeEdge,"EDGE-103807847");