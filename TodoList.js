import TodoItem from "./TodoItem.js";


class TodoList {
    constructor(element) {
        this.element = element;
        this.items = [];

        this.element.addEventListener('click', (e)=>{
            const targetId = e.target.parentElement.id;
            const item = this.items.find((i)=> i.id == targetId);

            if(e.target.classList.contains('delete')){
                this.remove(targetId)
            }

            if(e.target.classList.contains('add')){
                const userInput = this.element.querySelector('input').value
                this.add(userInput)
            }
        });
    }

    add(text){
        const newItem = new TodoItem(text)
        this.items.push(newItem);
        this.render();
    }

    remove(id){
        this.items = this.items.filter((i)=> i.id != id );
        this.render();
    }

    render(){
        const html = `<input type="text"> <button class='add'>Add</button> ${this.items.map((i)=> i.render()).join("") }`;

        this.element.innerHTML = html;
    }
}

export default TodoList;