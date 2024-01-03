export const treeData = {
  name: 'CEO',
  attributes: {
    imagen: 'ceo.png',
    rol: 'Director Ejecutivo'
  },
  children: [
    {
      name: 'Director de Operaciones',
      attributes: {
        imagen: 'director_operaciones.png',
        rol: 'Operaciones'
      },
      children: [
        {
          name: 'Gerente de Marketing',
          attributes: {
            imagen: 'gerente_marketing.png',
            rol: 'Marketing'
          }
        },
        {
          name: 'Gerente de Recursos Humanos',
          attributes: {
            imagen: 'gerente_rrhh.png',
            rol: 'Recursos Humanos'
          }
        },
        {
          name: 'Gerente de Tecnología',
          attributes: {
            imagen: 'gerente_tecnologia.png',
            rol: 'Tecnología'
          }
        }
      ]
    },
    {
      name: 'Director Financiero',
      attributes: {
        imagen: 'director_financiero.png',
        rol: 'Finanzas'
      }
    }
  ]
}
