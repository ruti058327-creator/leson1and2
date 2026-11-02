function Flower({ name, petalColor, centerColor }) {
  const flowerPetalColor = petalColor || '#f3a5bd';
  const flowerCenterColor = centerColor || '#70404d';

  function handleClick() {
    window.alert(`אני פרח מסוג ${name}`);
  }

  return (
    <button
      className="flower"
      type="button"
      style={{ color: flowerCenterColor, backgroundColor: flowerPetalColor }}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}

export default Flower;
