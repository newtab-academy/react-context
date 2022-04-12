import React, {createContext, useState} from 'react';

type UserType = {
    name: string;
    lastName: string;
    email: string;
};

//Limpar as props do contexto
type PropsUserContext = {
    state: UserType;
    setState: React.Dispatch<React.SetStateAction<UserType>>;
};

const DEFAULT_VALUE = {
    state: {
        name: "",
        lastName: "",
        email: "",
    },
    setState: () => {}, //Função de inicialização
};

const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC = ({children}) => {
    const [state, setState] = useState(DEFAULT_VALUE.state);
    const Context = UserContext.Provider;
    return (
        <Context value={{state, setState}}>
            {children}
        </Context>
    );
};

export { UserContextProvider };
export default UserContext;


/*
    ui => view
    controller.getuser
    controller.getCep
*/

/*
    ui => view
    controller.getuser
    controller.getCep
*/

/*
    ui => view
    controller.getuser
    controller.getCep
*/

/* controller => reatividade
    getUser = getUserRepository()
    getCep = getCepRepository()
*/

/* dados => consumo de servicos
    getUserRepository()
    getCepRepository()
*/





