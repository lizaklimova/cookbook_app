import { useState } from 'react';

const RecipeIngredientsFields = () => {
  const [count, setCount] = useState<number>(3);

  return (
    <>
      <div>
        <h3>Ingredients</h3>
        <div>
          <button
            onClick={() => {
              setCount(prev => prev + 1);
            }}
          >
            -
          </button>
          <span>{count}</span>
          <button
            onClick={() => {
              setCount(prev => {
                if (prev === 1) return prev;
                return prev - 1;
              });
            }}
          >
            +
          </button>
        </div>
      </div>
      <ul>
        {/* Create Item component and map in ul */}
        <li>
          <select name="ingredient"></select>
          <select name="weight"></select>
          <button>delete</button>
        </li>
      </ul>
    </>
  );
};

export default RecipeIngredientsFields;
