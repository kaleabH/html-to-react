import React from 'react'
import Timeline from './Timeline'
const  ActivitiesDrawer = () =>
{
return(
    <div
        id="kt_activities"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="activities"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_activities_toggle"
        data-kt-drawer-close="#kt_activities_close"
      >
        <div className="card shadow-none border-0 rounded-0">
          {/* <!--begin::Header--> */}
          <div className="card-header" id="kt_activities_header">
            <h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
            <div className="card-toolbar">
              <button
                type="button"
                className="btn btn-sm btn-icon btn-active-light-primary me-n5"
                id="kt_activities_close"
              >
                <i className="ki-duotone ki-cross fs-1">
                  <span className="path1"></span>
                  <span className="path2"></span>
                </i>
              </button>
            </div>
          </div>
          {/* <!--end::Header--> */}
          {/* <!--begin::Body--> */}
          <div className="card-body position-relative" id="kt_activities_body">
            {/* <!--begin::Content--> */}
            <div
              id="kt_activities_scroll"
              className="position-relative scroll-y me-n5 pe-5"
              data-kt-scroll="true"
              data-kt-scroll-height="auto"
              data-kt-scroll-wrappers="#kt_activities_body"
              data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
              data-kt-scroll-offset="5px"
            >
              <Timeline/>
            {/* <!--end::Content--> */}
            </div>
          </div>
          {/* <!--end::Body--> */}
          {/* <!--begin::Footer--> */}
          <div
            className="card-footer py-5 text-center"
            id="kt_activities_footer"
          >
            <a
              href="pages/user-profile/activity.html"
              className="btn btn-bg-body text-primary"
            >
              View All Activities
              <i className="ki-duotone ki-arrow-right fs-3 text-primary">
                <span className="path1"></span>
                <span className="path2"></span>
              </i>
            </a>
          </div>
          {/* <!--end::Footer--> */}
        </div>
      </div>
      )
      }
export default ActivitiesDrawer;