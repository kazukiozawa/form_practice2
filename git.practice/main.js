document.querySelector('#form').onsubmit = function(event){
    event.preventDefault();
    let result = document.querySelector('#form').word.value;
    document.querySelector('#texts').textContent = `${result}の検索中...`
};