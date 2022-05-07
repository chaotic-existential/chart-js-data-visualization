import numpy as np
import pandas as pd

src = 'data.xlsx'
df = pd.read_excel(src, skiprows=2, header=0)

# Вытаскиваем данные из таблицы
labels = df.columns[1:].tolist() + ['Другие']
block1 = df[labels[0]].tolist()
block2 = df[labels[1]].tolist()
block3 = [*np.array(100) - (np.array(block1) + np.array(block2))]

# Помещаем данные в js-массивы
path = "data.js"
result = f"""
let labels = {labels};
let values = [{block1}, {block2}, {block3}];"""

with open(path, 'w', encoding='utf') as file:
    file.write(result)
