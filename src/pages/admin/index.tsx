import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Table, Divider, Button,Tag } from 'antd';
import {deleteArticleById,batchDeleteArticle,getArticles} from '../../api/blog';

type PropFromMap = {}
type PropFromDispatch = {}
type ComponentProps = PropFromDispatch & RouteComponentProps & PropFromMap



const columns = [
  {
    title: 'title',
    dataIndex: '_id',
    key: '_id',
    render: (text: string, record: any) => {
      return  (<Tag>{record.title}</Tag>)
    }
  },
  {
    title: 'category',
    dataIndex: 'category.name',
    key: 'age',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text:any, record:any) => (
      <span>
        <Divider type="vertical" />
        <Button onClick={async(ev: any) => {
          let result = await deleteArticleById(record._id)
          console.log(result);
        }}>Delete</Button>
      </span>
    ),
  },
];
interface IState  {
  selectedRowKeys: Array<any>
  articleData: Array<any>
  artilceIds: string[]
  loading:boolean
  
}
class Admin extends Component<ComponentProps, IState> {
  constructor(props: ComponentProps) {
    super(props) 
    this.state = {
      loading:false,
      selectedRowKeys: [], // Check here to configure the default column
      articleData: [],
      artilceIds:[]
    };
  }

  // 需求 点击复选框时把 key 添加到 stringId 数组,取消时同 stringId 数组删除
  
  // 组件加载成功后把数组添加进 state
  async componentDidMount() {
    this.fetchData()
  }
 
  // 选择改变时,把已经被选中的内容添加到组件状态中
  onSelectChange = (selectedRowKeys:any,selectedRows:any) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);    
    let aticleId:Array<any> = []
    for (let index = 0; index < selectedRows.length; index++) {
      const element = selectedRows[index];
      aticleId.push(element._id)
    }
    this.setState({ selectedRowKeys,artilceIds:aticleId });
  }

  fetchData() {
    this.setState({ loading: true })
    getArticles(1, 20).then(res => {
      this.setState({
        articleData: res.data.items,
        loading:false
      })
    })
  }

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    }
    return (
      <div>
        <Button onClick={async(ev: any) => {
          console.log(this.state.selectedRowKeys);
          let result = await batchDeleteArticle(this.state.artilceIds)
          console.log(result);
          if (result) {
             this.fetchData()
          }
        }}>删除已选内容</Button>
        <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.articleData} />
        
      </div>
    )
  }
}


export default Admin