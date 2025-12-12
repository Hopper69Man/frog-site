let mailBox = document.getElementById("inputMail");
let passwordBox = document.getElementById("inputPassword");

mailBox.addEventListener('input', ()=>{
    console.log(mailBox.value)
})

console.log(passwordBox.value);
passwordBox.addEventListener('input', ()=>{
    console.log(passwordBox.value)
});




if (document.getElementById("doLoginButton")){

    //ДЛЯ АВТОРИЗАЦИИ

    let doLogin = document.getElementById("doLoginButton");

    doLogin.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = mailBox.value.trim();
        const password = passwordBox.value;
        
        // Валидация
        if (!email || !password) {
            alert('Заполните все поля!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Введите корректный email!');
            return;
        }

        doLogin.textContent = 'Вход...';
        doLogin.disabled = true;
        


        // Отправляем запрос к серверу

        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Сохраняем пользователя
                localStorage.setItem('user', JSON.stringify(data.user));
                alert(`Добро пожаловать, ${data.user.login}!`);
                
                // Переходим на главную
                window.location.href = './index.html';
            } else {
                alert(data.error || 'Ошибка входа');
                // Возвращаем кнопку
                doLogin.textContent = 'Вход';
                doLogin.disabled = false;
            }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Сервер не отвечает');
        doLogin.textContent = 'Вход';
        doLogin.disabled = false;
    });

    });}


if (document.getElementById("doRegButton")){
    // ДЛЯ РЕГИСТРАЦИИ

    let checkPassword = document.getElementById("checkPassword");

    console.log(checkPassword.value);
    checkPassword.addEventListener('input', ()=>{
        console.log(checkPassword.value)
    });


    let doRegister = document.getElementById("doRegButton");

    doRegister.addEventListener('click',  (e) => {
        e.preventDefault();

        const email = mailBox.value.trim();
        const password = passwordBox.value;
        const check_Password = checkPassword.value;
        
        // Валидация
        if (!email || !password) {
            alert('Заполните все поля!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Введите корректный email!');
            return;
        }
        if (password != check_Password){
            alert('Пароли не совпадают!!');
            return;
        }

        doRegister.textContent = 'Регистрация...';
        doRegister.disabled = true;
        

        // ⬇⬇⬇ ДОБАВЬ ЭТО ⬇⬇⬇
        fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: email,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Регистрация успешна! Теперь войдите.');
                window.location.href = './login.html';
            } else {
                alert(data.error || 'Ошибка регистрации');
                doRegister.textContent = 'Зарегистрироваться';
                doRegister.disabled = false;
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
            alert('Сервер не отвечает');
            doRegister.textContent = 'Зарегистрироваться';
            doRegister.disabled = false;
        });

    });}