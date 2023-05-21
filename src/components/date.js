

export const getCreatedDate = (dateNow) => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    let day = days[dateNow.getDay()];
    let date = dateNow.getDate();
    let month = months[dateNow.getMonth()];
    let year = dateNow.getFullYear();

    
  
    return `${date} ${month} ${year}`;
  }


  export const addTodayClass = (date) => {
    const weekdays = document.querySelectorAll('.weekday');
    weekdays.forEach((weekday) => {
      if (weekday.innerText === date.toLocaleDateString('en-US', { weekday: 'long' })) {
        weekday.classList.add('today');
      }
    });
  }