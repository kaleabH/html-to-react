import React from 'react'

function Stats() {
  return (
    <>
    {/* <!--begin::Stats--> */}
    <div className="d-flex flex-wrap flex-stack">
                          {/* <!--begin::Wrapper--> */}
                          <div className="d-flex flex-column flex-grow-1 pe-8">
                            {/* <!--begin::Stats--> */}
                            <div className="d-flex flex-wrap">
                              {/* <!--begin::Stat--> */}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/* <!--begin::Number--> */}
                                <div className="d-flex align-items-center">
                                  <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                  <div
                                    className="fs-2 fw-bold"
                                    data-kt-countup="true"
                                    data-kt-countup-value="4500"
                                    data-kt-countup-prefix="$"
                                  >
                                    0
                                  </div>
                                </div>
                                {/* <!--end::Number--> */}
                                {/* <!--begin::Label--> */}
                                <div className="fw-semibold fs-6 text-gray-500">
                                  Earnings
                                </div>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Stat--> */}
                              {/* <!--begin::Stat--> */}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/* <!--begin::Number--> */}
                                <div className="d-flex align-items-center">
                                  <i className="ki-duotone ki-arrow-down fs-3 text-danger me-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                  <div
                                    className="fs-2 fw-bold"
                                    data-kt-countup="true"
                                    data-kt-countup-value="80"
                                  >
                                    0
                                  </div>
                                </div>
                                {/* <!--end::Number--> */}
                                {/* <!--begin::Label--> */}
                                <div className="fw-semibold fs-6 text-gray-500">
                                  Projects
                                </div>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Stat--> */}
                              {/* <!--begin::Stat--> */}
                              <div className="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                {/* <!--begin::Number--> */}
                                <div className="d-flex align-items-center">
                                  <i className="ki-duotone ki-arrow-up fs-3 text-success me-2">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                  <div
                                    className="fs-2 fw-bold"
                                    data-kt-countup="true"
                                    data-kt-countup-value="60"
                                    data-kt-countup-prefix="%"
                                  >
                                    0
                                  </div>
                                </div>
                                {/* <!--end::Number--> */}
                                {/* <!--begin::Label--> */}
                                <div className="fw-semibold fs-6 text-gray-500">
                                  Success Rate
                                </div>
                                {/* <!--end::Label--> */}
                              </div>
                              {/* <!--end::Stat--> */}
                            </div>
                            {/* <!--end::Stats--> */}
                          </div>
                          {/* <!--end::Wrapper--> */}
                          {/* <!--begin::Progress--> */}
                          <div className="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                            <div className="d-flex justify-content-between w-100 mt-auto mb-2">
                              <span className="fw-semibold fs-6 text-gray-500">
                                Profile Compleation
                              </span>
                              <span className="fw-bold fs-6">50%</span>
                            </div>
                            <div className="h-5px mx-3 w-100 bg-light mb-3">
                              <div
                                className="bg-success rounded h-5px"
                                role="progressbar"
                                style={{ width: "50%" }}
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </div>
                          {/* <!--end::Progress--> */}
                        </div>
                        {/* <!--end::Stats--> */}
    </>
    )
}

export default Stats