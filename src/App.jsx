import React, { useState } from "react";

// app.jsxのメッセージに色を付けるコンポーネントファイル
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    // stateを更新する処理
    setNum(num + 1);
  };

  const [num, setNum] = useState(100); // これは一般的

  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={contentLadyStyle}>こんにちは！</h1>
      {/* コンポーネント化した関数を呼ぶ */}
      <ColorfulMessage color="blue">みこ技師しか勝たん</ColorfulMessage>
      <ColorfulMessage color="red">ちこポストしか勝たん</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

// 他ファイルでも使用できるようにエクスポート
export default App;
