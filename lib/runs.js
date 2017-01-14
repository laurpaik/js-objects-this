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

    for (let i = 0, max = this.runs.length; i < max; i++) { //three statements, four expressions
      result += this.runs[i].distance;
    }

    return result;
  },

  totalTime: function () {

    //go through all the runs and add times together

    let result = 0;

    //this.runs is a reference to the runs in mcFaceRuns

    for (let i = 0, max = this.runs.length; i < max; i++) { //three statements, four expressions
      result += this.runs[i].timeTaken;
    }

    return result;
  },

  longestRun: function () {
    //find the longest distance by looking at each run in runs
    let result = 0;

    let max = this.runs.length;
    for (let i = 0; i < max; i++) {
      let current = this.runs[i].distance;

      if (result < current) {
        result = current;
      }
    }

    return result;
  },

  averageSpeed: function () {
    //calculate speed from the available data: distance and timeTaken
    //then average the speed
    //add individual speed, divide by total number of runs

    return this.totalDistance() / this.totalTime();
  },
};

module.exports = mcFaceRuns;
