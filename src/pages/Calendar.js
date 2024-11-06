import React from 'react'
import { Box, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useTheme } from '@emotion/react';
import { tokens } from '../theme';
import Header from "../components/Header"

const Calendar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <>
            <Box my={2} mt={5}>

                <Header title="Calendar" subtitle="welcome, this is my calendar"/>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    events={[
                        { title: 'event 1', date: '2024-11-06' },
                        { title: 'event 2', date: '2014-04-02' }
                    ]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    select={handleDateClick}
                    eventClick={handleEventClick}
                />
            </Box>
        </>
    )
}

export default Calendar