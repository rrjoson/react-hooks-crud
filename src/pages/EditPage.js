import React, { Fragment, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { message, PageHeader } from "antd";
import axios from "axios";
import Form from "../components/Form";

const EditPage = () => {
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
        const result = await axios.get(`https://reqres.in/api/users/${id}`);
        setData(result.data.data);
      } catch {
        message.error("Something went wrong!");
      } finally {
        setFetching(false);
      }
    };
    getData();
  }, [id]);

  const updateItem = newData => {
    const updateData = async () => {
      try {
        setLoading(true);
        await axios.put(`https://reqres.in/api/users/${id}`, newData);
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
