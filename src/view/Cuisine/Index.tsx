import { useState, Component } from 'react'
import { Space, Card } from "antd"
import { listApi } from "../../api/cuisine"

class Index extends Component {
  componentDidMount() {

    listApi({ page: 1, size: 10 })
  }
  render() {
    return (
      <Space direction="vertical">
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    )
  }
}

export default Index
