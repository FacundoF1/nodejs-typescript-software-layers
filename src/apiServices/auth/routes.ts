import express from 'express';
import controller from './controllers';

const { LoginHandler } = controller;
const router = express.Router();

/**
 * @swagger
 * paths:
 *  /auth:
 *    post:
 *      parameters:
 *        - in: body
 *          name: login
 *          required: true
 *          schema:
 *              $ref: '#/components/schemas/login'
 *      tags:
 *        - NTSL
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
router.post('/login', LoginHandler);

export default router;