// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {
    if (athlete == NM372) { 
      return data.response.data.NM372;
    } else if (athlete == SV782) {
      return data.response.data.SV782;
    }
  
  
    const fragment = document.createDocumentFragment();
  
    title = document.createElement(h2);
    title= id.createElement(h2);
    fragment.appendChild(title);
  
    const list = document.createElement(dl);
    const day = dayOfRace(athlete, prop)
    const dayOfRace = () => {
    if (athlete == NM372 && prop == data.response.data.NM372[3][0]) { 
      return data.response.data.NM372[3][0][0];
    } else if (athlete == NM372 && prop == data.response.data.NM372[3][1]) {
      return data.response.data.NM372[3][1][0];
    } else if (athlete == SV782 && prop == data.response.data.SV782[3][0]) {
        return data.response.data.SV782[3][0][0];
    } else if (athlete == SV782 && prop == data.response.data.SV782[3][1]) {
      return data.response.data.SV782[3][1][0];
    }  else if (athlete == SV782 && prop == data.response.data.SV782[3][2]) {
      return data.response.data.SV782[3][2][0];
  } else if (athlete == SV782 && prop == data.response.data.SV782[3][3]) {
    return data.response.data.SV782[3][3][0]; } 
  }
  

    const month = ;
    const year = 2022;
  
    first, second, third, fourth = timeAsArray;
    total = first + second + third + fourth;
  
    const hours = data.response.data.NM372 / 60;
    const minutes = total / hours / 60;
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day month year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0) minutes}</dd>
    `;
  
    fragment.appendChild(list);
  }
  
  [NM372], [SV782] = data
  document.querySelector(NM372).appendChild(createHtml(NM372));
  document.querySelector(SV782).appendChild(createHtml(SV782));