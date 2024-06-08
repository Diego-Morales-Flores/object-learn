export const preguntas = [
    {
      "pregunta": "¿Cuál es la diferencia entre una clase y un objeto?",
      "res1": "Son lo mismo.",
      "res2": "Una clase es un plano. Un objeto es la instancia concreta que se construye a partir del plano.",
      "res3": "Una clase tiene datos y un objeto no.",
      "res4": "Una clase tiene métodos y un objeto no.",
      "sol": 2
    },
    {
      "pregunta": "¿Cómo implementa Python los accesores?",
      "res1": "Utiliza prefijos. Un guion bajo, _, al comienzo del nombre indica que esta variable es protegida. Dos guiones bajos, __, hacen que la variable sea privada y generará una excepción si se asigna.",
      "res2": "Utiliza las palabras clave private y public.",
      "res3": "Todo en una clase de Python está oculto por defecto y debe exponerse agregando métodos que devuelvan los valores de las variables.",
      "res4": "Agrega el decorador @public o @private para hacer algo público o privado.",
      "sol": 1
    },
    {
      "pregunta": "Elige la mejor explicación que describe el parámetro self.",
      "res1": "Es un parámetro que se refiere a la instancia del objeto. También puedes usar this.",
      "res2": "El parámetro self se refiere a la clase subyacente del objeto.",
      "res3": "La única vez que se usa self es para referirse a los miembros del objeto, y se pasa como parámetro.",
      "res4": "El parámetro self se refiere a la instancia del objeto. Asignar a self significa que el atributo termina en la instancia del objeto.",
      "sol": 4
    },
    {
      "pregunta": "¿Cuál afirmación sobre la herencia en Python es correcta?",
      "res1": "La herencia permite que una clase use los métodos y propiedades de otra clase.",
      "res2": "La herencia permite que una clase herede los métodos y propiedades de otra clase.",
      "res3": "La herencia duplica los métodos y propiedades de otra clase.",
      "res4": "La herencia impide que una clase sea modificada.",
      "sol": 2
    },
    {
      "pregunta": "¿Cuál es el propósito del método __init__ en Python?",
      "res1": "Inicializa los atributos del objeto.",
      "res2": "Se utiliza para destruir el objeto.",
      "res3": "Se llama antes de que se cree el objeto.",
      "res4": "Se utiliza para comparar dos objetos.",
      "sol": 1
    },
    {
      "pregunta": "¿Cuál de las siguientes describe mejor la encapsulación?",
      "res1": "La encapsulación es el agrupamiento de datos y los métodos que operan sobre esos datos dentro de una unidad.",
      "res2": "La encapsulación es el ocultamiento de datos y métodos de otras clases.",
      "res3": "La encapsulación es la capacidad de diferentes clases para ser compuestas juntas.",
      "res4": "La encapsulación permite que una clase herede las propiedades de otra clase.",
      "sol": 1
    },
    {
      "pregunta": "¿Qué es el polimorfismo en Python?",
      "res1": "El polimorfismo permite que un objeto cambie su clase.",
      "res2": "El polimorfismo permite que los métodos hagan diferentes cosas según el objeto sobre el que actúan.",
      "res3": "El polimorfismo es la capacidad de heredar de múltiples clases.",
      "res4": "El polimorfismo es el ocultamiento de detalles de implementación de otras clases.",
      "sol": 2
    },
    {
      "pregunta": "¿Cuál de las siguientes afirmaciones sobre los métodos estáticos es verdadera?",
      "res1": "Los métodos estáticos no tienen acceso a variables o métodos de instancia.",
      "res2": "Los métodos estáticos pueden modificar variables de instancia.",
      "res3": "Los métodos estáticos deben tener al menos un parámetro.",
      "res4": "Los métodos estáticos se llaman usando una instancia de la clase.",
      "sol": 1
    },
    {
      "pregunta": "¿Qué es la sobrecarga de métodos en Python?",
      "res1": "La sobrecarga de métodos permite que múltiples métodos en una clase tengan el mismo nombre pero diferentes implementaciones.",
      "res2": "Python no soporta la sobrecarga de métodos.",
      "res3": "La sobrecarga de métodos es definir múltiples métodos con el mismo nombre pero diferentes tipos de retorno.",
      "res4": "La sobrecarga de métodos es usar el mismo nombre de método en diferentes clases.",
      "sol": 2
    },
    {
      "pregunta": "¿Qué hace el decorador @staticmethod?",
      "res1": "Define un método que no modifica la clase ni sus instancias.",
      "res2": "Define un método que puede modificar variables de clase.",
      "res3": "Define un método que puede modificar variables de instancia.",
      "res4": "Define un método que no puede ser llamado por instancias de clase.",
      "sol": 1
    },
    {
      "pregunta": "¿Cuál de las siguientes afirmaciones sobre el decorador @classmethod es verdadera?",
      "res1": "Define un método que puede modificar variables de clase pero no variables de instancia.",
      "res2": "Define un método que puede modificar variables de instancia pero no variables de clase.",
      "res3": "Define un método que no puede modificar ninguna variable.",
      "res4": "Define un método que debe ser llamado con una instancia de la clase.",
      "sol": 1
    },
    {
      "pregunta": "¿Qué significa la herencia en OOP?",
      "res1": "Una clase puede heredar atributos y métodos de otra clase.",
      "res2": "Una clase no puede usar métodos de otra clase.",
      "res3": "Una clase puede tener múltiples instancias.",
      "res4": "Una clase no puede ser extendida.",
      "sol": 1
    },
    {
      "pregunta": "¿Cuál es el propósito del método __str__ en Python?",
      "res1": "Devuelve una representación en cadena de un objeto.",
      "res2": "Inicializa los atributos del objeto.",
      "res3": "Compara dos objetos.",
      "res4": "Destruye el objeto.",
      "sol": 1
    },
    {
      "pregunta": "¿Cómo se crea una clase en Python?",
      "res1": "Usando la palabra clave class seguida del nombre de la clase.",
      "res2": "Usando la palabra clave def seguida del nombre de la clase.",
      "res3": "Usando la palabra clave create seguida del nombre de la clase.",
      "res4": "Usando la palabra clave new seguida del nombre de la clase.",
      "sol": 1
    },
    {
      "pregunta": "¿Cuál es el propósito de la función super() en Python?",
      "res1": "Impide que una clase sea heredada.",
      "res2": "Permite acceder a los métodos de una clase padre.",
      "res3": "Define un método como estático.",
      "res4": "Oculta los métodos de una clase padre.",
      "sol": 2
    },
    {
      "pregunta": "¿Cuál es la diferencia entre __str__ y __repr__ en Python?",
      "res1": "__str__ se usa para crear salidas para los usuarios finales, mientras que __repr__ se usa principalmente para depuración y desarrollo.",
      "res2": "__str__ se usa para depuración, mientras que __repr__ es para usuarios finales.",
      "res3": "Ambos métodos sirven para el mismo propósito.",
      "res4": "__str__ se usa para inicializar un objeto, mientras que __repr__ se usa para destruirlo.",
      "sol": 1
    },
    {
      "pregunta": "¿Cuál es el propósito de la declaración pass en Python?",
      "res1": "Termina un bucle.",
      "res2": "Es una operación nula; no sucede nada cuando se ejecuta.",
      "res3": "Genera una excepción.",
      "res4": "Crea una nueva instancia de una clase.",
      "sol": 2
    },
    {
      "pregunta": "¿Cómo defines un método privado en Python?",
      "res1": "Prefijando el nombre del método con dos guiones bajos.",
      "res2": "Prefijando el nombre del método con un guion bajo.",
      "res3": "Usando la palabra clave private.",
      "res4": "Usando la palabra clave protected.",
      "sol": 1
    },
    {
      "pregunta": "¿Qué es un destructor en Python?",
      "res1": "Un método llamado cuando un objeto es eliminado.",
      "res2": "Un método llamado cuando un objeto es creado.",
      "res3": "Un método que inicializa los atributos del objeto.",
      "res4": "Un método que compara dos objetos.",
      "sol": 1
    },
];
