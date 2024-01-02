# Organigrama Aerocivil

> [!IMPORTANT]
>
> Debes tener instalado
>
>[Node JS 20.8.1](https://nodejs.org/dist/v20.8.1/node-v20.8.1-x64.msi)
>[EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

> [!NOTE]
> 
> Pon este codigo en "configuracion" - busca "code actions on save" - editar settings.json y agrega este codigo, Para que al momento de guardar los cambios en Vscode se fuercen los cambios del Eslint
>
>```json
> "editor.codeActionsOnSave": {
>   "source.fixAll.eslint": true
> }
>```
>
>Recuerda que al ser un json puede que sea necesario una coma antes y/o despues de algun otro atributo 
>


## Clonar el proyecto

Para comenzar a trabajar en este proyecto, primero debes clonarlo en tu equipo. Puedes hacerlo ejecutando el siguiente comando en tu terminal:

```bash
git clone https://github.com/djgamertri/aerocivil.git
```

## Descargar ramas remotas

Si deseas obtener todas las ramas remotas disponibles en el repositorio, utiliza el comando:

```bash
git fetch origin
```
## Crear tu propia rama

Es importante que trabajes en tu propia rama para evitar conflictos con otros colaboradores. Puedes crear tu rama utilizando el siguiente comando. Asegúrate de elegir un nombre descriptivo que te identifique:

```bash
git checkout -b [Nombre de tu rama]
```
## Realizar cambios

Una vez que estés en tu rama, puedes realizar cambios en los archivos según sea necesario. Utiliza el siguiente comando para agregar los cambios al área de preparación:

```bash
git add [Archivo]
```

Si deseas agregar todos los cambios, puedes utilizar el comando:

```bash
git add .
```

Recuerda que el ``` Git add .``` solo se utiliza en cambios generales al final de todos los cambios especificos

## Confirmar cambios

Después de agregar los cambios al área de preparación, debes confirmarlos junto con un mensaje descriptivo que explique los cambios realizados. Esto se hace con el siguiente comando:

```bash
git commit -m "[Descripción de los cambios realizados en este commit]"
```
