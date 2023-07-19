import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {

    async index() {
        return {
            title: "Post 1",
        }
    }

    async store({request}: HttpContextContract) {
        return request.body()
    }
}
