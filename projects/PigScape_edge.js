
(function($,Edge,compId){var _=null,y=true,n=false,e96='${_RectangleCopy2}',x67='ellipse',e95='${_RectangleCopy3}',x21='394px',e73='${_RectangleCopy}',x51='minutes',x92='NPCs',x30='45px',x83='Rectangle2Copy',x60='rgb(45, 45, 45)',x91='NPC1',e16='${_Barrier}',x63='13px',po='center',a='Base State',x86='rgba(255,255,0,1.00)',e88='${_Rectangle2}',d='display',x64='RectangleCopy',x61='rgba(98,98,98,1)',e87='${_Rectangle2Copy4}',e52='${_seconds}',x20='544px',rz='rotateZ',r='deg',x94='RectangleCopy2',i='none',x14='visible',x36='media/laser1.mp3',x62='5px',x82='Rectangle2',e75='${_Rectangle}',x80='8px',lf='left',e17='${_door}',ta='text-align',x34='283',x78='-1px',x32='laser2',e76='${_Ellipse}',x81='-47',x74='rgba(45,45,45,1)',x93='RectangleCopy3',bg='background-color',x72='player',x22='auto',x71='4',x70='-8',x55='outerBorder',e89='${_Rectangle2Copy}',fs='font-size',x8='600',x68='rgba(3,215,162,1.00)',e11='${_Text}',ov='overflow',e13='${_Stage}',x66='Ellipse',x9='stage',x38='Barrier',zy='scaleY',t='transform',x2='4.0.0.359',x65='50%',c='color',e40='${_barrier}',x18='rgba(45,45,45,1.00)',x59='Rectangle',x42='rgba(15,0,255,1.00)',x26='rgba(82,82,82,0.00)',x3='both',e90='${_Rectangle2Copy5}',x84='Rectangle2Copy5',x58='18px',x69='collision',x24='rgba(255,0,0,1.00)',x37='laser1',x46='0',x27='139',x54='23px',x49='36px',x='text',x79='4px',x57='3px',x25='solid',m='rect',e15='${_NPCs}',zx='scaleX',h='height',xc='rgba(0,0,0,1)',e53='${_minutes}',x31='media/laser2.mp3',x4='rgba(67,0,143,1.00)',x48='26px',x47='Timer',x45='39',p='px',o='opacity',x1='4.0.0',x12='rgba(0,0,0,1.00)',x28='402',x43='rgb(255, 0, 0)',x44='time',e39='${symbolSelector}',dt='Default Timeline',bc='border-color',x7='Arial, Helvetica, sans-serif',x41='rgba(0,7,253,1.00)',l='normal',x50='seconds',x33='audio',x19='0px',x23='barrier',s='style',e77='${_outerBorder}',w='width',x35='369',x85='Rectangle2Copy4',ql='linear',x10='rgba(255,255,255,1.00)',x6='20',x29='320px',x56='rgba(98,98,98,1.00)',tp='top';var im='images/';var s5="Bao Tran";var fonts={};var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:x3,iS:a,gpu:n,rI:n,cn:{dom:[{id:'Barrier',t:m,r:['-2px','-3px','auto','auto','auto','auto'],tf:[[],[],[],['1.00901','1.00811']]},{id:'door',t:m,r:['525px','-25px','25px','25px','auto','auto'],f:[x4,[0,[['rgba(0,0,0,1.00)',0],['rgba(255,255,255,1.00)',18],['rgba(0,0,0,1.00)',34],['rgba(255,255,255,1.00)',49],['rgba(0,0,0,1.00)',62],['rgba(255,255,255,1.00)',76],['rgba(0,0,0,1.00)',88],['rgba(255,255,255,1.00)',100]]]],s:[1,"rgba(45,45,45,1.00)",i]},{id:'player',t:m,r:['250','375','auto','auto','auto','auto']},{id:'Timer',t:m,r:['209','-36','auto','auto','auto','auto']},{id:'NPCs',t:m,r:['0','0','auto','auto','auto','auto']},{id:'Text',t:x,r:['436px','560px','114px','25px','auto','auto'],text:s5,align:"center",n:[x7,x6,"rgba(255,255,255,1.00)",x8,i,l]}],sI:[{id:'Timer',sN:'Timer',a:{}},{id:'player',sN:'player'},{id:'NPCs',sN:'NPCs'},{id:'Barrier',sN:'Barrier',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"Barrier":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x19,x19,x20,x21,x22,x22],id:x23,s:[3,x24,x25],t:m,f:[x26]},{pr:x22,r:[x27,x28,x29,x30,x22,x22],sr:[x31],id:x32,t:x33,tag:x33},{pr:x22,r:[x34,x35,x29,x30,x22,x22],sr:[x36],id:x37,t:x33,tag:x33}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"Timer":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x44,t:m,r:[x45,x46,x22,x22,x22,x22]}],sI:[{id:'time',sN:'time',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:3500,a:n,tt:[]}}},"time":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x48,x19,x48,x49,x22,x22],n:[x7,30,xc,l,i,''],id:x50,text:x46,align:po,t:x},{r:[x19,x19,x48,x49,x22,x22],n:[x7,30,xc,l,i,''],id:x51,text:x46,align:po,t:x}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1000,a:n,tt:[]}}},"player":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x19,x19,x54,x54,x22,x22],id:x55,s:[1,x18,x25],t:m,f:[x56]},{r:[x57,x57,x58,x58,x22,x22],id:x59,s:[1,x60,x25],t:m,f:[x61]},{r:[x62,x62,x63,x63,x22,x22],id:x64,s:[1,x60,x25],t:m,f:[x61]},{r:[x62,x62,x63,x63,x22,x22],br:[x65,x65,x65,x65],id:x66,s:[1,x60,x25],t:x67,f:[x68]},{id:x69,t:m,r:[x70,x71,x22,x22,x22,x22]}],sI:[{id:'collision',sN:'collision',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1500,a:n,tt:[]}}},"collision":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x78,x79,x80,x19,x22,x22],tf:[[],[x81]],t:m,id:x82,s:[1,x24,x25],v:i,f:[x24]},{r:[x19,x79,x80,x19,x22,x22],tf:[[],[x81]],t:m,id:x83,s:[1,x24,x25],v:i,f:[x24]},{r:[x19,x79,x80,x19,x22,x22],tf:[[],[x81]],t:m,id:x84,s:[1,x24,x25],v:i,f:[x24]},{r:[x19,x79,x80,x19,x22,x22],tf:[[],[x81]],t:m,id:x85,s:[1,x24,x25],v:i,f:[x24]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:2167,a:n,tt:[]}}},"NPCs":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x91,t:m,r:[x46,x46,x22,x22,x22,x22]}],sI:[{id:'NPC1',sN:'NPC1',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:250,a:n,tt:[]}}},"NPC1":{v:x1,mv:x1,b:x2,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x19,x19,x54,x54,x22,x22],id:x55,s:[1,x18,x25],t:m,f:[x56]},{r:[x57,x57,x58,x58,x22,x22],id:x93,s:[1,x60,x25],t:m,f:[x61]},{r:[x62,x62,x63,x63,x22,x22],id:x94,s:[1,x60,x25],t:m,f:[x61]},{r:[x62,x62,x63,x63,x22,x22],br:[x65,x65,x65,x65],id:x66,s:[1,x60,x25],t:x67,f:[x68]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1500,a:n,tt:[]}}}};var S1=symbols[x9];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e11).P(c,x10,c).P("font-weight",600,_,_,"").P(fs,20,_,_,p);A1.A(e13).P(bg,x12,c).P(ov,x14).P(h,550).P(w,550);A1.A(e15).P(lf,250).P(tp,25);A1.A(e16).P(zx,1.00901,t,_,"").P(tp,-3,_,_,p).P(lf,-2).P(zy,1.00811,t,_,"");A1.A(e17).P(bg,x4,c).P("border-style",i).P("border-width",1).P(w,25).P(tp,-25).P(h,25).P(bc,x18,c).P("background-image",[0,[['rgba(0,0,0,1.00)',0],['rgba(255,255,255,1.00)',18],['rgba(0,0,0,1.00)',34],['rgba(255,255,255,1.00)',49],['rgba(0,0,0,1.00)',62],['rgba(255,255,255,1.00)',76],['rgba(0,0,0,1.00)',88],['rgba(255,255,255,1.00)',100]]],"gradient").P(lf,525);var S2=symbols[x38];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e39).P(h,555).P(w,555);A2.A(e40).P(bg,x26,c).P(tp,0).P("border-width",5).P(h,545).P(o,1,_,_,"").P(lf,0,_,_,p).P(w,545).P(bc,x41,c).T(0,x24,0.133,ql).T(0.5,x42,0.5,_,x43);var S3=symbols[x47];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e39).P(h,36).P(w,129);var S4=symbols[x44];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e52).P(tp,0).P(ta,po).P(w,26).P(lf,26).P(fs,30);A4.A(e53).P(tp,0).P(ta,po).P(w,26).P(lf,0).P(fs,30);A4.A(e39).P(h,36).P(w,52);var S5=symbols[x72];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e39).P(h,25).P(w,25);A5.A(e73).P(tp,5).P(h,13).P(lf,5).P(w,13).P(bc,x74,c).T(0.75,x56,0.375,ql).T(1.125,x18,0.375,_,x61);A5.A(e75).P(tp,3).P(h,18).P(lf,3).P(w,18).P(bc,x74,c).T(0.375,x56,0.375,ql).T(0.75,x18,0.375,_,x61);A5.A(e76).P(bg,x12,c).P(o,1,_,_,"").T(0,0,0.375,ql).T(1.125,1,0.375);A5.A(e77).P(bg,x56,c).P(tp,0).P(lf,0).P(h,23).P("border-style",x25).P("border-width",1).P(w,23).P(bc,x74,c).T(0,x56,0.375,ql).T(0.375,x18,0.375,_,x61);var S6=symbols[x69];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e39).P(h,10).P(w,9);A6.A(e87).P(bg,x24,c).P("border-style",x25).P(h,0).P(bc,x86,c).P(tp,4).T(2,14,0.167,ql).P(rz,39,t,_,r).T(2.167,39).P(d,i).T(0,i).P(lf,0,_,_,p).T(2,-2,0.167).P(w,8).T(2,20,0.167);A6.A(e88).P(bg,x24,c).P(rz,-47,t,_,r).P("border-style",x25).P(h,0,_,_,p).P(bc,x24,c).P(tp,4).T(2,-2,0.167,ql).P(d,i).T(0,i).P(lf,0).T(2,-3,0.167).P(w,8).T(2,25,0.167);A6.A(e89).P(bg,x24,c).P(rz,-75,t,_,r).P("border-style",x25).P(h,0,_,_,p).P(bc,x86,c).P(d,i).T(0,i).P(tp,4).T(2,-3,0.167,ql).P(lf,0).T(2,-7,0.167).P(w,8).T(2,20,0.167);A6.A(e90).P(bg,x24,c).P("border-style",x25).P(h,0).P(bc,x24,c).P(tp,4).T(2,19,0.167,ql).P(rz,67,t,_,r).T(2.167,67).P(d,i).T(0,i).P(lf,0,_,_,p).T(2,-6,0.167).P(w,8).T(2,25,0.167);var S7=symbols[x92];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e39).P(h,25).P(w,25);var S8=symbols[x91];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e39).P(h,25).P(w,25);A8.A(e77).P(bg,x56,c).P(tp,0).P("border-width",1).P("border-style",x25).P(h,23).P(lf,0).P(w,23).P(bc,x86,c).T(0,x56,0.375,ql).T(0.375,x86,0.375,_,x61);A8.A(e95).P(tp,3).P(h,18).P(lf,3).P(w,18).P(bc,x74,c).T(0.375,x56,0.375,ql).T(0.75,x18,0.375,_,x61);A8.A(e76).P(lf,5).P(tp,5).P(bg,x86,c).T(0.75,x86).P(o,1,_,_,"").T(0,0,0.375,ql).T(1.125,1,0.375);A8.A(e96).P(tp,5).P(h,13).P(lf,5).P(w,13).P(bc,x74,c).T(0.75,x56,0.375,ql).T(1.125,x18,0.375,_,x61);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-103807847");