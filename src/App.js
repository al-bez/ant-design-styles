import Sider from "./Components/SideMenu/SideMenu";
import 'antd/dist/antd.css';
import {Layout, Tag, Row, Col} from 'antd';
import SideMenu from "./Components/SideMenu/SideMenu";
import Logs from "./Components/MainContent/Logs/Logs";
import Information from "./Components/MainContent/Information/Information";
import Header from "./Components/Header/Header";
import React from "react";
import s from './App.module.css'
import Footer from "./Components/Footer/Footer";

function App() {

  const {Content, Sider} = Layout;

  return (
      <div className={s.wrapper}>
        <Layout>
          <Sider style={{background: 'white'}}>
            <SideMenu/>
          </Sider>
          <Layout style={{padding: '0 20px 20px', background: '#F5F5F5'}}>
            <Content style={{padding: 24, margin: 0, background: '#FFFFFF', marginTop: 25, marginBottom: 75}}>
              <Header/>
              <div className={s.headerWrapper}>
                <p className={s.header}>Dossier #32</p>
                <div className={s.tag}>
                  <Tag color="green">Encours</Tag>
                </div>
              </div>
              <p className={s.subheader}>Fiche client</p>
              <div className={s.contentWrapper}>
                <Row>
                  <Col span={14}>
                    <Information/>
                  </Col>
                  <Col span={10}>
                    <Logs/>
                  </Col>
                </Row>
              </div>
              <Footer/>
            </Content>
          </Layout>
        </Layout>
      </div>
  );
}

export default App;
