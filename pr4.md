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

## condions 

1. if condition


```python
name=input("neter name:")
if name=="shlok":
    print("condition excuted")
print("finished")
```

2. if-else condition


```python
name=input("neter name:")
if name=="shlok":
    print("if excuted")
else:
    print("else excuted")
print("finished")
```

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

## Iteration 

1. for loop


```python
for i in range(5):
    print(i)
```

2. while loop


```python
x=0
while x<6:
    print(x)
    x+=1
```

3. nested loop


```python
for i in range(3):
    for j in range(3):
        print([i],[j])
```


```python
#break
for i in range(10):
    if i==7:
        print("iteration are in enough")
        break
    print(i)
```


```python
#continue
for i in range(10):
    if i==7:
        print("iteration are in enough")
        continue#particular event ne break karse
    print(i)
```


```python
#write a python(WAP) code to check given year is leap year or not
s=int(input("enter year:"))
if (s%4==0 and s%100!=0 or s%400==0):
    print("leap year:",s)
else:
    print("not leap year",s)
```


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


```python
#WAP find sum of n positive numbers
n=int(input("enter number:"))
sum=0
if n>0:
    for i in range(1,n+1):
        sum=sum+i
    print(sum)
else:
    print("enetr valid number")
```


```python
#WAP to read three numbers (a,b,c) and check how many numbers available between a and b which is divisble by c.
a=int(input("enter number:"))
b=int(input("enter number:"))
c=int(input("enter number:"))
count=0
for i in range(a+1,b):
    if i%c==0:
        count=count+1
print(count)
```


```python
#WAP to print multiplication table of give by user
n=int(input("enter number:"))
i=1
while i<=10:
    print(n,"x",i,"=",n*i)
    i=i+1
```


```python
#WAP to find out factorial of given number
n=int(input("enter number:"))
fact=1
if n>1:
    for i in range(2,n+1):
        fact=fact*i
    print(fact)
elif n==0 or n==1:
    print(fact)
else:
    print("enter valid number")
        
```


```python
#WAP for reverse number provided by user
n=int(input("enter number:"))
r=0

while n!=0:
    ld=(n%10)
    r=r*10+ld
    n=n//10
print(r)
```


```python
#WAP for palindrome number provided by user
n=int(input("enter number:"))
temp=n# beacuse after all iteration n is 0
r=0
ld=0
while n!=0:
    ld=(n%10)
    r=r*10+ld
    n=n//10
print(r)
if r==temp:
    print("number is palindrome")
else:
    print("number is not palindrome")
```


```python
#WAP to check given number is armstong or not
n=int(input("enter number:"))
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
```


```python
#WAP to display fibbonacci sequence up to nth term
n1,n2=0,1
n=int(input("enter number:"))
if n<0:
    print("enter positive number")
elif n==1:
    print("fibbonacci series:",n1)
else:
    print("fibbonacci series:",n1,n2)
    for i in range(2,n):
        print()#aagal nu baki chhe
```

    enter number:3
    fibbonacci series: 0 1
    
    


```python
#WAP to check the wether the given number is happy or not
n=int(input("enter number:"))
temp=n
while n!=1 and n!=4:
    sum=0
    s=str(n)
    for i in s:
        sum=sum+int(i)**2
    n=sum
if n==1:
    print("it is a happy number")
else:
    print("not a happy number")
```


```python
#WAP to check weher the given number is disarium number or not
n=int(input("enter number:"))
temp=n
l=0
sum=0
n1=n
while n>0:
    n=n//10
    l=l+1
for i in range(l,0,-1):
    ld=n1%10
    sum=sum+ld**i
    n1=n1//10
if temp==sum:
    print("number is disarium number")
else:
    print("number")
```

    enter number:89
    number is disarium number
    


```python
#WAP how to check the length without len function
n=int(input("enter number:"))
count=0
a=0
while n>0:
    a=n%10
    n=n//10
    count=count+1
print(count)
```

    enter number:123
    3
    


```python
n=int(input("enter number:"))
for i in range(1,n+1):
    for j in range(1,i+1):
        print("*",end=" ")
    print()
```

    enter number:5
    * 
    * * 
    * * * 
    * * * * 
    * * * * * 
    


```python
n=int(input("enter number:"))
for i in range(1,n+1):
    for j in range(1,i+1):
        print(i,end=" ")
    print()
```

    enter number:5
    1 
    2 2 
    3 3 3 
    4 4 4 4 
    5 5 5 5 5 
    


```python
n=int(input("enter number:"))
for i in range(1,n+1):
    for j in range(1,i+1):
        print(j,end=" ")
    print()
```

    enter number:5
    1 
    1 2 
    1 2 3 
    1 2 3 4 
    1 2 3 4 5 
    


```python
n=int(input("enter number:"))
for i in range(n+1,1,-1):
    for j in range(1,i):
        print("*",end=" ")
    print()
```

    enter number:5
     * * * * *
     * * * *
     * * *
     * *
     *
    


```python
n=int(input("enter number:"))
for i in range(1,n+1):
    for j in range(1,n-i+2):
        print(" ",end=" ")
    for k in range(1,i+1):
        print("*",end=" ")    
    print()
```

    enter number:5
         *
        **
       ***
      ****
     *****
    


```python
n=int(input("enter number:"))
for i in range(1,n+1):
    for j in range(1,n-i+2):
        print("*",end=" ")
    for k in range(1,i+1):
        print(" ",end=" ")    
    print()
```

    enter number:5
    * * * * *   
    * * * *     
    * * *       
    * *         
    *           
    


```python

```
