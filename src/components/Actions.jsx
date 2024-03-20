import React, { useState } from 'react'

function Actions() {
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
    </>
  )
}

export default Actions