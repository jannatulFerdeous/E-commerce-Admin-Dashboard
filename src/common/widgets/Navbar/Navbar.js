import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/image/logo.png";
import { FaAngleDown } from "react-icons/fa6";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiHome6Line } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FaLuggageCart } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [activeSubMenus, setActiveSubMenus] = useState({});
  const [activeSubSubMenus, setActiveSubSubMenus] = useState({});

  const handleSubMenuToggle = (index) => {
    setActiveSubMenus((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleSubSubMenuToggle = (index, subIndex) => {
    setActiveSubSubMenus((prev) => ({
      ...prev,
      [`${index}-${subIndex}`]: !prev[`${index}-${subIndex}`],
    }));
  };

  const Menu = [
    { head: "MAIN MENU" },
    {
      title: "Dashboard",
      spacing: true,
      logo: <RiHome6Line />,
      submenu: true,
      submenuItems: [
        { title: "Analytics", to: "/analytics" },
        { title: "E-commerce", to: "/ecommerce" },
      ],
    },
    {
      title: "Applications",
      logo: <RxDashboard />,
      submenu: true,
      submenuItems: [
        {
          title: "Analytics",
          submenu: true,
          submenuItems: [
            { title: "Customer", to: "/customer" },
            { title: "Reports", to: "/reports" },
          ],
        },
      ],
    },
    {
      title: "E-commerce",
      submenu: true,
      logo: <FaLuggageCart />,
      submenuItems: [
        { title: "Products", to: "/products" },
        { title: "Customers", to: "/customerInfo" },
        { title: "Orders", to: "/totalOrders" },
        { title: "OrderDetails", to: "/orderDetails" },
        { title: "Refunds", to: "/refunds" },
      ],
    },
  ];

  return (
    <div className={`flex ${open ? 'w-72' : 'w-24'} duration-300`}>
      {/* Sidebar */}
      <div
        className={`bg-white p-5 pt-8 ${open ? 'w-72' : 'w-24'} duration-300 relative`}
      >
        <CgMenuLeftAlt
          className={`absolute -right-4 top-14 text-4xl rounded-full bg-white border border-secondary p-1 cursor-pointer ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        {/* Logo Section */}
        <div className={`inline-flex pt-6 ${!open && "justify-center"}`}>
          <img
            className={`w-12 ${open ? "h-9" : "h-9"} duration-300`}
            src={logo}
            alt="header logo"
          />
          {open && (
            <b className="px-3 text-2xl tracking-wider duration-300 font-extrabold text-green-700">
              RIP <span className="text-green-500">Zone.</span>
            </b>
          )}
        </div>

        {/* Menu Items */}
        <ul className="relative mt-2">
          {Menu.map((menu, index) => (
            <React.Fragment key={index}>
              {menu.head && open && (
                <li className="absolute text-slate-400 left-3 pt-5 text-sm">
                  {menu.head}
                </li>
              )}
              <li
                className={`text-blue-950 cursor-pointer p-2 hover:bg-green-100 rounded-md ${menu.spacing ? "mt-7" : "mt-2"}`}
                onClick={() => handleSubMenuToggle(index)}  
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl block float-left">
                    {menu.logo}
                  </span>
                  {open && (
                    <span className="text-base flex-1 duration-200">
                      {menu.title}
                    </span>
                  )}

                  {menu.submenu && open && (
                    <FaAngleDown
                      className={`cursor-pointer duration-300 ${!activeSubMenus[index] && "rotate-180"}`}
                    />
                  )}
                </div>
              </li>

              {menu.submenu && activeSubMenus[index] && open && (
                <ul className="list-disc ml-14">
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-blue-950 cursor-pointer p-2 rounded-md`}
                       onClick={() => handleSubSubMenuToggle(index, subIndex)}
                    >
                      <div className="flex justify-between items-center">
                        {submenuItem.to ? (
                          <Link to={submenuItem.to}>{submenuItem.title}</Link>
                        ) : (
                          <span>{submenuItem.title}</span>
                        )}

                        {submenuItem.submenu && open && (
                          <FaAngleDown
                            className={`cursor-pointer duration-300 ${!activeSubSubMenus[`${index}-${subIndex}`] && "rotate-180"}`}
                          
                          />
                        )}
                      </div>

                      {submenuItem.submenu && activeSubSubMenus[`${index}-${subIndex}`] && open && (
                        <ul className="list-disc ml-6 mt-1">
                          {submenuItem.submenuItems.map((subSubItem, subSubIndex) => (
                            <li
                              key={subSubIndex}
                              className="text-blue-950 cursor-pointer p-2 hover:bg-slate-100 rounded-md"
                            >
                              {subSubItem.to ? (
                                <Link to={subSubItem.to}>{subSubItem.title}</Link>
                              ) : (
                                subSubItem.title
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
