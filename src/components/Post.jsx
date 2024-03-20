import React, { useState } from 'react'

function Post() {
    const [formData, setFormData] = useState({
        notifications: "",
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
  return (
    <>
       {/* <!--begin::Post--> */}
       <div className="content flex-row-fluid" id="kt_content">
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
                {/* <!--begin::Timeline--> */}
                <div className="card">
                  {/* <!--begin::Card head--> */}
                  <div className="card-header card-header-stretch">
                    {/* <!--begin::Title--> */}
                    <div className="card-title d-flex align-items-center">
                      <i className="ki-duotone ki-calendar-8 fs-1 text-primary me-3 lh-0">
                        <span className="path1"></span>
                        <span className="path2"></span>
                        <span className="path3"></span>
                        <span className="path4"></span>
                        <span className="path5"></span>
                        <span className="path6"></span>
                      </i>
                      <h3 className="fw-bold m-0 text-gray-800">Jan 23, 2024</h3>
                    </div>
                    {/* <!--end::Title--> */}
                    {/* <!--begin::Toolbar--> */}
                    <div className="card-toolbar m-0">
                      {/* <!--begin::Tab nav--> */}
                      <ul
                        className="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bold"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a
                            id="kt_activity_today_tab"
                            className="nav-link justify-content-center text-active-gray-800 active"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#kt_activity_today"
                          >
                            Today
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            id="kt_activity_week_tab"
                            className="nav-link justify-content-center text-active-gray-800"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#kt_activity_week"
                          >
                            Week
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            id="kt_activity_month_tab"
                            className="nav-link justify-content-center text-active-gray-800"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#kt_activity_month"
                          >
                            Month
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            id="kt_activity_year_tab"
                            className="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
                            data-bs-toggle="tab"
                            role="tab"
                            href="#kt_activity_year"
                          >
                            2024
                          </a>
                        </li>
                      </ul>
                      {/* <!--end::Tab nav--> */}
                    </div>
                    {/* <!--end::Toolbar--> */}
                  </div>
                  {/* <!--end::Card head--> */}
                  {/* <!--begin::Card body--> */}
                  <div className="card-body">
                    {/* <!--begin::Tab Content--> */}
                    <div className="tab-content">
                      {/* <!--begin::Tab panel--> */}
                      <div
                        id="kt_activity_today"
                        className="card-body p-0 tab-pane fade show active"
                        role="tabpanel"
                        aria-labelledby="kt_activity_today_tab"
                      >
                        {/* <!--begin::Timeline--> */}
                        <div className="timeline timeline-border-dashed">
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  There are 2 new tasks for you in “AirPlus
                                  Mobile App” project:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Added at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Nina Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-14.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                {/* <!--begin::Record--> */}
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/projects/project.html"
                                    className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                                  >
                                    Meeting with customer
                                  </a>
                                  {/* <!--end::Title--> */}
                                  {/* <!--begin::Label--> */}
                                  <div className="min-w-175px pe-2">
                                    <span className="badge badge-light text-muted">
                                      Application Design
                                    </span>
                                  </div>
                                  {/* <!--end::Label--> */}
                                  {/* <!--begin::Users--> */}
                                  <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                                    {/* <!--begin::User--> */}
                                    <div className="symbol symbol-circle symbol-25px">
                                      <img
                                        src="assets/media/avatars/300-2.jpg"
                                        alt="img"
                                      />
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="symbol symbol-circle symbol-25px">
                                      <img
                                        src="assets/media/avatars/300-14.jpg"
                                        alt="img"
                                      />
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="symbol symbol-circle symbol-25px">
                                      <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                                        A
                                      </div>
                                    </div>
                                    {/* <!--end::User--> */}
                                  </div>
                                  {/* <!--end::Users--> */}
                                  {/* <!--begin::Progress--> */}
                                  <div className="min-w-125px pe-2">
                                    <span className="badge badge-light-primary">
                                      In Progress
                                    </span>
                                  </div>
                                  {/* <!--end::Progress--> */}
                                  {/* <!--begin::Action--> */}
                                  <a
                                    href="apps/projects/project.html"
                                    className="btn btn-sm btn-light btn-active-light-primary"
                                  >
                                    View
                                  </a>
                                  {/* <!--end::Action--> */}
                                </div>
                                {/* <!--end::Record--> */}
                                {/* <!--begin::Record--> */}
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                                  {/* <!--begin::Title--> */}
                                  <a
                                    href="apps/projects/project.html"
                                    className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                                  >
                                    Project Delivery Preparation
                                  </a>
                                  {/* <!--end::Title--> */}
                                  {/* <!--begin::Label--> */}
                                  <div className="min-w-175px">
                                    <span className="badge badge-light text-muted">
                                      CRM System Development
                                    </span>
                                  </div>
                                  {/* <!--end::Label--> */}
                                  {/* <!--begin::Users--> */}
                                  <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                                    {/* <!--begin::User--> */}
                                    <div className="symbol symbol-circle symbol-25px">
                                      <img
                                        src="assets/media/avatars/300-20.jpg"
                                        alt="img"
                                      />
                                    </div>
                                    {/* <!--end::User--> */}
                                    {/* <!--begin::User--> */}
                                    <div className="symbol symbol-circle symbol-25px">
                                      <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                                        B
                                      </div>
                                    </div>
                                    {/* <!--end::User--> */}
                                  </div>
                                  {/* <!--end::Users--> */}
                                  {/* <!--begin::Progress--> */}
                                  <div className="min-w-125px">
                                    <span className="badge badge-light-success">
                                      Completed
                                    </span>
                                  </div>
                                  {/* <!--end::Progress--> */}
                                  {/* <!--begin::Action--> */}
                                  <a
                                    href="apps/projects/project.html"
                                    className="btn btn-sm btn-light btn-active-light-primary"
                                  >
                                    View
                                  </a>
                                  {/* <!--end::Action--> */}
                                </div>
                                {/* <!--end::Record--> */}
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon me-4">
                              <i className="ki-duotone ki-flag fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n2">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="overflow-auto pe-3">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Invitation for crafting engaging designs that
                                  speak human workshop
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Alan Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-1.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="mb-5 pe-3">
                                {/* <!--begin::Title--> */}
                                <a
                                  href="#"
                                  className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                                >
                                  3 New Incoming Project Files:
                                </a>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 10:30 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Jan Hummer"
                                  >
                                    <img
                                      src="assets/media/avatars/300-23.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt=""
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/pdf.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="apps/projects/project.html"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance KPI App Guidelines
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">1.9mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--begin::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/doc.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Client UAT Testing Results
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">18kb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/css.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance Reports
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">20mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Icon--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Task
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  merged with
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  in “Ads Pro Admin Dashboard project:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Initiated at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Nina Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-14.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  3 new application design concepts added:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Created at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Marcus Dotson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-2.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-29.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-31.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-40.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-sms fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New case
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is assigned to you in Multi-platform Database
                                  Design project
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="overflow-auto pb-5">
                                  {/* <!--begin::Wrapper--> */}
                                  <div className="d-flex align-items-center mt-1 fs-6">
                                    {/* <!--begin::Info--> */}
                                    <div className="text-muted me-2 fs-7">
                                      Added at 4:23 PM by
                                    </div>
                                    {/* <!--end::Info--> */}
                                    {/* <!--begin::User--> */}
                                    <a
                                      href="#"
                                      className="text-primary fw-bold me-1"
                                    >
                                      Alice Tan
                                    </a>
                                    {/* <!--end::User--> */}
                                  </div>
                                  {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  You have received a new order:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Placed at 5:05 AM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Robert Rich"
                                  >
                                    <img
                                      src="assets/media/avatars/300-4.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                {/* <!--begin::Notice--> */}
                                <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                                  {/* <!--begin::Icon--> */}
                                  <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                  {/* <!--end::Icon--> */}
                                  {/* <!--begin::Wrapper--> */}
                                  <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                                    {/* <!--begin::Content--> */}
                                    <div className="mb-3 mb-md-0 fw-semibold">
                                      <h4 className="text-gray-900 fw-bold">
                                        Database Backup Process Completed!
                                      </h4>
                                      <div className="fs-6 text-gray-700 pe-7">
                                        Login into Admin Dashboard to make sure
                                        the data integrity is OK
                                      </div>
                                    </div>
                                    {/* <!--end::Content--> */}
                                    {/* <!--begin::Action--> */}
                                    <a
                                      href="#"
                                      className="btn btn-primary px-6 align-self-center text-nowrap"
                                    >
                                      Proceed
                                    </a>
                                    {/* <!--end::Action--> */}
                                  </div>
                                  {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Notice--> */}
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-basket fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New order
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is placed for Workshow Planning & Budget
                                  Estimation
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Placed at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <a href="#" className="text-primary fw-bold me-1">
                                    Jimmy Bold
                                  </a>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                        </div>
                        {/* <!--end::Timeline--> */}
                      </div>
                      {/* <!--end::Tab panel--> */}
                      {/* <!--begin::Tab panel--> */}
                      <div
                        id="kt_activity_week"
                        className="card-body p-0 tab-pane fade show"
                        role="tabpanel"
                        aria-labelledby="kt_activity_week_tab"
                      >
                        {/* <!--begin::Timeline--> */}
                        <div className="timeline timeline-border-dashed">
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon me-4">
                              <i className="ki-duotone ki-flag fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n2">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="overflow-auto pe-3">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Invitation for crafting engaging designs that
                                  speak human workshop
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Alan Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-1.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="mb-5 pe-3">
                                {/* <!--begin::Title--> */}
                                <a
                                  href="#"
                                  className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                                >
                                  3 New Incoming Project Files:
                                </a>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 10:30 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Jan Hummer"
                                  >
                                    <img
                                      src="assets/media/avatars/300-23.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt=""
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/pdf.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="apps/projects/project.html"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance KPI App Guidelines
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">1.9mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--begin::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/doc.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Client UAT Testing Results
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">18kb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/css.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance Reports
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">20mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Icon--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Task
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  merged with
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  in “Ads Pro Admin Dashboard project:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Initiated at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Nina Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-14.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  3 new application design concepts added:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Created at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Marcus Dotson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-2.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-29.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-31.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-40.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-sms fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New case
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is assigned to you in Multi-platform Database
                                  Design project
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="overflow-auto pb-5">
                                  {/* <!--begin::Wrapper--> */}
                                  <div className="d-flex align-items-center mt-1 fs-6">
                                    {/* <!--begin::Info--> */}
                                    <div className="text-muted me-2 fs-7">
                                      Added at 4:23 PM by
                                    </div>
                                    {/* <!--end::Info--> */}
                                    {/* <!--begin::User--> */}
                                    <a
                                      href="#"
                                      className="text-primary fw-bold me-1"
                                    >
                                      Alice Tan
                                    </a>
                                    {/* <!--end::User--> */}
                                  </div>
                                  {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                        </div>
                        {/* <!--end::Timeline--> */}
                      </div>
                      {/* <!--end::Tab panel--> */}
                      {/* <!--begin::Tab panel--> */}
                      <div
                        id="kt_activity_month"
                        className="card-body p-0 tab-pane fade show"
                        role="tabpanel"
                        aria-labelledby="kt_activity_month_tab"
                      >
                        {/* <!--begin::Timeline--> */}
                        <div className="timeline timeline-border-dashed">
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  3 new application design concepts added:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Created at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Marcus Dotson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-2.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-29.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-31.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-40.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-sms fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New case
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is assigned to you in Multi-platform Database
                                  Design project
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="overflow-auto pb-5">
                                  {/* <!--begin::Wrapper--> */}
                                  <div className="d-flex align-items-center mt-1 fs-6">
                                    {/* <!--begin::Info--> */}
                                    <div className="text-muted me-2 fs-7">
                                      Added at 4:23 PM by
                                    </div>
                                    {/* <!--end::Info--> */}
                                    {/* <!--begin::User--> */}
                                    <a
                                      href="#"
                                      className="text-primary fw-bold me-1"
                                    >
                                      Alice Tan
                                    </a>
                                    {/* <!--end::User--> */}
                                  </div>
                                  {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-basket fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New order
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is placed for Workshow Planning & Budget
                                  Estimation
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Placed at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <a href="#" className="text-primary fw-bold me-1">
                                    Jimmy Bold
                                  </a>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon me-4">
                              <i className="ki-duotone ki-flag fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n2">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="overflow-auto pe-3">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Invitation for crafting engaging designs that
                                  speak human workshop
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Alan Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-1.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="mb-5 pe-3">
                                {/* <!--begin::Title--> */}
                                <a
                                  href="#"
                                  className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                                >
                                  3 New Incoming Project Files:
                                </a>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 10:30 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Jan Hummer"
                                  >
                                    <img
                                      src="assets/media/avatars/300-23.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt=""
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/pdf.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="apps/projects/project.html"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance KPI App Guidelines
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">1.9mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--begin::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/doc.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Client UAT Testing Results
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">18kb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/css.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance Reports
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">20mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Icon--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Task
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  merged with
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  in “Ads Pro Admin Dashboard project:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Initiated at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Nina Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-14.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                        </div>
                        {/* <!--end::Timeline--> */}
                      </div>
                      {/* <!--end::Tab panel--> */}
                      {/* <!--begin::Tab panel--> */}
                      <div
                        id="kt_activity_year"
                        className="card-body p-0 tab-pane fade show"
                        role="tabpanel"
                        aria-labelledby="kt_activity_year_tab"
                      >
                        {/* <!--begin::Timeline--> */}
                        <div className="timeline timeline-border-dashed">
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                                <span className="path5"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="mb-5 pe-3">
                                {/* <!--begin::Title--> */}
                                <a
                                  href="#"
                                  className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                                >
                                  3 New Incoming Project Files:
                                </a>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Sent at 10:30 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Jan Hummer"
                                  >
                                    <img
                                      src="assets/media/avatars/300-23.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt=""
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/pdf.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="apps/projects/project.html"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance KPI App Guidelines
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">1.9mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--begin::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/doc.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Client UAT Testing Results
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">18kb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Info--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="d-flex flex-aligns-center">
                                    {/* <!--begin::Icon--> */}
                                    <img
                                      alt="apps/projects/project.html"
                                      className="w-30px me-3"
                                      src="assets/media/svg/files/css.svg"
                                    />
                                    {/* <!--end::Icon--> */}
                                    {/* <!--begin::Info--> */}
                                    <div className="ms-1 fw-semibold">
                                      {/* <!--begin::Desc--> */}
                                      <a
                                        href="#"
                                        className="fs-6 text-hover-primary fw-bold"
                                      >
                                        Finance Reports
                                      </a>
                                      {/* <!--end::Desc--> */}
                                      {/* <!--begin::Number--> */}
                                      <div className="text-gray-500">20mb</div>
                                      {/* <!--end::Number--> */}
                                    </div>
                                    {/* <!--end::Icon--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  Task
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  merged with
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #45890
                                  </a>
                                  in “Ads Pro Admin Dashboard project:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Initiated at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Nina Nilson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-14.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  3 new application design concepts added:
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Created at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <div
                                    className="symbol symbol-circle symbol-25px"
                                    data-bs-toggle="tooltip"
                                    data-bs-boundary="window"
                                    data-bs-placement="top"
                                    title="Marcus Dotson"
                                  >
                                    <img
                                      src="assets/media/avatars/300-2.jpg"
                                      alt="img"
                                    />
                                  </div>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                              {/* <!--begin::Timeline details--> */}
                              <div className="overflow-auto pb-5">
                                <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-29.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay me-10">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-31.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                  {/* <!--begin::Item--> */}
                                  <div className="overlay">
                                    {/* <!--begin::Image--> */}
                                    <div className="overlay-wrapper">
                                      <img
                                        alt="img"
                                        className="rounded w-150px"
                                        src="assets/media/stock/600x400/img-40.jpg"
                                      />
                                    </div>
                                    {/* <!--end::Image--> */}
                                    {/* <!--begin::Link--> */}
                                    <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-primary btn-shadow"
                                      >
                                        Explore
                                      </a>
                                    </div>
                                    {/* <!--end::Link--> */}
                                  </div>
                                  {/* <!--end::Item--> */}
                                </div>
                              </div>
                              {/* <!--end::Timeline details--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-sms fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mb-10 mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New case
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is assigned to you in Multi-platform Database
                                  Design project
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="overflow-auto pb-5">
                                  {/* <!--begin::Wrapper--> */}
                                  <div className="d-flex align-items-center mt-1 fs-6">
                                    {/* <!--begin::Info--> */}
                                    <div className="text-muted me-2 fs-7">
                                      Added at 4:23 PM by
                                    </div>
                                    {/* <!--end::Info--> */}
                                    {/* <!--begin::User--> */}
                                    <a
                                      href="#"
                                      className="text-primary fw-bold me-1"
                                    >
                                      Alice Tan
                                    </a>
                                    {/* <!--end::User--> */}
                                  </div>
                                  {/* <!--end::Wrapper--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                          {/* <!--begin::Timeline item--> */}
                          <div className="timeline-item">
                            {/* <!--begin::Timeline line--> */}
                            <div className="timeline-line"></div>
                            {/* <!--end::Timeline line--> */}
                            {/* <!--begin::Timeline icon--> */}
                            <div className="timeline-icon">
                              <i className="ki-duotone ki-basket fs-2 text-gray-500">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                                <span className="path4"></span>
                              </i>
                            </div>
                            {/* <!--end::Timeline icon--> */}
                            {/* <!--begin::Timeline content--> */}
                            <div className="timeline-content mt-n1">
                              {/* <!--begin::Timeline heading--> */}
                              <div className="pe-3 mb-5">
                                {/* <!--begin::Title--> */}
                                <div className="fs-5 fw-semibold mb-2">
                                  New order
                                  <a href="#" className="text-primary fw-bold me-1">
                                    #67890
                                  </a>
                                  is placed for Workshow Planning & Budget
                                  Estimation
                                </div>
                                {/* <!--end::Title--> */}
                                {/* <!--begin::Description--> */}
                                <div className="d-flex align-items-center mt-1 fs-6">
                                  {/* <!--begin::Info--> */}
                                  <div className="text-muted me-2 fs-7">
                                    Placed at 4:23 PM by
                                  </div>
                                  {/* <!--end::Info--> */}
                                  {/* <!--begin::User--> */}
                                  <a href="#" className="text-primary fw-bold me-1">
                                    Jimmy Bold
                                  </a>
                                  {/* <!--end::User--> */}
                                </div>
                                {/* <!--end::Description--> */}
                              </div>
                              {/* <!--end::Timeline heading--> */}
                            </div>
                            {/* <!--end::Timeline content--> */}
                          </div>
                          {/* <!--end::Timeline item--> */}
                        </div>
                        {/* <!--end::Timeline--> */}
                      </div>
                      {/* <!--end::Tab panel--> */}
                    </div>
                    {/* <!--end::Tab Content--> */}
                  </div>
                  {/* <!--end::Card body--> */}
                </div>
                {/* <!--end::Timeline--> */}
              </div>
              {/* <!--end::Post--> */}
    </>
  )
}

export default Post