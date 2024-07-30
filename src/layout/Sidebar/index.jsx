import React from 'react';
import styles from './Sidebar.module.css';
import { FaHome, FaProjectDiagram, FaTasks, FaCalendar, FaChartBar } from 'react-icons/fa';

const sidebarItems = [
  { icon: <FaHome />, label: 'Dashboard' },
  { icon: <FaProjectDiagram />, label: 'Projects' },
  { icon: <FaTasks />, label: 'Tasks' },
  { icon: <FaCalendar />, label: 'Calendar' },
  { icon: <FaChartBar />, label: 'Reports' },
];

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        {sidebarItems.map((item, index) => (
          <li key={index} className={styles.sidebarItem}>
            <div className={styles.iconBox}>{item.icon}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;