const Database = require('better-sqlite3');

const db = new Database('./database.db', {
  verbose: console.log
});

const tables = db.prepare(`
    SELECT name FROM sqlite_master
    WHERE type = 'table'
    `).all()

console.log('\n=== ТАБЛИЦЫ В БАЗЕ ДАННЫХ ===');
console.log(`Найдено таблиц: ${tables.length}`);

tables.forEach((table, index) => {
  console.log(`${index + 1}. ${table.name}`);
});

console.log(` Всего таблиц: ${tables.length}`);

// 2. Для каждой таблицы показываем структуру и данные
tables.forEach((table, index) => {
  console.log(`\n${index + 1}. ТАБЛИЦА: ${table.name}`);
  
  // Получаем информацию о колонках
  try {

    const columns = db.prepare(`PRAGMA table_info('${table.name}')`).all();
    console.log('   Структура:');
    columns.forEach(col => {
      console.log(`     - ${col.name} (${col.type}) ${col.pk ? 'PRIMARY KEY' : ''}`);
    });
    
    const data = db.prepare(`SELECT * FROM '${table.name}'`).all();
    if (data.length > 0) {
      console.log('   Первые записи:');
      data.forEach(row => {
        console.log('     ', row);
      });
      
      const count = db.prepare(`SELECT COUNT(*) as total FROM '${table.name}'`).get();
      console.log(`   Всего записей: ${count.total}`);
    } else {
      console.log('   (таблица пустая)');
    }
    
  } catch (error) {
    console.log('   (ошибка чтения таблицы):', error.message);
  }
});

// Авторизация пользователя
const user = db.prepare(`SELECT * FROM 'User' WHERE login = ? AND password = ?`)
  .get(username, password);

// Получить игры пользователя
const userGames = db.prepare(`
  SELECT * FROM 'game' 
  WHERE id_user = ? 
  ORDER BY cost DESC
`).all(userId);

// Добавить новую игру
const result = db.prepare(`
  INSERT INTO 'game' (id_user, name, cost, picture) 
  VALUES (?, ?, ?, ?)
`).run(userId, gameName, price, imageUrl);

db.close();