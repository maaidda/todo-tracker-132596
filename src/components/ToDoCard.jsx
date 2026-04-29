function ToDoCard({todo}) {
    return (
        <div>
            <p>Id: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? "yes" : "no"}</p>
            <p>UserId: {todo.UserId}</p>
            <p>pinned: {todo.pinned ? "yes" : "no"}</p>
            <p>Category: {todo.category}</p>

            if(completed === true) return
            {<p>Task is completed</p>};

            if(pinned === true) return
            {<p>Task is pinned</p>};
        </div>
    );
}
export default ToDoCard