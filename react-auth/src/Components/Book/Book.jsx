import React from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import dayjs from 'dayjs';

const Book = () => {
    const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DD'));
    const handleDate = (e) => {
        const selectedDate = dayjs(e.$d).format('YYYY-MM-DD');
        setDate(selectedDate);
    }

    console.log(date);

    return (
        <div>
            <h1>{date}</h1>
            <DatePicker
            onChange={handleDate}
            />
        </div>
    );
};

export default Book;