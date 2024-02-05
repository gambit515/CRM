

a = [1,4,5,1,2,3,4,3,2,1]


a.sort()
print(a)
'''
import pandas as pd

data={
    'Name':['Alice','Bob','Charlie'],
    'Age': [30,20,10],
    'City': ['New York', 'Paris', 'London']
}

df = pd.DataFrame(data)

print("Dataframe")
print(df)
print("\nAge")
print(df['Age'])
#Filter
print('older than 15')
print(df[df['Age']>15])
#New column
print('Dataframe with Senior Column')
df['Senior'] = df['Age'] >15
print(df)
#Statistic
print(df.describe())
#Sort
sorted_df = df.sort_values(by='Age')
print('Sorted Age')
print(sorted_df)
'''





'''
# Описание группы стрежней реактора
class ReactorGroupRods:
    def __init__(self, rod_type):
        self.type = rod_type
        self.lifeTime = 0
        self.effectiveness = 0
        self.count = 0
        self.priority = 1
        self.emptySlots = 0

    def GetOne(self):
        self.count -= 1
        self.emptySlots += 1


# Общая эффективность реактора
totalEffectiveness = 0

# Ициниализация экземпляров класса стержней реактора
a = ReactorGroupRods("A")
b = ReactorGroupRods("B")
c = ReactorGroupRods("C")
rods = sorted({a, b, c}, key=lambda x: x.type)

#Ввод входных данных
for rod in rods:
    rod.effectiveness = float(input(f"Эффективность стержней типа {rod.type} = "))
    rod.lifeTime = float(input(f"Срок службы в годах стержней типа {rod.type} = "))
    rod.count = float(input(f"Количество стержней типа {rod.type} = "))
    print("")

# Вычисление приоритета загрузки в реактор типов стержней
maximum = max(a.effectiveness * a.lifeTime, b.effectiveness * b.lifeTime, c.effectiveness * c.lifeTime)
for rod in rods:
    if (rod.effectiveness * rod.lifeTime == maximum):
        rod.priority = 0
minimum = min(a.effectiveness * a.lifeTime, b.effectiveness * b.lifeTime, c.effectiveness * c.lifeTime)
for rod in rods:
    if (rod.effectiveness * rod.lifeTime == minimum):
        rod.priority = 2
# Сортировка стержней по приоритету
sorted_rods = sorted(rods, key=lambda x: x.priority)

rodeToLoad = float(input("Количество стрежней требуемых для загрузки = "))
reactorLifeTime = float(input("Срок службы реактора в годах = "))

# Заполнение реактора стержнями
for rod in sorted_rods:
    if (rod.lifeTime >= reactorLifeTime):  # Проверка на то что срок жизни стрежня равен или больше срока жизни реактора
        while (
                rod.count != 0 and rodeToLoad != 0):  # Цикл уменьшает количество стрежней определенного типа (а также считает эффективность) пока стержни не закончатся, либо пока не закончится место в реакторе
            rod.GetOne()
            rodeToLoad -= 1
            totalEffectiveness += rod.effectiveness * rod.lifeTime

# Выходные данные
for rod in sorted_rods:
    print(f"Использовано стержней типа {rod.type} - {rod.emptySlots}")
print(f"Общая эффетивность реактора = {totalEffectiveness}")
input()
'''