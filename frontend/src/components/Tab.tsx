import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

export type Tab = {
  name: string;
  value: string;
};

interface ITabs {
  tabs: Tab[];
  activeTab: string;
  setActiveTab?: Dispatch<SetStateAction<string>>;
  onClick: (tab: string) => void;
}

const Tab = ({ tabs, activeTab, setActiveTab, onClick }: ITabs) => {
  return (
    <div className="flex space-x-3">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => {
            setActiveTab && setActiveTab(tab.value);
            onClick(tab.value);
          }}
          className={`${
            activeTab === tab.value
              ? "text-skin-primary"
              : "text-gray-800 hover:text-gray-800 hover:bg-gray-200"
          } focus-visible:outline-2" relative rounded-lg px-3 py-1.5 text-sm font-medium`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <span className="relative z-20 transition-colors duration-200">
            {tab.name}
          </span>
          {activeTab === tab.value && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-x-0 z-10 mt-2 h-px bg-skin-primary"
              style={{ borderRadius: 9999 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tab;
