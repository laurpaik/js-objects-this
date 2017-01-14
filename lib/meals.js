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

User.prototype.caloriesEatenOn = function () {
  //accepts date and adds all the calories on that date
  let meals = this.meals;
  let date = this.date;
  let result = 0;
  for (let i = 0; i < date.length; i++) {
    result += meals[i].calories;
  }

  return result;
};

User.prototype.avgDailyCalories = function () {
  //calculates average number of calories per day
  //round to nearest whole calorie
  let meals = this.meals;
  let totalCals = 0;
  for (let i = 0; i < meals.length; i++) {
    totalCals += meals[i].calories;
  }

  return (this.totalCals / this.date.length) - (this.totalCals % this.date.length);
};

User.prototype.onTrack = function () {
  //compares avgDailyCalories to User's target daily calorie intake
  //return true ifavg caloric intake is at or below target
  //false if not
  let target = this.calorieTarget;
  let meals = this.meals;
  let difference = 0;
  for (let i = 0; i < meals.length; i++) {
    difference = this.avgDailyCalories[i] - target;
  }

  if (difference <= 0) {
    return true;
  } else {
    return false;
  }
};

const mealObj = new User('Girl Scout', '2001-12-28', '300');
mealObj.meals.push(new Meal('Samoas', '2017-01-14', 'the best cookie', 130));
mealObj.meals.push(new Meal('Brussel Sprouts', '2017-01-14', 'the best veggie', 100));
module.exports = mealObj;
