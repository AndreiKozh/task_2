'use strict';


const images = document.querySelectorAll('img'),
      divDateCounter = document.querySelector('.counter'),
      date = new Date(),
      p = document.createElement('p');

function formatDate() {

        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
      
        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
      
        let yy = date.getFullYear();
      
        return dd + '.' + mm + '.' + yy;

}

p.innerHTML = `На сегодня: ${formatDate(date)}, на странице находится ${images.length} изображений`;
divDateCounter.append(p);

