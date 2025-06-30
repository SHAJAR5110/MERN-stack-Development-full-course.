
        // Access element
        const title = document.getElementById('main-title');
        title.classList.add('highlight');

        // Insert element
        function insertElement() {
            const ul = document.getElementById('item-list');
            const li = document.createElement('li');
            li.textContent = 'New Item';
            ul.appendChild(li);
        }

        // Update element
        function updateElement() {
            const ul = document.getElementById('item-list');
            if (ul.children.length > 0) {
                ul.children[0].textContent = 'Updated Item 1';
            }
        }

        // Delete element
        function deleteElement() {
            const ul = document.getElementById('item-list');
            if (ul.children.length > 0) {
                ul.removeChild(ul.lastElementChild);
            }
        }
