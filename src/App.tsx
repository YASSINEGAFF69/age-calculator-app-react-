import './App.css';
import { useState } from 'react';
import { DateDifference } from './types/Date';
import ResultDate from './components/DateResult';
import DataForm from './components/DateForm';

function App() {
  const [dateDifference, setDateDifference] = useState<DateDifference | null>(null);

  const calculateDateDifference = (day: number, month: number, year: number): DateDifference | null => {
    const today = new Date();
    const targetDate = new Date(year, month - 1, day); 

    if (isNaN(targetDate.getTime())) {
      return null;
    }

    let years = today.getFullYear() - targetDate.getFullYear();
    let months = today.getMonth() - targetDate.getMonth();
    let days = today.getDate() - targetDate.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return { years, months, days };
  };

  const handleCalculate = (day: number, month: number, year: number) => {
    const difference = calculateDateDifference(day, month, year);
    setDateDifference(difference);
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <main className="py-10 rounded-2xl rounded-br-[100px] max-w-lg w-full mx-4 bg-slate-50 p-10 overflow-auto">
        <DataForm onSubmit={handleCalculate} />
        <ResultDate dateDifference={dateDifference} />
      </main>
    </div>
  );
}

export default App;
