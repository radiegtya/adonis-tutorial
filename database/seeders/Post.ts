import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class extends BaseSeeder {
  public static environment = ['development', 'testing']

  public async run () {
    await Post.createMany([
      {
        title: "Post from seeder 1",
      },
      {
        title: "Post from seeder 2",
      },
      {
        title: "Post from seeder 3"
      },
    ])
  }
}
