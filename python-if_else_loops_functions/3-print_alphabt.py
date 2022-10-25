#!/usr/bin/python3
for letters in range(ord('a'), ord('z')+1):
  if letters == 'e' or letters == 'q':
    continue
 else:
  print("{:c}" .format(letters), end =" ")
