import React, { useState, useEffect } from 'react';
import Image from "next/image";
import nekored from 'src/pages/images/nekored.png';
import NDC from "./json/NDC.json";

function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function IndexPage() {
  const myList = Array.from({ length: 99 }, (_, index) => index + 1);
  const [randomNumber, setRandomNumber] = useState(null);
  const [Value, setValue] = useState(null);
  const [ndc, setNDC] = useState(null);

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
    // setNDC(NDC[Value]);
    // console.log(ndc);
    console.log(NDC[newValue]);
  }, []);

  return (
    <div>
      {Value !== null ? (
        <p>お勧めは {Value} 番<br></br>{ NDC[Value] } だよ！
        <div className="neko">
      <Image  src={nekored} width="300" height="300" alt='logo'/>
      </div></p>
      ) : (
        <p>1</p>
      )}
    </div>
  );
}

export default IndexPage;