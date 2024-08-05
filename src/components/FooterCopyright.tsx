import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";

const FooterCopyright = () => {
  return (
    <div className="p-10 flex items-center justify-between font-light text-[14px]">
      <div className="flex items-center gap-2">
        <p>&copy; 2024 Airbnb, Inc.</p>
        <div className="flex gap-2">
          <span className="hover:underline">. Privacy</span>
          <span className="hover:underline">. Terms</span>
          <span className="hover:underline">. Sitemaps</span>
          <span className="hover:underline">. Company details</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          <LanguageOutlinedIcon />
          <p>English(IN)</p>
        </div>
        <div className="flex items-center gap-1">
          <FacebookOutlinedIcon />
          <SubscriptionsOutlinedIcon />
          <WhatshotOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
