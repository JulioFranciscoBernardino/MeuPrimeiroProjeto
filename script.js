function calculateTip(event){
  event.preventDefault();
  let bill = document.getElementById('bill').value;
  let servicequalite = document.getElementById('servicequalite').value;
  let numOfPeople = document.getElementById('people').value; 
  console.log(calculateTip)
  
  if(bill == '' | servicequalite == 0){
    alert('Por favor, preencha os valores')
    return;
  }

  if(numOfPeople == '' | numOfPeople <= 1){
    numOfPeople = 1
    document.getElementById('each').style.display = 'none'
  } else {
    document.getElementById('each').style.display = 'block';
  }

  let total = (bill * servicequalite) / numOfPeople;;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById('Resultado').style.display = 'block';
}  

document.getElementById('Resultado').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('tipsforms').addEventListener('submit', calculateTip);
