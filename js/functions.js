let rowCount = 0;

  function generateJokerRow() {
    const jokerTable = document.getElementById('jokerTable');
    const newRow = document.createElement('div');
    newRow.className = 'joker-row';

    for (let i = 0; i < 7; i++) {
      const randomNumber = Math.floor(Math.random() * 10);
      const cell = document.createElement('div');
      cell.className = 'joker-cell';
      cell.textContent = randomNumber;
      newRow.appendChild(cell);
    }

    jokerTable.appendChild(newRow);

    rowCount++;
    updateRowCount();
}

  function updateRowCount() {
    document.getElementById('rowCount').textContent = `Valmiita rivejä: ${rowCount}`;
}