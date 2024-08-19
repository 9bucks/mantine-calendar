import { Box, MantineProvider, Text, Title } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import '@mantine/dates/styles.css';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
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
  events?: Array<Event>;
  onEventClick?: (event: Event) => void;
  onMonthChange?: (month: Date) => void;
};

function App(props: AppProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const today = new Date();

  useEffect(() => {
    props.onMonthChange?.(currentDate);
  }, [currentDate]);

  return (
    <MantineProvider>
      <Box p="lg">
        <Header
          title={dayjs(currentDate).format('MMMM YYYY')}
          onPreviousClick={() => setCurrentDate(dayjs(currentDate).subtract(1, 'month').set('date', 1).toDate())}
          onNextClick={() => setCurrentDate(dayjs(currentDate).add(1, 'month').set('date', 1).toDate())}
          onTodayClick={() => setCurrentDate(new Date())}
        />
        <Calendar
          static
          maxLevel='month'
          weekdayFormat='ddd'
          date={currentDate}
          renderDay={(date) => {
            const day = date.getDate();
            const event = props.events?.find((event) => dayjs(event.date).isSame(date, 'day'));
            return (
              <>
                <div className='day-number-row'>
                  <Title className='day-number' order={5}>{day}</Title>
                  {dayjs(date).isSame(today, 'day') && (
                    <Text className='today-marker'>Today</Text>
                  )}
                </div>

                {event &&
                  <DayEvent onClick={() => props.onEventClick?.(event)} title={event?.title} />
                }
              </>
            );
          }}
        />
      </Box>
    </MantineProvider>
  );
}

export default App;
