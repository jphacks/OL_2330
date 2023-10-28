import React, { useState, useEffect } from 'react';

function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// ランダムで2桁の数字を表示
function IndexPage() {
  const myList = Array.from({ length: 99 }, (_, index) => index + 1);
  // ランダムな数字
  const [randomNumber, setRandomNumber] = useState(null);
  // 2桁表示に直したもの
  const [Value, setValue] = useState(null);

  useEffect(() => {
    (async () => {
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
  })();
  }, []);
  console.log(Value);
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

// export { Value };
export default IndexPage;