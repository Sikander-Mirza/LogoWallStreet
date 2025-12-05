// src/component/others/TabPanel.jsx
import React from "react";

const TabPanel = ({ id, activeTab, children }) => (
  <div
    id={id}
    role="tabpanel"
    aria-labelledby={`${id}-tab`}
    className={activeTab === id ? "block" : "hidden"}
  >
    {children}
  </div>
);

export default TabPanel;