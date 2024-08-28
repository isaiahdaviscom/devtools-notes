import React from 'react'

export default function Image(props) {
  let {height, weight, src, alt} = props;
  return <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" height={height} width={weight} alt={alt}/>;
}