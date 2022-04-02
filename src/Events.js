/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let but = document.createElement('button');
    but.innerHTML = 'Удали меня';

    but.addEventListener('click', () => but.remove());
    const body = document.getElementsByTagName('body')[0];

    body.append(but);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.addEventListener('mouseover', () => {
            li.title = arr[i];
        });
        li.innerHTML = arr[i];
        ul.append(li);
    }

    let body = document.getElementsByTagName('body')[0];
    body.append(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let cl = 0;
    let a = document.createElement('a');
    a.innerHTML = 'tensor';
    a.href = 'https://tensor.ru/';

    a.addEventListener('click', (e) => {
        if (cl === 0) {
            e.preventDefault();
            a.innerHTML += ' ' + a.href;

            cl++;
        }
    });

    let body = document.getElementsByTagName('body')[0];

    body.append(a);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let but = document.createElement('button');
    let body = document.getElementsByTagName('body')[0];

    li.innerHTML = 'Пункт';
    but.innerHTML = 'Добавить пункт';

    but.addEventListener('click', () => {
        let li_t = document.createElement('li');
        li_t.innerHTML = 'Пункт';
        li_t.addEventListener('click', () => {
            li_t.innerHTML += '!';
        });
        ul.append(li_t);
    });
    li.addEventListener('click', () => {
        li.innerHTML += '!';
    });

    ul.append(li);
    body.append(ul);
    body.append(but);
}
