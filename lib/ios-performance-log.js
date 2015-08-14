import logger from './logger';

// Date-Utils: Polyfills for the Date object
require('date-utils');

const MAX_EVENTS = 5000;

class IOSPerformanceLog {
  constructor (remoteDebugger) {
    this.remoteDebugger = remoteDebugger;

    this.timelineEvents = [];
  }

  async startCapture () {
    logger.debug('Starting to capture Timeline logs');
    this.timelineEvents = [];
    return this.remoteDebugger.startTimeline(this.onTimelineEvent.bind(this));
  }

  async stopCapture () {
    return this.remoteDebugger.stopTimeline();
  }

  onTimelineEvent (event) {
    this.timelineEvents.push(event);

    // if we have too many, get rid of the oldest log line
    if (this.timelineEvents.length > MAX_EVENTS) {
      this.timelineEvents.shift();
    }
  }

  getLogs () {
    let events = this.timelineEvents;

    // flush events
    logger.debug('Flushing Timeline events');
    this.timelineEvents = [];

    return events;
  }
}

export default IOSPerformanceLog;
