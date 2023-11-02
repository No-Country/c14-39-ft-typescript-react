import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button } from "../components/Button"
import {
  EditProfileComponent,
  MatchHistoryComponent,
} from "../components/userProfile"
import { SectionTitle } from "../components/SectionTitle"

const UserProfile = () => {
  const { user } = useContext(AuthContext)

  const [activeComponent, setActiveComponent] = useState("")

  const handleEditProfile = () => {
    activeComponent === "editProfile"
      ? setActiveComponent("")
      : setActiveComponent("editProfile")
  }

  // const handleChangePassword = () => {
  //     activeComponent === 'changePassword' ? setActiveComponent('') : setActiveComponent('changePassword');
  // };

  const handleMatchHistory = () => {
    activeComponent === "matchHistory"
      ? setActiveComponent("")
      : setActiveComponent("matchHistory")
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "editProfile":
        return <EditProfileComponent />
      // case 'changePassword':
      //     return <ChangePasswordComponent />;
      case "matchHistory":
        return <MatchHistoryComponent />
      default:
        return null // O un componente de bienvenida por defecto
    }
  }

  return (
    <section className='wrapper'>
      <SectionTitle title={`Bienvenido ${user?.name}`} />

      <div className='flex flex-col items-center gap-4 p-2 md:p-8 bg-white/60 rounded-3xl backdrop-blur-2xl'>
        <div className='flex justify-center gap-4'>
          {/* <p>Editar Perfil</p> */}
          <Button
            label='Editar Perfil'
            style='secondary'
            onClick={handleEditProfile}
          />
          {/* <p>Cambiar contraseña</p>
                        <Button onClick={handleChangePassword} /> */}
          {/* <p>Historial de Partidos</p> */}
          <Button
            label='Ver Historial'
            style='secondary'
            onClick={handleMatchHistory}
          />
        </div>
        <div>{renderComponent()}</div>
      </div>
    </section>
  )
}

export default UserProfile
