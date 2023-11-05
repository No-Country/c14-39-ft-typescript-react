# [ReservaTuCampo](https://reservatucampo.vercel.app/)
<br/>
<p align="center">
  <strong>Video Presentación</strong><br>
  <br/>
  <a href="http://www.youtube.com/watch?v=Ibka5Rttp8s">
    <img src="http://img.youtube.com/vi/Ibka5Rttp8s/0.jpg" alt="Video presentación">
  </a>
</p>

## Descripción
ReservaTuCampo es una aplicación web que utiliza ReactTs para el frontend y está diseñada con Tailwind y componente de Flowbite. En el backend, se ha implementado una API REST para gestionar un sistema de reserva de turnos, utilizando MongoDB como base de datos.

```

### Pasarela de Pagos
Para la pasarela de pagos, utiliza el siguiente usuario y contraseña:
- Usuario: `TESTUSER1001042831`
- Contraseña: `bdEifn54TT`

```

## Features
- Sistema de reserva de turnos.
- Encriptacion de contraseña utilizando JsonWebToken.
- Rutas protegidas con validacion de cookies.
- Pasarela de pagos (Mercado Pago).
- Envio de email con confirmación de reserva.
- Historial de Reservas.
- Localizacion de Sportcamps con geolocalizacion.
- MongoDB utilizado como base de datos para almacenamiento de datos.
- Interfaz amigable y diseño responsive gracias a Tailwind, SweetAlert2 y Flowbite.

## Tecnologías
- Frontend: ReactTs
- Styling: Tailwind y Flowbite Components
- Backend: REST API (NodeTs and Express)
- Base de datos: MongoDB
- Documentacion: Swagger

## Despliegue
Para desplegar esta aplicación, se utilizan los siguientes recursos:

- **Frontend**: Vercel
- **Backend**: Vercel
- **Database**: MongoAtlas

#### TO-DO

| Features        | descripcion                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| Admin Dashboard |  Crear un perfil para los admin de los sportcamps para gestionar sus cancha  |
| Torneos         |  Implementar funcionalidad de torneos por establecimiento                    |
| Notificaciones  |  WebSocket para habilitar notificaciones en tiempo real a admins y users     |

