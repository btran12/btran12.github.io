/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "horizontal",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'video',
                type: 'rect',
                rect: ['0px', '0px','560px','315px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'Questions',
                type: 'rect',
                rect: ['0', '349','auto','auto','auto', 'auto']
            },
            {
                id: 'applauseSound',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['72', '733','320px','45px','auto', 'auto'],
                source: ['media/applause.mp3','media/applause.wav'],
                preload: 'auto'
            },
            {
                id: 'correctAnswerSound',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['268', '640','320px','45px','auto', 'auto'],
                source: ['media/correctAnswer.mp3','media/correctAnswer.wav'],
                preload: 'auto'
            },
            {
                id: 'navigateNextSound',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['154', '611','320px','45px','auto', 'auto'],
                source: ['media/navigateNext.mp3','media/navigateNext.wav'],
                preload: 'auto'
            },
            {
                id: 'wrongAnswerSound',
                display: 'none',
                type: 'audio',
                tag: 'audio',
                rect: ['228', '679','320px','45px','auto', 'auto'],
                source: ['media/wrongAnswer.mp3','media/wrongAnswer.wav'],
                preload: 'auto'
            }],
            symbolInstances: [
            {
                id: 'Questions',
                symbolName: 'Questions',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,248,248,1.00)'],
                ["style", "width", '564px'],
                ["style", "height", '573px'],
                ["style", "overflow", 'visible']
            ],
            "${_Questions}": [
                ["style", "top", '332px'],
                ["transform", "scaleX", '0.99644']
            ],
            "${_video}": [
                ["style", "top", '0px'],
                ["style", "height", '315px'],
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "left", '0px'],
                ["style", "width", '560px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"Questions": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '560px', '234px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'Background',
                    stroke: [2, 'rgb(0, 0, 0)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(255,255,255,1.00)']
                },
                {
                    display: 'none',
                    type: 'rect',
                    rect: ['0', '61', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Explaination'
                },
                {
                    rect: ['7px', '0px', '533px', '32px', 'auto', 'auto'],
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    id: 'Question',
                    text: '',
                    display: 'none',
                    type: 'text'
                },
                {
                    rect: ['176', '93', 'auto', 'auto', 'auto', 'auto'],
                    id: 'beginButton',
                    display: 'block',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['0px', '61px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'answerA',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['0px', '111px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'answerB',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                },
                {
                    rect: ['0px', '161px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'answerC',
                    display: 'none',
                    cursor: ['pointer'],
                    type: 'rect'
                }
            ],
            symbolInstances: [
            {
                id: 'answerB',
                symbolName: 'answerB',
                autoPlay: {

               }
            },
            {
                id: 'answerC',
                symbolName: 'answerC',
                autoPlay: {

               }
            },
            {
                id: 'beginButton',
                symbolName: 'beginButton',
                autoPlay: {

               }
            },
            {
                id: 'Explaination',
                symbolName: 'Explaination',
                autoPlay: {

               }
            },
            {
                id: 'answerA',
                symbolName: 'answerA',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_Question}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '32px'],
                ["color", "color", 'rgba(4,191,22,1.00)'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '7px'],
                ["style", "font-size", '24px']
            ],
            "${_beginButton}": [
                ["style", "cursor", 'pointer'],
                ["style", "display", 'block']
            ],
            "${_Explaination}": [
                ["style", "display", 'none'],
                ["style", "left", '3px']
            ],
            "${_answerC}": [
                ["style", "top", '161px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '236px'],
                ["style", "width", '562px']
            ],
            "${_answerB}": [
                ["style", "top", '111px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_answerA}": [
                ["style", "top", '61px'],
                ["style", "display", 'none'],
                ["style", "cursor", 'pointer'],
                ["style", "left", '0px']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '560px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4500,
            autoPlay: false,
            labels: {
                "Begin Quiz": 0,
                "question 1": 500,
                "correct 1": 1000,
                "question 2": 1500,
                "correct 2": 2000,
                "question 3": 2500,
                "correct 3": 3000,
                "question 4": 3500,
                "correct 4": 4000,
                "end": 4500
            },
            timeline: [
                { id: "eid119", tween: [ "style", "${_beginButton}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
                { id: "eid117", tween: [ "style", "${_answerA}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${_answerA}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid56", tween: [ "style", "${_answerA}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutSine" },
                { id: "eid60", tween: [ "style", "${_answerA}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_answerA}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid70", tween: [ "style", "${_answerA}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid75", tween: [ "style", "${_answerA}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid80", tween: [ "style", "${_answerA}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid85", tween: [ "style", "${_answerA}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid105", tween: [ "style", "${_Explaination}", "display", 'none', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid57", tween: [ "style", "${_Explaination}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid58", tween: [ "style", "${_Explaination}", "display", 'none', { fromValue: 'block'}], position: 1500, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Explaination}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid69", tween: [ "style", "${_Explaination}", "display", 'none', { fromValue: 'block'}], position: 2500, duration: 0 },
                { id: "eid77", tween: [ "style", "${_Explaination}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 },
                { id: "eid78", tween: [ "style", "${_Explaination}", "display", 'none', { fromValue: 'block'}], position: 3500, duration: 0 },
                { id: "eid83", tween: [ "style", "${_Explaination}", "display", 'block', { fromValue: 'none'}], position: 4000, duration: 0 },
                { id: "eid115", tween: [ "style", "${_answerC}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid111", tween: [ "style", "${_answerC}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid54", tween: [ "style", "${_answerC}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutSine" },
                { id: "eid62", tween: [ "style", "${_answerC}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid67", tween: [ "style", "${_answerC}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid72", tween: [ "style", "${_answerC}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid73", tween: [ "style", "${_answerC}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid82", tween: [ "style", "${_answerC}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid87", tween: [ "style", "${_answerC}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid118", tween: [ "style", "${_Question}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid114", tween: [ "style", "${_Question}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid53", tween: [ "style", "${_Question}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutSine" },
                { id: "eid59", tween: [ "style", "${_Question}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid64", tween: [ "style", "${_Question}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid68", tween: [ "style", "${_Question}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid76", tween: [ "style", "${_Question}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid79", tween: [ "style", "${_Question}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid84", tween: [ "style", "${_Question}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 },
                { id: "eid116", tween: [ "style", "${_answerB}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${_answerB}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
                { id: "eid55", tween: [ "style", "${_answerB}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0, easing: "easeInOutSine" },
                { id: "eid61", tween: [ "style", "${_answerB}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid66", tween: [ "style", "${_answerB}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid71", tween: [ "style", "${_answerB}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
                { id: "eid74", tween: [ "style", "${_answerB}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
                { id: "eid81", tween: [ "style", "${_answerB}", "display", 'block', { fromValue: 'none'}], position: 3500, duration: 0 },
                { id: "eid86", tween: [ "style", "${_answerB}", "display", 'none', { fromValue: 'block'}], position: 4000, duration: 0 }            ]
        }
    }
},
"selectAnswer": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                    id: 'Text2',
                    text: 'a.',
                    align: 'center',
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    transform: [[0, 0], ['95'], ['18']],
                    rect: ['-1px', '-1px', '30px', '30px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    display: 'none',
                    stroke: [2, 'rgba(255,0,0,1.00)', 'solid'],
                    id: 'circle',
                    fill: ['rgba(255,255,255,0.00)']
                },
                {
                    rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                    id: 'X',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/x_spot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_X}": [
                ["style", "top", '0px'],
                ["style", "height", '32px'],
                ["style", "display", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '32px']
            ],
            "${_Text2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "left", '0px']
            ],
            "${_circle}": [
                ["style", "top", '-1px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "border-width", '2px'],
                ["transform", "skewX", '25deg'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(255,0,0,1.00)'],
                ["style", "left", '-1px'],
                ["color", "background-color", 'rgba(255,255,255,0.00)']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "On": 500,
                "Off": 750,
                "xOn": 1500,
                "xOff": 2000
            },
            timeline: [
                { id: "eid8", tween: [ "transform", "${_circle}", "skewX", '25deg', { fromValue: '25deg'}], position: 500, duration: 0, easing: "easeInOutSine" },
                { id: "eid94", tween: [ "style", "${_X}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid95", tween: [ "style", "${_X}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid3", tween: [ "style", "${_circle}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutSine" },
                { id: "eid4", tween: [ "style", "${_circle}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeInOutSine" }            ]
        }
    }
},
"selectAnswerB": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                    id: 'Text2Copy',
                    text: 'b.',
                    align: 'center',
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    transform: [[0, 0], [], ['25']],
                    rect: ['0px', '0px', '28px', '28px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    display: 'none',
                    stroke: [2, 'rgb(255, 0, 0)', 'solid'],
                    id: 'circle',
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                    id: 'X',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/x_spot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_X}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '32px'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '32px']
            ],
            "${_Text2Copy}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "left", '0px']
            ],
            "${_circle}": [
                ["style", "display", 'none'],
                ["transform", "skewX", '25deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "On": 500,
                "Off": 750,
                "xOn": 1500,
                "xOff": 2000
            },
            timeline: [
                { id: "eid96", tween: [ "style", "${_X}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid97", tween: [ "style", "${_X}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid9", tween: [ "style", "${_circle}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutSine" },
                { id: "eid10", tween: [ "style", "${_circle}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeInOutSine" }            ]
        }
    }
},
"selectAnswerC": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'text',
                    rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                    id: 'Text2Copy2',
                    text: 'c.',
                    align: 'center',
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    transform: [[0, 0], [], ['25']],
                    rect: ['0px', '0px', '28px', '28px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    type: 'ellipse',
                    display: 'none',
                    stroke: [2, 'rgb(255, 0, 0)', 'solid'],
                    id: 'Ellipse3',
                    fill: ['rgba(255,255,255,0)']
                },
                {
                    rect: ['0px', '0px', '32px', '32px', 'auto', 'auto'],
                    id: 'X',
                    type: 'image',
                    display: 'none',
                    fill: ['rgba(0,0,0,0)', 'images/x_spot.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Text2Copy2}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'center'],
                ["style", "left", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '32px']
            ],
            "${_X}": [
                ["style", "top", '0px'],
                ["style", "display", 'none'],
                ["style", "height", '32px'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${_Ellipse3}": [
                ["style", "display", 'none'],
                ["transform", "skewX", '25deg']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "On": 500,
                "Off": 750,
                "xOn": 1500,
                "xOff": 2000
            },
            timeline: [
                { id: "eid98", tween: [ "style", "${_X}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
                { id: "eid99", tween: [ "style", "${_X}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Ellipse3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInOutSine" },
                { id: "eid12", tween: [ "style", "${_Ellipse3}", "display", 'none', { fromValue: 'block'}], position: 750, duration: 0, easing: "easeInOutSine" }            ]
        }
    }
},
"answerC": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'selection',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['38px', '0px', '502px', '32px', 'auto', 'auto'],
                    id: 'answer',
                    text: '',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, 'rgba(215,154,22,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'selection',
                symbolName: 'selectAnswerC',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_answer}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(215,154,22,1.00)'],
                ["style", "height", '32px'],
                ["style", "font-family", '\'Trebuchet MS\', Arial, Helvetica, sans-serif'],
                ["style", "left", '38px'],
                ["style", "width", '502px']
            ],
            "${_selection}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '540px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"answerB": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'selection',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['38px', '0px', '502px', '32px', 'auto', 'auto'],
                    id: 'answer',
                    text: '',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, 'rgba(215,154,22,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'selection',
                symbolName: 'selectAnswerB',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_selection}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_answer}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(215,154,22,1.00)'],
                ["style", "height", '32px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '38px'],
                ["style", "width", '502px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '540px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"answerA": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'selection',
                    type: 'rect',
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto']
                },
                {
                    rect: ['38px', '0px', '502px', '32px', 'auto', 'auto'],
                    id: 'answer',
                    text: '',
                    font: ['Trebuchet MS, Arial, Helvetica, sans-serif', 24, 'rgba(215,154,22,1.00)', 'normal', 'none', ''],
                    type: 'text'
                }
            ],
            symbolInstances: [
            {
                id: 'selection',
                symbolName: 'selectAnswer',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_selection}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${_answer}": [
                ["style", "top", '0px'],
                ["color", "color", 'rgba(215,154,22,1.00)'],
                ["style", "height", '32px'],
                ["style", "font-family", 'Trebuchet MS, Arial, Helvetica, sans-serif'],
                ["style", "left", '38px'],
                ["style", "width", '502px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '540px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"QuestionsSet": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '193px'],
                ["style", "width", '540px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            labels: {
                "correct 1": 1000,
                "question 2": 1500,
                "correct 2": 2000
            },
            timeline: [
            ]
        }
    }
},
"continueBtn": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '111px', '32px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'rectangle',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(255,207,153,1.00)']
                },
                {
                    type: 'text',
                    rect: ['11px', '0px', '88px', '32px', 'auto', 'auto'],
                    id: 'Text',
                    text: 'Continue',
                    align: 'left',
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 24, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_rectangle}": [
                ["color", "background-color", 'rgba(255,207,153,1.00)']
            ],
            "${_Text}": [
                ["style", "left", '11px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '32px'],
                ["style", "width", '111px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"Explaination": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['10px', '0px', '540px', '228px', 'auto', 'auto'],
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 22, 'rgba(14,51,212,1.00)', '400', 'none', 'normal'],
                    id: 'explaination',
                    text: '',
                    align: 'justify',
                    type: 'text'
                },
                {
                    id: 'continueBtn',
                    type: 'rect',
                    cursor: ['pointer'],
                    rect: ['429px', '100px', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'continueBtn',
                symbolName: 'continueBtn',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_explaination}": [
                ["style", "top", '0px'],
                ["style", "text-align", 'justify'],
                ["color", "color", 'rgba(14,51,212,1.00)'],
                ["style", "height", '228px'],
                ["style", "left", '10px'],
                ["style", "font-size", '22px']
            ],
            "${_continueBtn}": [
                ["style", "top", '100px'],
                ["style", "left", '429px'],
                ["style", "cursor", 'pointer']
            ],
            "${symbolSelector}": [
                ["style", "height", '132px'],
                ["style", "width", '540px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
},
"beginButton": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '210px', '49px', 'auto', 'auto'],
                    borderRadius: ['10px', '10px', '10px', '10px'],
                    id: 'RoundRect',
                    stroke: [3, 'rgba(0,0,0,1)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(195,22,22,1.00)']
                },
                {
                    rect: ['17px', '9px', '178px', '49px', 'auto', 'auto'],
                    font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', 28, 'rgba(3,163,18,1.00)', '900', 'none', 'normal'],
                    id: 'Text',
                    text: 'Begin Quiz',
                    align: 'center',
                    type: 'text'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RoundRect}": [
                ["color", "background-color", 'rgba(195,22,22,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '0px'],
                ["style", "border-width", '3px']
            ],
            "${_Text}": [
                ["style", "top", '9px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(3,163,18,1.00)'],
                ["style", "font-weight", '900'],
                ["style", "left", '17px'],
                ["style", "font-size", '28px']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '216px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4921344");
