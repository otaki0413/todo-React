import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  // 変数にプロパティを格納
  const contentLadyStyle = {
    color: "pink",
    fontSize: "18px"
  };

  const onClickButton = () => alert();

  return (
    <>
      <h1 style={contentLadyStyle}>こんにちは！</h1>
      {/* コンポーネント化した関数を呼ぶ */}
      <ColorfulMessage color="blue">みこ技師しか勝たん</ColorfulMessage>
      <ColorfulMessage color="red">ちこポストしか勝たん</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// 他ファイルでも使用できるようにエクスポート
export default App;
