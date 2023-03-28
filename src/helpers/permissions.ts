
// import { grantList } from "./roles";

// const mappings = new Map();

// //  map through the list for each role creat new map for it
// for(let i = 0; i < grantList.length; i++ ){
//     for(let key in  grantList[i]){
//     if(key === 'role'){
//             if(mappings.has(grantList[i][key])){
//                 mappings.get(grantList[i][key]).set(grantList[i]['action'], grantList[i]['resource'].split(', '))
//             }else{
//                 mappings.set( grantList[i][key], new Map([ [grantList[i]['action'], grantList[i]['resource'].split(', ') ] ]) )
//             }
//         }
//     }
// }

// const hasPermission = ({resource, role, action}) => {
//     if(!mappings.has(role)) return false

//     const mapping = mappings.get(role);
//     if(mapping.has(action)) return mapping.get(action).includes(resource)
// }

// const getResource = ({action, role}) => {
//     console.log(mappings)
//     if(mappings.has(role)){
//         return mappings.get(role).get(action);
//     }
// }

// export { hasPermission, getResource }