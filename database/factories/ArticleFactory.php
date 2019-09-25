<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Article::class, function (Faker $faker) {
    $title = $faker->title;
    return [
        'title' => $title,
        'slug' => Str::slug($title, '-'),
        'description' => $faker->text,
        'user_id' => 1,
    ];
});
