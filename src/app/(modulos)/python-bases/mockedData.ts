export const x1 = `class ClassName:
# Statement-1
.
.
.
# Statement-N`;
export const x2 = `
# Python3 program to
# demonstrate defining
# a class

class Dog:
    pass`;
export const x3 = `obj = Dog()`;
export const x4 = `class Dog:

# class attribute
attr1 = "mammal"

# Instance attribute
def __init__(self, name):
    self.name = name

# Driver code
# Object instantiation
Rodger = Dog("Rodger")
Tommy = Dog("Tommy")

# Accessing class attributes
print("Rodger is a {}".format(Rodger.__class__.attr1))
print("Tommy is also a {}".format(Tommy.__class__.attr1))

# Accessing instance attributes
print("My name is {}".format(Rodger.name))
print("My name is {}".format(Tommy.name))`;
export const x5 = `Rodger is a mammal
Tommy is also a mammal
My name is Rodger
My name is Tommy
`;
export const x6 = `class Dog:

# class attribute
attr1 = "mammal"

# Instance attribute
def __init__(self, name):
    self.name = name
    
def speak(self):
    print("My name is {}".format(self.name))

# Driver code
# Object instantiation
Rodger = Dog("Rodger")
Tommy = Dog("Tommy")

# Accessing class methods
Rodger.speak()
Tommy.speak()`;
export const x7 = `My name is Rodger
My name is Tommy`;
export const x8 = `# Python code to demonstrate how parent export constructors
# are called.

# parent class
class Person(object):

    # __init__ is known as the export constructor
    def __init__(self, name, idnumber):
        self.name = name
        self.idnumber = idnumber

    def display(self):
        print(self.name)
        print(self.idnumber)
        
    def details(self):
        print("My name is {}".format(self.name))
        print("IdNumber: {}".format(self.idnumber))
    
# child class
class Employee(Person):
    def __init__(self, name, idnumber, salary, post):
        self.salary = salary
        self.post = post

        # invoking the __init__ of the parent class
        Person.__init__(self, name, idnumber)
        
    def details(self):
        print("My name is {}".format(self.name))
        print("IdNumber: {}".format(self.idnumber))
        print("Post: {}".format(self.post))


# creation of an object variable or an instance
a = Employee('Rahul', 886012, 200000, "Intern")

# calling a function of the class Person using
# its instance
a.display()
a.details()`;
export const x9 = `Rahul
886012
My name is Rahul
IdNumber: 886012
Post: Intern`;
export const x10 = `class Bird:
  
def intro(self):
    print("There are many types of birds.")

def flight(self):
    print("Most of the birds can fly but some cannot.")

class sparrow(Bird):

def flight(self):
    print("Sparrows can fly.")

class ostrich(Bird):

def flight(self):
    print("Ostriches cannot fly.")

obj_bird = Bird()
obj_spr = sparrow()
obj_ost = ostrich()

obj_bird.intro()
obj_bird.flight()

obj_spr.intro()
obj_spr.flight()

obj_ost.intro()
obj_ost.flight()`;
export const x11 = `There are many types of birds.
Most of the birds can fly but some cannot.
There are many types of birds.
Sparrows can fly.
There are many types of birds.
Ostriches cannot fly.`;
export const x12 = `# Python program to
# demonstrate private members
# "__" double underscore represents private attribute. 
# Private attributes start with "__".

# Creating a Base class
class Base:
    def __init__(self):
        self.a = "GeeksforGeeks"
        self.__c = "GeeksforGeeks" 

# Creating a derived class
class Derived(Base):
    def __init__(self):

        # Calling export constructor of
        # Base class
        Base.__init__(self)
        print("Calling private member of base class: ")
        print(self.__c)


# Driver code
obj1 = Base()
print(obj1.a)

# Uncommenting print(obj1.c) will
# raise an AttributeError

# Uncommenting obj2 = Derived() will
# also raise an AtrributeError as
# private member of base class
# is called inside derived class`;
export const x13 = `GeeksforGeeks`;
export const x14 = `   # Hidden member of MyClass 
__hiddenVariable = 0

# A member method that changes  
# __hiddenVariable  
def add(self, increment): 
    self.__hiddenVariable += increment 
    print (self.__hiddenVariable) 

# Driver code 
myObject = MyClass()      
myObject.add(2) 
myObject.add(5) 

# This line causes error 
print (myObject.__hiddenVariable)`;
export const x15 = `2
7
Traceback (most recent call last):
  File "filename.py", line 13, in 
    print (myObject.__hiddenVariable)
AttributeError: MyClass instance has 
no attribute '__hiddenVariable'`;
