import React from 'react'
import ReactDOM from 'react-dom'

function Modals() {

  return ReactDOM.createPortal((
    <div>
         {/* <!--begin::Modals--> */}
      {/* <!--begin::Modal - Create App--> */}
      <div className="modal fade" id="kt_modal_create_app" tabindex="-1" aria-hidden="true">
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-900px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header">
              {/* <!--begin::Modal title--> */}
              <h2>Create App</h2>
              {/* <!--end::Modal title--> */}
              {/* <!--begin::Close--> */}
              <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--end::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body py-lg-10 px-lg-10">
              {/* <!--begin::Stepper--> */}
              <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
                {/* <!--begin::Aside--> */}
                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                  {/* <!--begin::Nav--> */}
                  <div className="stepper-nav ps-lg-10">
                    {/* <!--begin::Step 1--> */}
                    <div className="stepper-item current" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">1</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Details</h3>
                          <div className="stepper-desc">Name your App</div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 1--> */}
                    {/* <!--begin::Step 2--> */}
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">2</span>
                        </div>
                        {/* <!--begin::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Frameworks</h3>
                          <div className="stepper-desc">Define your app framework</div>
                        </div>
                        {/* <!--begin::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 2--> */}
                    {/* <!--begin::Step 3--> */}
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">3</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Database</h3>
                          <div className="stepper-desc">Select the app database type</div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 3--> */}
                    {/* <!--begin::Step 4--> */}
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">4</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Billing</h3>
                          <div className="stepper-desc">Provide payment details</div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Line--> */}
                      <div className="stepper-line h-40px"></div>
                      {/* <!--end::Line--> */}
                    </div>
                    {/* <!--end::Step 4--> */}
                    {/* <!--begin::Step 5--> */}
                    <div className="stepper-item mark-completed" data-kt-stepper-element="nav">
                      {/* <!--begin::Wrapper--> */}
                      <div className="stepper-wrapper">
                        {/* <!--begin::Icon--> */}
                        <div className="stepper-icon w-40px h-40px">
                          <i className="ki-duotone ki-check stepper-check fs-2"></i>
                          <span className="stepper-number">5</span>
                        </div>
                        {/* <!--end::Icon--> */}
                        {/* <!--begin::Label--> */}
                        <div className="stepper-label">
                          <h3 className="stepper-title">Completed</h3>
                          <div className="stepper-desc">Review and Submit</div>
                        </div>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Step 5--> */}
                  </div>
                  {/* <!--end::Nav--> */}
                </div>
                {/* <!--begin::Aside--> */}
                {/* <!--begin::Content--> */}
                <div className="flex-row-fluid py-lg-5 px-lg-15">
                  {/* <!--begin::Form--> */}
                  <form className="form" novalidate="novalidate" id="kt_modal_create_app_form">
                    {/* <!--begin::Step 1--> */}
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                            <span className="required">App Name</span>
                            <span className="ms-1" data-bs-toggle="tooltip" title="Specify your unique app name">
                              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </span>
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <input type="text" className="form-control form-control-lg form-control-solid" name="name" placeholder="" value="" />
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row">
                          {/* <!--begin::Label--> */}
                          <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                            <span className="required">Category</span>
                            <span className="ms-1" data-bs-toggle="tooltip" title="Select your app category">
                              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </span>
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin:Options--> */}
                          <div className="fv-row">
                            {/* <!--begin:Option--> */}
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              {/* <!--begin:Label--> */}
                              <span className="d-flex align-items-center me-2">
                                {/* <!--begin:Icon--> */}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <i className="ki-duotone ki-compass fs-1 text-primary">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                    </i>
                                  </span>
                                </span>
                                {/* <!--end:Icon--> */}
                                {/* <!--begin:Info--> */}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Quick Online Courses</span>
                                  <span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
                                </span>
                                {/* <!--end:Info--> */}
                              </span>
                              {/* <!--end:Label--> */}
                              {/* <!--begin:Input--> */}
                              <span className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="radio" name="category" value="1" />
                              </span>
                              {/* <!--end:Input--> */}
                            </label>
                            {/* <!--end::Option--> */}
                            {/* <!--begin:Option--> */}
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              {/* <!--begin:Label--> */}
                              <span className="d-flex align-items-center me-2">
                                {/* <!--begin:Icon--> */}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <i className="ki-duotone ki-element-11 fs-1 text-danger">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                      <span className="path4"></span>
                                    </i>
                                  </span>
                                </span>
                                {/* <!--end:Icon--> */}
                                {/* <!--begin:Info--> */}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Face to Face Discussions</span>
                                  <span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
                                </span>
                                {/* <!--end:Info--> */}
                              </span>
                              {/* <!--end:Label--> */}
                              {/* <!--begin:Input--> */}
                              <span className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="radio" name="category" value="2" />
                              </span>
                              {/* <!--end:Input--> */}
                            </label>
                            {/* <!--end::Option--> */}
                            {/* <!--begin:Option--> */}
                            <label className="d-flex flex-stack cursor-pointer">
                              {/* <!--begin:Label--> */}
                              <span className="d-flex align-items-center me-2">
                                {/* <!--begin:Icon--> */}
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-success">
                                    <i className="ki-duotone ki-timer fs-1 text-success">
                                      <span className="path1"></span>
                                      <span className="path2"></span>
                                      <span className="path3"></span>
                                    </i>
                                  </span>
                                </span>
                                {/* <!--end:Icon--> */}
                                {/* <!--begin:Info--> */}
                                <span className="d-flex flex-column">
                                  <span className="fw-bold fs-6">Full Intro Training</span>
                                  <span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
                                </span>
                                {/* <!--end:Info--> */}
                              </span>
                              {/* <!--end:Label--> */}
                              {/* <!--begin:Input--> */}
                              <span className="form-check form-check-custom form-check-solid">
                                <input className="form-check-input" type="radio" name="category" value="3" />
                              </span>
                              {/* <!--end:Input--> */}
                            </label>
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end:Options--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 1--> */}
                    {/* <!--begin::Step 2--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row">
                          {/* <!--begin::Label--> */}
                          <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                            <span className="required">Select Framework</span>
                            <span className="ms-1" data-bs-toggle="tooltip" title="Specify your apps framework">
                              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </span>
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-warning">
                                  <i className="ki-duotone ki-html fs-2x text-warning">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">HTML5</span>
                                <span className="fs-7 text-muted">Base Web Projec</span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" checked="checked" name="framework" value="1" />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-success">
                                  <i className="ki-duotone ki-react fs-2x text-success">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">ReactJS</span>
                                <span className="fs-7 text-muted">Robust and flexible app framework</span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" name="framework" value="2" />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-danger">
                                  <i className="ki-duotone ki-angular fs-2x text-danger">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">Angular</span>
                                <span className="fs-7 text-muted">Powerful data mangement</span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" name="framework" value="3" />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer">
                            {/* <!--begin:Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin:Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-primary">
                                  <i className="ki-duotone ki-vue fs-2x text-primary">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end:Icon--> */}
                              {/* <!--begin:Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">Vue</span>
                                <span className="fs-7 text-muted">Lightweight and responsive framework</span>
                              </span>
                              {/* <!--end:Info--> */}
                            </span>
                            {/* <!--end:Label--> */}
                            {/* <!--begin:Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" name="framework" value="4" />
                            </span>
                            {/* <!--end:Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 2--> */}
                    {/* <!--begin::Step 3--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row mb-10">
                          {/* <!--begin::Label--> */}
                          <label className="required fs-5 fw-semibold mb-2">Database Name</label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input--> */}
                          <input type="text" className="form-control form-control-lg form-control-solid" name="dbname" placeholder="" value="master_db" />
                          {/* <!--end::Input--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="fv-row">
                          {/* <!--begin::Label--> */}
                          <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                            <span className="required">Select Database Engine</span>
                            <span className="ms-1" data-bs-toggle="tooltip" title="Select your app database engine">
                              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </span>
                          </label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin::Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin::Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-success">
                                  <i className="ki-duotone ki-note text-success fs-2x">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end::Icon--> */}
                              {/* <!--begin::Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">MySQL</span>
                                <span className="fs-7 text-muted">Basic MySQL database</span>
                              </span>
                              {/* <!--end::Info--> */}
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" name="dbengine" checked="checked" value="1" />
                            </span>
                            {/* <!--end::Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            {/* <!--begin::Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin::Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-danger">
                                  <i className="ki-duotone ki-google text-danger fs-2x">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end::Icon--> */}
                              {/* <!--begin::Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">Firebase</span>
                                <span className="fs-7 text-muted">Google based app data management</span>
                              </span>
                              {/* <!--end::Info--> */}
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" name="dbengine" value="2" />
                            </span>
                            {/* <!--end::Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                          {/* <!--begin:Option--> */}
                          <label className="d-flex flex-stack cursor-pointer">
                            {/* <!--begin::Label--> */}
                            <span className="d-flex align-items-center me-2">
                              {/* <!--begin::Icon--> */}
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-warning">
                                  <i className="ki-duotone ki-microsoft text-warning fs-2x">
                                    <span className="path1"></span>
                                    <span className="path2"></span>
                                    <span className="path3"></span>
                                    <span className="path4"></span>
                                  </i>
                                </span>
                              </span>
                              {/* <!--end::Icon--> */}
                              {/* <!--begin::Info--> */}
                              <span className="d-flex flex-column">
                                <span className="fw-bold fs-6">DynamoDB</span>
                                <span className="fs-7 text-muted">Microsoft Fast NoSQL Database</span>
                              </span>
                              {/* <!--end::Info--> */}
                            </span>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input--> */}
                            <span className="form-check form-check-custom form-check-solid">
                              <input className="form-check-input" type="radio" name="dbengine" value="3" />
                            </span>
                            {/* <!--end::Input--> */}
                          </label>
                          {/* <!--end::Option--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 3--> */}
                    {/* <!--begin::Step 4--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        {/* <!--begin::Input group--> */}
                        <div className="d-flex flex-column mb-7 fv-row">
                          {/* <!--begin::Label--> */}
                          <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                            <span className="required">Name On Card</span>
                            <span className="ms-1" data-bs-toggle="tooltip" title="Specify a card holder's name">
                              <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                                <span className="path3"></span>
                              </i>
                            </span>
                          </label>
                          {/* <!--end::Label--> */}
                          <input type="text" className="form-control form-control-solid" placeholder="" name="card_name" value="Max Doe" />
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="d-flex flex-column mb-7 fv-row">
                          {/* <!--begin::Label--> */}
                          <label className="required fs-6 fw-semibold form-label mb-2">Card Number</label>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Input wrapper--> */}
                          <div className="position-relative">
                            {/* <!--begin::Input--> */}
                            <input type="text" className="form-control form-control-solid" placeholder="Enter card number" name="card_number" value="4111 1111 1111 1111" />
                            {/* <!--end::Input--> */}
                            {/* <!--begin::Card logos--> */}
                            <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                              <img src="assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                              <img src="assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                              <img src="assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                            </div>
                            {/* <!--end::Card logos--> */}
                          </div>
                          {/* <!--end::Input wrapper--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="row mb-10">
                          {/* <!--begin::Col--> */}
                          <div className="col-md-8 fv-row">
                            {/* <!--begin::Label--> */}
                            <label className="required fs-6 fw-semibold form-label mb-2">Expiration Date</label>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Row--> */}
                            <div className="row fv-row">
                              {/* <!--begin::Col--> */}
                              <div className="col-6">
                                <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                                  <option></option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                </select>
                              </div>
                              {/* <!--end::Col--> */}
                              {/* <!--begin::Col--> */}
                              <div className="col-6">
                                <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                                  <option></option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>
                                  <option value="2028">2028</option>
                                  <option value="2029">2029</option>
                                  <option value="2030">2030</option>
                                  <option value="2031">2031</option>
                                  <option value="2032">2032</option>
                                  <option value="2033">2033</option>
                                  <option value="2034">2034</option>
                                </select>
                              </div>
                              {/* <!--end::Col--> */}
                            </div>
                            {/* <!--end::Row--> */}
                          </div>
                          {/* <!--end::Col--> */}
                          {/* <!--begin::Col--> */}
                          <div className="col-md-4 fv-row">
                            {/* <!--begin::Label--> */}
                            <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                              <span className="required">CVV</span>
                              <span className="ms-1" data-bs-toggle="tooltip" title="Enter a card CVV code">
                                <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                  <span className="path3"></span>
                                </i>
                              </span>
                            </label>
                            {/* <!--end::Label--> */}
                            {/* <!--begin::Input wrapper--> */}
                            <div className="position-relative">
                              {/* <!--begin::Input--> */}
                              <input type="text" className="form-control form-control-solid" minLength="3" maxLength="4" placeholder="CVV" name="card_cvv" />
                              {/* <!--end::Input--> */}
                              {/* <!--begin::CVV icon--> */}
                              <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                <i className="ki-duotone ki-credit-cart fs-2hx">
                                  <span className="path1"></span>
                                  <span className="path2"></span>
                                </i>
                              </div>
                              {/* <!--end::CVV icon--> */}
                            </div>
                            {/* <!--end::Input wrapper--> */}
                          </div>
                          {/* <!--end::Col--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                        {/* <!--begin::Input group--> */}
                        <div className="d-flex flex-stack">
                          {/* <!--begin::Label--> */}
                          <div className="me-5">
                            <label className="fs-6 fw-semibold form-label">Save Card for further billing?</label>
                            <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                          </div>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Switch--> */}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                            <span className="form-check-label fw-semibold text-muted">Save Card</span>
                          </label>
                          {/* <!--end::Switch--> */}
                        </div>
                        {/* <!--end::Input group--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 4--> */}
                    {/* <!--begin::Step 5--> */}
                    <div data-kt-stepper-element="content">
                      <div className="w-100 text-center">
                        {/* <!--begin::Heading--> */}
                        <h1 className="fw-bold text-gray-900 mb-3">Release!</h1>
                        {/* <!--end::Heading--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-3">Submit your app to kickstart your project.</div>
                        {/* <!--end::Description--> */}
                        {/* <!--begin::Illustration--> */}
                        <div className="text-center px-4 py-15">
                          <img src="assets/media/illustrations/sketchy-1/9.png" alt="" className="mw-100 mh-300px" />
                        </div>
                        {/* <!--end::Illustration--> */}
                      </div>
                    </div>
                    {/* <!--end::Step 5--> */}
                    {/* <!--begin::Actions--> */}
                    <div className="d-flex flex-stack pt-10">
                      {/* <!--begin::Wrapper--> */}
                      <div className="me-2">
                        <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                        <i className="ki-duotone ki-arrow-left fs-3 me-1">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i>Back</button>
                      </div>
                      {/* <!--end::Wrapper--> */}
                      {/* <!--begin::Wrapper--> */}
                      <div>
                        <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                          <span className="indicator-label">Submit
                          <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                            <span className="path1"></span>
                            <span className="path2"></span>
                          </i></span>
                          <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                        <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                        <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                          <span className="path1"></span>
                          <span className="path2"></span>
                        </i></button>
                      </div>
                      {/* <!--end::Wrapper--> */}
                    </div>
                    {/* <!--end::Actions--> */}
                  </form>
                  {/* <!--end::Form--> */}
                </div>
                {/* <!--end::Content--> */}
              </div>
              {/* <!--end::Stepper--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
      {/* <!--end::Modal - Create App--> */}
      {/* <!--begin::Modal - Offer A Deal--> */}
      <div className="modal fade" id="kt_modal_offer_a_deal" tabindex="-1" aria-hidden="true">
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-1000px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header py-7 d-flex justify-content-between">
              {/* <!--begin::Modal title--> */}
              <h2>Offer a Deal</h2>
              {/* <!--end::Modal title--> */}
              {/* <!--begin::Close--> */}
              <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--begin::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body scroll-y m-5">
              {/* <!--begin::Stepper--> */}
              <div className="stepper stepper-links d-flex flex-column" id="kt_modal_offer_a_deal_stepper">
                {/* <!--begin::Nav--> */}
                <div className="stepper-nav justify-content-center py-2">
                  {/* <!--begin::Step 1--> */}
                  <div className="stepper-item me-5 me-md-15 current" data-kt-stepper-element="nav">
                    <h3 className="stepper-title">Deal Type</h3>
                  </div>
                  {/* <!--end::Step 1--> */}
                  {/* <!--begin::Step 2--> */}
                  <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                    <h3 className="stepper-title">Deal Details</h3>
                  </div>
                  {/* <!--end::Step 2--> */}
                  {/* <!--begin::Step 3--> */}
                  <div className="stepper-item me-5 me-md-15" data-kt-stepper-element="nav">
                    <h3 className="stepper-title">Finance Settings</h3>
                  </div>
                  {/* <!--end::Step 3--> */}
                  {/* <!--begin::Step 4--> */}
                  <div className="stepper-item" data-kt-stepper-element="nav">
                    <h3 className="stepper-title">Completed</h3>
                  </div>
                  {/* <!--end::Step 4--> */}
                </div>
                {/* <!--end::Nav--> */}
                {/* <!--begin::Form--> */}
                <form className="mx-auto mw-500px w-100 pt-15 pb-10" novalidate="novalidate" id="kt_modal_offer_a_deal_form">
                  {/* <!--begin::Type--> */}
                  <div className="current" data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Deal Type</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-15" data-kt-buttons="true">
                        {/* <!--begin::Option--> */}
                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6 mb-6 active">
                          {/* <!--begin::Input--> */}
                          <input className="btn-check" type="radio" checked="checked" name="offer_type" value="1" />
                          {/* <!--end::Input--> */}
                          {/* <!--begin::Label--> */}
                          <span className="d-flex">
                            {/* <!--begin::Icon--> */}
                            <i className="ki-duotone ki-profile-circle fs-3hx">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                            {/* <!--end::Icon--> */}
                            {/* <!--begin::Info--> */}
                            <span className="ms-4">
                              <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Personal Deal</span>
                              <span className="fw-semibold fs-4 text-muted">If you need more info, please check it out</span>
                            </span>
                            {/* <!--end::Info--> */}
                          </span>
                          {/* <!--end::Label--> */}
                        </label>
                        {/* <!--end::Option--> */}
                        {/* <!--begin::Option--> */}
                        <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6">
                          {/* <!--begin::Input--> */}
                          <input className="btn-check" type="radio" name="offer_type" value="2" />
                          {/* <!--end::Input--> */}
                          {/* <!--begin::Label--> */}
                          <span className="d-flex">
                            {/* <!--begin::Icon--> */}
                            <i className="ki-duotone ki-element-11 fs-3hx">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                              <span className="path4"></span>
                            </i>
                            {/* <!--end::Icon--> */}
                            {/* <!--begin::Info--> */}
                            <span className="ms-4">
                              <span className="fs-3 fw-bold text-gray-900 mb-2 d-block">Corporate Deal</span>
                              <span className="fw-semibold fs-4 text-muted">Create corporate account to manage users</span>
                            </span>
                            {/* <!--end::Info--> */}
                          </span>
                          {/* <!--end::Label--> */}
                        </label>
                        {/* <!--end::Option--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Actions--> */}
                      <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-lg btn-primary" data-kt-element="type-next">
                          <span className="indicator-label">Offer Details</span>
                          <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                      </div>
                      {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Type--> */}
                  {/* <!--begin::Details--> */}
                  <div data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Deal Details</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="required fs-6 fw-semibold mb-2">Customer</label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
                        <select className="form-select form-select-solid" data-control="select2" data-placeholder="Select an option" name="details_customer">
                          <option></option>
                          <option value="1" selected="selected">Keenthemes</option>
                          <option value="2">CRM App</option>
                        </select>
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="required fs-6 fw-semibold mb-2">Deal Title</label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Input--> */}
                        <input type="text" className="form-control form-control-solid" placeholder="Enter Deal Title" name="details_title" value="Marketing Campaign" />
                        {/* <!--end::Input--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="fs-6 fw-semibold mb-2">Deal Description</label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Label--> */}
                        <textarea className="form-control form-control-solid" rows="3" placeholder="Enter Deal Description" name="details_description">Experience share market at your fingertips with TICK PRO stock investment mobile trading app</textarea>
                        {/* <!--end::Label--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        <label className="required fs-6 fw-semibold mb-2">Activation Date</label>
                        <div className="position-relative d-flex align-items-center">
                          {/* <!--begin::Icon--> */}
                          <i className="ki-duotone ki-calendar-8 fs-2 position-absolute mx-4">
                            <span className="path1"></span>
                            <span className="path2"></span>
                            <span className="path3"></span>
                            <span className="path4"></span>
                            <span className="path5"></span>
                            <span className="path6"></span>
                          </i>
                          {/* <!--end::Icon--> */}
                          {/* <!--begin::Datepicker--> */}
                          <input className="form-control form-control-solid ps-12" placeholder="Pick date range" name="details_activation_date" />
                          {/* <!--end::Datepicker--> */}
                        </div>
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-15">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-stack">
                          {/* <!--begin::Label--> */}
                          <div className="me-5">
                            <label className="required fs-6 fw-semibold">Notifications</label>
                            <div className="fs-7 fw-semibold text-muted">Allow Notifications by Phone or Email</div>
                          </div>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Checkboxes--> */}
                          <div className="d-flex">
                            {/* <!--begin::Checkbox--> */}
                            <label className="form-check form-check-custom form-check-solid me-10">
                              {/* <!--begin::Input--> */}
                              <input className="form-check-input h-20px w-20px" type="checkbox" value="email" name="details_notifications[]" />
                              {/* <!--end::Input--> */}
                              {/* <!--begin::Label--> */}
                              <span className="form-check-label fw-semibold">Email</span>
                              {/* <!--end::Label--> */}
                            </label>
                            {/* <!--end::Checkbox--> */}
                            {/* <!--begin::Checkbox--> */}
                            <label className="form-check form-check-custom form-check-solid">
                              {/* <!--begin::Input--> */}
                              <input className="form-check-input h-20px w-20px" type="checkbox" value="phone" checked="checked" name="details_notifications[]" />
                              {/* <!--end::Input--> */}
                              {/* <!--begin::Label--> */}
                              <span className="form-check-label fw-semibold">Phone</span>
                              {/* <!--end::Label--> */}
                            </label>
                            {/* <!--end::Checkbox--> */}
                          </div>
                          {/* <!--end::Checkboxes--> */}
                        </div>
                        {/* <!--begin::Wrapper--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Actions--> */}
                      <div className="d-flex flex-stack">
                        <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="details-previous">Deal Type</button>
                        <button type="button" className="btn btn-lg btn-primary" data-kt-element="details-next">
                          <span className="indicator-label">Financing</span>
                          <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                      </div>
                      {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Details--> */}
                  {/* <!--begin::Budget--> */}
                  <div data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Finance</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="d-flex align-items-center fs-6 fw-semibold mb-2">
                          <span className="required">Setup Budget</span>
                          <span className="lh-1 ms-1" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-html="true" data-bs-content="&lt;div className=&#039;p-4 rounded bg-light&#039;&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-4&#039;&gt; &lt;i className=&quot;ki-duotone ki-bank fs-3 me-3&quot;&gt;&lt;span className=&quot;path1&quot;&gt;&lt;/span&gt;&lt;span className=&quot;path2&quot;&gt;&lt;/span&gt;&lt;/i&gt; &lt;div className=&#039;fw-bold&#039;&gt;INCBANK **** 1245 STATEMENT&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack fw-semibold text-gray-600&#039;&gt; &lt;div&gt;Amount&lt;/div&gt; &lt;div&gt;Transaction&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;separator separator-dashed my-2&#039;&gt;&lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-gray-900 fw-bold mb-2&#039;&gt; &lt;div&gt;USD345.00&lt;/div&gt; &lt;div&gt;KEENTHEMES*&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted mb-2&#039;&gt; &lt;div&gt;USD75.00&lt;/div&gt; &lt;div&gt;Hosting fee&lt;/div&gt; &lt;/div&gt; &lt;div className=&#039;d-flex flex-stack text-muted&#039;&gt; &lt;div&gt;USD3,950.00&lt;/div&gt; &lt;div&gt;Payrol&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;">
                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </span>
                        </label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Dialer--> */}
                        <div className="position-relative w-lg-250px" id="kt_modal_finance_setup" data-kt-dialer="true" data-kt-dialer-min="50" data-kt-dialer-max="50000" data-kt-dialer-step="100" data-kt-dialer-prefix="$" data-kt-dialer-decimals="2">
                          {/* <!--begin::Decrease control--> */}
                          <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 start-0" data-kt-dialer-control="decrease">
                            <i className="ki-duotone ki-minus-circle fs-1">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </button>
                          {/* <!--end::Decrease control--> */}
                          {/* <!--begin::Input control--> */}
                          <input type="text" className="form-control form-control-solid border-0 ps-12" data-kt-dialer-control="input" placeholder="Amount" name="finance_setup" readonly="readonly" value="$50" />
                          {/* <!--end::Input control--> */}
                          {/* <!--begin::Increase control--> */}
                          <button type="button" className="btn btn-icon btn-active-color-gray-700 position-absolute translate-middle-y top-50 end-0" data-kt-dialer-control="increase">
                            <i className="ki-duotone ki-plus-circle fs-1">
                              <span className="path1"></span>
                              <span className="path2"></span>
                            </i>
                          </button>
                          {/* <!--end::Increase control--> */}
                        </div>
                        {/* <!--end::Dialer--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-8">
                        {/* <!--begin::Label--> */}
                        <label className="fs-6 fw-semibold mb-2">Budget Usage</label>
                        {/* <!--end::Label--> */}
                        {/* <!--begin::Row--> */}
                        <div className="row g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']">
                          {/* <!--begin::Col--> */}
                          <div className="col-md-6 col-lg-12 col-xxl-6">
                            {/* <!--begin::Option--> */}
                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                              {/* <!--begin::Radio--> */}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input className="form-check-input" type="radio" name="finance_usage" value="1" checked="checked" />
                              </span>
                              {/* <!--end::Radio--> */}
                              {/* <!--begin::Info--> */}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Precise Usage</span>
                                <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                              </span>
                              {/* <!--end::Info--> */}
                            </label>
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end::Col--> */}
                          {/* <!--begin::Col--> */}
                          <div className="col-md-6 col-lg-12 col-xxl-6">
                            {/* <!--begin::Option--> */}
                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                              {/* <!--begin::Radio--> */}
                              <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                <input className="form-check-input" type="radio" name="finance_usage" value="2" />
                              </span>
                              {/* <!--end::Radio--> */}
                              {/* <!--begin::Info--> */}
                              <span className="ms-5">
                                <span className="fs-4 fw-bold text-gray-800 mb-2 d-block">Extreme Usage</span>
                                <span className="fw-semibold fs-7 text-gray-600">Withdraw money to your bank account per transaction under $50,000 budget</span>
                              </span>
                              {/* <!--end::Info--> */}
                            </label>
                            {/* <!--end::Option--> */}
                          </div>
                          {/* <!--end::Col--> */}
                        </div>
                        {/* <!--end::Row--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Input group--> */}
                      <div className="fv-row mb-15">
                        {/* <!--begin::Wrapper--> */}
                        <div className="d-flex flex-stack">
                          {/* <!--begin::Label--> */}
                          <div className="me-5">
                            <label className="fs-6 fw-semibold">Allow Changes in Budget</label>
                            <div className="fs-7 fw-semibold text-muted">If you need more info, please check budget planning</div>
                          </div>
                          {/* <!--end::Label--> */}
                          {/* <!--begin::Switch--> */}
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input className="form-check-input" type="checkbox" value="1" name="finance_allow" checked="checked" />
                            <span className="form-check-label fw-semibold text-muted">Allowed</span>
                          </label>
                          {/* <!--end::Switch--> */}
                        </div>
                        {/* <!--end::Wrapper--> */}
                      </div>
                      {/* <!--end::Input group--> */}
                      {/* <!--begin::Actions--> */}
                      <div className="d-flex flex-stack">
                        <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="finance-previous">Project Settings</button>
                        <button type="button" className="btn btn-lg btn-primary" data-kt-element="finance-next">
                          <span className="indicator-label">Build Team</span>
                          <span className="indicator-progress">Please wait...
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                        </button>
                      </div>
                      {/* <!--end::Actions--> */}
                    </div>
                    {/* <!--end::Wrapper--> */}
                  </div>
                  {/* <!--end::Budget--> */}
                  {/* <!--begin::Complete--> */}
                  <div data-kt-stepper-element="content">
                    {/* <!--begin::Wrapper--> */}
                    <div className="w-100">
                      {/* <!--begin::Heading--> */}
                      <div className="mb-13">
                        {/* <!--begin::Title--> */}
                        <h2 className="mb-3">Deal Created!</h2>
                        {/* <!--end::Title--> */}
                        {/* <!--begin::Description--> */}
                        <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                        <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                        {/* <!--end::Description--> */}
                      </div>
                      {/* <!--end::Heading--> */}
                      {/* <!--begin::Actions--> */}
                      <div className="d-flex flex-center pb-20">
                        <button type="button" className="btn btn-lg btn-light me-3" data-kt-element="complete-start">Create New Deal</button>
                        <a href="#" className="btn btn-lg btn-primary" data-bs-toggle="tooltip" title="Coming Soon">View Deal</a>
                      </div>
                      {/* <!--end::Actions--> */}
                      {/* <!--begin::Illustration--> */}
                      <div className="text-center px-4">
                        <img src="assets/media/illustrations/sketchy-1/20.png" alt="" className="mw-100 mh-300px" />
                      </div>
                      {/* <!--end::Illustration--> */}
                    </div>
                  </div>
                  {/* <!--end::Complete--> */}
                </form>
                {/* <!--end::Form--> */}
              </div>
              {/* <!--end::Stepper--> */}
            </div>
            {/* <!--begin::Modal body--> */}
          </div>
        </div>
      </div>
      {/* <!--end::Modal - Offer A Deal--> */}
      {/* <!--begin::Modal - Users Search--> */}
      <div className="modal fade" id="kt_modal_users_search" tabindex="-1" aria-hidden="true">
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog modal-dialog-centered mw-650px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header pb-0 border-0 justify-content-end">
              {/* <!--begin::Close--> */}
              <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--begin::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              {/* <!--begin::Content--> */}
              <div className="text-center mb-13">
                <h1 className="mb-3">Search Users</h1>
                <div className="text-muted fw-semibold fs-5">Invite Collaborators To Your Project</div>
              </div>
              {/* <!--end::Content--> */}
              {/* <!--begin::Search--> */}
              <div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="inline">
                {/* <!--begin::Form--> */}
                <form data-kt-search-element="form" className="w-100 position-relative mb-5" autocomplete="off">
                  {/* <!--begin::Hidden input(Added to disable form autocomplete)--> */}
                  <input type="hidden" />
                  {/* <!--end::Hidden input--> */}
                  {/* <!--begin::Icon--> */}
                  <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                    <span className="path1"></span>
                    <span className="path2"></span>
                  </i>
                  {/* <!--end::Icon--> */}
                  {/* <!--begin::Input--> */}
                  <input type="text" className="form-control form-control-lg form-control-solid px-15" name="search" value="" placeholder="Search by username, full name or email..." data-kt-search-element="input" />
                  {/* <!--end::Input--> */}
                  {/* <!--begin::Spinner--> */}
                  <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5" data-kt-search-element="spinner">
                    <span className="spinner-border h-15px w-15px align-middle text-muted"></span>
                  </span>
                  {/* <!--end::Spinner--> */}
                  {/* <!--begin::Reset--> */}
                  <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none" data-kt-search-element="clear">
                    <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                      <span className="path1"></span>
                      <span className="path2"></span>
                    </i>
                  </span>
                  {/* <!--end::Reset--> */}
                </form>
                {/* <!--end::Form--> */}
                {/* <!--begin::Wrapper--> */}
                <div className="py-5">
                  {/* <!--begin::Suggestions--> */}
                  <div data-kt-search-element="suggestions">
                    {/* <!--begin::Heading--> */}
                    <h3 className="fw-semibold mb-5">Recently searched:</h3>
                    {/* <!--end::Heading--> */}
                    {/* <!--begin::Users--> */}
                    <div className="mh-375px scroll-y me-n7 pe-7">
                      {/* <!--begin::User--> */}
                      <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">Emma Smith</span>
                          <span className="badge badge-light">Art Director</span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">Melody Macy</span>
                          <span className="badge badge-light">Marketing Analytic</span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                          <span className="badge badge-light">Software Enginer</span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                          <span className="badge badge-light">Web Developer</span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                      {/* <!--begin::User--> */}
                      <a href="#" className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1">
                        {/* <!--begin::Avatar--> */}
                        <div className="symbol symbol-35px symbol-circle me-5">
                          <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                        </div>
                        {/* <!--end::Avatar--> */}
                        {/* <!--begin::Info--> */}
                        <div className="fw-semibold">
                          <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                          <span className="badge badge-light">UI/UX Designer</span>
                        </div>
                        {/* <!--end::Info--> */}
                      </a>
                      {/* <!--end::User--> */}
                    </div>
                    {/* <!--end::Users--> */}
                  </div>
                  {/* <!--end::Suggestions--> */}
                  {/* <!--begin::Results(add d-none to below element to hide the users list by default)--> */}
                  <div data-kt-search-element="results" className="d-none">
                    {/* <!--begin::Users--> */}
                    <div className="mh-375px scroll-y me-n7 pe-7">
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="0">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='0']" value="0" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                            <div className="fw-semibold text-muted">smith@kpmg.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2" selected="selected">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="1">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='1']" value="1" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                            <div className="fw-semibold text-muted">melody@altbox.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1" selected="selected">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="2">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='2']" value="2" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                            <div className="fw-semibold text-muted">max@kt.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="3">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='3']" value="3" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                            <div className="fw-semibold text-muted">sean@dellito.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2" selected="selected">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="4">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='4']" value="4" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                            <div className="fw-semibold text-muted">brian@exchange.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="5">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='5']" value="5" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                            <div className="fw-semibold text-muted">mik@pex.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2" selected="selected">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="6">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='6']" value="6" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                            <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="7">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='7']" value="7" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                            <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2" selected="selected">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="8">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='8']" value="8" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                            <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1" selected="selected">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="9">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='9']" value="9" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                            <div className="fw-semibold text-muted">dam@consilting.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="10">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='10']" value="10" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                            <div className="fw-semibold text-muted">emma@intenso.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2" selected="selected">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="11">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='11']" value="11" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                            <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1" selected="selected">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="12">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='12']" value="12" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                            <div className="fw-semibold text-muted">robert@benko.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="13">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='13']" value="13" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                            <div className="fw-semibold text-muted">miller@mapple.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="14">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='14']" value="14" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                            <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2" selected="selected">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="15">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='15']" value="15" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                            <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1" selected="selected">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                      {/* <!--begin::Separator--> */}
                      <div className="border-bottom border-gray-300 border-bottom-dashed"></div>
                      {/* <!--end::Separator--> */}
                      {/* <!--begin::User--> */}
                      <div className="rounded d-flex flex-stack bg-active-lighten p-4" data-user-id="16">
                        {/* <!--begin::Details--> */}
                        <div className="d-flex align-items-center">
                          {/* <!--begin::Checkbox--> */}
                          <label className="form-check form-check-custom form-check-solid me-5">
                            <input className="form-check-input" type="checkbox" name="users" data-kt-check="true" data-kt-check-target="[data-user-id='16']" value="16" />
                          </label>
                          {/* <!--end::Checkbox--> */}
                          {/* <!--begin::Avatar--> */}
                          <div className="symbol symbol-35px symbol-circle">
                            <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                          </div>
                          {/* <!--end::Avatar--> */}
                          {/* <!--begin::Details--> */}
                          <div className="ms-5">
                            <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                            <div className="fw-semibold text-muted">emma@intenso.com</div>
                          </div>
                          {/* <!--end::Details--> */}
                        </div>
                        {/* <!--end::Details--> */}
                        {/* <!--begin::Access menu--> */}
                        <div className="ms-2 w-100px">
                          <select className="form-select form-select-solid form-select-sm" data-control="select2" data-hide-search="true">
                            <option value="1">Guest</option>
                            <option value="2">Owner</option>
                            <option value="3" selected="selected">Can Edit</option>
                          </select>
                        </div>
                        {/* <!--end::Access menu--> */}
                      </div>
                      {/* <!--end::User--> */}
                    </div>
                    {/* <!--end::Users--> */}
                    {/* <!--begin::Actions--> */}
                    <div className="d-flex flex-center mt-15">
                      <button type="reset" id="kt_modal_users_search_reset" data-bs-dismiss="modal" className="btn btn-active-light me-3">Cancel</button>
                      <button type="submit" id="kt_modal_users_search_submit" className="btn btn-primary">Add Selected Users</button>
                    </div>
                    {/* <!--end::Actions--> */}
                  </div>
                  {/* <!--end::Results--> */}
                  {/* <!--begin::Empty--> */}
                  <div data-kt-search-element="empty" className="text-center d-none">
                    {/* <!--begin::Message--> */}
                    <div className="fw-semibold py-10">
                      <div className="text-gray-600 fs-3 mb-2">No users found</div>
                      <div className="text-muted fs-6">Try to search by username, full name or email...</div>
                    </div>
                    {/* <!--end::Message--> */}
                    {/* <!--begin::Illustration--> */}
                    <div className="text-center px-5">
                      <img src="assets/media/illustrations/sketchy-1/1.png" alt="" className="w-100 h-200px h-sm-325px" />
                    </div>
                    {/* <!--end::Illustration--> */}
                  </div>
                  {/* <!--end::Empty--> */}
                </div>
                {/* <!--end::Wrapper--> */}
              </div>
              {/* <!--end::Search--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
      {/* <!--end::Modal - Users Search--> */}
      {/* <!--begin::Modal - Invite Friends--> */}
      <div className="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
        {/* <!--begin::Modal dialog--> */}
        <div className="modal-dialog mw-650px">
          {/* <!--begin::Modal content--> */}
          <div className="modal-content">
            {/* <!--begin::Modal header--> */}
            <div className="modal-header pb-0 border-0 justify-content-end">
              {/* <!--begin::Close--> */}
              <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </div>
              {/* <!--end::Close--> */}
            </div>
            {/* <!--begin::Modal header--> */}
            {/* <!--begin::Modal body--> */}
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              {/* <!--begin::Heading--> */}
              <div className="text-center mb-13">
                {/* <!--begin::Title--> */}
                <h1 className="mb-3">Invite a Friend</h1>
                {/* <!--end::Title--> */}
                {/* <!--begin::Description--> */}
                <div className="text-muted fw-semibold fs-5">If you need more info, please check out
                <a href="#" className="link-primary fw-bold">FAQ Page</a>.</div>
                {/* <!--end::Description--> */}
              </div>
              {/* <!--end::Heading--> */}
              {/* <!--begin::Google Contacts Invite--> */}
              <div className="btn btn-light-primary fw-bold w-100 mb-8">
              <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-20px me-3" />Invite Gmail Contacts</div>
              {/* <!--end::Google Contacts Invite--> */}
              {/* <!--begin::Separator--> */}
              <div className="separator d-flex flex-center mb-8">
                <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">or</span>
              </div>
              {/* <!--end::Separator--> */}
              {/* <!--begin::Textarea--> */}
              <textarea className="form-control form-control-solid mb-8" rows="3" placeholder="Type or paste emails here"></textarea>
              {/* <!--end::Textarea--> */}
              {/* <!--begin::Users--> */}
              <div className="mb-10">
                {/* <!--begin::Heading--> */}
                <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
                {/* <!--end::Heading--> */}
                {/* <!--begin::List--> */}
                <div className="mh-300px scroll-y me-n7 pe-7">
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-6.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Smith</a>
                        <div className="fw-semibold text-muted">smith@kpmg.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2" selected="selected">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">M</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Melody Macy</a>
                        <div className="fw-semibold text-muted">melody@altbox.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1" selected="selected">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-1.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Max Smith</a>
                        <div className="fw-semibold text-muted">max@kt.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-5.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Sean Bean</a>
                        <div className="fw-semibold text-muted">sean@dellito.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2" selected="selected">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                        <div className="fw-semibold text-muted">brian@exchange.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-warning text-warning fw-semibold">C</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Mikaela Collins</a>
                        <div className="fw-semibold text-muted">mik@pex.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2" selected="selected">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-9.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Francis Mitcham</a>
                        <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">O</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Olivia Wild</a>
                        <div className="fw-semibold text-muted">olivia@corpmail.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2" selected="selected">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-semibold">N</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Neil Owen</a>
                        <div className="fw-semibold text-muted">owen.neil@gmail.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1" selected="selected">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-23.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Dan Wilson</a>
                        <div className="fw-semibold text-muted">dam@consilting.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">E</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Emma Bold</a>
                        <div className="fw-semibold text-muted">emma@intenso.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2" selected="selected">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-12.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ana Crown</a>
                        <div className="fw-semibold text-muted">ana.cf@limtel.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1" selected="selected">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-semibold">A</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Robert Doe</a>
                        <div className="fw-semibold text-muted">robert@benko.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-13.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">John Miller</a>
                        <div className="fw-semibold text-muted">miller@mapple.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-semibold">L</span>
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Lucy Kunic</a>
                        <div className="fw-semibold text-muted">lucy.m@fentech.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2" selected="selected">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-21.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Ethan Wilder</a>
                        <div className="fw-semibold text-muted">ethan@loop.com.au</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1" selected="selected">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                  {/* <!--begin::User--> */}
                  <div className="d-flex flex-stack py-4">
                    {/* <!--begin::Details--> */}
                    <div className="d-flex align-items-center">
                      {/* <!--begin::Avatar--> */}
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/300-25.jpg" />
                      </div>
                      {/* <!--end::Avatar--> */}
                      {/* <!--begin::Details--> */}
                      <div className="ms-5">
                        <a href="#" className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2">Brian Cox</a>
                        <div className="fw-semibold text-muted">brian@exchange.com</div>
                      </div>
                      {/* <!--end::Details--> */}
                    </div>
                    {/* <!--end::Details--> */}
                    {/* <!--begin::Access menu--> */}
                    <div className="ms-2 w-100px">
                      <select className="form-select form-select-solid form-select-sm" data-control="select2" data-dropdown-parent="#kt_modal_invite_friends" data-hide-search="true">
                        <option value="1">Guest</option>
                        <option value="2">Owner</option>
                        <option value="3" selected="selected">Can Edit</option>
                      </select>
                    </div>
                    {/* <!--end::Access menu--> */}
                  </div>
                  {/* <!--end::User--> */}
                </div>
                {/* <!--end::List--> */}
              </div>
              {/* <!--end::Users--> */}
              {/* <!--begin::Notice--> */}
              <div className="d-flex flex-stack">
                {/* <!--begin::Label--> */}
                <div className="me-5 fw-semibold">
                  <label className="fs-6">Adding Users by Team Members</label>
                  <div className="fs-7 text-muted">If you need more info, please check budget planning</div>
                </div>
                {/* <!--end::Label--> */}
                {/* <!--begin::Switch--> */}
                <label className="form-check form-switch form-check-custom form-check-solid">
                  <input className="form-check-input" type="checkbox" value="1" checked="checked" />
                  <span className="form-check-label fw-semibold text-muted">Allowed</span>
                </label>
                {/* <!--end::Switch--> */}
              </div>
              {/* <!--end::Notice--> */}
            </div>
            {/* <!--end::Modal body--> */}
          </div>
          {/* <!--end::Modal content--> */}
        </div>
        {/* <!--end::Modal dialog--> */}
      </div>
      {/* <!--end::Modal - Invite Friend--> */}
      {/* <!--end::Modals--> */}
    </div>
  ) ,document.getElementById('modals'))
}

export default Modals