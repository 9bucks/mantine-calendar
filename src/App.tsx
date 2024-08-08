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

const events = [
  {
    date: dayjs("2024-07-29"),
    title: "Happy Birthday!",
  },
  {
    date: dayjs("2024-07-21"),
    title: "New Year!",
  }
]

function App() {
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
        // hideOutsideDates
        maxLevel='month'
        weekdayFormat='ddd'
        date={currentDate}
        renderDay={(date) => {
          const day = date.getDate();
          const event = events.find((event) => event.date.isSame(date, 'day'));
          return (
            <>
              <Title order={5} className='day-number'>{day}</Title>
              <DayEvent title={event?.title} />
            </>
          );
        }}
      />
      {/* <Footer /> */}
    </Box>
  );
}

export default App
