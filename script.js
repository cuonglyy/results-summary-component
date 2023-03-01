const scoreNum = document.querySelector('.score-number');
const itemIcon = document.querySelectorAll('.item__icon');
const itemName = document.querySelectorAll('.item__name');
const itemScoreNum = document.querySelectorAll('.item__score-num');

fetch('./data.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('HTTP Error status' + response.status);
        }
        return response.json();
    })
    .then(data => {
        //console.log(data);
        data.forEach( (item, i) => {
            itemName[i].textContent = item.category;
        })
    })
