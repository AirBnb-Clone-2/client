import './App.css';
import Nearby from './components/Explore Nearby/Nearby';
import LiveAnyWhere from './components/Live Anywhere/LiveAnyWhere';
import DiscoverExperiences from './components/Discover Experiences/DiscoverExperiences';
import FutrueGetaways from './components/Inspiration for future getaways/FutureGetaways';
import Bottom from './components/Bottom/Bottom';

function App() {
  return (
    <div className="App">
      <Nearby />
      <LiveAnyWhere />
      <DiscoverExperiences />
      <FutrueGetaways />
      <Bottom />
    </div>
  );
}

export default App;
