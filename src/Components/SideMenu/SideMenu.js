import { Menu } from 'antd';
import React from "react";
import s from './SideMenu.module.css'

import {ReactComponent as BankIcon} from "../../Assets/bankIcon.svg";
import {ReactComponent as TicketIcon} from "../../Assets/ticketIcon.svg";
import {ReactComponent as IndicateIcon} from "../../Assets/indicateIcon.svg";
import {ReactComponent as PencilIcon} from "../../Assets/pensilIcon.svg";
import {ReactComponent as SheetIcon} from "../../Assets/sheetIcon.svg";
import {ReactComponent as Logo} from "../../Assets/logo.svg";
import {ReactComponent as HomeIcon} from "../../Assets/homeIcon.svg";
import {ReactComponent as LightIcon} from "../../Assets/lightIcon.svg";
import {ReactComponent as PersonIcon} from "../../Assets/personIcon.svg";
import {ReactComponent as LogoutIcon} from "../../Assets/logoutIcon.svg";

const { SubMenu,Item } = Menu;

const SideMenu = () => {

    return (
        <div  className={s.root}>
            <Menu
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
            >
                <div className={s.logo}>
                    <Logo/>
                    <p>PHARE</p>
                </div>
                <Menu.Item key="menu1" icon={<HomeIcon/>}>Tableau de bord</Menu.Item>
                <Menu.Item key="menu2" icon={<LightIcon/>}>Indices Phare</Menu.Item>
                <SubMenu key="sub1" icon={<BankIcon />} title="Sociétés">
                    <Item key="sub11">Partenaires</Item>
                    <Item key="sub12">Partenaires archivés</Item>
                    <Item key="sub13">Prestataires</Item>
                    <Item key="sub14">Prestataires archivés</Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TicketIcon />} title="Tickets - Salariés">
                    <Item key="sub21">Salariés</Item>
                    <Item key="sub22">Tickets</Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<IndicateIcon />} title="Indicateurs">
                    <Item key="sub31">Global</Item>
                    <Item key="sub32">Par société</Item>
                </SubMenu>
                <SubMenu key="sub4" icon={<PencilIcon />} title="Contenu modifiable">
                    <Item key="sub41">Espace Partenaire</Item>
                    <Item key="sub42">Espace Salarié</Item>
                </SubMenu>
                <SubMenu key="sub5" icon={<SheetIcon />} title="Suivi des prestations">
                    <Item key="sub51">Session de permanance</Item>
                    <Item key="sub52">RDV réfferenя</Item>
                    <Item key="sub53">Demande de formations</Item>
                </SubMenu>
            </Menu>
            <div className={s.credentialsBlock}>
                <div className={s.userInfo}>
                    <PersonIcon/>
                    <p>Administrateurs</p>
                </div>
                <div className={s.logout}>
                    <LogoutIcon/>
                    <p>Se déconnecter</p>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
