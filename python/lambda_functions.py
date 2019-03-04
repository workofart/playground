from functools import reduce

def sumCustom(arr):
    return reduce((lambda out, x: out + x), arr)
    
def mapCustom(arr):
    return list(map((lambda x: x+1), arr))

def filterCustom(arr):
    return list(filter((lambda x: x % 2 == 0), arr))

def sortCustom(tuples):
    tuples.sort(key=lambda x: x[1])
    return tuples