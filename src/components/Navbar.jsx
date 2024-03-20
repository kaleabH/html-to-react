import React from 'react'
import Details from './Details'

function Navbar() {
  return (
    <>
                    {/* <!--begin::Navbar--> */}
                    <div className="card mb-5 mb-xl-10">
                  <div className="card-body pt-9 pb-0">
                    <Details/>
                    {/* <!--begin::Navs--> */}
                    <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold">
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/overview.html"
                        >
                          Overview
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/settings.html"
                        >
                          Settings
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/security.html"
                        >
                          Security
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5 active"
                          href="account/activity.html"
                        >
                          Activity
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/billing.html"
                        >
                          Billing
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/statements.html"
                        >
                          Statements
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/referrals.html"
                        >
                          Referrals
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/api-keys.html"
                        >
                          API Keys
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                      {/* <!--begin::Nav item--> */}
                      <li className="nav-item mt-2">
                        <a
                          className="nav-link text-active-primary ms-0 me-10 py-5"
                          href="account/logs.html"
                        >
                          Logs
                        </a>
                      </li>
                      {/* <!--end::Nav item--> */}
                    </ul>
                    {/* <!--begin::Navs--> */}
                  </div>
                </div>
                {/* <!--end::Navbar--> */}
    </>
  )
}

export default Navbar