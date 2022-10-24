import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CatchDate = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="flex justify-between">
            <div>
                <p className="text-md font-medium text-gray-400">From</p>
            <DatePicker className="bg-gray-100 p-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <div>
                <p className="text-md font-medium text-gray-400">To</p>
            <DatePicker className="bg-gray-100 p-2 rounded-lg" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            
        </div>
    );
};

export default CatchDate;