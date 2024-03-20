import React from 'react'

function Timeline() {
  return (
    <>
        {/* <!--begin::Timeline items--> */}
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
                        There are 2 new tasks for you in “AirPlus Mobile App”
                        project:
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
                        Invitation for crafting engaging designs that speak
                        human workshop
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
                          <img src="assets/media/avatars/300-1.jpg" alt="img" />
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
                          <img src="assets/media/avatars/300-2.jpg" alt="img" />
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
                        is assigned to you in Multi-platform Database Design
                        project
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
                          <a href="#" className="text-primary fw-bold me-1">
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
                          <img src="assets/media/avatars/300-4.jpg" alt="img" />
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
                              Login into Admin Dashboard to make sure the data
                              integrity is OK
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
                        is placed for Workshow Planning & Budget Estimation
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
              {/* <!--end::Timeline items--> */}
    </>
  )
}

export default Timeline