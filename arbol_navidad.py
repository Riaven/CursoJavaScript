"""from io import open 


archivo_texto=open("archivo.txt", "w")
frase="Estupendo dia para estudiar python  el miercoles"
archivo_texto.write(frase)
archivo_texto.close()
"""
#
import sys;
nombre = "SO español"
print(sys.getsizeof(nombre))
print(len(nombre))

"""
from random import randint
from time import sleep

md2 = randint(1,30)

def make_tree():
  print('\033c')

  for x in range (1,30,2):
    md1 = randint(1,md2)
    if x==1:
      ch = "$"
    elif md1 % 4 == 0:
      ch = "o"
    elif md1 % 3 == 0:
      ch = "i"
    else:
      ch = "*"

    print ("{:^33}".format(ch*x))

  print ("{:^33}".format("|||"))
  print ("{:^33}".format("|||"))
  sleep(.75)

while True:
  make_tree()"""