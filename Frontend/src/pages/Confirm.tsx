import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/appcontext";

import { ROUTES } from "../data/consts";

import Stripes from "../components/stripes";
import { Button } from "../components/Button";
import SportCenterImage from "../SportCenterImage";
import instance from "../api/axios";
import { EmailDetails } from "../types/types";
import { AuthContext } from "../context/AuthContext";

const Confirm = () => {
  const navigate = useNavigate();

  const { bookingData } = useContext(AppContext);
  const {user} = useContext(AuthContext);
  const [order, setOrder] = useState({
    sc_name: "",
    camp_num: "",
    fecha: "",
    hora: "",
    precio: "",
  });
  console.log(user)

  const proveedor = bookingData?.cancha;

  useEffect(() => {

    const sendEmail = (emailDetails: EmailDetails) => {
      instance.post('/send-email/confirmation', emailDetails)
        .then(response => {
          console.log('Correo enviado', response.data);
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error);
        });
    };
    const fetchOrderAndSendEmail = () => {

      const queryString = window.location.search;
      const searchParams = new URLSearchParams(queryString);
      const paymentId = searchParams.get("payment_id");
  
      instance
        .get(`/order?id=${paymentId}`)
        .then(({ data: { order } }) => {
          setOrder({
            sc_name: order.sc_id.sc_name,
            camp_num: order.camp_id.sca_num,
            fecha: order.fecha,
            hora: order.hora,
            precio: order.precio,
          });
  
          const EmailDetails: EmailDetails = {
            toEmail: user?.email,
            subject: "Reserva realizada",
            html: `
            <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #333;
                }
                .container {
                  padding: 20px;
                  max-width: 600px;
                  margin: auto;
                  background-color: #f7f7f7;
                  border: 1px solid #dedede;
                  border-radius: 4px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .header {
                  background-color: #004d99;
                  color: white;
                  padding: 10px;
                  text-align: center;
                  border-radius: 4px 4px 0 0;
                }
                .content {
                  padding: 20px;
                  background: white;
                  border-radius: 0 0 4px 4px;
                }
                .footer {
                  margin-top: 20px;
                  text-align: center;
                  font-size: 12px;
                  color: #888;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Confirmación de Reserva</h1>
                </div>
                <div class="content">
                  <p>¡Hola <strong>${user?.name}</strong>, tu reserva ha sido realizada con éxito!</p>
                  <table>
                    <tr>
                      <td><strong>Lugar:</strong></td>
                      <td>${order.sc_id.sc_name}</td>
                    </tr>
                    <tr>
                      <td><strong>Cancha:</strong></td>
                      <td>Campo ${order.camp_id.sca_num}</td>
                    </tr>
                    <tr>
                      <td><strong>Fecha:</strong></td>
                      <td>${order.fecha.substring(0, 10)}</td>
                    </tr>
                    <tr>
                      <td><strong>Hora:</strong></td>
                      <td>${order.hora}:00</td>
                    </tr>
                    <tr>
                      <td><strong>Costo de la reserva:</strong></td>
                      <td>$${order.precio}</td>
                    </tr>
                  </table>
                  <p>El pago de tu reserva se ha realizado con éxito. Recuerda que puedes cancelar tu reserva hasta 24 horas antes de la fecha y hora programadas.</p>
                  <p>Te recomendamos llegar a la cancha al menos 15 minutos antes de la hora de inicio de tu reserva.</p>
                </div>
                <div class="footer">
                  Agradecemos tu reserva. <br>
                  Atentamente, <br>
                  El equipo de SportCenter
                </div>
              </div>
            </body>
          </html>
          `,
          };
          console.log(EmailDetails);
          sendEmail(EmailDetails);
        })
        .catch((error) => console.log(`${error}`));
    }
    fetchOrderAndSendEmail();
  }, [user]);

  return (
    <section
      className={`min-h-screen z-0 relative bg-top bg-base-green1  bg-fixed bg-cover pt-24 pb-12 -mt-24 flex flex-col justify-center gap-6 `}
    >
      <SportCenterImage imageUrl={`${proveedor?.sca_imgs[0]}`} />
      <Stripes />

      <article className="flex items-center py-0 font-body wrapper">
        <div className="flex flex-col gap-4 rounded-[2rem] md:w-1/2 ">
          <p className="text-4xl text-white font-display md:text-black">
            Tu reserva ha sido realizada!
          </p>

          <div className="flex flex-col gap-3 pb-6 px-0 pt0 rounded-[2rem] backdrop-filter backdrop-blur-[20px] bg-white/60">
            <div className="flex flex-col w-full gap-4 p-6 text-xl bg-white rounded-[2rem] shadow-sh-md">
              <p className="text-2xl font-bold">Información de la reserva:</p>

              <div className="flex flex-col gap-1">
                <p>Lugar: {order.sc_name}</p>
                <p>Cancha: Campo {order.camp_num}</p>
                <p>Fecha: {order.fecha.substring(0, 10)}</p>
                <p>Hora: {`${order?.hora}:00`}</p>
                {/* <p>Fecha: {bookingData?.fecha.getDate()}</p>
                <p>Hora: {`${bookingData?.hora}:00`}</p> */}
              </div>
            </div>
            <div className="flex flex-col gap-3 px-6">
              {/* <p>Costo de la reserva: {bookingData?.precio} USD</p> */}
              <p>Costo de la reserva: ${order.precio} </p>
              <p>Pago: Tu reserva ha sido pagada con éxito.</p>
              <p>
                Cancelación: Puedes cancelar tu reserva hasta 24 horas antes de
                la fecha y hora de la reserva.
              </p>
              <p>
                Asistencia: Te recomendamos llegar a la cancha al menos 15
                minutos antes de la hora de inicio de la reserva.
              </p>
            </div>
            <div className="flex items-center justify-center w-full p-4">
              <p className="text-2xl text-center font-display">
                Agradecemos tu reserva.
              </p>
            </div>
          </div>
          <div className="flex justify-center p-2.5">
            <Button
              style="primary"
              label="Volver al Home"
              onClick={() => navigate(ROUTES.HOME)}
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Confirm;
