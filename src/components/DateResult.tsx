// ResultDate.tsx
import React from 'react';
import { DateDifference } from '../types/Date';



interface ResultDateProps {
  dateDifference: DateDifference | null;
}

const ResultDate: React.FC<ResultDateProps> = ({ dateDifference,  }) => {
    if (dateDifference === null) {
        return (
          <p className="text-6xl font-bold text-slate-950 max-w-90  flex flex-col items-start">
            <div><span className='text-purple-600'>--</span> years</div>
          <div><span className='text-purple-600'>--</span> months</div>
          <div><span className='text-purple-600'>--</span> days</div>
          </p>
        );
      }
    
      if (dateDifference.years < 0 || dateDifference.months < 0 || dateDifference.days < 0) {
        return <p>Invalid date. Please enter a valid date.</p>;
      }
    
      return (
        <p className="text-6xl font-bold text-slate-950 max-w-90  flex flex-col items-start">
          <div><span className='text-purple-600'>{dateDifference.years}</span> years</div>
          <div><span className='text-purple-600'>{dateDifference.months}</span> months</div>
          <div><span className='text-purple-600'>{dateDifference.days}</span> days</div>
        </p>
      );
};

export default ResultDate;
