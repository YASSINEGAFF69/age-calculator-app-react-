import { useState } from "react";

interface DateFormProps {
    onSubmit: (day: number, month: number, year: number) => void;
}

export default function DataForm({ onSubmit }: DateFormProps) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const dayNum = parseInt(day, 10);
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10);

        if (isNaN(dayNum) || isNaN(monthNum) || isNaN(yearNum)) return;
        onSubmit(dayNum, monthNum, yearNum);

        setDay("");
        setMonth("");
        setYear("");
    }

    return (
        <form className="text-gray-500 max-w-full flex flex-col space-y-4 gap-2 " onSubmit={handleSubmit}>
          <div className="flex space-x-9">
            <div className="flex flex-col">
              <label className="mb-1">Day</label>
              <input
                value={day}
                onChange={(e) => setDay(e.target.value)}
                type="number"
                placeholder="DD"
                className="rounded-md max-w-[90px] border border-gray-400 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Month</label>
              <input
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                type="number"
                placeholder="MM"
                className="rounded-md max-w-[90px] border border-gray-400 p-2"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-1">Year</label>
              <input
                value={year}
                onChange={(e) => setYear(e.target.value)}
                type="number"
                placeholder="YY"
                className="rounded-md max-w-[90px] border border-gray-400 p-2"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <hr className="flex-1 border-gray-400"/>
            <button type="submit" className="rounded-full bg-purple-600 w-14 h-14 text-white hover:bg-purple-500 flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 46 44">
                <g fill="none" stroke="#FFF" strokeWidth="2">
                  <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
                </g>
              </svg>
            </button>
          </div>
        </form>

    );
}