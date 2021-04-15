# 2021/4/15
### picker view自定义组件
```
import Taro from '@tarojs/taro'
import {View, PickerView, PickerViewColumn} from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import  './index.scss'
export default class PagePicker extends Taro.Component<any,any> {

    constructor () {
        super(...arguments)
        // const date = new Date()
        // const years = []
        // for (let i = 1990; i <= date.getFullYear(); i++) {
        //     years.push(i)
        // }
        // const address = []

        this.state = {
            addresss: [1,2,3,4],
            address:'科尼特国际连锁酒店广州白云机场店',
            // year: date.getFullYear(),
            value: [9999],
            isDisplay:true
        }
    }

    onChange = e => {
        const val = e.detail.value
        this.setState({
            address: this.state.addresss[val[0]],
            value: val
        })
        // console.log(e.detail.value)
    }

    onShowPicker=()=> {
        this.setState({
            isDisplay: false
        })
        // console.log(123)
    }
    onHidePicker=()=>{
        this.setState({
            isDisplay:true
        })
        // console.log(456)
    }


    render () {
        return (
            <View  className={'searcha'}>

                <View onClick={this.onShowPicker}><AtIcon value='map-pin' size='20%' color='white'></AtIcon>{this.state.address}</View>
                {/*<View onClick={this.onHidePicker}><AtIcon value='map-pin' size='20%' color='white'></AtIcon>{this.state.address}</View>*/}
                <PickerView style={{display:(this.state.isDisplay)?'none':''}} indicatorClass={'pickered'}  value={this.state.value} onChange={this.onChange}>
                    <view className='btns'>
                        {/*<view>取消</view>*/}
                        {/*<view>确定</view>*/}
                    </view>
                    <PickerViewColumn>
                        {this.state.addresss.map(item => {
                            return (
                                <View>{item}年</View>
                            );
                        })}
                    </PickerViewColumn>
                </PickerView>
            </View>
        )
    }
}
```
