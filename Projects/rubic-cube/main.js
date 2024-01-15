
//*/*/*/*/*/*/*/*/*/*/*

let scinput = 0;
let scramble = 0;
let timer = 0;
let cont = document.querySelector('.container');
let min = 0;
let sec = 0;
let mils = 0;
let ability = 1;
let title = document.querySelector('.befcon');


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addEventListener('click',function (e){
    if (e.target.className ==='box1'){
        title.innerHTML='TIMER';
        console.log('box1');
        cont.innerHTML = `<p class="back">
                              <p  class="box11"><<<<<</p>
                              </p>
                              <p class="screen"> 
                               <span class="min">0</span>:<span class="sec">0</span>:<span class="mils">0</span>
                              </p>
                                <p class="start"> 
                                    <span>START</span> 
                               </p>
                               `}});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addEventListener('click',function (e){
    if (e.target.className ==='box11'){
        title.innerHTML='BOXES';
        console.log('<<<<<<<<<<<');

        cont.innerHTML = `<div class="box1">
                   <p><ion-icon name="stopwatch-outline"></ion-icon></p>
                   <p class="text">TIMER</p>
               </div>
               <div class="box2">
                <ion-icon name="reload-circle-outline"></ion-icon> 
                   <p class="text">SCRAMBLE</p>
               </div>
               <div class="box22">
                   <p><ion-icon name="newspaper-outline"></ion-icon></p>
                   <p class="text">ALGORITHMS</p>
               </div>
               <div class="box3">
                   <p><ion-icon name="reader-outline"></ion-icon></p>
                   <p class="text">UR TIMINGS</p>
               </div>
               <div class="box4">
                   <p><ion-icon name="image-outline"></ion-icon></p>
                   <p class="text">cool backgrounds</p>
               </div>

                

`
    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addEventListener('click',function (e){

if(ability === 1 ) {

    if (e.target.className === 'start') {

        let mins = document.querySelector('.min');
        let secs = document.querySelector('.sec');
        let milss = document.querySelector('.mils');
        let start = document.querySelector('.start');
        let starts = document.querySelector('.start span');

        start.style.background = '#505050FF';
        starts.innerHTML = 'STOP';


        ability = 0;
        timer = setInterval(function () {
            mils += 10;
            milss.innerHTML = mils;
            if (mils === 1000) {
                mils = 0;
                sec += 1;
                secs.innerHTML = sec;
                if (sec === 59) {
                    min += 1;
                    mins.innerHTML = min;
                    sec = 0;
                }
            }
        }, 10);
    }
}else if(ability === 0){



    

    start = document.querySelector('.start');
    starts = document.querySelector('.start span');

    starts.innerHTML = 'START';
    ability = 1;
    start.style.background = '#969696';

    clearInterval(timer);



    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addEventListener('click',function (e){
    if (e.target.className ==='box2'){
        title.innerHTML='SCRAMBLE';




        console.log('box2');

        cont.innerHTML = `<p class="scramble">
            
            <p  class="box11"><<<<<</p>
            
            <p class="warning"></p>
            
                      <label>
                        <input class="input" type="number" required placeholder='recomended(1-20)'>
            
                        <button class="submit">
                            submit
                        </button>
                       </label>
                        <p class="sccont">
             
                        </p>
            
                    </p>`;

        scinput = document.querySelector('.input');
        console.log(scinput);


    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


addEventListener('click',function (e){

    if (e.target.className === 'submit'){

        scramble = 5;
        scinput = document.querySelector('.input');
        console.log(scinput);


        document.querySelector('.sccont').innerHTML='';


        if(scinput.value === 0 || scinput.value < 0 ){
            document.querySelector('.warning').innerHTML = 'ERROR';
        }else {
            document.querySelector('.warning').innerHTML = '';
            scramble = scinput.value;
            console.log(scramble);


            for(let i = 0; i < scramble; i++){
                let arr = [];
                let random =  Math.floor(Math.random() * 12);
//////////////////////////////////////
                if (random === 0){
                    let el = document.createElement("span");
                    let text = document.createTextNode("F   ");
                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }
//////////////////////////////
                if (random === 1){

                    let el = document.createElement("span");
                    let text = document.createTextNode("F'   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }



                if (random === 2){
                    let el = document.createElement("span");
                    let text = document.createTextNode("B   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }

                /////
                if (random === 3){
                    let el = document.createElement("span");
                    let text = document.createTextNode("B'   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }
                /////////////////

                if (random === 4){
                    let el = document.createElement("span");
                    let text = document.createTextNode("R   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }

                //////
                if (random === 5){
                    let el = document.createElement("span");
                    let text = document.createTextNode("R'   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }



                if (random === 6){
                    let el = document.createElement("span");
                    let text = document.createTextNode("L   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }



                if (random === 7){
                    let el = document.createElement("span");
                    let text = document.createTextNode("L'   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }

                if (random === 8){
                    let el = document.createElement("span");
                    let text = document.createTextNode("U   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }


                if (random === 9){
                    let el = document.createElement("span");
                    let text = document.createTextNode("U'   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }


                if (random === 10){
                    let el = document.createElement("span");
                    let text = document.createTextNode("D   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }


                if (random === 11){
                    let el = document.createElement("span");
                    let text = document.createTextNode("D'   ");

                    document.querySelector('.sccont').appendChild(el);
                    el.appendChild(text);
                }

                console.log(arr)





            }


        }













    }});


addEventListener('click',function (e){
    if (e.target.className ==='box22'){
        title.innerHTML='ALGORITHMS';
        console.log('box3');
        cont.innerHTML = `<p  class="box11"><<<<<</p>
                <p class="alg" >         F R U R' U' F'       </p>
                <p class="alg" >         \tR U R' U R U U R'       </p>
                <p class="alg" >         \t\tU R U' L' U R' U' L      </p>
                <p class="alg" >         \t\t\tR' D' R D     </p>
                               `}});


addEventListener('click',function (e){
    if (e.target.className ==='box3'){
        title.innerHTML='ur timings';
        console.log('box4');
        cont.innerHTML = `     <p class="box11"><<<<<<<</p>

                    <p class="form">
                        <input type="text" class="input" />
                        <input type="submit" class="add" value="add timing" />
                    </p>
                    <p class="tasks"></p>
                </div>
                               `;



        let input = document.querySelector(".input");
        let submit = document.querySelector(".add");
        let tasksDiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
        let arrayOfTasks = [];

// Check if Theres Tasks In Local Storage
        if (localStorage.getItem("tasks")) {
            arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
        }

// Trigger Get Data From Local Storage Function
        getDataFromLocalStorage();

// Add Task
        submit.onclick = function () {
            if (input.value !== "") {
                addTaskToArray(input.value); // Add Task To Array Of Tasks
                input.value = ""; // Empty Input Field
            }
        };

// Click On Task Element
        tasksDiv.addEventListener("click", (e) => {
            // Delete Button
            if (e.target.classList.contains("del")) {
                // Remove Task From Local Storage
                deleteTaskWith(e.target.parentElement.getAttribute("data-id"));
                // Remove Element From Page
                e.target.parentElement.remove();
            }
            // Task Element
            if (e.target.classList.contains("task")) {
                // Toggle Completed For The Task
                toggleStatusTaskWith(e.target.getAttribute("data-id"));
                // Toggle Done Class
                e.target.classList.toggle("done");
            }
        });

        function addTaskToArray(taskText) {
            // Task Data
            const task = {
                id: Date.now(),
                title: taskText,
                completed: false,
            };
            // Push Task To Array Of Tasks
            arrayOfTasks.push(task);
            // Add Tasks To Page
            addElementsToPageFrom(arrayOfTasks);
            // Add Tasks To Local Storage
            addDataToLocalStorageFrom(arrayOfTasks);
        }

        function addElementsToPageFrom(arrayOfTasks) {
            // Empty Tasks Div
            tasksDiv.innerHTML = "";
            // Looping On Array Of Tasks
            arrayOfTasks.forEach((task) => {
                // Create Main Div
                let div = document.createElement("div");
                div.className = "task";
                // Check If Task is Done
                if (task.completed) {
                    div.className = "task done";
                }
                div.setAttribute("data-id", task.id);
                div.appendChild(document.createTextNode(task.title));
                // Create Delete Button
                let span = document.createElement("span");
                span.className = "del";
                span.appendChild(document.createTextNode("Delete"));
                // Append Button To Main Div
                div.appendChild(span);
                // Add Task Div To Tasks Container
                tasksDiv.appendChild(div);
            });
        }

        function addDataToLocalStorageFrom(arrayOfTasks) {
            window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
        }

        function getDataFromLocalStorage() {
            let data = window.localStorage.getItem("tasks");
            if (data) {
                let tasks = JSON.parse(data);
                addElementsToPageFrom(tasks);
            }
        }

        function deleteTaskWith(taskId) {
            // For Explain Only
            // for (let i = 0; i < arrayOfTasks.length; i++) {
            //   console.log(`${arrayOfTasks[i].id} === ${taskId}`);
            // }
            arrayOfTasks = arrayOfTasks.filter((task) => task.id != taskId);
            addDataToLocalStorageFrom(arrayOfTasks);
        }

        function toggleStatusTaskWith(taskId) {
            for (let i = 0; i < arrayOfTasks.length; i++) {
                if (arrayOfTasks[i].id == taskId) {
                    arrayOfTasks[i].completed == false ? (arrayOfTasks[i].completed = true) : (arrayOfTasks[i].completed = false);
                }
            }
            addDataToLocalStorageFrom(arrayOfTasks);
        }







    }});


addEventListener('click',function (e){
    if (e.target.className ==='box4'){
        title.innerHTML='BACKGROUNDS';
        console.log('<<<<<<<<<<<');

        cont.innerHTML = `                   <p class="box11"><<<<<<<</p>


                    <p class="imgs">
                        <p class="img"><img src="img/1.jpg"><a href="img/1.jpg" download class="down">download<ion-icon name="download-outline"></ion-icon></a></p>
                    <p class="img"><img src="img/2.jpg"><a href="img/2.jpg" download class="down">download<ion-icon name="download-outline"></ion-icon></a></p>
                    <p class="img"><img src="img/3.jpg"><a href="img/3.jpg" download class="down">download<ion-icon name="download-outline"></ion-icon></a></p>
                    <p class="img"><img src="img/4.jpg"><a href="img/4.jpg" download class="down">download<ion-icon name="download-outline"></ion-icon></a></p>
                    <p class="img"><img src="img/5.jpg"><a href="img/5.jpg" download class="down">download<ion-icon name="download-outline"></ion-icon></a></p>
                    <p class="img"><img src="img/6.png"><a href="img/6.png" download class="down">download<ion-icon name="download-outline"></ion-icon></a></p>



                    </p>

`
    }
});













