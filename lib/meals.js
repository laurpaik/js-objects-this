'use strict';

const User = function User(name, bornOn, calorieTarget) {
  this.name = name;
  this.bornOn = bornOn;
  this.calorieTarget = calorieTarget;
  this.meals = [];
};

const Meal = function Meal(title, date, description, calories) {
  this.title = title;
  this.date = date;
  this.description = description;
  this.calories = calories;
};

User.prototype.caloriesEatenOn = function (date) {
  //accepts date and adds all the calories on that date
  let result = 0;
  for (let i = 0; i < this.meals.length; i++) {
    if (this.meals[i].date === date) {
      result += this.meals[i].calories;
    }
  }

  return result;
};

User.prototype.avgDailyCalories = function () {
  //calculates average number of calories per day
  //round to nearest whole calorie
  let totalCals = 0;
  for (let i = 0; i < this.meals.length; i++) {
    totalCals += this.meals[i].calories;
  }

  let uniqueDays = [];
  for (let j = 0; j < this.meals.length; j++) {
    if (uniqueDays.indexOf(this.meals[j].date) === -1) {
      uniqueDays.push(this.meals[j].date);
    }
  }
  let dayCount = uniqueDays.length;
  return (totalCals / dayCount) - ((totalCals%dayCount)/dayCount);
};

User.prototype.onTrack = function () {
  //compares avgDailyCalories to User's target daily calorie intake
  //return true ifavg caloric intake is at or below target
  //false if not
  let isOnTrack = false;
  if (this.avgDailyCalories() <= this.calorieTarget) {
    isOnTrack = true;
  }
  return isOnTrack;
};

const mealObj = new User('Lauren', 23, 2000);
mealObj.meals.push(new Meal('Breakfast', '2017-01-14', 'eggs and fish', 500));
mealObj.meals.push(new Meal('Lunch', '2017-01-14', 'fried rice', 500));
mealObj.meals.push(new Meal('Dinner', '2017-01-14', 'pizza', 300));
mealObj.meals.push(new Meal('Breakfast', '2017-01-11', 'fruit smoothie', 350));
mealObj.meals.push(new Meal('Lunch', '2017-01-11', 'sandwich', 500));
mealObj.meals.push(new Meal('Dinner', '2017-01-11', 'steak', 600));

module.exports = mealObj;
