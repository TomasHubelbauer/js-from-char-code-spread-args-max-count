window.addEventListener('load', () => {
  document.getElementById('testButton').addEventListener('click', test);
  document.getElementById('countInput').addEventListener('keydown', event => {
    if (event.key === 'Enter') {
      test();
    }
  });
});

function test() {
  const count = document.getElementById('countInput').valueAsNumber;
  const payload = 'A'.repeat(count);
  const bytes = [...payload].map(c => c.charCodeAt(0));
  const resultP = document.createElement('p');
  try {
    const check = String.fromCharCode(...bytes);
    if (payload === check) {
      resultP.textContent = count + ' OK';
    } else {
      resultP.textContent = count + ' NOK - false';
    }
  } catch (error) {
    resultP.textContent = count + ' NOK - error';
  }

  document.getElementById('testButton').insertAdjacentElement('afterend', resultP);
}
