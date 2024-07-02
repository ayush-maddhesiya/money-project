import React from 'react';

const Iframe = () => {
  return (
    <div className="economic-calendar">
      <iframe 
        src="https://widget.myfxbook.com/widget/calendar.html?lang=en&impacts=0,1,2,3,4,5,6&excludes=0,1,2,3,4,5,6&locations=Australia,Canada,China,Eurozone,New%20Zealand,South%20Africa,Spain,Switzerland,United%20Kingdom,United%20States"
        style={{ border: '0', width: '100%', height: '500px' }}
        title="Economic Calendar"
      ></iframe>
    </div>
  );
}

export default Iframe;
