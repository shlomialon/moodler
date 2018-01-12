
// bundle in some libs

require("../../dist/css/libs/jquery-3.2.0.min.js");

import {app} from 'hyperapp';
import actions from './actions/index';
import state from './state/index';
import view from './components/main';

app(
  state,
  actions,
  view,
  document.body,
);



