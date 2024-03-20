import React, { useState } from 'react'

function Toolbar() {

  const [formData, setFormData] = useState({
    search: "",
    query: "",
    type: "",
    assignedto: "",
    collaborators: "",
    "": "",
    attachment: "",
    date_number: "",
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
         {/* <!--begin::Toolbar--> */}
         <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
              {/* <!--begin::Container--> */}
              <div
                id="kt_toolbar_container"
                className="container-xxl d-flex flex-stack flex-wrap"
              >
                {/* <!--begin::Page title--> */}
                <div className="page-title d-flex flex-column me-3">
                  {/* <!--begin::Title--> */}
                  <h1 className="d-flex text-gray-900 fw-bold my-1 fs-3">
                    Activity
                  </h1>
                  {/* <!--end::Title--> */}
                  {/* <!--begin::Breadcrumb--> */}
                  <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7 my-1">
                    {/* <!--begin::Item--> */}
                    <li className="breadcrumb-item text-gray-600">
                      <a
                        href="index.html"
                        className="text-gray-600 text-hover-primary"
                      >
                        Home
                      </a>
                    </li>
                    {/* <!--end::Item--> */}
                    {/* <!--begin::Item--> */}
                    <li className="breadcrumb-item text-gray-600">Account</li>
                    {/* <!--end::Item--> */}
                    {/* <!--begin::Item--> */}
                    <li className="breadcrumb-item text-gray-500">Activity</li>
                    {/* <!--end::Item--> */}
                  </ul>
                  {/* <!--end::Breadcrumb--> */}
                </div>
                {/* <!--end::Page title--> */}
                {/* <!--begin::Actions--> */}
                <div className="d-flex align-items-center py-2 py-md-1">
                  {/* <!--begin::Wrapper--> */}
                  <div className="me-3">
                    {/* <!--begin::Menu--> */}
                    <a
                      href="#"
                      className="btn btn-light-primary fw-bold"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i className="ki-duotone ki-filter fs-5 text-gray-500 me-1">
                        <span className="path1"></span>
                        <span className="path2"></span>
                      </i>
                      Filter
                    </a>
                    {/* <!--begin::Menu 1--> */}
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_65a10ae321bc0"
                    >
                      {/* <!--begin::Header--> */}
                      <div className="px-7 py-5">
                        <div className="fs-5 text-gray-900 fw-bold">
                          Filter Options
                        </div>
                      </div>
                      {/* <!--end::Header--> */}
                      {/* <!--begin::Menu separator--> */}
                      <div className="separator border-gray-200"></div>
                      {/* <!--end::Menu separator--> */}
                      {/* <!--begin::Form--> */}
                      <div className="px-7 py-5">
                        {/* <!--begin::Input group--> */}
                        <div className="mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="form-label fw-semibold">
                            Status:
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <div>
                            <select
                              className="form-select form-select-solid"
                              multiple="multiple"
                              data-kt-select2="true"
                              data-close-on-select="false"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_65a10ae321bc0"
                              data-allow-clear="true"
                            >
                              <option></option>
                              <option value="1">Approved</option>
                              <option value="2">Pending</option>
                              <option value="2">In Process</option>
                              <option value="2">Rejected</option>
                            </select>
                          </div>
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="form-label fw-semibold">
                            Member Type:
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Options--> */}
                          <div className="d-flex">
                            {/* <!--begin::Options--> */}
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="1"
                                onChange={handleInputChange}
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            {/* <!--end::Options--> */}
                            {/* <!--begin::Options--> */}
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value="2"
                                checked="checked"
                                onChange={handleInputChange}
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                            {/* <!--end::Options--> */}
                          </div>
                          {/* <!--end::Options--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="form-label fw-semibold">
                            Notifications:
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Switch--> */}
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              name="notifications"
                              checked="checked"
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                          {/* <!--end::Switch--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Actions--> */}
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                        {/* <!--end::Actions--> */}
                      </div>
                      {/* <!--end::Form--> */}
                    </div>
                    {/* <!--end::Menu 1--> */}
                    {/* <!--end::Menu--> */}
                  </div>
                  {/* <!--end::Wrapper--> */}
                  {/* <!--begin::Button--> */}
                  <a
                    href="#"
                    className="btn btn-primary fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_create_app"
                    id="kt_toolbar_primary_button"
                  >
                    Create
                  </a>
                  {/* <!--end::Button--> */}
                </div>
                {/* <!--end::Actions--> */}
              </div>
              {/* <!--end::Container--> */}
            </div>
            {/* <!--end::Toolbar--> */}
    </>
  )
}

export default Toolbar