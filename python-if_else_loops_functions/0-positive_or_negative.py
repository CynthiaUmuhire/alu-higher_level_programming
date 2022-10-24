#!/usr/bin/python3
import random
number = random.randint(-10, 10)
if number > 0:
  print(f"{number}The number is positive \n")
elif number == 0:
    print(f"{number}The number is zero \n")
else:
      print(f"{number}The number is negative \n")
