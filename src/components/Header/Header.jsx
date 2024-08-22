import React from 'react';
import { Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from '../themetoggle/ThemeToggle';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', slug: "/", active: true },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "Profile", slug: "/profile", active: authStatus },  // Added Profile link
  ];

  const mainNavItems = navItems.filter(item => ['Home', 'All Posts', 'Add Post'].includes(item.name) && item.active);
  const authNavItems = navItems.filter(item => ['Login', 'Signup'].includes(item.name) && item.active);

  return (
    <header className='w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex items-center justify-between'>
          {/* Logo on the left */}
          <div className='flex items-center'>
            <Link to='/'>
              <Logo width='60px' />
            </Link>
          </div>

          {/* Main navigation items in the center */}
          <ul className='flex items-center space-x-6'>
            {mainNavItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='px-6 py-2 text-xl text-white font-semibold hover:bg-white hover:text-blue-500 rounded-full transition-colors duration-300'
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Auth buttons and Profile link on the right */}
          <div className='flex items-center space-x-6'>
            {authStatus ? (
              <>
                <button
                  onClick={() => navigate('/profile')}
                  className='px-6 py-2 text-xl text-white font-semibold hover:bg-white hover:text-blue-500 rounded-full transition-colors duration-300'
                >
                  Profile
                </button>
                <LogoutBtn />
              </>
            ) : (
              authNavItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='px-6 py-2 text-xl text-white font-semibold hover:bg-white hover:text-blue-500 rounded-full transition-colors duration-300'
                  >
                    {item.name}
                  </button>
                </li>
              ))
            )}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export default Header;
