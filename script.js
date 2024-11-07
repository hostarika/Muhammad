const darkBtn = document.getElementById("dark-btn");
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const send = document.getElementById("add-btn");
const inputText = document.getElementById("input-text");
const todoList = document.getElementById("todo-list");
const ismlar= JSON.parse(localStorage.getItem("ismlar")||"[]");



darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.length > 0) {
        sun.style.display = "block";
        moon.style.display = "none";
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
    }
});

send.addEventListener("click", () => {
    let Ikkinchinusxa= false;
    const inputniqiymati = inputText.value.trim();

    if (inputniqiymati.length < 1) {
        alert("Nimadir narsa yozing");
    } else {
       
        for (let i = 0; i < ismlar.length; i++) {
            if (ismlar[i].trim() === inputniqiymati) {
                Ikkinchinusxa = true;
                alert("Bu ism allaqachon ro'yxatda bor");
                
            }
        }

        
        if (!Ikkinchinusxa) {
            ismlar.push(inputniqiymati);
            localStorage.setItem("ismlar",JSON.stringify(ismlar));
            const li = document.createElement("li");
            li.innerHTML = `
                <div>
                    <h2 class="todo-text">${inputniqiymati}</h2>
                </div>
                <div class="btn-box">
                    <button class="delete-btn" id="delete-btn" onClick="deleteTodo(this)">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;
            todoList.appendChild(li);
            inputText.value = "";
        }
    }
});

function deleteTodo(e) {
    todoList.removeChild(e.parentNode.parentNode);
}

function toggleStrikethrough(checkbox) {
    const todoText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        todoText.classList.add("strikethrough");
    } else {
        todoText.classList.remove("strikethrough");
    }
}




function ismlarchizish(ismlar){
    todoList.innerHTML="";
    for(let i=0; i<ismlar.length; i++){
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <h2 class="todo-text">${ismlar[i]}</h2>
            </div>
            <div class="btn-box">
                <button class="delete-btn" id="delete-btn" onClick="deleteTodo(this)">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
        todoList.appendChild(li);
    }
}

ismlarchizish(ismlar)