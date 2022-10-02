import React, { MouseEvent, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { InteractionItem } from 'chart.js';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title,
} from 'chart.js';
import {
  Chart,
  getDatasetAtEvent,
  getElementAtEvent,
  getElementsAtEvent,
  Line,
  Bar,
} from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Title
);

export function LineGraphAll(props) {
  // const printDatasetAtEvent = (dataset: InteractionItem[]) => {
  //   if (!dataset.length) return;

  //   const datasetIndex = dataset[0].datasetIndex;

  //   console.log(data.datasets[datasetIndex].label);
  // };

  // const printElementAtEvent = (element: InteractionItem[]) => {
  //   if (!element.length) return;

  //   const { datasetIndex, index } = element[0];

  //   console.log(data.labels[index], data.datasets[datasetIndex].data[index]);
  // };

  // const printElementsAtEvent = (elements: InteractionItem[]) => {
  //   if (!elements.length) return;

  //   console.log(elements.length);
  // };

  // const chartRef = useRef<ChartJS>(null);

  // const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
  //   const { current: chart } = chartRef;

  //   if (!chart) {
  //     return;
  //   }

  //   printDatasetAtEvent(getDatasetAtEvent(chart, event));
  //   printElementAtEvent(getElementAtEvent(chart, event));
  //   printElementsAtEvent(getElementsAtEvent(chart, event));
  // };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'DBT Trends',
      },
    },
  };

  const labels: string[] = [];

  props.surveys.map((survey) => {
    const newDate = new Date(survey.createdAt);
    const dateString = newDate.getMonth() + '/' + newDate.getDate();
    labels.push(dateString);
  });

  // props.surveys.map((survey) => survey.surveyResultJSON.siDesire)

  const data = {
    labels,
    datasets: [
      {
        label: 'SI',
        backgroundColor: 'rgb(224, 192, 217)',
        borderColor: 'rgb(255,99,132)',

        data: props.surveys.map((survey) => survey.surveyResultJSON.siDesire),
      },
      {
        label: 'NSSI',
        backgroundColor: 'rgb(39, 105, 167)',
        borderColor: 'rgb(255,99,132)',

        data: props.surveys.map((survey) => survey.surveyResultJSON.nssiDesire),
      },
      {
        label: 'Pain',
        backgroundColor: 'rgb(161, 37, 82)',
        borderColor: 'rgb(255,99,132)',

        data: props.surveys.map((survey) => survey.surveyResultJSON.painDesire),
      },
      {
        label: 'Sadness',
        backgroundColor: 'rgb(237, 133, 82)',
        borderColor: 'rgb(237, 133, 82)',
        data: props.surveys.map(
          (survey) => survey.surveyResultJSON.sadnessDesire
        ),
      },
      {
        label: 'Shame',
        backgroundColor: 'rgb(198, 170, 150)',
        borderColor: 'rgb(198, 170, 150)',
        data: props.surveys.map(
          (survey) => survey.surveyResultJSON.shameDesire
        ),
      },
      {
        label: 'Anger',
        backgroundColor: 'rgb(182, 184, 187)',
        borderColor: 'rgb(182, 184, 187)',
        data: props.surveys.map(
          (survey) => survey.surveyResultJSON.angerDesire
        ),
      },
      {
        label: 'Fear',
        backgroundColor: 'rgb(233, 237, 146)',
        borderColor: 'rgb(233, 237, 146)',
        data: props.surveys.map((survey) => survey.surveyResultJSON.fearDesire),
      },
      {
        label: 'Joy',
        backgroundColor: 'rgb(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132, 0.5)',

        data: props.surveys.map((survey) => survey.surveyResultJSON.joyToday),
      },
    ],
  };

  return <Line options={options} data={data} />;
}
