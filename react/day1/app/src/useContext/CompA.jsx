// import React from 'react'
// import CompB from './CompB'
// export const user = React.createContext()
// export const id = React.createContext()
// const CompA = () => {
//   return (
//     <div>
//         <user.Provider value={"Abhi"}>
//             <id.Provider value={"123"}>
//                 <CompB/>
//             </id.Provider>
//         </user.Provider>
//     </div>
//   )
// }

// export default CompA
import React from 'react'
import CompB from './CompB'
export let username = React.createContext()
export let id = React.createContext()
const CompA = () => {
  return (
    <div>
        <username.Provider value={"Rahul"}>
            <id.Provider value={"123"}>
                <CompB/>
                </id.Provider>
            
        </username.Provider>
    </div>
  )
}

export default CompA
