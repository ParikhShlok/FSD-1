# data type

### text type

1. str()


```python
s="hello world"
print(s)
```

    hello world
    


```python
s1="hello
world"
print(s1)
```


      File "<ipython-input-2-02d64b0f455f>", line 1
        s1="hello
                 ^
    SyntaxError: EOL while scanning string literal
    



```python
s2="""hello
world"""
print(s2)
s2
```

    hello
    world
    




    'hello\nworld'




```python
s="""hello 
world"""
s

```




    'hello \nworld'




```python
print(len(s))
```

    12
    

### 2. Numerical data type

1. int():


```python
x=1
y=1964378
z=-4500139
print(type(x))
print(type(y))
print(type(z))
```

    <class 'int'>
    <class 'int'>
    <class 'int'>
    

2. float():


```python
x=1.2
y=196.4378
z=-4500.139
print(type(x))
print(type(y))
print(type(z))
```

    <class 'float'>
    <class 'float'>
    <class 'float'>
    


```python
x=3.64e4
print(x)
print(type(x))
y=45e5
print(y)
print(type(y))
```

    36400.0
    <class 'float'>
    4500000.0
    <class 'float'>
    

3. complex number 


```python
x=4+5j
print(type(x))
y=-10+7j
print(type(y))
```

    <class 'complex'>
    <class 'complex'>
    

### Sequence data type

1. list() :


```python
l=["ramesh","chetan","htiday","paresh","chetan"]
print(l)
l[1]="haresh"
print(l)
l1=[1,2,3,5,9]
print(l1)
l2=[1,2.3,"abc"]
print(l2)
#ordered, allow duplicate, changeable
```

    ['ramesh', 'chetan', 'htiday', 'paresh', 'chetan']
    ['ramesh', 'haresh', 'htiday', 'paresh', 'chetan']
    [1, 2, 3, 5, 9]
    [1, 2.3, 'abc']
    

2. tuple() :


```python
t=("ramesh","chetan","htiday","paresh","chetan")
print(t)
print(t[3])
print(type(t))
t1=(1,2.3,"abc")
print(t1)
#oredered, allow duplicate, unchangeable
```

    ('ramesh', 'chetan', 'htiday', 'paresh', 'chetan')
    paresh
    <class 'tuple'>
    (1, 2.3, 'abc')
    

3. range()


```python
r=range(3)
print(r)
print(type(r))
```

    range(0, 3)
    <class 'range'>
    

### mapping value 

1. dict():


```python
d={1:"ramesh",2:"hriday",3:40,4:40}
print(type(d))
print(d)
print(d[2])
# oredered, duplicate value allowed but not a key
```

    <class 'dict'>
    {1: 'ramesh', 2: 'hriday', 3: 40, 4: 40}
    hriday
    

### set() 


```python
s={10,20,30,40,10,30,80,90}
print(s)
print(type(s))
#does not allowed duplicate, unoredered, unchangeabable but not immutable because it changeable but not accurate
```

    {40, 10, 80, 20, 90, 30}
    <class 'set'>
    


```python
#tuple
t=(10,20,30,40,50)

```


```python
#list
l=[10,20,30,40,50]

```


```python
#set
s={10,20,30,40,50}

```

1. frozenset()


```python
s={10,20,30,40,90,60}
print(s)
print(frozenset(s))
```

    {40, 10, 20, 90, 60, 30}
    frozenset({20, 90, 40, 10, 60, 30})
    

### boolean datatype 


```python
print(bool(0))
print(bool(1234))
print(bool(""))
print(bool(" "))
```

    False
    True
    False
    True
    

# typecasting 

1. int()


```python
print(int(10))
```

    10
    


```python
print(int(10.59))
```

    10
    


```python
print(int(10.99))
```

    10
    


```python
print(int(5+3j))
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-43-8b2fec83f6e4> in <module>
    ----> 1 print(int(5+3j))
    

    TypeError: can't convert complex to int



```python
print(int("10"))
```

    10
    


```python
print(int("10.5"))
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-45-24a9cbdf48a8> in <module>
    ----> 1 print(int("10.5"))
    

    ValueError: invalid literal for int() with base 10: '10.5'



```python
print(int("ten"))
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-46-fe86acc464d3> in <module>
    ----> 1 print(int("ten"))
    

    ValueError: invalid literal for int() with base 10: 'ten'



```python
print(int("0b1111"))#0b is the prefix of binary
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-47-cb25a5fd01a4> in <module>
    ----> 1 print(int("0b1111"))
    

    ValueError: invalid literal for int() with base 10: '0b1111'


2. float():


```python
print(float(10))
print(float(10.59))
print(float(10.99))
#print(float(5+3j))
print(float("10"))
print(float("10.5"))
#print(float("ten"))
#print(float("0b1111"))#0b is the prefix of binary
```

    10.0
    10.59
    10.99
    10.0
    10.5
    

3. bool()


```python
print(bool(0))
print(bool(123))
print(bool(0.0))
print(bool(1.23))
print(bool("flase"))
print(bool(""))
print(bool(0+0j))
print(bool(5+4j))
print(bool(0+4j))
```

    False
    True
    False
    True
    True
    False
    False
    True
    True
    

4. str()


```python
str(10)
```




    '10'




```python
str(3+4j)
```




    '(3+4j)'




```python
str(10.5)

```




    '10.5'




```python
str(True)
```




    'True'




```python
str(False)
```




    'False'




```python

```
