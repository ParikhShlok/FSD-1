# Varriables


```python
x=10# valid
_x=10# valid
_x_=10# valid
x123="abc"# valid
123x=55# not valid

```


      File "<ipython-input-2-789914073cb8>", line 5
        123x=55# not valid
           ^
    SyntaxError: invalid syntax
    



```python
a,b,c,d=10,20,3,5
```


```python
a,b,c=10,20,30,50
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-4-cd36ff9f9241> in <module>
    ----> 1 a,b,c=10,20,30,50
    

    ValueError: too many values to unpack (expected 3)



```python
a,b,c,d=10,20
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-5-1de37d54c207> in <module>
    ----> 1 a,b,c,d=10,20
    

    ValueError: not enough values to unpack (expected 4, got 2)



```python
a=b=c="apple"
print(a,b,c)
```

    apple apple apple
    


```python
x=input("enter your name:")
print("my name is :"+ x)#conactination 
print("my name is :",x)# simple method
```

    enter your name:shlok
    my name is :shlok
    my name is : shlok
    

# Operator

## 1. Arithmetic Operator


```python
# if both value is integer then only divison is float but one is float then all is float
a=10
b=2.0
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a//b)
print(a%b)
print(a**b)
```

    12.0
    8.0
    20.0
    5.0
    5.0
    0.0
    100.0
    


```python
"shlok"*5
```




    'shlokshlokshlokshlokshlok'




```python
"hello " *5
```




    'hello hello hello hello hello '



## 2. Relational Operator/Comaprison Operator


```python
print(10>8)
print(12<8)
print(12>=8)
print(9==9)
print(True>10)#True is 1 so this condition is represent like 1>10
print(False<=0)
print(9.6>=10)
```

    True
    False
    True
    True
    False
    True
    False
    


```python
#chaining in relational operator
10<20<30<=35
```




    True




```python
10>20<30<40
```




    False




```python
10<=10<20<=30<40
```




    True




```python
10<20<30<40>50
```




    False




```python
ord('z')#ascii value
```




    122




```python
#aa khali string mate j valid che and aama bane string vache j thase
"shlok">"Shlok"#aama bane string na first alphabet par thi anser aavse
```




    True




```python
chr(69)#valu par thi ascii
```




    'E'




```python
chr(39)
```




    "'"



## 3.Ternury Operator


```python
a=10
b=20
x=30 if a>b else 10
print(x)
```

    10
    

## 4. Logical Operator

Type 1:boolean valu


```python
False and False
```




    False




```python
True and True
```




    True




```python
True or True
```




    True




```python
True or False
```




    True




```python
False or False
```




    False




```python
not True
```




    False




```python
not False
```




    True



Type 2.: none boolean


```python
#ek vaar revise karvu
0 and 1154
```




    0




```python
10 and 0
```




    0




```python
"shlok" and 0
```




    0




```python
0 or "shlok"
```




    'shlok'



# 5. Membership Operator


```python
l=[10,20,30,40,50]
print(10 in l)
print(90 in l)
s="hello i am python developer"
print("i" in s)
print("Hello" in s)
t=(10,20,30,40,50)
print(10 not in t)
print(30 in t)
```

    True
    False
    True
    False
    False
    True
    

## 6. Assignment Operator


```python
a=30
a+=10
print(a)
```

    40
    


```python
b=40
b-=20
print(b)
```

    20
    

![image.png](attachment:image.png)


```python

```
