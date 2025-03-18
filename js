const inputEl = document.getElementById('example')
        const btnEl = document.querySelector('.todo-list_btn')
        const fieldEl = document.querySelector('.todo-list_field')
        
        let todoList = [
            {
                id: 1,
                text: 'Some text',
                isDone: false
            },
            {
                id: 2,
                text: 'Somasdas text',
                isDone: true
            }
        ]

        let id = 3

        function render() {
            fieldEl.innerHTML = ''
            for (let item of todoList) {
                const el = createHtmlElement(item)
                fieldEl.appendChild(el)
            }
        }

        function createHtmlElement(item) {
            const divEl = document.createElement('div')
            divEl.classList.add('todo-list__item')
            
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            if (item.isDone) {
                checkbox.checked = true
            }

            const text = document.createElement('p')
            text.classList.add('todo-list__item-text')
            text.innerText = item.text

            const img = document.createElement('img')
            img.src = '/img/vector.png'
            img.addEventListener('click', () => {
                todoList = todoList.filter(el => el.id!== item.id)
                render()
            });
            divEl.appendChild(checkbox)
            divEl.appendChild(text)
            divEl.appendChild(img)

            checkbox.addEventListener('change', () => {
                item.isDone =!item.isDone
                render()
            });
            return divEl
        }

        function onBtnClick() {
            if (inputEl.value) {
                const obj = {
                    id: id++,
                    text: inputEl.value,
                    isDone: false
                };
                todoList.push(obj)
                inputEl.value = ''
                render()
            }
        }

        btnEl.addEventListener('click', onBtnClick)
        render()
