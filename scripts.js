// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener("load",function () {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const spaceShuttleWidth = document.getElementById("spaceShuttleWidth");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const rocket = document.getElementById("rocket");

    takeoff.addEventListener("click", () => {
       const response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response){
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000;
            movement = parseInt(rocket.style.bottom) + 10 + "px";
            rocket.style.bottom = movement;
        };
    });

    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML="The shuttle has landed.";
        shuttleBackground.style.backgroundColor='green';
        spaceShuttleHeight.innerHTML=0;
        movement = rocket.style.bottom = '0px';
        movement = rocket.style.left = '0px';
    });
    abortButton.addEventListener('click', function(){
        const abortResponse = window.confirm("Confirm that you want to abort the mission.");
        if (abortResponse){
        shuttleStatus.innerHTML='Mission Aborted';
        shuttleBackground.style.backgroundColor='green';
        spaceShuttleHeight.innerHTML=0;             
        movement = rocket.style.bottom = '0px';
        movement = rocket.style.left = '0px';
        };
    });

    right.addEventListener("click", function () {
      if (spaceShuttleWidth.innerHTML != "480000"){
        movement = parseInt(rocket.style.left) + 10 + 'px';
        rocket.style.left = movement;
        spaceShuttleWidth.innerHTML = parseInt(spaceShuttleWidth.innerHTML) + 10000;
      }
    });

    left.addEventListener("click", function () {
      if (spaceShuttleWidth.innerHTML != "-20000"){
        movement = parseInt(rocket.style.left) - 10 +'px';
        rocket.style.left = movement;
        spaceShuttleWidth.innerHTML = parseInt(spaceShuttleWidth.innerHTML) - 10000;
      }
    });

    down.addEventListener("click", function () { 
      if (spaceShuttleHeight.innerHTML != "0"){
        movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
      }
    });

    up.addEventListener("click", function () {
      if (spaceShuttleHeight.innerHTML != "250000"){
        movement = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
      }
    });

    document.addEventListener('click', function(event){
        
        if(event.target.id==="left"){
            rocketPosY-=10;
            rocket.style.marginLeft=rockerPosX+"px"
        };
    })

    rocket.style.position = "absolute";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px";

    });
