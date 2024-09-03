'use client';

import * as React from 'react';
import { motion } from 'framer-motion';


let tabs = [
  { id: "world", label: "World" },
  { id: "ny", label: "N.Y." },
  { id: "business", label: "Business" },
  { id: "arts", label: "Arts" },
  { id: "science", label: "Science" },
];

function AnimatedTabs() {
  let [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <div className="">
      <div className="flex space-x-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? "" : "hover:opacity-50"
            } relative rounded-full px-3 py-1.5 text-sm font-medium text-neutral-100 outline-2 outline-sky-400
            focus-visible:outline transition`}
          >
            {activeTab === tab.id && (
              <motion.div
                transition={{ type: "spring", duration: 0.6 }}
                layoutId="active-pill"
                style={{
                  borderRadius: 9999,
                }}
                className="bg-white absolute inset-0"
              />
            )}
            <span className="relative z-10 mix-blend-exclusion">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default AnimatedTabs