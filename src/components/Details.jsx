import React from 'react'
import Pic from './Pic'
import User from './User'
import Actions from './Actions'
import Stats from './Stats'

function Details() {
  return (
    <>
    {/* <!--begin::Details--> */}
    <div className="d-flex flex-wrap flex-sm-nowrap">
                    <Pic/>
                      {/* <!--begin::Info--> */}
                      <div className="flex-grow-1">
                        {/* <!--begin::Title--> */}
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
                     <User/>
                     <Actions/>
                        </div>
                        {/* <!--end::Title--> */}

                        <Stats/>
                        
                      </div>
                      {/* <!--end::Info--> */}
                    </div>
                    {/* <!--end::Details--> */}
    </>
  )
}

export default Details