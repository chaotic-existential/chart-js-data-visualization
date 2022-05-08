import pymysql

"""
не забудь заполнить реквизиты в коннекте ʕ •ᴥ•ʔ
не забудь заполнить реквизиты в коннекте ʕ •ᴥ•ʔ
не забудь заполнить реквизиты в коннекте ʕ •ᴥ•ʔ
"""
# Соединяемся с базой данных
con = pymysql.connect(
    host='',
    user='',
    password='',
    db='',
    charset='utf8mb4')

try:
    with con.cursor() as cur:
        cur.execute('''
            SELECT dt, income_fact, income_prediction
            FROM vd_tsmc ORDER BY dt ASC''')
        rows = cur.fetchall()
except Exception as error:
    print("Что-то пошло не так", error)

dates = []
income_predicted = []
income_factual = []

# Вытаскиваем данные из таблицы
for row in rows:
    dates.append(row[0])
    income_predicted.append(row[2])
    income_factual.append(row[1])

# Шаманим над форматом даты
dates = ["{:%b %Y}".format(date) for date in dates]

# Помещаем данные в js-массивы
path = "data.js"
result = f"""

let labels = {dates};
let values = [{income_predicted}, {income_factual}];"""

with open(path, 'a', encoding='utf') as file:
    file.write(result)
