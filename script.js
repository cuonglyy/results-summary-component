const scoreNum = document.querySelector('.score-number');
const itemIcon = document.querySelectorAll('.item__icon');
const itemName = document.querySelectorAll('.item__name');
const itemScoreNum = document.querySelectorAll('.item__score-num');

let totalScore = 0;
const maxScore = 400;

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
            const img = new Image();
            img.src = item.icon
            itemIcon[i].appendChild(img);
            itemName[i].textContent = item.category;
            itemScoreNum[i].textContent = item.score;

            totalScore += item.score;
        })
        totalScore = Math.floor((totalScore / maxScore) * 100);
        //console.log(totalScore);
        scoreNum.textContent = totalScore;
    })
    .catch(error => console.log(error));
