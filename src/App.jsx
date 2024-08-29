
import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="text-black text-center">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => (
      <li
        key={i}
        className="flex items-center justify-between mb-5 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        <div className="flex flex-col text-black w-3/4">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
        </div>
        <button
          onClick={() => deleteHandler(i)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-colors duration-300 hover:bg-red-700"
        >
          Delete
        </button>
      </li>
    ));
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-3xl font-bold text-center rounded shadow-md">
        To-Do List
      </h1>

      <form
        onSubmit={submitHandler}
        className="p-5 bg-gray-100 rounded-lg shadow-md m-5"
      >
        <input
          type="text"
          placeholder="Enter Title Here"
          className="text-2xl border-gray-300 border-2 rounded-lg p-3 mb-4 w-full transition-colors duration-300 focus:border-blue-500 focus:outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Description Here"
          className="text-2xl border-gray-300 border-2 rounded-lg p-3 mb-4 w-full transition-colors duration-300 focus:border-blue-500 focus:outline-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-3 text-2xl font-bold rounded-lg transition-transform transform hover:scale-105"
        >
          Add Task
        </button>
      </form>

      <hr className="my-6 border-gray-300" />

      <div className="p-8 bg-gray-200 rounded-lg shadow-md">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
