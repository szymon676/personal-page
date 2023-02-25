export const Header = () => {
  return (
    <nav className="flex justify-around gap-6 text-2xl text-white h-16 items-center">
      <h1>szymoslav</h1>
      
      <ul className="flex gap-4">
        <li className="nav-item">
          <a href="#about">About</a>
        </li>
        <li className="nav-item">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </nav>
  );
};
