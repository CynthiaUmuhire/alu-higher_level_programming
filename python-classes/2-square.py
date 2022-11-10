#!/usr/bin/python3
"""Creates a square class"""


class Square:
   '''
   create a square 
       has a private instance att:size
   '''
  
  def __init__(self, size=0):
    ''' init size '''
    if not isinstance(size, int):
      raise TypeError("size must be an integer")
    elif size < 0:
      raise ValueError("size must be >= 0")

    self.__size = size
