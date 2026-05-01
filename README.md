Login y Regiister:

Para implementar el login y el rgister, he creado un contexto que contuviera las funciones con las llamadas a la api correspondientes a estas, y un proxy con una cookie de acceso y una restricción para no poder acceder a la ruta de home u otras autenticadas en caso de que no contemos con ella. 

También, almaceno en este contexto el token y el usuario para poder proveerlos al resto del proyecto y, por ejemplo, poder usar el valor el token para realizar el resto de llamadas a la api. El logout también lo he añadido a este contexto, solo elimina el token y la cookie de acceso.

Dentro de la carpeta app, he creado una ruta llamada authentification que contiene los formularios alternables de el login y el register, y las llamadas a las funciones del contexto.