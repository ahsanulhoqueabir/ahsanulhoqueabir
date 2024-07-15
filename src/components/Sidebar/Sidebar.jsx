import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Profile from "./Profile";
import SocialMedia from "./SocialMedia";

const Sidebar = () => {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="bg-mediumDark  border relative border-[#3e3e3e] py-12 px-4 rounded-2xl ">
      <div>
        <Profile />
      </div>

      <div className="hidden lg:block">
        <div>
          <ContactInfo />
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>

      {showContact && (
        <div className="duration-300">
          <div>
            <ContactInfo />
          </div>
          <div>
            <SocialMedia />
          </div>
        </div>
      )}

      <button
        className="lg:hidden text-[12px] h-[38px] border border-[#383838] hover:border-primary hover:border-r-transparent duration-300 hover:border-t-transparent rounded-bl-2xl rounded-tr-xl absolute top-0 right-0 px-6 text-primary bg-gradient-to-b from-[#e9cb3414] to-[#222223] 
        hover:bg-gradient-to-b hover:from-[#e9cb342b] hover:to-[#222223] "
        onClick={() => setShowContact(!showContact)}
      >
        {showContact ? "Hide Contact" : "  Show Contact"}
      </button>
    </div>
  );
};

export default Sidebar;
