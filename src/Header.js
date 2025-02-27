import React, { useState, useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
import { MdLocationOn } from "react-icons/md";
import UserContext from "./UseContext";
import logo from "./assets/logo.png";

function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [open, setOpen] = useState(true);
  const [status, setStatus] = useState(null);
  const cartitem = useSelector((store) => store.cart.items);
  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const toggleModal = () => {
    setShow(!show);
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLat = position.coords.latitude;
          const newLng = position.coords.longitude;

          setUser({
            user: {
              lat: newLat,
              lng: newLng,
            },
          });
          console.log(user);

          setStatus("");
        },
        () => {
          setStatus("Please Grant Permission");
        }
      );
    }
  };

  return (
    <nav className="z-40 relative flex justify-between items-center max-w-[100vw] px-6 py-2 bg-white shadow-sm">
      <div className="lg:ml-[15vw] ml-[5vw]">
        <Link to="/start">
          <img
            src={logo}
            className="h-[4rem] min-w-32 transition-transform duration-300 hover:scale-110"
            alt="AwsmFoodz Logo"
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center space-x-8 px-12 gap-8 maxw-[80vw] mx-auto">
        <button className="relative" onClick={getLocation}>
          <MdLocationOn className="text-3xl text-gray-700 hover:text-purple-600 transition duration-300" />
          {status && (
            <p className="absolute top-10 left-0 text-sm text-gray-600">
              {status}
            </p>
          )}
        </button>

        <li className="list-none">
          <Link
            to="/start"
            className="relative  text-gray-700 font-semibold hover:text-[#1C1572]  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#1C1572] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#1C1572] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
            Home
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="/help"
            className="relative  text-gray-700 font-semibold hover:text-[#1C1572] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#1C1572] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#1C1572] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
            Help
          </Link>
        </li>
        
        <li className="list-none">
          <Link
            to="/about"
            className="relative  text-gray-700 font-semibold hover:text-[#1C1572] cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#1C1572] before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#1C1572] after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]"
            >
            About
          </Link>
        </li>
        <li className="list-none">
          <Link
            to="/newcart"
            className=" text-gray-700 font-semibold flex items-center hover:text-purple-600 transition duration-300"
          >
            <FaShoppingCart className="mr-2" />
            <span>{cartitem.length}</span>
          </Link>
        </li>
      </div>

      {/* Hamburger Menu for Small Screens */}
      {/* <div className="md:hidden flex items-center space-x-4">
        <button className="relative" onClick={getLocation}>
          <MdLocationOn className="text-3xl text-gray-700 hover:text-purple-600 transition duration-300" />
          {status && (
            <p className="absolute top-10 left-0 text-sm text-gray-600">
              {status}
            </p>
          )}
        </button>

        <button
          id="hamburger"
          className="bg-purple-600 text-white p-2 rounded-lg focus:outline-none hover:bg-purple-700 transition duration-300"
          onClick={toggleModal}
        >
          {open ? <HiMiniBars3 /> : <RxCross1 />}
        </button>
      </div> */}

      {/* <div
        id="menu"
        className={`md:hidden bg-white shadow-lg min-h-[100vh] right-0 top-[8%] w-full flex items-center absolute inset-0 px-10 z-50 transform ${
          modalOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start gap-8 py-10">
          <li>
            <Link
              to="/"
              className="text-2xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300"
              onClick={toggleModal}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/help"
              className="text-2xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300"
              onClick={toggleModal}
            >
              Help
            </Link>
          </li>
          <li>
            
            <Link
              to="/about"
              className="text-2xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300"
              onClick={toggleModal}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-2xl font-semibold text-gray-700 hover:text-purple-600 transition duration-300 flex items-center"
              onClick={toggleModal}
            >
              <FaShoppingCart className="mr-2" />
              <span>{cartitem.length}</span>
            </Link>
          </li>
        </ul>
      </div> */}
       <button className="relative md:hidden" onClick={getLocation}>
          <MdLocationOn className="text-3xl text-gray-700 hover:text-purple-600 transition duration-300" />
          {status && (
            <p className="absolute top-10 left-0 text-sm text-gray-600">
              {status}
            </p>
          )}
        </button>
        <Link
            to="/cart"
            className="md:hidden text-gray-700 font-semibold flex items-center hover:text-purple-600 transition duration-300"
          >
            <FaShoppingCart className="mr-2" />
            <span>{cartitem.length}</span>
          </Link>
      <div className="md:hidden pr-5">
        <button
          onClick={toggleModal}
          className="fixed right-0 z-10 top-3 py-3 px-6 text-center align-middle"
        >
        {
          show?(<RxCross1 className='text-3xl'  />):( <FaBars className='text-3xl' />)
        }
         
        </button>
        {show && (
          <>
            <div className="inset-0   z-40" onClick={toggleModal}></div>
            <ul
              role="menu"
              className="fixed right-0 flex flex-col gap-4 top-16 z-50 w-1/2 bg-white bg-opacity-90 shadow-lg p-5 transition-transform transform translate-x-0"
            >
             <Link to="/" onClick={toggleModal}>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
               Home
              </li>
              </Link>
  <Link to="/help" onClick={toggleModal}>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
              Help
              </li>
</Link>
   <Link to="/about" onClick={toggleModal}>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
             About
              </li>
</Link>
 <Link to="/cart" onClick={toggleModal}>
              <li className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-gray-200">
               
                  Cart
              
              </li>
              </Link>
            </ul>
          </>
        )}
      </div>
    </nav>
  );
}

export default Header;
