<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProvinceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Provinces list
        $provinces = [
            ["name" => "آذربایجان شرقی"],
            ["name" => "آذربایجان غربی"],
            ["name" => "اردبیل"],
            ["name" => "اصفهان"],
            ["name" => "البرز"],
            ["name" => "ایلام"],
            ["name" => "بوشهر"],
            ["name" => "تهران"],
            ["name" => "چهارمحال و بختیاری"],
            ["name" => "خراسان جنوبی"],
            ["name" => "خراسان رضوی"],
            ["name" => "خراسان شمالی"],
            ["name" => "خوزستان"],
            ["name" => "زنجان"],
            ["name" => "سمنان"],
            ["name" => "سیستان و بلوچستان"],
            ["name" => "فارس"],
            ["name" => "قزوین"],
            ["name" => "قم"],
            ["name" => "کردستان"],
            ["name" => "کرمان"],
            ["name" => "کرمانشاه"],
            ["name" => "کهگیلویه و بویراحمد"],
            ["name" => "گلستان"],
            ["name" => "لرستان"],
            ["name" => "گیلان"],
            ["name" => "مازندران"],
            ["name" => "مرکزی"],
            ["name" => "هرمزگان"],
            ["name" => "همدان"],
            ["name" => "یزد"],
        ];

        DB::table('provinces')->insert($provinces);
    }
}
