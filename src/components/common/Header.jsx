
const Header = () => {
  return (
    <div>
      <header className="text-gray-400 body-font bg-lime-800  sticky top-0">
  <div className="container mx-auto flex flex-wrap p-2 px-0 py-1 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
        <img className=" rounded w-14" src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png" alt="" />
    
      <span className="ml-3 text-xl">Food House</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      {/* <a className="mr-5 hover:text-gray-900">First Link</a>
      <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <button className="inline-flex items-center bg-lime-950 border-0 py-1 px-3 focus:outline-none hover:bg-lime-200 hover:text-gray-700 rounded-lg mr-2 text-base mt-4 md:mt-0">
      Login
    </button>
    <button className="inline-flex items-center hover:text-gray-700 bg-lime-950 border-0 py-1 px-3 focus:outline-none hover:bg-lime-200 rounded-lg text-base mt-4 md:mt-0">
      Signup
    </button>
  </div>
</header>;

    </div>
  )
}

export default Header

