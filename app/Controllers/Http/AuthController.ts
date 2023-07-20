import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {

    async register({auth, request, response}: HttpContextContract){
        try {
            //get value from form
            const { email, password } = request.body()

            //create user
            const user = await  User.create({
                email,
                password
            })

            //get token and authenticate the user
            const token = await auth.use('api').attempt(email, password)
            
            //return detail obj user and the token
            return {
                user,
                token
            }
        } catch (error) {
            response.unauthorized('')
        }
    }

    async login({auth, request, response}: HttpContextContract){
        try {
            //get value from form
            const { email, password } = request.body()

            //get token and authenticate the user
            const token = await auth.use('api').attempt(email, password)
            
            //return detail obj user and the token
            return token
        } catch  {
            return response.unauthorized('Invalid Login')
        }
    }
}
