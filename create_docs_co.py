import os
import glob
from datetime import datetime
from pathlib import Path

def collect_website_code(output_file='frog-site-documentation.md'):
    """
    Собирает весь код сайта Frog Site в один MD файл
    """
    
    # Определяем корневую директорию проекта
    project_root = os.path.dirname(os.path.abspath(__file__))
    
    # Собираем все файлы по типам
    files = {
        'HTML': sorted(glob.glob('*.html')),
        'CSS': sorted(glob.glob('css/*.css')),
        'JavaScript': sorted(glob.glob('js/*.js')),
        'Server': []
    }
    
    # Добавляем server.js если он существует
    server_js_path = './server.js'
    if os.path.exists(server_js_path):
        files['Server'] = [server_js_path]
    
    # Добавляем database.db если нужно (как дополнительный файл)
    db_file = './database.db'
    has_db = os.path.exists(db_file)
    
    # Убираем выходной файл из списка, если он уже существует
    for file_type in files:
        files[file_type] = [f for f in files[file_type] if f != output_file]
    
    # Статистика файлов
    file_stats = {}
    
    with open(output_file, 'w', encoding='utf-8') as md:
        # Заголовок документа
        md.write("# 🐸 Frog Site - Полная документация проекта\n\n")
        md.write(f"*Документация создана: {datetime.now().strftime('%d.%m.%Y %H:%M:%S')}*\n")
        md.write(f"*Путь к проекту: `{project_root}`*\n\n")
        
        md.write("## 📋 Оглавление\n")
        
        section_number = 1
        sections = []
        
        # HTML файлы
        if files['HTML']:
            sections.append(('html-файлы', 'HTML файлы'))
            md.write(f"{section_number}. [HTML файлы](#html-файлы)\n")
            section_number += 1
        
        # CSS файлы
        if files['CSS']:
            sections.append(('css-файлы', 'CSS файлы'))
            md.write(f"{section_number}. [CSS файлы](#css-файлы)\n")
            section_number += 1
        
        # JavaScript файлы
        if files['JavaScript']:
            sections.append(('javascript-файлы', 'JavaScript файлы'))
            md.write(f"{section_number}. [JavaScript файлы](#javascript-файлы)\n")
            section_number += 1
        
        # Server файлы
        if files['Server']:
            sections.append(('server-файлы', 'Server файлы'))
            md.write(f"{section_number}. [Server файлы](#server-файлы)\n")
            section_number += 1
        
        if has_db:
            sections.append(('база-данных', 'База данных'))
            md.write(f"{section_number}. [База данных](#база-данных)\n")
            section_number += 1
        
        sections.append(('структура-проекта', 'Структура проекта'))
        md.write(f"{section_number}. [Структура проекта](#структура-проекта)\n")
        
        sections.append(('статистика', 'Статистика'))
        md.write(f"{section_number+1}. [Статистика](#статистика)\n")
        
        md.write("\n---\n\n")
        
        # ========== HTML ФАЙЛЫ ==========
        if files['HTML']:
            md.write("## 📄 HTML файлы\n\n")
            
            for idx, html_file in enumerate(files['HTML'], 1):
                filename = os.path.basename(html_file)
                filepath = html_file
                
                md.write(f"### {idx}. `{filename}`\n")
                md.write(f"**Расположение:** `{filepath}`\n\n")
                
                # Определяем назначение файла по имени
                descriptions = {
                    'index.html': 'Главная страница сайта',
                    'shop.html': 'Страница магазина с товарами',
                    'basket.html': 'Страница корзины покупок',
                    'login.html': 'Страница входа в аккаунт',
                    'register.html': 'Страница регистрации нового пользователя',
                    '404.html': 'Страница ошибки 404 (не найдено)'
                }
                
                if filename in descriptions:
                    md.write(f"**Назначение:** {descriptions[filename]}\n\n")
                
                try:
                    for encoding in ['utf-8', 'cp1251', 'iso-8859-1']:
                        try:
                            with open(html_file, 'r', encoding=encoding) as f:
                                content = f.read()
                            
                            # Сохраняем статистику
                            file_stats[filename] = {
                                'type': 'HTML',
                                'size': len(content),
                                'lines': content.count('\n') + 1
                            }
                            
                            md.write("```html\n")
                            md.write(content)
                            if not content.endswith('\n'):
                                md.write("\n")
                            md.write("```\n\n")
                            break
                        except UnicodeDecodeError:
                            continue
                except Exception as e:
                    md.write(f"```\nОшибка при чтении файла: {str(e)}\n```\n\n")
                
                md.write("---\n\n")
        
        # ========== CSS ФАЙЛЫ ==========
        if files['CSS']:
            md.write("## 🎨 CSS файлы\n\n")
            
            for idx, css_file in enumerate(files['CSS'], 1):
                filename = os.path.basename(css_file)
                filepath = css_file
                
                md.write(f"### {idx}. `{filename}`\n")
                md.write(f"**Расположение:** `{filepath}`\n\n")
                
                # Описание CSS файлов
                descriptions = {
                    'style.css': 'Основные стили всего сайта'
                }
                
                if filename in descriptions:
                    md.write(f"**Назначение:** {descriptions[filename]}\n\n")
                
                try:
                    for encoding in ['utf-8', 'cp1251', 'iso-8859-1']:
                        try:
                            with open(css_file, 'r', encoding=encoding) as f:
                                content = f.read()
                            
                            # Сохраняем статистику
                            file_stats[filename] = {
                                'type': 'CSS',
                                'size': len(content),
                                'lines': content.count('\n') + 1
                            }
                            
                            md.write("```css\n")
                            md.write(content)
                            if not content.endswith('\n'):
                                md.write("\n")
                            md.write("```\n\n")
                            break
                        except UnicodeDecodeError:
                            continue
                except Exception as e:
                    md.write(f"```\nОшибка при чтении файла: {str(e)}\n```\n\n")
                
                md.write("---\n\n")
        
        # ========== JAVASCRIPT ФАЙЛЫ ==========
        if files['JavaScript']:
            md.write("## ⚡ JavaScript файлы\n\n")
            
            for idx, js_file in enumerate(files['JavaScript'], 1):
                filename = os.path.basename(js_file)
                filepath = js_file
                
                md.write(f"### {idx}. `{filename}`\n")
                md.write(f"**Расположение:** `{filepath}`\n\n")
                
                # Описание JS файлов
                descriptions = {
                    'auth-header.js': 'Логика авторизации в шапке сайта',
                    'backend.js': 'Функции для работы с базой данных',
                    'basket.js': 'Логика работы корзины покупок',
                    'log-reg.js': 'Логика входа и регистрации пользователей',
                    'server.js': 'Серверная часть (API) - обработка запросов',
                    'shop.js': 'Динамическая загрузка товаров в магазине'
                }
                
                if filename in descriptions:
                    md.write(f"**Назначение:** {descriptions[filename]}\n\n")
                
                try:
                    for encoding in ['utf-8', 'cp1251', 'iso-8859-1']:
                        try:
                            with open(js_file, 'r', encoding=encoding) as f:
                                content = f.read()
                            
                            # Сохраняем статистику
                            file_stats[filename] = {
                                'type': 'JavaScript',
                                'size': len(content),
                                'lines': content.count('\n') + 1
                            }
                            
                            md.write("```javascript\n")
                            md.write(content)
                            if not content.endswith('\n'):
                                md.write("\n")
                            md.write("```\n\n")
                            break
                        except UnicodeDecodeError:
                            continue
                except Exception as e:
                    md.write(f"```\nОшибка при чтении файла: {str(e)}\n```\n\n")
                
                md.write("---\n\n")
        
        # ========== SERVER ФАЙЛЫ ==========
        if files['Server']:
            md.write("## 🖥️ Server файлы\n\n")
            
            for idx, server_file in enumerate(files['Server'], 1):
                filename = os.path.basename(server_file)
                filepath = server_file
                
                md.write(f"### {idx}. `{filename}`\n")
                md.write(f"**Расположение:** `{filepath}`\n\n")
                
                md.write("**Назначение:** Точка входа сервера (Node.js)\n\n")
                
                try:
                    for encoding in ['utf-8', 'cp1251', 'iso-8859-1']:
                        try:
                            with open(server_file, 'r', encoding=encoding) as f:
                                content = f.read()
                            
                            # Сохраняем статистику
                            file_stats[filename] = {
                                'type': 'Server',
                                'size': len(content),
                                'lines': content.count('\n') + 1
                            }
                            
                            md.write("```javascript\n")
                            md.write(content)
                            if not content.endswith('\n'):
                                md.write("\n")
                            md.write("```\n\n")
                            break
                        except UnicodeDecodeError:
                            continue
                except Exception as e:
                    md.write(f"```\nОшибка при чтении файла: {str(e)}\n```\n\n")
                
                md.write("---\n\n")
        
        # ========== БАЗА ДАННЫХ ==========
        if has_db:
            md.write("## 🗃️ База данных\n\n")
            md.write(f"**Файл:** `database.db`\n\n")
            md.write("**Тип:** SQLite база данных\n\n")
            md.write("**Размер:** ")
            
            try:
                db_size = os.path.getsize(db_file)
                if db_size < 1024:
                    md.write(f"{db_size} байт\n")
                elif db_size < 1024 * 1024:
                    md.write(f"{db_size / 1024:.2f} КБ\n")
                else:
                    md.write(f"{db_size / (1024 * 1024):.2f} МБ\n")
            except:
                md.write("не удалось определить\n")
            
            md.write("\n**Содержимое:** *Бинарный файл SQLite*\n\n")
            md.write("---\n\n")
        
        # ========== СТРУКТУРА ПРОЕКТА ==========
        md.write("## 📁 Структура проекта\n\n")
        md.write("```\n")
        md.write("frog-site/\n")
        md.write("│\n")
        md.write("├── 📄 index.html                 (Главная страница)\n")
        md.write("├── 📄 shop.html                  (Страница магазина)\n")
        md.write("├── 📄 basket.html                (Страница корзины)\n")
        md.write("├── 📄 login.html                 (Страница входа)\n")
        md.write("├── 📄 register.html              (Страница регистрации)\n")
        md.write("├── 📄 404.html                   (Страница 404)\n")
        md.write("│\n")
        md.write("├── 📂 css/\n")
        md.write("│   └── 📄 style.css              (Основные стили)\n")
        md.write("│\n")
        md.write("├── 📂 js/\n")
        md.write("│   ├── 📄 auth-header.js         (Логика авторизации в шапке)\n")
        md.write("│   ├── 📄 backend.js             (Функции для работы с БД)\n")
        md.write("│   ├── 📄 basket.js              (Логика корзины)\n")
        md.write("│   ├── 📄 log-reg.js             (Логика входа/регистрации)\n")
        md.write("│   ├── 📄 server.js              (Серверная часть - API)\n")
        md.write("│   └── 📄 shop.js                (Динамическая загрузка товаров)\n")
        md.write("│\n")
        md.write("├── 📂 assets/\n")
        md.write("│   ├── 📄 favicon.ico\n")
        md.write("│   ├── 📂 images/\n")
        md.write("│   │   ├── 📄 header-frog.svg\n")
        md.write("│   │   ├── 📂 cards/\n")
        md.write("│   │   │   ├── 📄 default-frog.jpg\n")
        md.write("│   │   │   └── ... (другие изображения товаров)\n")
        md.write("│   │   └── 📂 HomeImg/           (Изображения для карусели)\n")
        md.write("│   └── ... (другие ресурсы)\n")
        md.write("│\n")
        md.write("├── 📄 database.db                (SQLite база данных)\n")
        if files['Server']:
            md.write("└── 📄 server.js                  (точка входа сервера)\n")
        else:
            md.write("└── 📄 server.js                  (точка входа сервера - в папке js)\n")
        md.write("```\n\n")
        
        # ========== СТАТИСТИКА ==========
        md.write("## 📊 Статистика\n\n")
        
        # Подсчет по типам файлов
        type_count = {}
        type_lines = {}
        total_size = 0
        total_lines = 0
        
        for stats in file_stats.values():
            file_type = stats['type']
            if file_type not in type_count:
                type_count[file_type] = 0
                type_lines[file_type] = 0
            
            type_count[file_type] += 1
            type_lines[file_type] += stats['lines']
            total_size += stats['size']
            total_lines += stats['lines']
        
        md.write("### Количество файлов по типам:\n")
        md.write("| Тип файла | Количество | Строк кода |\n")
        md.write("|-----------|------------|------------|\n")
        
        for file_type in sorted(type_count.keys()):
            count = type_count[file_type]
            lines = type_lines[file_type]
            md.write(f"| {file_type} | {count} | {lines:,} |\n")
        
        md.write(f"| **Итого** | **{sum(type_count.values())}** | **{total_lines:,}** |\n\n")
        
        md.write("### Общий размер кода:\n")
        if total_size < 1024:
            md.write(f"- **{total_size} байт**\n")
        elif total_size < 1024 * 1024:
            md.write(f"- **{total_size / 1024:.1f} КБ**\n")
        else:
            md.write(f"- **{total_size / (1024 * 1024):.2f} МБ**\n")
        
        if has_db:
            md.write(f"- **+ база данных SQLite**\n")
        
        md.write("\n### Детали по файлам:\n")
        md.write("| Файл | Тип | Размер | Строк |\n")
        md.write("|------|-----|--------|-------|\n")
        
        for filename, stats in sorted(file_stats.items()):
            size_kb = stats['size'] / 1024
            md.write(f"| {filename} | {stats['type']} | {size_kb:.1f} КБ | {stats['lines']:,} |\n")
        
        md.write("\n---\n\n")
        md.write("*Документация создана автоматически.*\n")
    
    # Вывод информации в консоль
    print("=" * 60)
    print("🐸 Frog Site - Документация создана!")
    print("=" * 60)
    print(f"\n📁 Выходной файл: {output_file}")
    print(f"📊 Обработано файлов: {len(file_stats)}")
    
    if has_db:
        print(f"🗃️  База данных: database.db")
    
    print("\n📋 Содержимое документации:")
    print("-" * 40)
    for anchor, title in sections:
        print(f"  • {title}")
    print("-" * 40)
    
    print(f"\n✅ Готово! Файл '{output_file}' сохранен в текущей директории.")

if __name__ == "__main__":
    # Запуск скрипта
    collect_website_code()