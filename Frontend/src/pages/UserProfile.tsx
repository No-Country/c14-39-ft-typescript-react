import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { CustomFlowbiteTheme, Tabs } from "flowbite-react"
import {
  EditProfileComponent,
  MatchHistoryComponent,
} from "../components/userProfile"
import { SectionTitle } from "../components/SectionTitle"

const customTabsTheme: CustomFlowbiteTheme["tab"] = {
  tablist: {
    base: "",
    styles: {
      fullWidth: "gap-2 grid grid-cols-2 grid-flow-col",
    },
    tabitem: {
      styles: {
        fullWidth: {
          base: "bg-white/60 rounded-2xl text-lg focus:ring-0 w-full ",
          active: {
            off: "",
            on: "bg-base-blue1 text-base-green2",
          },
        },
      },
    },
  },
}

const UserProfile = () => {
  const { user } = useContext(AuthContext)

  // const handleChangePassword = () => {
  //     activeComponent === 'changePassword' ? setActiveComponent('') : setActiveComponent('changePassword');
  // };

  return (
    <section className='min-h-screen wrapper bg-base-green1'>
      <SectionTitle title={`Bienvenido ${user?.name}`} />

      <div className='flex flex-col items-center gap-4 p-2 md:p-8 bg-white/60 rounded-3xl backdrop-blur-2xl'>
        <Tabs.Group
          theme={customTabsTheme}
          defaultValue='matchHistory'
          className='w-full'
          aria-label='Full width tabs'
          style='fullWidth'>
          <Tabs.Item
            title='Historial de Partidas'
            active>
            <MatchHistoryComponent />
          </Tabs.Item>
          <Tabs.Item title='Editar Perfil'>
            <EditProfileComponent />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </section>
  )
}

export default UserProfile
