import { Outlet } from "react-router-dom"
export default function AuthLayout() {
  return (
    <main className="max-w-4xl m-auto mt-10 md:mt-28 flex flex-col md:flex-row items-center">
      <img 
        src="../img/logo.svg" 
        alt="Imagen Logotipo" 
        className="max-w-xs mr-10"
      />

      <div className="w-full pr-10">
        <Outlet />
      </div>
    </main>
  )
}
