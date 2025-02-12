name = ["John", "Victor", "Daniel", "James"] # List 1
age = [24, 13, 16, 18] # list 2
for a,b in zip(name,age): # This is what we call to be a turple, (combining multiple iterables to be one)
    print(a,b)
# Enumerate
for index , b in enumerate(name, start=1):
    print(index,b)
for index ,(a,b) in enumerate(zip(name,age,),start=1):
    print(index,a,b)