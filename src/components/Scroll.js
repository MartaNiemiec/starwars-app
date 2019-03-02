import React from 'react';

const Scroll = (props) => {
  return (
  <div className="mt3" style={{overflowY: 'scroll', height: '65vh', boxShadow:'0 0 8px 5px rgba( 209,229,255, 0.8 )'}}> {/* adding a style we heve to put them into {} whis is tor JavaScript expression and  within this we're returning an object and this object can have CSS styles, such as a property "overflowY" (not like in CSS overflow-y, we have to camelCase for JSX). */}
    {props.children}
  </div>
  )
}

export default Scroll;