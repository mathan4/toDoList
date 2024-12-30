var a = new Date();

var date = a.getDate();
var year = a.getFullYear();
var month = a.getMonth() + 1;

var taskDeadLine = document.getElementById("taskDeadLineDate");
taskDeadLine.setAttribute("min", `${year}-${month}-${date}`);

var index = 1;
async function addTask() {
  try {
    var taskContent = document.querySelector("#taskContent").value;
    var taskDeadLineTime = document.querySelector("#taskDeadLineTime").value;
    var taskDeadLineDate = document.querySelector("#taskDeadLineDate").value;

    var taskcontainer = document.getElementById("taskContainer");

    var newTask = `<div class="bg-white border rounded-lg w-2/4 py-4 pl-4 flex my-4" id="taskbox${index}">
                <div class="p-4" id="taskInfo${index}">
                <p class="text-2xl font-bold pb-4">Task</p>
                <p id="taskContent${index}">${taskContent}</p>
                <p class="text-gray-500">DeadLine${taskDeadLineTime} ${taskDeadLineDate}</p>
                <div><button class="bg-yellow-200 p-2 rounded-lg my-4" id="${index}" onclick="editTask(this.id)">Edit</button>
                <button class="bg-rose-300 p-2 rounded-lg my-4" id="${index}" onclick="deleteTask(this.id)">Delete</button></div>
             </div>
            </div>`;

    index += 1;
    taskcontainer.innerHTML += newTask;
    taskContent = document.querySelector("#taskContent").value = "";
    taskDeadLineTime = document.querySelector("#taskDeadLineTime").value = "";
    taskDeadLineDate = document.querySelector("#taskDeadLineDate").value = "";
  } catch (error) {
    console.log(error);
  }
}

function deleteTask(taskId) {
  var taskbox = document.getElementById(`taskbox${taskId}`);
  taskbox.remove();
}

function editTask(taskId) {
  var task = document.getElementById(`taskInfo${taskId}`);

  task.style.display = "none";
  // var taskContent=document.querySelector(`#taskContent${taskId}`).textContent;

  var taskbox = document.getElementById(`taskbox${taskId}`);

  taskbox.innerHTML += `<div class="flex flex-col" id="editTask${taskId}"><p class="text-2xl font-bold pb-4" >Task</p>
    <input type="text" class="border rounded-lg" id="editedTaskContent${taskId}">
    <button onclick="updateTask(this.id)" class="bg-yellow-100 p-2 w-32 rounded-lg my-4" id="${taskId}">update Task</button></div>`;
}

function updateTask(taskId) {
  var editedTaskContent = document.getElementById(
    `editedTaskContent${taskId}`
  ).value;
  console.log(editedTaskContent);
  var task = document.getElementById(`taskInfo${taskId}`);
  var editTaskBar = document.getElementById(`editTask${taskId}`);
  editTaskBar.remove();
  task.style.display = "block";
  var taskContent = document.getElementById(`taskContent${taskId}`);
  taskContent.textContent = `${editedTaskContent}`;
}
