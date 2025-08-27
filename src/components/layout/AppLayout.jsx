import React from 'react'

const AppLayout =()=> (WrappedConponent) => {
  return (props)=>{
    return(
        <div>
            <div>header</div>
            <WrappedConponent {...props} />
            <div>footer</div>
        </div>
    )
  }
}

export default AppLayout
