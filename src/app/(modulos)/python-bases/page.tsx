"use client";

import React from "react";
import { python } from "@codemirror/lang-python";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import Image from "next/image";
import {
  x1,
  x10,
  x11,
  x12,
  x13,
  x14,
  x15,
  x2,
  x3,
  x4,
  x5,
  x6,
  x7,
  x8,
  x9,
} from "./mockedData";

const Page = () => {
  return (
    <div className="w-[80%] flex flex-col gap-5">
      <h2 className="text-3xl font-bold">
        Conceptos de programación orientada a objetos de Python
      </h2>
      <p>
        La programación orientada a objetos es un concepto fundamental en
        Python, que permite a los desarrolladores crear aplicaciones modulares,
        mantenibles y escalables. Al comprender los principios básicos de la
        programación orientada a objetos (clases, objetos, herencia,
        encapsulación, polimorfismo y abstracción), los programadores pueden
        aprovechar todo el potencial de las capacidades de programación
        orientada a objetos de Python para diseñar soluciones elegantes y
        eficientes a problemas complejos.
      </p>
      <h2 className="text-3xl font-bold">
        ¿Qué es la programación orientada a objetos en Python? datos.
      </h2>
      <p>
        En Python, la programación orientada a objetos (POO) es un paradigma de
        programación que utiliza objetos y clases en la programación. Su
        objetivo es implementar entidades del mundo real como herencia,
        polimorfismos, encapsulación, etc. en la programación. El concepto
        principal de la programación orientada a objetos (OOP) o conceptos de
        oops en Python es vincular los datos y las funciones que funcionan
        juntos como una sola unidad para que ninguna otra parte del código pueda
        acceder a estos
      </p>
      <h2 className="text-3xl font-bold">Conceptos de POO en Python</h2>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>Conceptos de POO en Python</li>
        <li>Clase en Python</li>
        <li>Objetos en Python</li>
        <li>Polimorfismo en Python</li>
        <li>Encapsulación en Python</li>
        <li>Herencia en Python</li>
        <li>Abstracción de datos en Python</li>
      </ul>
      <h2 className="text-3xl font-bold">Clase de Python</h2>
      <p>
        Una clase es una colección de objetos. Una clase contiene los planos o
        el prototipo a partir del cual se crean los objetos. Es una entidad
        lógica que contiene algunos atributos y métodos.
      </p>
      <p>
        Para comprender la necesidad de crear una clase, consideremos un
        ejemplo: digamos que desea realizar un seguimiento de la cantidad de
        perros que pueden tener diferentes atributos como raza y edad. Si se
        utiliza una lista, el primer elemento podría ser la raza del perro,
        mientras que el segundo elemento podría representar su edad. Supongamos
        que hay 100 perros diferentes, entonces ¿cómo sabrías qué elemento se
        supone que es cuál? ¿Y si quisieras añadir otras propiedades a estos
        perros? A esto le falta organización y es la necesidad exacta de las
        clases.
      </p>
      <h1 className="text-xl font-bold">Algunos puntos sobre la clase Python:</h1>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>Las clases se crean mediante clase de palabra clave.</li>
        <li>Los atributos son las variables que pertenecen a una clase.</li>
        <li>Objetos en Python</li>
        <li>
          Los atributos siempre son públicos y se puede acceder a ellos mediante
          el operador punto (.). Ej.: Miclase.Miatributon
        </li>
      </ul>
      <h1 className="text-xl font-bold">Sintaxis de definición de clase:</h1>
      <CodeMirror
        theme="dark"
        value={x1}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <h1 className="text-xl font-bold">Creando una clase vacía en Python</h1>
      <p>
        En el ejemplo anterior, hemos creado una clase llamada Perro usando la
        palabra clave class.
      </p>
      <CodeMirror
        theme="dark"
        value={x2}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <h2 className="text-3xl font-bold">Objetos de Python</h2>
      <p>
        En la programación orientada a objetos de Python, el objeto es una
        entidad que tiene un estado y un comportamiento asociados. Puede ser
        cualquier objeto del mundo real, como un mouse, un teclado, una silla,
        una mesa, un bolígrafo, etc. Los números enteros, las cadenas, los
        números de punto flotante e incluso las matrices y los diccionarios son
        todos objetos. Más específicamente, cualquier número entero o cualquier
        cadena es un objeto. El número 12 es un objeto, la cadena &quot;Hola mundo&quot;
        es un objeto, una lista es un objeto que puede contener otros objetos,
        etc. Has estado usando objetos todo el tiempo y es posible que ni
        siquiera te des cuenta.
      </p>
      <h1 className="text-xl font-bold">Un objeto consta de:</h1>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>
          Estado: Está representado por los atributos de un objeto. También
          refleja las propiedades de un objeto.
        </li>
        <li>
          Comportamiento: Está representado por los métodos de un objeto.
          También refleja la respuesta de un objeto a otros objetos.
        </li>
        <li>
          Identidad: le da un nombre único a un objeto y permite que un objeto
          interactúe con otros objetos.
        </li>
      </ul>
      <p>
        Para comprender el estado, el comportamiento y la identidad, tomemos el
        ejemplo del perro de clase (explicado anteriormente).
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>La identidad puede considerarse como el nombre del perro.</li>
        <li>
          El estado o los atributos pueden considerarse como la raza, la edad o
          el color del perro.
        </li>
        <li>
          El comportamiento se puede considerar en función de si el perro está
          comiendo o durmiendo.
        </li>
      </ul>
      <h1 className="text-xl font-bold">Creando un objeto</h1>
      <p>
        Esto creará un objeto llamado obj de la clase Perro definida
        anteriormente. Antes de profundizar en los objetos y las clases,
        comprendamos algunas palabras clave básicas que se utilizarán al
        trabajar con objetos y clases.
      </p>
      <CodeMirror
        theme="dark"
        value={x3}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <h1 className="text-xl font-bold">El yo de Python</h1>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>
          1. Los métodos de clase deben tener un primer parámetro adicional en
          la definición del método. No damos un valor para este parámetro cuando
          llamamos al método, Python lo proporciona
        </li>
        <li>
          2. Si tenemos un método que no acepta argumentos, aún así tendremos
          que tener un argumento.
        </li>
        <li>
          3. Esto es similar a este puntero en C++ y esta referencia en Java.
        </li>
      </ul>
      <p>
        Cuando llamamos a un método de este objeto como myobject.method(arg1,
        arg2), Python lo convierte automáticamente en MyClass.method(myobject,
        arg1, arg2); de esto se trata el self especial.
      </p>
      <h1 className="text-xl font-bold">El método __init__ de Python</h1>
      <p>
        El método __init__ es similar a los constructores en C++ y Java. Se
        ejecuta tan pronto como se crea una instancia de un objeto de una clase.
        El método es útil para realizar cualquier inicialización que desee
        realizar con su objeto. Ahora definamos una clase y creemos algunos
        objetos usando el método self y __init__.
      </p>
      <h1 className="text-xl font-bold">Crear una clase y un objeto con atributos de clase e instancia</h1>
      <CodeMirror
        theme="dark"
        value={x4}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <CodeMirror
        theme="none"
        value={x5}
        extensions={[EditorView.editable.of(false)]}
      />
      <h1 className="text-xl font-bold">Creando clases y objetos con métodos.</h1>
      <p>Aquí, la clase The Dog se define con dos atributos:</p>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>
          attr1 es un atributo de clase establecido en el valor &quot;mamífero&quot;. Los
          atributos de clase son compartidos por todas las instancias de la
          clase.
        </li>
        <li>
          __init__ es un método especial (constructor) que inicializa una
          instancia de la clase Dog. Se necesitan dos parámetros: self (que se
          refiere a la instancia que se está creando) y nombre (que representa
          el nombre del perro). El parámetro de nombre se utiliza para asignar
          un atributo de nombre a cada instancia de Perro. El método hablar se
          define dentro de la clase Perro. Este método imprime una cadena que
          incluye el nombre de la instancia del perro.
        </li>
      </ul>
      <p>
        El código del controlador comienza creando dos instancias de la clase
        Perro: Rodger y Tommy. Se llama al método __init__ para que cada
        instancia inicialice sus atributos de nombre con los nombres
        proporcionados. El método hablar se llama en ambos casos (Rodger.speak()
        y Tommy.speak()), lo que hace que cada perro imprima una declaración con
        su nombre.
      </p>
      <CodeMirror
        theme="dark"
        value={x6}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <CodeMirror
        theme="none"
        value={x7}
        extensions={[EditorView.editable.of(false)]}
      />
      <h2 className="text-3xl font-bold">Herencia de Python</h2>
      <p>
        En la programación orientada a objetos de Python, la herencia es la
        capacidad de una clase de derivar o heredar las propiedades de otra
        clase. La clase que deriva las propiedades se denomina clase derivada o
        clase secundaria y la clase de la que se derivan las propiedades se
        denomina clase base o clase principal. Los beneficios de la herencia
        son:
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>Representa bien las relaciones del mundo real.</li>
        <li>
          Proporciona la reutilización de un código. No tenemos que escribir el
          mismo código una y otra vez. Además, nos permite agregar más funciones
          a una clase sin modificarla.
        </li>
        <li>
          Es de naturaleza transitiva, lo que significa que si la clase B hereda
          de otra clase A, entonces todas las subclases de B heredarían
          automáticamente de la clase A.
        </li>
      </ul>
      <h1 className="text-xl font-bold">Tipos de herencia</h1>
      <ul className="list-disc pl-5 flex flex-col gap-1">
        <li>
          Herencia única: la herencia de un solo nivel permite que una clase
          derivada herede características de una clase monoparental.
        </li>
        <li>
          Herencia multinivel: la herencia multinivel permite que una clase
          derivada herede propiedades de una clase principal inmediata que a su
          vez hereda propiedades de su clase principal.
        </li>
        <li>
          Herencia jerárquica: la herencia de nivel jerárquico permite que más
          de una clase derivada herede propiedades de una clase principal.
        </li>
        <li>
          Herencia múltiple: la herencia de múltiples niveles permite que una
          clase derivada herede propiedades de más de una clase base. Herencia
          en Python
        </li>
      </ul>
      <h1 className="text-xl font-bold">Inheritance in Python</h1>
      <p>
        In the above article, we have created two classes i.e. Person (parent
        class) and Employee (Child Class). The Employee class inherits from the
        Person class. We can use the methods of the person class through the
        employee class as seen in the display function in the above code. A
        child class can also modify the behavior of the parent class as seen
        through the details() method.
      </p>
      <CodeMirror
        theme="dark"
        value={x8}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <CodeMirror
        theme="none"
        value={x9}
        extensions={[EditorView.editable.of(false)]}
      />
      <h2 className="text-3xl font-bold">Polimorfismo de Python</h2>
      <p>
        En la programación Python orientada a objetos, el polimorfismo
        simplemente significa tener muchas formas. Por ejemplo, necesitamos
        determinar si una determinada especie de pájaro vuela o no, usando
        polimorfismo podemos hacerlo usando una sola función.
      </p>
      <h1 className="text-xl font-bold">Polimorfismo en Python</h1>
      <p>
        Este código demuestra el concepto de herencia de Python oops y anulación
        de métodos en las clases de Python. Muestra cómo las subclases pueden
        anular los métodos definidos en su clase principal para proporcionar un
        comportamiento específico y al mismo tiempo heredar otros métodos de la
        clase principal.
      </p>
      <CodeMirror
        theme="dark"
        value={x10}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <CodeMirror
        theme="none"
        value={x11}
        extensions={[EditorView.editable.of(false)]}
      />
      <h2 className="text-3xl font-bold">Encapsulación de Python</h2>
      <p>
        En la programación orientada a objetos de Python, la encapsulación es
        uno de los conceptos fundamentales en la programación orientada a
        objetos (POO). Describe la idea de empaquetar datos y los métodos que
        funcionan con datos dentro de una unidad. Esto impone restricciones al
        acceso directo a variables y métodos y puede evitar la modificación
        accidental de datos. Para evitar cambios accidentales, la variable de un
        objeto solo se puede cambiar mediante el método de un objeto. Ese tipo
        de variables se conocen como variables privadas.
      </p>
      <p>
        Una clase es un ejemplo de encapsulación, ya que encapsula todos los
        datos que son funciones miembro, variables, etc.
      </p>
      <Image src="asdf" alt="NO FOUND PILL" width={100} height={50}/>
      <h1 className="text-xl font-bold">Encapsulación en Python</h1>
      <p>
        En el ejemplo anterior, hemos creado la variable c como atributo
        privado. Ni siquiera podemos acceder a este atributo directamente y ni
        siquiera podemos cambiar su valor.
      </p>
      <CodeMirror
        theme="dark"
        value={x12}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <CodeMirror
        theme="none"
        value={x13}
        extensions={[EditorView.editable.of(false)]}
      />
      <h2 className="text-3xl font-bold">Abstracción de datos</h2>
      <p>
        It hides unnecessary code details from the user. Also, when we do not
        want to give out sensitive parts of our code implementation and this is
        where data abstraction came.
      </p>
      <h1 className="text-xl font-bold">Ocultación de datos</h1>
      <p>
        En Python, utilizamos doble guión bajo (o __) antes del nombre de los
        atributos y esos atributos no serán directamente visibles en el
        exterior.
      </p>
      <CodeMirror
        theme="dark"
        value={x14}
        extensions={[python(), EditorView.editable.of(false)]}
      />
      <CodeMirror
        theme="none"
        value={x15}
        extensions={[EditorView.editable.of(false)]}
      />
    </div>
  );
};

export default Page;
