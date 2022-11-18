import express from 'express';
import controllers from './controllers';
import { redisMiddleware } from '@middlewares/cache';

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
router.get('/', redisMiddleware, controllers.GetUsers);

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
router.get('/:id', redisMiddleware, controllers.GetUser);

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
router.post('/', controllers.CreateUser);

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
router.get('/:email', controllers.GetUserBy);

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
router.patch('/:id', controllers.UpdateUser);

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
router.delete('/:id', controllers.DeleteUser);

export default router;
