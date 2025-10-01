# Chapter 3

### differnt category for user defined category


```python
def wish():
    print("hello")
wish()
```

    hello
    


```python
#function without parameter and no return type..
def sum(a,b):
    total=a+b
    print(total)
sum(5,6)
```

    11
    


```python
#function with parameter and no return type
def wish(name):
    print(name)
name=input("enter name:")
wish(name)
```

    enter name:abc
    abc
    


```python
#function without parameter and with return type
def wish():
    name=input("enter name:")
    return(name)
wish()
```

    enter name:abc
    




    'abc'




```python
#function with parameter and with return type
def wish(name):
    
    return(name)
name=input("enter name:")
wish(name)
```

    enter name:abc
    




    'abc'




```python
def wish(name):
    print(f"hello {name} goodmorning")
    return(name)
wish("shlok")
```

    hello shlok goodmorning
    




    'shlok'




```python
n=int(input("enter number"))
def check(n):
    if n%2==0:
        return("even")
    else:
        return("odd")
check(n)
```

    enter number88
    




    'even'




```python
def sum(a,b):
    total=a+b
    return(total)
a=int(input("enter number:"))
b=int(input("enter number:"))
sum(a,b)
```

    enter number:5
    enter number:5
    




    10




```python
def calc(a,b):
    sum=a+b
    sub=a-b
    mul=a*b
    return sum,mul,sub
a=int(input("enter number:"))
b=int(input("enter number:"))
calc(a,b)

```

    enter number:5
    enter number:6
    




    (11, 30, -1)




```python
def add(a,b):#docstring
    return(a,b)
    
print(add.__doc__)
"""this function is for addition"""
```

    None
    




    'this function is for addition'



### types of argument


```python
#1) positionsal argument
#2) keyword argument
#3) default argument
#4) varriable length

```


```python
#1) poistional argument
def sub(a,b):
    return a-b
sub(10,20)
sub(20,10)
```




    10




```python
#2) keyword argument
def self(name,say):
    print("helllo",name,say)
self("shlok","hii")
self(name="shlok",say="ha")
self("shlok",say="byy")
self(name="shlok","byy")
```


      File "<ipython-input-51-1c7402a2c5fa>", line 7
        self(name="shlok","byy")
                          ^
    SyntaxError: positional argument follows keyword argument
    



```python
#3) default argument
def wish(name="shlok"):
    print(f"hey {name}")
wish()
wish("rudra")
```

    hey shlok
    hey rudra
    


```python
#4) varriable length
def wish(*s):
    sum=0
    for i in s:
        sum=sum + i
    print(sum)
wish(10,20,30)
wish(10)
```

    60
    10
    


```python
def wish(n1,*s):
    sum=0
    for i in s:
        sum=sum + i
    print(sum)
wish(10,20,30)
wish(10)
wish(1,2,36,5,7,5,57)

```

    50
    0
    112
    


```python
def wish(*s,n1):
    sum=0
    for i in s:
        sum=sum + i
    print(sum)
#wish(10,20,30)
wish(1,2,36,5,7,5,57,n1=5)
```

    113
    


```python
x=3
def fun(a):
    x=5
    return x*a
print("local varrible",fun(5))
print("global varriable",x)

```

    local varrible 25
    global varriable 3
    


```python
def fun():
    print("outer")
    def vun():
        print("inner")
    vun()
fun()
    
```

    outer
    inner
    


```python
def fun():
    print("outer")
    def vun():
        print("inner")
    return vun()
fun()
```

    outer
    inner
    


```python
for i in range(0,5):
    print(i)
else:
    print("not value")
```

    0
    1
    2
    3
    4
    not value
    


```python
for i in range (0,5):
    print(i)
    if i==3:
        break
else:
    print("not valid")
```

    0
    1
    2
    3
    


```python
n=int(input("enter number:"))
def armstrong(n):
    sum=0
    temp=n
    p=len(str(n))
    while n!=0:
        ld=n%10
        sum=sum+(ld**p)
        n=n//10
    print(sum)
    if temp==sum:
        print("number is armstrong")
    else:
        print("not armstrong")
armstrong(n)
```

    enter number:115
    not armstrong
    


```python

```
