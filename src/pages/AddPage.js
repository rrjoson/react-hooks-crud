import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { message, PageHeader } from "antd";
import Form from "../components/Form";
import axios from "axios";
import { useAppContext } from "../useAppContext";

const AddPage = () => {
  const history = useHistory();

  const { appData, setAppData } = useAppContext();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: ""
  });

  const addItem = () => {
    const addData = async () => {
      try {
        setLoading(true);
        await axios.post("https://reqres.in/api/users", data);
        setAppData([
          ...appData,
          {
            id: appData.length + 1,
            ...data
          }
        ]);
        message.success("Item successfully added!");
        history.push("/");
      } catch {
        message.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    addData();
  };

  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        title="CRUD APP"
        subTitle="ADD USER"
        onBack={() => history.push("/")}
      />
      <main>
        <Form
          data={data}
          onChange={setData}
          onSubmit={addItem}
          editting={false}
          loading={loading}
        />
      </main>
    </Fragment>
  );
};

export default AddPage;
