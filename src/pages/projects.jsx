import React, {Component} from 'react'; 
import { Link } from 'react-router-dom';
import {Layout, Card, Menu, Button, Drawer} from 'antd'
import HeaderFixed from '../components/header'
import Img1 from '../images/WechatIMG1.png'
import Img2 from '../images/Batman.jpeg'
import Img3 from '../images/funnyAnimal.png'
import Img4 from '../images/GAN/Generated_images10.png'
import Img5 from '../images/WechatIMG2.png'

const { Content } = Layout;
const { Meta } = Card;

const items=[
    {
        displayName: 'PhotoShop',
        className: 'PS',
        link: '#'
    },
    {
        displayName: 'Machine Learning',
        className: 'ML',
        link: '#'
    },
    {
        displayName: 'Web',
        className: 'web',
        link: '#'
    }, 
    {
        displayName: 'Data Visualization',
        className: 'Data',
        link: '#'
    }
]


export default class ProjectScreen extends Component{
    constructor(){
        super()
        this.state ={
            visible: false, 
        }
        this.toggle = this.toggle.bind(this)
        this.onClose = this.onClose.bind(this)
    }

    toggle=()=>{
        this.setState({visible: true})
    }
    onClose=()=>{
        this.setState({visible: false})
    }

    render(){
        return(
            <>
                <HeaderFixed />
                <Content>
                    <span style={{display:'flex', justifyContent:'flex-end', padding:'20px', position:'sticky'}}>
                        <Button style={{borderRadius:'100%', height: '50px', width:'50px',display:'flex', justifyContent:'center', alignItems:'center'}} icon='menu' onClick={this.toggle}></Button>
                    </span>
                    <Drawer visible={this.state.visible} onClose={this.onClose} closable={true} title='More Topics' placement='right'>
                    <Menu mode='inline' style={{border:'none'}}>
                        {items.map((item, index)=>{
                            return(
                                <Menu.Item key={index+1}><Link to={item.link}>{item.displayName}</Link></Menu.Item>
                            )
                        })}
                    </Menu>
                    </Drawer>
                    <div className='project-pictures' style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                        <Card hoverable style={{width: 300, margin:'20px 30px'}}
                        cover={<img src={Img1} alt='ps-project-1'/>}  
                        headStyle={{padding:'5px 10px', fontWeight: 700, fontSize: '20px'}}
                        bodyStyle={{padding:'5px 10px'}} className='PS'>
                            <Meta title='PS project #1' description='practice' />
                        </Card>
                        <Card hoverable style={{width: 300, margin:'20px 30px'}}
                        cover={<img src={Img2} alt='ps-project-2'/>}  
                        headStyle={{padding:'5px 10px', fontWeight: 700, fontSize: '20px'}}
                        bodyStyle={{padding:'5px 10px'}} className='PS'>
                            <Meta title='PS project #2' description='placeholder' />
                        </Card>
                        <Card hoverable style={{width: 300, margin:'20px 30px'}}
                        cover={<img src={Img3} alt='ps-project-3'/>}  
                        headStyle={{padding:'5px 10px', fontWeight: 700, fontSize: '20px'}}
                        bodyStyle={{padding:'5px 10px'}} className='PS'>
                            <Meta title='PS project #3' description='placeholder' />
                        </Card>
                        <Card hoverable style={{width: 300, margin:'20px 30px'}}
                        cover={<img src={Img3} alt='ps-project-3'/>}  
                        headStyle={{padding:'5px 10px', fontSize: '20px'}}
                        bodyStyle={{padding:'5px 10px'}} className='PS'>
                            <Meta title='PS project #3' description='placeholder'/>
                        </Card>
                        <Card hoverable style={{width: 300, margin:'20px 30px'}}
                        cover={<img src={Img4} />} 
                        headStyle={{padding:'5px 10px', fontSize: '20px'}}
                        bodyStyle={{padding:'5px 10px'}} className='ML'>
                            <Meta title='Simple GAN result' description='A basic GAN model that generates hand-written digits using the MNIST database.'/>
                        </Card>
                        <Card hoverable style={{width: 300, margin:'20px 30px'}}
                        cover={<img src={Img5} alt='ps-project-2'/>}  
                        headStyle={{padding:'5px 10px', fontWeight: 700, fontSize: '20px'}}
                        bodyStyle={{padding:'5px 10px'}} className='PS'>
                            <Meta title='Logo-Stylit' description='possible logo for our iOS app' />
                        </Card>
                    </div>
                </Content>
            </>
        )
    }
}