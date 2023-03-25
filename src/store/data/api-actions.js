import { APIRoutePath } from '../../const';
import {
  getServers,
} from './actions';

export const fetchData = () => (dispatch, _getState, api) =>
  api.get(APIRoutePath.SERVERS).then(({ data }) => dispatch(getServers(data)));