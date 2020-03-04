import React, { Fragment, useEffect } from "react";
import { Button, PageHeader } from "antd";
import Table from "../components/Table";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../useAppContext";

const HomePage = () => {
  const { appData, setAppData } = useAppContext();

  const history = useHistory();

  useEffect(() => {
    if (appData === null) {
      const getData = async () => {
        const result = await axios.get("https://reqres.in/api/users");
        setAppData(result.data.data);
      };
      getData();
    }
    // eslint-disable-next-line
  }, []);

  if (appData === null) return null;

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
        <Table data={appData} />
      </main>
    </Fragment>
  );
};

export default HomePage;
