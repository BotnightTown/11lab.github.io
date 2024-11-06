const cardGame = () => {
  const cards = ['always', 'never', 'rain', 'job', 'magazine', 'drugstore', 'notebook', 'wall', 'stuff', 'pan', 'headphones', 'shadow',];
  // const cards = ['always', 'never'];

  const translations = {
    'always': 'завжди',
    'never': 'ніколи',
    'rain': 'дощ',
    'job': 'робота',
    'magazine': 'журнал',
    'drugstore': 'аптека',
    'notebook': 'блокнот',
    'wall': 'стіна',
    'stuff': 'річ',
    'pan': 'сковорідка',
    'headphones': 'навушники',
    'shadow': 'тінь'
  }

  $("#totalCount").text(cards.length)
  function countRound(){
    wordsCount++;
    $('#currentCount').text(wordsCount)
  }
  function countRight(){
    rightCount++;
    $("#right-score").text(rightCount)
  }
  function countWrong(){
    wrongCount++;
    $("#wrong-score").text(wrongCount);
  }

  showCard();
  function showCard() {
    if (cards.length === 0) {
      $('#card').text("Всі слова закінчилися!");
      $('#next').prop('disabled', true);
      $('#word').prop('disabled', true);
    }
    currentWord = cards[Math.floor(Math.random() * cards.length)];
    $('#card').text(currentWord);
  }
  function getTranslation(word){
    return translations[word];
  }

  $('#next').click(checkTranslate);
  $(document).keydown(function(event){
    if (event.key === 'Enter') {
      checkTranslate();
  }})

  let wordsCount = 0;
  let rightCount = 0;
  let wrongCount = 0;

  function checkTranslate(){
  const userWord = $('#word').val().toLowerCase();
  const translation = getTranslation(currentWord);
  $('#card').css('transform', 'rotateY(90deg)')
    if(userWord === translation){
      const index = cards.indexOf(currentWord);
      cards.splice(index, 1)
      console.log("Переклад спрацював");
      countRound();
      $('#word').val('');
      countRight();
    } else {
      userWord.trim()
      if(userWord === ""){
        console.log("Пропуск слова")
      } else if(userWord){
        const index = cards.indexOf(currentWord);
        cards.splice(index, 1);
        console.log("Неправильно уведене слово");
        countRound();
        $('#word').val('');
        countWrong();
      }
    }
    setTimeout(() => {
      $('#card').css('transform', 'rotateY(0deg)')
      showCard();
    }, 700);
  }
}