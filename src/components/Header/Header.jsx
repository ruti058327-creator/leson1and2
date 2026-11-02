import './Header.css';
import flowerIllustration from './flower.svg';

function Header() {
  return (
    <header className="garden-header">
      <img src={flowerIllustration} alt="" />
      <h1>הגינה שלי</h1>
    </header>
  );
}

export default Header;
