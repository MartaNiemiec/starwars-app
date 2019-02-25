import React from 'react';

const Scroll = (props) => {
  return (
  <div className="mt3" style={{overflowY: 'scroll', borderTop: '2px solid rgba(250,250,250, 1)', height: '700px'}}> {/* adding a style we heve to put them into {} whis is tor JavaScript expression and  within this we're returning an object and this object can have CSS styles, such as a property "overflowY" (not like in CSS overflow-y, we have to camelCase for JSX). */}
    {props.children}
  </div>
  )
}

export default Scroll;