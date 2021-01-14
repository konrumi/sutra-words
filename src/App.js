import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  Layout,
  Menu
} from 'antd'

import Home from './pages/home'
import About from './pages/about'

import './App.css'

const { Header, Footer, Content } = Layout

export default function App () {
  return (
    <Router>
      <Layout className="site-layout">

        <Header className="site-header site-layout__block">
          <Menu
            mode="horizontal"
            theme="dark"
            defaultSelectedKeys={(() => {
              return [window.location.pathname]
            })()}
          >
            <Menu.Item key="/">
              <Link to="/">主页</Link>
            </Menu.Item>
            <Menu.Item key="/about/">
              <Link to="/about/">关于</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content className="site-content site-layout__block">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/about">
              <About/>
            </Route>
          </Switch>
        </Content>

        <Footer  className="site-footer site-layout__block">Footer</Footer>

      </Layout>
    </Router>
  )
}
