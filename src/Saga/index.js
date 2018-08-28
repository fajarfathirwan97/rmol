/**
 * @providesModule localSaga
 */

import APIService from '../CustomLib/APIService'
import { takeLatest } from "redux-saga";
import { HomeTypes } from "../Reducer/Home";
import { homeRequest } from './Home';
const api = APIService.create()

export default function* root() {
  try {
    yield takeLatest(HomeTypes.HOME_REQUEST, homeRequest, api)
  } catch (error) {
    console.log(error)
  }
}
