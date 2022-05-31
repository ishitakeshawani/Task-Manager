import { React } from "react";
import { useToDo } from "../../features/todo/toDoSlice";
import "./todolistpage.css";
import todoimage from "../../Images/todoimage.webp";
import { Card } from "antd";

export default function ToDoListPage() {
  const toDoList = useToDo();
  console.log(toDoList.todo.toDoList);
  return (
    <div className="todolistPage">
      <img src={todoimage} alt="todoimage" className="todoimage" />
      <div className="todolist">
        {toDoList.todo.toDoList?.length &&
          toDoList.todo.toDoList?.map((val) => (
            <div className="site-card-border-less-wrapper">
              <Card
                title={val.title.toUpperCase()}
                bordered={false}
                style={{
                  width: 300,
                }}
              >
                {val.dueDate.length ? (
                  <p className="content">
                    <span className="bold-text">Due Date: </span>{" "}
                    {val.dueDate.split("-").reverse().join("-")}
                  </p>
                ) : (
                  ""
                )}
                {val.status.length ? (
                  <p className="content">
                    <span className="bold-text">Status: </span>
                    {val.status}
                  </p>
                ) : (
                  ""
                )}
                {val.description.length ? (
                  <p className="content">
                    <span className="bold-text">Description: </span>
                    {val.description}
                  </p>
                ) : (
                  ""
                )}
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
