export default {
  openapi: "3.0.0",
  info: {
    title: "NTSL",
    version: "1.1.0",
    description: "Documentation Api Restful",
    contact: {
      name: "Facundo Ferrari",
      email: "facundo.ferrarif@gmail.com",
      url: "https://github.com/FacundoF1/",
    },
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  tags: [
    {
      name: "Mutants",
    },
  ],
  components: {
    schemas: {
      dna: {
        type: "string",
        example: "AGSDFDSF",
        description: "Segmento del Adn",
      },
      Dna: {
        type: "object",
        properties: {
          dna: {
            type: "array",
            items: {
              $ref: "#/components/schemas/dna",
            },
          },
        },
      },
      Stats: {
        type: "object",
        properties: {
          count_mutant_dna: {
            type: "number",
            example: "0",
            description: "Total de mutantes validados y almacenados.",
          },
          count_human_dna: {
            type: "number",
            example: "0",
            description: "Total de humanos validados y almacenados.",
          },
          ratio: {
            type: "number",
            example: "0",
            description:
              "Estadísticas de las verificaciones de ADN. (count_mutant_dna/count_human_dna)",
          },
        },
      },
    },
  },
  paths: {
    "/mutant/": {
      post: {
        produces: ["application/json"],
        parameters: {
          in: "body",
          name: "isMutant",
          required: true,
          schema: { $ref: "#/components/schemas/Dna" },
        },
        tags: ["Mutants"],
        summary: "Validación y carga.",
        description:
          "Este endpoint para validación y carga de adn. si pasa la validacion retorna estado de respuesta 200||403 - 412 body del post con error.",
        responses: {
          "200": { description: "OK" },
          "403": { description: "Validación y almacenamiento humano." },
          "500": { description: "Error en el servidor" },
        },
      },
    },
    "/stats": {
      get: {
        tags: ["Mutants"],
        summary: "Busqueda en base de datos.",
        description:
          "Exponer un servicio extra que devuelva un Json con las estadísticas de las verificaciones de ADN.",
        produces: ["application/json"],
        responses: {
          "200": {
            description: "Ok",
            schema: { $ref: "#/components/schemas/Stats" },
          },
          "500": { description: "Error en el servidor" },
        },
      },
    },
  },
};
