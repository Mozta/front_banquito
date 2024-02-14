import React from 'react'
import { accountService } from '../services/accountService'
import { Accounts } from './Accounts'

export const Dashboard = ({ onLogout }) => {
    return (
        <div>Bienvenido
            <h1 className="text-3xl font-bold underline text-red-400">
                Dashboard
            </h1>
            <div>
                <h2>
                    Cuentas
                </h2>
                <Accounts />
                <div>
                    <button onClick={accountService.getAccounts}>Get Accounts</button>
                </div>

                <button onClick={onLogout}>Logout</button>
            </div>

        </div>


    )
}
