/// <reference path="./global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  console.log('@@@@@@@@@@new deploy - test logs @@@@@@@@@@')

  app.get('/test-marco', async (request, reply) => {
    app.log.info('test-marco')
    return 'MARCO'
  })
}
