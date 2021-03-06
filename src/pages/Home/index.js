import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Tabs } from 'antd';
import { toJS } from 'mobx'
import WirteBlog from './WirteBlog'
import AllBlogPane from './AllBlogPane'
import FollowerBlogPane from './FollowerBlogPane'
import './index.less'

const { TabPane } = Tabs;

@inject(stores => {
  const { homeStore } = stores
  const { homeValue, changeHomeData } = homeStore
  return {
    homeValue,
    changeHomeData,
  }
})

@observer
class Home extends Component {

  componentDidMount() {
    // 创建编辑器
  }
  render() {
    return (
      <div className="Home">
        <WirteBlog />
        <Tabs defaultActiveKey="1" >
          <TabPane tab="全部" key="1">
            <AllBlogPane />
          </TabPane>
          <TabPane tab="关注" key="2">
            <FollowerBlogPane />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Home