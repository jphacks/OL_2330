import React, { useState, useEffect } from 'react';

function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function IndexPage() {
  const myList = Array.from({ length: 99 }, (_, index) => index + 1);
  const [randomNumber, setRandomNumber] = useState(null);
  const [Value, setValue] = useState(null);

  useEffect(() => {
    const randomElement = getRandomElement(myList);
    setRandomNumber(randomElement);

    let newValue = null;

    if (randomElement !== null) {
      if (randomElement < 10) {
        newValue = `0${randomElement}0`;
      } else {
        newValue = `${randomElement}0`;
      }
      console.log(newValue);
    }

    setValue(newValue);
  }, []);

  return (
    <div>
      {Value !== null ? (
        <p>{Value}</p>
      ) : (
        <p>1</p>
      )}
    </div>
  );
}

export default IndexPage;
