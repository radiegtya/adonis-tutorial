import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Post from 'App/Models/Post'
import { schema, rules } from '@ioc:Adonis/Core/Validator'


export default class PostsController {

    async index() {
        return await Post.query().preload('category')
    }

    async store({request}: HttpContextContract) {
        const newPostSchema = schema.create({
            title: schema.string(), 
            categoryId: schema.number.optional(),
            slug: schema.string([
                rules.unique({table: 'posts', column: 'slug'})
            ]) 
        })

        const payload = await request.validate({ schema: newPostSchema })

        return await Post.create(payload)
    }
}
