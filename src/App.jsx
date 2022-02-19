import React, { useEffect, useState } from "react";
// app.jsxのメッセージに色を付けるコンポーネントファイル
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("First");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1); // state更新
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // 変数numの値を監視して、変化があった時のみ処理が走る
  useEffect(() => {
    console.log("numが変化しました");
    if (num > 0) {
      if (num % 3 === 0) {
        // 左がfalseの場合、右を返す（trueの場合は、左を返す）
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 左がtrueの場合、右を返す
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [num]);

  return (
    <>
      <h1 style={{ color: "pink" }}>こんにちは！</h1>
      {/* コンポーネント化した関数を呼ぶ */}
      <ColorfulMessage color="blue">みこ技師</ColorfulMessage>
      <ColorfulMessage color="red">ちこポス</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>顔文字切り替え</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

// 他ファイルでも使用できるようにエクスポート
export default App;
