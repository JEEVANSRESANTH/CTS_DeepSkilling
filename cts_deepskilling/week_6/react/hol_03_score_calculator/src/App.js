import React from 'react';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore name="Jeevan" school="RMDEC" total={85} goal={100} />
      <CalculateScore name="Ravi" school="RMDEC" total={72} goal={100} />
    </div>
  );
}
export default App;
