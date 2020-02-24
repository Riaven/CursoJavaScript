"""from io import open 


archivo_texto=open("archivo.txt", "w")
frase="Estupendo dia para estudiar python  el miercoles"
archivo_texto.write(frase)
archivo_texto.close()

#
import sys;
nombre = "SO español"
print(sys.getsizeof(nombre))
print(len(nombre))


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



mi = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
mys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
       'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U','V', 'W', 'X', 'Y', 'Z']
des = 1
opcion = input("Elija una opcion \ne)Encriptar archivo\nd)Desencriptar archivo\n>>: ")
if opcion == 'e':
    nombre = input("Deme el nombre completo y extension del archvo a encriptar ")
    na = open(nombre, 'r')
    caracter = na.read(1)
    cifrado = ""
    while caracter != "":
        if caracter in mi:
            cifrado += mi[(mi.index(caracter) + des % (len(mi)))]
        if caracter in mys:
            cifrado += mys[(mys.index(caracter) + des % (len(mys)))]
        else:
            cifrado = caracter
    print(cifrado)
    caracter = na.read(1)
elif opcion == "d":
    nombre = input("Deme el nombre completo y extension del archvo a desencriptar ")
    na = open(nombre, 'r')
    car = na.read(1)
    descifrado = ""
    while car != "":
        if car in mi:
            descifrado += mi[(mi.index(car) - des % (len(mi)))]
        if car in mys:
            descifrado += mys[(mys.index(car) - des % (len(mys)))]
        else:
            descifrado = car
    print(descifrado)
    car = na.read(1)
na.close()