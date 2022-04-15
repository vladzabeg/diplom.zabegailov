import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { Menu, Avatar, Popover } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const HeaderContent = ({ className, user }) => {
  const content = (
    <div>
      <p>Роль: {user.about}</p>
      <p>Email: {user.email}</p>
    </div>
  );

  return (
    <>
      <div className="container">
        <div className={style.menuWrapper}>
          <div className="logo" />
          <Menu mode="horizontal" className={style.menu}>
            <Menu.Item key="/">
              <span>Home</span>
              <Link to='/'/>
            </Menu.Item>
            <Menu.Item href="*">
              <span>Documents</span>
              <Link to='*'/>
            </Menu.Item>
            <Menu.Item key="GitHub">GitHub</Menu.Item>
          </Menu>
          <div>
            <Popover
              placement="bottomRight"
              title={user.name}
              content={
                <div>
                  <span>Назначение:</span><br />
                  <span><b>{user.about}</b></span><br/>
						      <span>Почта:</span><br />
                  <span><b>{user.email}</b></span>
                </div>
              }
              trigger="click"
            >
              <Avatar
                size="large"
                icon={<UserOutlined />}
                src={user.avatar || UserOutlined || <span>Аватар</span>}
                style={{ backgroundColor: "#7D6EE7", cursor: "pointer" }}
              />
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};
