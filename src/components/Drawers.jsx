import React from 'react'
import ActivitiesDrawer from './ActivitiesDrawer'

function Drawers() {
  return (
    <>
          {/* <!--begin::Drawers--> */}
    <ActivitiesDrawer/>
      {/* <!--begin::Chat drawer--> */}
      <div
        id="kt_drawer_chat"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="chat"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'md': '500px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_drawer_chat_toggle"
        data-kt-drawer-close="#kt_drawer_chat_close"
      >
        {/* <!--begin::Messenger--> */}
        <div
          className="card w-100 border-0 rounded-0"
          id="kt_drawer_chat_messenger"
        >
          {/* <!--begin::Card header--> */}
          <div
            className="card-header pe-5"
            id="kt_drawer_chat_messenger_header"
          >
            {/* <!--begin::Title--> */}
            <div className="card-title">
              {/* <!--begin::User--> */}
              <div className="d-flex justify-content-center flex-column me-3">
                <a
                  href="#"
                  className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
                >
                  Brian Cox
                </a>
                {/* <!--begin::Info--> */}
                <div className="mb-0 lh-1">
                  <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                  <span className="fs-7 fw-semibold text-muted">Active</span>
                </div>
                {/* <!--end::Info--> */}
              </div>
              {/* <!--end::User--> */}
            </div>
            {/* <!--end::Title--> */}
            {/* <!--begin::Card toolbar--> */}
            <div className="card-toolbar">
              {/* <!--begin::Menu--> */}
              <div className="me-0">
                <button
                  className="btn btn-sm btn-icon btn-active-color-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="ki-duotone ki-dots-square fs-2">
                    <span className="path1"></span>
                    <span className="path2"></span>
                    <span className="path3"></span>
                    <span className="path4"></span>
                  </i>
                </button>
                {/* <!--begin::Menu 3--> */}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
                  data-kt-menu="true"
                >
                  {/* <!--begin::Heading--> */}
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                      Contacts
                    </div>
                  </div>
                  {/* <!--end::Heading--> */}
                  {/* <!--begin::Menu item--> */}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_users_search"
                    >
                      Add Contact
                    </a>
                  </div>
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu item--> */}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link flex-stack px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_invite_friends"
                    >
                      Invite Contacts
                      <span
                        className="ms-2"
                        data-bs-toggle="tooltip"
                        title="Specify a contact email to send an invitation"
                      >
                        <i className="ki-duotone ki-information fs-7">
                          <span className="path1"></span>
                          <span className="path2"></span>
                          <span className="path3"></span>
                        </i>
                      </span>
                    </a>
                  </div>
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu item--> */}
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">Groups</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {/* <!--begin::Menu sub--> */}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Create Group
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Invite Members
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                      {/* <!--begin::Menu item--> */}
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Settings
                        </a>
                      </div>
                      {/* <!--end::Menu item--> */}
                    </div>
                    {/* <!--end::Menu sub--> */}
                  </div>
                  {/* <!--end::Menu item--> */}
                  {/* <!--begin::Menu item--> */}
                  <div className="menu-item px-3 my-1">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Settings
                    </a>
                  </div>
                  {/* <!--end::Menu item--> */}
                </div>
                {/* <!--end::Menu 3--> */}
              </div>
              {/* <!--end::Menu--> */}
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                id="kt_drawer_chat_close"
              >
                <i className="ki-duotone ki-cross-square fs-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--end::Card toolbar--> */}
          </div>
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          <div className="card-body" id="kt_drawer_chat_messenger_body">
            {/* <!--begin::Messages--> */}
            <div
              className="scroll-y me-n5 pe-5"
              data-kt-element="messages"
              data-kt-scroll="true"
              data-kt-scroll-activate="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
              data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
              data-kt-scroll-offset="0px"
            >
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">2 mins</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    How likely are you to recommend our company to your friends
                    and family ?
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(out)--> */}
              <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">5 mins</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    Hey there, we’re just writing to let you know that you’ve
                    been subscribed to a repository on GitHub.
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(out)--> */}
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">1 Hour</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Ok, Understood!
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(out)--> */}
              <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">2 Hours</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    You’ll receive notifications for all issues, pull requests!
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(out)--> */}
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">3 Hours</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    You can unwatch this repository immediately by clicking
                    here:
                    <a href="https://keenthemes.com">Keenthemes.com</a>
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(out)--> */}
              <div className="d-flex justify-content-end mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">4 Hours</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  >
                    Most purchased Business courses during this sale!
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(out)--> */}
              {/* <!--begin::Message(in)--> */}
              <div className="d-flex justify-content-start mb-10">
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">5 Hours</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Company BBQ to celebrate the last quater achievements and
                    goals. Food and drinks provided
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(in)--> */}
              {/* <!--begin::Message(template for out)--> */}
              <div
                className="d-flex justify-content-end mb-10 d-none"
                data-kt-element="template-out"
              >
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-end">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Details--> */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">Just now</span>
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                      >
                        You
                      </a>
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                    data-kt-element="message-text"
                  ></div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(template for out)--> */}
              {/* <!--begin::Message(template for in)--> */}
              <div
                className="d-flex justify-content-start mb-10 d-none"
                data-kt-element="template-in"
              >
                {/* <!--begin::Wrapper--> */}
                <div className="d-flex flex-column align-items-start">
                  {/* <!--begin::User--> */}
                  <div className="d-flex align-items-center mb-2">
                    {/* <!--begin::Avatar--> */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                    </div>
                    {/* <!--end::Avatar--> */}
                    {/* <!--begin::Details--> */}
                    <div className="ms-3">
                      <a
                        href="#"
                        className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                      >
                        Brian Cox
                      </a>
                      <span className="text-muted fs-7 mb-1">Just now</span>
                    </div>
                    {/* <!--end::Details--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::Text--> */}
                  <div
                    className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                    data-kt-element="message-text"
                  >
                    Right before vacation season we have the next Big Deal for
                    you.
                  </div>
                  {/* <!--end::Text--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Message(template for in)--> */}
            </div>
            {/* <!--end::Messages--> */}
          </div>
          {/* <!--end::Card body--> */}
          {/* <!--begin::Card footer--> */}
          <div
            className="card-footer pt-4"
            id="kt_drawer_chat_messenger_footer"
          >
            {/* <!--begin::Input--> */}
            <textarea
              className="form-control form-control-flush mb-3"
              rows="1"
              data-kt-element="input"
              placeholder="Type a message"
            ></textarea>
            {/* <!--end::Input--> */}
            {/* <!--begin:Toolbar--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Actions--> */}
              <div className="d-flex align-items-center me-2">
                <button
                  className="btn btn-sm btn-icon btn-active-light-primary me-1"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Coming soon"
                >
                  <i className="ki-duotone ki-paper-clip fs-3"></i>
                </button>
                <button
                  className="btn btn-sm btn-icon btn-active-light-primary me-1"
                  type="button"
                  data-bs-toggle="tooltip"
                  title="Coming soon"
                >
                  <i className="ki-duotone ki-cloud-add fs-3">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                </button>
              </div>
              {/* <!--end::Actions--> */}
              {/* <!--begin::Send--> */}
              <button
                className="btn btn-primary"
                type="button"
                data-kt-element="send"
              >
                Send
              </button>
              {/* <!--end::Send--> */}
            </div>
            {/* <!--end::Toolbar--> */}
          </div>
          {/* <!--end::Card footer--> */}
        </div>
        {/* <!--end::Messenger--> */}
      </div>
      {/* <!--end::Chat drawer--> */}
      {/* <!--begin::Chat drawer--> */}
      <div
        id="kt_shopping_cart"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="cart"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'md': '500px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
        data-kt-drawer-close="#kt_drawer_shopping_cart_close"
      >
        {/* <!--begin::Messenger--> */}
        <div className="card card-flush w-100 rounded-0">
          {/* <!--begin::Card header--> */}
          <div className="card-header">
            {/* <!--begin::Title--> */}
            <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
            {/* <!--end::Title--> */}
            {/* <!--begin::Card toolbar--> */}
            <div className="card-toolbar">
              {/* <!--begin::Close--> */}
              <div
                className="btn btn-sm btn-icon btn-active-light-primary"
                id="kt_drawer_shopping_cart_close"
              >
                <i className="ki-duotone ki-cross fs-2">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--end::Card toolbar--> */}
          </div>
          {/* <!--end::Card header--> */}
          {/* <!--begin::Card body--> */}
          <div className="card-body hover-scroll-overlay-y h-400px pt-5">
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    Iblender
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    The best kitchen gadget in 2022
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 350</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-1.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    SmartCleaner
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    Smart tool for cooking
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-3.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    CameraMaxr
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    Professional camera for edge
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 150</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-8.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    $D Printer
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    Manfactoring unique objekts
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-26.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    MotionWire
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    Perfect animation tool
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 650</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-21.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    Samsung
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    Profile info,Timeline etc
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 720</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-34.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Separator--> */}
            <div className="separator separator-dashed my-6"></div>
            {/* <!--end::Separator--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              {/* <!--begin::Wrapper--> */}
              <div className="d-flex flex-column me-3">
                {/* <!--begin::Section--> */}
                <div className="mb-3">
                  <a
                    href="apps/ecommerce/sales/details.html"
                    className="text-gray-800 text-hover-primary fs-4 fw-bold"
                  >
                    $D Printer
                  </a>
                  <span className="text-gray-500 fw-semibold d-block">
                    Manfactoring unique objekts
                  </span>
                </div>
                {/* <!--end::Section--> */}
                {/* <!--begin::Section--> */}
                <div className="d-flex align-items-center">
                  <span className="fw-bold text-gray-800 fs-5">$ 430</span>
                  <span className="text-muted mx-2">for</span>
                  <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
                  >
                    <i className="ki-duotone ki-minus fs-4"></i>
                  </a>
                  <a
                    href="#"
                    className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
                  >
                    <i className="ki-duotone ki-plus fs-4"></i>
                  </a>
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Wrapper--> */}
              {/* <!--begin::Pic--> */}
              <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
                <img src="assets/media/stock/600x400/img-27.jpg" alt="" />
              </div>
              {/* <!--end::Pic--> */}
            </div>
            {/* <!--end::Item--> */}
          </div>
          {/* <!--end::Card body--> */}
          {/* <!--begin::Card footer--> */}
          <div className="card-footer">
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              <span className="fw-bold text-gray-600">Total</span>
              <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
            </div>
            {/* <!--end::Item--> */}
            {/* <!--begin::Item--> */}
            <div className="d-flex flex-stack">
              <span className="fw-bold text-gray-600">Sub total</span>
              <span className="text-primary fw-bolder fs-5">$ 246.35</span>
            </div>
            {/* <!--end::Item--> */}
            {/* <!--end::Action--> */}
            <div className="d-flex justify-content-end mt-9">
              <a
                href="#"
                className="btn btn-primary d-flex justify-content-end"
              >
                Pleace Order
              </a>
            </div>
            {/* <!--end::Action--> */}
          </div>
          {/* <!--end::Card footer--> */}
        </div>
        {/* <!--end::Messenger--> */}
      </div>
      {/* <!--end::Chat drawer--> */}
      {/* <!--end::Drawers--> */}
    </>
  )
}

export default Drawers