import { Box, Title } from '@mantine/core';
import '@mantine/core/styles.css';
import { Calendar } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import './App.css';
import "./calendar.css";
import DayEvent from './components/DayEvent';
import Header from './components/Header';

type Event = {
  id?: string;
  date: Date;
  title: string;
}

type AppProps = {
  events: Array<Event>;
  onEventClick: (event: Event) => void;
};

function App(props: AppProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <Box>
      <Header
        title={dayjs(currentDate).format('MMMM YYYY')}
        onPreviousClick={() => setCurrentDate(dayjs(currentDate).subtract(1, 'month').toDate())}
        onNextClick={() => setCurrentDate(dayjs(currentDate).add(1, 'month').toDate())}
        onTodayClick={() => setCurrentDate(new Date())}
      />
      <Calendar
        static
        maxLevel='month'
        weekdayFormat='ddd'
        date={currentDate}
        renderDay={(date) => {
          const day = date.getDate();
          const event = props.events.find((event) => dayjs(event.date).isSame(date, 'day'));
          return (
            <>
              <Title order={5} className='day-number'>{day}</Title>
              {event &&
                <DayEvent onClick={() => props.onEventClick?.(event)} title={event?.title} />
              }
            </>
          );
        }}
      />
    </Box>
  );
}

export default App
