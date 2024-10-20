import {LOGO} from "../utils/constants"
const Header = () => {
  return (
    <div className="absolute p-2 bg-gradient-to-b from-black z-10">
      <img className="w-40"
        src={LOGO}
        alt="logo"
      ></img>
    </div>
  );
};

export default Header;
