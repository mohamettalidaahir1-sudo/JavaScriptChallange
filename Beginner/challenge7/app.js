const tasks = [
    { id: 1, title: 'Review variables', completed: true },
    { id: 2, title: 'Practice objects', completed: false },
    { id: 3, title: 'Practice functions', completed: true },
];

const addingTask = (taskArr, taskTitle) => {
    const ids = taskArr.map((task) => task.id);
    const newId = Math.max(...ids) + 1;
    const newTask = { id: newId, title: taskTitle, completed: false }
    return [...taskArr, newTask]
}
console.log((addingTask(tasks, 'Practice Arrays')));
console.log(tasks);


const completedTask = (taskArr, taskId) => {
    const completeTask = taskArr.map((task) => {
        if (taskId === task.id) {
            return { id: task.id, title: task.title, completed: true }
        } else {
            return { id: task.id, title: task.title, completed: task.completed }
        }
    })
    return completeTask
}
console.log(completedTask(tasks, 1));

const removeTask = (taskArr, taskId) => {
    const remove = taskArr.filter((task) => {
        return task.id !== taskId
    })
    return remove
}
console.log(removeTask(tasks, 2));

const tasksIncomplete = (taskArray) => {
    const progressTasks = taskArray.filter((task) => task.completed === true)
    return progressTasks.length
}
console.log(tasksIncomplete(tasks));


