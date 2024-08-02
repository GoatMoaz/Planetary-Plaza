import Cart from "./UI/Cart";
import { useState } from "react";
import CartDialog from "./CartDialog";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavMenu from "./NavMenu";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
const Nav = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartHandler = () => {
    setCartOpen(true);
  };

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="w-full bg-indigo-950 fixed top-0 shadow-xl z-20">
        <div className="flex justify-between items-center rounded-md px-4 py-2 w-full md:w-5/6 mx-auto">
          <a href="/">
            <h1 className="text-3xl text-slate-200 font-bold logo">
              ShopVerse
            </h1>
          </a>
          <div className="md:hidden flex items-center gap-4 cursor-pointer text-slate-200">
            <div onClick={cartHandler}>
              <Cart />
            </div>
            {!menuOpen && (
              <Bars3Icon className="h-6 w-6" onClick={menuHandler} />
            )}
            {menuOpen && (
              <XMarkIcon className="h-6 w-6" onClick={menuHandler} />
            )}
          </div>

          <div className="md:flex justify-center hidden items-center gap-4 text-slate-200">
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Shop
            </a>
            <a href="#" className="link">
              Categories
            </a>
          </div>

          <NavMenu open={menuOpen} setMenu={menuHandler} />

          <div className="md:flex hidden justify-center items-center gap-4 text-slate-200">
            <div onClick={cartHandler} className="cursor-pointer">
              <Cart />
            </div>
            <a
              href="#"
              className="bg-slate-950 rounded-2xl px-6 py-2 hover:bg-black transition-all duration-300"
            >
              Login
            </a>
          </div>
        </div>
      </nav>
      <CartDialog open={cartOpen} setOpen={setCartOpen} products={products} />
    </>
  );
};

export default Nav;
