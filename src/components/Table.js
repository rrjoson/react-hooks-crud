import React from "react";
import { Table as AntdTable, Modal, message } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useAppContext } from "../useAppContext";

const Table = ({ data = [] }) => {
  const history = useHistory();
  const { setAppData } = useAppContext();

  const handleDelete = id => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        const updateData = async () => {
          try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setAppData(data.filter(item => item.id !== id));
            message.success("Item successfully deleted!");
          } catch {
            message.error("Something went wrong!");
          }
        };
        updateData();
      },
      onCancel() {
        console.log("Cancel");
      }
    });
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name"
    },
    {
      title: "Last Name",
      dataIndex: "last_name"
    },
    {
      title: "Action",
      key: "action",
      render: item => (
        <span key={item.id}>
          {/* eslint-disable-next-line */}
          <a
            style={{ marginRight: 16 }}
            onClick={() => history.push(`/edit/${item.id}`)}
          >
            Edit
          </a>
          {/* eslint-disable-next-line */}
          <a style={{ marginRight: 16 }} onClick={() => handleDelete(item.id)}>
            Delete
          </a>
        </span>
      )
    }
  ];

  return <AntdTable columns={columns} dataSource={data} pagination={false} />;
};

export default Table;
