import { type PropsWithChildren, type JSX } from "react"
import { LogoComponent } from '../components/logo_component/logo_component';
import { ButtonNavTextComponent } from '../components/button_component/button_nav_text_component';
import { useAuthContextHook } from '../contexts/auth_context_hook';

export const AppLayout = ({children} : PropsWithChildren): JSX.Element => {
  const { isLoggedIn, login, logout } = useAuthContextHook();

  return (
    <div className="w-full h-screen flex flex-col">
    <header className="bg-primary-500 h-[100px] p-10 flex items-center justify-between">
      <LogoComponent />
      {isLoggedIn
        ? <ButtonNavTextComponent
            onClick={logout}
            className="text-tertiary hover:text-tertiary-600 bg-secondary-500 hover:bg-secondary-400 text-font-bold py-2 px-4"
          >
            Logout
          </ButtonNavTextComponent>
        : <ButtonNavTextComponent
            onClick={login}
            className="text-white"
          >
            Login
          </ButtonNavTextComponent>
      }
    </header>
      {children}
    </div>
  )
}
