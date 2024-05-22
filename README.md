# TPN2-UNL
Realizado por Alan Lampert

Utilizamos xamp para levantar la web
![Recomendaciones](/src/recomendaciones.png)

Nos devuelve 200 el envio del form
![200 consulta](/src/200.jpg)

El Payload del mismo
![Payload](/src/payload2.jpg)


Se guardo el archivo iniciando con el apellido
![Archivo](/src/archivos.jpg)

Se guardo de forma secuencial
![Secuencia](/src/secuencia.jpg)

Agregamos borrado de campos + cartel más "bonito"
![Funciones](/src/funciones.png)


# Consigna

# Trabajo Practico Nro 2
El presente trabajo debe ser la continuacion del proyecto presentado para el TPN agrando lo siguiente:

# 1. Cookies
Utilizar cookies para contar cuantas veces se visito la pagina de su proyecto. En caso de ser la primera
vez, mostrar un cartel de bienvenida del estilo ej: ”Bienvenidos al mi pagina personal”

# 2. Página de contacto
Se solicita crear una página de contacto (contacto.php) en donde exista un formulario con los siguientes
campos:
- Nombre y Apellido
- Dirección
- Telefono
- e-mail
- Consulta
Tambien debe contener un boton que realice el envıo del formulario.

# 3. Validación
Implementar las funciones de validacion correspondientes para:
- Validacion de campo vacıo: TODOS los campos son obligatorios. No deben llegar campos vacios ()
o con espacio en blanco ().
- Validacion de tipo de datos: Se debe validar que los campos solo string no permita otro tipo de
formato. Igualmente los que son solo numeros (como el Telefono sin guiones). Tener en cuenta que hay
campos mixtos (aceptan caracteres y numeros)
- Validacion de Tamaño:
 El nombre y apellido no deben superar los 30 caracteres.
 La consulta no debe superar los 100 caracteres
 El e-mail no debe superar los 50 caracteres.
-Validacion de la informacion: El mail debe ser valido. Para esto se debe controlar:
 El string debe tener el caracter arroba (@).
 Debe tener un nombre de usuario previo al arroba (@).
 Debe tener un dominio aceptado luego del punto (.com, .gob, .edu).
Si el formulario no pasa alguno de estas validaciones se debe informar al usuario y no continuar hasta que
realice los cambios necesarios.

# 4. Guardado de la consulta
Cada vez que se realice una consulta (envıo de formulario) y pase las rutinas de validacion, guardar el
texto de la consulta en un archivo. El nombre de este archivo debe ser el apellido y nombre del usuario que
realiza la consulta (apellido-nombre).
En caso de existir el archivo de un determinado usuario, agregar al final de su contenido la ultima consulta
realizada.

# 5. Presentacion y Evaluacion
- Se debe comprimir la carpeta que incluya todo el sitio con sus respectivos scripts y estilos e un archivo
rar o zip con el siguiente formato de nombre:
[ApellidoAlumno]Tpn2ProgWeb.zip (Con corchetes incluidos)
Por ejemplo mi caso serıa:
[RissoLuis]Tpn2ProgWeb.zip
- El archivo se debe subir a la plataforma, en la tarea creada correspondiente. No se aceptan trabajos
por otro medio (emails, etc) ya que no permiten evaluar.
- Se debe respetar la fecha lımite establecida en la tarea. No se aceptaran trabajos posteriores a la fecha.
- La evaluacion consiste en 3 estados: Aprobado, Rehacer y Reprobado. Aprobado siginifica en carrera
de promocion. Rehacer es para tratar de llegar al Aprobado y Reprobado es cuando no se agotaron las
instancias anteriores.
- Cualquier duda se canalizara en el foro creado correspondiente.