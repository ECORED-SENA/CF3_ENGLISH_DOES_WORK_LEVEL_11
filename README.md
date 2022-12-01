# **sena-base-2021 v6.2.1**

## **Enlace GitHubPages**

[https://ecored-sena.github.io/ECORED_TEMPLATE_REPO/](https://ecored-sena.github.io/ECORED_TEMPLATE_REPO/)

#

## **Configuración del proyecto**

### 1. Se recomienda trabajar con [vs-code](https://code.visualstudio.com/)

### 2. Instalar extención [EsLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### 3. Asegurarce que el repositorio tiene TODOS los archivos de la [BASE](https://github.com/ECORED-SENA/ECORED-BASE-2021)

### 4. Revisar que el archivo package.json en la línea ``"ecored-base-pkg": "*.*.*"`` tenga la [última versión](https://www.npmjs.com/package/ecored-base-pkg)

### 5. Instalación de dependencias

```
npm install
```
#
## **Desarrollo**

### Montaje de servidor local

```
npm run serve
```

### Compilación para la producción

```
npm run build
```

### Linteo y arreglo de sintaxis de archivos

```
npm run lint
```

#

## **Actualizar dist en GitHub Pages**

#### 1. Entrar al repositorio en GitHub

#### 2. Entrar a la pestaña "Actions"

#### 3. Seleccionar "Crear Dist" en "workflows"

#### 4. Hacer clik en "Run workflow"

#### 5. Asegurar que "branch" sea master

#### 6. Hacer clik "Run workflow

![instrucciones despues del primer push](src/assets/template/pasos.jpg 'Title')

#

## **Documentacion AOS**
[https://github.com/michalsnik/aos](https://github.com/michalsnik/aos)
