
# Compra de Automóviles de Lujo

## Introducción
Nuestro proyecto consiste en una aplicación web para comprar automóviles de lujo. Nuestros usuarios pueden ver los diferentes autos que están disponibles. 
La ventaja es que al utilizar nuestra web podrás tener la oportunidad de visualizar ofertas y saber cuál es el auto con el menor precio, así optimiza sus finanzas.

## Estructura del Proyecto

### Página
- **Index.html**  
  [![Código](https://img.shields.io/badge/-Ver%20Código-blue)](###Códigos/###Index.html)

- **Db.php**  
  [![Código](https://img.shields.io/badge/-Ver%20Código-blue)](#db-php)

- **Validar.php**  
  [![Código](https://img.shields.io/badge/-Ver%20Código-blue)](#validar-php)

- **Home2.php**  
  [![Código](https://img.shields.io/badge/-Ver%20Código-blue)](#validar-php)


## CAPTURAS DE PANTALLA
Muestra de la interfaz al usuario.
### LOGGIN
<table>
  <tr>
    <td><img src="https://github.com/JesusSamano/Proyecto-Final/assets/113057832/090a3313-e36b-430a-a4c8-3d1181597930" alt="Captura de Pantalla 1" width="400"/></td>
    <td><img src="https://github.com/JesusSamano/Proyecto-Final/assets/113057832/cbbd648e-eb1b-409f-ae4c-95cf9151c09e" alt="Captura de Pantalla 2" width="400"/></td>
  </tr>
</table>

### Home
Esta es la parte que el usuario visualiza despues del el loggin
<table>
  <tr>
    <td><img src="https://github.com/JesusSamano/Proyecto-Final/assets/113057832/80fc9a0d-f9ce-4cea-a031-f598e067084a" alt="Captura de Pantalla 1" width="900"/></td>
      </tr>
</table>

### Función
Nuestra web funciona a través de boots, estos boots bajan o suben los precios de los autos, y otro boot te avisa cual es auto con más económico.

En la imagen de lado izquierdo se visualiza una ventana con los unos precios, la otra imagen del lado derecho los precios han bajado y una alerta del carro más económico  

<table>
  <tr>
    <td><img src="https://github.com/JesusSamano/Proyecto-Final/assets/113057832/80fc9a0d-f9ce-4cea-a031-f598e067084a" width="600"/></td>
    <td><img src="https://github.com/JesusSamano/Proyecto-Final/assets/113057832/9dbaded6-eaaf-4970-a975-51feb6f9c250" width="600"/></td>  
 </tr>
</table>

![image](https://github.com/JesusSamano/Proyecto-Final/assets/113057832/c816f3db-657c-4736-92b8-a180a6b0d4da)

Esto ayuda bastante a los clientes que tienen un presupuesto y ayuda a quién vende el auto para que este sea adquirido más rápido, con nosotros en ganar ganar. 


---

## Códigos

### Index.html
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
    <link rel="stylesheet" href="css/login.css">
```


### Db.php
```
<?php
$conexion=mysqli_connect("*******","*******","*******","*******")or die("error de conexion");
?>
```

### Validar.php
```
<?php
include('db.php');
$usuario=$_POST['usuario'];
$password=$_POST['password'];


$consulta="SELECT*FROM usuarios where usuario='$usuario' and password='$password'";
$resultado=mysqli_query($conexion,$consulta);

$filas=mysqli_num_rows($resultado);

if($filas){
  
    header("location:home2.php");

}else{
    ?>
    <?php
    include("index.html");

  ?>
  <h1 class="bad">ERROR DE AUTENTIFICACION</h1>
  <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);
```

### Home2.php
```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
        />
        <title>Carrillo</title>
        <link rel="stylesheet" href="styles.css" />

    </head>....(En esta version no se le muestra todo el codigo, para más información consulte la documentación)
```


