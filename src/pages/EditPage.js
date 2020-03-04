import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { message, PageHeader } from "antd";
import axios from "axios";
import Form from "../components/Form";
import { useAppContext } from "../useAppContext";

const EditPage = () => {
  const { appData, setAppData } = useAppContext();

  const history = useHistory();
  const { id } = useParams();

  const [fetching, setFetching] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    first_name: "",
    last_name: ""
  });

  useEffect(() => {
    const getData = async () => {
      try {
        setFetching(true);
        await axios.get(`https://reqres.in/api/users/${id}`);
        const index = appData.findIndex(item => item.id.toString() === id);
        setData(appData[index]);
      } catch {
        message.error("Something went wrong!");
      } finally {
        setFetching(false);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [id]);

  const updateItem = () => {
    const updateData = async () => {
      try {
        setLoading(true);
        await axios.put(`https://reqres.in/api/users/${id}`, data);
        const newAppData = [...appData];
        const index = newAppData.findIndex(item => item.id.toString() === id);
        newAppData[index] = {
          id,
          ...data
        };
        setAppData(newAppData);
        message.success("Item successfully updated!");
        history.push("/");
      } catch {
        message.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    updateData();
  };

  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        title="CRUD APP"
        subTitle="EDIT USER"
        onBack={() => history.push("/")}
      />
      <main>
        <Form
          disabled={fetching}
          data={data}
          onChange={setData}
          onSubmit={updateItem}
          editting={true}
          loading={loading}
        />
      </main>
    </Fragment>
  );
};

export default EditPage;
