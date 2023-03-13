import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'calculator', text: 'Calculator' },
  { path: 'quote', text: 'Quote' },
];

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    listStyle: 'none',
    justifyContent: 'space-between',
    lineHeight: '50px',
    paddingBottom: '2%',
  };
  const listStyle = {
    paddingRight: '8%',
    fontSize: 'x-large',
  };
  return (
    <nav>
      <ul style={navStyle}>
        <li style={{ fontSize: 'xxx-large' }}>Math Magicians</li>
        <div style={{
          display: 'flex',
          paddingRight: '10%',
        }}
        >
          {links.map((link) => (
            <li key={link.text} style={listStyle}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? '#007cff' : '#9e9e9e',
                })}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
