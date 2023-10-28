import React, { useState, useEffect } from "react";
import axios from "axios";
import * as xml2js from "xml2js";
import IndexPage, { Value } from '.././random';

const API_NDL = () => {
  const [data, setData] = useState(null);
  console.log(Value);
  useEffect(() => {
    // if ( Value == undefined ) {
    //     return (
    //         <div>Loading</div>
    //     )
    // }
    const fetchData = async () => {
      const baseUrl = "https://iss.ndl.go.jp/api/sru";
      const params = {
        operation: "searchRetrieve",
        // query: `ndl=100 AND mediatype=1`,
        query: `mediatype=1`, 
        // query: `ndl=${Value} AND mediatype=1`, // NDLで検索 mediatype=1で本だけ
        recordPacking: "xml", // "xml"形式を指定
      };
      console.log(Value);
      console.log(params);

      try {
        const res = await axios.get(baseUrl, { params: params });
        consnole.log(res);
        const parsedData = await asyncParseString(res.data);
        setData(parsedData);
      } catch (error) {
        // エラーハンドリングを行う
        console.error("エラーが発生しました:", error);
      }
    };

    fetchData(Value); // useEffect内で fetchData を呼び出す

    const asyncParseString = (xml) => {
      return new Promise((resolve, reject) => {
        const options = {
          trim: true,
          explicitArray: false,
        };
        xml2js.parseString(xml, options, (err, obj) => {
          if (err) reject(err);
          resolve(obj);
        });
      });
    };

  }, [Value]);

  return <div>{/* データを表示するコンポーネントをここに追加 */}</div>;
};

export default API_NDL;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import * as xml2js from "xml2js";
// import IndexPage from '.././random';

// class API_NDL {
//     constructor(){}
//   public async search(IndexPage: string): Promise<any> {
//     // ベースURL
//     const baseUrl = "https://iss.ndl.go.jp/api/sru";
    
//     const params = {
//       operation: "searchRetrieve",
//     //   query: `title=${keyword} AND mediatype=1`, // タイトルで検索。種別は本(1)のみ。
//     query: `NDL=${IndexPage} AND mediatype=1`,  // NDLで検索 mediatype=1で本だけ
//     recordPacking: "xml"                       // "xml"形式を指定
//     };

//     try {
//       const res = await axios.get(baseUrl, { params: params });
//       const parsedData = await this.asyncParseString(res.data);
//       return parsedData;
//     } catch (error) {
//       // エラーハンドリングを行う
//       console.error("エラーが発生しました:", error);
//       throw error;
//     }
//   }

//   /**
//    * xml2jsのparseStringをPromiseでラップ
//    */
//   private async asyncParseString(xml: string): Promise<any> {
//     return new Promise((resolve, reject) => {
//       const options = {
//         trim: true,
//         explicitArray: false
//       };
//       xml2js.parseString(xml, options, (err, obj) => {
//         if (err) reject(err);
//         resolve(obj);
//       });
//     });
//   }
// }
// new API_NDL(); 

// export default API_NDL;