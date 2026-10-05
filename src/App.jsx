import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (input.trim() === "") {
      return;
    }

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  // Done / Not Done
  const changeStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Clear All
  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-5">

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-700">
          My To-Do List
        </h1>

        <p className="text-gray-600 mt-2">
          Manage your daily tasks
        </p>
      </div>

      <div className="max-w-3xl mx-auto">

        {/* Add Task Box */}
        <div className="bg-white p-5 rounded-xl shadow-md mb-6">

          <h2 className="text-xl font-bold mb-3">
            Add New Task
          </h2>

          <div className="flex gap-2">

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTask();
                }
              }}
              placeholder="Enter your task..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={addTask}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 rounded-lg"
            >
              Add
            </button>

          </div>
        </div>

        {/* Task List */}
        <div className="bg-white p-5 rounded-xl shadow-md">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl font-bold">
              My Tasks
            </h2>

            <span className="text-gray-500">
              {tasks.length} task(s)
            </span>

          </div>

          {tasks.length === 0 ? (

            <div className="text-center py-10 text-gray-500">
              <p className="text-lg">
                No tasks available.
              </p>

              <p className="text-sm mt-1">
                Add a task to get started.
              </p>
            </div>

          ) : (

            <div className="space-y-3">

              {tasks.map((task) => (

                <div
                  key={task.id}
                  className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg p-4"
                >

                  {/* Task */}
                  <div className="flex-1">

                    <p
                      className={`text-lg font-medium ${
                        task.completed
                          ? "line-through text-gray-400"
                          : "text-gray-800"
                      }`}
                    >
                      {task.text}
                    </p>

                    <p
                      className={`text-sm mt-1 ${
                        task.completed
                          ? "text-green-600"
                          : "text-orange-500"
                      }`}
                    >
                      {task.completed ? "Done" : "Not Done"}
                    </p>

                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2">

                    <button
                      onClick={() => changeStatus(task.id)}
                      className={`px-3 py-2 rounded-lg text-white text-sm font-medium ${
                        task.completed
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-green-500 hover:bg-green-600"
                      }`}
                    >
                      {task.completed ? "Not Done" : "Done"}
                    </button>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          )}

          {/* Clear All */}
          {tasks.length > 0 && (

            <button
              onClick={clearAll}
              className="w-full mt-5 bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 rounded-lg"
            >
              Clear All Tasks
            </button>

          )}

        </div>

        {/* User Guide */}
        <div className="bg-white p-5 rounded-xl shadow-md mt-6">

          <h2 className="text-xl font-bold mb-4">
            User Guide
          </h2>

          <div className="space-y-3 text-gray-700">

            <p>
              <b>1. Add Task:</b> Enter a task in the
              input box and click Add.
            </p>

            <p>
              <b>2. Mark as Done:</b> Click the Done
              button beside the task.
            </p>

            <p>
              <b>3. Mark as Not Done:</b> Click the
              Not Done button to change the status back.
            </p>

            <p>
              <b>4. Delete:</b> Click Delete to remove
              a task.
            </p>

            <p>
              <b>5. Clear All:</b> Click Clear All Tasks
              to remove all tasks.
            </p>

          </div>

        </div>

      </div>

      {/* Footer */}
      <p className="text-center text-gray-500 mt-8">
        Laboratory 2 - React To-Do List
      </p>

    </div>
  );
}

export default App;