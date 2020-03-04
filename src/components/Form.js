import React from "react";
import { Row, Col, Input, Button } from "antd";

const Form = ({ onSubmit, data, editting, onChange, loading, fetching }) => {
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <Row
        style={{
          marginBottom: 16
        }}
      >
        <Col span={24}>
          <label htmlFor="firstName">First Name</label>
          <Input
            id="firstName"
            type="text"
            required
            disabled={fetching}
            value={data && data.first_name}
            onChange={e =>
              onChange({
                ...data,
                first_name: e.target.value
              })
            }
          />
        </Col>
      </Row>
      <Row
        style={{
          marginBottom: 16
        }}
      >
        <label htmlFor="lastName">Last Name</label>
        <Input
          id="lastName"
          type="text"
          required
          disabled={fetching}
          value={data && data.last_name}
          onChange={e =>
            onChange({
              ...data,
              last_name: e.target.value
            })
          }
        />
      </Row>
      <Row
        style={{
          marginBottom: 16
        }}
      >
        <Button type="primary" htmlType="submit" loading={loading}>
          {editting ? "Update" : "Add"}
        </Button>
      </Row>
    </form>
  );
};

export default Form;
