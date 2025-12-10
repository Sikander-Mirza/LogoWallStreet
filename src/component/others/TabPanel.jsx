// src/component/others/TabPanel.jsx
import React from "react";

const TabPanel = ({ id, activeSubTab, children }) => (
  <div
    id={id}
    role="tabpanel"
    aria-labelledby={`${id}-tab`}
    className={activeSubTab === id ? "block" : "hidden"}
  >
    {children}
  </div>
);

export default TabPanel;