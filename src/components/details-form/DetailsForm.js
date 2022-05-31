import { React, useState } from "react";
import { Button, DatePicker, Form, Space, Input } from "antd";
import "antd/dist/antd.css";
import styles from "../../../src/App.css";
import "../../../src/App.css";
import { useDispatch } from "react-redux";
import { addToDo } from "../../features/todo/toDoSlice";
import { useNavigate } from "react-router-dom";
export default function DetailsForm() {
  const navigate = useNavigate();
  const [status, setStatus] = useState("status");
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setStatus(e.target.value);
    setToDoItem((prev) => ({ ...prev, status: e.target.value }));
  };
  const [errors, setErrors] = useState({
    titleError: false,
    descError: false,
  });

  const [toDoItem, setToDoItem] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "",
  });
  const { TextArea } = Input;
  const onChange = (date, dateString) => {
    setToDoItem((prev) => ({ ...prev, dueDate: dateString }));
  };
  const handleChange = (e, field) => {
    setToDoItem((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const validate = () => {
    console.log(toDoItem);
    if (!toDoItem.title) {
      setErrors({ ...errors, titleError: true });
      return false;
    }
    if (!toDoItem.description) {
      setErrors({ ...errors, descError: true });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(addToDo(toDoItem));
      navigate("/todopage");
    }
  };

  return (
    <div className="task-detail-form">
      <Form
        labelCol={{
          span: 7,
        }}
        wrapperCol={{
          span: 32,
        }}
        layout="horizontal"
      >
        {errors.titleError ? (
          <div className="error">Title is Required!</div>
        ) : (
          ""
        )}
        <Form.Item label="Title" className={styles.formitem}>
          <Input
            onChange={(e) => handleChange(e, "title")}
            placeholder="Add title here."
          />
        </Form.Item>

        {errors.descError ? (
          <div className="error">Description is Required!</div>
        ) : (
          ""
        )}
        <Form.Item label="Description">
          <TextArea
            rows={4}
            onChange={(e) => handleChange(e, "description")}
            placeholder="Add description here."
          />
        </Form.Item>
        <Space direction="vertical">
          <Form.Item label="Due Date">
            <DatePicker onChange={onChange} />
          </Form.Item>
        </Space>

        <Form.Item label="Status">
          <select value={status} onChange={handleClick}>
            <option value="ToDo">ToDo</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Stalled">Stalled</option>
            <option value="Done">Done</option>
          </select>
        </Form.Item>
        <Form.Item>
          <div className="center-btn">
            <Button className="btn" onClick={(e) => handleSubmit(e)}>
              Save
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}
