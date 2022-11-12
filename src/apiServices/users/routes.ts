import express from '@awaitjs/express';
import controllers from './controllers';
import { redisMiddleware } from '../../middleware/cache';

const { getUsers, getUser, deleteUser, updateUser, createUser, postUserForBody } = controllers;
const router = express.Router();

/**
 * @swagger
 * paths:
 *  /stats:
 *    get:
 *      tags:
 *        - Mutants
 *      summary: Busqueda en base de datos.
 *      description: Exponer un servicio extra que devuelva un Json con las estadísticas de las verificaciones de ADN.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *             description: Ok
 *             schema:
 *              $ref: '#/components/schemas/Stats'
 *          500:
 *             description: Error en el servidor    
 */
router.getAsync('/', redisMiddleware, getUsers);

/**
 * @swagger
 * paths:
 *  /stats:
 *    get:
 *      tags:
 *        - Mutants
 *      summary: Busqueda en base de datos.
 *      description: Exponer un servicio extra que devuelva un Json con las estadísticas de las verificaciones de ADN.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *             description: Ok
 *             schema:
 *              $ref: '#/components/schemas/Stats'
 *          500:
 *             description: Error en el servidor    
 */
router.getAsync('/:id', getUser);

/**
 * @swagger
 * paths:
 *  /auth:
 *    post:
 *      parameters:
 *        - in: body
 *          name: isMutant
 *          required: true
 *          schema:
 *              $ref: '#/auth/login'
 *      tags:
 *        - Mutants
 *      summary: Validación y carga.
 *      description: Este endpoint para validación y carga de adn. si pasa la validacion retorna estado de respuesta '200||403' - 412 body del post con error.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *             description: OK
 *          403:
 *             description: Credentials validation.
 *          500:
 *             description: Error en el servidor    
 */
router.postAsync('/', createUser);

/**
 * @swagger
 * paths:
 *  /auth:
 *    post:
 *      parameters:
 *        - in: body
 *          name: isMutant
 *          required: true
 *          schema:
 *              $ref: '#/auth/login'
 *      tags:
 *        - Mutants
 *      summary: Validación y carga.
 *      description: Este endpoint para validación y carga de adn. si pasa la validacion retorna estado de respuesta '200||403' - 412 body del post con error.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *             description: OK
 *          403:
 *             description: Credentials validation.
 *          500:
 *             description: Error en el servidor    
 */
router.postAsync('/body', postUserForBody);

/**
 * @swagger
 * paths:
 *  /auth:
 *    post:
 *      parameters:
 *        - in: body
 *          name: isMutant
 *          required: true
 *          schema:
 *              $ref: '#/auth/login'
 *      tags:
 *        - Mutants
 *      summary: Validación y carga.
 *      description: Este endpoint para validación y carga de adn. si pasa la validacion retorna estado de respuesta '200||403' - 412 body del post con error.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *             description: OK
 *          403:
 *             description: Credentials validation.
 *          500:
 *             description: Error en el servidor    
 */
router.patchAsync('/:id', updateUser);

/**
 * @swagger
 * paths:
 *  /auth:
 *    post:
 *      parameters:
 *        - in: body
 *          name: isMutant
 *          required: true
 *          schema:
 *              $ref: '#/auth/login'
 *      tags:
 *        - Mutants
 *      summary: Validación y carga.
 *      description: Este endpoint para validación y carga de adn. si pasa la validacion retorna estado de respuesta '200||403' - 412 body del post con error.
 *      produces:
 *          - application/json
 *      responses:
 *          200:
 *             description: OK
 *          403:
 *             description: Credentials validation.
 *          500:
 *             description: Error en el servidor    
 */
router.deleteAsync('/:id', deleteUser);

export default router;
