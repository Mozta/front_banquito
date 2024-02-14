import React, { useEffect, useState } from 'react';
import { accountService } from '../services/accountService';

export const Accounts = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {º
    //     accountService.getAccounts()
    //         .then(data => setData(data))
    //         .catch(error => console.error('Error al cargar las cuentas:', error));
    // }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold text-red-400">
                Cuentas
            </h1>
            {/* <ul>
                {data && data.map((cuenta) => (
                    <li key={cuenta.id_cuenta}>Saldo: ${cuenta.saldo}</li>
                ))}
            </ul> */}
        </div>
    );
}