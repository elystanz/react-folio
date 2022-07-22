import { React } from 'react';
import Horiseon from '../assets/horiseonGif.gif';
import Budget from '../assets/budgetTrackerGif.gif';
import workDay from '../assets/workDayGif.gif';
import passGen from '../assets/passwordGen.gif';
import Inspo from '../assets/inspo-co.png';


function Main() {
  return (
    <section >
            <img className="inspo-co column" src={ Inspo } alt="Inspo.co logo" href="https://inspo-co.herokuapp.com/"/>

<div className="portfolio row">
      <img className="horiseon column" src={ Horiseon } alt="Horiseon web application in use"/>
      <img className="budget-tracker column" src={ Budget } alt="Budget Tracker web application in use"/>
      <img className="work-day column" src={ workDay } alt="Work Day Scheduler web application in use"/>
      <img className="password-gen column" src={ passGen } alt="Password Generator web application in use"/>
      </div>

    </section>
  );
}
export default Main;
