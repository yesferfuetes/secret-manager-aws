# AWS Secrets Manager Environment Loader for NestJS

Este proyecto muestra cómo obtener variables de entorno (envs) de AWS Secrets Manager y utilizarlas en una aplicación NestJS. La aplicación se integra con AWS Secrets Manager para cargar de forma segura detalles de configuración confidenciales, como parámetros de conexión de base de datos, en la aplicación en tiempo de ejecución.

## Features

- Obtención de variables de entorno de AWS Secrets Manager.
- Uso de AWS SDK v3 (`@aws-sdk/client-secrets-manager`) para la recuperación segura de secretos.
- Carga de configuración mediante `ConfigModule` en NestJS.
- Conexión segura a base de datos utilizando secretos almacenados en AWS Secrets Manager.

## Requirements

Antes de poder ejecutar este proyecto, asegúrate de que tienes los siguientes prerrequisitos:

- Node.js v16 o superior
- NestJS CLI (`npm i -g @nestjs/cli`)
- Cuenta de AWS con acceso a AWS Secrets Manager
- Clave de acceso y clave secreta de AWS con permisos para leer desde Secrets Manager
- Docker (opcional, para base de datos local)

## Project Structure

- **`fetch-secrets.ts`**: Contiene la lógica para recuperar secretos de AWS Secrets Manager.
- **`secret-manager.config.ts`**: Carga secretos en el módulo de configuración.
- **`CustomConfigModule`**: Módulo que integra los secretos en la configuración global.
- **`DatabaseModule`**: Configura e inicializa la conexión a la base de datos utilizando los secretos obtenidos de AWS Secrets Manager.

## Environment Variables

Cree un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```bash
AWS_REGION="your-aws-region"
AWS_SECRET_NAME="your-secret-name"
AWS_ACCESS_KEY_ID="your-access-key-id"
AWS_SECRET_ACCESS_KEY="your-secret-access-key"
```
