'use strict';

const mcFaceRuns = {
  name: 'Person McFace',
  email: 'wdi@personmcface.com',
  runs: [
    {
      date: '2015-05-25 15:00',
      distance: 1200,
      timeTaken: 600,
    },
    {
      date: '2015-05-25 15:00',
      distance: 1400,
      timeTaken: 800,
    },
  ],
  totalDistance: function () {
    //go through all the runs and add distances together
    let result = 0;
    //this.runs is a reference to the runs in mcFaceRuns
    for (let i = 0, max = this.runs.length; i < max; i++) {
      result += this.runs[i].distance;
    }
    return result;
  },
  longestRun: function () {},
  averageSpeed: function () {},
};

module.exports = mcFaceRuns;
