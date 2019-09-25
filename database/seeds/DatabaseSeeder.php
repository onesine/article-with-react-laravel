<?php

use App\Article;
use App\Comment;
use App\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(Article::class, 20)->create();
        factory(User::class, 20)->create();
        factory(Comment::class, 20)->create();
    }
}
