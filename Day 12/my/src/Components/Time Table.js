import React from 'react';

const TimeTable = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>TIME TABLE</h1>
      <table
        border="1"
        cellPadding="10"
        cellSpacing="0"
        style={{ margin: 'auto', borderCollapse: 'collapse', textAlign: 'center' }}
      >
        <thead>
          <tr>
            <th>Day/Period</th>
            <th>I<br />9:30-10:20</th>
            <th>II<br />10:20-11:10</th>
            <th>III<br />11:10-12:00</th>
            <th>12:00-12:40</th>
            <th>IV<br />12:40-1:30</th>
            <th>V<br />1:30-2:20</th>
            <th>VI<br />2:20-3:10</th>
            <th>VII<br />3:10-4:00</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="highlight"><b>Monday</b></td>
            <td>Eng</td>
            <td>Mat</td>
            <td>Che</td>
            <td rowSpan="6" className="special"><b>LUNCH</b></td>
            <td colSpan="3" className="special">LAB</td>
            <td>Phy</td>
          </tr>
          <tr>
            <td className="highlight"><b>Tuesday</b></td>
            <td colSpan="3" className="special">LAB</td>
            <td>Eng</td>
            <td>Che</td>
            <td>Mat</td>
            <td className="special">SPORTS</td>
          </tr>
          <tr>
            <td className="highlight"><b>Wednesday</b></td>
            <td>Mat</td>
            <td>Phy</td>
            <td>Eng</td>
            <td>Che</td>
            <td colSpan="3">LIBRARY</td>
          </tr>
          <tr>
            <td className="highlight"><b>Thursday</b></td>
            <td>Phy</td>
            <td>Eng</td>
            <td>Che</td>
            <td colSpan="3" className="special">LAB</td>
            <td>Mat</td>
          </tr>
          <tr>
            <td className="highlight"><b>Friday</b></td>
            <td colSpan="3" className="special">LAB</td>
            <td>Mat</td>
            <td>Che</td>
            <td>Eng</td>
            <td>Phy</td>
          </tr>
          <tr>
            <td className="highlight"><b>Saturday</b></td>
            <td>Eng</td>
            <td>Che</td>
            <td>Mat</td>
            <td colSpan="3">SEMINAR</td>
            <td className="special">SPORTS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeTable;