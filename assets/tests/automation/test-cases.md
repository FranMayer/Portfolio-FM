# Test Cases – Formulario de Contacto

## Objetivo
Validar que el formulario de contacto envía la información correctamente a través de GetForm.

## Casos de prueba

| ID  | Caso | Pasos | Datos | Resultado esperado | Estado |
|-----|------|-------|-------|---------------------|--------|
| TC01 | Envío exitoso con datos válidos | 1. Ingresar nombre válido<br>2. Ingresar email válido<br>3. Escribir mensaje<br>4. Hacer click en Enviar | Nombre: Franco<br>Email: test@mail.com<br>Mensaje: "Hola" | El formulario se envía, se muestra confirmación y llega al mail | |
| TC02 | Envío con campo vacío | 1. Dejar campo "Nombre" vacío<br>2. Completar email y mensaje<br>3. Click en Enviar | Email: test@mail.com<br>Mensaje: "Prueba" | El sistema muestra error indicando que falta el nombre | |
| TC03 | Email inválido | 1. Ingresar nombre válido<br>2. Poner email inválido (ej: "abc")<br>3. Escribir mensaje<br>4. Click en Enviar | Nombre: Franco<br>Email: abc<br>Mensaje: "Prueba" | El sistema muestra error de formato de email | |
| TC04 | Mensaje vacío | 1. Completar nombre y email válidos<br>2. Dejar mensaje vacío<br>3. Click en Enviar | Nombre: Franco<br>Email: test@mail.com | El sistema muestra error indicando que falta mensaje | |
