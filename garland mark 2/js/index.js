var colorsOn = ["#ff0000d9", "#ffa500ed", "#0000ffe3", "#800080f2", "#07eb07d6", "#fff700", 
			  	"#ff0000d9", "#ffa500ed", "#0000ffe3", "#800080f2", "#07eb07d6", "#fff700",
			  	"#ff0000d9", "#ffa500ed", "#0000ffe3", "#ffa500ed", "#800080f2", "#07eb07d6",
			  	"#fff700", "#ff0000d9"];

var colorsOnBackground = ["red", "orange", "blue", "purple", "#07eb07", "#fff700",
						  "red", "orange", "blue", "purple", "#07eb07", "#fff700",
						  "red", "orange", "blue", "orange", "purple", "#07eb07", 
						  "#fff700", "red"]


var colorsOff = ["#a52121", "#b5790b", "#19199c", "#6f0d6f", "#126312", "#808009",
				 "#a52121", "#b5790b", "#19199c", "#6f0d6f", "#126312", "#808009",
				 "#a52121", "#b5790b", "#19199c", "#b5790b", "#6f0d6f", "#126312",
				 "#808009","#a52121" ]

var numberColors = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,2,4,5,6,1]

var classList = ["lamp-one", "lamp-two", "lamp-tree", "lamp-for", "lamp-five", "lamp-six",
				 "lamp-seven", "lamp-eight", "lamp-nine", "lamp-ten", "lamp-eleven", "lamp-twelve",
				 "lamp-thirteen", "lamp-fourteen", "lamp-fivteen", "lamp-sixteen", "lamp-seventeen", "lamp-eighten",
				 "lamp-nineteen", "lamp-twenty"];


var lamps = []
var dataInputsLampOff = []
var dataInputsLampOn = []
var dataInputsTimeOffOn = []
var dataTime = []
var secondsLampOneControl = []
var minutesLampOneControl = []
var secondsLampOne = []
var minutesLampOne = []
var number = 0


var garland = document.querySelector(".garland");
var button = document.querySelector(".button");
var buttonTwo = document.querySelector(".button-two");
var control = document.querySelector(".control")
var controlMenu = document.querySelector(".control-menu")

var controlTimeOffOn = document.createElement("div")
controlTimeOffOn.classList.add("control-time-off-on")
control.appendChild(controlTimeOffOn)


for(var i = 0; i < colorsOn.length; i++){
	var lamp = document.createElement("div")
	lamp.classList.add(classList[i])
	garland.appendChild(lamp)
	lamp.setAttribute("count", numberColors[i])
	lamp.setAttribute("ser", i)
	lamps.push(lamp)
}	

for(var i = 0; i < lamps.length; i++){
	number++
	var inputLampOff = document.createElement("input")
	var inputLampOn = document.createElement("input")
	var inputTimeSpeedOffOn = document.createElement("input")
	inputTimeSpeedOffOn.classList.add("input-time-off-on")
	inputLampOff.classList.add("turn-off-first-lamp")
	inputLampOn.classList.add("turn-on-first-lamp")
	inputLampOff.setAttribute("placeholder", "Выключить лампу номер " + number)
	inputLampOn.setAttribute("placeholder", "Включить лампу номер " + number)
	inputTimeSpeedOffOn.setAttribute("placeholder", "Скорость вкл/выкл лампы " + number)
	inputLampOff.setAttribute("countOff", i)
	inputLampOn.setAttribute("countOn", i)
	controlMenu.appendChild(inputLampOff)
	controlMenu.appendChild(inputLampOn)
	controlTimeOffOn.appendChild(inputTimeSpeedOffOn)
	dataInputsLampOff.push(inputLampOff)
	dataInputsLampOn.push(inputLampOn)
	dataInputsTimeOffOn.push(inputTimeSpeedOffOn)
}


var buttonBegin = document.createElement("button")
	buttonBegin.classList.add("begin")
	controlMenu.appendChild(buttonBegin)
	buttonBegin.innerHTML = "Применить."

var buttonBeginTime = document.createElement("button")
	buttonBeginTime.classList.add("button-time-off-on")
	controlTimeOffOn.appendChild(buttonBeginTime)
	buttonBeginTime.innerHTML = "Применить."	

var buttonTeamOne = document.createElement("button")
	buttonTeamOne.classList.add("button")
	control.appendChild(buttonTeamOne)
	buttonTeamOne.innerHTML = "Тема один."

var buttonTeamTwo = document.createElement("button")
	buttonTeamTwo.classList.add("button-two")
	control.appendChild(buttonTeamTwo)
	buttonTeamTwo.innerHTML = "Тема два."


buttonTeamOne.addEventListener("click", function(){
	function off(){
		for(var i = 0; i < lamps.length; i++){
			lamps[i].style.background = colorsOff[i]
			lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
		}
	}

	function on(){
		for(var i = 0; i < lamps.length; i++){
			lamps[i].style.background = colorsOnBackground[i]
			lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
		}
	}
	setInterval(off, 1000)
	setInterval(on, 2000)
	
})


buttonTeamTwo.addEventListener("click", function(){
function garlandOnOff(){
	function offRedLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 1){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			} 
		}
	}

	function onRedLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 1){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
			} 
		}
	} 

	function offOrangeLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 2){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			} 
		}
	}

	function onOrangeLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 2){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
			} 
		}
	} 

	function offBlueLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 3){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			} 
		}
	}

	function onBlueLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 3){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
			} 
		}
	} 

	function offPurpleLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 4){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			} 
		}
	}

	function onPurpleLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 4){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
			} 
		}
	} 

	function offGreenLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 5){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			} 
		}
	}

	function onGreenLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 5){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
			} 
		}
	} 

	function offYellowLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 6){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			} 
		}
	}

	function onYellowLamp(){
		for(var i = 0; i < lamps.length; i++){
			var countLamp = lamps[i].getAttribute("count")
			if(countLamp == 6){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
			} 
		}
	} 

	setTimeout(offRedLamp, 1000)
	setTimeout(onRedLamp, 3000)
	setTimeout(offOrangeLamp, 2000)
	setTimeout(onOrangeLamp, 4000)
	setTimeout(offBlueLamp, 3000)
	setTimeout(onBlueLamp, 5000)
	setTimeout(offPurpleLamp, 4000)
	setTimeout(onPurpleLamp, 6000)
	setTimeout(offGreenLamp, 5000)
	setTimeout(onGreenLamp, 7000)
	setTimeout(offYellowLamp, 6000)
	setTimeout(onYellowLamp, 8000)
}
	garlandOnOff()
	setInterval(garlandOnOff, 9000)
})


buttonBegin.addEventListener("click", function(){

for(var i = 0; i < dataInputsLampOff.length; i++){
	var paramOne = dataInputsLampOff[i].value
	var paramTwo = dataInputsLampOn[i].value * 2
	secondsLampOne.push(paramOne)
	minutesLampOne.push(paramTwo)
	secondsLampOneControl.push(paramOne)
	minutesLampOneControl.push(paramTwo)
}

	function timerOff(){
		for(var i = 0; i < secondsLampOne.length; i++){
			secondsLampOne[i]--
	/*		console.log(secondsLampOne[i])*/
			if(secondsLampOne[i] == 0){
				lamps[i].style.background = colorsOff[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px #ff00000f";
			}
		}
	}

	setInterval(timerOff, 1000)

	function timerOn(){
		for(var i = 0; i < minutesLampOne.length; i++){
			minutesLampOne[i]--
		/*	console.log(minutesLampOne[i])*/
			if(minutesLampOne[i] == 0){
				lamps[i].style.background = colorsOnBackground[i]
				lamps[i].style.boxShadow = 0 + "px " + 0 + "px " + 33 + "px " + 46 + "px " + colorsOn[i];
				secondsLampOne[i] = secondsLampOneControl[i]
				minutesLampOne[i] = minutesLampOneControl[i]
				} 
			}
		}

	setInterval(timerOn, 1000)


})

buttonBeginTime.addEventListener("click", function(){
	for(var i = 0; i < lamps.length; i++){
		var paramTimeOffOn = +dataInputsTimeOffOn[i].value
		dataTime.push(paramTimeOffOn)
		console.log(dataTime[i])
	lamps[i].style.transition = "all " + dataTime[i] + "s"
	}
})