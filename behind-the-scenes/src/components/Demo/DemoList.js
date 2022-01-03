import React from "react";
const DemoList = (props) => {
   console.log('list is running');
   return <p>{props.isShow ? 'This is title' : ''}</p>;
};
export default React.memo(DemoList);
