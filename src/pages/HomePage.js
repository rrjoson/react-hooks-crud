import React, { Fragment, useState, useEffect } from "react";
import { Button, PageHeader } from "antd";
import Table from "../Table";
import axios from "axios";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios.get("https://reqres.in/api/users");
      setData(result.data.data);
    };
    getData();
  }, []);

  return (
    <Fragment>
      <PageHeader
        className="site-page-header"
        title="CRUD APP"
        subTitle="VIEW USERS"
      />
      <main>
        <Button
          type="primary"
          onClick={() => history.push("/add")}
          style={{
            marginBottom: 16
          }}
        >
          Add user
        </Button>
        <Table data={data} />
      </main>
    </Fragment>
  );
};

export default HomePage;
