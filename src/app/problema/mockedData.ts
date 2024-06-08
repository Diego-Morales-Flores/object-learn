export const problemas = [
  {
    id: "1",
    problema: "Cálculo del Área de un Rectángulo",
    tag: "abstraccion",
    dificultad: 1,
    test: "test1.py",
    descripcion: `Crea una clase llamada Rectangulo que represente un rectángulo. La clase debe tener los siguientes atributos:
    
    - largo (float): El largo del rectángulo.
    - ancho (float): El ancho del rectángulo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, largo, ancho): Constructor para inicializar los atributos.
    - area(self): Método para calcular y retornar el área del rectángulo.
    - __str__(self): Método que retorna una cadena con la información del rectángulo en el siguiente formato: Rectangulo(largo: <largo>, ancho: <ancho>, area: <area>).`,
  },
  {
    id: "2",
    problema: "Gestionar una Cuenta Bancaria",
    tag: "encapsulamiento",
    dificultad: 1,
    test: "test2.py",
    descripcion: `Crea una clase llamada CuentaBancaria que represente una cuenta bancaria. La clase debe tener los siguientes atributos:

    - titular (str): El nombre del titular de la cuenta.
    - saldo (float): El saldo de la cuenta.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, titular, saldo): Constructor para inicializar los atributos.
    - depositar(self, cantidad): Método para depositar dinero en la cuenta.
    - retirar(self, cantidad): Método para retirar dinero de la cuenta.
    - __str__(self): Método que retorna una cadena con la información de la cuenta en el siguiente formato: CuentaBancaria(titular: <titular>, saldo: <saldo>).`,
  },
  {
    id: "3",
    problema: "Operaciones Matemáticas Básicas",
    tag: "polimorfismo",
    dificultad: 1,
    test: "test3.py",
    descripcion: `Crea una clase llamada OperacionMatematica que represente una operación matemática. La clase debe tener los siguientes métodos:

    - sumar(self, a, b): Método para sumar dos números.
    - restar(self, a, b): Método para restar dos números.
    - multiplicar(self, a, b): Método para multiplicar dos números.
    - dividir(self, a, b): Método para dividir dos números. Debe manejar el caso de división por cero.`,
  },
  {
    id: "4",
    problema: "Animales y sus Sonidos",
    tag: "herencia",
    dificultad: 1,
    test: "test4.py",
    descripcion: `Crea una clase base llamada Animal que tenga los siguientes métodos:

    - __init__(self, nombre): Constructor para inicializar el nombre del animal.
    - hacer_sonido(self): Método que debe ser sobrescrito por las clases derivadas para definir el sonido del animal.
    - __str__(self): Método que retorna una cadena con la información del animal en el siguiente formato: Animal(nombre: <nombre>).

    Luego, crea dos clases derivadas llamadas Perro y Gato que sobrescriban el método hacer_sonido para retornar "Guau" y "Miau" respectivamente.`,
  },
  {
    id: "5",
    problema: "Cálculo del Perímetro de un Rectángulo",
    tag: "abstraccion",
    dificultad: 1,
    test: "test5.py",
    descripcion: `Crea una clase llamada Rectangulo que represente un rectángulo. La clase debe tener los siguientes atributos:
    
    - largo (float): El largo del rectángulo.
    - ancho (float): El ancho del rectángulo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, largo, ancho): Constructor para inicializar los atributos.
    - perimetro(self): Método para calcular y retornar el perímetro del rectángulo.
    - __str__(self): Método que retorna una cadena con la información del rectángulo en el siguiente formato: Rectangulo(largo: <largo>, ancho: <ancho>, perimetro: <perimetro>).`,
  },
  {
    id: "6",
    problema: "Cálculo del Volumen de un Cubo",
    tag: "abstraccion",
    dificultad: 2,
    test: "test6.py",
    descripcion: `Crea una clase llamada Cubo que represente un cubo. La clase debe tener los siguientes atributos:
    
    - lado (float): El lado del cubo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, lado): Constructor para inicializar los atributos.
    - volumen(self): Método para calcular y retornar el volumen del cubo.
    - __str__(self): Método que retorna una cadena con la información del cubo en el siguiente formato: Cubo(lado: <lado>, volumen: <volumen>).`,
  },
  {
    id: "7",
    problema: "Representación de un Círculo",
    tag: "abstraccion",
    dificultad: 3,
    test: "test7.py",
    descripcion: `Crea una clase llamada Circulo que represente un círculo. La clase debe tener los siguientes atributos:
    
    - radio (float): El radio del círculo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, radio): Constructor para inicializar los atributos.
    - area(self): Método para calcular y retornar el área del círculo.
    - circunferencia(self): Método para calcular y retornar la circunferencia del círculo.
    - __str__(self): Método que retorna una cadena con la información del círculo en el siguiente formato: Circulo(radio: <radio>, area: <area>, circunferencia: <circunferencia>).`,
  },
  {
    id: "8",
    problema: "Representación de un Triángulo",
    tag: "abstraccion",
    dificultad: 4,
    test: "test8.py",
    descripcion: `Crea una clase llamada Triangulo que represente un triángulo. La clase debe tener los siguientes atributos:
    
    - base (float): La base del triángulo.
    - altura (float): La altura del triángulo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, base, altura): Constructor para inicializar los atributos.
    - area(self): Método para calcular y retornar el área del triángulo.
    - __str__(self): Método que retorna una cadena con la información del triángulo en el siguiente formato: Triangulo(base: <base>, altura: <altura>, area: <area>).`,
  },
  {
    id: "9",
    problema: "Representación de un Cilindro",
    tag: "abstraccion",
    dificultad: 5,
    test: "test9.py",
    descripcion: `Crea una clase llamada Cilindro que represente un cilindro. La clase debe tener los siguientes atributos:
    
    - radio (float): El radio del cilindro.
    - altura (float): La altura del cilindro.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, radio, altura): Constructor para inicializar los atributos.
    - volumen(self): Método para calcular y retornar el volumen del cilindro.
    - area_superficial(self): Método para calcular y retornar el área superficial del cilindro.
    - __str__(self): Método que retorna una cadena con la información del cilindro en el siguiente formato: Cilindro(radio: <radio>, altura: <altura>, volumen: <volumen>, area_superficial: <area_superficial>).`,
  },
  {
    id: "10",
    problema: "Gestión de una Cuenta de Ahorros",
    tag: "encapsulamiento",
    dificultad: 1,
    test: "test10.py",
    descripcion: `Crea una clase llamada CuentaAhorros que represente una cuenta de ahorros. La clase debe tener los siguientes atributos:

    - titular (str): El nombre del titular de la cuenta.
    - saldo (float): El saldo de la cuenta.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, titular, saldo): Constructor para inicializar los atributos.
    - depositar(self, cantidad): Método para depositar dinero en la cuenta.
    - retirar(self, cantidad): Método para retirar dinero de la cuenta.
    - __str__(self): Método que retorna una cadena con la información de la cuenta en el siguiente formato: CuentaAhorros(titular: <titular>, saldo: <saldo>).`,
  },
  {
    id: "11",
    problema: "Gestión de una Biblioteca",
    tag: "encapsulamiento",
    dificultad: 2,
    test: "test11.py",
    descripcion: `Crea una clase llamada Biblioteca que represente una biblioteca. La clase debe tener los siguientes atributos:

    - libros (list): Una lista de libros en la biblioteca.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, libros): Constructor para inicializar los atributos.
    - agregar_libro(self, libro): Método para agregar un libro a la biblioteca.
    - eliminar_libro(self, libro): Método para eliminar un libro de la biblioteca.
    - __str__(self): Método que retorna una cadena con la información de la biblioteca en el siguiente formato: Biblioteca(libros: <libros>).`,
  },
  {
    id: "12",
    problema: "Gestión de una Biblioteca con Disponibilidad",
    tag: "encapsulamiento",
    dificultad: 3,
    test: "test12.py",
    descripcion: `Crea una clase llamada Biblioteca que represente una biblioteca. La clase debe tener los siguientes atributos:

    - libros (dict): Un diccionario con el título del libro como clave y la disponibilidad como valor.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, libros): Constructor para inicializar los atributos.
    - agregar_libro(self, libro): Método para agregar un libro a la biblioteca con disponibilidad True.
    - eliminar_libro(self, libro): Método para eliminar un libro de la biblioteca.
    - prestar_libro(self, libro): Método para prestar un libro, cambiando su disponibilidad a False.
    - devolver_libro(self, libro): Método para devolver un libro, cambiando su disponibilidad a True.
    - __str__(self): Método que retorna una cadena con la información de la biblioteca en el siguiente formato: Biblioteca(libros: <libros>).`,
  },
  {
    id: "13",
    problema: "Gestión de una Playlist de Música",
    tag: "encapsulamiento",
    dificultad: 4,
    test: "test13.py",
    descripcion: `Crea una clase llamada Playlist que represente una lista de reproducción de música. La clase debe tener los siguientes atributos:

    - canciones (list): Una lista de canciones en la playlist.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, canciones): Constructor para inicializar los atributos.
    - agregar_cancion(self, cancion): Método para agregar una canción a la playlist.
    - eliminar_cancion(self, cancion): Método para eliminar una canción de la playlist.
    - mostrar_playlist(self): Método para mostrar todas las canciones de la playlist.
    - __str__(self): Método que retorna una cadena con la información de la playlist en el siguiente formato: Playlist(canciones: <canciones>).`,
  },
  {
    id: "14",
    problema: "Gestión de una Biblioteca con Detalles de Libro",
    tag: "encapsulamiento",
    dificultad: 5,
    test: "test14.py",
    descripcion: `Crea una clase llamada Libro que represente un libro con los siguientes atributos:
    
    - titulo (str): El título del libro.
    - autor (str): El autor del libro.
    - disponible (bool): La disponibilidad del libro.

    Luego, crea una clase llamada Biblioteca que represente una biblioteca con los siguientes atributos:
    
    - libros (dict): Un diccionario con el título del libro como clave y el objeto Libro como valor.

    La clase Biblioteca debe incluir los siguientes métodos:
    
    - __init__(self, libros): Constructor para inicializar los atributos.
    - agregar_libro(self, libro): Método para agregar un libro a la biblioteca.
    - eliminar_libro(self, titulo): Método para eliminar un libro de la biblioteca por título.
    - prestar_libro(self, titulo): Método para prestar un libro, cambiando su disponibilidad a False.
    - devolver_libro(self, titulo): Método para devolver un libro, cambiando su disponibilidad a True.
    - __str__(self): Método que retorna una cadena con la información de la biblioteca en el siguiente formato: Biblioteca(libros: <libros>).`,
  },
  {
    id: "15",
    problema: "Operaciones Matemáticas con Polimorfismo",
    tag: "polimorfismo",
    dificultad: 2,
    test: "test15.py",
    descripcion: `Crea una clase base llamada OperacionMatematica que tenga los siguientes métodos:

    - operar(self, a, b): Método abstracto que debe ser sobrescrito por las clases derivadas para realizar una operación matemática.

    Luego, crea tres clases derivadas llamadas Suma, Resta y Multiplicacion que sobrescriban el método operar para realizar la suma, resta y multiplicación respectivamente.`,
  },
  {
    id: "16",
    problema: "Animales y sus Movimientos",
    tag: "polimorfismo",
    dificultad: 3,
    test: "test16.py",
    descripcion: `Crea una clase base llamada Animal que tenga los siguientes métodos:

    - __init__(self, nombre): Constructor para inicializar el nombre del animal.
    - mover(self): Método abstracto que debe ser sobrescrito por las clases derivadas para definir el movimiento del animal.

    Luego, crea tres clases derivadas llamadas Perro, Pajaro y Pez que sobrescriban el método mover para retornar "corre", "vuela" y "nada" respectivamente.`,
  },
  {
    id: "17",
    problema: "Vehículos y sus Tipos",
    tag: "herencia",
    dificultad: 4,
    test: "test17.py",
    descripcion: `Crea una clase base llamada Vehiculo que tenga los siguientes atributos:

    - marca (str): La marca del vehículo.
    - modelo (str): El modelo del vehículo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, marca, modelo): Constructor para inicializar los atributos.
    - descripcion(self): Método abstracto que debe ser sobrescrito por las clases derivadas para retornar una descripción del vehículo.

    Luego, crea dos clases derivadas llamadas Coche y Moto que sobrescriban el método descripcion para retornar "Coche marca <marca> modelo <modelo>" y "Moto marca <marca> modelo <modelo>" respectivamente.`,
  },
  {
    id: "18",
    problema: "Gestión de Empleados y Clientes",
    tag: "herencia",
    dificultad: 5,
    test: "test18.py",
    descripcion: `Crea una clase base llamada Persona que tenga los siguientes atributos:

    - nombre (str): El nombre de la persona.
    - edad (int): La edad de la persona.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, edad): Constructor para inicializar los atributos.
    - descripcion(self): Método abstracto que debe ser sobrescrito por las clases derivadas para retornar una descripción de la persona.

    Luego, crea dos clases derivadas llamadas Empleado y Cliente que sobrescriban el método descripcion para retornar "Empleado: <nombre>, <edad> años" y "Cliente: <nombre>, <edad> años" respectivamente.`,
  },
  {
    id: "19",
    problema: "Cálculo de Perímetros de Figuras",
    tag: "abstraccion, polimorfismo",
    dificultad: 1,
    test: "test19.py",
    descripcion: `Crea una clase base llamada Figura que tenga los siguientes métodos:

    - perimetro(self): Método abstracto que debe ser sobrescrito por las clases derivadas para calcular el perímetro de la figura.

    Luego, crea dos clases derivadas llamadas Cuadrado y Triangulo que sobrescriban el método perimetro para retornar el perímetro de un cuadrado y un triángulo respectivamente.`,
  },
  {
    id: "20",
    problema: "Gestión de Inventarios de Productos",
    tag: "abstraccion, encapsulamiento",
    dificultad: 2,
    test: "test20.py",
    descripcion: `Crea una clase llamada Producto que represente un producto en un inventario. La clase debe tener los siguientes atributos:

    - nombre (str): El nombre del producto.
    - precio (float): El precio del producto.
    - cantidad (int): La cantidad disponible del producto.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, precio, cantidad): Constructor para inicializar los atributos.
    - actualizar_precio(self, nuevo_precio): Método para actualizar el precio del producto.
    - actualizar_cantidad(self, nueva_cantidad): Método para actualizar la cantidad del producto.
    - __str__(self): Método que retorna una cadena con la información del producto en el siguiente formato: Producto(nombre: <nombre>, precio: <precio>, cantidad: <cantidad>).

    Luego, crea una clase llamada Inventario que gestione múltiples productos. La clase debe tener los siguientes atributos y métodos:
    
    - productos (dict): Un diccionario que almacene los productos con el nombre del producto como clave.
    - agregar_producto(self, producto): Método para agregar un producto al inventario.
    - eliminar_producto(self, nombre_producto): Método para eliminar un producto del inventario por su nombre.
    - obtener_producto(self, nombre_producto): Método para obtener un producto del inventario por su nombre.
    - valor_total_inventario(self): Método que retorna el valor total de todos los productos en el inventario (precio * cantidad).`,
  },
  {
    id: "21",
    problema: "Gestión de Vehículos en un Estacionamiento",
    tag: "abstraccion, encapsulamiento, herencia",
    dificultad: 3,
    test: "test21.py",
    descripcion: `Crea una clase base llamada Vehiculo que tenga los siguientes atributos:

    - marca (str): La marca del vehículo.
    - modelo (str): El modelo del vehículo.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, marca, modelo): Constructor para inicializar los atributos.
    - __str__(self): Método que retorna una cadena con la información del vehículo en el siguiente formato: Vehiculo(marca: <marca>, modelo: <modelo>).

    Luego, crea dos clases derivadas llamadas Coche y Moto que añadan un atributo adicional:

    - Coche: numero_puertas (int)
    - Moto: cilindrada (int)

    También, crea una clase llamada Estacionamiento que gestione múltiples vehículos. La clase debe tener los siguientes atributos y métodos:

    - vehiculos (list): Una lista de vehículos en el estacionamiento.
    - agregar_vehiculo(self, vehiculo): Método para agregar un vehículo al estacionamiento.
    - eliminar_vehiculo(self, vehiculo): Método para eliminar un vehículo del estacionamiento.
    - mostrar_vehiculos(self): Método para mostrar todos los vehículos en el estacionamiento.`,
  },
  {
    id: "22",
    problema: "Gestión de una Tienda Online",
    tag: "abstraccion, encapsulamiento, polimorfismo",
    dificultad: 4,
    test: "test22.py",
    descripcion: `Crea una clase llamada Producto que represente un producto en una tienda online. La clase debe tener los siguientes atributos:

    - nombre (str): El nombre del producto.
    - precio (float): El precio del producto.
    - cantidad (int): La cantidad disponible del producto.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, precio, cantidad): Constructor para inicializar los atributos.
    - actualizar_precio(self, nuevo_precio): Método para actualizar el precio del producto.
    - actualizar_cantidad(self, nueva_cantidad): Método para actualizar la cantidad del producto.
    - __str__(self): Método que retorna una cadena con la información del producto en el siguiente formato: Producto(nombre: {nombre}, precio: {precio}, cantidad: {cantidad}).

    Luego, crea una clase llamada Tienda que gestione múltiples productos. La clase debe tener los siguientes atributos y métodos:
    
    - productos (dict): Un diccionario que almacene los productos con el nombre del producto como clave.
    - agregar_producto(self, producto): Método para agregar un producto a la tienda.
    - eliminar_producto(self, nombre_producto): Método para eliminar un producto de la tienda por su nombre.
    - obtener_producto(self, nombre_producto): Método para obtener un producto de la tienda por su nombre.
    - mostrar_productos(self): Método para mostrar todos los productos en la tienda.`,
  },
  {
    id: "23",
    problema: "Sistema de Gestión de una Biblioteca Avanzada",
    tag: "abstraccion, encapsulamiento, herencia, polimorfismo",
    dificultad: 5,
    test: "test23.py",
    descripcion: `Crea una clase base llamada ItemBiblioteca que tenga los siguientes atributos:

    - titulo (str): El título del ítem.
    - autor (str): El autor del ítem.
    - disponible (bool): La disponibilidad del ítem.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, titulo, autor): Constructor para inicializar los atributos.
    - prestar(self): Método para prestar el ítem, cambiando su disponibilidad a False.
    - devolver(self): Método para devolver el ítem, cambiando su disponibilidad a True.
    - descripcion(self): Método abstracto que debe ser sobrescrito por las clases derivadas para retornar una descripción del ítem.

    Luego, crea dos clases derivadas llamadas Libro y Revista que sobrescriban el método descripcion para retornar "Libro: <titulo> por <autor>" y "Revista: <titulo> por <autor>" respectivamente.

    También, crea una clase llamada Biblioteca que gestione múltiples ítems. La clase debe tener los siguientes atributos y métodos:
    
    - items (dict): Un diccionario que almacene los ítems con el título como clave.
    - agregar_item(self, item): Método para agregar un ítem a la biblioteca.
    - eliminar_item(self, titulo): Método para eliminar un ítem de la biblioteca por título.
    - mostrar_items(self): Método para mostrar todos los ítems en la biblioteca.`,
  },
  {
    id: "24",
    problema: "Gestión de una Lista de Compras",
    tag: "abstraccion, encapsulamiento",
    dificultad: 1,
    test: "test24.py",
    descripcion: `Crea una clase llamada Producto que represente un producto en una lista de compras. La clase debe tener los siguientes atributos:

    - nombre (str): El nombre del producto.
    - cantidad (int): La cantidad del producto.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, cantidad): Constructor para inicializar los atributos.
    - actualizar_cantidad(self, nueva_cantidad): Método para actualizar la cantidad del producto.
    - __str__(self): Método que retorna una cadena con la información del producto en el siguiente formato: Producto(nombre: {nombre}, cantidad: {cantidad}).

    Luego, crea una clase llamada ListaCompras que gestione múltiples productos. La clase debe tener los siguientes atributos y métodos:
    
    - productos (dict): Un diccionario que almacene los productos con el nombre del producto como clave.
    - agregar_producto(self, producto): Método para agregar un producto a la lista de compras.
    - eliminar_producto(self, nombre_producto): Método para eliminar un producto de la lista de compras por su nombre.
    - mostrar_productos(self): Método para mostrar todos los productos en la lista de compras.`,
  },
  {
    id: "25",
    problema: "Gestión de una Biblioteca con Categorías",
    tag: "abstraccion, encapsulamiento, herencia",
    dificultad: 2,
    test: "test25.py",
    descripcion: `Crea una clase base llamada ItemBiblioteca que tenga los siguientes atributos:

    - titulo (str): El título del ítem.
    - autor (str): El autor del ítem.
    - disponible (bool): La disponibilidad del ítem.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, titulo, autor): Constructor para inicializar los atributos.
    - prestar(self): Método para prestar el ítem, cambiando su disponibilidad a False.
    - devolver(self): Método para devolver el ítem, cambiando su disponibilidad a True.
    - __str__(self): Método que retorna una cadena con la información del ítem en el siguiente formato: ItemBiblioteca(titulo: {titulo}, autor: {autor}, disponible: {disponible}).

    Luego, crea dos clases derivadas llamadas Libro y Revista que añadan un atributo adicional:

    - Libro: numero_paginas (int)
    - Revista: edicion (int)

    También, crea una clase llamada Biblioteca que gestione múltiples ítems. La clase debe tener los siguientes atributos y métodos:
    
    - items (dict): Un diccionario que almacene los ítems con el título como clave.
    - agregar_item(self, item): Método para agregar un ítem a la biblioteca.
    - eliminar_item(self, titulo): Método para eliminar un ítem de la biblioteca por título.
    - mostrar_items(self): Método para mostrar todos los ítems en la biblioteca.`,
  },
  {
    id: "26",
    problema: "Sistema de Gestión de Cursos",
    tag: "abstraccion, encapsulamiento, herencia",
    dificultad: 3,
    test: "test26.py",
    descripcion: `Crea una clase base llamada Persona que tenga los siguientes atributos:

    - nombre (str): El nombre de la persona.
    - edad (int): La edad de la persona.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, edad): Constructor para inicializar los atributos.
    - __str__(self): Método que retorna una cadena con la información de la persona en el siguiente formato: Persona(nombre: {nombre}, edad: {edad}).

    Luego, crea dos clases derivadas llamadas Profesor y Estudiante que añadan un atributo adicional:

    - Profesor: salario (float)
    - Estudiante: matricula (float)

    También, crea una clase llamada Curso que gestione múltiples personas. La clase debe tener los siguientes atributos y métodos:
    
    - nombre (str): El nombre del curso.
    - personas (list): Una lista de personas (profesores y estudiantes) en el curso.
    - agregar_persona(self, persona): Método para agregar una persona al curso.
    - eliminar_persona(self, persona): Método para eliminar una persona del curso.
    - mostrar_personas(self): Método para mostrar todas las personas en el curso.`,
  },
  {
    id: "27",
    problema: "Sistema de Gestión de Empleados",
    tag: "abstraccion, encapsulamiento, herencia, polimorfismo",
    dificultad: 4,
    test: "test27.py",
    descripcion: `Crea una clase base llamada Persona que tenga los siguientes atributos:

    - nombre (str): El nombre de la persona.
    - edad (int): La edad de la persona.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, edad): Constructor para inicializar los atributos.
    - descripcion(self): Método abstracto que debe ser sobrescrito por las clases derivadas para retornar una descripción de la persona.

    Luego, crea dos clases derivadas llamadas Empleado y Cliente que sobrescriban el método descripcion para retornar "Empleado: {nombre}, {edad} años" y "Cliente: {nombre}, {edad} años" respectivamente.

    También, crea una clase llamada Empresa que gestione múltiples personas (empleados y clientes). La clase debe tener los siguientes atributos y métodos:
    
    - nombre (str): El nombre de la empresa.
    - personas (list): Una lista de personas en la empresa.
    - agregar_persona(self, persona): Método para agregar una persona a la empresa.
    - eliminar_persona(self, persona): Método para eliminar una persona de la empresa.
    - mostrar_personas(self): Método para mostrar todas las personas en la empresa.`,
  },
  {
    id: "28",
    problema: "Sistema de Gestión de Proyectos",
    tag: "abstraccion, encapsulamiento, herencia, polimorfismo",
    dificultad: 5,
    test: "test28.py",
    descripcion: `Crea una clase base llamada Persona que tenga los siguientes atributos:

    - nombre (str): El nombre de la persona.
    - edad (int): La edad de la persona.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, nombre, edad): Constructor para inicializar los atributos.
    - descripcion(self): Método abstracto que debe ser sobrescrito por las clases derivadas para retornar una descripción de la persona.

    Luego, crea dos clases derivadas llamadas Gerente y Desarrollador que sobrescriban el método descripcion para retornar "Gerente: {nombre}, {edad} años" y "Desarrollador: {nombre}, {edad} años" respectivamente.

    También, crea una clase llamada Proyecto que gestione múltiples personas (gerentes y desarrolladores). La clase debe tener los siguientes atributos y métodos:
    
    - nombre (str): El nombre del proyecto.
    - personas (list): Una lista de personas en el proyecto.
    - agregar_persona(self, persona): Método para agregar una persona al proyecto.
    - eliminar_persona(self, persona): Método para eliminar una persona del proyecto.
    - mostrar_personas(self): Método para mostrar todas las personas en el proyecto.`,
  },
  {
    id: "29",
    problema: "Gestión de una Lista de Tareas",
    tag: "abstraccion, encapsulamiento",
    dificultad: 1,
    test: "test29.py",
    descripcion: `Crea una clase llamada Tarea que represente una tarea en una lista de tareas. La clase debe tener los siguientes atributos:

    - descripcion (str): La descripción de la tarea.
    - completada (bool): Si la tarea está completada o no.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, descripcion): Constructor para inicializar los atributos.
    - marcar_completada(self): Método para marcar la tarea como completada.
    - __str__(self): Método que retorna una cadena con la información de la tarea en el siguiente formato: Tarea(descripcion: {descripcion}, completada: {completada}).

    Luego, crea una clase llamada ListaTareas que gestione múltiples tareas. La clase debe tener los siguientes atributos y métodos:
    
    - tareas (list): Una lista de tareas.
    - agregar_tarea(self, tarea): Método para agregar una tarea a la lista.
    - eliminar_tarea(self, tarea): Método para eliminar una tarea de la lista.
    - mostrar_tareas(self): Método para mostrar todas las tareas en la lista.`,
  },
  {
    id: "30",
    problema: "Gestión de una Biblioteca con Préstamos",
    tag: "encapsulamiento, herencia",
    dificultad: 3,
    test: "test30.py",
    descripcion: `Crea una clase llamada ItemBiblioteca que represente un ítem en la biblioteca con los siguientes atributos:
    
    - titulo (str): El título del ítem.
    - autor (str): El autor del ítem.
    - disponible (bool): La disponibilidad del ítem.

    La clase debe incluir los siguientes métodos:
    
    - __init__(self, titulo, autor): Constructor para inicializar los atributos.
    - prestar(self): Método para marcar el ítem como no disponible.
    - devolver(self): Método para marcar el ítem como disponible.
    - __str__(self): Método que retorna una cadena con la información del ítem en el siguiente formato: ItemBiblioteca(titulo: <titulo>, autor: <autor>, disponible: <disponible>).

    Luego, crea dos clases derivadas llamadas Libro y Revista que sobrescriban el método __str__ para incluir información adicional:
    
    - Libro debe incluir el atributo numero_paginas (int).
    - Revista debe incluir el atributo edicion (str).

    Además, crea una clase llamada Biblioteca que represente una biblioteca con los siguientes atributos:
    
    - items (dict): Un diccionario con el título del ítem como clave y el objeto ItemBiblioteca como valor.

    La clase Biblioteca debe incluir los siguientes métodos:
    
    - __init__(self): Constructor para inicializar los atributos.
    - agregar_item(self, item): Método para agregar un ítem a la biblioteca.
    - eliminar_item(self, titulo): Método para eliminar un ítem de la biblioteca por título.
    - mostrar_items(self): Método que retorna una lista con la información de todos los ítems en la biblioteca.`,
  },
];
