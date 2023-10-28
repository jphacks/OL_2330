import React from 'react'; // Reactもインポートする必要があります
import { useState } from 'react';

function getRandomElement(list: number[]): number {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

const IndexPage = () => {
  const myList: number[] = Array.from({ length: 100 }, (_, index) => index + 1);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleRandomButtonClick = () => {
    const randomElement = getRandomElement(myList);
    setRandomNumber(randomElement);
  };

  return (
    <div>
      <button onClick={handleRandomButtonClick}>ランダム表示</button>
      {randomNumber !== null && (
        <p>ランダムに選ばれた要素: {randomNumber}</p>
      )}
    </div>
  );
};

export default IndexPage;
