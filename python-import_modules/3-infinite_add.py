#!/usr/bin/python3
if __name__ == "__main__":
  from sys import argv
num = len(argv) - 1
if num == 0:
  print(0)
else:
  sum = 0
  for i in argv[1:]:
    sum = sum + int(i)
   
print(sum)
