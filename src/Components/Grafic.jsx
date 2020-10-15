import React, { Component } from 'react';
import { Chart } from 'chart.js';
import PropTypes from 'prop-types';

class Grafic extends Component {
componentDidMount= () => {
  const ctx = document.getElementById('myChart');
  const { stats } = this.props;

  new Chart(
    ctx,
    {
      type: 'radar',
      data: {
        labels: stats.map(stat => stat.stat.name),
        datasets: [{
                data: stats.map(stat =>stat.base_stat),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'black'
                ],
                pointBackgroundColor:['black'],
            }]
        },
    },
  );
}

render() {
  return (
    <canvas
      id="myChart"
      width="400"
      height="400"
    />
  );
}
}

Grafic.propTypes = {
  stats: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Grafic;
