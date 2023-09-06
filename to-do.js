//global variable 
let textBox=document.getElementById("text-box");
let listItem=document.getElementById("listItem");
let totalTaskItem=document.getElementById('totalTaskItem');
let completedTaskItem=document.getElementById('completedTaskItem');

// Add to-do items to list container
function addTask()
{
    if(textBox.value=='')
    {
        alert('Enter Valid task');
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=textBox.value;
        listItem.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML='\u00d7';
        li.appendChild(span);
        alert('Task Added successfully');
    }
    textBox.value='';
    totalTaskCount();
    saveTask();
}

// remove to-do items and strike out the completed task
listItem.addEventListener("click",function(e)
{
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle('checked');
        completedTaskCount();
        saveTask();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        completedTaskCount();
        totalTaskCount();
        saveTask();
        alert("Task deleted successfully");
    }
});

// Count total number of to-do items in list container
function totalTaskCount()
{
    let totalList=document.getElementsByTagName('li');
    let total_task_count=totalList.length;
    totalTaskItem.innerHTML=total_task_count;
}

//Count completed to-do item count 
function completedTaskCount()
{
    let completed_list=document.getElementsByClassName('checked');
    let completed_task_count=completed_list.length;
    completedTaskItem.innerHTML=completed_task_count;
}

//save task to local storage
function saveTask()
{
    localStorage.setItem("data",listItem.innerHTML);
    localStorage.setItem("countTask",totalTaskItem.innerHTML);
    localStorage.setItem("countCompletedTask",completedTaskItem.innerHTML);
}

//get task from local storage
function getTask()
{
    listItem.innerHTML=localStorage.getItem("data");
    totalTaskItem.innerHTML=localStorage.getItem("countTask");
    completedTaskItem.innerHTML=localStorage.getItem("countCompletedTask");
}
getTask();
