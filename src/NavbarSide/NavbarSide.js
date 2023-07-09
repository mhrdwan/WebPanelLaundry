import { MailOutlined, AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const { SubMenu } = Menu;

const NavbarSide = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    if (e.key === "dashboard") {
      navigate("/dashboard");
    } else if (e.key === "paket") {
      navigate("/paket");
    } else if (e.key === "promo") {
      navigate("/promo");
    } else if (e.key === "keluar") {
      navigate("/login");
    }
  }

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['dashboard']}
      mode="inline"
    >
      <Menu.Item icon={<AppstoreOutlined />} key="dashboard">Dashboard</Menu.Item>
      <SubMenu key="sub1" icon={<MailOutlined />} title="Menu Paket">
        <Menu.Item key="promo">
          Promo
        </Menu.Item>
        <Menu.Item key="paket">Paket</Menu.Item>
      </SubMenu>
      <Menu.Item key="keluar">Keluar</Menu.Item>
    </Menu>
  );
};

export default NavbarSide;
