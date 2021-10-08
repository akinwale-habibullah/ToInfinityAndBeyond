import { combineReducers } from "redux";
import jobs from './jobs';
import jobRoles from './jobroles';
import skills from './skills';
import markets from './markets';
import currencies from './currencies';

export default combineReducers({
  jobs,
  jobRoles,
  skills,
  markets,
  currencies
});
