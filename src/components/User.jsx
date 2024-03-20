import React from 'react'

function User() {
  return (
    <>
         {/* <!--begin::User--> */}
         <div className="d-flex flex-column">
                            {/* <!--begin::Name--> */}
                            <div className="d-flex align-items-center mb-2">
                              <a
                                href="#"
                                className="text-gray-900 text-hover-primary fs-2 fw-bold me-1"
                              >
                                Max Smith
                              </a>
                              <a href="#">
                                <i className="ki-duotone ki-verify fs-1 text-primary">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </a>
                            </div>
                            {/* <!--end::Name--> */}
                            {/* <!--begin::Info--> */}
                            <div className="d-flex flex-wrap fw-semibold fs-6 mb-4 pe-2">
                              <a
                                href="#"
                                className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                              >
                                <i className="ki-duotone ki-profile-circle fs-4 me-1">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                                Developer
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2"
                              >
                                <i className="ki-duotone ki-geolocation fs-4 me-1">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                SF, Bay Area
                              </a>
                              <a
                                href="#"
                                className="d-flex align-items-center text-gray-500 text-hover-primary mb-2"
                              >
                                <i className="ki-duotone ki-sms fs-4">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                                max@kt.com
                              </a>
                            </div>
                            {/* <!--end::Info--> */}
                          </div>
                          {/* <!--end::User--> */}
    </>
  )
}

export default User