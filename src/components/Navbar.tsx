
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Navbar = () => {
  return (
    <div className="container z-50 sticky border-b border-gray-100">
      <div className="p-5 flex justify-between items-start">
        <div className="flex items-center">
          <img src="/src/assets/airbnb-logo.jpeg" className="w-12 h-12" />
          <p className="text-airbnb-bg-red text-2xl font-semibold tracking-tight">
            airbnb
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="flex justify-center gap-3 mb-2 font-light">
            <div className="hover:bg-airbnb-hover cursor-pointer p-3 rounded-full">
              Stays
            </div>
            <div className="hover:bg-airbnb-hover cursor-pointer p-3 rounded-full">
              Experiences
            </div>
          </div>
          <div className="flex justify-between items-center  border rounded-full border-gray-50">
            <div className="p-3 hover:bg-airbnb-hover">
              <p className="text-[12px]">Where</p>
              <input
                placeholder="Search destination"
                className="outline-none focus:outline-none active:outline-none"
              />
            </div>
            <div className="p-3">
              <p className="text-[12px]">Dates</p>
              <p className="text-[14px]">Add Dates</p>
            </div>
            <div className="p-3">
              <p className="text-[12px]">Who</p>
              <p className="text-[14px]">Add guests</p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly items-center">
          <div className="p-3 hover:bg-airbnb-hover rounded-3xl cursor-pointer">
            <p className="text-[14px] font-semibold">Airbnb your home</p>
          </div>
          <div className="hover:bg-airbnb-hover cursor-pointer h-10 w-10 rounded-full flex items-center justify-center">
            <LanguageIcon />
          </div>
          <div className="w-[86px] h-[48px] p-5 cursor-pointer rounded-full border flex items-center justify-center hover:shadow-lg">
            <MenuIcon />
            <AccountCircleRoundedIcon />
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Navbar;
