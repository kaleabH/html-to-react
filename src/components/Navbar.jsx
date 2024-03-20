import React from 'react'

function Navbar() {
  return (
    <>
                    {/* <!--begin::Navbar--> */}
                    <div className="card mb-5 mb-xl-10">
                  <div className="card-body pt-9 pb-0">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex flex-wrap flex-sm-nowrap">
                      {/* <!--begin: Pic--> */}
                      <div className="me-7 mb-4">
                        <div className="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                          <img
                            src="assets/media/avatars/300-1.jpg"
                            alt="image"
                          />
                          <div className="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-body h-20px w-20px"></div>
                        </div>
                      </div>
                      {/* <!--end::Pic--> */}
                      {/* <!--begin::Info--> */}
                      <div className="flex-grow-1">
                        {/* <!--begin::Title--> */}
                        <div className="d-flex justify-content-between align-items-start flex-wrap mb-2">
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
                          {/* <!--begin::Actions--> */}
                          <div className="d-flex my-4">
                            <a
                              href="#"
                              className="btn btn-sm btn-light me-2"
                              id="kt_user_follow_button"
                            >
                              <i className="ki-duotone ki-check fs-3 d-none"></i>
                              {/* <!--begin::Indicator label--> */}
                              <span className="indicator-label">Follow</span>
                              {/* <!--end::Indicator label--> */}
                              {/* <!--begin::Indicator progress--> */}
                              <span className="indicator-progress">
                                Please wait...
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                              </span>
                              {/* <!--end::Indicator progress--> */}
                            </a>
                            <a
                              href="#"
                              className="btn btn-sm btn-primary me-3"
                              data-bs-toggle="modal"
                              data-bs-target="#kt_modal_offer_a_deal"
                            >
                              Hire Me
                            </a>
                            {/* <!--begin::Menu--> */}
                            <div className="me-0">
                              <button
                                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                <i className="ki-solid ki-dots-horizontal fs-2x"></i>
                              </button>
                              {/* <!--begin::Menu 3--> */}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                                data-kt-menu="true"
                              >
                                {/* <!--begin::Heading--> */}
                                <div className="menu-item px-3">
                                  <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                    Payments
                                  </div>
                                </div>
                                {/* <!--end::Heading--> */}
                                {/* <!--begin::Menu item--> */}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Create Invoice
                                  </a>
                                </div>
                                {/* <!--end::Menu item--> */}
                                {/* <!--begin::Menu item--> */}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link flex-stack px-3">
                                    Create Payment
                                    <span
                                      className="ms-2"
                                      data-bs-toggle="tooltip"
                                      title="Specify a target name for future usage and reference"
                                    >
                                      <i className="ki-duotone ki-information fs-6">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                      </i>
                                    </span>
                                  </a>
                                </div>
                                {/* <!--end::Menu item--> */}
                                {/* <!--begin::Menu item--> */}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Generate Bill
                                  </a>
                                </div>
                                {/* <!--end::Menu item--> */}
                                {/* <!--begin::Menu item--> */}
                                <div
                                  className="menu-item px-3"
                                  data-kt-menu-trigger="hover"
                                  data-kt-menu-placement="right-end"
                                >
                                  <a href="#" className="menu-link px-3">
                                    <span className="menu-title">Subscription</span>
                                    <span className="menu-arrow"></span>
                                  </a>
                                  {/* <!--begin::Menu sub--> */}
                                  <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Plans
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Billing
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <a href="#" className="menu-link px-3">
                                        Statements
                                      </a>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                    {/* <!--begin::Menu separator--> */}
                                    <div className="separator my-2"></div>
                                    {/* <!--end::Menu separator--> */}
                                    {/* <!--begin::Menu item--> */}
                                    <div className="menu-item px-3">
                                      <div className="menu-content px-3">
                                        {/* <!--begin::Switch--> */}
                                        <label className="form-check form-switch form-check-custom form-check-solid">
                                          {/* <!--begin::Input--> */}
                                          <input
                                            className="form-check-input w-30px h-20px"
                                            type="checkbox"
                                            value="1"
                                            checked="checked"
                                            name="notifications"
                        onChange={handleInputChange}

                                          />
                                          {/* <!--end::Input--> */}
                                          {/* <!--end::Label--> */}
                                          <span className="form-check-label text-muted fs-6">
                                            Recuring
                                          </span>
                                          {/* <!--end::Label--> */}
                                        </label>
                                        {/* <!--end::Switch--> */}
                                      </div>
                                    </div>
                                    {/* <!--end::Menu item--> */}
                                  </div>
                                  {/* <!--end::Menu sub--> */}
                                </div>
                                {/* <!--end::Menu item--> */}
                                {/* <!--begin::Menu item--> */}
                                <div className="menu-item px-3 my-1">
                                  <a href="#" className="menu-link px-3">
                                    Settings
                                  </a>
                                </div>
                                {/* <!--end::Menu item--> */}
                              </div>
                              {/* <!--end::Menu 3--> */}
                            </div>
                            {/* <!--end::Menu--> */}
                          </div>
                          {/* <!--end::Actions--> */}
                        </div>
                        {/* <!--end::Title--> */}
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
                      </div>
                      {/* <!--end::Info--> */}
                    </div>
                    {/* <!--end::Details--> */}
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