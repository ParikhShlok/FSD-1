# chapter 2 condition execution and iteration


```python
#write a python program to calculate number of notes(500,200,100,50,20, and 10) if we will give user input values
bill=int(input("enter amount: "))
a=(bill//500)
print("no. of 500 notes:",a)
b1=(bill%500)

b=(b1//200)
print("no. of 200 notes:",b)
b2=(b1%200)

c=(b2//100)
print("no. of 100 notes:",c)
b3=(b2%100)

d=b3//50
print("no. of 50 notes:",d)
b4=b3%50

e=b4//20
print("no. of 20 notes:",e)
b5=b4%20

f=b5//10
print("no. of 10 notes:",f)

```

    enter amount: 940
    no. of 500 notes: 1
    no. of 200 notes: 2
    no. of 100 notes: 0
    no. of 50 notes: 0
    no. of 20 notes: 2
    no. of 10 notes: 0
    

## condions 

1. if condition


```python
name=input("neter name:")
if name=="shlok":
    print("condition excuted")
print("finished")
```

    neter name:shlok
    condition excuted
    finished
    

2. if-else condition


```python
name=input("neter name:")
if name=="shlok":
    print("if excuted")
else:
    print("else excuted")
print("finished")
```

    neter name:Shlok
    else excuted
    finished
    

3. if-elif condition


```python
a=int(input("enter a: "))
b=int(input("enter b: "))
c=int(input("enter c: "))
if (a>b) and (a>c):
    print("a is greater",a)
elif (b>a) and (b>c):
    print("b is greater",b)
else:
    print("c is greater",c)
```

    enter a: 50
    enter b: 80
    enter c: 99
    c is greater 99
    


```python
a=int(input("enter a: "))
if (10<a):
    if (20>a):
        print("the number is betwen 10 to 20")
    else:
        print("the number is exceed")
else:
    print("the number is less then 10")
```

    enter a: 20
    the number is exceed
    

## Iteration 

1. for loop


```python
for i in range(5):
    print(i)
```

    0
    1
    2
    3
    4
    

2. while loop


```python
x=0
while x<6:
    print(x)
    x+=1
```

    0
    1
    2
    3
    4
    5
    

3. nested loop


```python
for i in range(3):
    for j in range(3):
        print([i],[j])
```

    [0] [0]
    [0] [1]
    [0] [2]
    [1] [0]
    [1] [1]
    [1] [2]
    [2] [0]
    [2] [1]
    [2] [2]
    


```python
#break
for i in range(10):
    if i==7:
        print("iteration are in enough")
        break
    print(i)
```

    0
    1
    2
    3
    4
    5
    6
    iteration are in enough
    


```python
#continue
for i in range(10):
    if i==7:
        print("iteration are in enough")
        continue#particular event ne break karse
    print(i)
```

    0
    1
    2
    3
    4
    5
    6
    iteration are in enough
    8
    9
    


```python
#write a python(WAP) code to check given year is leap year or not
s=int(input("enter year:"))
if (s%4==0 and s%100!=0 or s%400==0):
    print("leap year:",s)
else:
    print("not leap year",s)
```

    enter year:2024
    leap year: 2024
    


```python
#write a python program to perform arithmetic operation according to choice given by user
a=int(input("enter a:"))
b=int(input("enter b:"))
c=input("enter choice:")
if c=='+':
    sum=a+b
    print("the sum of a and b is:",sum)
elif c=='-':
    sub=a-b
    print("the sub of a and b is:",sub)
elif c=='*':
    mul=a*b
    print("the multiplication of a and b is:",mul)
elif c=='/':
    div=a/b
    print("the division of a and b is:",div)
elif c=='%':
    mod=a%b
    print("the module of a and b is:",mod)
else:
    print("valid choice")
```

    enter a:25
    enter b:5
    enter choice:%
    the module of a and b is: 0
    


```python
#WAP user grade system
s=int(input("enter mark:"))
if s>=80 and s<=100:
    print("Distinction")
elif s>=60 and s<=70:
    print("first class")
elif s>=55 and s<=59:
    print("second class")
elif s>=35 and s<=54:
    print("third class")
elif s>=0 and s<=34:
    print("fail")
else:
    print("enetr valid marks")
```

    enter mark:85
    Distinction
    


```python
#WAP check character is vowel
s=input("enter character:")
if s=="a" or s=="i" or s=="e" or s=="u" or s=="o":
    print("vowel")
elif s=="A" or s=="I" or s=="E" or s=="U" or s=="O":
    print("vowel")
else:
    print("consonent")
```

    enter character:E
    vowel
    


```python
#WAP to calculate the electricity bill(number of unit decided by user) 
""" 100 karta 0
101 thi 200 ma 1 unit na 5
200 karta vadhare hoi to 10"""
s=int(input("enter unit:"))
amount=0
if s>=0 and s<=100:
    print(amount)
elif s>=101 and s<=200:
    s=s-100
    amount=s*5
    print(amount)
elif s>201:
    s=s-200
    amount=500+(s*10)
    print(amount)
```

    enter unit:660
    5100
    


```python
"""WAP accept the following from the user and clculate the percentage the class attendence
number of workng days
total number of days abesnt
after calculating percentage show that greater than 70 then students are eligible for bonus"""

a=int(input("enter number of working days:"))
b=int(input("enter number of absent days:"))
c=a-b
percentage=(c*100)/a
if percentage>=70 and percentage<=100:
    print("students are eligible for bonus marks")
    print("student total percentage",percentage,"%")
else:
    print("valid inputs")
```

    enter number of working days:30
    enter number of absent days:3
    students are eligible for bonus marks
    student total percentage 90.0 %
    


```python
"""WAP to take the bike price from user and display to the road tax to be payed based on purchase bike cost
>100000 tax 5
100000 200000 tax 10
<200000 tax 15"""
b=0
a=int(input("enter amount of bike:"))
if s<100000:
    b=(5*a)/100
    print(b)

```

    enter amount of bike:5000
    250.0
    


```python
"""take the age and gender(F,M) , number of days and display the wages accordingly 
if age doesn't fall in any range and then display following reasons ---enter appropriate age
M: 18 thi 30 --700
F: 18 thi 30 --750
M: 30 thi 40 ---800
F: 30 thi 40 --850"""
age=int(input("enter the age:"))
gender=(input("enter the gender(F/M):"))
a=(int(input("number of days:")))
amount=0
if age>=18 and age<30:
    if gender=='F':
        amount=a*750
        print(amount)
    else:
        amount=a*700
        print(amount)
elif age>=30 and age<40:
    if gender=='F':
        amount=a*850
        print(amount)
    else:
        amount=a*800
        print(amount)
else:
    print("enter appropriate age")
```

    enter the age:19
    enter the gender(F/M):F
    number of days:3
    2250
    


```python

```
