import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "30px"
  };
  // 動的に変化させたいメッセージを返す
  // childrenは、タグで囲った中身を渡す時に使う
  return <p style={contentStyle}>{children}</p>;
};

// デフォルトエクスポート
// export default ColorfulMessage;
