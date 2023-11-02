import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { NameInput, LastNameInput } from "../../components/form"
import { Button } from "../Button"
import { ROUTES } from "../../data/consts"
import { useForm } from "react-hook-form"
import { AuthContext, AuthContextData } from "../../context/AuthContext"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { UserContext } from "../../context/UserContext"
import { UserData } from "../../types/types"

interface IFormInput {
  name: string
  lastname: string
  password: string
}

export const EditProfileComponent: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<IFormInput>()
  const navigate = useNavigate()

  const { errors, setMessage, user, logout, setErrors } =
    useContext<AuthContextData>(AuthContext)
  const { updateUser, deleteUser } = useContext(UserContext)
  const [userUpdated, setUserUpdated] = useState<boolean>(false)

  const watchedName = watch("name")
  const watchedLastname = watch("lastname")
  const isSubmitDisabled = !watchedName && !watchedLastname

  const MySwal = withReactContent(Swal)

  // Identifica el mensaje de error para cada campo
  const nameError = errors.find(error => error.includes("nombre"))
  const lastnameError = errors.find(error => error.includes("apellido"))

  const onSubmit = async (data: IFormInput) => {
    try {
      const result = await MySwal.fire({
        title: "Seguro que quieres modificar tus datos?",
        icon: "warning",
        showCancelButton: true,

        confirmButtonText: "Sí",
        cancelButtonText: "No",
        customClass: {
          confirmButton: "custom-primary",
          cancelButton: "custom-secondary",
          popup: "custom-popup",
        },
      })
      if (result.isConfirmed) {
        data.name === "" ? (data.name = user?.name as string) : data.name
        data.lastname === ""
          ? (data.lastname = user?.lastname as string)
          : data.lastname
        const dataWithId = { ...data, id: user?.id }
        console.log(dataWithId)
        await updateUser(dataWithId)
        setUserUpdated(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // Comprueba si hay errores después de un tiempo definido
    const timer = setTimeout(() => {
      console.log(errors)
      if (errors.length === 0 && userUpdated) {
        MySwal.fire({
          icon: "success",
          title: `Cambios realizados correctamente`,
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            popup: "custom-popup",
          },
        })
        setMessage("")
        setErrors([])
        setUserUpdated(false)
        navigate(ROUTES.HOME)
      } else {
        setUserUpdated(false)
        setErrors([])
      }
    }, 1000)

    // Limpieza del timer si el componente se desmonta
    return () => clearTimeout(timer)
  }, [userUpdated])

  const handleDelete = async (user: UserData) => {
    const result = await MySwal.fire({
      title: "Seguro que quieres eliminar tu cuenta?",
      icon: "warning",
      showCancelButton: true,

      confirmButtonText: "Sí",
      cancelButtonText: "No",
      customClass: {
        confirmButton: "custom-primary",
        cancelButton: "custom-secondary",
        popup: "custom-popup",
      },
    })
    if (result.isConfirmed) {
      await deleteUser(user)
      logout()
      navigate(ROUTES.HOME)
      await MySwal.fire({
        icon: "success",
        title: "Cuenta eliminada correctamente",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
          popup: "custom-popup",
        },
      })
    }
  }

  return (
    <section className='wrapper'>
      <h1 className='mt-6 mb-6 text-3xl text-center font-display text-base-blue1'>
        Edita tu perfil
      </h1>
      <div className='max-w-3xl gap-8 mx-auto my-0'>
        <form
          onSubmit={handleSubmit(data => onSubmit(data))}
          className='flex flex-col grid-cols-2 gap-4 md:grid mb-7'>
          <NameInput
            register={register("name")}
            error={nameError}
          />

          <LastNameInput
            register={register("lastname")}
            error={lastnameError}
          />

          <Button
            label='Modificar datos'
            disabled={isSubmitDisabled}
            type='submit'
            style='secondary'
            override='w-full col-span-2'
          />
        </form>
      </div>
      <div className='max-w-3xl mx-auto my-0'>
        <Button
          label='Eliminar cuenta'
          style='secondary'
          override='w-full'
          onClick={() => handleDelete(user as UserData)}
        />
      </div>
    </section>
  )
}
