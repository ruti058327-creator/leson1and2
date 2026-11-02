import Header from './components/Header/Header';
import Flower from './components/Flower/Flower';
import './App.css';

const flowers = [
  {
    id: 1,
    name: 'ורד',
    petalColor: '#f3a5bd',
    centerColor: '#70404d',
  },
  {
    id: 2,
    name: 'חמנייה',
    petalColor: '#f5c84c',
    centerColor: '#704b22',
  },
  {
    id: 3,
    name: 'סיגלית',
    petalColor: '#b7a3e8',
    centerColor: '#493b67',
  },
];

function App() {
  return (
    <main className="App">
      <Header />

      <section className="garden-section" aria-labelledby="examples-heading">
        <h2 id="examples-heading">דוגמאות לפרחים</h2>
        <div className="flower-list">
          <Flower name="כלנית" petalColor="#e85d75" />
          <Flower name="נרקיס" centerColor="#755b2b" />
          <Flower name="פרח מסתורי" />
        </div>
      </section>

      <section className="garden-section" aria-labelledby="garden-heading">
        <h2 id="garden-heading">הפרחים בגינה שלי</h2>
        <div className="flower-list">
          {flowers.map((flower) => (
            <Flower
              key={flower.id}
              name={flower.name}
              petalColor={flower.petalColor}
              centerColor={flower.centerColor}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
