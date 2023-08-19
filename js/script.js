function addTask (){
    //titulo da tarefa
    const tasktitle = document.querySelector("#tasktitle")
    
    if(tasktitle){
    
        //clona template
        const template = document.querySelector(".template");

        const newTask = template.cloneNode(true);

        // adicionar titulo
        newTask.querySelector(".task-title").textContent = taskTitle;

        //remover as classe desnecessárias
        newTask.classList.remove("template");
        newTask.classList.remove("hide");

        const list = document.querySelector("#task-list");
        
        list.appendChild("newTask");

        //limpar texto

        document.querySelector("#task-title").value = "";
    }
}

//evento de adicionar tarefa

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e){
    
    e.preventDefault();    

    addTask();

});