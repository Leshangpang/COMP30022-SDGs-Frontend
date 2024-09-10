export function getOptions(name, data) {
  return {
    tooltip: {
      trigger: "item",
      appendToBody: true,
    },
    series: [
      {
        name,
        type: "pie",
        radius: ["50%", "90%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        labelLine: {
          show: false,
        },
        data,
      },
    ],
  };
}
