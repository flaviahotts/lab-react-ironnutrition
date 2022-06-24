import React from 'react';
import foods from './foods.json';
import { useState } from 'react';
import CardFood from './components/CardFood';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div>
      {allFoods.map((currentFood) => {
        return (
          <>
            <CardFood food={currentFood} />
          </>
        );
      })}
    </div>
  );
}

export default App;
