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
          <label for="firstName">First Name</label>
          <Input
            id="firstName"
            type="text"
            required
            disabled={fetching}
            value={data && data.name}
            onChange={e =>
              onChange({
                ...data,
                name: e.target.value
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
        <label for="lastName">Last Name</label>
        <Input
          id="lastName"
          type="text"
          required
          disabled={fetching}
          value={data && data.job}
          onChange={e =>
            onChange({
              ...data,
              job: e.target.value
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