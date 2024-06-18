import React from 'react'
import Data from "./Data";
import Card from "./Card"

function Service() {
 
  return (
    <>
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <h1 className="text-center mt-5 pk">Services</h1>
            <hr className="w-25 mx-auto" />
            
            <div className="row gy-3">
              {Data.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
              })}
            </div>

          </div>
        </div>
      </div>

    </div>

    
    </>
  )
}

export default Service