# Python Notes

## Flask Startup
On Windows (Powershell)
```
$env:FLASK_APP = "app.py"
flask run
```

## Iterators
- When you create a list, you can read its items one by one, and it’s called iteration:

```
>>> mylist = [1, 2, 3]
>>> for i in mylist:
...    print(i)
1
2
3
```


## Generators
- Generators are iterators, but you can only iterate over them once. It’s because they do not store all the values in memory, they generate the values on the fly:

```
>>> mygenerator = (x*x for x in range(3))
>>> for i in mygenerator:
...    print(i)
0
1
4
```

## Yield
- Yield is a keyword that is used like return, except the function will return a generator
- when you call the function, the code you have written in the function body does not run. The function only returns the generator object

```
>>> def createGenerator():
...    mylist = range(3)
...    for i in mylist:
...        yield i*i
...
>>> mygenerator = createGenerator() # create a generator
>>> print(mygenerator) # mygenerator is an object!
<generator object createGenerator at 0xb7555c34>
>>> for i in mygenerator:
...     print(i)
0
1
4
```

> The first time the for calls the generator object created from your function, it will run the code in your function from the beginning until it hits yield, then it’ll return the first value of the loop. Then, each other call will run the loop you have written in the function one more time, and return the next value, until there is no value to return.

> The generator is considered empty once the function runs but does not hit yield anymore. It can be because the loop had come to an end, or because you do not satisfy a “if/else” anymore.

## Pytest

- Fixtures - acts as `setUp()` or `preTest()` hooks that run before tests run




## Arrays

```
a[start:end] # items start through end-1
a[start:]    # items start through the rest of the array
a[:end]      # items from the beginning through end-1
a[:]         # a copy of the whole array
a[-1]    # last item in the array
a[-2:]   # last two items in the array
a[:-2]   # everything except the last two items
```
