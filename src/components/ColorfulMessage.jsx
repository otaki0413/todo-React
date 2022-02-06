// app.jsxのメッセージに色を付けるコンポーネントファイル
import React from "react";

const ColorfulMessage = (props) => {
  // オブジェクトの分割代入
  const { color, children } = props;
  console.log(props);
  const contentStyle = {
    color,
    fontSize: "30px"
  };
  // 動的に変化させたいメッセージを返す
  // childrenは、タグで囲った中身を渡す時に使う
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
