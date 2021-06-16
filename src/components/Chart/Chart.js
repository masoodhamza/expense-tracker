import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            label={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            key={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
