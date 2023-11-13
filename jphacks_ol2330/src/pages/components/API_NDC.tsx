import axios from "axios";
import * as xml2js from "xml2js";

class API_NDC {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  public async search(): Promise<any> {
    // ベースURL
    const baseUrl = "https://iss.ndl.go.jp/api/sru";
    
    const params = {
      operation: "searchRetrieve",
    //   query: `title=${keyword} AND mediatype=1`, // タイトルで検索。種別は本(1)のみ。
    query: `ndc=${this.value} AND mediatype=1`,  // NDCで検索 mediatypeで本だけ
    // query: `ndc%3d"${this.value}%20AND%20mediatype%3d"4`,
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

export default API_NDC;