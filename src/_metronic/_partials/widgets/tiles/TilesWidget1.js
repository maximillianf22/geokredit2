/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useMemo, useState } from "react";
import SVG from "react-inlinesvg";
import { Dropdown } from "react-bootstrap";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { toAbsoluteUrl } from "../../../_helpers";
import { DropdownCustomToggler, DropdownMenu4 } from "../../dropdowns";
import { useHtmlClassService } from "../../../layout";

export function TilesWidget1({ className, chartColor = "success" }) {
  const tabs = {
    tab1: "kt_tab_pane_3_1",
    tab2: "kt_tab_pane_3_2",
    tab3: "kt_tab_pane_3_3",
  };
  const [activeTab, setActiveTab] = useState(tabs.tab1);
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
      colorsThemeBaseColor: objectPath.get(
        uiService.config,
        `js.colors.theme.base.${chartColor}`
      ),
      colorsThemeLightColor: objectPath.get(
        uiService.config,
        `js.colors.theme.light.${chartColor}`
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService, chartColor]);

  useEffect(() => {
    const element = document.getElementById("kt_tiles_widget_1_chart");

    if (!element) {
      return;
    }

    const options = getChartOption(layoutProps);
    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <>
      {/* begin::Tiles Widget 1 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
          <div className="card-title">
            <div className="card-label">
              <div className="font-weight-bolder">Oficina Buenavista</div>
              <div className="font-size-sm text-muted mt-2">Barranquilla</div>
            </div>
          </div>
          <div className="card-toolbar">
          <div className="card-toolbar tb-nav bg-secondary rounded">
            <ul className="nav nav-pills nav-pills-sm nav-dark-75">
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab1 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab1}`}
                  onClick={() => setActiveTab(tabs.tab1)}
                >
                  Mes
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab2 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab2}`}
                  onClick={() => setActiveTab(tabs.tab2)}
                >
                  Semana
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link py-2 px-4 ${activeTab === tabs.tab3 &&
                    "active"}`}
                  data-toggle="tab"
                  href={`#${tabs.tab3}`}
                  onClick={() => setActiveTab(tabs.tab3)}
                >
                  Dia
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
        {/* end::Header */}

        {/* begin::Body */}
        <div className="card-body d-flex flex-column px-0">
          {/* begin::Chart */}
          <div
            id="kt_tiles_widget_1_chart"
            data-color={chartColor}
            style={{ height: "150px" }}
          />
          {/* end::Chart */}

          {/* begin::Items */}
          <div className="flex-grow-1 card-spacer-x">
            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between mb-10">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <i className="fas fa-user"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                  >
                    Asesores
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    105,000,000 colocados
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                20
              </div>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between mb-10">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <i className="fas fa-chart-bar"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                  >
                    Meta Mensual
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    $150,000,000
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                60%
              </div>
            </div>
            {/* end::Item */}

            {/* begin::Item */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center mr-2">
                <div className="symbol symbol-50 symbol-light mr-3 flex-shrink-0">
                  <div className="symbol-label">
                    <span className="svg-icon">
                      <i className="fas fa-percent"></i> 
                    </span>
                  </div>
                </div>
                <div>
                  <a
                    href="#"
                    className="font-size-h6 text-primary text-hover-dark font-weight-bolder"
                  >
                    Efectividad
                  </a>
                  <div className="font-size-sm text-muted font-weight-bold mt-1">
                    en el ultimo año
                  </div>
                </div>
              </div>
              <div className="label label-light label-inline font-weight-bold text-dark-50 py-4 px-3 h6">
                90%
              </div>
            </div>
            {/* end::Item */}
          </div>
          {/* end::Items */}
        </div>
        {/* end::Body */}
      </div>
      {/* end::Tiles Widget 1 */}
    </>
  );
}

function getChartOption(layoutProps) {
  const options = {
    series: [
      {
        name: "Creditos colocados",
        data: [20, 22, 30, 28, 25, 26, 30, 28, 22, 24, 25, 35],
      },
    ],
    chart: {
      type: "area",
      height: 150,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
      opacity: 1,
      gradient: {
        type: "vertical",
        shadeIntensity: 0.55,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0.2,
        stops: [25, 50, 100],
        colorStops: [],
      },
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [layoutProps.colorsThemeBaseColor],
    },
    xaxis: {
      categories: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 37,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily,
      },
      y: {
        formatter: function(val) {
          return  val;
        },
      },
    },
    colors: [layoutProps.colorsThemeLightColor],
    markers: {
      colors: [layoutProps.colorsThemeLightColor],
      strokeColor: [layoutProps.colorsThemeBaseColor],
      strokeWidth: 3,
    },
    padding: {
      top: 0,
      bottom: 0,
    },
  };
  return options;
}
