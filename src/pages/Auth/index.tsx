import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Space, Row, Col, Layout, Card, Typography } from 'antd'
import { useHistory } from 'react-router-dom'
import { logIn, signUp } from 'shared/core/user/duck/actions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'index'

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16, offset: 2 },
}
const tailLayout = {
  wrapperCol: { offset: 7, span: 16 },
}

export const Auth = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const userProfile = useSelector((state: RootState) => state.user.profile)
  const [type, setType] = useState('Login')

  const onFinish = values => {
    if (type === 'Sign up') dispatch(signUp(values))
    if (type === 'Login') dispatch(logIn(values))
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  useEffect(() => {
    userProfile && history.push('/dashboard/all')
  }, [history, userProfile])

  const { Content } = Layout
  const { Title } = Typography

  return (
    <Layout>
      <Content style={{ height: '100vh' }}>
        <Row>
          <Col span={6} offset={8}>
            <Card style={{ marginTop: '100px', borderRadius: '10px' }}>
              <Space style={{ justifyContent: 'center', display: 'flex', marginBottom: '30px' }}>
                <Button
                  onClick={() => {
                    setType('Sign up')
                  }}
                >
                  Sign up
                </Button>
                <Button
                  onClick={() => {
                    setType('Login')
                  }}
                >
                  Login
                </Button>
              </Space>
              <Title level={4} style={{ textAlign: 'center', marginBottom: '30px' }}>
                {type}
              </Title>

              <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'The input is not valid E-mail',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!', min: 5 }]}
                >
                  <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  )
}
