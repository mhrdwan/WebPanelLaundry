import { MailOutlined, AppstoreOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const { SubMenu } = Menu;

const NavbarSide = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick = (e) => {
    console.log(e);
    if (e.key === "dashboard") {
      navigate("/dashboard");
    } else if (e.key === "paket") {
      navigate("/paket");
    } else if (e.key === "promo") {
      navigate("/promo");
    } else if (e.key === "order") {
      navigate("/order");
    } else if (e.key === "keluar") {
      localStorage.removeItem("role")
      navigate("/login");
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        onClick={toggleCollapsed}
        style={{ marginBottom: 16 }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['dashboard']}
        mode="inline"
        inlineCollapsed={collapsed}
        itemIcon={null}
      >
         <Menu.Item key="order">
        <Button type='primary' className="d-flex justify-content-center align-items-center" style={{ margin: "auto", display: 'flex', flexDirection: 'column' }}>
          Tambah Laundry
        </Button>
        </Menu.Item>
        <Menu.Item icon={<AppstoreOutlined />} key="dashboard">Dashboard</Menu.Item>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Menu Paket">
          <Menu.Item key="promo">Promo</Menu.Item>
          <Menu.Item key="paket">Paket</Menu.Item>
        </SubMenu>
        <Menu.Item key="keluar">Keluar</Menu.Item>
      </Menu>
    </div>
  );
};

export default NavbarSide;
