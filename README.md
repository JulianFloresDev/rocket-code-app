# Technical Challenge.
___
## Ejecución de la Aplicación

Para la visualización de la aplicación puede remitirse a la siguiente URL, desde la cual podrá ejecutar y probar el formulario solicitado.

[Proyecto deployado en Vercel]()

Para su ejecución en el entorno local, siga los siguientes pasos:

- ### Clone el repositorio desde la terminal.

```
git clone https://github.com/JulianFloresDev/rocket-code-app.git
```

- ### Descargue las dependencias necesarias:
```
cd rocket-code-app

npm install
```

- ### Ejecute el comando de desarrollo:
```
npm run dev
```

- ### Abra en su navegador la url:
```
http://localhost:5173
```
___

## Preguntas:
- ¿Por qué deberíamos utilizar ReactJS?
  - Entiendo que la popularidad del framework se desprende principalmente del hecho de que es una biblioteca que facilita el trabajo por componentes reutilizables, altamente escalables a gran escala, permitiendo tener mejor y mayor control a la hora de actualizar o detectar fallas. Además de su versatilidad y velocidad de ejecución a la hora de mostrar cambios en la UI gracias a su Virtual DOM.
  Y por último entiendo que la popularidad de la biblioteca se da por el crecimiento en la comunidad entera que la adopta y facilita la aplicación de soluciones a problemas comunes, ahorrando gran cantidad de tiempo a la hora de crear aplicaciones.

- ¿Qué es JSX?
  - JSX es la extensión que utiliza React para la escritura, permitiendo tener una notación intuitiva y clara de lo que se pretende crear a nivel de maquetación (HTML) interactuando directamente desde código Javascript.
  En base a mi experiencia, el desarrollo web moderno sería completamente engorroso de entender y escribir sin la ayuda de JSX, ya que estaríamos todo el rato escribiendo código super verboso e imperativo, cuando desde JSX, podemos resumirlo en una etiqueta que refleje lo que esperamos introducir a la UI.
- ¿Qué es un "estado"?
  - Un estado para React es una isntancia dentro del DOM Virtual que contiene información útil para el renderizado final de la UI para un determinado momento del ciclo de vida de la app o de un componente en particular. Por poner un ejemplo desde mi conocimiento de física y matemática, diría que es la información que se puede leer de un sistema en un momento dado del tiempo.
  - Un auto que se dezplace a 40km/h de izquierda a derecha sobre una calle, contiene una posición en cada instante de tiempo; esa posición puede traducirse en lo que se conoce como "estado" en react. Reflejando un cambio en su posición por cada instante de tiempo a raiz de su variable "velocidad"; que estaría indicando que su "posición" cambiará instante a instante.
- ¿Qué es una "función de flecha"?
  - Una función flecha es un tipo de notación para las funciones en JAvascript, introducido en el ECMASript 6, que según entiendo no tiene ninguna diferencia a nivel funcional, tan sólo es una cuestión de notación. Tiene algunos usos particulares como la facilidad en la notación de funciones autoinvocadas, que suelen ser mucho menos verbosas al notarse con funciones flecha; o funciones de retorno en una sola linea.
- ¿Para qué se utiliza "setState"?
  - Como mencionaba anteriormente el uso de "estados" en react es lo que aporta a las aplicaciones modernas su dinamismo característico. Pero es a través de la función que acompaña al "estado" lo que proporciona la información al Virtual Dom para que los cambios se rendericen en la UI. Es decir que a las llamadas funciones "setState" (setPosiciónDelAuto) son quienes le avisan al Virtual DOM que el estado de la aplicación cambió, es la función que ejecuta el cambio dentro del estado, para un determinado estado del ciclo de vida del componente o de la aplicación.
- ¿Qué son los "props"?
  - El conjunto de propiedades que recibe un componente, ya sea funcional o de clase, que se definen en el propio componente y deben pasarse a la hora de invocar la funcion o la clase cuando se pretende llamar al uso del componente. Son habitualmente utilizadas con el proposito de heredar propiedades de un componente "padre" a un componente "hijo".
- ¿NodeJS posee "subprocesos secundarios"?
  - A través de una rápida búsqueda en al web, acabo de descubrir que los tiene, y como pretendo ser completamente honesto con sutedes, es algo que desconocía ya que no me ha sido necesario a la hora de crear servidores para mis REST API. Pero si es algo que me genera una gran curiosidad.
- ¿Qué es un callback?
  - Un callback es una función que se envía como parámetro a otra función que se ejecuta una vez terminada la ejecución de la función contenedora del callback. Habitualmente se relaciona dicho concepto con el uso de asincronismo.
- ¿Qué es un "evento"?
  - Los eventos son herramientas que permiten que las aplciaciones web respondan a las interacciónes de los usuarios, permitiendo luego ejecutar código específico para cada acción. Un ejemplo muy típico es el uso de la tecla "esc" para cerrar ventanas de navegación emergentes, dicho "evento" (presionar "esc") es interpretado a través de un "escucha de eventos" o "eventListener" que se encargará de ejecutar el código de cierre o de fin de ciclo de vida del popup o la navegación emergente. Inclusive el más habitual acto de usar el mouse dentro de una web, esta relacionado fuertemente con el uso de eventos.
- ¿Cuál es la diferencia entre funciones de "bloqueo" y "no bloqueo"?
  - A la hora de que los navegadores interpretan el código de javascript, éstos crean el llamado "callstack" o "pila de llamados" que se resolverá en función del orden de llegada para todas aquellas funciones que se llamen de manera "sincrona", es decir que entonces si esperamos que una función sincrona nos devuelva su resultado; ésta estará bloqueando la callstack hasta su finalización; mientras que las funciones "asíncronas" son enviadas a otro "thread" a la espera de su resultado y el código no se bloqueará en la ejecución, y cuando la respuesta llegue para tal funcion "asincrona", se sumará a la callstack al final de las tareas en ejecución, permitiendo así que la lectura e interpretación del código sea en un continuo sin bloqueos de lectura; pero los tiempos de espera para la ejecución total siguen siendo los mismos, sólo que el programa puede continuar ejecutandose.
- ¿Diferencia entre RESTful y GraphQL?
  - En la arquitectura de Restful predomina el uso de endpoints para la comunicación entre el servidor y la aplicación cliente; desde los cuales las consultas son enviadas a una determinada URL para la obtención de la infomación requerida, mientras que GraphQL es un sistema de consulta que cambia el paradigma de REST, ya que proprone que desde una única consulta el usuario pueda traer toda la información requerida para la aplicación cliente, evitando la sobrecarga de peticiones y los tiempos de carga prolongados.