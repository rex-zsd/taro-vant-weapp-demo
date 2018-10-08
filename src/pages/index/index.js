import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    usingComponents: {
      "van-row": '../../components/vant-weapp/dist/row/index',
      "van-col": '../../components/vant-weapp/dist/col/index',
      'van-cell-group': '../../components/vant-weapp/dist/cell-group/index',
      'van-field': '../../components/vant-weapp/dist/field/index',
      'van-button': '../../components/vant-weapp/dist/button/index'
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <van-row gutter={15} customClass='container'>
          <van-col span={8}>
            <van-button size='large' type='warning' onclick={this.props.add}>+</van-button>
          </van-col>
          <van-col span={8}>
            <van-button size='large' type='warning' onclick={this.props.dec}>-</van-button>
          </van-col>
          <van-col span={8}>
            <van-button size='large' type='danger' loading={this.props.counter.loading} onclick={this.props.asyncAdd}>async</van-button>
          </van-col>
        </van-row>

        <View><Text>{this.props.counter.num}</Text></View>
      </View>
    )
  }
}

export default Index
