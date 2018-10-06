import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer



const myEventsList = [];
/*
  TODO:
  myEventsList is a array of Event objects.
  Add some example events given the following template:
      Event {
    title: string,
    start: Date,
    end: Date,
    allDay?: boolean
    resource?: any,
    }
  */
var calStyle = {
  width: '100%',
  height: '100%'
};

const MyCalendar = props => (
  <div style={calStyle}>
    <BigCalendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
    />
  </div>
)

export default MyCalendar;
