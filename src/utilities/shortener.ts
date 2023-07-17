function Shortener (baseUrl: string){
     const table = baseUrl.slice(1);

     const notFound_1 = table[0].toUpperCase();
     const notFound_2 = table.slice(1);
     
     const name =  `${notFound_1 + notFound_2 }` === 'Users' ? 'User' : `${notFound_1 + notFound_2 }`

     return {
          Table : table,
          notFound : name
     }
}

export default Shortener;