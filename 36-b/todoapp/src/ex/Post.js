import React from 'react';

// Postコンポーネント
const Post = ({ title, body }) => {
  return (
    <div className='title'>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;

/*
const コンポーネント名 = ({props名}) => {
    return (
        <>
            xxxx
        </>
    )
}
*/
