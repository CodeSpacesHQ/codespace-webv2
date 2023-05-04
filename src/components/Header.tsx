const Header = () => {
  return (
    <header className="flex justify-between h-[100px] items-center px-[102px]">
      <div className='logo'>LOGO</div>
      <div className='menu'>
        <ul className="flex space-x-[61px]">
          <li>About Us</li>
          <li>Donate</li>
          <li>Shop</li>
          <li>Job Opportunities</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='donate'>
        <button>Donate</button>
      </div>
    </header>
  );
};

export default Header;
