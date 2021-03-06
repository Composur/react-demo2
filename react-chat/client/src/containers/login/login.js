import React, { Component } from 'react'
import { NavBar, Icon, WingBlank, WhiteSpace, List, InputItem,Radio,Button,Toast} from 'antd-mobile';
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo'

import './login.less'

const ListItem=List.Item
class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            type:''
        }
        this.loginHandle=this.loginHandle.bind(this)
        this.toRegister=this.toRegister.bind(this)
    }
    handleChange(name,val) {
        this.setState({
            [name]:val
        })
    }
    loginHandle(){

      // 同步的action
      this.props.login(this.state)

      // 为什么第一次的时候拿不到message
      const {message}=this.props.loginUserInfo
      
      if(message){
          this.errorToast(message)
          return
      }
    }
    toRegister(){
        this.props.history.replace('/register')
    }
  
    backClick() {
        alert('back')
    }
    errorToast=(message)=>{
        Toast.info(message+'!!!', 1);
    }
    render() {
        const {type}=this.state
        const {redirectTo}=this.props.loginUserInfo
        if(redirectTo){
            return <Redirect to={redirectTo}/>
        }
        return (
            <div className='border'>
                <NavBar
                    onLeftClick={this.backClick.bind(this)}
                    mode="dark"
                    leftContent=""
                    rightContent={[
                    ]}
                >WeChat</NavBar>
                <Logo></Logo>
                <WingBlank>
                    <WhiteSpace />
                    <List>
                    <WhiteSpace />
                        <InputItem clear  onChange={val=>{this.handleChange('username',val)}} placeholder='请输入用户名'></InputItem>
                        <InputItem clear  type='password' onChange={val=>{this.handleChange('password',val)}} placeholder='请输入密码' ></InputItem>
                    </List>
                    <ListItem>
                        <span>类型：</span>
                        <Radio checked={type==='admin'?true:false} className="my-radio" onChange={e => this.handleChange('type','admin')}>类型一</Radio>
                        <Radio checked={type==='normal'?true:false} className="my-radio" onChange={e => this.handleChange('type','normal')}>类型二</Radio>
                    </ListItem>
                    <WhiteSpace />
                    <Button type="primary" onClick={this.loginHandle}>登陆</Button>
                    <WhiteSpace />
                    <Button onClick={this.toRegister}>注册</Button>
                </WingBlank>

            </div>
        )
    }
}

//  这个一般会单独写一个container.js 
// export default connect(state=>({}),{login})(Login)
export default Login