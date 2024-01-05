import React, { useLayoutEffect } from 'react'
import MySwiper from './MySwiper';
function Page8() {
  return (
    <div id="page8">
      <div id="page8-content">
        <h1>Brands We Serve</h1>
        <div id="images">
          <MySwiper sequence={[0, 1, 2, 3]} />
          <MySwiper sequence={[1, 2, 3, 0]} />
          <MySwiper sequence={[2, 3, 0, 1]} />
          <MySwiper sequence={[3, 0, 1, 2]} />
        </div>
      </div>
    </div>
  )
}

export default Page8