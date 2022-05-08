import pandas as pd

src = 'data.csv'
names = ['name', 'interval', 'date', 'time', 'open', 'high', 'low', 'close', 'vol']

stonks = pd.read_csv(src, sep='\t', names=names, usecols=['date', 'close'])
stonks.drop(axis=0, index=0, inplace=True)

# Приводим колонки к нужным типам
stonks['close'] = stonks['close'].astype('float')
stonks['date'] = pd.to_datetime(stonks['date'])
stonks = stonks.set_index(['date'])

# Вытаскиваем последние 10 дней
stonks = stonks.tail(10)

# Шаманим над форматом даты
stonks.index = stonks.index.astype(str)

# Вытаскиваем данные из таблицы
labels = stonks.index.tolist()
values = stonks['close'].tolist()

# Помещаем данные в js-массивы
path = "data.js"
result = f"""
let labels = {labels};
let values = {values};"""

with open(path, 'w', encoding='utf') as file:
    file.write(result)
