import pandas as pd

src = 'data.xlsx'
df = pd.read_excel(src, skiprows=2, index_col=0, header=1)

# Избавляемся от фиктивных рядов без данных
for index, data in df.iterrows():
    if '-' in data.array:
        df.drop(index=index, inplace=True)

# Приводим колонки к нужным типам
for label, content in df.iteritems():
    df[label] = df[label].astype('float')

# Вычисляем среднее арифметическое от годовых значений
df['avg'] = round(df.loc[:, df.columns.array].mean(axis=1))

# Сортируем данные по среднему арифметическому
df.sort_values(by=['avg'], ascending=False, inplace=True)

# Объединяем (суммируем) неосновные ряды в "Другие"
df = pd.concat([df.head(9), df.tail(len(df) - 9).agg(['sum'])])
df.rename(index={'sum': 'Другие'}, inplace=True)

# Сортируем данные по среднему арифметическому ещё раз
df.sort_values(by=['avg'], ascending=False, inplace=True)

# Вытаскиваем данные из таблицы
labels = df.index.tolist()
block1 = df[2019].tolist()
block2 = df[2020].tolist()

# Помещаем данные в js-массивы
path = "data.js"
result = f"""
let labels = {labels};
let values = [{block1}, {block2}];"""

with open(path, 'w', encoding='utf') as file:
    file.write(result)
