import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GetDataExp from './GetAll.jsx'
import DeleteEx from './Delete.jsx'
import UpdateExp from './update.jsx'
import AppEx from './Insert.jsx'
import GetAdmin from './GetAdmin.jsx'
import DeleteAdmin from './DeleteAdmin.jsx'
import UpdateEx from './UpdateAdmin.jsx'
import AppStaff from './Staff.jsx'
import AppExp from './SignUp.jsx'
import GetSignUp from './GetSignUp.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GetDataExp />
    <DeleteEx />
    <UpdateExp />
    <AppEx />
    <GetAdmin />
   <DeleteAdmin />
  <UpdateEx />
    <AppStaff />
    <AppExp />
    <GetSignUp />
  </React.StrictMode>,
)
