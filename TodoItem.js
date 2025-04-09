class TodoItem {
    constructor(text) {
        this.text = text;
        this.id = Math.round(Math.random()*99999999999)
    }

    render() {
        return `
        <div id='${this.id}'>
            ${this.text}
            <button class='delete'> Delete </button>
        </div>
        `
    }
}

export default TodoItem;