import React, { useState, useEffect } from 'react';
import Image from "next/image";
import nekored from 'src/pages/images/nekored.png';
import NDC from "./json/NDC.json";
import axios from "axios";
import * as xml2js from "xml2js";
// import API_NDC from "./components/API_NDC";

function getRandomElement(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function IndexPage() {
  const myList = Array.from({ length: 99 }, (_, index) => index + 1);
  const [randomNumber, setRandomNumber] = useState(null);
  const [Value, setValue] = useState(null);
  const [book, setNDC] = useState(null);

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
    // let NDC_responce = new API_NDC();
    // NDC_responce.search();
    // NDC_responce.asyncParseString();
    // console.log(NDC_responce);
    // console.log(NDC_responce.searchRetrieveResponse);
    // if (NDC_responce.searchRetrieveResponse !== undefined) {
    //   setNDC(NDC_responce.searchRetrieveResponse);
    // }
  }, []);

  class API_NDC {
    // value: string;
  
    // constructor(value: string) {
    //   this.value = value;
    // }
  
    public async search(): Promise<any> {
      // ベースURL
      const baseUrl = "https://iss.ndl.go.jp/api/sru";
      
      const params = {
        operation: "searchRetrieve",
      //   query: `title=${keyword} AND mediatype=1`, // タイトルで検索。種別は本(1)のみ。
      query: `ndc=${Value} AND mediatype=1`,  // NDCで検索 mediatypeで本だけ
      recordPacking: "xml"                       // "xml"形式を指定
      };
      console.log("aa");
      console.log(params);
  
      try {
        const res = await axios.get(baseUrl, { params: params });
        const parsedData = await this.asyncParseString(res.data);
        return parsedData;
      } catch (error) {
        // エラーハンドリングを行う
        console.error("エラーが発生しました:", error);
        throw error;
      }
    }
  
    /**
     * xml2jsのparseStringをPromiseでラップ
     */
    private async asyncParseString(xml: string): Promise<any> {
      return new Promise((resolve, reject) => {
        const options = {
          trim: true,
          explicitArray: false
        };
        xml2js.parseString(xml, options, (err, obj) => {
          if (err) reject(err);
          resolve(obj);
        });
      });
    }
  }

  useEffect(() => {
    if(Value!==null) {
        let NDC_responce = new API_NDC();
        NDC_responce.search();
        console.log(NDC_responce);
        console.log(NDC_responce.searchRetrieveResponse);
        if (NDC_responce.searchRetrieveResponse !== undefined) {
    
          setNDC(NDC_responce.searchRetrieveResponse);
          
        } else {
          
        }}
      }, [Value]);

  return (
    <div>
      {Value !== null ? (
        <p>おすすめは {Value} 番<br></br>{ NDC[Value] } だよ！
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