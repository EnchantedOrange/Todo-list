document.querySelector('.add-button').addEventListener('click', function() {
    const text = document.querySelector('.input').value;
    if (text !== '') {
        const item = document.createElement('li');
        item.innerHTML =
            `<input type="checkbox" class="check-item">
            <p>${text}</p>
            <button class="delete-item">&#9932;</button>`;
        item.querySelector('.check-item').addEventListener('click', function() {
            event.currentTarget.nextElementSibling.classList.toggle('striked');
        });
        item.querySelector('.delete-item').addEventListener('click', function() {
            document.querySelector('.todolist').removeChild(item);
        });
        document.querySelector('.todolist').appendChild(item);
        document.querySelector('.input').value = '';
    }
});