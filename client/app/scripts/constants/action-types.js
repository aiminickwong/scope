import _ from 'lodash';

const ACTION_TYPES = [
  'CHANGE_TOPOLOGY_OPTION',
  'CLEAR_CONTROL_ERROR',
  'CLICK_BACKGROUND',
  'CLICK_CLOSE_DETAILS',
  'CLICK_CLOSE_TERMINAL',
  'CLICK_FORCE_RELAYOUT',
  'CLICK_NODE',
  'CLICK_PAUSE_UPDATE',
  'CLICK_RELATIVE',
  'CLICK_RESUME_UPDATE',
  'CLICK_SHOW_TOPOLOGY_FOR_NODE',
  'CLICK_TERMINAL',
  'CLICK_TOPOLOGY',
  'CLOSE_WEBSOCKET',
  'DESELECT_NODE',
  'DO_CONTROL',
  'DO_CONTROL_ERROR',
  'DO_CONTROL_SUCCESS',
  'ENTER_EDGE',
  'ENTER_NODE',
  'LEAVE_EDGE',
  'LEAVE_NODE',
  'LOCK_METRIC',
  'UNLOCK_METRIC',
  'OPEN_WEBSOCKET',
  'RECEIVE_CONTROL_PIPE',
  'RECEIVE_CONTROL_PIPE_STATUS',
  'RECEIVE_NODE_DETAILS',
  'RECEIVE_NODES',
  'RECEIVE_NODES_DELTA',
  'RECEIVE_NOT_FOUND',
  'RECEIVE_TOPOLOGIES',
  'RECEIVE_API_DETAILS',
  'RECEIVE_ERROR',
  'ROUTE_TOPOLOGY',
  'SELECT_METRIC'
];

export default _.zipObject(ACTION_TYPES, ACTION_TYPES);
