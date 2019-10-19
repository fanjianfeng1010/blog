import React from 'react'
import { Layout, Icon, BackTop } from 'antd'
import { Link } from 'react-router-dom'

interface Props {}

const { Footer } = Layout

export const FooterConent: React.FC<Props> = () => {
  return (
    <Layout style={{ height: '10vh', backgroundColor: 'green', border: '1px solid black' }}>
      <Footer style={{ textAlign: 'center', padding: 0, height: '100%', lineHeight: '10vh' }}>
        <Link to="/home" style={{ color: 'black', fontSize: '20px' }}>
          <Icon type="github" style={{ width: '40px', fontSize: '40px' }} />
        </Link>
        <BackTop visibilityHeight={2000} />
      </Footer>
    </Layout>
  )
}

export default FooterConent
