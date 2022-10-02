import React, { MouseEvent, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import type { InteractionItem } from 'chart.js';
import chartTrendline from 'chartjs-plugin-trendline';
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
  Title,
  chartTrendline
);

export function LineGraphs(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: props.graphName,
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: 'Score',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
    },
  };

  const labels: string[] = [];

  props.surveys.map((survey) => {
    const newDate = new Date(survey.createdAt);
    const dateString = newDate.getMonth() + '/' + newDate.getDate();
    labels.push(dateString);
  });

  const data = {
    labels,
    datasets: [
      {
        label: props.graphName,
        trendlineLinear: {
          colorMin: 'black',
          lineStyle: 'dotted',
          width: 3,
        },
        stepped: true,
        backgroundColor: 'rgb(5, 140, 66, 0.7)',
        borderColor: 'rgb(5, 140, 66)',
        borderWidth: 2,
        data: props.surveys.map(
          (survey) => survey.surveyResultJSON[props.graphDataName]
        ),
      },
    ],
  };

  return (
    <Container>
      <h2 className="d-flex pt-5 mx-auto justify-content-center">
        {props.graphName}
      </h2>
      <Bar options={options} data={data} />
      <hr />
    </Container>
  );
}
