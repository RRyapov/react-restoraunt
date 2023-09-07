import React, { useEffect, useState } from "react";
// 
export const Navigation = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [selectMenuItem, setSelectedMenuItem] = useState("БРОНЬ");

  useEffect(() => {
    setTimeout(() => {
      const newNavItems = ["ГЛАВНАЯ", "МЕНЮ", "О НАС", "БРОНЬ"];
      setMenuItems(newNavItems);
      setSelectedMenuItem(newNavItems[0]);
    }, 3000);
  }, []);

  return (
    <div className="nav">
      {menuItems.length ? (
        menuItems.map((navItem) => (
          <a
            className={`nav-item ${
              selectMenuItem === navItem ? "nav-item--select" : ""
            }`}
            onClick={() => setSelectedMenuItem(navItem)}
          >
            {navItem}
          </a>
        ))
      ) : (
        <a className="nav-item">Нет данных</a>
      )}
    </div>
  );
};
